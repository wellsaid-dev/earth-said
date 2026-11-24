import TopicItem from "./TopicItem";

const modules = import.meta.glob("../../topics/*.js", {
  eager: true,
});

const topics = Object.entries(modules).map(([path, module]) => {
  const topicObj = Object.values(module)[0];

  return {
    id: path.split("/").pop().replace(".js", ""),
    path,
    name: topicObj.name,
  };
});

const searchTopics = (q) => {
  return topics.filter(
    (t) =>
      t.id.toLowerCase().includes(q.toLowerCase()) ||
      t.name?.toLowerCase().includes(q.toLowerCase()),
  );
};

export default function TopicList({ query }) {
  const filteredTopics = query ? searchTopics(query) : topics;

  if (query && filteredTopics.length === 0) {
    return <p>No topic found.</p>;
  }

  return (
    <div className="flex flex-col gap-6">
      {filteredTopics.map((topic) => (
        <TopicItem key={topic.id} topic={topic} />
      ))}
    </div>
  );
}
