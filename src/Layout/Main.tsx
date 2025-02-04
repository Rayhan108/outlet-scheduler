import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Main = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        // from-[#1C4587] to-[#3279EA
            <div>
              {/* Navbar */}
              <nav className="p-4 bg-gradient-to-r] bg-white text-black font-title flex  items-center">
              <Button  variant="ghost" onClick={() => setIsOpen(true)}>
                  <Menu size={28} />
                </Button>
                <h1 className="text-xl ml-8 font-bold">User Auth</h1>
           
              </nav>
        
              {/* Sidebar & Outlet */}
              {isOpen && (
                <div className="fixed inset-0 flex">
                  {/* Sidebar */}
                  <div className="w-1/2 h-full bg-gradient-to-b bg-[#F7FAFC]  p-5 shadow-lg relative">
                
                <p>Login page</p>
                
                  </div>
        
                  {/* Outlet (Content) */}
                  <div className="w-1/2 h-full bg-[#C0D3F2] p-5 overflow-y-auto">
                    <Outlet />
                    <Button variant="ghost" className="absolute bg-[#1C4587] hover:bg-[#1C4587] top-4 right-4" onClick={() => setIsOpen(false)}>
                      <X className="text-[#FFFFFF]" size={28} />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          );
        };

        


export default Main;