import { useState, useEffect } from "react";

const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (item: string) => {
    setActive(item);
    const el = document.getElementById(item.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <span
          className="text-3xl font-bold italic text-primary tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          SM
        </span>

        <div className="flex gap-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === item
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
