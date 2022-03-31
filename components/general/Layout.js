import Nav from "./Nav";
import Footer from "./Footer";
import Header from "./Header";

const header = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default header;
