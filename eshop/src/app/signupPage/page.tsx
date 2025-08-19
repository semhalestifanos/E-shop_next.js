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
        <Header/>
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
          <h1 className="font-bold text-3xl md:text-4xl mb-4">Create an account</h1>
          <p className="mb-8 text-lg md:text-xl text-gray-700">Enter your details below</p>
          <form>
            <div className="flex flex-col gap-3">
              <TextField
                id="name"
                label="Name"
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
              <Button
                href="/homePage"
                variant="contained"
                color="primary"
                fullWidth
                style={{
                  backgroundColor: "#db1d54",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  textTransform: "none",
                  padding: "14px",
                  marginTop: "12px"
                }}
              >
                Create Account
              </Button>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<FcGoogle style={{ fontSize: '2rem' }} />}
                style={{
                  color: "#333",
                  borderColor: "#e5e7eb",
                  backgroundColor: "#fff",
               
                  fontSize: "1.1rem",
                  border: "2px solid light-grey",
                  textTransform: "none",
                  padding: "10px",
                  marginTop: "12px"
                }}
              >
                Sign up with Google
              </Button>
            </div>
            <div className="flex justify-center mt-8 text-lg">
              <span className="text-gray-500">Already have account?</span>
              <Link href="/signinPage" className="ml-2 font-medium text-black underline">
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}