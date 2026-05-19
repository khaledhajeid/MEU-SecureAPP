import { useState } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/Auth/login`, {
        username,
        password
      });
      
      localStorage.setItem('token', response.data.token);
      setMessage('Login successful. Redirecting to dashboard...');
      setIsError(false);
      
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
      
    } catch (error) {
      setMessage('Login failed. Please check your username and password.');
      setIsError(true);
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.card}>
        <h2 style={styles.header}>Secure Login</h2>
        <form onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Username</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(DOMPurify.sanitize(e.target.value))} 
              required 
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(DOMPurify.sanitize(e.target.value))} 
              required 
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.primaryButton}>Login</button>
        </form>
        <p style={styles.footerText}>
          Don't have an account? <Link to="/register" style={styles.link}>Register</Link>
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
  primaryButton: { width: '100%', padding: '12px', backgroundColor: '#0056b3', color: '#ffffff', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' },
  footerText: { textAlign: 'center', marginTop: '20px', color: '#666666', fontSize: '14px' },
  link: { color: '#0056b3', textDecoration: 'none', fontWeight: 'bold' },
  errorMessage: { marginTop: '20px', padding: '10px', backgroundColor: '#ffe6e6', color: '#d9534f', borderRadius: '6px', fontSize: '14px', textAlign: 'center', border: '1px solid #d9534f' },
  successMessage: { marginTop: '20px', padding: '10px', backgroundColor: '#e6f9e6', color: '#28a745', borderRadius: '6px', fontSize: '14px', textAlign: 'center', border: '1px solid #28a745' }
};