import Accordions from "../components/Accordions";
import CustomInputButton from "../components/CustomInputButton";
import EmployeePart from "../components/employee/EmployeePart";
import Hero from "../components/Hero";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Stats from "../components/Stats";

const LandingPage = () => {
  return (
    <>
      <Navbar log={false} />

      <div className="flex justify-center mt-20">
        <Hero />
      </div>

      <div className="flex flex-col items-center justify-center my-20 max-sm:px-5 gap-20">
        <Stats />
        <CustomInputButton />
        <Accordions />
      </div>

      <Footer fixed={false} />
    </>
  );
};

export default LandingPage;
