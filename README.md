
# Prescripto

is a web application designed to simplify the process of booking and managing doctor appointments. The application offers a user-friendly interface for patients to browse through a list of trusted doctors, view their availability, and book appointments with ease. Prescripto ensures secure user authentication and provides a responsive design for seamless usage across various devices.


## Table of Contents

- [Features](#features)
- [System Design Diagram](#system-design-diagram)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
## Features

- **Doctor Information**: Browse detailed profiles of doctors, including their specializations, experience, and availability.
- **Appointment Booking**: Book appointments by selecting available slots from the doctor's schedule.
- **User Authentication**: Secure login and registration using JWT authentication.
- **Appointment Management**: View and manage existing appointments, including the ability to cancel appointments.
- **Responsive Design**: Mobile-friendly design for usage across various devices.

## System Design Diagram

![diagram](https://github.com/user-attachments/assets/173cfc8e-3b0a-423e-924c-e9120fd00a28)


## Installation

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Clone the Repository

```bash
  git clone https://github.com/your-username/prescripto.git
  cd prescripto
```
### Install Dependencies

```bash
    npm install
```

### Environment Variables
```bash
DATABASE_URL 
ClOUDINARY_KEY_NAME 
ClOUDINARY_API_KEY 
ClOUDINARY_API_SECRET
JWT_SECRET
```
### Run the Application
```bash
npm run dev
```

## Usage

### Booking an Appointment
1- Navigate to all docotors page and browse through the list of doctors.

2- Click on a doctor to view their profile and available slots.

3- Select a suitable date and time, then click "Book an Appointment".

### Managing Appointments

1- Navigate to the "My Appointments" page.

2- View your upcoming appointments.

3- To cancel an appointment, click "Cancel Appointment" next to the respective appointment


## API Endpoints

### Authentication
```
POST /api/user/login  - Login a user
POST /api/user/register - Register a new user
```
### Doctors
```
GET /api/doctors - Get all doctors
```

### Appointments
```
POST /api/appointments/user/add-appointment - Add a new appointment
DELETE /api/appointments/user/delete-appointment - Delete an existing appointment
```

### Users
```
GET /api/user  - get user info
PUT /api/user/ - Update user info
POST /api/user/upload-profile-image - Upload user profile image
```


### Technologies Used

## Technologies Used

- **Frontend**: React, Tailwind CSS, React Router

- **Backend**: Node.js, Express, MongoDB, Mongoose

- **Authentication**: JWT (JSON Web Tokens)

- **Image Uploads**: Cloudinary

- **Deployment**: Vercel
## Contributing

Contributions are welcome! Please follow these steps to contribute:

- 1- Fork the repository.

- 2- Create a new branch (git checkout -b feature/your-feature).

- 3- Commit your changes (git commit -m 'Add some feature').

- 4- Push to the branch (git push origin feature/your-feature).

- 5- Create a new Pull Request.
## License

This project is licensed under the MIT License 
## Contact

For any inquiries, please contact:

**Amr Reda Mohamed** - [Linkedin](https://www.linkedin.com/in/amr-reda-mohamed-870735209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)
