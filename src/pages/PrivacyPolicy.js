import { setPage } from "redux/slices/navigation";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("privacy-policy"));
  }, [dispatch]);

  return <h1>Privacy Policy</h1>;
};

export default PrivacyPolicy;
