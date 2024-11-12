import Header from "../components/HomePage/Header";
import FindSpecialitySection from "../components/HomePage/Sections/FindBySepctialitySection/FindSpecialitySection";
import TopDoctorstoBookSection from "./../components/HomePage/Sections/TopDoctorstoBookSection/TopDoctorstoBookSection";
import BannerSection from "./../components/HomePage/Sections/BannerSection";
import Footer from "./../components/HomePage/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <FindSpecialitySection />
      <TopDoctorstoBookSection />
      <BannerSection />
      <Footer />
    </>
  );
};

export default HomePage;
