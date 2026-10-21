import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";
import RegisterForm from "../../components/auth/RegisterForm";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = async (userData:any) => {
    try {
      // await registerUser(userData);

      navigate("/verify-otp");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RegisterForm
      onSubmit={handleRegister}
    />
  );
};

export default RegisterPage;