import { useState } from "react";
import Button from "../common/Button";


interface OtpVerificationFormProps {
  onSubmit: (otp: string) => void;
}

const OtpVerificationForm = ({
  onSubmit,
}: OtpVerificationFormProps) => {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(otp);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={otp}
        placeholder="Enter OTP"
        onChange={(e) => setOtp(e.target.value)}
      />
      <Button type="submit">
        Verify OTP
      </Button>
    </form>
  );
};

export default OtpVerificationForm;