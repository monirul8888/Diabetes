export default function InputField({
  label,
  value,
  onChange,
  type = "number",
}) {
  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
