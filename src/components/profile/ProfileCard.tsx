import Card from "../common/Card";
import Button from "../common/Button";

const ProfileCard = ({
  profile,
  onEdit,
}) => {
  return (
    <Card className="max-w-md">
      <div className="flex flex-col items-center">
        <img src={"profilebold"}/>
        <h2>
          {profile.name}
        </h2>

        <p className="text-gray-600">
          {profile.email}
        </p>

        <span className="mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
          {profile.role}
        </span>

        {profile.phone && (
          <p className="mt-4 text-gray-700">
            {profile.phone}
          </p>
        )}

        {profile.bio && (
          <p className="mt-4 text-center text-gray-600">
            {profile.bio}
          </p>
        )}

        {onEdit && (
          <Button
            className="mt-5"
            onClick={onEdit}
          >
            Edit Profile
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ProfileCard;