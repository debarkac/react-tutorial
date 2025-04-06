import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      {console.log(error)}
      <h1>Something went wrong</h1>
      <h1>{error.data}</h1>
    </div>
  );
};

export default Error;
