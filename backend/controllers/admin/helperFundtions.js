import validtor from 'validator';


export const validateDoctorData = ({
  name,
  email,
  password,
  speciality,
  degree,
  experience,
  about,
  fees,
  address,
}) => {

  if (
    !name ||
    !email ||
    !password ||
    !speciality ||
    !degree ||
    !experience ||
    !about ||
    !fees ||
    !address?.line1 ||
    !address?.line2
  ) {
    return 'Missing Data';
  }
  if (!validtor.isEmail(email)) {
    return 'Invalid Email Format';
  }
  if (password.length < 8) {
    return 'Password should be at least 8 characters';
  }
  return null; // Validation passed
};
