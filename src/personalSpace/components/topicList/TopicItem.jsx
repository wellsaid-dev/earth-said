import { Link } from "react-router";

export default function TopicItem({ topic }) {
  const { id, name } = topic;

  return (
    <Link
      to={`?topic=${id}`}
      className="text-lg sm:text-2xl lg:text-3xl text-muted hover:text-ink font-display border-b border-line flex items-center gap-1"
    >
      <span className="flex-1 truncate">{name}</span>
      <span className="text-sm sm:text-base lg:text-lg font-sans">{id}</span>
    </Link>
  );
}
