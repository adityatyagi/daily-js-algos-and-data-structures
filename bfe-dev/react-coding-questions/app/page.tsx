"use client";
import Link from "next/link";
export default function Home() {
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
        <Link
          href="/first-render"
          className="mb-3 block rounded bg-black p-3 text-white hover:opacity-80"
        >
          firstRender hook
        </Link>
        <Link
          href="/use-swr"
          className="mb-3 block rounded bg-black p-3 text-white hover:opacity-80"
        >
          useSwr hook
        </Link>
        <Link
          href="/use-previous"
          className="mb-3 block rounded bg-black p-3 text-white hover:opacity-80"
        >
          usePrevious hook
        </Link>
      </section>

      <section id="mcr" className="mt-20">
        <h1 className="my-6 text-3xl">Machine Coding Round</h1>
        <Link
          href="/quiz-app"
          className="mb-3 block rounded bg-black p-3 text-white hover:opacity-80"
        >
          quiz app
        </Link>
      </section>
    </main>
  );
}
