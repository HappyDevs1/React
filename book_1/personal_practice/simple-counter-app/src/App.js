import React, { useState, useEffect } from "react";

function App() {
  const[count, setCount] = useState(0);
  return (
    <div>
      <button>1</button>
      <button>2</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
