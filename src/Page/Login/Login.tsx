import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Login Data", data);
  };

  return (
    <div className="flex min-h-screen bg-[#F7FAFC]">
      {/* Left Section */}
      <div className="w-1/2 flex items-center justify-center p-10 bg-gradient-to-b shadow-lg">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
          <h2 className="text-center text-2xl font-bold text-[#1C4587]">
            Login to Account
          </h2>
          <p className="py-3 text-center text-[#6F6F6F]">
            Please enter your email and password to continue
          </p>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-[#2D3748]">
                Email
              </label>
              <Input
                {...form.register("email", { required: "Email is required" })}
                type="email"
                placeholder="yourname@gmail.com"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {String(form.formState.errors.email.message)}
                </p>
              )}
            </div>

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

            {/* Remember & Forgot Password */}
            <div className="flex justify-between items-center py-3">
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm text-[#1C4587] font-medium"
                >
                  Remember Password
                </label>
              </div>
              <p className="text-[#FF0000] cursor-pointer hover:underline">
                Forgot Password?
              </p>
            </div>

            {/* Submit Button */}
            <Button className="w-full bg-gradient-to-r from-[#1C4587] to-[#3279EA] text-white py-2 rounded-lg">
              Login
            </Button>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex items-center h-screen  bg-[#C0D3F2] justify-center p-10 shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1C4587]">Welcome Back!</h2>
          <p className="text-lg text-[#1C4587] py-9">
            Please Sign in into your account with the given details to continue
          </p>
          <p className="text-lg text-[#1C4587] mt-4">
          New here ? create a new account
          </p>

          <div className="mt-6">
            <Link
              to="/signUp"
              className=" text-lg font-semibold hover:underline"
            >
               <Button className="w-full bg-gradient-to-r from-[#1C4587] to-[#3279EA] text-white py-2 rounded-lg">
              Sign Up
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
