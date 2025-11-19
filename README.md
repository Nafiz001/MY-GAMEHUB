# GameHub

A modern, responsive gaming platform built with React that allows users to browse, discover, and explore video games. Features user authentication, game search/filtering, and a sleek UI with smooth animations.

## 🚀 Live Demo

[View Live Application](https://my-gamehub-165d0.web.app/)

## ✨ Features

- **User Authentication**: Secure login/register with Firebase Auth
- **Game Discovery**: Browse through a curated collection of games
- **Advanced Search & Filtering**: Find games by category, platform, or search terms
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Beautiful interface with Tailwind CSS and DaisyUI components
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Protected Routes**: Secure access to user-specific features
- **Profile Management**: Update user profiles with avatar support
- **Password Recovery**: Forgot password functionality with email reset

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing and navigation
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **Framer Motion** - Animation library for React

### Backend & Services
- **Firebase Authentication** - User authentication and management
- **Firebase Hosting** - Web hosting and deployment

### Development Tools
- **ESLint** - Code linting and formatting
- **Vite Plugins** - React plugin for fast refresh

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-gamehub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication with Email/Password provider
   - Copy your Firebase config to `src/firebase/firebase.config.js`

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Footer.jsx      # Site footer
│   ├── GameCard.jsx    # Individual game display card
│   ├── GameList.jsx    # List of games with pagination
│   ├── Header.jsx      # Navigation header with animations
│   └── ProtectedRoute.jsx # Route protection component
├── contexts/           # React contexts
│   └── AuthContext.jsx # Authentication context
├── layouts/            # Page layouts
│   └── HomeLayout.jsx  # Main layout wrapper
├── pages/              # Application pages
│   ├── Browse.jsx      # Game browsing page
│   ├── GameDetails.jsx # Individual game details
│   ├── Home.jsx        # Landing page with featured games
│   ├── Login.jsx       # User login page
│   ├── Register.jsx    # User registration page
│   ├── MyProfile.jsx   # User profile management
│   └── UpdateProfile.jsx # Profile update form
├── routes/             # Routing configuration
│   └── router.jsx      # App router setup
├── firebase/           # Firebase configuration
│   └── firebase.config.js
└── data/               # Static data files
    └── games.json      # Game data
```

## 🔧 Configuration

### Firebase Setup
Update `src/firebase/firebase.config.js` with your Firebase project configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

### Environment Variables
Create a `.env` file in the root directory for any environment-specific configurations.

## 🚀 Deployment

The application is configured for deployment on Firebase Hosting:

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase Hosting**
   ```bash
   firebase init hosting
   ```

4. **Deploy**
   ```bash
   firebase deploy
   ```

## 📱 Usage

1. **Browse Games**: Visit the home page to see featured games or use the browse page for advanced filtering
2. **Search**: Use the search bar to find specific games by title
3. **Filter**: Apply filters by category, platform, or other criteria
4. **Authentication**: Register a new account or login with existing credentials
5. **Profile**: Update your profile information and avatar
6. **Password Reset**: Use the "Forgot Password" link on the login page

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Game data provided by various gaming APIs and sources
- Icons and UI components from DaisyUI and Tailwind CSS
- Firebase for backend services
- React community for excellent documentation and tools
