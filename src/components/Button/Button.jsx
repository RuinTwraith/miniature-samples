export default function Button({
  children,
  onClick = () => {},
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`border bg-orange-600 shadow-md text-white p-2 rounded mr-4 mb-4 ${className}`}
    >
      {children}
    </button>
  );
}
