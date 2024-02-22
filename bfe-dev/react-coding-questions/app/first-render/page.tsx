"use client";
import { useEffect, useRef, useState } from "react";

// tells if it was the first render
function useFirstRender() {
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    // will not cause a second render
    isFirstRenderRef.current = false;
  }, []);
  return isFirstRenderRef.current;
}
export default function FirstRender() {
  const isFirstRender = useFirstRender();
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{isFirstRender ? "Is first render" : "is not first render"}</h1>;
      <button onClick={() => setCount((count) => count + 1)}>
        Count {count}
      </button>
    </>
  );
}
