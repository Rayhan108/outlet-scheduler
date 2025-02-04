import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ValidateEmail = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="w-1/2 flex items-center justify-center p-10 bg-[#F7FAFC]">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
          <h2 className="text-center text-2xl font-bold text-[#1C4587]">
            Verification Code
          </h2>

          <div className="flex justify-center space-x-2 mt-5">
            {[...Array(6)].map((_, index) => (
              <Input
                key={index}
                type="text"
                maxLength={1}
                className="w-12 h-12 text-center text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#1C4587]"
              />
            ))}
          </div>

 <Link to="/changePass">
 <Button className="w-full mt-5 bg-gradient-to-r from-[#1C4587] to-[#3279EA] text-white py-2 rounded-lg">
            Verify Code
          </Button>
 </Link>

          <p className="text-center text-sm text-[#2D3748] mt-4">
            You have not received the email?{" "}
            <span className="text-[#3279EA] cursor-pointer">Resend</span>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex items-center bg-[#C0D3F2] justify-center p-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1C4587]">
            Welcome to our forgot password page!
          </h2>
          <p className="mt-4 text-[#2D3748]">
            Provide your email to confirm a 6-digit verification code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValidateEmail;
