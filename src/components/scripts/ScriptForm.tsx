import { useEffect, useState } from "react";

import Card from "../common/Card";
import Input from "../common/Input";
// import Dropdown from "../common/Dropdown";
import Button from "../common/Button";
import Dropdown from "../common/dropdown";
import TextArea from "../common/TextArea";
// import TextArea from "../common/TextArea";
// import FileUpload from "../common/FileUpload";

interface Script {
  title: string;
  genre: string;
  synopsis: string;
}

export interface ScriptFormData {
  title: string;
  genre: string;
  synopsis: string;
  scriptFile: File | null;
}

interface ScriptFormProps {
  initialData?: Partial<Script>;
  onSubmit: (data: ScriptFormData) => void;
  isEdit?: boolean;
  loading?: boolean;
}

const genreOptions = [
  { label: "Action", value: "Action" },
  { label: "Drama", value: "Drama" },
  { label: "Comedy", value: "Comedy" },
  { label: "Thriller", value: "Thriller" },
  { label: "Romance", value: "Romance" },
];

const ScriptForm = ({
  initialData,
  onSubmit,
  isEdit = false,
  loading = false,
}: ScriptFormProps) => {
  
  const [formData, setFormData] =
    useState<ScriptFormData>({
      title: "",
      genre: "",
      synopsis: "",
      scriptFile: null,
    });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        genre: initialData.genre || "",
        synopsis: initialData.synopsis || "",
        scriptFile: null,
      });
    }
  }, [initialData]);

 const handleChange = (
  name: keyof ScriptFormData,
  value: string
) => {
  setFormData((prev) => ({
    ...prev,
    value,
  }));
};

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      scriptFile:
        event.target.files?.[0] ?? null,
    }));
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        {isEdit ? "Edit Script" : "Create Script"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <Input
          label="Title"
          value={formData.title}
          placeholder="Enter script title"
          onChange={(e) =>
            handleChange("title", e.target.value)
          }
          required
        />

        <Dropdown
          label="Genre"
          value={formData.genre}
          options={genreOptions}
          onChange={(value: string) =>
            handleChange("genre", value)
          }
        />

        <TextArea
          label="Synopsis"
          value={formData.synopsis}
          placeholder="Enter script synopsis"
          rows={6}
          onChange={(e) =>
            handleChange(
              "synopsis",
              e.target.value
            )
          }
        />

        {/* <FileUpload
          label="Script File"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        /> */}

        {isEdit && (
          <p className="text-sm text-gray-500">
            Upload a file only if you want
            to replace the existing script.
          </p>
        )}

        <div className="flex gap-3">
          <Button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Saving..."
              : isEdit
              ? "Update Script"
              : "Create Script"}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default ScriptForm;