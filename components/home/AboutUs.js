import { useContext, Fragment } from "react";
import GeneralContext from "../../pages/general-context";
import Image from "next/image";
import Link from "next/dist/client/link";

const AboutUs = () => {
  const ctx = useContext(GeneralContext);

  const flexContent = (
    <div className="container-fluid pt-5 mt-5 px-0">
      <div className="d-flex flex-lg-row flex-column align-items-lg-center">
        <div className="ratio ratio-2x3-home">
          <img
            src={ctx.generalData.about_settings["about_malishi_image1"]}
            alt=""
            className="cover"
          />
        </div>
        <div className=" px-5 py-5">
          <div className="text-lg-start text-center">
            <h3 className="bold-font">
              {ctx.generalData.about_settings["about_malishi_title"]}
            </h3>
          </div>
          <p className="regular-font text-center text-lg-start">
            {ctx.generalData.about_settings["about_malishi_smalltext"]}
          </p>
          <div className="d-flex justify-content-lg-end justify-content-center align-items-center py-3">
            <Link href="/about-us">
              <button className="std-button">Lire La Suite</button>
            </Link>
          </div>
        </div>
        
          <div className="ratio ratio-1x1-home align-self-lg-center align-self-end">
            <img
              src={ctx.generalData.about_settings["about_malishi_image2"]}
              alt=""
              className="cover"
            />
          
        </div>
      </div>
    </div>
  );
  return (
    <Fragment>
      {/* <div className="container-fluid mt-5 pt-5">
      <div className="row d-flex align-items-center">
        <div className="col-lg-3 ps-0">
          <div className="ratio ratio-2x3-home">
            <img
              src={ctx.generalData.about_settings["about_malishi_image1"]}
              alt=""
              className="cover"
            />
          </div>
        </div>
        <div className="col-lg-6 p-5">
          <div className="text-lg-start text-center">
            <h3 className="bold-font">
              {ctx.generalData.about_settings["about_malishi_title"]}
            </h3>
          </div>
          <p className="regular-font text-center">
            {ctx.generalData.about_settings["about_malishi_smalltext"]}
          </p>
          <div className="d-flex justify-content-lg-end justify-content-center align-items-center py-3">
            <Link href="/about-us">
              <button className="std-button">Lire La Suite</button>
            </Link>
          </div>
        </div>
        <div className="col-lg-3 pe-0 d-flex justify-content-end">
          <div className="ratio ratio-1x1-home">
            <img
              src={ctx.generalData.about_settings["about_malishi_image2"]}
              alt=""
              className="cover"
            />
          </div>
        </div>
      </div>
    </div> */}
      {flexContent}
    </Fragment>
  );
};

export default AboutUs;
