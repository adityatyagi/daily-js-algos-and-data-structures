import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  // you don't need to explicitly set error to `unknown`
  const error = useRouteError();
  let errorMessage: string;

  //https://reactrouter.com/en/main/utils/is-route-error-response
  if (isRouteErrorResponse(error)) {
    // When a response is thrown from an action or loader, it will be unwrapped into an ErrorResponse so that your component doesn't have to deal with the complexity of unwrapping it (which would require React state and effects to deal with the promise returned from res.json())
    // error is type `ErrorResponse`
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }
  return (
    <div id="error-page">
      <div
        id="error-page"
        className="flex flex-col gap-8 justify-center items-center h-screen"
      >
        <h1 className="text-4xl font-bold">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="text-slate-400">
          <i>{errorMessage}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
