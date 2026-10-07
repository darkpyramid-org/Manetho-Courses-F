import type { LearningPath } from "@/types";

/**
 * Learning paths — structured curriculum collections.
 *
 * Each path is an ordered sequence of courseIds. Duration
 * and progress are derived from the courses themselves,
 * so paths stay consistent with the catalog automatically.
 */
export const learningPaths: LearningPath[] = [
  {
    id: "lp-discover-ancient-egypt",
    slug: "discover-ancient-egypt",
    title: "Discover Ancient Egypt",
    description:
      "The complete foundation: start with the land and the evidence, follow the dynastic story through the three great ages, study the religion that shaped it all, and finish with the archaeology that reveals it. This is the recommended first journey on Manetho.",
    level: "beginner",
    courseIds: [
      "course-ancient-egypt-foundations",
      "course-egyptian-dynasties-explained",
      "course-the-old-kingdom",
      "course-the-middle-kingdom",
      "course-the-new-kingdom",
      "course-egyptian-mythology",
      "course-archaeology-nile-valley",
    ],
    tags: ["foundation", "overview", "history"],
  },
  {
    id: "lp-the-pharaohs",
    slug: "the-pharaohs",
    title: "The Pharaohs",
    description:
      "From the first kings to the last queen. Learn how kingship worked, then follow the great rulers — the pyramid builders, Hatshepsut, Akhenaten, Tutankhamun, and Ramesses II — through the evidence they left behind.",
    level: "intermediate",
    courseIds: [
      "course-the-pharaohs-of-egypt",
      "course-the-old-kingdom",
      "course-hatshepsut-female-kingship",
      "course-akhenaten-amarna-period",
      "course-tutankhamun-and-his-world",
      "course-ramses-ii",
    ],
    tags: ["kingship", "rulers", "history"],
  },
  {
    id: "lp-egyptian-archaeology",
    slug: "egyptian-archaeology",
    title: "Egyptian Archaeology",
    description:
      "The evidence and how to read it. Learn the discipline — its history, its methods, and its ethics — then apply it at the great sites: the Nile Valley, Giza, Saqqara, the Valley of the Kings, and the discovery of Tutankhamun's tomb.",
    level: "intermediate",
    courseIds: [
      "course-archaeology-nile-valley",
      "course-the-old-kingdom",
      "course-valley-of-the-kings",
      "course-tombs-and-burial-practices",
      "course-temples-of-ancient-egypt",
      "course-discovery-tutankhamun-tomb",
    ],
    tags: ["archaeology", "sites", "methods"],
  },
  {
    id: "lp-religion-and-the-afterlife",
    slug: "religion-and-the-afterlife",
    title: "Religion and the Afterlife",
    description:
      "The gods and what came after. Study the mythology, meet the gods in their cities, follow the beliefs about death and judgement, then walk through the temples and the tombs where those beliefs were made stone.",
    level: "intermediate",
    courseIds: [
      "course-egyptian-mythology",
      "course-gods-of-ancient-egypt",
      "course-egyptian-religion-afterlife",
      "course-temples-of-ancient-egypt",
      "course-tombs-and-burial-practices",
    ],
    tags: ["religion", "afterlife", "temples"],
  },
  {
    id: "lp-reading-hieroglyphs",
    slug: "reading-hieroglyphs",
    title: "Reading Hieroglyphs",
    description:
      "A path for the patient. Begin with the script itself — the signs, the sounds, the determinatives — then practice on real cartouches, study the grammar of Middle Egyptian, and finish with the story of the decipherment and the sources that preserve the language.",
    level: "intermediate",
    courseIds: [
      "course-reading-hieroglyphs",
      "course-egyptian-art-symbolism",
      "course-daily-life-ancient-egypt",
    ],
    tags: ["hieroglyphs", "language", "grammar"],
  },
  {
    id: "lp-daily-life-and-society",
    slug: "daily-life-and-society",
    title: "Daily Life and Society",
    description:
      "The Egypt behind the monuments. Reconstruct the everyday world — the houses, the food, the work, the families, the disputes — from the village records and the letters that ordinary Egyptians left behind.",
    level: "beginner",
    courseIds: [
      "course-daily-life-ancient-egypt",
      "course-egyptian-art-symbolism",
      "course-discovery-tutankhamun-tomb",
    ],
    tags: ["daily life", "society", "village records"],
  },
];
