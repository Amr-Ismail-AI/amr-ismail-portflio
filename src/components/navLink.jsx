"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      href={link.url}
      className={`
        px-4 py-3
        rounded-2xl
        font-semibold
        transition-all duration-300
        hover:bg-blue-300/40
        hover:scale-105
        active:scale-95
        ${
          pathName === link.url
            ? "bg-black text-white"
            : "text-black"
        }
      `}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;