import { cn } from "@/lib/utils";

const Back = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-[#666] hover:text-white focus:text-white ",
        className
      )}
    >
      <svg width="15" height="13">
        <path
          d="M5.825 0 .34 5.484a1.165 1.165 0 0 0 0 1.647l5.484 5.484 1.647-1.647-3.496-3.495h10.889v-2.33H3.976l3.496-3.496L5.825 0Z"
          fill="currentColor"
        ></path>
      </svg>
    </button>
  );
};

export default Back;
