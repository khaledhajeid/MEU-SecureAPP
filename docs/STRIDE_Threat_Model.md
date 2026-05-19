# STRIDE Threat Modeling Report

## 1. Introduction
This document outlines the threat model for the Secure Web Application using the STRIDE methodology. The application architecture consists of a React.js frontend, an ASP.NET Core Web API backend, and a SQL Server database.

## 2. Threat Analysis (STRIDE)

| Threat Type | Description | Target Component | Mitigation / Security Control |
| :--- | :--- | :--- | :--- |
| **Spoofing** | An attacker steals or forges credentials or tokens to impersonate a legitimate user or admin. | Authentication API / JWT | Enforced strong password policies (alphanumeric, minimum length) via ASP.NET Core Identity. Authentication utilizes cryptographically signed JSON Web Tokens (JWT) with strict issuer and audience validation. |
| **Tampering** | An attacker manipulates HTTP requests, injects malicious scripts (XSS), or alters database queries (SQLi). | Backend API / Frontend UI / Database | Mitigated SQL Injection by exclusively using Entity Framework Core parameterized queries. Mitigated XSS using DOMPurify on the React frontend and applying strict Content-Security-Policy (CSP) middleware headers. |
| **Repudiation** | A malicious user performs unauthorized actions and denies responsibility due to lack of traceability. | Application Logic | Configured ASP.NET Core default logging providers to track application events, errors, and authentication failures for audit purposes. |
| **Information Disclosure** | Sensitive application data, configuration keys, or user credentials are exposed to unauthorized parties. | Configuration / Database | Extracted all sensitive keys, connection strings, and default credentials into ignored `.env` and `appsettings.json` files. Passwords are mathematically hashed using ASP.NET Identity. Implemented AES encryption module for sensitive data at rest. |
| **Denial of Service (DoS)** | Attackers flood API endpoints (e.g., login) with excessive requests to exhaust server resources. | Backend API | Implemented an ASP.NET Core Partitioned Rate Limiter using a Fixed Window strategy, restricting clients to 100 requests per minute based on their IP address. |
| **Elevation of Privilege** | A standard user attempts to access administrative functions or bypass UI restrictions. | Authorization Middleware / Frontend | Enforced Role-Based Access Control (RBAC) on the backend using the `[Authorize(Roles = "Admin")]` attribute. Implemented Protected Route wrappers in the React frontend to restrict UI access. |