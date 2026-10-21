import Card from "../common/Card";
import Button from "../common/Button";

const ScriptCard = ({
  script,
  onView,
  onLike,
  onShowInterest,
}) => {
  return (
    <Card className="space-y-4">
      {/* Title */}
      <h2 className="text-xl font-bold">
        {script.title}
      </h2>

      {/* Genre */}
      <p>
        <strong>Genre:</strong> {script.genre}
      </p>

      {/* Writer */}
      <p>
        <strong>Writer:</strong> {script.writer}
      </p>

      {/* Description */}
      <p className="text-gray-600">
        {script.description}
      </p>

      {/* Stats */}
      <div className="flex gap-4 text-sm text-gray-500">
        <span>👁️ {script.views}</span>
        <span>❤️ {script.likes}</span>
        <span>⭐ {script.interests}</span>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Button
          variant="primary"
          onClick={() => onView(script)}
        >
          View
        </Button>

        <Button
          variant="danger"
          onClick={() => onLike(script)}
        >
          Like
        </Button>

        <Button
          variant="success"
          onClick={() => onShowInterest(script)}
        >
          Show Interest
        </Button>
      </div>
    </Card>
  );
};

export default ScriptCard;
