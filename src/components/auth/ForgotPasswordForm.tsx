import { useState } from "react";

import Card from "../common/Card";
import Input from "../common/Input";
import Button from "../common/Button";

interface ForgotPasswordFormProps {
  onSubmit: (email: string) => void;
  loading?: boolean;
}

const ForgotPasswordForm = ({
  onSubmit,
  loading = false,
}: ForgotPasswordFormProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    onSubmit(email);
  };

  return (
    <Card className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        Forgot Password
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <Input
          label="Email Address"
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(
            e: React.ChangeEvent<HTMLInputElement>
          ) => setEmail(e.target.value)}
          required
        />

        <Button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Sending..."
            : "Send OTP"}
        </Button>
      </form>
    </Card>
  );
};

export default ForgotPasswordForm;