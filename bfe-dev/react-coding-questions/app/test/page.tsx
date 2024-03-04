"use client";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

import React, { useEffect, useRef, useState } from "react";

function useCustomHook() {
  useEffect(() => {
    console.log("inside custom hook useEffect");

    return () => {
      console.log("cleanup of custom hook useEffect");
    };
  }, []);

  return "Custom Hook result";
}
const Page = () => {
  const [state, setState] = useState<User[]>([]);
  const abortControllerRef = useRef(new AbortController());
  useEffect(() => {
    let active = true;
    console.log("Component is mounted");

    async function getData() {
      // create a new abort controller for every new request
      const abortController = new AbortController();

      // update the global abort controller - to cancel on component unmount
      abortControllerRef.current = abortController;

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            signal: abortController.signal,
          },
        );

        // if the req. was NOT aborted
        if (!abortController.signal.aborted) {
          const data = await response.json();
          console.log("running setState hello");
          console.log("will run for the first time");
          console.log("🚀 ~ getData ~ data:", data);
          setState([...data]);
        }

        // if (active) {
        //   console.log("will run for the first time");
        //   console.log("🚀 ~ getData ~ data:", data);
        //   setState([...data]);
        // }
      } catch (error) {}
    }

    getData();

    // cleanup function to abort the current req. on component unmount
    return () => {
      console.log("Component is unmounted");
      active = false;
      abortControllerRef.current.abort();
    };
  }, []);

  useEffect(() => {
    console.log("Component is updated");
  }, [state]);

  return <p>Data: {state ? JSON.stringify(state) : "Loading..."}</p>;
};

export default Page;
