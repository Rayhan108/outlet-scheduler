import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* Navbar */}
      <nav className="p-4 bg-gradient-to-r] bg-white text-black font-title flex  items-center">
        <Button
          className="bg-[#1C4587] hover:bg-[#1C4587]"
          variant="ghost"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="text-white" size={28} />
        </Button>
        <h1 className="text-xl ml-8 font-bold">User Auth</h1>
      </nav>

      {/* Sidebar & Outlet */}
      {isOpen && (
        <div className="">
          <Outlet />
          <Button
            variant="ghost"
            className="absolute bg-[#1C4587] hover:bg-[#1C4587] top-4 right-4"
            onClick={() => setIsOpen(false)}
          >
            <X className="text-[#FFFFFF]" size={28} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Main;
