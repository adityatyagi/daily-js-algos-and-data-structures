"use client";
import { useEffect, useRef, useState } from "react";

// get previous value of props/state
function usePrevious<T>(value: T): T | undefined {
  // using useRef as a generic
  const ref = useRef<T>();

  // Store current value in ref
  // the effect RUNS AFTER the INITIAL RENDER and everytime the value changes
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}
export default function Home() {
  const [state, setState] = useState(0);
  const previousValue = usePrevious(state);
  const update = () => {
    setState((s) => s + 1);
  };
  return (
    <>
      <div>Use Previous Hook</div>
      <button onClick={update}>Update</button>
      <div>The previous value: {previousValue}</div>
      <div>The current value: {state}</div>
    </>
  );
}
