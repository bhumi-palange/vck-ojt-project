// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.css'
import "./styles/Pages.css";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionPage from "./pages/AdmissionPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import { useState } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DevelopInfoPopup";






function App() {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  
  
  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Bhumi Palange"
          studentPhotoUrl="\images\bhumi.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
     
        <Router>
      
      <div className="main-layout">
        <Header />
        <div className="content">
          <Routes>
             <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/admissions" element={<AdmissionPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <ChatbotComponent />
        </div>
        <Footer />
      </div>
    </Router>
    </>
  );
}
export default App;