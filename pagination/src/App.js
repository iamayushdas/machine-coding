import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState();
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectPageHandler = (selectedIndex) => {
    setPage(selectedIndex);
  };
  console.log(products);
  return (
    <div>
      {products?.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <span key={prod.id} className="products__single">
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {products?.length > 0 && (
        <div className="pagination">
          <span onClick={() => setPage((prevPage) => prevPage - 1)}>👈</span>
          {[...Array(products?.length / 10)].map((_, i) => {
            return (
              <span onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
            );
          })}
          <span onClick={() => setPage((prevPage) => prevPage + 1)}>👉</span>
        </div>
      )}
    </div>
  );
}

export default App;
