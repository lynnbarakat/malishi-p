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

  let windowSize = null;

  if (typeof window !== "undefined") {
    windowSize = window.innerWidth;
  }

  const [screenWidth, setScreenWidth] = useState(windowSize);

  

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth);

    return () => {
        window.removeEventListener('resize', changeWidth);
    }

  }, [])

  const toggleHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  const menuContent = <div className="col-lg-9 bold-font nav-items my-auto">
  <ul className="d-flex flex-lg-row flex-column justify-content-lg-between align-items-center">
    <li className="mt-lg-0 mt-5 mb-lg-0 mb-5">
      <Link href="/about-us">
        {ctx.generalData.menu_items["about-us"]}
      </Link>
    </li>
    <li className="mb-lg-0 mb-5">
      <Link href="/products">
        {ctx.generalData.menu_items["products"]}
      </Link>
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
      <Link href="/contact">
        {ctx.generalData.menu_items["contact"]}
      </Link>
    </li>
  </ul>
</div>

  return (
    <nav className="position-fixed w-100 navigation-bar">
      <div className="container">
        <div className="row py-3">
          <div className="col-lg-3 position-relative">
            <Link href="/">
              <a>
                <Image src={logo} alt="logo" />
              </a>
            </Link>
            <button
              className="position-absolute top-50 end-0 translate-middle-y menu-button"
              onClick={toggleHandler}
            >
              {!toggleMenu && (screenWidth < 992) && <Image src={menuButton} alt="menu button" />}
              {toggleMenu && (screenWidth < 992) && <Image src={closeMenu} alt="menu close button" />}
            </button>
          </div>
          {toggleMenu && (screenWidth < 992) && menuContent}
          {(screenWidth >= 992) && menuContent}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
