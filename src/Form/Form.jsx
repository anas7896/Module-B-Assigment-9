import React, { useState } from 'react';
import Styles from './Form.module.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    orgName: '',
    orgSize: '',
    industry: '',
  });
  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { ...formData };
    setStudents([...students, newStudent]);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      orgName: '',
      orgSize: '',
      industry: '',
    });

    alert(`First Name: ${newStudent.firstName}\nLast Name: ${newStudent.lastName}\nEmail: ${newStudent.email}\nPassword: ${newStudent.password}\nOrganization Name: ${newStudent.orgName}\nOrganization Size: ${newStudent.orgSize}\nIndustry: ${newStudent.industry}`);
    console.log([...students, newStudent]);
  };

  return (
    <div className={Styles.form}>
      <p className={Styles.try}>Try <span style={{ fontWeight: "bold" }}>Sign</span> free for 14 days</p>
      <p className={Styles.already}>Already have a Formstack account? <span style={{ color: 'blue' }}>Start your trial in app</span></p>
      <form className={Styles.Forms} onSubmit={handleSubmit}>
        <div className={Styles.row}>
          <div className={Styles.inputGroup}>
            <label>FIRST NAME</label>
            <input
              type="text"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className={Styles.inputGroup}>
            <label>LAST NAME</label>
            <input
              type="text"
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={Styles.inputGroup}>
          <label>WORK EMAIL</label>
          <input
            type="email"
            name="email"
            placeholder="John@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={Styles.inputGroup}>
          <label>PASSWORD</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className={Styles.inputGroup}>
          <label>ORGANIZATION NAME</label>
          <input
            type="text"
            name="orgName"
            placeholder="ABC organization"
            value={formData.orgName}
            onChange={handleChange}
          />
        </div>
        <div className={Styles.inputGroup}>
          <label>ORGANIZATION SIZE</label>
          <select name="orgSize" value={formData.orgSize} onChange={handleChange}>
            <option value="">--Select--</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className={Styles.inputGroup}>
          <label>INDUSTRY</label>
          <select name="industry" value={formData.industry} onChange={handleChange}>
            <option value="">--Select--</option>
            <option value="Tech">Tech</option>
            <option value="Finance">Finance</option>
            <option value="Education">Education</option>
          </select>
        </div>
        <p className={Styles.terms}>Formstack has updated our Terms of services effective January 4, 2023.<br />We encourage you to read the document in its entirety.</p>
        <p className={Styles.agree}>
          <input type="checkbox" /> I understand and agree to the <span>Formstack Privacy Policy</span>, <span>Software <br /> Services Agreements</span> and <span>Acceptable Use Policy</span>.
        </p>
        <button className={Styles.submitButton} type="submit">Start free trial</button>
      </form>
    </div>
  );
}

export default Form;
