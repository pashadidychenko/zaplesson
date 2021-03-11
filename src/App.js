import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import "./styles/App.css";
import bgImage from "./assets/bg1.jpg";

function App() {
  const title = "This is title";
  const descr = "This is Description!";
  return (
    <>
      <Header title={title} descr={descr} />
      <Layout title={title} descr={descr} urlBg={bgImage} />
      <Layout title={title} descr={descr} colorBg="red" />
      <Layout title={title} descr={descr} urlBg={bgImage} />
      <Footer />
    </>
  );
}

export default App;
