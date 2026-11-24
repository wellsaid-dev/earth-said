import { useSearchParams } from "react-router";

const modules = import.meta.glob("../topics/*.js", {
  eager: true,
});

const topics = Object.fromEntries(
  Object.entries(modules).map(([path, module]) => [
    path.split("/").pop().replace(".js", ""),
    module.default,
  ]),
);

export default function TopicLayout() {
  const [searchParams] = useSearchParams();
  const topicId = searchParams.get("topic");

  const topic = topics[topicId];

  if (!topic) return <p>Topic not found.</p>;

  return (
    <main>
      <h1>{topic.name}</h1>
      <p>{topic.description}</p>
    </main>
  );
}
