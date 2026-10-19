import Image from "next/image";
import { cn } from "@/lib/utils";

export type Flora =
  | "cockatoo"
  | "kangaroo"
  | "koala"
  | "kookaburra"
  | "parrot"
  | "waratah"
  | "wattle"
  | "wattle-flower";

interface FloraIconProps {
  name: Flora;
  color: string;
  className?: string;
}

/** Native flora/fauna illustration in a bordered circle — replaces emoji icons. */
export function FloraIcon({ name, color, className }: FloraIconProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-full border-3 border-brand-black bg-white",
        className
      )}
      style={{ boxShadow: `4px 4px 0 ${color}` }}
      aria-hidden="true"
    >
      <Image
        src={`/images/decorations/${name}.png`}
        alt=""
        width={96}
        height={96}
        className="h-[78%] w-[78%] object-contain"
      />
    </div>
  );
}
