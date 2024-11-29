import { useRouter } from "next/navigation";

export default function Button({
  backgroundColor,
  borderColor,
  text,
  textColor,
  url,
  isHidden,
}) {
  const router = useRouter();

  return (
    <button
      className={`text bg-${backgroundColor}  text-${textColor} py-2 px-4 rounded-3xl mx-2 border-${borderColor} border-4 text-lg ${isHidden}`}
      onClick={(e) => {
        router.push({ url });
      }}
    >
      {text || "Click Here"}
    </button>
  );
}
