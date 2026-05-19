import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [apiData, setApiData] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const fetchData = async (endpoint) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/Test/${endpoint}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setApiData(`Server Response: ${response.data.message}`);
      setIsError(false);
    } catch (error) {
      if (error.response && error.response.status === 403) {
        setApiData('Error 403: Forbidden. You do not have Admin privileges.');
      } else {
        setApiData('Error: Connection failed or session expired.');
      }
      setIsError(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.card}>
        <h2 style={styles.header}>Secure Dashboard</h2>
        <p style={styles.subHeader}>Welcome to the protected application area.</p>
        
        <div style={styles.buttonGroup}>
          <button onClick={() => fetchData('user-data')} style={styles.infoButton}>
            Fetch User Data
          </button>
          <button onClick={() => fetchData('admin-data')} style={styles.dangerButton}>
            Fetch Admin Data
          </button>
        </div>

        {apiData && (
          <div style={isError ? styles.errorBox : styles.successBox}>
            {apiData}
          </div>
        )}

        <button onClick={handleLogout} style={styles.logoutButton}>
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f4f7f6', fontFamily: 'Arial, sans-serif' },
  card: { width: '100%', maxWidth: '550px', backgroundColor: '#ffffff', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', textAlign: 'center' },
  header: { color: '#333333', marginBottom: '10px', fontSize: '26px' },
  subHeader: { color: '#666666', fontSize: '16px', marginBottom: '30px' },
  buttonGroup: { display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '30px' },
  infoButton: { padding: '12px 20px', backgroundColor: '#17a2b8', color: '#ffffff', border: 'none', borderRadius: '6px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', flex: 1 },
  dangerButton: { padding: '12px 20px', backgroundColor: '#dc3545', color: '#ffffff', border: 'none', borderRadius: '6px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', flex: 1 },
  logoutButton: { padding: '10px 20px', backgroundColor: '#6c757d', color: '#ffffff', border: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px' },
  successBox: { padding: '15px', backgroundColor: '#e6f9e6', color: '#28a745', borderRadius: '6px', border: '1px solid #28a745', fontSize: '15px', marginBottom: '15px' },
  errorBox: { padding: '15px', backgroundColor: '#ffe6e6', color: '#d9534f', borderRadius: '6px', border: '1px solid #d9534f', fontSize: '15px', marginBottom: '15px' }
};