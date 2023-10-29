import ObjectRenderer from "./component/ObjectRenderer";
import ObjectRendererMobile from "./component/ObjectRendererMobile";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "./App.css";

function App() {
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <Header />

      {isMobile ? <ObjectRendererMobile /> : <ObjectRenderer />}

      <Footer />
    </>
  );
}

export default App;
