import React, { useState, useEffect } from 'react';
import '../styles/DbConnect.css';

const DbConnect = () => {
  const [engine, setEngine] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [host, setHost] = useState('');
  const [port, setPort] = useState('');
  const [database, setDatabase] = useState('');
  const [driver, setDriver] = useState('');
  const [encrypt, setEncrypt] = useState('');
  const [trustServerCertificate, setTrustServerCertificate] = useState('');

  const handleEngineChange = (e) => {
    setEngine(e.target.value);
    // Additional logic based on engine change
  };

  // Add similar onChange handlers for other inputs as needed

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your form submission logic here
  };

  return (
    <div>
      <div className="header">
        <h1>CEREBRO</h1>
      </div>
      <div className="container">
        <form id="dbConnectForm" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="engine">Engine:</label>
            <select name="engine" id="engine" value={engine} onChange={handleEngineChange}>
              <option value="">Select Database Engine</option>
              <option value="sqlserver">SQL Server</option>
              <option value="postgresql">PostgreSQL</option>
              <option value="oracle">Oracle</option>
              <option value="mysql">MySQL</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-field">
            <label htmlFor="host">Host:</label>
            <input type="text" id="host" value={host} onChange={(e) => setHost(e.target.value)} />
          </div>
          <div className="form-field">
            <label htmlFor="port">Port:</label>
            <input type="text" id="port" value={port} onChange={(e) => setPort(e.target.value)} />
          </div>
          <div className="form-field">
            <label htmlFor="database">Database Name:</label>
            <input type="text" id="database" value={database} onChange={(e) => setDatabase(e.target.value)} />
          </div>
          <div className="form-field">
            <label htmlFor="driver">Driver:</label>
            <input type="text" id="driver" value={driver} onChange={(e) => setDriver(e.target.value)} />
          </div>
          <div className="form-field">
            <label htmlFor="encrypt">Encrypt:</label>
            <select name="encrypt" id="encrypt" value={encrypt} onChange={(e) => setEncrypt(e.target.value)}>
              <option value="">Encrypt?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="trustServerCertificate">Trust Server Certificate:</label>
            <select name="trustServerCertificate" id="trustServerCertificate" value={trustServerCertificate} onChange={(e) => setTrustServerCertificate(e.target.value)}>
              <option value="">Trust Server Certificate?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button type="submit" className="submit-btn">Connect</button>
        </form>
      </div>
    </div>
  );
};

export default DbConnect;
