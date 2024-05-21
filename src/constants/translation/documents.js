const defaultProps = {
   optional: false,
   required: true,
   is_exist: "not_check",
   apostile: "not_check",
   notary: "not_check",
   translation: "not_check",
   ready_copies: "not_check",
   sent: "not_check",
};

export const messages = {
   en: {
      lessThan20: "There is some job to do. Don't hesitate!",
      between20And50: "Let's keep going!",
      between50And80: "We're halfway there!",
      greaterThan80: "Great job!",
   },
   de: {
      lessThan20: "Es gibt noch einiges zu tun!",
      between20And50: "Lasst uns weitermachen!",
      between50And80: "Wir sind auf halbem Weg!",
      greaterThan80: "Toll gemacht!",
   },
   uk: {
      lessThan20: "Попереду багато роботи, не зволікай!",
      between20And50: "Продовжуємо працювати!",
      between50And80: "Ми на половині шляху!",
      greaterThan80: "Чудова робота!",
   },
   ru: {
      lessThan20: "Есть много дел!",
      between20And50: "Продолжаем работать!",
      between50And80: "Мы на полпути!",
      greaterThan80: "Отличная работа!",
   },
   tr: {
      lessThan20: "Yapılacak işler var!",
      between20And50: "Devam edelim!",
      between50And80: "Yarı yoldayız!",
      greaterThan80: "Harika iş!",
   },
   ar: {
      lessThan20: "هناك بعض الأعمال للقيام بها",
      between20And50: "لنواصل!",
      between50And80: "نحن على منتصف الطريق!",
      greaterThan80: "عمل رائع!",
   },
   fr: {
      lessThan20: "Il y a du travail à faire",
      between20And50: "Continuons!",
      between50And80: "Nous sommes à mi-chemin!",
      greaterThan80: "Super boulot!",
   },
   es: {
      lessThan20: "Hay trabajo por hacer",
      between20And50: "¡Sigamos adelante!",
      between50And80: "¡Estamos a mitad de camino!",
      greaterThan80: "¡Gran trabajo!",
   },
   pl: {
      lessThan20: "Jest trochę pracy do zrobienia",
      between20And50: "Kontynuujemy!",
      between50And80: "Jesteśmy w połowie drogi!",
      greaterThan80: "Świetna robota!",
   },
};

// Подача заяви
export const documents = [
   {
      id: 1,
      ...defaultProps,
      category: "Пітвердження особистості (Закордонний паспорт або паспорт)",
      English: "",
      German: "",
   },
   {
      id: 2,
      ...defaultProps,
      category: "Свідоцтво про народження чи виписка із сімейної книги",
      English: "Birth Certificate",
      German: "Geburtsurkunde / Auszug aus dem Familienbuch",
   },
   {
      id: 3,
      ...defaultProps,
      optional: true,
      category: "Свідоцтво про зміну імя чи прізвища (опціонально)",
      English: "Proof of Name Change",
      German:
         "Bei Namensänderung: Nachweis / Urkunde über die Änderung des Namens",
   },
   {
      id: 4,
      ...defaultProps,
      category:
         "Витяг з штрафових регістрів із всіх країн де ви перебували останніх 5 років (може бути не старшим ніж 3 місяці до моменту подання заяви)",
      English: "Police Clearance",
      German:
         "Vitja из штрафових регістрів із всіх країн, де ви перебували останніх 5 років",
   },
   {
      id: 5,
      ...defaultProps,
      optional: true,
      apostile: "Не потрібно",
      category:
         "Довідка допропорядочності (Certificate of good Standing) видається відповідними структурами охорони здоровя де ви працювали по професі",
      English: "Certificate of Good Standing",
      German: "Dovídka допропорядочності (Certificate of good Standing)",
   },
   {
      id: 6,
      ...defaultProps,
      optional: true,
      category:
         "Довідка із попереднього місця роботи, що ви без обмежень могли працювати по професії (опціонально)",
      English: "Employment Certificate",
      German: "Довідка із попереднього місця роботи",
   },
   {
      id: 7,
      ...defaultProps,
      category: "Диплом про закінчену вищу освіту",
      English: "Diploma",
      German: "Диплом про закінчену вищу освіту",
   },
   {
      id: 8,
      ...defaultProps,
      category:
         "Додаток до диплому, де вписаний огляд усіх пройдених предметів із годинами (не курікуюм)",
      English: "Transcript",
      German:
         "Додаток до диплому, де вписаний огляд усіх пройдених предметів із годинами (не курікуюм)",
   },
   {
      id: 9,
      ...defaultProps,
      category: "Додаток до диплому",
      English: "",
      German: "",
   },
   {
      id: 10,
      ...defaultProps,
      optional: true,
      category:
         "Доказ про проходження практичних навичок протягом навчання (опціонально)",
      English: "",
      German: "",
   },
   {
      id: 11,
      ...defaultProps,
      category: "Доказ про визнання остіти в одній із країн ЕС",
      English: "",
      German: "",
   },
   {
      id: 12,
      ...defaultProps,
      optional: true,
      apostile: "Не потрібно",
      category: "Характеристика із попередньго місця роботи",
      English: "",
      German: "",
   },
   {
      id: 13,
      ...defaultProps,
      optional: true,
      apostile: "Не потрібно",
      category:
         "Сертифікти про пройдені курси підвищення кваліфікації (опціонально)",
      English: "Course Certificates",
      German: "Сертифікти про пройдені курси підвищення кваліфікації",
   },
{
      id: 14,
      ...defaultProps,
      category: "Доказ про достатні знання німецької мови. Мінімум сертифікат Б2",
      English: "",
      German: "",
   },
   {
      id: 15,
      ...defaultProps,
      category: "Довідка про несудимість із Німеччини ( у рази, якщо до подання заяви ви перебуваєте в Німеччині більш ніж 6 місяців) ",
      English: "",
      German: "",
   },
    {
      id: 16,
      ...defaultProps,
       optional: true,
      apostile: "Не потрібно",
      notary: "not_check",
   translation: "not_check",
   ready_copies: "not_check",
      category: "Прописка в Німеччині",
      English: "",
      German: "",
   },

];
