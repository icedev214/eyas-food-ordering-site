import { setPage } from "redux/slices/navigation";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

const CookiePolicy = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("cookie-policy"));
  }, [dispatch]);

  return <h1>Cookie Policy</h1>;
};

export default CookiePolicy;
