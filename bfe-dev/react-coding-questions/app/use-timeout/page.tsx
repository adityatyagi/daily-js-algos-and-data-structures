"use client";
import React, { useEffect, useRef, useState } from "react";

// example of custom hook for checking if the user is online or offline
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
}

// https://github.com/jkomyno/usetimeout-react-hook/blob/master/src/useTimeout.ts
function useTimeout(callback: Function, delay: number) {
  const timeoutRef = useRef<NodeJS.Timeout | number | null>(null);
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    const currentCallback = () => savedCallback.current();
    timeoutRef.current = setTimeout(currentCallback, delay);
    return () => clearTimeout(timeoutRef.current as NodeJS.Timeout);
  }, [delay]);
  return timeoutRef;
}

export default function Home() {
  // const isOnline = useOnlineStatus();

  const [delay, setDelay] = useState(3000);
  const [hasTimeElapsed, setHasTimeElapsed] = React.useState(false);
  const [callback, setCallback] = useState<Function>(() => {
    return () => {
      console.log("initial callback");
      setHasTimeElapsed(true);
    };
  });

  useTimeout(callback, delay);

  function updateCallback() {
    setCallback(() => {
      return () => {
        console.log("Updated callback");
        setHasTimeElapsed(true);
      };
    });
  }

  return (
    <main className="min-h-screen bg-slate-200 p-24">
      <h1 className="my-6">Custom React Hook</h1>
      <div className="flex flex-col gap-3">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={updateCallback}
        >
          Change Callback
        </button>
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => {
            setDelay(Math.floor(Math.random() * (5 - 1 + 1) + 1) * 1000);
          }}
        >
          Change Delay
        </button>
      </div>
      <div>
        {hasTimeElapsed ? "5 seconds has passed!" : "The timer is running…"}
      </div>
      {/* {<h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>} */}
    </main>
  );
}
