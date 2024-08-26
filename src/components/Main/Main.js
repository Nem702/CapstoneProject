import "./Main.css";
import Header from "./Header/Header";
import About from "./AboutSection/About";
import Specials from "./SpecialsSection/Specials";
import Testimonials from "./TestimonialsSection/Testimonials";

const Main = () => {

  return (
    <>
        <Header />
        <Specials />
        <About />
        <Testimonials />
    </>
  );
};

export default Main;