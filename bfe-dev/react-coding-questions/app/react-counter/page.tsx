"use client";
import { useState } from "react";

export default function ReactCounter() {
  let [count, setCount] = useState(0);
  function increment() {
    setCount((count) => ++count);
  }

  function decrement() {
    setCount((count) => --count);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <div>
          <button
            data-testid="decrement-button"
            className="mb-3 block rounded bg-black p-3 text-white hover:opacity-80"
            onClick={decrement}
          >
            Decrement -
          </button>
          <button
            data-testid="increment-button"
            className="block rounded bg-black p-3 text-white hover:opacity-80"
            onClick={increment}
          >
            Increment +
          </button>
          <p>clicked: {count}</p>
        </div>
      </section>
    </main>
  );
}
