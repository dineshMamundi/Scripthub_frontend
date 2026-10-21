import { useState } from "react";

import Card from "../common/Card";
import Input from "../common/Input";
import Button from "../common/Button";

export interface LoginFormData {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
  loading?: boolean;
}

const LoginForm = ({
  onSubmit,
  loading = false,
}: LoginFormProps) => {
  const [formData, setFormData] =
    useState<LoginFormData>({
      email: "",
      password: "",
    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    console.log(name,value,"login")
    setFormData((prev) => ({
      ...prev,
      [name]:value,
    }));
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div style={{border:"2px solid gray", minWidth:"450px", height:"350px"}}>
    <Card className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        Login
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
          // style={{border:"1px solid black",borderRadius:"2px",backgroundColor:"pink"}}
          required
        />

        <Input
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          placeholder="Enter your password"
          onChange={handleChange}
          // style={{border:"1px solid black",borderRadius:"2px",backgroundColor:"blue"}}
          required
        />

        <Button
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </Card>
    </div>
  );
};

export default LoginForm;