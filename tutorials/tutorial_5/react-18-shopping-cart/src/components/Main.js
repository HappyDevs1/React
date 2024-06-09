export default function Main(props) {
  const { products } = props;
  return (
    <div className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((products) => {
          <div>{products.name}</div>
        })}
      </div>
    </div>
      );
}
