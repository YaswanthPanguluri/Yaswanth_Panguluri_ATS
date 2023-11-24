import React, { useState } from 'react';
import { app } from '../firebase'; // Adjust the path based on your project structure
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

function Content() {
  const firestore = getFirestore(app);
  const storage = getStorage(app); 



  const [formData, setFormData] = useState({
    jobDescription: '',
    companyName: '',
    jobTitle: '',
    email: '',
    password: '',
    resume: null,
    date: '',
    trackingLink: '',
    additionalComments: '',
  });

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      // Handle file uploads separately
      setFormData({
        ...formData,
        [e.target.id]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleJobDescriptionChange = (e) => {
    setFormData({
      ...formData,
      jobDescription: e.target.value,
    });
  };

  const handleDateChange = (e) => {
    setFormData({
      ...formData,
      date: e.target.value,
    });
  };

  const [uploadStatus, setUploadStatus] = useState(null);



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Upload resume file to Firebase Storage
    const resumeFile = formData.resume;
  
    // Ensure a file is selected
    if (!resumeFile) {
      console.error('No resume file selected.');
      return;
    }

    // Create a unique filename by appending a timestamp and date
  const currentDate = new Date();
  const timestamp = currentDate.getTime();
  const uniqueFilename = `${resumeFile.name}_${timestamp}`;
 
    const storageRef = ref(storage, `resumes/${uniqueFilename}`);
    const uploadTask = uploadBytes(storageRef, resumeFile);
  
    uploadTask
      .then(async (snapshot) => {
        // Handle progress (optional)
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
  
        // Upload completed, get the download URL
        const downloadURL = await getDownloadURL(storageRef);
  
        // Save form data and resume URL to Firestore
        await addDoc(collection(firestore, 'jobApplications'), {
          ...formData,
          resume: downloadURL,
        });

        setUploadStatus('Data successfully submitted');  
        console.log('Data successfully submitted to Firestore!');
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
  };
  

  return (
    <div className="container">
      <div className="row">
        {/* Left side with a textarea for job description */}
        <div className="col-md-6 mb-3">
          <textarea
            className="form-control w-100"
            rows="33"
            placeholder="Enter Job Description"
            id="jobDescription"
            value={formData.jobDescription}
            onChange={handleJobDescriptionChange}
          ></textarea>
        </div>

        {/* Right side (form) */}
        <div className="col-md-6 border p-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                className="form-control"
                id="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="jobTitle">Job Title</label>
              <input
                type="text"
                className="form-control"
                id="jobTitle"
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlFile1">
                Upload your Resume
              </label>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="resume"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleDate">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={formData.date}
                onChange={handleDateChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="trackingLink">Tracking Link</label>
              <input
                type="text"
                className="form-control"
                id="trackingLink"
                placeholder="Tracking Link"
                value={formData.trackingLink}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="additionalComments">Additional Comments</label>
              <input
                type="text"
                className="form-control"
                id="additionalComments"
                placeholder="Additional Comments"
                value={formData.additionalComments}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
            </div>

            {uploadStatus && (
              <div
                className={`alert ${
                  uploadStatus.includes("successfully")
                    ? "alert-success"
                    : "alert-danger"
                }`}
                role="alert"
              >
                {uploadStatus.includes("successfully") ? (
                  <p>Your data has been successfully submitted!</p>
                ) : (
                  <p>
                    There was an error uploading the data. Please try again.
                  </p>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Content;
