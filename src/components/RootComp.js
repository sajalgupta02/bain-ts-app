import React from "react";
import { Outlet } from "react-router-dom";
// import { Provider } from 'react-redux'
// import store from '../store/store'
// import ReusableStepper from "./ReusableStepper";

function RootComp() {
  return (
    // <Provider store={store}>
    <>
      {/* <ReusableStepper /> */}
      <Outlet />
    </>
    // </Provider>
  );
}

export default RootComp;
