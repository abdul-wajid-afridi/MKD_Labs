import React, { useContext, useEffect, useReducer } from "react";
import AppCard from "../components/AppCard";
import AppPagination from "../components/AppPagination";
import MkdSDK from "../utils/MkdSDK";

const reducer = (state, action) => {
  switch (action.type) {
    case "CURRENT_STATE":
      return {
        setCurrentPage: {
          currentPage: action.payload,
        },
      };
      break;

    default:
      break;
  }
};

const AdminDashboardPage = () => {
  const [state, dispatch] = useReducer(reducer, {
    currentPage: 1,
    numberOfPages: null,
    setCurrentPage: null,
  });
  const { currentPage, numberOfPages, setCurrentPage } = state;
  useEffect(() => {
    let sdk = new MkdSDK();
    sdk.callRestAPI({ payload: currentPage, method: "POST" });
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-black ">
        <AppCard name="test" />
        <AppPagination
          setCurrentPage={setCurrentPage}
          dispatch={dispatch}
          currentPage={currentPage}
          numberOfPages={numberOfPages}
        />
      </div>
    </>
  );
};

export default AdminDashboardPage;
