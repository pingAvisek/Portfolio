import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found container text-center h-[60vh] flex justify-center items-center flex-col">
      <h1 className="uppercase font-bold text-3xl mb-0 py-5 text-primary-700">
        Page not found!
      </h1>
      <p className="mb-4">Seems you are lost somewhere.</p>
      <p className="mb-4">
        Go to the{" "}
        <NavLink to="/" className="text-primary-700 font-medium uppercase ">
          Homepage.
        </NavLink>
      </p>
    </div>
  );
}
