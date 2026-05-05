import UserCard from "./components/UserCard";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

export default function App() {
  return (
    <div>
      <h1>Практична 9</h1>

      <UserCard name="Іван" role="Student" />
      <UserCard name="Олена" role="Teacher" />

      <Counter />
      <Todo />
    </div>
  );
}