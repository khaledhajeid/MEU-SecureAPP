# STRIDE Threat Modeling Report

## 1. Introduction
This document outlines the threat model for the Secure Web Application using the STRIDE methodology. The application architecture consists of a React.js frontend, an ASP.NET Core Web API backend, and a Dockerized SQL Server database.

## 2. Threat Analysis (STRIDE)

| Threat Type | Description | Target Component | Mitigation / Security Control |
| :--- | :--- | :--- | :--- |
| **Spoofing** | An attacker steals or forges a JWT to impersonate an Admin or User. | Authentication API / JWT | Use strong signing keys for JWT, set short token expiration, implement secure token storage, and enforce HTTPS. |
| **Tampering** | An attacker manipulates parameters in HTTP requests or injects malicious SQL commands to modify database records. | Backend API / Database | Implement strict input validation using FluentValidation/Data Annotations, and use Entity Framework Core (parameterized queries) to prevent SQL Injection. |
| **Repudiation** | A malicious user performs an action (e.g., deleting a record) and denies doing it. | Application Logic | Implement comprehensive Audit Logging for all transactions and administrative actions, storing logs securely. |
| **Information Disclosure** | Sensitive data (e.g., passwords or payment info) is exposed via database breach or insecure transit. | Database / Network | Hash all passwords using `bcrypt` (with salting). Encrypt sensitive data at rest using AES-256. Use HTTPS for all communications. |
| **Denial of Service (DoS)** | Attackers flood the login endpoint with requests (Brute-force) to make the system unavailable. | Authentication API | Implement Rate-Limiting on the API endpoints and integrate CAPTCHA for the login route. |
| **Elevation of Privilege** | A standard user bypasses authorization checks to access Admin-only endpoints. | Authorization Middleware | Enforce strict Role-Based Access Control (RBAC). Validate the `role` claim within the JWT for every protected route. |