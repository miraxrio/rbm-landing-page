import { useEffect, useState } from "react";
import MainMenu from "./main-menu";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition duration-300 ease-in-out ${
        scrolled ? "bg-[#0d0e2e] backdrop-blur-[90px]" : "bg-transparent"
      }`}
    >
      <MainMenu scrolled={scrolled} setMobileMenuOpen={setMobileMenuOpen} />
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
}
