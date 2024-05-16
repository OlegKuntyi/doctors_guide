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
      lessThan20: "There is some job to do. Don't hesitate",
      between20And50: "Making progress!",
      between50And80: "Almost there!",
      greaterThan80: "Great job!",
   },
   de: {
      lessThan20: "Es gibt noch einiges zu tun!",
      between20And50: "Fortschritt!",
      between50And80: "Fast da!",
      greaterThan80: "Toll gemacht!",
   },
   uk: {
      lessThan20: "Попереду багато роботи, не зволікай!",
      between20And50: "Зростаємо!",
      between50And80: "Майже готово!",
      greaterThan80: "Чудова робота!",
   },
   ru: {
      lessThan20: "Есть много дел!",
      between20And50: "Прогресс!",
      between50And80: "Почти готово!",
      greaterThan80: "Отличная работа!",
   },
   tr: {
      lessThan20: "Yapılacak işler var!",
      between20And50: "İlerleme kaydediliyor!",
      between50And80: "Neredeyse orada!",
      greaterThan80: "Harika iş!",
   },
   ar: {
      lessThan20: "هناك بعض الأعمال للقيام بها",
      between20And50: "تحقيق تقدم!",
      between50And80: "تقريبا هناك!",
      greaterThan80: "عمل رائع!",
   },
   fr: {
      lessThan20: "Il y a du travail à faire",
      between20And50: "En progrès!",
      between50And80: "Presque là!",
      greaterThan80: "Super boulot!",
   },
   es: {
      lessThan20: "Hay trabajo por hacer",
      between20And50: "¡Progresando!",
      between50And80: "¡Casi allí!",
      greaterThan80: "¡Gran trabajo!",
   },
   pl: {
      lessThan20: "Jest trochę pracy do zrobienia",
      between20And50: "Postępy!",
      between50And80: "Prawie tam!",
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
];
