import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";

export function MagicCardDemo() {
  const { theme } = useTheme();
  return (
    <div
      className="flex h-[300px] w-full flex-col gap-4 lg:h-[330px] lg:flex-row"
    >
      <MagicCard
  className="cursor-pointer flex-col items-center justify-center  text-4xl relative"
  gradientColor="transparent" // Set the gradientColor to transparent
  style={{ 
    width: '100%', 
    height: '100%', 
    backgroundColor: 'transparent'  // Ensure background is transparent
  }}
>

        <img
          src="https://i.graphicmama.com/uploads/2023/3/64182cb852925-teddy-bear-toy-animated-gifs.gif"
          alt="Card Image"
          className="h-full w-full object-cover"
          style={{ objectFit: 'cover' }} // Adjust image fitting
        />
      </MagicCard>
    </div>
  );
}
