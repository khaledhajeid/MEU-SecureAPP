# STRIDE Threat Modeling Report

## 1. Introduction
This document outlines the threat model for the Secure Web Application using the STRIDE methodology. The application architecture consists of a React.js frontend, an ASP.NET Core Web API backend, and a Dockerized SQL Server database.

## 2. Threat Analysis (STRIDE)

| Threat Type | Description | Target Component | Mitigation / Security Control |
| :--- | :--- | :--- | :--- |
| **Spoofing** | An attacker steals or forges a JWT to impersonate an Admin or User[cite: 3]. | Authentication API / JWT | Use strong signing keys for JWT, set short token expiration, implement secure token storage, and enforce HTTPS[cite: 1, 4]. |
| **Tampering** | An attacker manipulates parameters in HTTP requests or injects malicious SQL commands to modify database records[cite: 3, 4]. | Backend API / Database | Implement strict input validation using FluentValidation/Data Annotations, and use Entity Framework Core (parameterized queries) to prevent SQL Injection[cite: 1, 4]. |
| **Repudiation** | A malicious user performs an action (e.g., deleting a record) and denies doing it[cite: 3]. | Application Logic | Implement comprehensive Audit Logging for all transactions and administrative actions, storing logs securely[cite: 2, 4]. |
| **Information Disclosure** | Sensitive data (e.g., passwords or payment info) is exposed via database breach or insecure transit[cite: 3]. | Database / Network | Hash all passwords using `bcrypt` (with salting)[cite: 1, 4]. Encrypt sensitive data at rest using AES-256[cite: 1, 4]. Use HTTPS for all communications[cite: 2, 4]. |
| **Denial of Service (DoS)** | Attackers flood the login endpoint with requests (Brute-force) to make the system unavailable[cite: 3]. | Authentication API | Implement Rate-Limiting on the API endpoints and integrate CAPTCHA for the login route[cite: 1, 3]. |
| **Elevation of Privilege** | A standard user bypasses authorization checks to access Admin-only endpoints[cite: 3]. | Authorization Middleware | Enforce strict Role-Based Access Control (RBAC)[cite: 1, 4]. Validate the `role` claim within the JWT for every protected route[cite: 4]. |