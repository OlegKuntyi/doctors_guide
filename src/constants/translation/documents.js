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
