import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/logo2-sem-fundo.png";

export default function Logo() {
  return (
    <Link href="/" aria-label="Home" className="w-fit">
      <Image
        src={logo.src}
        width={60}
        height={80}
        quality={100}
        alt="Logotipo Celestial Pet"
        className="drop-shadow-lg"
      />
    </Link>
  );
}
