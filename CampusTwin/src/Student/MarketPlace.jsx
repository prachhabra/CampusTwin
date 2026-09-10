import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Engineering Calculator",
    price: 450,
    seller: "Rahul",
  },
  {
    id: 2,
    name: "DBMS Book",
    price: 250,
    seller: "Ananya",
  },
  {
    id: 3,
    name: "College Hoodie",
    price: 700,
    seller: "Arjun",
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: 500,
    seller: "Neha",
  },
];

export default function Marketplace() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Student Marketplace</h1>
          <p>Buy and sell products within the campus.</p>
        </div>
      </div>

      <div className="card">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          style={{
            width: "100%",
            padding: "12px",
            boxSizing: "border-box",
          }}
        />
      </div>

      <div className="dashboard-grid">
        {filteredProducts.map((product) => (
          <div className="card" key={product.id}>
            <div
              style={{
                fontSize: "45px",
                textAlign: "center",
              }}
            >
              📦
            </div>

            <h2>{product.name}</h2>

            <h3>₹{product.price}</h3>

            <p>Seller: {product.seller}</p>

            <button
              onClick={() =>
                alert(`Interested in ${product.name}`)
              }
              style={{
                padding: "10px 18px",
                border: "none",
                borderRadius: "8px",
                background: "#4f46e5",
                color: "white",
              }}
            >
              Contact Seller
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
