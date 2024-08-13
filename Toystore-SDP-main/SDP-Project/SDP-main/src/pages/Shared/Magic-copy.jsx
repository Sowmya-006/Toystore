import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/magicui/magic-card";

export function MagicCards() {
  const { theme } = useTheme();
  return (
    <div
      className={
        "flex h-[300px] w-full flex-col gap-4 lg:h-[380px] lg:flex-row"
      }
    >
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl"
        gradientColor={theme === "dark" ? "purple" : "purple"}
      >
        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//pictorial_menu_default_23082023_02.jpg"></img>
        
        
       <br></br>
        <div className="flex justify-center items-center">
        <Button className="bg-purple-900 border-black">Explore</Button>
        </div>
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl"
        gradientColor={theme === "dark" ? "purple" : "purple"}
      >
        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//pictorial_menu_default_23082023_03.jpg"></img>
        
        <br></br>
        <div className="flex justify-center items-center">
        <Button className="bg-purple-900 border-black">Explore</Button>
        </div>
      </MagicCard>
    
      
    
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl"
        gradientColor={theme === "dark" ? "purple" : "purple"}
      >
        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//pictorial_menu_default_23082023_05.jpg"></img>
        
        <br></br>
        <div className="flex justify-center items-center">
        <Button className="bg-purple-900  border-black">Explore</Button>
        </div>
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl"
        gradientColor={theme === "dark" ? "purple" : "purple"}
      >
        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//pictorial_menu_default_23082023_07.jpg"></img>
        
        <br></br>
        <div className="flex justify-center items-center">
        <Button className="bg-purple-900 border-black">Explore</Button>
        </div>
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl"
        gradientColor={theme === "dark" ? "purple" : "purple"}
      >
        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//pictorial_menu_default_23082023_06.jpg"></img>
        
        <br></br>
        <div className="flex justify-center items-center">
        <Button className="bg-purple-900 border-black">Explore</Button>
        </div>
      </MagicCard>
    </div>
  );
}
