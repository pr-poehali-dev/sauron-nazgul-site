export const SAURON_IMG = "https://cdn.poehali.dev/projects/d59fd24a-a991-40dc-9648-daef43edfb48/bucket/3d194b25-bfb0-46fc-a181-9425c6582c0b.png";
export const NAZGUL_IMG = "https://cdn.poehali.dev/projects/d59fd24a-a991-40dc-9648-daef43edfb48/files/5f22c9f2-11a1-47ab-9b92-ac4f8a51f306.jpg";
export const RING_IMG = "https://cdn.poehali.dev/projects/d59fd24a-a991-40dc-9648-daef43edfb48/files/c8a62a13-9930-4b0b-b1b3-78ac35acf501.jpg";
export const MORDOR_IMG = "https://cdn.poehali.dev/projects/d59fd24a-a991-40dc-9648-daef43edfb48/files/b3d8dfeb-82a1-4bb2-9905-e0005c59e594.jpg";

export interface GalleryItem {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  category: string;
  desc: string;
}

export const galleryItems: GalleryItem[] = [
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

export const nazgulData = [
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

export const historyEvents = [
  { year: "II эпоха, 1000", event: "Саурон является в Средиземье", desc: "Тёмный Владыка принимает обличие и начинает собирать силы в Мордоре." },
  { year: "II эпоха, 1600", event: "Ковка Единого Кольца", desc: "В пламени Ородруина создано Кольцо Всевластья — величайший артефакт зла." },
  { year: "II эпоха, 3441", event: "Последний союз", desc: "Элендил и Гил-гэлад объединяют силы. Саурон повержен, Кольцо утеряно." },
  { year: "III эпоха, 2941", event: "Тень возвращается", desc: "Саурон вновь обретает силу в Дол Гулдуре. Назгулы ищут Кольцо." },
  { year: "III эпоха, 3018", event: "Война Кольца", desc: "Фродо отправляется в путь. Братство Кольца противостоит армиям Мордора." },
  { year: "III эпоха, 3019", event: "Гибель Мордора", desc: "Кольцо уничтожено. Ородруин извергается. Саурон рассеивается навсегда." },
];

export const artifacts = [
  { name: "Единое Кольцо", runes: "Ash nazg durbatulûk", power: "Абсолютное господство", danger: 10 },
  { name: "Палантиры", runes: "Камни Видения", power: "Дальновидение и контроль", danger: 8 },
  { name: "Меч Нарсил", runes: "Осколки Тьмы", power: "Разрушение власти", danger: 7 },
  { name: "Моргул-клинок", runes: "Чёрное железо", power: "Превращение в призрака", danger: 9 },
  { name: "Перья Манве", runes: "Запретное знание", power: "Тьма видений", danger: 6 },
  { name: "Чёрные Кольца", runes: "Девять властей", power: "Порабощение смертных", danger: 9 },
];
