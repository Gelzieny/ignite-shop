"use client";

import { HeaderContainer } from "./styles";

import Image from "next/image";
import Link from "next/link";
import { Cart } from "../Cart";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const showCartButton = pathname !== "/success";

  return (
    <HeaderContainer>
      <Link href="/">
        <Image 
          src="/logo.svg" 
          alt="Ignite Shop" 
          width={130} 
          height={52} 
          priority 
        />
      </Link>
      {showCartButton && <Cart />}
    </HeaderContainer>
  );
}
