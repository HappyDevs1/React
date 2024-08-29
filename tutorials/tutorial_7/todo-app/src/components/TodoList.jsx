import React, { useState, useEffect } from "react";
import { addTodo, getTodos, db, auth } from "../firebase";
import { deleteDoc, updateDoc, doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editing, setEditing] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        fetchTodos(user.uid);
      } else {
        setCurrentUser(null);
        setTodos([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchTodos = async (userId) => {
    const fetchedTodos = await getTodos(userId);
    setTodos(fetchedTodos);
  };

  // Add a new todo
  const handleAddTodo = async () => {
    if (newTodo.trim() && currentUser) {
      const newTodoItem = { text: newTodo };
      await addTodo(currentUser.uid, newTodoItem);
      setTodos([...todos, { id: new Date().toISOString(), ...newTodoItem }]);
      setNewTodo("");
    }
  };

  // Delete a todo
  const handleDeleteTodo = async (id) => {
    if (currentUser) {
      await deleteDoc(doc(db, "users", currentUser.uid, "todos", id));
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  // Edit a todo
  const handleEditTodo = async (id) => {
    if (editingText.trim() && currentUser) {
      await updateDoc(doc(db, "users", currentUser.uid, "todos", id), { text: editingText });
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: editingText } : todo)));
      setEditing(null);
      setEditingText("");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editing === todo.id ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={() => handleEditTodo(todo.id)}>Save</button>
              </>
            ) : (
              <>
                <span>{todo.text}</span>
                <button
                  onClick={() => {
                    setEditing(todo.id);
                    setEditingText(todo.text);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
