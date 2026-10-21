import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../services/authService";
import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (email:any) => {
    try {
      await forgotPassword(email);

      navigate("/verify-otp");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ForgotPasswordForm
      onSubmit={handleSubmit}
    />
  );
};

export default ForgotPasswordPage;