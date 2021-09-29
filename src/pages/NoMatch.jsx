import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <>
      <div className="max-w-lg sm:max-w-4xl mx-auto  flex flex-col justify-center min-h-screen">
        <h1 className="text-9xl text-center font-bold">404</h1>
        <small className="text-center">Try other url</small>
        <Link to="/" className="text-center text-amaranth-500 font-semibold">Go to Home</Link>
      </div>
    </>
  );
};
export default NoMatch;
