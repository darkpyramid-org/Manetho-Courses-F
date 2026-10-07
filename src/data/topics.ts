import type { Topic } from "@/types";

export const topics: Topic[] = [
  {
    id: "topic-ancient-egypt",
    slug: "ancient-egypt",
    title: "Ancient Egypt",
    description:
      "The civilization of the Nile Valley, from its earliest farming villages to the Roman period.",
    longDescription:
      "Ancient Egypt endured for roughly three thousand years along the Nile. Its written record, monumental architecture, and rich material culture make it one of the most documented — and most debated — civilizations of the ancient world. These courses build a foundation: the periods, the sources, the geography, and the questions scholars still argue about.",
    courseIds: [
      "course-ancient-egypt-foundations",
      "course-egyptian-dynasties-explained",
      "course-daily-life-ancient-egypt",
    ],
    resourceIds: [
      "resource-egyptian-dynasties-timeline",
      "resource-ancient-egypt-map",
      "resource-ancient-egypt-glossary",
      "resource-reading-list-beginners",
    ],
    instructorIds: ["instr-amelia-hart", "instr-omar-farouk"],
    image: "/topics/ancient-egypt.svg",
  },
  {
    id: "topic-pharaohs",
    slug: "pharaohs",
    title: "Pharaohs",
    description:
      "Kings and queens of Egypt — the institution of kingship and the rulers who shaped it.",
    longDescription:
      "The pharaoh was king, judge, priest, and military commander — at least in theory. In practice, some rulers wielded real power, some were figureheads, and a few were later erased from the record. These courses examine kingship as an institution and follow the evidence for individual rulers.",
    courseIds: [
      "course-the-pharaohs-of-egypt",
      "course-the-old-kingdom",
      "course-the-middle-kingdom",
      "course-the-new-kingdom",
      "course-hatshepsut-female-kingship",
      "course-akhenaten-amarna-period",
      "course-tutankhamun-and-his-world",
      "course-ramses-ii",
    ],
    resourceIds: [
      "resource-pharaohs-family-tree",
      "resource-reading-list-pharaohs",
      "resource-royal-titulary-reference",
    ],
    instructorIds: [
      "instr-layla-hassan",
      "instr-theo-mitchell",
      "instr-david-aden",
    ],
    image: "/topics/pharaohs.svg",
  },
  {
    id: "topic-archaeology",
    slug: "archaeology",
    title: "Archaeology",
    description:
      "How the evidence is recovered — excavation, interpretation, and the sites of the Nile Valley.",
    longDescription:
      "Egyptology is built on fieldwork. These courses explain how sites are excavated, how finds are dated and interpreted, and what the great sites of Egypt — Giza, Saqqara, the Valley of the Kings — actually preserve. You will learn to distinguish evidence from reconstruction.",
    courseIds: [
      "course-archaeology-nile-valley",
      "course-valley-of-the-kings",
      "course-discovery-tutankhamun-tomb",
    ],
    resourceIds: [
      "resource-archaeological-sites-guide",
      "resource-valley-of-the-kings-map",
      "resource-excavation-methods-reference",
      "resource-reading-list-archaeology",
    ],
    instructorIds: ["instr-marcus-osei", "instr-peter-lindqvist", "instr-eva-rossi"],
    image: "/topics/archaeology.svg",
  },
  {
    id: "topic-mythology",
    slug: "mythology",
    title: "Mythology",
    description:
      "The gods, the cosmos, and the stories Egyptians told — traced back to their sources.",
    longDescription:
      "Egyptian mythology survives in temple inscriptions, coffin texts, and papyri — often in multiple versions. These courses present the stories as Egyptians told them, distinguish myth from later retellings, and show how scholars interpret material that was never written down as a fixed canon.",
    courseIds: [
      "course-egyptian-mythology",
      "course-gods-of-ancient-egypt",
      "course-egyptian-religion-afterlife",
    ],
    resourceIds: [
      "resource-gods-glossary",
      "resource-myths-reading-list",
      "resource-cosmology-timeline",
    ],
    instructorIds: ["instr-jonah-park", "instr-maya-ibrahim"],
    image: "/topics/mythology.svg",
  },
  {
    id: "topic-hieroglyphs",
    slug: "hieroglyphs",
    title: "Hieroglyphs",
    description:
      "The writing system of ancient Egypt — signs, grammar, and how the script was deciphered.",
    longDescription:
      "Hieroglyphs were used for more than three millennia. The script combines logographic and alphabetic signs, and simple inscriptions can be read with a modest vocabulary. These courses teach the system step by step, using real inscriptions and the story of the decipherment as a guide.",
    courseIds: ["course-reading-hieroglyphs"],
    resourceIds: [
      "resource-hieroglyphs-reference",
      "resource-rosetta-stone-guide",
      "resource-middle-egyptian-grammar-notes",
    ],
    instructorIds: ["instr-nadia-el-baz", "instr-eva-rossi"],
    image: "/topics/hieroglyphs.svg",
  },
  {
    id: "topic-religion",
    slug: "religion",
    title: "Religion",
    description:
      "Egyptian religion in practice — temples, ritual, belief, and the afterlife.",
    longDescription:
      "Religion shaped nearly every aspect of Egyptian life, from the daily offerings in local shrines to the royal festivals. These courses examine temples, priesthoods, and the elaborate beliefs about death and renewal, always distinguishing temple propaganda from lived practice.",
    courseIds: [
      "course-gods-of-ancient-egypt",
      "course-egyptian-religion-afterlife",
      "course-temples-of-ancient-egypt",
      "course-tombs-and-burial-practices",
    ],
    resourceIds: [
      "resource-temple-architecture-guide",
      "resource-afterlife-glossary",
      "resource-book-of-the-dead-reference",
    ],
    instructorIds: ["instr-jonah-park", "instr-sarah-quinn", "instr-peter-lindqvist"],
    image: "/topics/religion.svg",
  },
  {
    id: "topic-art-architecture",
    slug: "art-architecture",
    title: "Art & Architecture",
    description:
      "Temples, tombs, and the visual language of Egyptian art.",
    longDescription:
      "Egyptian art follows conventions that lasted for millennia — and understanding those conventions unlocks the meaning of the images. These courses teach you to read the art: the canon of proportions, the hierarchy of scale, and the architecture that housed it.",
    courseIds: [
      "course-egyptian-art-symbolism",
      "course-temples-of-ancient-egypt",
    ],
    resourceIds: [
      "resource-temple-architecture-guide",
      "resource-art-conventions-reference",
      "resource-reading-list-art",
    ],
    instructorIds: ["instr-sarah-quinn", "instr-nadia-el-baz"],
    image: "/topics/art-architecture.svg",
  },
  {
    id: "topic-daily-life",
    slug: "daily-life",
    title: "Daily Life",
    description:
      "The everyday world of ancient Egypt — households, work, food, family, and law.",
    longDescription:
      "Monumental history records kings and gods; the village records record everyone else. Letters, receipts, and legal texts preserve the texture of ordinary life — what people ate, argued about, owed, and hoped for. These courses reconstruct that world with care.",
    courseIds: ["course-daily-life-ancient-egypt", "course-tombs-and-burial-practices"],
    resourceIds: [
      "resource-daily-life-glossary",
      "resource-reading-list-daily-life",
      "resource-deh-el-medina-guide",
    ],
    instructorIds: ["instr-omar-farouk", "instr-peter-lindqvist"],
    image: "/topics/daily-life.svg",
  },
  {
    id: "topic-egyptian-language",
    slug: "egyptian-language",
    title: "Egyptian Language",
    description:
      "The languages of Egypt — hieroglyphic, hieratic, demotic, and Coptic.",
    longDescription:
      "Ancient Egyptian is not one language but a family of stages spanning three thousand years, ending in Coptic, which is still used in the liturgy of the Coptic Church. These courses map the stages and introduce the grammar of Middle Egyptian, the classical form of the language.",
    courseIds: ["course-reading-hieroglyphs"],
    resourceIds: [
      "resource-middle-egyptian-grammar-notes",
      "resource-egyptian-language-timeline",
      "resource-hieroglyphs-reference",
    ],
    instructorIds: ["instr-nadia-el-baz"],
    image: "/topics/egyptian-language.svg",
  },
  {
    id: "topic-discoveries",
    slug: "discoveries",
    title: "Discoveries",
    description:
      "The great finds and the people who made them — from the Rosetta Stone to Tutankhamun.",
    longDescription:
      "Modern understanding of Egypt rests on a series of discoveries, each of which changed the field. These courses tell those stories honestly — including the tangled history of excavation, export, and the slow shift toward proper archaeological method.",
    courseIds: [
      "course-discovery-tutankhamun-tomb",
      "course-tutankhamun-and-his-world",
    ],
    resourceIds: [
      "resource-rosetta-stone-guide",
      "resource-tutankhamun-tomb-guide",
      "resource-reading-list-discoveries",
    ],
    instructorIds: ["instr-eva-rossi", "instr-marcus-osei"],
    image: "/topics/discoveries.svg",
  },
  {
    id: "topic-pyramids",
    slug: "pyramids",
    title: "Pyramids",
    description:
      "The pyramid age — construction, purpose, and the debate over how they were built.",
    longDescription:
      "The pyramids are the most famous monuments of the ancient world, and among the most misunderstood. These courses examine the evidence for how they were built, what they meant, and why later Egyptians themselves looked back at them with wonder.",
    courseIds: ["course-the-old-kingdom", "course-ancient-egypt-foundations"],
    resourceIds: [
      "resource-pyramids-of-giza-guide",
      "resource-ancient-egypt-map",
      "resource-reading-list-beginners",
    ],
    instructorIds: ["instr-theo-mitchell", "instr-amelia-hart"],
    image: "/topics/pyramids.svg",
  },
  {
    id: "topic-afterlife",
    slug: "afterlife",
    title: "The Afterlife",
    description:
      "Egyptian beliefs about death, judgement, and the journey beyond.",
    longDescription:
      "No ancient culture invested more in the afterlife than Egypt. These courses follow the evidence — coffins, funerary texts, grave goods, and tomb scenes — and examine how beliefs about death changed across three thousand years.",
    courseIds: [
      "course-egyptian-religion-afterlife",
      "course-tombs-and-burial-practices",
    ],
    resourceIds: [
      "resource-book-of-the-dead-reference",
      "resource-afterlife-glossary",
      "resource-cosmology-timeline",
    ],
    instructorIds: ["instr-jonah-park", "instr-peter-lindqvist"],
    image: "/topics/afterlife.svg",
  },
];
