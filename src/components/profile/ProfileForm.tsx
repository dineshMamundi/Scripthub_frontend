import { useEffect, useState } from "react";

import Card from "../common/Card";
import Input from "../common/Input";
// import TextArea from "../common/TextArea";
// import FileUpload from "../common/FileUpload";
import Button from "../common/Button";
import TextArea from "../common/TextArea";
import FileUpload from "../common/FileUpload";

interface ProfileData {
  name: string;
  phone: string;
  bio: string;
  photo: File | null;
}

interface ProfileFormProps {
  initialData?: Partial<ProfileData>;
  onSubmit: (data: ProfileData) => void;
  loading?: boolean;
}

const ProfileForm = ({
  initialData,
  onSubmit,
  loading = false,
}: ProfileFormProps) => {
  const [formData, setFormData] = useState<ProfileData>({
    name: "",
    phone: "",
    bio: "",
    photo: null,
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        phone: initialData.phone || "",
        bio: initialData.bio || "",
        photo: null,
      });
    }
  }, [initialData]);

 const handleChange = (
  field: keyof Omit<ProfileData, "photo">,
  value: string
) => {
  setFormData((prev) => ({
    ...prev,
    value,
  }));
};

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      photo: e.target.files?.[0] ?? null,
    }));
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        Update Profile
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <Input
          label="Name"
          value={formData.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("name", e.target.value)
          }
          placeholder="Enter Name"
          required
        />

        <Input
          label="Phone"
          value={formData.phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("phone", e.target.value)
          }
          placeholder="Enter Phone Number"
        />

        <TextArea
          label="Bio"
          value={formData.bio}
          rows={5}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement>
          ) => handleChange("bio", e.target.value)}
          placeholder="Tell something about yourself"
        />

        <FileUpload
          label="Profile Photo"
          accept="image/*"
          onChange={handleFileChange}
        />

        <Button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Saving..."
            : "Update Profile"}
        </Button>
      </form>
    </Card>
  );
};

export default ProfileForm;