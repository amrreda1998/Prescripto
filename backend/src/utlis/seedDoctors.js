import { doctorModel } from '../models/doctorModel.js';

export const doctors = [
  {
    name: 'Dr. Richard James',
    image:
      'https://res.cloudinary.com/dm5732ysk/image/upload/v1732065670/Prescripto/doctors/doc1.png',
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      'Is committed to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 50,
    address: {
      line1: '17th Cross, Richmond',
      line2: 'Circle, Ring Road, London',
    },
    available_booking_solts: [
      { day: 'sun', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
      { day: 'Mon', times: ['8:00 am', '10:00 am', '12:00 pm'] },
      { day: 'Tue', times: ['8:00 am', '10:00 am'] },
      { day: 'Wed', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
    ],
  },
  {
    name: 'Dr. Emily Larson',
    image:
      'https://res.cloudinary.com/dm5732ysk/image/upload/v1732559410/Prescripto/doctors/doc2.png',
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about:
      'Is committed to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 60,
    address: {
      line1: '27th Cross, Richmond',
      line2: 'Circle, Ring Road, London',
    },
    available_booking_solts: [
      { day: 'Sat', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
      { day: 'Mon', times: ['8:00 am', '10:00 am', '12:00 pm'] },
      { day: 'Tue', times: ['8:00 am', '10:00 am'] },
    ],
  },
  {
    name: 'Dr. Sarah Patel',
    image:
      'https://res.cloudinary.com/dm5732ysk/image/upload/v1732559429/Prescripto/doctors/doc3.png',
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Years',
    about:
      'Is committed to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 30,
    address: {
      line1: '37th Cross, Richmond',
      line2: 'Circle, Ring Road, London',
    },
    available_booking_solts: [
      { day: 'Sun', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
      { day: 'Mon', times: ['8:00 am', '10:00 am', '12:00 pm'] },
      { day: 'Tue', times: ['8:00 am', '10:00 am'] },
      { day: 'Wed', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
      { day: 'Thu', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
      { day: 'Fri', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
    ],
  },
  {
    name: 'Dr. Christopher Lee',
    image:
      'https://res.cloudinary.com/dm5732ysk/image/upload/v1732559466/Prescripto/doctors/doc4.png',
    speciality: 'Pediatricians',
    degree: 'MBBS',
    experience: '2 Years',
    about:
      'Is committed to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 40,
    address: {
      line1: '47th Cross, Richmond',
      line2: 'Circle, Ring Road, London',
    },
    available_booking_solts: [
      { day: 'Mon', times: ['8:00 am', '10:00 am', '12:00 pm'] },
      { day: 'Tue', times: ['8:00 am', '10:00 am'] },
      { day: 'Wed', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
      { day: 'Thu', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
    ],
  },
  {
    name: 'Dr. Jennifer Garcia',
    image:
      'https://res.cloudinary.com/dm5732ysk/image/upload/v1732559557/Prescripto/doctors/doc5.png',
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      'Is committed to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 50,
    address: {
      line1: '57th Cross, Richmond',
      line2: 'Circle, Ring Road, London',
    },
    available_booking_solts: [
      { day: 'Mon', times: ['8:00 am', '10:00 am', '12:00 pm'] },
      { day: 'Tue', times: ['8:00 am', '10:00 am'] },
      { day: 'Wed', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
      { day: 'Thu', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
    ],
  },
  {
    name: 'Dr. Andrew Williams',
    image:
      'https://res.cloudinary.com/dm5732ysk/image/upload/v1732559579/Prescripto/doctors/doc6.png',
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      'Is committed to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 50,
    address: {
      line1: '57th Cross, Richmond',
      line2: 'Circle, Ring Road, London',
    },
    available_booking_solts: [
      { day: 'Mon', times: ['8:00 am', '10:00 am', '12:00 pm'] },
      { day: 'Tue', times: ['8:00 am', '10:00 am'] },
      { day: 'Wed', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
      { day: 'Thu', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
    ],
  },
  {
    name: 'Dr. Christopher Davis',
    image:
      'https://res.cloudinary.com/dm5732ysk/image/upload/v1732559600/Prescripto/doctors/doc7.png',
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      'Is committed to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 50,
    address: {
      line1: '17th Cross, Richmond',
      line2: 'Circle, Ring Road, London',
    },
    available_booking_solts: [
      { day: 'Mon', times: ['8:00 am', '10:00 am', '12:00 pm'] },
      { day: 'Tue', times: ['8:00 am', '10:00 am'] },
      { day: 'Wed', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
      { day: 'Thu', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
    ],
  },
  {
    name: 'Dr. Timothy White',
    image:
      'https://res.cloudinary.com/dm5732ysk/image/upload/v1732559627/Prescripto/doctors/doc8.png',
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about:
      'Is committed to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 60,
    address: {
      line1: '27th Cross, Richmond',
      line2: 'Circle, Ring Road, London',
    },
    available_booking_solts: [
      { day: 'Mon', times: ['8:00 am', '10:00 am', '12:00 pm'] },
      { day: 'Tue', times: ['8:00 am', '10:00 am'] },
      { day: 'Wed', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
      { day: 'Thu', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
    ],
  },
  {
    name: 'Dr. Ava Mitchell',
    image:
      'https://res.cloudinary.com/dm5732ysk/image/upload/v1732559647/Prescripto/doctors/doc9.png',
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Years',
    about:
      'Is committed to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 30,
    address: {
      line1: '37th Cross, Richmond',
      line2: 'Circle, Ring Road, London',
    },
    available_booking_solts: [
      { day: 'Mon', times: ['8:00 am', '10:00 am', '12:00 pm'] },
      { day: 'Tue', times: ['8:00 am', '10:00 am'] },
      { day: 'Wed', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
      { day: 'Thu', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
    ],
  },
  {
    name: 'Dr. Jeffrey King',
    image:
      'https://res.cloudinary.com/dm5732ysk/image/upload/v1732559378/Prescripto/doctors/doc10.png',
    speciality: 'Pediatricians',
    degree: 'MBBS',
    experience: '2 Years',
    about:
      'Is committed to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 40,
    address: {
      line1: '47th Cross, Richmond',
      line2: 'Circle, Ring Road, London',
    },
    available_booking_solts: [
      { day: 'Mon', times: ['8:00 am', '10:00 am', '12:00 pm'] },
      { day: 'Tue', times: ['8:00 am', '10:00 am'] },
      { day: 'Wed', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
      { day: 'Thu', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
    ],
  },
  {
    name: 'Dr. Zoe Kelly',
    image:
      'https://res.cloudinary.com/dm5732ysk/image/upload/v1732559738/Prescripto/doctors/doc11.png',
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      'Is committed to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 50,
    address: {
      line1: '57th Cross, Richmond',
      line2: 'Circle, Ring Road, London',
    },
    available_booking_solts: [
      { day: 'Mon', times: ['8:00 am', '10:00 am', '12:00 pm'] },
      { day: 'Tue', times: ['8:00 am', '10:00 am'] },
      { day: 'Wed', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
      { day: 'Thu', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
    ],
  },
  {
    name: 'Dr. Patrick Harris',
    image:
      'https://res.cloudinary.com/dm5732ysk/image/upload/v1732559756/Prescripto/doctors/doc12.png',
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      'Is committed to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 50,
    address: {
      line1: '57th Cross, Richmond',
      line2: 'Circle, Ring Road, London',
    },
    available_booking_solts: [
      { day: 'Mon', times: ['8:00 am', '10:00 am', '12:00 pm'] },
      { day: 'Tue', times: ['8:00 am', '10:00 am'] },
      { day: 'Wed', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
      { day: 'Thu', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
    ],
  },
  {
    name: 'Dr. Chloe Evans',
    image:
      'https://res.cloudinary.com/dm5732ysk/image/upload/v1732559776/Prescripto/doctors/doc13.png',
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      'Is committed to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 50,
    address: {
      line1: '17th Cross, Richmond',
      line2: 'Circle, Ring Road, London',
    },
    available_booking_solts: [
      { day: 'Mon', times: ['8:00 am', '10:00 am', '12:00 pm'] },
      { day: 'Tue', times: ['8:00 am', '10:00 am'] },
      { day: 'Wed', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
      { day: 'Thu', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
    ],
  },
  {
    name: 'Dr. Ryan Martinez',
    image:
      'https://res.cloudinary.com/dm5732ysk/image/upload/v1732559792/Prescripto/doctors/doc14.png',
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about:
      'Is committed to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 60,
    address: {
      line1: '27th Cross, Richmond',
      line2: 'Circle, Ring Road, London',
    },
    available_booking_solts: [
      { day: 'Mon', times: ['8:00 am', '10:00 am', '12:00 pm'] },
      { day: 'Tue', times: ['8:00 am', '10:00 am'] },
      { day: 'Wed', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
      { day: 'Thu', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
    ],
  },
  {
    name: 'Dr. Amelia Hill',
    image:
      'https://res.cloudinary.com/dm5732ysk/image/upload/v1732559805/Prescripto/doctors/doc15.png',
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Years',
    about:
      'Is committed to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 30,
    address: {
      line1: '37th Cross, Richmond',
      line2: 'Circle, Ring Road, London',
    },
    available_booking_solts: [
      { day: 'Mon', times: ['8:00 am', '10:00 am', '12:00 pm'] },
      { day: 'Tue', times: ['8:00 am', '10:00 am'] },
      { day: 'Wed', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
      { day: 'Thu', times: ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'] },
    ],
  },
];

export const seedDoctors = async () => {
  try {
    if (!doctors) {
      throw new Error('No doctors data provided');
    }

    // Check if there are any doctors in the database:
    const doctorsDb = await doctorModel.find();
    let doctorsInserted = [];

    if (doctorsDb.length === 0) {
      doctorsInserted = await doctorModel.insertMany(doctors);
    }
  } catch (error) {
    console.error('Error seeding doctors \n', error);
  }
};
