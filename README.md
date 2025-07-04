#  Fidibo UI Tests (Cypress E2E)

This project contains end-to-end (E2E) tests for the login functionality of the [Fidibo](https://fidibo.com) website, developed using the **Cypress** framework. The tests cover successful and unsuccessful login scenarios using various authentication methods.

---

##  Features

-  Login with valid email and password
-  Login failure with invalid credentials
- Organized and extensible project structure
- Secure use of environment variables (`cypress.env.json`)
- Designed for future enhancements: OTP login and Google login

---

##  Login Methods on Fidibo

Fidibo offers three login methods for users:

-  **Email & Password Login** 
  Fully implemented and tested.

-  **Mobile Number & OTP Login** 🔜  
  Requires mocking the OTP API or simulating SMS code reception.

-  **Login with Google Account (OAuth)** 🔜  
  Uses a popup-based OAuth flow, which is not directly testable in Cypress unless stubbed or mocked.

---

##  Project Structure


fidibo-ui-tests/
│
├── cypress/
│ └── e2e/
│ ├── login.cy.js # Successful login with email
│ └── login-fail.cy.js # Failed login with email
│
├── cypress.config.js # Cypress configInstall dependencies:

├── cypress.env.json # Contains sensitive data (excluded via .gitignore)
├── .gitignore
├── package.json
└── README.md



---

##  Installation & Running Tests

1. Clone the repository:

```bash
git clone https://github.com/nedasarv/fidibo-ui-tests.git
cd fidibo-ui-tests

## 
2. Install dependencies:
npm install

##
3. Create a cypress.env.json file and add your credentials:
{
  "email": "your_email@example.com",
  "password": "your_password"
}
 This file is listed in .gitignore and will not be tracked in Git.
##
4. Run tests:
npx cypress open

##
Project Status
 Login success with email & password

 Login failure with email

 Login with phone number & OTP

 Login with Google account
##
 Author
Developed by Neda Sarvestani
