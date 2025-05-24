"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Flight", path: "/flights", icon: "/Icons/flight.png" },
    { name: "Hotel", path: "/hotels", icon: "/Icons/hotel.png" },
    { name: "Train", path: "/trains", icon: "/Icons/Train.png" },
    { name: "Bus", path: "/buses", icon: "/Icons/bus.png" },
    { name: "Packages", path: "/packages", icon: "/Icons/package.png" },
  ];

  return (
    <nav className="p-4 flex items-center justify-center gap-4 bg-[#f5f7fb] hidden md:flex">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className={`flex gap-2 items-center text-lg p-2 rounded transition-all ${
            pathname === item.path
              ? "bg-blue-500 text-white shadow"
              : "hover:bg-blue-100 text-black"
          }`}
        >
          <Image src={item.icon} width={40} height={40} alt={item.name} />
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
