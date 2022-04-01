import Image from "next/image";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import logo from "../../Asssets/logo.svg";
import GeneralContext from "../../pages/general-context";
import menuButton from "../../Asssets/menu-button.svg";
import closeMenu from "../../Asssets/close-menu.svg";

const Nav = () => {
  const ctx = useContext(GeneralContext);

  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  const mobileContent = (
    <div className={"container-fluid menu-list" + (toggleMenu ? " show" : "")}>
      {/* <div className="row py-3">
        <div className="col">
          <Link href="/">
            <a>
              <Image src={logo} alt="logo" />
            </a>
          </Link>
        </div>
        <div className="col d-flex justify-content-end align-items-center">
          <button className="menu-button d-lg-none" onClick={toggleHandler}>
            <Image src={closeMenu} alt="menu close button" />
          </button>
        </div>
      </div> */}
      <div className="row">
        <div className="bold-font nav-items my-auto d-lg-none">
          <ul className="d-flex flex-column align-items-center">
            <li className="mt-5 0 mb-5">
              <Link href="/about-us">
                {ctx.generalData.menu_items["about-us"]}
              </Link>
            </li>
            <li className="mb-5">
              <Link href="/products">
                {ctx.generalData.menu_items["products"]}
              </Link>
            </li>
            <li className="mb-5">
              <Link href="/our-engagements">
                {ctx.generalData.menu_items["our-engagements"]}
              </Link>
            </li>
            <li className="mb-5">
              <Link href="/our-improvisions">
                {ctx.generalData.menu_items["our-improvisions"]}
              </Link>
            </li>
            <li className="mb-5">
              <Link href="/our-sectors">
                {ctx.generalData.menu_items["our-sectors"]}
              </Link>
            </li>
            <li className="mb-5">
              <Link href="/news">{ctx.generalData.menu_items["news"]}</Link>
            </li>
            <li className="mb-5">
              <Link href="/contact">
                {ctx.generalData.menu_items["contact"]}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const desktopContent = (
    <div className="col-xl-9 col-lg-10 bold-font nav-items my-auto d-none d-lg-block">
      <ul className="d-flex flex-lg-row flex-column justify-content-lg-between align-items-center">
        <li className="mt-lg-0 mt-5 mb-lg-0 mb-5">
          <Link href="/about-us">{ctx.generalData.menu_items["about-us"]}</Link>
        </li>
        <li className="mb-lg-0 mb-5">
          <Link href="/products">{ctx.generalData.menu_items["products"]}</Link>
        </li>
        <li className="mb-lg-0 mb-5">
          <Link href="/our-engagements">
            {ctx.generalData.menu_items["our-engagements"]}
          </Link>
        </li>
        <li className="mb-lg-0 mb-5">
          <Link href="/our-improvisions">
            {ctx.generalData.menu_items["our-improvisions"]}
          </Link>
        </li>
        <li className="mb-lg-0 mb-5">
          <Link href="/our-sectors">
            {ctx.generalData.menu_items["our-sectors"]}
          </Link>
        </li>
        <li className="mb-lg-0 mb-5">
          <Link href="/news">{ctx.generalData.menu_items["news"]}</Link>
        </li>
        <li className="mb-lg-0 mb-5">
          <Link href="/contact">{ctx.generalData.menu_items["contact"]}</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="position-fixed w-100 navigation-bar">
      <div className="container">
        <div className="row py-3">
          <div className="col-xl-3 col-lg-2 col">
            <Link href="/">
              <a>
                <Image src={logo} alt="logo" />
              </a>
            </Link>
          </div>
          <div className="col d-flex justify-content-end align-items-center d-lg-none">
            <button className="menu-button" onClick={toggleHandler}>
              {!toggleMenu && <Image src={menuButton} alt="menu button" />} 
              {toggleMenu && <Image src={closeMenu} alt="close" />}
            </button>
          </div>
          {desktopContent}
        </div>
      </div>
      {mobileContent}
    </nav>
  );
};

export default Nav;
