import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import Footer from './Footer';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, getProducts } from "../firebase";

function ProductsList() {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (user) {
        try {
          const userProducts = await getProducts(user.uid);
          setProducts(userProducts);
        } catch (error) {
          console.error("Error fetching products: ", error);
        }
      }
    };

    fetchProducts();
  }, [user]);

  if (!user) {
    return <div>Please log in to view your products.</div>;
  }

  return (
    <div>
      <Layout loggedIn={true} />
      <div className="element-container">
        <h2>Your Products</h2>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductsList;
