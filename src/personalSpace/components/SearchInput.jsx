export default function Input({ value, setValue }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter a ws code (e.g. ws1)"
      className="w-100 bg-line px-5 py-4 outline-none border border-transparent focus:border-muted text-sm placeholder:text-muted"
    />
  );
}
