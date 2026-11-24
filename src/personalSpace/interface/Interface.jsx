import { useState } from "react";
import Input from "../components/SearchInput";
import TopicList from "../components/topicList/TopicList";
import useSearchInput from "../hooks/useSearchInput";

export default function Interface() {
  const { value, setValue, netValue } = useSearchInput();

  return (
    <div className="w-full h-dvh pt-50">
      <div className="border-b border-line">
        <h1 className="-ml-0.75 text-4xl sm:text-6xl lg:text-8xl text-ink font-display">
          Said's personal public space
        </h1>
      </div>

      <div className="w-full flex justify-center mt-20">
        <Input value={value} setValue={setValue} />
      </div>

      <div className="w-full flex flex-col">
        <TopicList query={netValue} />
      </div>
    </div>
  );
}
