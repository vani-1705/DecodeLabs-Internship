# Task4_Form-Design-and-Validation

# 📝 DecodeLabs Registration Portal

A modern and responsive Registration & Authentication website created using HTML, CSS, and JavaScript featuring Sign In, Create Account, real-time validation, password verification, country code selection, success/error messages, and responsive design.

---

# 🌐 Live Demo

## Vercel:
(Add Your Deployment Link Here)

---

# 📌 Project Overview

DecodeLabs Registration Portal is a professional frontend project designed to demonstrate form handling and validation using JavaScript.

The application allows users to create an account and sign in through a clean and responsive interface. It includes input validation, password security checks, country code selection, dynamic feedback messages, and mobile-friendly layouts.

This project was developed as part of the Frontend Development Internship Project 4: Form Design & Validation.

---

# ✨ Features

- User Registration Form
- User Sign In Form
- Real-Time Form Validation
- Email Validation
- Password Strength Validation
- Confirm Password Verification
- Searchable Country Code Selection
- International Phone Number Support
- Error & Success Messages
- Responsive Design
- Accessibility Support
- Modern UI Design

---

# 📝 Forms Included

## Create Account

- Full Name
- Phone Number
- Country Code
- Email Address
- Password
- Confirm Password

## Sign In

- Email Address
- Password

---

# 🔒 Validation Features

### Email Validation

```javascript
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

Checks proper email format before submission.

### Password Validation

```javascript
/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
```

Requirements:

- Uppercase Letter
- Lowercase Letter
- Number
- Special Character
- Minimum 8 Characters

### Confirm Password Validation

Ensures both password fields match before account creation.

### Phone Number Validation

- Country Code Support
- Digit Length Validation
- International Number Format Support

---

# 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Regular Expressions (Regex)
- ARIA Accessibility Attributes
- Google Fonts

---

# 📂 Project Structure

```text
DecodeLabs-Registration-Portal/
│
├── index.html
├── styles.css
├── app.js
└── README.md
```

---

# 🚀 Functionalities Implemented

## 📝 Form Handling

Collects and validates user information before submission.

## 🚫 Prevent Default Submission

```javascript
event.preventDefault();
```

Prevents page refresh and allows validation to run safely.

## 🔍 Searchable Country Picker

Users can search and select countries along with international calling codes.

## ⚠ Error Handling

Displays clear validation messages when user input is invalid.

Examples:

```text
Invalid Email Address
Passwords Do Not Match
Phone Number Length Invalid
```

## ✅ Success Feedback

Displays confirmation messages after successful validation.

```text
Account Created Successfully!
Signed In Successfully!
```

---

# 🎨 Design Highlights

- Sky Blue Background Theme
- Glassmorphism Form Cards
- Light Pink & Golden Buttons
- Responsive Layout
- Smooth Hover Effects
- Clean Typography

---

# 📱 Responsive Design

The website is optimized for:

- Desktop Screens
- Tablets / iPads
- Mobile Devices

### Desktop Layout

```text
Welcome | Get Started
```

### Mobile Layout

```text
Welcome
Get Started
```

---

# ♿ Accessibility Features

- Semantic HTML
- ARIA Labels
- aria-invalid
- aria-describedby
- Keyboard Navigation Support
- Screen Reader Compatibility

---

# 🚀 Future Improvements

- Backend Integration
- Database Connectivity
- OTP Verification
- Google Authentication
- Password Reset System
- User Dashboard

---

# 👩‍💻 Author

Vani Vasantha Laxmi Yepparika

Frontend Development Internship Project

---

# 📌 Conclusion

DecodeLabs Registration Portal is a frontend project focused on form validation, user experience, accessibility, and responsive design. It demonstrates practical implementation of HTML, CSS, JavaScript, and Regex-based validation to create a secure and user-friendly registration system.
