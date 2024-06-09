import Product from './Product';

export default function Main(props) {
  const { products } = props;
  return (
    <div className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => {
          return <Product key={product.id} product={product}></Product>
        })}
      </div>
    </div>
      );
}
