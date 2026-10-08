import type { Instructor } from "@/types";

/*
 * Seed content.
 *
 * Instructor profiles are illustrative seed content for the demo
 * data set. They are not presented as verified real-world experts,
 * and no academic credentials are asserted. When a real content
 * team and backend exist, these records should be replaced with
 * verified author biographies and credentials.
 */

export const instructors: Instructor[] = [
  {
    id: "instr-amelia-hart",
    slug: "amelia-hart",
    name: "Amelia Hart",
    role: "Egyptian History Course Author",
    biography:
      "Amelia writes and teaches the core history courses on Manetho. Her work focuses on making the evidence behind Egyptian chronology accessible — what we know, how we know it, and where the record is genuinely uncertain. She has spent many years reading the primary texts and the modern scholarship side by side, and she brings that habit to every lesson.",
    specialties: [
      "Egyptian chronology",
      "Historical sources",
      "Course design",
    ],
    courseIds: [
      "course-ancient-egypt-foundations",
      "course-egyptian-dynasties-explained",
      "course-the-middle-kingdom",
    ],
    initials: "AH",
  },
  {
    id: "instr-marcus-osei",
    slug: "marcus-osei",
    name: "Marcus Osei",
    role: "Archaeology Course Author",
    biography:
      "Marcus leads the archaeology curriculum. His courses emphasise excavation methods, how sites are interpreted, and the difference between evidence and speculation. He is particularly interested in the history of archaeology itself — how our picture of the Nile Valley was built, and how it keeps being revised.",
    specialties: [
      "Field archaeology",
      "Site interpretation",
      "History of archaeology",
    ],
    courseIds: [
      "course-archaeology-nile-valley",
    ],
    initials: "MO",
  },
  {
    id: "instr-nadia-el-baz",
    slug: "nadia-el-baz",
    name: "Nadia El-Baz",
    role: "Language and Texts Course Author",
    biography:
      "Nadia teaches the language courses on Manetho, from the hieroglyphic script to the grammar of Middle Egyptian. Her approach is patient and systematic: a few signs, a few rules, and lots of practice with real inscriptions. She believes anyone can learn to read simple hieroglyphs with the right structure.",
    specialties: [
      "Middle Egyptian",
      "Hieroglyphic script",
      "Instructional design",
    ],
    courseIds: [
      "course-reading-hieroglyphs",
      "course-egyptian-art-symbolism",
    ],
    initials: "NE",
  },
  {
    id: "instr-jonah-park",
    slug: "jonah-park",
    name: "Jonah Park",
    role: "Religion and Mythology Course Author",
    biography:
      "Jonah writes the mythology and religion courses. He is careful to separate what Egyptian texts actually say from later retellings and modern fantasy. His lessons trace gods, rituals, and beliefs back to their sources — temple inscriptions, coffin texts, and papyri — and flag where interpretation remains open.",
    specialties: [
      "Egyptian religion",
      "Mythology and sources",
      "Ritual studies",
    ],
    courseIds: [
      "course-egyptian-mythology",
      "course-egyptian-religion-afterlife",
    ],
    initials: "JP",
  },
  {
    id: "instr-layla-hassan",
    slug: "layla-hassan",
    name: "Layla Hassan",
    role: "Pharaohs and Queens Course Author",
    biography:
      "Layla specialises in the rulers of Egypt — the famous, the obscure, and the deliberately forgotten. Her courses examine kingship as an institution and ask how much of a pharaoh's 'story' rests on evidence rather than legend. She teaches Hatshepsut, Akhenaten, and the Ramesside period with particular care.",
    specialties: [
      "Royal titulary",
      "Queens and kingship",
      "Amarna period",
    ],
    courseIds: [
      "course-the-pharaohs-of-egypt",
      "course-hatshepsut-female-kingship",
      "course-akhenaten-amarna-period",
      "course-ramses-ii",
    ],
    initials: "LH",
  },
  {
    id: "instr-theo-mitchell",
    slug: "theo-mitchell",
    name: "Theo Mitchell",
    role: "Old Kingdom Course Author",
    biography:
      "Theo teaches the early periods of Egyptian history. His courses cover the predynastic era, the unification of Egypt, and the pyramid age, with close attention to what archaeology can and cannot tell us. He is known for lessons that reconstruct a site layer by layer.",
    specialties: [
      "Predynastic Egypt",
      "Pyramid age",
      "Material culture",
    ],
    courseIds: [
      "course-the-old-kingdom",
      "course-tombs-and-burial-practices",
    ],
    initials: "TM",
  },
  {
    id: "instr-sarah-quinn",
    slug: "sarah-quinn",
    name: "Sarah Quinn",
    role: "Art and Architecture Course Author",
    biography:
      "Sarah teaches Egyptian art and sacred architecture. Her courses move slowly through temples, tombs, and objects, explaining the conventions of Egyptian representation and the meanings embedded in form, colour, and placement. She treats works of art as evidence, not decoration.",
    specialties: [
      "Egyptian art",
      "Temple architecture",
      "Iconography",
    ],
    courseIds: ["course-temples-of-ancient-egypt"],
    initials: "SQ",
  },
  {
    id: "instr-omar-farouk",
    slug: "omar-farouk",
    name: "Omar Farouk",
    role: "Daily Life and Society Course Author",
    biography:
      "Omar writes about the everyday world of ancient Egypt — households, work, food, family, and law. His courses draw on letters, receipts, legal texts, and village records to reconstruct ordinary lives that monumental history often overlooks.",
    specialties: [
      "Social history",
      "Everyday life",
      "Legal texts",
    ],
    courseIds: ["course-daily-life-ancient-egypt"],
    initials: "OF",
  },
  {
    id: "instr-eva-rossi",
    slug: "eva-rossi",
    name: "Eva Rossi",
    role: "Discoveries and Expedition Course Author",
    biography:
      "Eva teaches the story of how Egyptology came to be — the explorers, the excavators, the decipherment of hieroglyphs, and the great discoveries. Her courses are as much about the modern journey of understanding as about the ancient past itself.",
    specialties: [
      "History of Egyptology",
      "Decipherment",
      "Expedition narratives",
    ],
    courseIds: [
      "course-discovery-tutankhamun-tomb",
    ],
    initials: "ER",
  },
  {
    id: "instr-david-aden",
    slug: "david-aden",
    name: "David Aden",
    role: "New Kingdom Course Author",
    biography:
      "David teaches the New Kingdom — the empire age of Egyptian history. His courses follow the evidence for Egypt's expansion, its royal court, and its great building programmes, while keeping the debates about chronology and causation clearly visible.",
    specialties: [
      "New Kingdom",
      "Imperial history",
      "Royal inscriptions",
    ],
    courseIds: ["course-the-new-kingdom"],
    initials: "DA",
  },
  {
    id: "instr-maya-ibrahim",
    slug: "maya-ibrahim",
    name: "Maya Ibrahim",
    role: "Mythology Course Author",
    biography:
      "Maya teaches Egyptian mythology as a living tradition — the stories as Egyptians told them in temples and on papyri, not as modern fairy tales. She is especially attentive to the different versions of a myth and to what each source was trying to do.",
    specialties: [
      "Myth narratives",
      "Coffin texts",
      "Comparative mythology",
    ],
    courseIds: ["course-gods-of-ancient-egypt"],
    initials: "MI",
  },
  {
    id: "instr-peter-lindqvist",
    slug: "peter-lindqvist",
    name: "Peter Lindqvist",
    role: "Burial Practices Course Author",
    biography:
      "Peter teaches the archaeology of death — tombs, mummification, and the equipment of the afterlife. His courses treat burials as archaeological sites first and spectacles second, explaining what graves actually reveal about belief and society.",
    specialties: [
      "Funerary archaeology",
      "Mummification",
      "Cemetery sites",
    ],
    courseIds: ["course-valley-of-the-kings"],
    initials: "PL",
  },
];
