import { setPage } from "redux/slices/navigation";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Location = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("location"));
  }, []);
};

export default Location;
