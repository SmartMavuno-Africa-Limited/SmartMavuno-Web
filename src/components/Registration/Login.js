import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Login.module.css'; // Import CSS module
import { FaGoogle, FaEye, FaEyeSlash, FaCheckCircle, FaTimesCircle, FaSpinner } from 'react-icons/fa'; // Added icons for dialogs

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('https://smartmavuno-backend-vqkz.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Login successful
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify({
          _id: data._id,
          username: data.username,
          email: data.email,
          role: data.role,
          profileImage: data.profileImage
        }));
        
        // Show success dialog
        setDialogMessage('Login successful! Redirecting...');
        setShowSuccessDialog(true);
        
        // Redirect after a short delay
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      } else {
        // Login failed
        setDialogMessage(data.message || 'Login failed. Please check your credentials.');
        setShowErrorDialog(true);
      }
    } catch (err) {
      setDialogMessage('Network error. Please check your connection and try again.');
      setShowErrorDialog(true);
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const closeDialog = () => {
    setShowSuccessDialog(false);
    setShowErrorDialog(false);
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.loginTitle}>Log In</h2>

      <p className={styles.signupLink}>
        Don't have an account? <NavLink to="/signup" className={styles.link}>Sign up</NavLink>
      </p>

      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.inputField}
          disabled={isLoading}
        />
        <div className={styles.passwordWrapper}>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className={styles.inputField}
            disabled={isLoading}
          />
          <span onClick={togglePasswordVisibility} className={styles.eyeIcon}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button 
          type="submit" 
          className={styles.loginButton}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <FaSpinner className={styles.spinner} /> Logging In...
            </>
          ) : (
            'Log In'
          )}
        </button>
        
        <NavLink to="/forgot-password" className={styles.forgotPasswordLink}>
          Forgot your password?
        </NavLink>
      </form>

      <div className={styles.orDivider}>OR</div>

      <button className={styles.googleLogin} disabled={isLoading}>
        <FaGoogle className={styles.googleIcon} />
        Log In with Google
      </button>

      {/* Success Dialog */}
      {showSuccessDialog && (
        <div className={styles.dialogOverlay}>
          <div className={`${styles.dialog} ${styles.successDialog}`}>
            <FaCheckCircle className={styles.dialogIcon} />
            <h3>Success!</h3>
            <p>{dialogMessage}</p>
            <div className={styles.progressBar}>
              <div className={styles.progress}></div>
            </div>
          </div>
        </div>
      )}

      {/* Error Dialog */}
      {showErrorDialog && (
        <div className={styles.dialogOverlay}>
          <div className={`${styles.dialog} ${styles.errorDialog}`}>
            <FaTimesCircle className={styles.dialogIcon} />
            <h3>Error</h3>
            <p>{dialogMessage}</p>
            <button className={styles.dialogButton} onClick={closeDialog}>
              OK
            </button>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {isLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingContent}>
            <FaSpinner className={styles.loadingSpinner} />
            <p>Sending request...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;