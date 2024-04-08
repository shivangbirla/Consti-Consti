import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ShadComp/ui/sheet";
import { Separator } from "../../ShadComp/ui/separator";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import { Link } from "react-scroll";
import { RxCross2 } from "react-icons/rx";

const MobileNav = () => {
  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <div className="">
      <Sheet>
        <SheetTrigger>
          <GiHamburgerMenu className="h-[35px] w-[35px]" />
        </SheetTrigger>
        <SheetContent
          className="absolute top-0 right-0 w-[80%] min-h-[100vh] bg-slate-900 text-white"
          side="right"
        >
          <SheetHeader>
            <SheetTitle className="min-h-[93px] flex flex-row justify-between items-center p-6">
              <div className="text-[18px]">ConstituentsAI</div>
              <div>
                <SheetTrigger>
                  <RxCross2 className="h-[24px] w-[24px]" />
                </SheetTrigger>
              </div>
            </SheetTitle>
            <Separator className="border border-gray-800" />
            <SheetDescription>
              {/* <ul className="flex flex-col items-center gap-10 text-[18px] p-10">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  onSetActive={handleSetActive}
                  className="cursor-pointer"
                >
                  <li>Home</li>
                </Link>
                <Link
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onSetActive={handleSetActive}
                  className="cursor-pointer"
                >
                  <li>Services</li>
                </Link>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={110}
                  duration={500}
                  onSetActive={handleSetActive}
                  className="cursor-pointer"
                >
                  <li>About</li>
                </Link>
                <Link
                  activeClass="active"
                  to="clients"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={500}
                  onSetActive={handleSetActive}
                  className="cursor-pointer"
                >
                  <li>Clients</li>
                </Link>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onSetActive={handleSetActive}
                  className="cursor-pointer"
                >
                  <li>Contact</li>
                </Link>
              </ul> */}
              <ul className="flex flex-col items-center gap-10 text-[16px] p-10">
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Clients</li>
                <li>Contact</li>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
