import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const SAURON_IMG = "https://cdn.poehali.dev/projects/d59fd24a-a991-40dc-9648-daef43edfb48/bucket/3d194b25-bfb0-46fc-a181-9425c6582c0b.png";
const NAZGUL_IMG = "https://cdn.poehali.dev/projects/d59fd24a-a991-40dc-9648-daef43edfb48/files/5f22c9f2-11a1-47ab-9b92-ac4f8a51f306.jpg";
const RING_IMG = "https://cdn.poehali.dev/projects/d59fd24a-a991-40dc-9648-daef43edfb48/files/c8a62a13-9930-4b0b-b1b3-78ac35acf501.jpg";
const MORDOR_IMG = "https://cdn.poehali.dev/projects/d59fd24a-a991-40dc-9648-daef43edfb48/files/b3d8dfeb-82a1-4bb2-9905-e0005c59e594.jpg";

const galleryItems = [
  {
    id: 1,
    img: SAURON_IMG,
    title: "Саурон",
    subtitle: "Тёмный Владыка",
    category: "персонажи",
    desc: "Властелин Мордора, создатель Единого Кольца, воплощение абсолютного зла Средиземья.",
  },
  {
    id: 2,
    img: NAZGUL_IMG,
    title: "Назгулы",
    subtitle: "Призраки Кольца",
    category: "персонажи",
    desc: "Девять королей людей, порабощённых Кольцами Власти, ставших бессмертными слугами Тьмы.",
  },
  {
    id: 3,
    img: RING_IMG,
    title: "Единое Кольцо",
    subtitle: "Кольцо Всевластья",
    category: "артефакты",
    desc: "Мастер-кольцо, выкованное в пламени Ородруина. В нём сосредоточена воля и сила Саурона.",
  },
  {
    id: 4,
    img: MORDOR_IMG,
    title: "Ородруин",
    subtitle: "Гора Рока",
    category: "локации",
    desc: "Вулкан в сердце Мордора, единственное место, где Кольцо может быть уничтожено.",
  },
];

const nazgulData = [
  { name: "Ангмарский Чародей", title: "Предводитель Назгулов", power: "Чёрное колдовство" },
  { name: "Кхамул Восточный", title: "Второй по могуществу", power: "Тьма и ужас" },
  { name: "Готмог", title: "Полководец Мордора", power: "Стратегия войны" },
  { name: "Джи Индур", title: "Дом Назгулов", power: "Клинок теней" },
  { name: "Акасата", title: "Слуга Тьмы", power: "Призрачный облик" },
  { name: "Хорнгул", title: "Незримый", power: "Незримость" },
  { name: "Дварин", title: "Падший король", power: "Смертоносный взор" },
  { name: "Муразор", title: "Кольценосец", power: "Власть страха" },
  { name: "Ренг", title: "Тёмный вассал", power: "Проклятие теней" },
];

const historyEvents = [
  { year: "II эпоха, 1000", event: "Саурон является в Средиземье", desc: "Тёмный Владыка принимает обличие и начинает собирать силы в Мордоре." },
  { year: "II эпоха, 1600", event: "Ковка Единого Кольца", desc: "В пламени Ородруина создано Кольцо Всевластья — величайший артефакт зла." },
  { year: "II эпоха, 3441", event: "Последний союз", desc: "Элендил и Гил-гэлад объединяют силы. Саурон повержен, Кольцо утеряно." },
  { year: "III эпоха, 2941", event: "Тень возвращается", desc: "Саурон вновь обретает силу в Дол Гулдуре. Назгулы ищут Кольцо." },
  { year: "III эпоха, 3018", event: "Война Кольца", desc: "Фродо отправляется в путь. Братство Кольца противостоит армиям Мордора." },
  { year: "III эпоха, 3019", event: "Гибель Мордора", desc: "Кольцо уничтожено. Ородруин извергается. Саурон рассеивается навсегда." },
];

