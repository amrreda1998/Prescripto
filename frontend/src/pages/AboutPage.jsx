import { assets } from "../assets/assets";
import Footer from "../components/HomePage/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow ">
        <header className="text-center font-bold text-3xl underline mb-8">
          About Us
        </header>

        <section className="md:flex md:items-center md:gap-10">
          {/* Image Section */}
          <img
            src={assets.about_image}
            alt="About Prescripto"
            className="md:w-1/3 md:h-auto mx-auto w-72 object-cover"
          />

          {/* Text Section */}
          <article className="flex flex-col gap-8 my-12 md:text-left text-center">
            <p>
              Welcome to Prescripto, your trusted partner in managing your
              healthcare needs conveniently and efficiently. At Prescripto, we
              understand the challenges individuals face when it comes to
              scheduling doctor appointments and managing their health records.
            </p>
            <p>
              Prescripto is committed to excellence in healthcare technology. We
              continuously strive to enhance our platform, integrating the
              latest advancements to improve user experience and deliver
              superior service. Whether you&apos;re booking your first
              appointment or managing ongoing care, Prescripto is here to
              support you every step of the way.
            </p>
            <p>
              <span className="font-bold">Our Vision:</span> Our vision at
              Prescripto is to create a seamless healthcare experience for every
              user. We aim to bridge the gap between patients and healthcare
              providers, making it easier for you to access the care you need,
              when you need it.
            </p>
          </article>
        </section>
        
        {/* Why Choose Us Section */}
        <section>
          <div className="text-center font-bold underline mt-6 mb-7">
            Why Choose Us
          </div>
          <div className="md:flex gap-4 flex-wrap md:flex-nowrap">
            <div className="text-center md:text-left">
              <p className="font-bold my-4">Efficiency:</p>
              <p>
                Streamlined appointment scheduling that fits into your busy
                lifestyle.
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-bold my-4">Convenience:</p>
              <p>
                Access to a network of trusted healthcare professionals in your
                area.
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-bold my-4">Personalization:</p>
              <p>
                Tailored recommendations and reminders to help you stay on top
                of your health.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Spacer to Position Footer */}
      <div className="h-40"></div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default AboutPage;
