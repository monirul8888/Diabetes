export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
    >
      {text}
    </button>
  );
}
