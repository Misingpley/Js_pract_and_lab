import { useState } from "react";

export default function ProductCard({ title, price }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>{title}</h3>
      <p>{price} грн</p>
      <p>Куплено: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Купити
      </button>
    </div>
  );
}