#  Fidibo UI Tests (Cypress E2E)

This project contains end-to-end (E2E) tests for Fidibo's web login flow using Cypress.

---

##  Login Methods Supported by Fidibo

Fidibo allows users to log in using three different methods:

-  Email and Password ✅ (tested here)
-  Phone Number and OTP (Planned)
-  Google Account (OAuth) (Not supported by Cypress natively)

---

##  Test Cases Included

-  Login success with valid email & password  
-  Login failure with incorrect email or password  
-  Login with phone number & OTP (to be added)  
-  Login with Google account (not directly testable via Cypress)

---

##  Installation & Running Tests

1. Clone the repo:

```bash
git clone https://github.com/nedasarv/fidibo-ui-tests.git
cd fidibo-ui-tests
Install dependencies:
npm install
Add your credentials to cypress.env.json:
{
  "email": "your-email@example.com",
  "password": "your-password"
}
⚠️ This file is listed in .gitignore and will not be tracked by Git.
Run Cypress:
npx cypress open
Author
Developed by Neda Sarvestani
 Notes
OTP and OAuth login flows are not yet implemented due to technical complexity.
This repo is primarily built for portfolio/demo purposes and learning Cypress E2E testing.

yaml
Copy
Edit