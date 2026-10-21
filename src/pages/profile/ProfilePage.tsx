import { useEffect, useState } from "react";

import ProfileCard from "../../components/profile/ProfileCard";
import ProfileForm from "../../components/profile/ProfileForm";
import { getProfile, updateProfile } from "../../services/userService";

// import {
//   getProfile,
//   updateProfile,
// } from "../../services/profileService";

const ProfilePage = () => {
  const [profile, setProfile] =
    useState(null);

  const [isEditing, setIsEditing] =
    useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const data = await getProfile();
    setProfile(data);
  };

  const handleUpdate = async (
    formData:any
  ) => {
    const payload = new FormData();

    payload.append(
      "name",
      formData.name
    );
    payload.append(
      "phone",
      formData.phone
    );
    payload.append("bio", formData.bio);

    if (formData.photo) {
      payload.append(
        "photo",
        formData.photo
      );
    }

    await updateProfile(payload);

    setIsEditing(false);

    loadProfile();
  };

  return isEditing ? (
    <ProfileForm
      initialData={profile?? undefined}
      onSubmit={handleUpdate}
    />
  ) : (
    <ProfileCard
      profile={profile}
      onEdit={() => setIsEditing(true)}
    />
  );
};

export default ProfilePage;