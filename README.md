# Secure Web Application - MEU Security Project

## Description
A secure web application developed as part of the Application Security course at Middle East University (MEU). This project demonstrates strong secure coding practices and applies secure SDLC principles.

## Tech Stack
* **Frontend:** React.js (Vite)
* **Backend:** ASP.NET Core Web API 10.0
* **Database:** SQL Server (Dockerized)
* **Authentication:** JWT + ASP.NET Core Identity (bcrypt equivalent hashing)
* **Deployment:** GitHub Repository / Localhost

## Features
* User Registration and Secure Login
* Role-based access control (RBAC): Admin & User roles
* Stateless Session management using JWT
* Password hashing using ASP.NET Core Identity
* Input validation on both client and server sides
* Output sanitization to prevent XSS
* STRIDE & DREAD security modeling documented
* Rate-Limiting implemented to mitigate brute-force attacks (Bonus +1).

## Security Implementations
* **Input Validation:** ASP.NET Core Data Annotations & ModelState Validation.
* **Output Sanitization:** DOMPurify implemented on the React frontend.
* **Password Hashing:** ASP.NET Identity default hashing (PBKDF2/bcrypt standard).
* **Session Management:** Secure JWT with expiration and strict validation.
* **Headers & Network:** HTTPS Redirection, Strict CORS policies.
* **Authorization:** `[Authorize]` attributes with specific Role checks.

## Threat Modeling
See [docs/STRIDE_Threat_Model.md](docs/STRIDE_Threat_Model.md) for the STRIDE Threat Model.
See [docs/DREAD_Risk_Assessment.md](docs/DREAD_Risk_Assessment.md) for the DREAD Risk Assessment.

## Code Scanning Tools Used
- [x] GitHub CodeQL
- [ ] SonarQube
- [ ] Checkmarx
- [x] Snyk
- [ ] Bandit (if Python)

*Reports/screenshots are included in the `scans/` directory.*

## Deployment
**Instructions to run locally:**

**1. Database (Docker):**
```bash
docker-compose up -d
```
**2. Backend (ASP.NET Core):**
```bash
cd SecureBackend
dotnet ef database update
dotnet run
```
**3. Frontend (React):**
```bash
cd secure-frontend
npm install
npm run dev
```
## Folder Structure
/secure-frontend    --> React App (Frontend)
/SecureBackend      --> ASP.NET Web API (Backend)
/docs               --> STRIDE, DREAD Documentation
/scans              --> Scanning reports/screenshots
README.md
docker-compose.yml  --> SQL Server environment
