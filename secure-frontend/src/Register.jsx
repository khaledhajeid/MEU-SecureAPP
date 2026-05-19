import { useState } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5088/api/Auth/register', {
        username,
        email,
        password
      });
      setMessage('Account created successfully. Redirecting to login...');
      setIsError(false);
      setTimeout(() => navigate('/login'), 1500);
    } catch (error) {
      setMessage('Registration failed. Ensure password meets security requirements.');
      setIsError(true);
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.card}>
        <h2 style={styles.header}>Create Account</h2>
        <form onSubmit={handleRegister}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Username</label>
            <input type="text" onChange={(e) => setUsername(DOMPurify.sanitize(e.target.value))} required style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input type="email" onChange={(e) => setEmail(DOMPurify.sanitize(e.target.value))} required style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input type="password" onChange={(e) => setPassword(DOMPurify.sanitize(e.target.value))} required style={styles.input} />
          </div>
          <button type="submit" style={styles.successButton}>Register</button>
        </form>
        <p style={styles.footerText}>
          Already have an account? <Link to="/login" style={styles.link}>Login</Link>
        </p>
        {message && (
          <div style={isError ? styles.errorMessage : styles.successMessage}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  pageContainer: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f4f7f6', fontFamily: 'Arial, sans-serif' },
  card: { width: '100%', maxWidth: '400px', backgroundColor: '#ffffff', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' },
  header: { textAlign: 'center', color: '#333333', marginBottom: '30px', fontSize: '24px' },
  inputGroup: { marginBottom: '20px' },
  label: { display: 'block', marginBottom: '8px', color: '#555555', fontSize: '14px', fontWeight: 'bold' },
  input: { width: '100%', padding: '12px', boxSizing: 'border-box', borderRadius: '6px', border: '1px solid #cccccc', fontSize: '15px' },
  successButton: { width: '100%', padding: '12px', backgroundColor: '#28a745', color: '#ffffff', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' },
  footerText: { textAlign: 'center', marginTop: '20px', color: '#666666', fontSize: '14px' },
  link: { color: '#28a745', textDecoration: 'none', fontWeight: 'bold' },
  errorMessage: { marginTop: '20px', padding: '10px', backgroundColor: '#ffe6e6', color: '#d9534f', borderRadius: '6px', fontSize: '14px', textAlign: 'center', border: '1px solid #d9534f' },
  successMessage: { marginTop: '20px', padding: '10px', backgroundColor: '#e6f9e6', color: '#28a745', borderRadius: '6px', fontSize: '14px', textAlign: 'center', border: '1px solid #28a745' }
};