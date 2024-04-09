import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import Logo from "@/public/Images/header/Logo.png";
import LogoBlack from "@/public/Images/header/Logo1.png";

type LogoProps = {
  scrolled: boolean;
};

export default function MainLogo({ scrolled }: LogoProps) {
  const router = useRouter();
  return (
    <>
      <div className="flex lg:flex-1">
        <div>
          <Link href="/">
            <Image
              width={100}              
              className="block"
              src={Logo}
              alt="Logo"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
