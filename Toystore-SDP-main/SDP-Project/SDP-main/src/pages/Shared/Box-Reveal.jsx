import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/magicui/box-reveal";
import '@fontsource/baloo-chettan-2'; // Import the font

export function BoxRevealDemo() {
  return (
    <div className="h-full w-full max-w-[32rem] flex flex-col items-center justify-center overflow-hidden pt-4 font-[Baloo Chettan 2]">
      <BoxReveal boxColor={"#d1c8fe"} duration={0.5}>
        <p className="text-[3rem] font-extrabold arial tracking-wide uppercase text-[purple]">
          PLAY LAND
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#d1c8fe"} duration={0.5}>
        <h2 className="mt-2 text-[1.5rem] font-bold italic tracking-tight text-[#333]">
          Adventure Awaits in <span className="">Play Land</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#d1c8fe"} duration={0.5}>
        <div className="mt-6">
          <p className="text-[1.2rem] font-medium italic leading-relaxed text-[#666]">
            The role of toys in fostering creativity and learning in children.
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#d1c8fe"} duration={0.5}>
        <Button className="mt-8 bg-[purple] px-8 py-2 text-lg font-semibold uppercase tracking-wider">
          Explore
        </Button>
      </BoxReveal>
    </div>
  );
}
