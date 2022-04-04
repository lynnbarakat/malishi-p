import Nav from "./Nav";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div>
      <Header title={props.title} text={props.text} image={props.image} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
