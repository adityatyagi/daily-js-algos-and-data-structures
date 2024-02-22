"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  let [count, setCount] = useState(0);
  function increment() {
    setCount(++count);
  }

  function decrement() {
    setCount(--count);
  }
  return (
    <main className="min-h-screen p-24">
      <section id="hero">
        <h1 className="my-6 text-3xl">BFE.DEV React Coding Questions</h1>
      </section>
      <section>
        <Link
          href="/react-counter"
          className="mb-3 block rounded bg-black p-3 text-white hover:opacity-80"
        >
          React Counter
        </Link>
        <Link
          href="/use-timeout"
          className="mb-3 block rounded bg-black p-3 text-white hover:opacity-80"
        >
          useTimeout Hook
        </Link>
      </section>
    </main>
  );
}
