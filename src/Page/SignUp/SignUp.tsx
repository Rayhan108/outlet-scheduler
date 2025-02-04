import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRegisterUserMutation } from "@/redux/features/auth/authApi";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm();



  const [registerUser] = useRegisterUserMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("form data",data);
 try{
    const userInfo = {
        fullName: data.fullName,
        email: data.email,
        phone:data.phone,
        password: data.password,
        referralCode: null,
        isSocial: false,
        fcmToken: null

      };
    //   console.log("user info", userInfo);
      const res = await registerUser(userInfo).unwrap();
        // console.log(res);
      toast.success(res?.message);

 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 }catch(err :any){
    toast.error(err?.data?.error) 
    // console.log(err);
 }
  };
  return (
    <div className="flex bg-[#F7FAFC]">
      {/* Left Section */}
      <div className="w-1/2 flex items-center  bg-[#C0D3F2] justify-center p-10 shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1C4587]">Hello Friend!</h2>
          <p className="text-lg text-[#1C4587] py-9">
            Please provide the information's to register your account
          </p>
          <p className="text-lg text-[#1C4587] mt-4">
            Already have an account! Sign in
          </p>

          <div className="mt-6">
            <Link
              to="/login"
              className=" text-lg font-semibold hover:underline"
            >
              <Button className="w-full bg-gradient-to-r from-[#1C4587] to-[#3279EA] text-white py-2 rounded-lg">
                Sign in
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="w-1/2 flex  items-center justify-center p-10 bg-gradient-to-b shadow-lg">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
          <div className="py-4">
            <h2 className="text-center text-2xl font-bold text-[#1C4587]">
              Register a new account
            </h2>
            <p className="py-9 text-center text-[#6F6F6F]">
              Please enter your information to create account
            </p>
          </div>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            {/* User Name Field */}
            <div>
              <label className="block text-sm font-medium text-[#2D3748]">
                User Name
              </label>
              <Input
                {...form.register("fullName", {
                  required: "Email is required",
                })}
                type="text"
                placeholder="Asadujjaman"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
              />
              {form.formState.errors.fullName && (
                <p className="text-red-500 text-xs mt-1">
                  {String(form.formState.errors.fullName.message)}
                </p>
              )}
            </div>
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-[#2D3748]">
                Email
              </label>
              <Input
                {...form.register("email", { required: "Email is required" })}
                type="email"
                placeholder="Asadujjaman@gmail.com"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {String(form.formState.errors.email.message)}
                </p>
              )}
            </div>
            {/* Contact Field */}
            <div>
              <label className="block text-sm font-medium text-[#2D3748]">
                Contact No
              </label>
              <Input
                {...form.register("phone", { required: "Email is required" })}
                type="text"
                placeholder="0195365245263"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
              />
              {form.formState.errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {String(form.formState.errors.phone.message)}
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

            {/* Submit Button */}
            <Button className="w-full bg-gradient-to-r from-[#1C4587] to-[#3279EA] text-white py-2 rounded-lg">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
