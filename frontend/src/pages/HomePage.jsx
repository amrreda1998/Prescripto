import Header from '../components/HomePage/Header';
import FindSpecialitySection from '../components/HomePage/Sections/FindBySepctialitySection/FindSpecialitySection';
import TopDoctorstoBookSection from './../components/HomePage/Sections/TopDoctorstoBookSection/TopDoctorstoBookSection';
import BannerSection from './../components/HomePage/Sections/BannerSection';
import Footer from './../components/HomePage/Footer';
import BackToTopButton from '../components/BackToTopButton';


const HomePage = () => {
  return (
    <>
      <Header />
      <FindSpecialitySection />
      <TopDoctorstoBookSection />
      <BannerSection />
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default HomePage;
