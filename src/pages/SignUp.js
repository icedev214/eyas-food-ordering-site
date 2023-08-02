import { setPage } from "redux/slices/navigation";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

const SignUp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("signup"));
  }, []);

  return <h1>Sign Up</h1>;
};

export default SignUp;
