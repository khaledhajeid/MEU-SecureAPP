# Secure Web Application - MEU Security Project

## Description
A secure web application developed as part of the Application Security course at Middle East University (MEU)[cite: 1]. This project demonstrates strong secure coding practices and applies secure SDLC principles[cite: 1].

## Tech Stack
* **Frontend:** React.js (Vite)[cite: 1]
* **Backend:** ASP.NET Core Web API 10.0[cite: 1]
* **Database:** SQL Server (Dockerized)
* **Authentication:** JWT + ASP.NET Core Identity (bcrypt equivalent hashing)[cite: 1]
* **Deployment:** GitHub Repository / Localhost[cite: 1]

## Features
* User Registration and Secure Login[cite: 1]
* Role-based access control (RBAC): Admin & User roles[cite: 1]
* Stateless Session management using JWT[cite: 1]
* Password hashing using ASP.NET Core Identity[cite: 1]
* Input validation on both client and server sides[cite: 1]
* Output sanitization to prevent XSS[cite: 1]
* STRIDE & DREAD security modeling documented[cite: 1]
* Rate-Limiting implemented to mitigate brute-force attacks (Bonus +1)[cite: 1].

## Security Implementations
* **Input Validation:** ASP.NET Core Data Annotations & ModelState Validation[cite: 1].
* **Output Sanitization:** DOMPurify implemented on the React frontend[cite: 1].
* **Password Hashing:** ASP.NET Identity default hashing (PBKDF2/bcrypt standard)[cite: 1].
* **Session Management:** Secure JWT with expiration and strict validation[cite: 1].
* **Headers & Network:** HTTPS Redirection, Strict CORS policies[cite: 1].
* **Authorization:** `[Authorize]` attributes with specific Role checks[cite: 1].

## Threat Modeling
See [docs/STRIDE_Threat_Model.md](docs/STRIDE_Threat_Model.md) for the STRIDE Threat Model[cite: 1].
See [docs/DREAD_Risk_Assessment.md](docs/DREAD_Risk_Assessment.md) for the DREAD Risk Assessment[cite: 1].

## Code Scanning Tools Used
- [x] GitHub CodeQL[cite: 1]
- [ ] SonarQube[cite: 1]
- [ ] Checkmarx[cite: 1]
- [x] Snyk[cite: 1]
- [ ] Bandit (if Python)[cite: 1]

*Reports/screenshots are included in the `scans/` directory.*[cite: 1]

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
/docs               --> STRIDE, DREAD Documentation[cite: 1]
/scans              --> Scanning reports/screenshots[cite: 1]
README.md
docker-compose.yml  --> SQL Server environment
