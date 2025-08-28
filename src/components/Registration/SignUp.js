import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './SignUp.module.css';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    name: '',
    phone: '',
    kraPin: '',
    // Farmer fields
    farmName: '',
    farmSize: '',
    farmLocation: JSON.stringify({ county: '', coordinates: [] }),
    crops: JSON.stringify([]),
    kraCertificate: null,
    // Land Owner fields
    landLocation: '',
    landSize: '',
    deedFile: null,
    // Equipment Renter fields
    equipmentName: '',
    equipmentType: '',
    licenseFile: null,
    // Labor Provider fields
    laborSkills: JSON.stringify([]),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files ? files[0] : null,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleLocationChange = (field, key, value) => {
    try {
      const currentLocation = formData[field] ? JSON.parse(formData[field]) : {};
      const updatedLocation = { ...currentLocation, [key]: value };
      setFormData({
        ...formData,
        [field]: JSON.stringify(updatedLocation),
      });
    } catch (error) {
      console.error('Error parsing location:', error);
    }
  };

  const handleArrayChange = (field, value) => {
    try {
      const currentArray = formData[field] ? JSON.parse(formData[field]) : [];
      // Check if value is already in array
      const updatedArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      setFormData({
        ...formData,
        [field]: JSON.stringify(updatedArray),
      });
    } catch (error) {
      console.error('Error parsing array:', error);
    }
  };

  const handleRoleChange = (e) => {
    const newRole = e.target.value;
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: newRole,
      name: '',
      phone: '',
      kraPin: '',
      farmName: '',
      farmSize: '',
      farmLocation: JSON.stringify({ county: '', coordinates: [] }),
      crops: JSON.stringify([]),
      kraCertificate: null,
      landLocation: '',
      landSize: '',
      deedFile: null,
      equipmentName: '',
      equipmentType: '',
      licenseFile: null,
      laborSkills: JSON.stringify([]),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    
    // Validate required fields based on role
    const role = formData.role.toLowerCase();
    if (role !== 'user') {
      if (!formData.name) {
        setError("Name is required for this role");
        return;
      }
      if (!formData.phone) {
        setError("Phone number is required for this role");
        return;
      }
      if (!formData.kraPin) {
        setError("KRA PIN is required for this role");
        return;
      }
    }
    
    setIsLoading(true);
    
    try {
      // Create FormData object for file uploads
      const submitData = new FormData();
      
      // Append all form fields to FormData
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null && formData[key] !== '') {
          submitData.append(key, formData[key]);
        }
      });
      
      // Make API request
      const response = await fetch('https://smartmavuno-backend-vqkz.onrender.com/api/auth/register', {
        method: 'POST',
        body: submitData,
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Registration successful
        alert('Registration successful! You can now login.');
        navigate('/login');
      } else {
        // Registration failed
        setError(data.message || 'Registration failed. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
      console.error('Registration error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const renderFarmerFields = () => (
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
        name="farmSize"
        placeholder="Farm Size (acres)"
        value={formData.farmSize}
        onChange={handleChange}
        required
        className={styles.inputField}
      />
      <input
        type="text"
        placeholder="County"
        value={formData.farmLocation ? JSON.parse(formData.farmLocation).county || '' : ''}
        onChange={(e) => handleLocationChange('farmLocation', 'county', e.target.value)}
        required
        className={styles.inputField}
      />
      <div>
        <label>Select Crops (select multiple):</label>
        {['Maize', 'Wheat', 'Coffee', 'Tea', 'Vegetables', 'Fruits'].map(crop => (
          <div key={crop}>
            <input
              type="checkbox"
              id={`crop-${crop}`}
              checked={formData.crops ? JSON.parse(formData.crops).includes(crop) : false}
              onChange={() => handleArrayChange('crops', crop)}
            />
            <label htmlFor={`crop-${crop}`}>{crop}</label>
          </div>
        ))}
      </div>
      <label className={styles.fileLabel}>Upload KRA Certificate</label>
      <input
        type="file"
        name="kraCertificate"
        onChange={handleChange}
        required
        className={styles.inputField}
      />
    </>
  );

  const renderLandOwnerFields = () => (
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
        placeholder="Land Size (acres)"
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
  );

  const renderEquipmentRenterFields = () => (
    <>
      <input
        type="text"
        name="equipmentName"
        placeholder="Equipment Name"
        value={formData.equipmentName}
        onChange={handleChange}
        required
        className={styles.inputField}
      />
      <select
        name="equipmentType"
        value={formData.equipmentType}
        onChange={handleChange}
        required
        className={styles.inputField}
      >
        <option value="">Select Equipment Type</option>
        <option value="Tractor">Tractor</option>
        <option value="Harvester">Harvester</option>
        <option value="Plow">Plow</option>
        <option value="Irrigation">Irrigation System</option>
        <option value="Other">Other</option>
      </select>
      <label className={styles.fileLabel}>Upload License or Certification</label>
      <input
        type="file"
        name="licenseFile"
        onChange={handleChange}
        required
        className={styles.inputField}
      />
    </>
  );

  const renderLaborProviderFields = () => (
    <>
      <div>
        <label>Select Skills (select multiple):</label>
        {['Planting', 'Harvesting', 'Irrigation', 'Pruning', 'Weeding', 'Fertilizing'].map(skill => (
          <div key={skill}>
            <input
              type="checkbox"
              id={`skill-${skill}`}
              checked={formData.laborSkills ? JSON.parse(formData.laborSkills).includes(skill) : false}
              onChange={() => handleArrayChange('laborSkills', skill)}
            />
            <label htmlFor={`skill-${skill}`}>{skill}</label>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className={styles.signupContainer}>
      <h2 className={styles.signupTitle}>Sign Up</h2>

      <p className={styles.loginLink}>
        Already have an account? <NavLink to="/login" className={styles.link}>Log in</NavLink>
      </p>

      {error && <div className={styles.errorMessage}>{error}</div>}

      <form onSubmit={handleSubmit} className={styles.signupForm}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.inputField}
        />

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

        {/* Fields for non-user roles */}
        {formData.role && formData.role !== 'User' && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <input
              type="text"
              name="kraPin"
              placeholder="KRA PIN"
              value={formData.kraPin}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
          </>
        )}

        {/* Conditional Fields Based on Role */}
        {formData.role === 'Farmer' && renderFarmerFields()}
        {formData.role === 'Land Owner' && renderLandOwnerFields()}
        {formData.role === 'Equipment Renter' && renderEquipmentRenterFields()}
        {formData.role === 'Labor Provider' && renderLaborProviderFields()}

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

        <button 
          type="submit" 
          className={styles.signupButton}
          disabled={isLoading}
        >
          {isLoading ? 'Signing Up...' : 'Sign Up'}
        </button>

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