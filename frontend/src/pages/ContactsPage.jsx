import Footer from "../components/HomePage/Footer";
import { assets } from "./../assets/assets";

const ContactsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow ">
        <header className="text-center font-bold text-3xl underline mb-14">
          Contact Us
        </header>

        <section className="md:flex md:items-center md:gap-40">
          {/* Image Section */}
          <img
            src={assets.contact_image}
            alt="About Prescripto"
            className="md:w-1/3 md:h-auto mx-auto w-72 object-cover rounded shadow-lg  shadow-gray-400"
          />

          {/* Text Section */}
          <article className="flex flex-col gap-3 my-12 md:text-left text-center">
            <p>Our Office : </p>
            <p>54709 Willms Station Suite 350, Washington, USA</p>
            <p>Tel: +2010125141413133</p>
            <p>Email: AmrReda@CompanyEmail.com</p>
          </article>
        </section>
      </main>

      {/* Spacer to Position Footer */}
      <div className="h-40"></div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default ContactsPage;
