import { Link } from "react-router-dom";
import logo from "../assets/bird.svg";
import { useEffect, useRef, useState } from "react";
const Header = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between px-4 md:px-8 w-full border-b border-gray-300">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="size-14" />
        <Link
          to="/"
          className="text-xl font-bold bg-gradient-to-r from-green-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Flowly
        </Link>
      </div>

      <div ref={dropdownRef} className="relative">
        <button onClick={() => setOpen(!open)} className="border border-slate-300 rounded-md px-4 py-2 cursor-pointer">
          Toggle
        </button>
        {open && (
          <div className="absolute top-10 bg-white right-2">
           <ul className="border border-slate-300 list-none rounded-md p-1">
            <li className="px-6 py-2 hover:bg-slate-100 cursor-pointer rounded-sm" onClick={()=>setOpen(false)}>Light</li>
            <li className="px-6 py-2 hover:bg-slate-100 cursor-pointer rounded-sm" onClick={()=>setOpen(false)}>Dark</li>
            <li className="px-6 py-2 hover:bg-slate-100 cursor-pointer rounded-sm" onClick={()=>setOpen(false)}>Forest</li>
           </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
