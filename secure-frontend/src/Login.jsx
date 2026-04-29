import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // إرسال الطلب للباك إند
      const response = await axios.post('http://localhost:5088/api/Auth/login', {
        username,
        password
      });
      
      // تخزين الـ JWT في متصفح المستخدم (Client-side storage)
      localStorage.setItem('token', response.data.token);
      setMessage('✅ تم تسجيل الدخول بنجاح! تم تخزين الـ Token.');
      
    } catch (error) {
      // Error Handling: إظهار رسالة خطأ عامة بدون تفاصيل حساسة
      setMessage('❌ فشل تسجيل الدخول. تأكد من البيانات.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: '50px auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Secure Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block' }}>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block' }}>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
          Login
        </button>
      </form>
      {message && <p style={{ marginTop: '15px', fontWeight: 'bold' }}>{message}</p>}
    </div>
  );
}