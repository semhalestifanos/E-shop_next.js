import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconTextBox from "./IndexTextBox/index";
import SendIcon from '@mui/icons-material/Send';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export function Footer() {
  return (
    <footer className={`${inter.className} bg-black text-white pt-10
     pb-6`}>
      <div className="" />
      <div className="container mx-auto px-4">
        <div className="
          flex flex-col
          gap-y-8
          sm:flex-row
          sm:gap-x-8
          lg:gap-x-12
          xl:gap-x-16
          flex-wrap
          justify-between
          items-start
          
        ">
          <div className="w-full sm:w-auto">
            <h1 className="text-lg sm:text-xl font-bold mb-5">Exclusive</h1>
            <ul className="text-lg sm:text-xl  mb-5">
              <li className="text-lg sm:text-xl mb-5">Subscribe</li>
              <li  >Get 10% off your first order</li>
              <li className="mt-4">
                <IconTextBox
                   
                  text="Enter your email"
                  icon={SendIcon}
                  reverse
                  bordered
                  width="w-56"
                />
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-auto">
            <h1 className="text-lg sm:text-xl font-bold mb-5">Support</h1>
            <ul className="space-y-1 mb-6 text-sm sm:text-base">
              <li className='mb-5'>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
              <li  className='mb-5'>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>
          <div className="w-full sm:w-auto">
            <h1 className="text-lg sm:text-xl font-bold mb-5 ">Account</h1>
            <ul className="space-y-1 mb-6 text-sm sm:text-base">
              <li  className='mb-4'>My Account</li>
              <li  className='mb-5'>Login / Register</li>
              <li  className='mb-5'>Cart</li>
              <li  className='mb-4.5'>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>
          <div className="w-full sm:w-auto">
            <h1 className="text-lg sm:text-xl font-bold mb-5">Quick Link</h1>
            <ul className=" text-sm sm:text-base">
              <li  className='mb-5'>Privacy Policy</li>
              <li  className='mb-5'>Terms Of Use</li>
              <li  className='mb-5'>FAQ</li>
              <li >Contact</li>
            </ul>
          </div>
          <div className="w-full sm:w-auto">
            <h1 className="text-lg sm:text-xl font-bold mb-5">Download App</h1>
            <p className="mb-2 text-white opacity-75 text-sm">Save $3 with App New User Only</p>
            <div className="flex gap-4 items-center mb-4">
              
              <div  className='mb-5'>
                <img src="/images/qrcode.png" alt="QR Code" className="w-20 " />
              </div>
              <div className="flex flex-col gap-2 mb-8">
                <IconTextBox icon={PlayArrowIcon} text="Google Play" bordered width="w-40" />
                <IconTextBox icon={PlayArrowIcon} text="App Store" bordered width="w-40" />
              </div>
            </div>
            <div className="flex gap-13 mt-4">
              <FacebookIcon className="text-white text-2xl" />
              <TwitterIcon className="text-white text-2xl" />
              <InstagramIcon className="text-white text-2xl" />
              <LinkedInIcon className="text-white text-2xl" />
            </div>
          </div>
        </div>
    <div className="mt-22 pt-4 flex justify-center items-center text-center w-full border-t border-white/20 mb-8">
  <span className="flex items-center text-gray-200 text-xs sm:text-sm ">
    @Copyright Rimel 2022. All rights reserved
  </span>
</div>
      </div>
    </footer>
  );
}