import { Inter } from "next/font/google";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import React from "react";
import Header from "../sharedComponent/Navbar/TopNav";
import Navbar from "../sharedComponent/Navbar/Navigation";
import { Footer } from "../sharedComponent/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function CreateAccount() {
    return (

        <div className={`${inter.className} bg-gray-50`}>
            <Header />
            <Navbar />

            <div className="flex md:flex-row pt-30 lg:gap-40">
                <div style={{ height: '650px', width: '900px' }}>
                    <img
                        src="/images/mobileCarts.png"
                        alt="mobile"
                        width={1000}
                        style={{ height: '100%', width: '100%' }}
                    />
                </div>
                <div className="w-full max-w-xl bg-white p-8 md:p-20 rounded-lg">
                    <h1 className="font-bold text-3xl md:text-4xl mb-4">Log in to Exclusive</h1>
                    <p className="mb-8 text-lg md:text-xl text-gray-700">Enter your details below</p>
                    <form>
                        <div className="flex flex-col gap-3">

                            <TextField
                                id="email"
                                label="Email or Phone Number"
                                variant="filled"
                                fullWidth
                                size="medium"
                                InputProps={{
                                    style: {
                                        fontSize: '1.1rem',
                                        padding: '4px 14px'
                                    }
                                }}
                                InputLabelProps={{
                                    style: {
                                        fontSize: '1.1rem'
                                    }
                                }}
                            />
                            <TextField
                                id="password"
                                label="Password"
                                variant="filled"
                                type="password"
                                fullWidth
                                size="medium"
                                InputProps={{
                                    style: {
                                        fontSize: '1.1rem',
                                        padding: '4px 14px'
                                    }
                                }}
                                InputLabelProps={{
                                    style: {
                                        fontSize: '1rem'
                                    }
                                }}
                            />

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-1 pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-20 rounded-lg transition-colors duration-150"
              >
                Log in
              </button>
              <Link
                href="/forgot-password"
                className="text-sm text-red-600 underline hover:text-red-700 whitespace-nowrap "
              >
                Forgot Password?
              </Link>
            </div>


                        </div>

                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}