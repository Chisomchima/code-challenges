"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Image from "next/image";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  agreeToTerms: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

const SignupPage = () => {
  return (
    <div className="h-screen bg-white fixed top-0 bottom-0 z-[1000] right-0 left-0 flex">
      {/* Left side for the form */}
      <div className="w-1/2 flex items-center justify-center flex-col">
        <h2 className="text-2xl font-bold text-center">Sign Up with LightEx</h2>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            agreeToTerms: false,
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // Handle form submission
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, values }) => (
            <Form className="space-y-4 w-full max-w-md">
              <div>
                <Field
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
                  placeholder="First Name"
                  name="firstName"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <Field
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
                  placeholder="Last Name"
                  name="lastName"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <Field
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
                  placeholder="Email"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <Field
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex items-center">
                <Field type="checkbox" className="mr-2" name="agreeToTerms" />
                <label htmlFor="agreeToTerms" className="text-sm">
                  I confirm I'm at least 18 years old and agree to the terms and
                  policies.
                </label>
              </div>
              <ErrorMessage
                name="agreeToTerms"
                component="div"
                className="text-red-500 text-sm"
              />

              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition"
              >
                Create Account
              </button>

              <div className="flex items-center justify-between space-x-4">
                <button className="w-full bg-red-500 text-white py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-red-600 transition">
                  <FaGoogle /> <span>Sign in with Google</span>
                </button>

                <button className="w-full bg-gray-700 text-white py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-800 transition">
                  <FaGithub /> <span>Sign in with GitHub</span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Right side for the image */}
      <div className="w-1/2 h-full relative">
        <Image
          src="/images/login.svg"
          alt="Signup illustration"
          layout="fill" 
          objectFit="contain"
          className="p-10 bg-[#f5e7fa] "
        />
      </div>
    </div>
  );
};

export default SignupPage;
