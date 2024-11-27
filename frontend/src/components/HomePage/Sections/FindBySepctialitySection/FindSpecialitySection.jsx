import SpecialityCard from './SpecialityCard.jsx';
import { specialityData } from './../../../../assets/assets';
import { NavLink } from 'react-router-dom';

const FindSpecialitySection = () => {
  return (
    <>
      <div className="text-center pb-3 pt-12 text-3xl font-bold">
        Find by Speciality{' '}
      </div>
      <div className="text-center pb-7 text-sm">
        Simply browse through our extensive list of trusted doctors,
        <br /> schedule your appointment hassle-free.
      </div>
      <div className="flex flex-wrap justify-center gap-2 md:space-x-5 p-5">
        {specialityData.map(({ speciality, image }, index) => (
          <NavLink key={index} to={'/alldoctors'} state={{ speciality }}>
            <SpecialityCard imagePath={image} specialityName={speciality} />
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default FindSpecialitySection;
