import { useState } from "react";

export default function useSearchInput() {
  const [value, setValue] = useState("");
  const netValue = value.toLowerCase().trim();
  return { value, setValue, netValue };
}
