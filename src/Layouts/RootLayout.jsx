import Header from "../pages/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Technology from "../pages/Technology";
import Test from "../pages/Test";
import Contact from "../pages/Contact";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Technology />
        <Contact />
        <Test />
      </main>
    </>
  );
}
