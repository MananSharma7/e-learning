import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home.js";
import Header from "./components/pages/Header.js";
import Login from "./components/pages/Login.js";
import About from "./components/pages/About.js";
import Dashboard from "./components/pages/Dashboard.js";
import { ProtectedRoute } from "./components/ProtectedRoute.js";
import { AuthProvider } from "./components/hooks/useAuth.js";

const App = () => {

  return (
    <Router>
      <AuthProvider>
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App;