const artifacts = [
  { name: "Единое Кольцо", runes: "Ash nazg durbatulûk", power: "Абсолютное господство", danger: 10 },
  { name: "Палантиры", runes: "Камни Видения", power: "Дальновидение и контроль", danger: 8 },
  { name: "Меч Нарсил", runes: "Осколки Тьмы", power: "Разрушение власти", danger: 7 },
  { name: "Моргул-клинок", runes: "Чёрное железо", power: "Превращение в призрака", danger: 9 },
  { name: "Перья Манве", runes: "Запретное знание", power: "Тьма видений", danger: 6 },
  { name: "Чёрные Кольца", runes: "Девять властей", power: "Порабощение смертных", danger: 9 },
];

function ScrollFade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Index() {
  const [galleryFilter, setGalleryFilter] = useState("все");
  const [selectedGallery, setSelectedGallery] = useState<typeof galleryItems[0] | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Главная" },
    { id: "sauron", label: "О Сауроне" },
    { id: "nazgul", label: "Назгулы" },
    { id: "history", label: "История" },
    { id: "artifacts", label: "Артефакты" },
    { id: "gallery", label: "Галерея" },
  ];

  const filteredGallery = galleryFilter === "все"
    ? galleryItems
    : galleryItems.filter(i => i.category === galleryFilter);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-mordor-texture min-h-screen text-[#d4b896]">

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrollY > 60 ? "rgba(8, 3, 5, 0.97)" : "rgba(8, 3, 5, 0.5)",
          backdropFilter: "blur(12px)",
          borderBottom: scrollY > 60 ? "1px solid rgba(139, 26, 26, 0.3)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-3">
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
              <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link-mordor">
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
              <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link-mordor text-left py-2">
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${MORDOR_IMG})`,
            transform: `translateY(${scrollY * 0.4}px)`,
            filter: "brightness(0.25) saturate(1.5)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080305]/60 via-transparent to-[#080305]" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <div
              className="animate-eye-glow"
              style={{
                width: 120,
                height: 60,
                borderRadius: "50%",
                background: "radial-gradient(ellipse, #ff6600, #cc2200, #660000)",
                boxShadow: "0 0 40px #ff4400, 0 0 80px #cc2200, 0 0 120px #660000",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 28,
                  height: 48,
                  background: "#000",
                  borderRadius: "50%",
                  boxShadow: "0 0 15px rgba(255,100,0,0.5)",
                }}
              />
            </div>
          </div>
          <p
            className="font-cinzel text-[#8b1a1a] text-sm tracking-[0.5em] uppercase mb-4"
            style={{ animation: "rise 1s ease-out 0.2s forwards", opacity: 0 }}
          >
            Земля Теней
          </p>
          <h1
            className="font-cinzel-decorative text-5xl md:text-8xl font-bold text-[#c0392b] text-glow-red mb-6 leading-none"
            style={{ animation: "rise 1s ease-out 0.4s forwards", opacity: 0 }}
          >
            МОРДОР
          </h1>
          <p
            className="font-crimson text-xl md:text-2xl text-[#b09070] italic max-w-2xl mx-auto mb-4"
            style={{ animation: "rise 1s ease-out 0.6s forwards", opacity: 0 }}
          >
            «Ash nazg durbatulûk, ash nazg gimbatul,<br />
            ash nazg thrakatulûk agh burzum-ishi krimpatul.»
          </p>
          <p
            className="font-crimson text-sm text-[#7a5a4a] mb-12"
            style={{ animation: "rise 1s ease-out 0.7s forwards", opacity: 0 }}
          >
            Одно Кольцо, чтоб править всеми. Одно Кольцо, чтоб всех собрать.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animation: "rise 1s ease-out 0.9s forwards", opacity: 0 }}
          >
            <button onClick={() => scrollTo("sauron")} className="btn-mordor px-8 py-3 text-sm rounded">
              Познать тьму
            </button>
            <button
              onClick={() => scrollTo("gallery")}
              className="border border-[#8b1a1a]/50 text-[#b09070] font-cinzel text-xs tracking-widest uppercase px-8 py-3 rounded hover:border-[#c0392b] hover:text-[#e8c8b0] transition-all"
            >
              Галерея
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <Icon name="ChevronDown" size={28} className="text-[#8b1a1a]" />
        </div>
      </section>

      {/* SAURON */}
      <section id="sauron" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080305] via-[#0f0508] to-[#080305]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollFade>
            <div className="text-center mb-16">
              <p className="font-cinzel text-[#8b1a1a] text-xs tracking-[0.5em] uppercase mb-3">Тёмный Владыка</p>
              <h2 className="section-heading text-4xl md:text-6xl text-[#c0392b] text-glow-red mb-4">Саурон</h2>
              <div className="divider-fire w-48 mx-auto" />
            </div>
          </ScrollFade>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollFade delay={200}>
              <div className="relative">
                <div className="card-mordor rounded overflow-hidden">
                  <img src={SAURON_IMG} alt="Саурон" className="w-full h-96 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080305] via-transparent to-transparent" />
                </div>
                <div
                  className="absolute -inset-2 rounded opacity-40 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse, rgba(192, 57, 43, 0.2), transparent 70%)" }}
                />
              </div>
            </ScrollFade>

            <ScrollFade delay={400}>
              <div className="space-y-6">
                <p className="font-crimson text-xl text-[#c8a880] italic leading-relaxed">
                  «Он был великим, но пал в гордыне своей. Некогда Саурон был Майаром на службе у Аулэ,
                  но тёмная воля Моргота совратила его в пучину зла.»
                </p>
                <p className="font-crimson text-lg text-[#9a7a60] leading-relaxed">
                  Саурон — падший Майа, величайший слуга Моргота и самый могущественный из Тёмных Владык.
                  Он создал Мордор как свою крепость и выковал Единое Кольцо, вложив в него бо́льшую часть
                  своей сущности и силы.
                </p>
                <p className="font-crimson text-lg text-[#9a7a60] leading-relaxed">
                  Его огненный взор, венчающий башню Барад-дур, неусыпно следит за каждым уголком Средиземья.
                  Для него нет ничего невозможного — пока существует Кольцо.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { label: "Эпоха правления", value: "6000+ лет" },
                    { label: "Армия орков", value: "∞" },
                    { label: "Кольца власти", value: "19" },
                  ].map(stat => (
                    <div key={stat.label} className="text-center card-mordor rounded p-4 transition-all duration-300">
                      <div className="font-cinzel-decorative text-2xl text-[#c0392b] text-glow-red">{stat.value}</div>
                      <div className="font-cinzel text-xs text-[#7a5a4a] tracking-wider mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* NAZGUL */}
      <section id="nazgul" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080305] via-[#0f0508] to-[#080305]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollFade>
            <div className="text-center mb-16">
              <p className="font-cinzel text-[#8b1a1a] text-xs tracking-[0.5em] uppercase mb-3">Слуги Тьмы</p>
              <h2 className="section-heading text-4xl md:text-6xl text-[#c0392b] text-glow-red mb-4">Назгулы</h2>
              <div className="divider-fire w-48 mx-auto mb-6" />
              <p className="font-crimson text-xl text-[#9a7a60] italic max-w-2xl mx-auto">
                Девять королей смертных, обращённых в Призраки Кольца вечной жаждой власти.
              </p>
            </div>
          </ScrollFade>

          <ScrollFade delay={100}>
            <div className="relative mb-16 rounded-lg overflow-hidden card-mordor" style={{ height: 320 }}>
              <img src={NAZGUL_IMG} alt="Назгулы" className="w-full h-full object-cover object-top" style={{ filter: "brightness(0.6) saturate(1.3)" }} />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080305]/80 via-transparent to-[#080305]/80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-cinzel text-[#c0392b] text-glow-red text-xl md:text-2xl tracking-[0.3em] uppercase text-center px-4">
                  Девять… для смертных-королей
                </p>
              </div>
            </div>
          </ScrollFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {nazgulData.map((nazgul, i) => (
              <ScrollFade key={nazgul.name} delay={i * 70}>
                <div className="card-mordor rounded-lg p-5 transition-all duration-300 group cursor-default">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="font-cinzel-decorative text-[#8b1a1a] text-2xl opacity-40 group-hover:opacity-100 transition-opacity leading-none mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-cinzel text-[#e8c8b0] text-sm tracking-wider group-hover:text-[#ff6666] transition-colors">
                        {nazgul.name}
                      </h3>
                      <p className="font-crimson text-[#7a5a4a] text-sm italic">{nazgul.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Zap" size={12} className="text-[#8b1a1a]" />
                    <span className="font-crimson text-[#9a7060] text-sm">{nazgul.power}</span>
                  </div>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section id="history" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080305] via-[#0a0406] to-[#080305]" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <ScrollFade>
            <div className="text-center mb-16">
              <p className="font-cinzel text-[#8b1a1a] text-xs tracking-[0.5em] uppercase mb-3">Хроники Тьмы</p>
              <h2 className="section-heading text-4xl md:text-6xl text-[#c0392b] text-glow-red mb-4">История</h2>
              <div className="divider-fire w-48 mx-auto" />
            </div>
          </ScrollFade>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#8b1a1a] to-transparent" />
            <div className="space-y-12">
              {historyEvents.map((event, i) => (
                <ScrollFade key={event.year} delay={i * 100}>
                  <div className={`relative flex flex-col md:flex-row ${i % 2 !== 0 ? "md:flex-row-reverse" : ""} items-start gap-8`}>
                    <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-[#c0392b] z-10 animate-pulse-red" />
                    <div className={`pl-14 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right md:w-1/2" : "md:pl-12 md:w-1/2 md:ml-auto"}`}>
                      <div className="card-mordor rounded-lg p-6 transition-all duration-300">
                        <p className="font-cinzel text-[#8b1a1a] text-xs tracking-[0.3em] uppercase mb-2">{event.year}</p>
                        <h3 className="font-cinzel text-[#e8c8b0] text-base tracking-wide mb-3">{event.event}</h3>
                        <p className="font-crimson text-[#9a7a60] text-lg leading-relaxed">{event.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ARTIFACTS */}
      <section id="artifacts" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080305] via-[#100308] to-[#080305]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollFade>
            <div className="text-center mb-16">
              <p className="font-cinzel text-[#8b1a1a] text-xs tracking-[0.5em] uppercase mb-3">Предметы Силы</p>
              <h2 className="section-heading text-4xl md:text-6xl text-[#c0392b] text-glow-red mb-4">Артефакты</h2>
              <div className="divider-fire w-48 mx-auto" />
            </div>
          </ScrollFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artifacts.map((artifact, i) => (
              <ScrollFade key={artifact.name} delay={i * 100}>
                <div className="card-mordor rounded-lg p-6 group cursor-default transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#8b1a1a]/20 flex items-center justify-center border border-[#8b1a1a]/30 group-hover:border-[#c0392b]/60 transition-colors flex-shrink-0">
                      <Icon name="Gem" size={18} className="text-[#c0392b]" />
                    </div>
                    <div>
                      <h3 className="font-cinzel text-[#e8c8b0] text-sm tracking-wide">{artifact.name}</h3>
                      <p className="font-crimson text-[#7a5a4a] text-sm italic">{artifact.runes}</p>
                    </div>
                  </div>
                  <p className="font-crimson text-[#9a7a60] text-base mb-4">{artifact.power}</p>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-cinzel text-[#7a5a4a] text-xs tracking-wider">ОПАСНОСТЬ</span>
                      <span className="font-cinzel text-[#c0392b] text-xs">{artifact.danger}/10</span>
                    </div>
                    <div className="h-1 bg-[#1a0810] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${artifact.danger * 10}%`,
                          background: "linear-gradient(90deg, #6b1212, #c0392b, #ff4444)",
                          boxShadow: "0 0 8px rgba(192, 57, 43, 0.6)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080305] via-[#0f0508] to-[#080305]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollFade>
            <div className="text-center mb-12">
              <p className="font-cinzel text-[#8b1a1a] text-xs tracking-[0.5em] uppercase mb-3">Образы Тьмы</p>
              <h2 className="section-heading text-4xl md:text-6xl text-[#c0392b] text-glow-red mb-4">Галерея</h2>
              <div className="divider-fire w-48 mx-auto mb-8" />
              <div className="flex flex-wrap justify-center gap-3">
                {["все", "персонажи", "артефакты", "локации"].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setGalleryFilter(cat)}
                    className={`font-cinzel text-xs tracking-widest uppercase px-5 py-2 rounded border transition-all duration-300 ${
                      galleryFilter === cat
                        ? "bg-[#8b1a1a] border-[#c0392b] text-[#f0d0b0]"
                        : "border-[#3d2b2b] text-[#7a5a4a] hover:border-[#8b1a1a] hover:text-[#b09070]"
                    }`}
                    style={galleryFilter === cat ? { boxShadow: "0 0 20px rgba(139,26,26,0.5)" } : {}}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </ScrollFade>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredGallery.map((item, i) => (
              <ScrollFade key={item.id} delay={i * 150}>
                <div
                  className="gallery-item card-mordor rounded-lg cursor-pointer group"
                  onClick={() => setSelectedGallery(item)}
                >
                  <div className="relative overflow-hidden rounded-lg" style={{ height: 320 }}>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                      style={{ filter: "brightness(0.65) saturate(1.3)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080305]/95 via-[#080305]/20 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <span className="font-cinzel text-[#8b1a1a] text-xs tracking-[0.3em] uppercase mb-1 group-hover:text-[#c0392b] transition-colors">
                        {item.subtitle}
                      </span>
                      <h3 className="font-cinzel-decorative text-2xl text-[#e8c8b0]">{item.title}</h3>
                      <p className="font-crimson text-[#9a7a60] text-base mt-2 leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500">
                        {item.desc}
                      </p>
                      <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Icon name="ZoomIn" size={14} className="text-[#c0392b]" />
                        <span className="font-cinzel text-[#8b1a1a] text-xs tracking-wider">Подробнее</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 border border-[#8b1a1a]/20 group-hover:border-[#c0392b]/50 transition-colors rounded-lg" />
                  </div>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-16 border-t border-[#8b1a1a]/20">
        <div className="absolute inset-0 bg-[#060203]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div
            className="mx-auto mb-6 animate-eye-glow"
            style={{
              width: 60,
              height: 30,
              borderRadius: "50%",
              background: "radial-gradient(ellipse, #ff6600, #cc2200, #660000)",
              boxShadow: "0 0 20px #ff4400, 0 0 40px #cc2200",
            }}
          />
          <p className="font-cinzel-decorative text-2xl text-[#8b1a1a] text-glow-red mb-2">МОРДОР</p>
          <p className="font-crimson text-[#5a3a3a] italic text-lg mb-8">«И тьма покроет землю, и зло воцарится навеки»</p>
          <div className="divider-fire w-48 mx-auto mb-6" />
          <p className="font-cinzel text-[#4a2a2a] text-xs tracking-widest uppercase">
            Земля Теней · Средиземье · Третья Эпоха
          </p>
        </div>
      </footer>

      {/* GALLERY MODAL */}
      {selectedGallery && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          style={{ background: "rgba(4, 1, 3, 0.95)", backdropFilter: "blur(16px)" }}
          onClick={() => setSelectedGallery(null)}
        >
          <div
            className="card-mordor rounded-lg max-w-3xl w-full overflow-hidden"
            style={{ animation: "rise 0.4s ease-out forwards" }}
            onClick={e => e.stopPropagation()}
          >
            <div className="relative" style={{ height: 400 }}>
              <img
                src={selectedGallery.img}
                alt={selectedGallery.title}
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.75) saturate(1.4)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0508]/90 via-transparent to-transparent" />
              <button
                onClick={() => setSelectedGallery(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#080305]/80 border border-[#8b1a1a]/40 flex items-center justify-center text-[#c0392b] hover:border-[#c0392b] transition-colors"
              >
                <Icon name="X" size={16} />
              </button>
            </div>
            <div className="p-8">
              <span className="font-cinzel text-[#8b1a1a] text-xs tracking-[0.4em] uppercase">{selectedGallery.subtitle}</span>
              <h3 className="font-cinzel-decorative text-3xl text-[#e8c8b0] mt-2 mb-4 text-glow-red">{selectedGallery.title}</h3>
              <p className="font-crimson text-xl text-[#9a7a60] leading-relaxed">{selectedGallery.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}