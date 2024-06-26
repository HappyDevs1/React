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
      <Layout />
      <h2>Your Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.quantity} - ${product.price}
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default ProductsList;
