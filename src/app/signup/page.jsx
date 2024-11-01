"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRegister } from "../../hooks/useAuth";
import Loader from "../../components/ui/loader";

const SignupSchema = Yup.object().shape({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Signup = () => {
  const { mutate: register, data, isLoading } = useRegister();
  const router = useRouter();
  console.log(data, "data");

  if (data && data?.success) {
    toast.success("User Created", {
      toastId: "successful-registeration",
    });
    router.push("/login");
  }

  if ((data && data?.status !== 200) || data?.status !== 201) {
    toast.error(data?.response?.data?.error?.error || data?.message, {
      toastId: "error-registeration",
    });
  }

  const submitForm = async (data) => {
    try {
      await register({
        firstName: data.firstname,
        lastName: data.lastname,
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      console.log(error, "error");
      toast.error("An unexpected error occurred. Please try again later.");
    }
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

      <div className="md:w-1/2 w-full h-full md:h-full flex items-center justify-center px-4 md:px-0">
       {isLoading && <Loader/>}
        <div className="w-full max-w-md px-8 py-6 rounded-lg">
          <h2 className="text-3xl font-semibold text-purple-800 mb-2">
            Create an Account
          </h2>
          <p className="text-gray-600 mb-6">Enter your details to sign up.</p>

          {/* Formik Form */}
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={submitForm}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div className="grid gap-2 mb-5">
                  <button className="w-full border border-red-500 bg-red-50 text-red-500 py-3 rounded-[1rem] flex items-center justify-center space-x-2 hover:bg-red-200 transition">
                    <FaGoogle /> <span>Sign up with Google</span>
                  </button>

                  <button className="w-full border border-gray-700 text-gray-700 bg-gray-100 py-3 rounded-[1rem] flex items-center justify-center space-x-2 hover:bg-gray-200 transition">
                    <FaGithub /> <span>Sign up with GitHub</span>
                  </button>
                </div>

                {/* First Name Input */}
                <div className="mb-4">
                  <Field
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="firstname"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Last Name Input */}
                <div className="mb-4">
                  <Field
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="lastname"
                    component="div"
                    className="text-red-500 text-sm"
                  />
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

                {/* Links */}
                <div className="flex items-center justify-between text-[12px] mb-6">
                  <Link
                    href="/login"
                    className="text-purple-500 hover:underline"
                  >
                    Already have an account? Login here.
                  </Link>
                </div>

                {/* Signup Button */}
                <button
                  type="submit"
                  className="w-full bg-purple-900 hover:bg-purple-800 text-white rounded-[1rem] font-semibold focus:outline-none transition-colors duration-200 py-3"
                  disabled={isLoading || isSubmitting}
                >
                  {isLoading ? "Signing up..." : "Sign Up"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Signup;
