import React, { useEffect, useState } from "react";

const Section = () => {
  let [products, setProducts] = useState([]);
  let [error, setError] = useState();
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((abc) => abc.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Not Found a page");
        setIsLoading(false);
      });
  });

  return (
    <section className="carts">
      {isLoading && <h1> Loading.... </h1>}
      {error && <h1> {error} </h1>}
      {products.length !== 0 &&
        products.map((product) => (
          <div key={product.id} className="cart">
            <article>
              <h1> {product.title} </h1>
              <p> {product.description} </p>
            </article>
            <h6> {product.price} </h6>
          </div>
        ))}
    </section>
  );
};

export default Section;
