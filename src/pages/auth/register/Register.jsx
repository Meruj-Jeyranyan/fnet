import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Register = () => {
  const location = useLocation();

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (location.pathname === "/register") {
        event.preventDefault();
        event.returnValue = ""; // This triggers the default confirmation dialog.
      }
    };

    // Add the event listener for beforeunload
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [location.pathname]);

  return (
    <div>
      <h1>Register Page</h1>
      {/* Your registration form goes here */}
    </div>
  );
};

export default Register;
