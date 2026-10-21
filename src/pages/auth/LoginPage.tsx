import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import LoginForm from "../../components/auth/LoginForm";
import { backdropClasses } from "@mui/material/Backdrop";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (credentials:any) => {
    try {
      // const response = await loginUser(credentials);
        localStorage.setItem("token","2345");
        
      // localStorage.setItem(
      //   "token",
      //   response.token
      // );

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <>
    <div style={{backgroundColor:"Green"}}>
      <LoginForm onSubmit={handleLogin} />
    </div>
    </>
    
  );
};

export default LoginPage;