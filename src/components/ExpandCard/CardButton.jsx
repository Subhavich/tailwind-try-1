export default function CardButton({ text, setModalOpen }) {
  return (
    <button
      onClick={() => setModalOpen(true)}
      className="rounded-md my-6 px-4 py-2 w-full bg-black text-white block"
    >
      {text}
    </button>
  );
}
