import { useState } from "react";
import Icon from "@/components/ui/icon";

const navItems = [
  { id: "home", label: "Главная" },
  { id: "sauron", label: "О Сауроне" },
  { id: "nazgul", label: "Назгулы" },
  { id: "history", label: "История" },
  { id: "artifacts", label: "Артефакты" },
  { id: "gallery", label: "Галерея" },
];

interface NavBarProps {
  scrollY: number;
  scrollTo: (id: string) => void;
}

export default function NavBar({ scrollY, scrollTo }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    setMenuOpen(false);
    scrollTo(id);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrollY > 60 ? "rgba(8, 3, 5, 0.97)" : "rgba(8, 3, 5, 0.5)",
        backdropFilter: "blur(12px)",
        borderBottom: scrollY > 60 ? "1px solid rgba(139, 26, 26, 0.3)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => handleScrollTo("home")} className="flex items-center gap-3">
          <div
            className="animate-eye-glow"
            style={{
              width: 40,
              height: 20,
              borderRadius: "50%",
              background: "radial-gradient(ellipse, #ff6600, #cc2200, #660000)",
              boxShadow: "0 0 15px #ff4400, 0 0 30px #cc2200",
            }}
          />
          <span className="font-cinzel-decorative text-xl text-[#c0392b] text-glow-red tracking-widest">
            МОРДОР
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button key={item.id} onClick={() => handleScrollTo(item.id)} className="nav-link-mordor">
              {item.label}
            </button>
          ))}
        </div>

        <button className="md:hidden text-[#c0392b]" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#080305]/98 border-t border-[#8b1a1a]/30 px-6 py-4 flex flex-col gap-4">
          {navItems.map(item => (
            <button key={item.id} onClick={() => handleScrollTo(item.id)} className="nav-link-mordor text-left py-2">
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
