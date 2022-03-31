import Image from "next/dist/client/image";
import logo from "../../Asssets/logo-white.svg";
import { useContext } from "react";
import GeneralContext from "../../pages/general-context";

const Footer = () => {
  const ctx = useContext(GeneralContext);
  return (
    <footer className="container-fluid pt-5 mt-5">
      <div className="row">
        <div className="footer text-center pt-5 d-flex flex-column">
          <Image src={logo} alt="logo" />
          <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col mx-auto mt-3">
            <p className="regular-font">
              {ctx.generalData?.home_settings["footer_description"]}
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center pb-4">
            {ctx.generalData.social_media.map((link, index) => (
              <div key={index} className="me-2 footer-border d-flex align-items-center justify-content-center">
                <img src={link.full_path_icon} alt="icon" />
              </div>
            ))}
          </div>
          <p className="regular-font pb-4 copyright-text">
            {ctx.generalData?.home_settings["footer_copyright"]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
