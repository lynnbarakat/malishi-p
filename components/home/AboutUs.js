import { useContext, Fragment } from "react";
import GeneralContext from "../../pages/general-context";
import Image from "next/image";
import Link from "next/dist/client/link";

const AboutUs = (props) => {
  const ctx = useContext(GeneralContext);

  return (
    <Fragment>
      <div className="container-fluid mt-5 pt-5">
        <div className="row d-flex align-items-center">
          <div className="col-lg-3 ps-0">
            <div className="ratio ratio-home-about1">
              <img
                src={ctx.generalData.about_settings["about_malishi_image1"]}
                alt=""
                className="cover"
              />
            </div>
          </div>
          <div className="col-lg-6 p-5">
            <div className="text-lg-start text-center">
              <h3 className="bold-font pb-lg-3">
                {props.title}
              </h3>
            </div>
            <p className="regular-font text-start">
              {props.text}
            </p>
            {props.button && <div className="d-flex justify-content-lg-end justify-content-center align-items-center pt-lg-3">
              <Link href="/about-us">
                <button className="std-button">Lire La Suite</button>
              </Link>
            </div>}
          </div>
          <div className="col-lg-3 pe-0 d-flex justify-content-end">
            <div className="ratio ratio-home-about2">
              <img
                src={ctx.generalData.about_settings["about_malishi_image2"]}
                alt=""
                className="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;
