import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { Nav } from "./Nav";
import { Logo } from "./Logo";
import { Socials } from "./Socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="content-center py-2">
        <AlignJustify className="" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full w-full py-6">
          <div className="flex flex-col items-center gap-y-12 w-full overflow-auto scroll-auto">
            <Logo containerStyles="flex gap-x-2 items-center" />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles=""
            />
            <Socials
              containerStyles="fixed bottom-5 flex gap-x-4"
              iconsStyles="text-2xl"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
