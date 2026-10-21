import { useNavigate } from "react-router-dom";
// import { verifyOtp } from "../../services/authService";
import OtpVerificationForm from "../../components/auth/OtpVerificationForm";
import { verifyOtp } from "../../services/authService";

const VerifyOtpPage = () => {
  const navigate = useNavigate();

  const handleVerify = async (otp:string) => {
    try {
      // await verifyOtp(otp);

      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <OtpVerificationForm
      onSubmit={handleVerify}
    />
  );
};

export default VerifyOtpPage;