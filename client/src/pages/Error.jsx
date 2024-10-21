import { useRouteError } from "react-router-dom";

/**
 * A page component that will show up when users visit unaccessible routes
 */
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="text-3xl">Oops!</h1>
      <p>Page does not exist</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <a className="p-5 my-2 rounded-lg hover:bg-gray-300 bg-gray-200" href="/">Click here to go back home</a>
    </div>
  );
}