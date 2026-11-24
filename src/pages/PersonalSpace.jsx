import { useSearchParams } from "react-router";
import TopicLayout from "../personalSpace/layout/TopicLayout";
import Interface from "../personalSpace/interface/Interface";

export default function PersonalSpace() {
  const [searchParams] = useSearchParams();

  const topic = searchParams.get("topic");

  return <main>{topic ? <TopicLayout /> : <Interface />}</main>;
}
