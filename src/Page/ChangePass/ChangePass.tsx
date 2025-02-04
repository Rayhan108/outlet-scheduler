
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Link,} from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";


const ChangePass = () => {
      const [showPassword, setShowPassword] = useState(false);
const form = useForm();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {

  };
  return (
    <div className="flex min-h-screen bg-[#F7FAFC]">
      {/* Left Section */}
      <div className="w-1/2 flex items-center justify-center p-10 bg-gradient-to-b shadow-lg">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
          <h2 className="text-center text-2xl font-bold text-[#1C4587]">
       Set New Password
          </h2>
         
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
     

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium">Password</label>
              <div className="relative">
                <Input
                  {...form.register("password", {
                    required: "Password is required",
                  })}
                  type={showPassword ? "text" : "password"}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {form.formState.errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {String(form.formState.errors.password.message)}
                </p>
              )}
            </div>
            {/*New Password Field */}
            <div>
              <label className="block text-sm font-medium">Password</label>
              <div className="relative">
                <Input
                  {...form.register("newPassword", {
                    required: "Password is required",
                  })}
                  type={showPassword ? "text" : "password"}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {form.formState.errors.newPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {String(form.formState.errors.newPassword.message)}
                </p>
              )}
            </div>


            {/* Submit Button */}
 <Link to="/congratulation">           <Button className="w-full bg-gradient-to-r from-[#1C4587] to-[#3279EA] text-white py-2 rounded-lg">
              Confirm
            </Button></Link>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex items-center   bg-[#C0D3F2] justify-center p-10 shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1C4587]">Create a new password.
          insure it differs from previous one.</h2>
     

        </div>
      </div>
    </div>
  );
};

export default ChangePass;
