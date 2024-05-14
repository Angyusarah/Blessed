import Footer from "./Footer";
import Header from "./Header";

const Container = ({ children }) => {
  return (
    <div className="flex flex-col font-inter ">
      <div className="flex flex-col bg-main-bg bg-cover bg-repeat overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Container;
