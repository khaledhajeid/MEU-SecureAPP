# DREAD Risk Assessment Matrix

## 1. Overview
This assessment evaluates the risks identified in the STRIDE threat model using the DREAD methodology. Each category is scored from 1 (Low) to 3 (High).

* **D**amage Potential: How much damage will an attack cause?
* **R**eproducibility: How easily can the attack be reproduced?
* **E**xploitability: How much time, effort, and expertise are needed?
* **A**ffected Users: How many users will be impacted?
* **D**iscoverability: How easy is it to discover the vulnerability?

## 2. Risk Matrix

| Threat | Damage (1-3) | Reproducibility (1-3) | Exploitability (1-3) | Affected Users (1-3) | Discoverability (1-3) | Total Score | Average Rank / Risk Level |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SQL Injection** | 3 | 3 | 2 | 3 | 2 | 13 | 2.6 - **High** |
| **Cross-Site Scripting (XSS)** | 2 | 3 | 2 | 2 | 3 | 12 | 2.4 - **High** |
| **Brute-Force Attack (DoS)** | 1 | 3 | 3 | 3 | 3 | 13 | 2.6 - **High** |
| **Broken Access Control (EoP)** | 3 | 2 | 2 | 2 | 2 | 11 | 2.2 - **Medium** |
| **Session Hijacking (JWT)** | 3 | 2 | 2 | 1 | 2 | 10 | 2.0 - **Medium** |

## 3. Remediation Strategy

* **High Risk Items (Score >= 2.4):** Addressed immediately during the secure development phase.
  * **SQL Injection:** Mitigated exclusively via Entity Framework Core, which automatically enforces parameterized queries to neutralize malicious payloads.
  * **XSS:** Mitigated via input/output sanitization using the DOMPurify library on the React frontend, coupled with strict Content-Security-Policy (CSP) headers applied via ASP.NET Core middleware.
  * **Brute-Force (DoS):** Mitigated by implementing ASP.NET Core Partitioned Rate Limiting (Fixed Window strategy restricting endpoints to 100 requests per minute per IP).

* **Medium Risk Items (Score < 2.4):** Addressed as part of the core security architecture.
  * **Broken Access Control:** Mitigated via strict Role-Based Access Control (RBAC) utilizing the `[Authorize(Roles = "Admin")]` attribute on backend API endpoints and Protected Route wrappers in the React frontend.
  * **Session Hijacking:** Mitigated by utilizing securely signed JSON Web Tokens (JWT) with strict issuer, audience, and expiration validation, combined with XSS defenses to protect client-side storage.