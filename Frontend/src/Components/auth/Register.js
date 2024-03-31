import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import axios from "axios";

function Register() {
  const [auth, setAuth] = useAuth();
  const [animation, setAnimation] = useState(false);
  const [otpPopUp, setOtpPopUp] = useState(false);
  const [otp, setOtp] = useState();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    phone: "",
    answer: "",
  });

  const navigate = useNavigate();

  const handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const sendOTP = async (e) => {
    e.preventDefault();
    try {
      const { name, email, password, cpassword, phone, answer } = data;

      if (!name || !email || !password || !cpassword || !phone || !answer) {
        alert("Fill all data!!");
        return;
      }

      if (password !== cpassword) {
        alert("Password and Confirm password are not same");
        return;
      }
      setAnimation(true);
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/send-otp`,
        { email }
      );
      setAnimation(false);

      if (res?.status == 200) {
        setOtpPopUp(true);
        alert("OTP successfully send, please check your email");
      } else {
        alert("OTP can't send, please check your email id");
      }
    } catch (error) {
      console.log(error);
      setAnimation(false);
      alert("Something went wrong, please try again");
    }
  };

  const sendData = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword, phone, answer } = data;

    if (!name || !email || !password || !cpassword || !phone || !answer) {
      alert("Fill all data!!");
      return;
    }

    if (password !== cpassword) {
      alert("Password and Confirm password are not same");
      return;
    }

    try {
      const emailRes = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/verify-otp`,
        { otp }
      );

      if (!emailRes?.data?.success) {
        alert("Invalid OTP");
        return;
      }

      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password, phone, answer }
      );

      //SET USER DATA IN GLOBAL OBJECT(AUTH CONTEXT)
      setAuth({
        ...auth,
        user: res?.data?.userDetails,
        token: res?.data?.token,
      });

      localStorage.setItem("eduMentorInfo", JSON.stringify(res?.data));
      if (res.status === 201) {
        alert(res.data.message);
        //Forward to Home
          navigate("/");
        return;
      } else {
        alert(res.data.message);
        return;
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong, please try again");
    }
  };

  return (
    <>
      <section class="bg-gray-100 dark:bg-gray-100">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-black"
          >
            <img
              class="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            eduMentor
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Name"
                    required=""
                    value={data.name}
                    onChange={handleData}
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    value={data.email}
                    onChange={handleData}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    value={data.password}
                    onChange={handleData}
                  />
                </div>
                <div>
                  <label
                    for="cpassword"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    placeholder="••••••••"
                    class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    value={data.cpassword}
                    onChange={handleData}
                  />
                </div>
                <div>
                  <label
                    for="phone"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="0000000000"
                    class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    value={data.phone}
                    onChange={handleData}
                  />
                </div>
                <div>
                  <label
                    for="answer"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Security Question
                  </label>
                  <input
                    type="text"
                    name="answer"
                    id="answer"
                    placeholder="Enter Your Favorate Number"
                    class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    value={data.answer}
                    onChange={handleData}
                  />
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-white focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                      value={data.termAndCondition}
                      onChange={handleData}
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="terms"
                      class="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                {/* OTP FIELD */}
                {otpPopUp ? (
                  <div
                    className="email-verification"
                    style={{ background: "white" }}
                  >
                    <div>
                      <label htmlFor="email-otp">Enter OTP</label>
                      <input
                        class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="number"
                        id="email-otp"
                        onChange={(e) => setOtp(e.target.value)}
                        value={otp}
                      />
                    </div>
                    <div style={{display:"flex", justifyContent:"space-around", margin:"14px 0"}}>
                      <button
                        className="w-half text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        onClick={sendData}
                        style={{ background: "blue" }}
                      >
                        Verify
                      </button>
                      <button
                        className="w-half text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        onClick={sendOTP}
                        style={{ background: "blue" }}
                      >
                        {animation ? "Sending" : "Re-send"}
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={sendOTP}
                    style={{ background: "blue" }}
                  >
                    {animation ? "creating" : "Create Account"}
                  </button>
                )}
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/Login"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
