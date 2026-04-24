"use client";

import Button from "@/components/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "How we work", href: "/how-we-work" },
    { name: "ICBM", href: "/icbm" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div>
      <nav>
        <div className="bg-[#042133] py-1 text-[#FFF]">
          <ul className="flex list-none items-center justify-between px-6">
            <div className="flex items-center ml-20">
              <h1 className="font-semibold text-xl text-heavy">Arisefunds</h1>
              <img src="/logo.png" alt="logo" className="w-14 h-17 mt-5" />
            </div>

            <div className="flex gap-8 text-sm">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`relative group pb-1 transition-colors ${isActive ? "font-bold" : "font-medium"}`}
                    >
                      {link.name}
                      {/* Underline animation */}
                      <span
                        className={`absolute left-0 -bottom-1 w-full h-[2px] bg-[#1096DC] transform transition-transform duration-300 origin-left ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                      ></span>
                    </Link>
                  </li>
                );
              })}
            </div>

            <Button />
          </ul>
        </div>
      </nav>
    </div>
  );
}
