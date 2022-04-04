import Layout from "../components/general/Layout";
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
    <Layout
      title={ctx.generalData.home_settings["malishi_title"]}
      text={ctx.generalData.home_settings["malishi_description"]}
      image={ctx.generalData.home_header_list}
    >
      <Impact />
      <AboutUs
        title={ctx.generalData.about_settings["about_malishi_title"]}
        text={ctx.generalData.about_settings["about_malishi_smalltext"]}
        button={true}
      />
      <Network />
      <Partners />
      <Actuality />
    </Layout>
  );
}
export default Home;
