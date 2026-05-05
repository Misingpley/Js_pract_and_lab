import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export default function App() {
  return (
    <div>
      <h1>Практична 8</h1>

      {products.map(p => (
        <ProductCard key={p.id} {...p} />
      ))}
    </div>
  );
}