const defaultProps = {
   optional: "",
   category: "-",
   is_exist: "-",
   apostile: "-",
   notary: "-",
   application: "-",
   translation: "-",
   ready_copies: "-",
   sent: "-",
};

// Подача заяви
export const documents = [
   {
      ...defaultProps,
      category: "Пітвердження особистості (Закордонний паспорт або паспорт)",
      English: "",
      German: "",
   },
   {
      ...defaultProps,
      category: "Свідоцтво про народження чи виписка із сімейної книги",
      English: "Birth Certificate",
      German: "Geburtsurkunde / Auszug aus dem Familienbuch",
   },
   {
      ...defaultProps,
      optional: "optional",
      category: "Свідоцтво про зміну імя чи прізвища (опціонально)",
      English: "Proof of Name Change",
      German:
         "Bei Namensänderung: Nachweis / Urkunde über die Änderung des Namens",
   },
   {
      ...defaultProps,
      category:
         "Витяг з штрафових регістрів із всіх країн де ви перебували останніх 5 років (може бути не старшим ніж 3 місяці до моменту подання заяви)",
      English: "Police Clearance",
      German:
         "Vitja из штрафових регістрів із всіх країн, де ви перебували останніх 5 років",
   },
   {
      ...defaultProps,
      category:
         "Довідка допропорядочності (Certificate of good Standing) видається відповідними структурами охорони здоровя де ви працювали по професі",
      English: "Certificate of Good Standing",
      German: "Dovídka допропорядочності (Certificate of good Standing)",
   },
   {
      ...defaultProps,
      optional: "optional",
      category:
         "Довідка із попереднього місця роботи, що ви без обмежень могли працювати по професії (опціонально)",
      English: "Employment Certificate",
      German: "Довідка із попереднього місця роботи",
   },
   {
      ...defaultProps,
      category: "Диплом про закінчену вищу освіту",
      English: "Diploma",
      German: "Диплом про закінчену вищу освіту",
   },
   {
      ...defaultProps,
      category:
         "Додаток до диплому, де вписаний огляд усіх пройдених предметів із годинами (не курікуюм)",
      English: "Transcript",
      German:
         "Додаток до диплому, де вписаний огляд усіх пройдених предметів із годинами (не курікуюм)",
   },
   {
      ...defaultProps,
      category: "Додаток до диплому",
      English: "",
      German: "",
   },
   {
      ...defaultProps,
      optional: "optional",
      category:
         "Доказ про проходження практичних навичок протягом навчання (опціонально)",
      English: "",
      German: "",
   },
   {
      ...defaultProps,
      category: "Доказ про визнання остіти в одній із країн ЕС",
      English: "",
      German: "",
   },
   {
      ...defaultProps,
      category: "Характеристика із попередньго місця роботи",
      English: "",
      German: "",
   },
   {
      ...defaultProps,
      optional: "optional",
      category:
         "Сертифікти про пройдені курси підвищення кваліфікації (опціонально)",
      English: "Course Certificates",
      German: "Сертифікти про пройдені курси підвищення кваліфікації",
   },
];
