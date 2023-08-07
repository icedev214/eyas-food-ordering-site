import { setPage } from "redux/slices/navigation";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

const TermsOfUse = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("terms-of-use"));
  }, [dispatch]);

  return <h1>Terms of Use</h1>;
};

export default TermsOfUse;
