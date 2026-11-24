import { Link } from "react-router";

export default function TopicItem({ topic }) {
  const { id, name } = topic;

  return (
    <Link to={`?topic=${id}`}>
      <h1>{name}</h1>
    </Link>
  );
}
