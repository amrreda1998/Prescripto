import { doctorModel } from '../models/doctorModel.js';

export const doctors = [
  {
    name: 'Dr. Richard James',
    image:
      'https://drive.google.com/file/d/1DHuZ0TmZLQLr-IzLJAwF4zQY7l-sYOd5/view?usp=drive_link',
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
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
      'https://drive.google.com/file/d/1LRfuXcOiYyh965-S89Qu3K17lfqPRivj/view?usp=drive_link',
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about:
      'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
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
      'https://drive.google.com/file/d/1NNYJeooIv1osuDuxAjgcDhtt4bS8gv5u/view?usp=drive_link',
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Years',
    about:
      'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
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
      'https://drive.google.com/file/d/19CsZtGchhR-f_YpkRnK8Xq6XZyuhulaV/view?usp=drive_link',
    speciality: 'Pediatricians',
    degree: 'MBBS',
    experience: '2 Years',
    about:
      'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
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
      'https://drive.google.com/file/d/1rbBKGHKyn8AHsIQLlOM-7zVE0PH5uXRS/view?usp=drive_link',
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
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
      'https://drive.google.com/file/d/1C-fkPzdaqiArTEitA_1ZDDXSv0dAXGaE/view?usp=drive_link',
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
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
      'https://drive.google.com/file/d/1U9GG7LsBf-ZrgVBSF3D9B7yjMMLMUKzw/view?usp=drive_link',
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
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
      'https://drive.google.com/file/d/1SmtoHwlK2IqAV3k79KYPWwQNjP9DvdSJ/view?usp=drive_link',
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about:
      'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
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
      'https://drive.google.com/file/d/1dYfRKiDyl4F0qz9-FWapx9oxMf-ATtmV/view?usp=drive_link',
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Years',
    about:
      'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
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
      'https://drive.google.com/file/d/1q9R981zRBybUH8_j97uCu6822Yz7WIHs/view?usp=drive_link',
    speciality: 'Pediatricians',
    degree: 'MBBS',
    experience: '2 Years',
    about:
      'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
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
      'https://drive.google.com/file/d/1cC9DXVKaNvJmgiVVsyTh3hJNvMqvxMdS/view?usp=drive_link',
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
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
      'https://drive.google.com/file/d/1l2JV3UgTGlkSf_5PwbglqFA1Ght8C0q3/view?usp=drive_link',
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
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
      'https://drive.google.com/file/d/13nF5zz5C8L_f1-9i69Cha6eC-Xq4Ky9P/view?usp=drive_link',
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
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
      'https://drive.google.com/file/d/16JICkzk3SPz_LqQZn7T9cavvtmVu5RUp/view?usp=drive_link',
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about:
      'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
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
      'https://drive.google.com/file/d/1_wQVmUZ5nxe-JEHESQ0PEx3_ToWdxSgS/view?usp=drive_link',
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Years',
    about:
      'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
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
