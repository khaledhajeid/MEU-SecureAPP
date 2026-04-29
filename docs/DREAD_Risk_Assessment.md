# DREAD Risk Assessment Matrix

## 1. Overview
This assessment evaluates the risks identified in the STRIDE threat model using the DREAD methodology. Each category is scored from 1 (Low) to 3 (High)[cite: 3].

* **D**amage Potential: How much damage will an attack cause?[cite: 3]
* **R**eproducibility: How easily can the attack be reproduced?[cite: 3]
* **E**xploitability: How much time, effort, and expertise are needed?[cite: 3]
* **A**ffected Users: How many users will be impacted?[cite: 3]
* **D**iscoverability: How easy is it to discover the vulnerability?[cite: 3]

## 2. Risk Matrix

| Threat | Damage (1-3) | Reproducibility (1-3) | Exploitability (1-3) | Affected Users (1-3) | Discoverability (1-3) | Total Score | Average Rank / Risk Level |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SQL Injection**[cite: 3] | 3 | 3 | 2 | 3 | 2 | 13 | 2.6 - **High** |
| **Cross-Site Scripting (XSS)**[cite: 3] | 2 | 3 | 2 | 2 | 3 | 12 | 2.4 - **High** |
| **Session Hijacking (JWT Theft)**[cite: 3] | 3 | 2 | 2 | 1 | 2 | 10 | 2.0 - **Medium** |
| **Brute-Force Attack (DoS)** | 1 | 3 | 3 | 3 | 3 | 13 | 2.6 - **High** |
| **Broken Access Control (EoP)** | 3 | 2 | 2 | 2 | 2 | 11 | 2.2 - **Medium** |

## 3. Remediation Strategy

* **High Risk Items (Score >= 2.4):** Must be addressed immediately. Mitigated via Entity Framework parameterization (SQLi), output encoding/sanitization via DOMPurify (XSS), and implementing ASP.NET Core Rate Limiting (DoS)[cite: 1, 4].
* **Medium Risk Items (Score < 2.4):** Addressed as part of the core security architecture. Mitigated via strict RBAC validation and secure JWT configuration (HttpOnly cookies or secure local storage)[cite: 1, 4].