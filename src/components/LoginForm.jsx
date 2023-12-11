import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
import { getUserData, isCredentialsValid } from "../helper";

function LoginForm() {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const [isValid, setIsValid] = useState(true);
  const [_, setUserData] = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full max-w-md bg-slate-50 border border-slate-200 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
        <form onSubmit={submitHandler} className="flex flex-col">
          <input
            ref={usernameInputRef}
            type="username"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Username"
          />
          <input
            ref={passwordInputRef}
            type="password"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Password"
          />
          {!isValid && (
            <div className="bg-red-200 rounded-sm p-2">
              <p className="text-xs">
                Invalid username or password. Please check your credentials and
                try again
              </p>
            </div>
          )}
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );

  function submitHandler(e) {
    e.preventDefault();

    const username = usernameInputRef.current.value;
    const password = usernameInputRef.current.value;
    const isValid = isCredentialsValid(username, password);

    if (!isValid) {
      setIsValid(false);
      setTimeout(() => setIsValid(true), 1500);
      return;
    }

    setUserData(getUserData(username));
    navigate("/", { replace: true });
  }
}

export default LoginForm;
