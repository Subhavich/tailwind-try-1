export default function CardBackdrop({ link }) {
  return (
    <img
      src={link}
      className="absolute -z-30 max-w-60 grayscale rounded-md opacity-30"
    />
  );
}
