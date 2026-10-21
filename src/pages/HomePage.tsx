import { useNavigate } from "react-router-dom";
// import HomeImage from "../assets/images/Home.jpg";
import WelcomeImage from "../assets/images/Welcome.jpg";
import Button from "../components/common/Button";
import "./homepage.css";
// import Card from "../components/common/Card";
// import { useState } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  // const [user,setUser]=useState("admin");

  return (
    <div className="image-container">
      <img src={WelcomeImage} alt="Background" className="responsive-image" />
      <div className="welcome-overlay">
        <h1>CineScript</h1>
        <p>Where Stories Find Their Champions</p>
        <div className="button-group">
          <Button
            onClick={() => navigate("/register")}
            style={{
              backgroundColor: "gold",
              color: "white",
              padding: "10px 30px",
              borderRadius: "10px"
            }}
          >
            Get Started
          </Button>
          <Button
            onClick={() => navigate("/login")}
            style={{
              backgroundColor: "gold",
              color: "white",
              padding: "10px 40px",
              borderRadius:"10px"
            }}
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
