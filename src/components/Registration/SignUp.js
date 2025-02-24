import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SignUp.module.css';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    contact: '',
    password: '',
    confirmPassword: '',
    role: '',
    kraPin: '',
    farmName: '',
    farmLocation: '',
    deedFile: null,
    landDocuments: null,
    cropTypes: '',
    livestockTypes: '',
    farmSize: '',
    landLocation: '',
    equipmentType: '',
    equipmentDescription: '',
    laborSkills: '',
    laborExperience: '',
    hourlyRate: '',
    licenseFile: null,
    kraCertificate: null,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleRoleChange = (e) => {
    setFormData({
      ...formData,
      role: e.target.value,
      farmName: '',
      farmLocation: '',
      deedFile: null,
      landDocuments: null,
      cropTypes: '',
      livestockTypes: '',
      farmSize: '',
      landLocation: '',
      equipmentType: '',
      equipmentDescription: '',
      laborSkills: '',
      laborExperience: '',
      hourlyRate: '',
      licenseFile: null
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className={styles.signupContainer}>
      <h2 className={styles.signupTitle}>Sign Up</h2>

      <p className={styles.loginLink}>
        Already have an account? <NavLink to="/login" className={styles.link}>Log in</NavLink>
      </p>

      <form onSubmit={handleSubmit} className={styles.signupForm}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
          className={styles.inputField}
        />

        {/* KRA PIN and Certificate Upload - Excluded for User role */}
        {formData.role !== 'User' && (
          <>
            <input
              type="text"
              name="kraPin"
              placeholder="KRA PIN"
              value={formData.kraPin}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <label className={styles.fileLabel}>Upload KRA Certificate</label>
            <input
              type="file"
              name="kraCertificate"
              onChange={handleChange}
              required
              className={styles.inputField}
            />
          </>
        )}

        {/* Role Selection */}
        <select
          name="role"
          value={formData.role}
          onChange={handleRoleChange}
          required
          className={styles.inputField}
        >
          <option value="">Select Role</option>
          <option value="User">User</option>
          <option value="Farmer">Farmer</option>
          <option value="Land Owner">Land Owner</option>
          <option value="Equipment Renter">Equipment Renter</option>
          <option value="Labor Provider">Labor Provider</option>
        </select>

        {/* Conditional Fields Based on Role */}
        {formData.role === 'Farmer' && (
          <>
            <input
              type="text"
              name="farmName"
              placeholder="Farm Name"
              value={formData.farmName}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <input
              type="text"
              name="farmLocation"
              placeholder="Farm Location"
              value={formData.farmLocation}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <input
              type="text"
              name="cropTypes"
              placeholder="Types of Crops Grown"
              value={formData.cropTypes}
              onChange={handleChange}
              className={styles.inputField}
            />
            <input
              type="text"
              name="livestockTypes"
              placeholder="Types of Livestock Raised"
              value={formData.livestockTypes}
              onChange={handleChange}
              className={styles.inputField}
            />
            <input
              type="text"
              name="farmSize"
              placeholder="Farm Size (e.g., in acres)"
              value={formData.farmSize}
              onChange={handleChange}
              className={styles.inputField}
            />
            <label className={styles.fileLabel}>Upload Deed Document</label>
            <input
              type="file"
              name="deedFile"
              onChange={handleChange}
              className={styles.inputField}
            />
            <label className={styles.fileLabel}>Upload Additional Land Documents</label>
            <input
              type="file"
              name="landDocuments"
              onChange={handleChange}
              className={styles.inputField}
            />
          </>
        )}

        {formData.role === 'Land Owner' && (
          <>
            <input
              type="text"
              name="landLocation"
              placeholder="Land Location"
              value={formData.landLocation}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <input
              type="text"
              name="landSize"
              placeholder="Land Size (e.g., in acres)"
              value={formData.landSize}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <label className={styles.fileLabel}>Upload Title Deed Document</label>
            <input
              type="file"
              name="deedFile"
              onChange={handleChange}
              required
              className={styles.inputField}
            />
          </>
        )}

        {formData.role === 'Equipment Renter' && (
          <>
            <input
              type="text"
              name="equipmentType"
              placeholder="Type of Equipment"
              value={formData.equipmentType}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <textarea
              name="equipmentDescription"
              placeholder="Equipment Description (e.g., capacity, specifications)"
              value={formData.equipmentDescription}
              onChange={handleChange}
              required
              className={styles.textArea}
            />
            <label className={styles.fileLabel}>Upload License or Certification</label>
            <input
              type="file"
              name="licenseFile"
              onChange={handleChange}
              required
              className={styles.inputField}
            />
          </>
        )}

        {formData.role === 'Labor Provider' && (
          <>
            <input
              type="text"
              name="laborSkills"
              placeholder="Skills (e.g., irrigation, harvesting)"
              value={formData.laborSkills}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <input
              type="text"
              name="laborExperience"
              placeholder="Years of Experience"
              value={formData.laborExperience}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <input
              type="number"
              name="hourlyRate"
              placeholder="Hourly Rate (in KES)"
              value={formData.hourlyRate}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
          </>
        )}

        {/* Password Fields */}
        <div className={styles.passwordWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={styles.eyeIcon}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className={styles.passwordWrapper}>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className={styles.eyeIcon}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button type="submit" className={styles.signupButton}>Sign Up</button>

        <div className={styles.googleAuth}>
          <p>Or sign up with Google</p>
          <button type="button" className={styles.googleButton}>
            <FaGoogle className={styles.googleIcon} /> Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
