import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ForgotPass = () => {
  const form = useForm();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {};
  return (
    <div className="flex min-h-screen bg-[#F7FAFC]">
      {/* Left Section */}
      <div className="w-1/2 flex items-center justify-center p-10 bg-gradient-to-b shadow-lg">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
          <h2 className="text-center text-2xl font-bold text-[#1C4587]">
            Forgot Password
          </h2>

          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
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

            {/* Submit Button */}
            <Link to="/validationCode">
              {" "}
              <Button className="w-full mt-5 bg-gradient-to-r from-[#1C4587] to-[#3279EA] text-white py-2 rounded-lg">
                Send Code
              </Button>
            </Link>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex items-center    bg-[#C0D3F2] justify-center p-10 shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1C4587]">
            Welcome to out forgot password page ! provide your email for confirm
            6 digit verification code.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
