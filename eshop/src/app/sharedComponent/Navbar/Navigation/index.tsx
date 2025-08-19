// import React from 'react';
// import "@fontsource/inter";
// import SearchIcon from '@mui/icons-material/Search';
// import TextField from '@mui/material/TextField';
// import InputAdornment from '@mui/material/InputAdornment';

// export function ExclusiveNav() {
//   return (
//     <h1 className="
//   text-zinc-950 font-bold font-inter
//   md:px-20 lg:px-32 xl:px-60
//   text-lg sm:text-xl md:text-2xl
//   whitespace-nowrap
// ">
//       Exclusive
//     </h1>
//   );
// }

// export function SearchBar() {
//   return (
//     <div className="flex items-center justify-end w-full px-4 sm:px-8 lg:px-0">
//       <TextField
//         id="outlined-basic"
//         label="What are you looking for?"
//         variant="outlined"
//         className="w-40 sm:w-64 md:w-80"
//         InputProps={{
//           endAdornment: (
//             <InputAdornment position="end">
//               <SearchIcon />
//             </InputAdornment>
//           ),
//         }}
//       />
//     </div>
//   );
// }

// export function NavBar() {
//   return (
//     <nav className="flex items-center justify-between px-4 sm:px-8 md:px-20 lg:px-32 xl:px-60 py-4 border-b border-gray-200">
//       {/* Left part: Exclusive logo */}
//       <ExclusiveNav />

//       {/* Middle part: navigation links */}
//       <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
//         <li><a href="/" className="hover:underline">Home</a></li>
//         <li><a href="/contact" className="hover:underline">Contact</a></li>
//         <li><a href="/about" className="hover:underline">About</a></li>
//         <li><a href="/signup" className="hover:underline underline">Sign Up</a></li>
//       </ul>

//       {/* Right part: Search bar */}
//       <SearchBar />
//     </nav>
//   );
// }


import React from "react";
export default function Navbar() {
  return (
    <nav style={{
      background: "#fff",
      borderBottom: "1px solid #eee",
      padding: "0.8rem 0",
      width: "100%"
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <div style={{ fontWeight: "bold", fontSize: "1.3rem" }}>Exclusive</div>
        <div style={{ display: "flex", gap: "2rem", fontSize: "1rem" }}>
          <a href="/" style={{ color: "#222", textDecoration: "none" }}>Home</a>
          <a href="/contact" style={{ color: "#222", textDecoration: "none" }}>Contact</a>
          <a href="/about" style={{ color: "#222", textDecoration: "none" }}>About</a>
          <a href="/signupPage" style={{ color: "#DB4444", textDecoration: "none", fontWeight: "bold" }}>Sign Up</a>
        </div>

        
        <div style={{marginLeft: "1 rem"}}>
          <input
            type="text"
            placeholder="What are you looking for?"
            style={{
              padding: "0.5rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "230px"
            }}
          />
        </div>



      </div>
    </nav>
  );
}






