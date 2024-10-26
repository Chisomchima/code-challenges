"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { signIn } from "next-auth";
import { toast } from "react-toastify";
import Link from "next/link";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Login = () => {
  const [loading, setLoading] = useState(false);

  const submitForm = async (data) => {
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res.error) {
        toast.error("Invalid credentials, please try again.");
      } else {
        toast.success("Login successful!");
        // Optional: Redirect or other actions after successful login
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="h-screen bg-white fixed top-0 bottom-0 z-[1000] right-0 left-0 flex flex-col md:flex-row">
      <div className="md:w-1/2 w-full h-1/3 md:h-full relative">
        <Image
          src="/images/login.svg"
          alt="Signup illustration"
          layout="fill"
          objectFit="contain"
          className="p-10 bg-[#f5e7fa]"
        />
      </div>

      <div className="md:w-1/2 w-full h-2/3 md:h-full flex items-center justify-center px-4 md:px-0">
        {/* Login Box */}
        <div className="w-full max-w-md px-8 py-6 rounded-lg">
          <h2 className="text-3xl font-semibold text-purple-800 mb-2">
            Welcome!
          </h2>
          <p className="text-gray-600 mb-6">Enter details to login.</p>

          {/* Formik Form */}
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={SignupSchema}
            onSubmit={submitForm}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div className="grid gap-2 mb-5">
                  <button className="w-full border border-red-500 bg-red-50 text-red-500 py-3 rounded-[1rem] flex items-center justify-center space-x-2 hover:bg-red-200 transition">
                    <FaGoogle /> <span>Sign in with Google</span>
                  </button>

                  <button className="w-full border border-gray-700 text-gray-700 bg-gray-100 py-3 rounded-[1rem] flex items-center justify-center space-x-2 hover:bg-gray-200 transition">
                    <FaGithub /> <span>Sign in with GitHub</span>
                  </button>
                </div>

                {/* Email Input */}
                <div className="mb-4">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Password Input */}
                <div className="mb-4">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Forgot Password Link */}
                <div className="flex items-center justify-between text-[12px] mb-6">
                  <Link href="/signup" className="text-purple-500 hover:underline">
                    Sign Up
                  </Link>
                  <Link href="#" className="text-purple-500 hover:underline">
                    Forgot Password?
                  </Link>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full bg-purple-900 hover:bg-purple-800 text-white rounded-[1rem] font-semibold focus:outline-none transition-colors duration-200 py-3"
                  disabled={loading || isSubmitting}
                >
                  {loading ? "Logging in..." : "Log In"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
