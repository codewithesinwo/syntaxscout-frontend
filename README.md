# Syntax Scout Frontend

A modern, responsive frontend application for an online learning platform built with React and Vite. Syntax Scout provides a comprehensive dashboard for students to access courses, track assignments, view grades, and manage their learning journey.

## 🚀 Features

- **Interactive Dashboard**: Personalized dashboard with course progress, assignments, grades, and messages
- **Course Management**: Browse and enroll in various tech courses including Web Development, React, Cybersecurity, and more
- **User Authentication**: Secure login, signup, and password reset functionality
- **Payment Integration**: Seamless payment processing with Stripe
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Dark/Light Theme**: Theme switching capability with context management
- **Data Visualization**: Charts and statistics using Recharts
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **Local Storage**: Persistent data storage for user preferences

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Payment**: Stripe
- **Linting**: ESLint
- **Testing**: React Testing Library

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/codewithesinwo/syntax-scout-frontend.git
   cd syntax-scout-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🏗️ Project Structure

```
src/
├── assets/          # Static assets
├── components/      # Reusable UI components
│   ├── About.jsx
│   ├── ContactAndFeedback.jsx
│   ├── Courses.jsx
│   ├── DashboardLayout.jsx
│   ├── Footer.jsx
│   ├── Headers.jsx
│   ├── Hero.jsx
│   ├── LearnBanner.jsx
│   ├── Stats.jsx
│   ├── WebLayout.jsx
│   └── WhyLearn.jsx
├── context/         # React context providers
│   └── ThemeContext.jsx
├── pages/           # Page components
│   ├── ContactForm.jsx
│   ├── Dashboard.jsx
│   ├── DashboardAssignment.jsx
│   ├── DashboardCourses.jsx
│   ├── DashboardGrade.jsx
│   ├── DashboardHeader.jsx
│   ├── DashboardMessage.jsx
│   ├── DashboardSetting.jsx
│   ├── DashboardSideShow.jsx
│   ├── Feedback.jsx
│   ├── LifetimeAccess.jsx
│   ├── Login.jsx
│   ├── PageNotFound.jsx
│   ├── Path.jsx
│   ├── Payment.jsx
│   ├── ResetPassword.jsx
│   ├── SignUp.jsx
│   └── VerificationCode.jsx
└── utils/           # Utility functions
    └── localstorage.js
```

## 🎨 Styling

The application uses Tailwind CSS for styling with a custom design system. Theme switching is implemented using React Context to manage light and dark modes.

## 🔐 Authentication

User authentication is handled through secure login/signup forms with verification codes and password reset functionality.

## 💳 Payment Integration

Stripe is integrated for handling course payments and subscriptions, providing a secure checkout experience.

## 📱 Responsive Design

The application is fully responsive and optimized for mobile, tablet, and desktop devices.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Contact

For questions or support, please contact the development team.

---

Built with ❤️ using React and Vite
