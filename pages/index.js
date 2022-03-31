import Footer from "../components/general/Footer";
import Layout from "../components/general/Layout";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import react from "react";
import GeneralContext from "./general-context";
import { useContext } from "react";
import Impact from "../components/home/Impact";
import AboutUs from "../components/home/AboutUs";
import Network from "../components/home/Network";
import Partners from "../components/home/Partners";
import Actuality from "../components/home/Actuality";

function Home() {
  const ctx = useContext(GeneralContext);
  console.log(ctx);
  return (
    <Layout>
      <Impact />
      <AboutUs />
      <Network />
      <Partners />
      <Actuality />
    </Layout>
  );
}
export default Home;
