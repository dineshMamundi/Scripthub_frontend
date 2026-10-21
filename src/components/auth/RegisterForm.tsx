import { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from "../common/Card";
import Input from "../common/Input";
import Button from "../common/Button";

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}

interface RegisterFormProps {
  onSubmit: (data: RegisterFormData) => void;
  loading?: boolean;
}

const RegisterForm = ({
  onSubmit,
  loading = false,
}: RegisterFormProps) => {
  const [value, setValue] = useState(0);
  const [formData, setFormData] =
    useState<RegisterFormData>({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "director",
    });

const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement
  >
) => {
  const { name, value } = e.target;
   console.log(name, value);
  setFormData((prev) => ({
    ...prev,
   [name]: value,
  }));
};

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    onSubmit(formData);
  };

  function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Card className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        Register
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <Input
          label="Name"
          name="name"
          value={formData.name}
          placeholder="Enter your name"
          onChange={handleChange}
          required
        />

        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
          required
        />

        <Input
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          placeholder="Enter password"
          onChange={handleChange}
          required
        />

        <Input
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          placeholder="Confirm password"
          onChange={handleChange}
          required
        />
      <Tabs value={value} onChange ={handleTabChange} aria-label="basic tabs example">
          <Tab label="Director" {...a11yProps(0)} />
          <Tab label="Producer" {...a11yProps(1)} />
          <Tab label="Admin" {...a11yProps(2)} />
        </Tabs>
        {/* <div className="flex flex-col gap-2">
          <label className="font-medium">
            Register As
          </label>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border rounded-lg p-2"
          >
            <option value="director">
              Director
            </option>
            <option value="producer">
              Producer
            </option>
             <option value="admin">
              Admin
            </option>
          </select>
        </div> */}

        <Button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Registering..."
            : "Register"}
        </Button>
      </form>
    </Card>
  );
};

export default RegisterForm;