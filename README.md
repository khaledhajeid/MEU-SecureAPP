# Secure Web Application - MEU Security Project

## Description
A secure web application developed as part of the Application Security course at Middle East University (MEU). This project demonstrates strict secure coding practices, applying secure SDLC principles, RBAC, and modern web security mechanisms.

## Tech Stack
* **Frontend:** React.js (Vite), React Router DOM, Axios
* **Backend:** ASP.NET Core Web API
* **Database:** SQL Server
* **Security Libraries:** DOMPurify, ASP.NET Core Identity
* **Authentication:** Stateless JWT

## Features
* User Registration and Secure Login
* Role-based access control (RBAC): Admin and User roles
* Stateless Session management using JWT
* Password hashing using ASP.NET Core Identity
* Protected frontend routing
* Environmental variable configuration for sensitive data

## Security Implementations
* **Input/Output Sanitization:** Implemented DOMPurify on the client side and strict model validation on the server side to prevent XSS.
* **Authentication & Authorization:** Implemented JWT-based session management and Role-Based Access Control (RBAC). Protected endpoints utilize Authorize attributes.
* **Secrets Management:** All sensitive data, including database connection strings, JWT secret keys, and default admin credentials, are isolated using `.env` and `appsettings.json` files.
* **Security Headers:** Enforced strict Content-Security-Policy (CSP), X-Frame-Options (DENY), X-Content-Type-Options (nosniff), and XSS-Protection via custom middleware.
* **Rate Limiting:** Implemented a Fixed Window Rate Limiter (100 requests/minute) per IP address to mitigate Denial of Service (DoS) and brute-force attacks.
* **Cryptography:** Utilized AES encryption concepts for data at rest and ASP.NET Identity default PBKDF2 hashing for passwords.

## Threat Modeling
* See `docs/STRIDE_Threat_Model.md` for the STRIDE Threat Model.
* See `docs/DREAD_Risk_Assessment.md` for the DREAD Risk Assessment.

## Code Scanning Tools Used
- [x] GitHub CodeQL
- [ ] SonarQube
- [ ] Checkmarx
- [x] Snyk
- [ ] Bandit

> Reports and screenshots are located in the `scans/` directory.

## Deployment Instructions

### 1. Database Setup
Run the SQL Server instance and update the connection string in `SecureBackend/appsettings.json`.

### 2. Backend Setup
```bash
cd SecureBackend
dotnet ef database update
dotnet run
```

### 3. Frontend Setup
Create a `.env` file in the `secure-frontend` directory and add the following:
```bash
VITE_API_URL=http://localhost:5088
```

Then, install dependencies and start the development server:
```bash
cd secure-frontend
npm install
npm run dev
```

## Folder Structure
```text
/secure-frontend    : React App (Frontend)
/SecureBackend      : ASP.NET Web API (Backend)
/docs               : STRIDE and DREAD Documentation
/scans              : Scanning reports and screenshots
README.md           : Project documentation
```