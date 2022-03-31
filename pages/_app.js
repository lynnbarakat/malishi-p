import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import GeneralContext from "./general-context";
import "../styles/globals.css";

axios.defaults.baseURL = "https://malishi-backend.hellotree.dev/api/fr";

function MyApp({ Component, pageProps, generalData }) {

  useEffect(() => {
    console.log(generalData);
  });
  return (
    <GeneralContext.Provider value={{ generalData }}>
      <Component {...pageProps} />
    </GeneralContext.Provider>
  );
}

export default MyApp;

MyApp.getInitialProps = async (ctx) => {
  let generalData = await axios.get("general");

  console.log(generalData.data);
  return { generalData: generalData.data };
};
