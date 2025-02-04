
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Congratulation = () => {
  return (
    <div className="flex min-h-screen bg-[#F7FAFC]">
      {/* Left Section */}
      <div className="w-1/2 flex items-center justify-center p-10 bg-gradient-to-b shadow-lg">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
          <h2 className="text-center text-2xl font-bold text-[#1C4587]">
            Congratulation
          </h2>

          {/* Submit Button */}
          <Link to="/">
            {" "}
            <Button className="w-full mt-5 bg-gradient-to-r from-[#1C4587] to-[#3279EA] text-white py-2 rounded-lg">
              Continue
            </Button>
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex items-center   bg-[#C0D3F2] justify-center p-10 shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1C4587]">
            Your password has been updated, please change your password
            regularly to avoid this happening
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Congratulation;
