# Job Application Tracker

This React application allows users to submit job applications, including a job description, company information, and resume. The data is stored in Firebase Firestore, and the resumes are uploaded to Firebase Storage.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Key Features](#key-features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
Install dependencies:
npm install
Create a Firebase project and configure your Firebase credentials.

Adjust the path in the import statement for Firebase in Content.js based on your project structure.

Usage
Run the application:

npm start

Open the application in your browser and start submitting job applications.

Folder Structure
.
├── src
│   ├── components
│   │   ├── Content.js
│   ├── firebase
│   │   ├── firebase.js
│   ├── App.js
│   └── index.js
├── public
│   └── index.html
├── .gitignore
├── package.json
└── README.md

Key Features
Job Application Submission: Users can submit job applications including job description, company details, and resumes.
Firebase Integration: Data is stored in Firebase Firestore, and resumes are uploaded to Firebase Storage.
Responsive Design: The application is designed to be responsive and user-friendly.

Contributing
Contributions are welcome! Please follow the contribution guidelines.

License
This project is licensed under the MIT License.

Contact
For any questions or feedback, please reach out to Yaswanth Panguluri at panguluriyaswanth@gmail.com
