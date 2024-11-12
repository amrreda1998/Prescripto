import SpecialityCard from "./specialityCard";
import { specialityData } from "./../../../../assets/assets";

const FindSpecialitySection = () => {
  return (
    <>
      <div className="text-center pb-3 pt-12 text-3xl font-bold">
        Find by Speciality{" "}
      </div>
      <div className="text-center pb-7 text-sm">
        Simply browse through our extensive list of trusted doctors,
        <br /> schedule your appointment hassle-free.
      </div>
      <div className="flex flex-wrap justify-center gap-5 md:space-x-5 p-5">
        {specialityData.map(({ speciality, image }, index) => (
          <SpecialityCard
            key={index}
            imagePath={image}
            specialityName={speciality}
          />
        ))}
      </div>
    </>
  );
};

export default FindSpecialitySection;
