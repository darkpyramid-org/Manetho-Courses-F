import type { Resource } from "@/types";

/*
 * Educational resource library.
 * Content is written for teaching; uncertain points are flagged
 * rather than presented as settled fact.
 */

export const resources: Resource[] = [
  {
    id: "resource-egyptian-dynasties-timeline",
    slug: "egyptian-dynasties-timeline",
    title: "Egyptian Dynasties Timeline",
    description:
      "A chronological overview of the dynastic period, from the Early Dynastic Period to the end of native rule.",
    type: "timeline",
    relatedCourseIds: [
      "course-ancient-egypt-foundations",
      "course-egyptian-dynasties-explained",
    ],
    updatedAt: "2025-01-15",
    events: [
      {
        date: "c. 3100–2686 BCE",
        title: "Early Dynastic Period (Dynasties 1–2)",
        description:
          "Later Egyptian tradition credits Narmer (sometimes identified with Menes) with uniting Upper and Lower Egypt. The exact process of unification is debated; archaeological evidence suggests a longer, more complex development than the later king lists imply.",
      },
      {
        date: "c. 2686–2181 BCE",
        title: "Old Kingdom (Dynasties 3–6)",
        description:
          "The pyramid age. The Great Pyramid of Giza is generally dated to the reign of Khufu (Dynasty 4), though absolute dates for this period vary by several decades between scholarly conventions.",
      },
      {
        date: "c. 2181–2055 BCE",
        title: "First Intermediate Period",
        description:
          "A period of political fragmentation following the collapse of the Old Kingdom. The causes remain debated; drought and regional power shifts are both cited.",
      },
      {
        date: "c. 2055–1650 BCE",
        title: "Middle Kingdom (Dynasties 11–13)",
        description:
          "Reunification under Theban rulers. The classical form of the Egyptian language, Middle Egyptian, was used for literature and monumental inscriptions.",
      },
      {
        date: "c. 1650–1550 BCE",
        title: "Second Intermediate Period",
        description:
          "Division between Theban kings and the Hyksos rulers of the Delta. Manetho's account, preserved centuries later, frames this as an invasion; the evidence is more complex.",
      },
      {
        date: "c. 1550–1069 BCE",
        title: "New Kingdom (Dynasties 18–20)",
        description:
          "The empire age: Hatshepsut, Akhenaten, Tutankhamun, and the Ramesside kings. The Amarna period's religious revolution under Akhenaten is one of the most debated episodes in Egyptian history.",
      },
      {
        date: "c. 1069–664 BCE",
        title: "Third Intermediate Period",
        description:
          "Political division between competing dynasties, including Libyan and Nubian rulers. The chronological framework for this period is particularly uncertain.",
      },
      {
        date: "c. 664–332 BCE",
        title: "Late Period",
        description:
          "Native rule re-established, interrupted by Persian conquest. Later Egyptian tradition looked back on this era as a revival of older customs.",
      },
      {
        date: "332–30 BCE",
        title: "Ptolemaic Period",
        description:
          "Greek-speaking Ptolemaic dynasty following Alexander's conquest. Cleopatra VII was the last Ptolemaic ruler.",
      },
      {
        date: "30 BCE onward",
        title: "Roman Period",
        description:
          "Egypt became a Roman province after the defeat of Antony and Cleopatra. Egyptian religious practices persisted for centuries under Roman rule.",
      },
    ],
  },
  {
    id: "resource-ancient-egypt-map",
    slug: "ancient-egypt-map",
    title: "Map of Ancient Egypt",
    description:
      "The Nile Valley from the Delta to the First Cataract, with the major sites referenced throughout Manetho's courses.",
    type: "map",
    relatedCourseIds: [
      "course-ancient-egypt-foundations",
      "course-archaeology-nile-valley",
    ],
    updatedAt: "2025-01-15",
    content:
      "Ancient Egypt was defined by the Nile. The river runs north through the desert, and Egyptian civilization developed along its narrow floodplain.\n\nUpper Egypt is the southern, upstream stretch; Lower Egypt is the northern Delta. This orientation is confusing at first: 'upper' means upriver, toward the south.\n\nKey regions:\n\n— The Delta (Lower Egypt): marshy, fertile, home to major Delta cities such as Buto and later Alexandria.\n— Memphis: the ancient capital near the apex of the Delta, associated with early dynastic kings.\n— The Fayum: a large oasis depression, important in the Middle Kingdom.\n— Thebes (modern Luxor): capital of the New Kingdom, home to Karnak and the Valley of the Kings.\n— The First Cataract (Aswan): the natural southern boundary of pharaonic Egypt, beyond which lay Nubia.\n\nScholars often divide the Valley into named regions by nome (administrative district), but the boundaries shifted over three millennia.",
  },
  {
    id: "resource-ancient-egypt-glossary",
    slug: "ancient-egypt-glossary",
    title: "Ancient Egypt Glossary",
    description:
      "Core terms used across Manetho courses, with careful definitions.",
    type: "glossary",
    relatedCourseIds: ["course-ancient-egypt-foundations"],
    updatedAt: "2025-01-15",
    entries: [
      {
        term: "Cartouche",
        definition:
          "An oval enclosure surrounding a royal name in hieroglyphs. The term is modern; Egyptians called it something like 'the ring of the king'.",
      },
      {
        term: "Cataract",
        definition:
          "A section of the Nile with rapids or shallow water. The First Cataract at Aswan marked the traditional southern border of pharaonic Egypt.",
      },
      {
        term: "Dynasty",
        definition:
          "A sequence of kings from the same family or line, as divided by the priest Manetho in the third century BCE. Some of his dynasties do not correspond to family relationships as modern historians would define them.",
      },
      {
        term: "Kemet",
        definition:
          "The Egyptians' name for their country, often translated 'the Black Land', referring to the dark silt of the floodplain.",
      },
      {
        term: "Nome",
        definition:
          "An administrative district of ancient Egypt. The number and boundaries of nomes changed over time.",
      },
      {
        term: "Pharaoh",
        definition:
          "A term for the king, originally meaning 'great house' (the palace). It became a form of address for the ruler in later periods; whether earlier kings would have used it is debated.",
      },
      {
        term: "Predynastic",
        definition:
          "The period before the first dynasty, roughly 4000–3100 BCE, known mainly from archaeology rather than written records.",
      },
      {
        term: "Serekh",
        definition:
          "A rectangular frame representing a palace façade, used in early periods to enclose the king's name.",
      },
      {
        term: "Titulary",
        definition:
          "The set of names and titles a king adopted on accession, including the throne name (written in a cartouche).",
      },
    ],
  },
  {
    id: "resource-reading-list-beginners",
    slug: "reading-list-beginners",
    title: "Reading List: First Steps in Egyptology",
    description:
      "Approachable starting points for readers new to the field.",
    type: "reading-list",
    relatedCourseIds: ["course-ancient-egypt-foundations"],
    updatedAt: "2025-01-15",
    content:
      "A note before you begin: translations of Egyptian texts vary, and older books present uncertain ideas as settled. When a book seems very confident about events three thousand years ago, check when it was written.\n\nSuggested starting points:\n\n— General histories of Egypt by university presses, which tend to flag uncertainty.\n— Museum catalogues from major collections, which describe objects and their provenance carefully.\n— Translations of primary texts (the tales, the hymns, the legal texts), so you can encounter the voices directly.\n\nLook for books that cite their sources and distinguish between evidence and reconstruction. Avoid anything that presents ancient Egypt as a single mysterious 'civilization' without period distinctions — the Old Kingdom and the New Kingdom were separated by more time than separates us from the Roman Empire.",
  },
  {
    id: "resource-pharaohs-family-tree",
    slug: "pharaohs-family-tree",
    title: "Royal Family Relationships",
    description:
      "How the major New Kingdom rulers relate to one another — and where the evidence is ambiguous.",
    type: "chart",
    relatedCourseIds: ["course-the-pharaohs-of-egypt", "course-tutankhamun-and-his-world"],
    updatedAt: "2025-01-15",
    content:
      "Reconstructing New Kingdom royal families is partly an exercise in uncertainty. Inscriptions name family members, but the exact relationships — especially for minor wives and children — are often inferred rather than stated.\n\nThe widely accepted outline:\n\n— Amenhotep III and Queen Tiye were the parents of Akhenaten.\n— Akhenaten's chief queen was Nefertiti. The parentage of Tutankhamun is debated: he is generally thought to be a son of Akhenaten, but by which wife is uncertain. A recently identified mummy (KV35YL) is often proposed as his mother.\n— Tutankhamun died without a surviving heir; his successors (Ay, then Horemheb) came from the court.\n— The Nineteenth Dynasty was founded by Ramesses I; his grandson was Ramesses II, whose long reign (modern estimates place it at roughly 66 years) produced many children, including the future Merneptah.\n\nTreat any confident 'family tree' of this period with caution: the evidence is fragmentary, and new finds regularly revise it.",
  },
  {
    id: "resource-reading-list-pharaohs",
    slug: "reading-list-pharaohs",
    title: "Reading List: Kings and Queens",
    description:
      "Books and sources for studying Egyptian kingship.",
    type: "reading-list",
    relatedCourseIds: [
      "course-the-pharaohs-of-egypt",
      "course-hatshepsut-female-kingship",
    ],
    updatedAt: "2025-01-15",
    content:
      "Primary sources: the Palermo Stone (an early royal annal), king lists from temples (the Abydos list, the Turin canon, the Karnak list), and the biographies of officials.\n\nModern works: look for studies of royal titulary, of the iconography of kingship, and of specific reigns that weigh the evidence (for example, studies of Hatshepsut that distinguish between what her monuments claim and what can be independently verified).\n\nA caution: Manetho's history (third century BCE) is the source for the traditional king list, but it was written three thousand years after some of the events it describes, and it survives only in quotation by later writers. It is evidence about how later Egyptians understood their past, not a modern-style chronicle.",
  },
  {
    id: "resource-royal-titulary-reference",
    slug: "royal-titulary-reference",
    title: "Royal Titulary Reference",
    description:
      "The five names of an Egyptian king, explained.",
    type: "reference",
    relatedCourseIds: ["course-the-pharaohs-of-egypt"],
    updatedAt: "2025-01-15",
    content:
      "From the Middle Kingdom onward, a king's full titulary consisted of five names. The most commonly encountered are:\n\n1. Horus name — the oldest element, identifying the king with the falcon god Horus; written in a serekh.\n2. Nebty name ('Two Ladies') — associating the king with the goddesses of Upper and Lower Egypt.\n3. Golden Horus name — function debated; possibly linked to the god's victory or eternity.\n4. Throne name (prenomen) — written in a cartouche, introduced by 'King of Upper and Lower Egypt'.\n5. Birth name (nomen) — the personal name given at birth, also in a cartouche, introduced by 'Son of Ra'.\n\nThe throne name is the one most often quoted in modern books (e.g., 'Ramesses' is a birth name; his throne name was User-maat-re). When reading a cartouche, check which name you are looking at before searching for it.",
  },
  {
    id: "resource-archaeological-sites-guide",
    slug: "archaeological-sites-guide",
    title: "Archaeological Sites Guide",
    description:
      "The major sites of the Nile Valley, with what each preserves.",
    type: "guide",
    relatedCourseIds: ["course-archaeology-nile-valley"],
    updatedAt: "2025-01-15",
    content:
      "— Giza (Old Kingdom): the Great Pyramid (Khufu), the pyramid of Khafre, the pyramid of Menkaure, the Sphinx, and workers' villages.\n— Saqqara: the Step Pyramid of Djoser and a large cemetery used for more than three thousand years.\n— Dahshur: the Bent Pyramid and Red Pyramid of Sneferu.\n— Thebes/Luxor: Karnak and Luxor temples, the Valley of the Kings, the Valley of the Queens, Deir el-Medina, and the Ramesseum.\n— Abydos: the earliest dynastic royal cemetery and the temple of Seti I with its king list.\n— Tell el-Amarna: Akhenaten's short-lived capital.\n— Deir el-Bahari: mortuary temples including Hatshepsut's.\n— Nubia (southern Egypt and Sudan): sites such as Abu Simbel, relocated in the 1960s during the Aswan High Dam rescue campaign.\n\nEach site preserves a different slice of life: cemeteries preserve burial practices; towns preserve everyday objects; temples preserve royal ideology. Ask which kind of evidence you are reading.",
  },
  {
    id: "resource-valley-of-the-kings-map",
    slug: "valley-of-the-kings-map",
    title: "Valley of the Kings Map",
    description:
      "Layout of the royal valley, the major tombs, and how the site was explored.",
    type: "map",
    relatedCourseIds: ["course-valley-of-the-kings"],
    updatedAt: "2025-01-15",
    content:
      "The Valley of the Kings (known in ancient times as 'The Great and Majestic Necropolis of the Millions of Years of the Pharaoh') contains tombs of New Kingdom rulers and nobles.\n\nNotable tombs:\n\n— KV5: the sons of Ramesses II, the largest tomb in the valley (at least 120 chambers).\n— KV17: Seti I, one of the longest and most elaborately decorated.\n— KV62: Tutankhamun, found nearly intact by Howard Carter in 1922.\n— KV55: a mysterious cache, possibly linked to the Amarna royal family.\n— KV57: Horemheb.\n\nThe valley is a natural wadi (dry valley) cut into limestone. Tombs were cut into the bedrock and decorated with funerary texts. Nearly all were robbed in antiquity; Tutankhamun's tomb survived only because rubble from a later tomb cut concealed its entrance.",
  },
  {
    id: "resource-excavation-methods-reference",
    slug: "excavation-methods-reference",
    title: "Excavation Methods Reference",
    description:
      "How modern Egyptology records and interprets a site.",
    type: "reference",
    relatedCourseIds: ["course-archaeology-nile-valley"],
    updatedAt: "2025-01-15",
    content:
      "Modern excavation is methodical, not treasure hunting:\n\n1. Survey: mapping and surface collection before any digging.\n2. Stratigraphy: reading the layers (seals) of the site; deeper is generally older, but natural processes can disturb layers.\n3. Context: every find is recorded by position, because an object's meaning depends on where it sat.\n4. Recording: plans, photographs, and written logs. In the past, many expeditions recorded poorly — one reason some famous finds are so hard to interpret today.\n5. Dating: from stratigraphy, pottery typology, inscriptions, and scientific methods such as radiocarbon dating (which has its own margins of error).\n\nThe history of excavation at Egyptian sites includes a long period of 'treasure hunting' (until the late 19th and early 20th centuries) when finds were divided and context was often lost. Modern archaeology tries to repair that legacy.",
  },
  {
    id: "resource-reading-list-archaeology",
    slug: "reading-list-archaeology",
    title: "Reading List: Archaeology",
    description:
      "Books on methods and the history of archaeology in Egypt.",
    type: "reading-list",
    relatedCourseIds: ["course-archaeology-nile-valley"],
    updatedAt: "2025-01-15",
    content:
      "Start with accounts of famous excavations that discuss method: the publications of major expeditions, and modern reviews of the field's history.\n\nPay particular attention to the history of the field — who excavated, who funded, and who received the finds. The division of finds between excavators and the Egyptian state (the 'partage' system) shaped museum collections worldwide and is part of the history you are learning.",
  },
  {
    id: "resource-gods-glossary",
    slug: "resource-gods-glossary",
    title: "Gods and Goddesses Glossary",
    description:
      "The major deities of ancient Egypt, as attested in the sources.",
    type: "glossary",
    relatedCourseIds: ["course-gods-of-ancient-egypt"],
    updatedAt: "2025-01-15",
    entries: [
      {
        term: "Amun",
        definition:
          "A creator god whose prominence rose greatly in the New Kingdom; at Thebes he was fused with the sun god as Amun-Ra.",
      },
      {
        term: "Anubis",
        definition:
          "Jackal-headed god associated with mummification and the protection of the dead.",
      },
      {
        term: "Hathor",
        definition:
          "Goddess of love, music, and motherhood, often depicted as a cow or a woman with cow horns.",
      },
      {
        term: "Horus",
        definition:
          "Falcon god; the king was identified with Horus in life. In myth, Horus avenged his father Osiris against Set.",
      },
      {
        term: "Isis",
        definition:
          "Goddess of magic and motherhood, wife of Osiris; her cult later spread across the Roman world.",
      },
      {
        term: "Osiris",
        definition:
          "God of the dead and of resurrection; central to beliefs about the afterlife and judgement.",
      },
      {
        term: "Ra",
        definition:
          "The sun god, creator of the world in many accounts; the king was 'son of Ra'.",
      },
      {
        term: "Set",
        definition:
          "God of disorder, storms, and the desert; in myth the murderer of Osiris, but also a necessary counterpart to order.",
      },
      {
        term: "Thoth",
        definition:
          "Ibis-headed god of writing, wisdom, and reckoning; credited with inventing the script.",
      },
    ],
  },
  {
    id: "resource-myths-reading-list",
    slug: "resource-myths-reading-list",
    title: "Reading List: Myths and Sources",
    description:
      "Where to read the myths as the Egyptians told them.",
    type: "reading-list",
    relatedCourseIds: ["course-egyptian-mythology"],
    updatedAt: "2025-01-15",
    content:
      "Egyptian myths survive in many forms: temple inscriptions, coffin texts, papyri, and later Greek accounts (which often reinterpret what they describe). Key texts to look for:\n\n— The Coffin Texts (Middle Kingdom), which spell out the afterlife journey.\n— The Book of the Dead (New Kingdom), a collection of funerary spells.\n— The Contendings of Horus and Seth, a narrative papyrus.\n— The Story of Sinuhe, a literary tale often called the masterpiece of Egyptian literature.\n\nModern note: there was no single 'book' of Egyptian mythology. Different cities had different theologies, and a god could have several roles at once.",
  },
  {
    id: "resource-cosmology-timeline",
    slug: "resource-cosmology-timeline",
    title: "Cosmology and Creation Accounts",
    description:
      "How different Egyptian cities described the creation of the world.",
    type: "timeline",
    relatedCourseIds: ["course-egyptian-mythology"],
    updatedAt: "2025-01-15",
    events: [
      {
        date: "Old Kingdom",
        title: "Heliopolitan theology",
        description:
          "The priests of Heliopolis told of Atum, who arose from the primordial waters (Nun) and created the gods through self-generation. The Ennead — nine gods — formed the core of this account.",
      },
      {
        date: "Old Kingdom",
        title: "Memphite theology",
        description:
          "The Memphites credited Ptah with creation through thought and speech. The Shabaka Stone preserves a later copy of this text; scholars debate how old its ideas really are.",
      },
      {
        date: "Old Kingdom",
        title: "Hermopolitan theology",
        description:
          "The Hermopolitans described the Ogdoad — four pairs of gods representing the waters, darkness, and infinity — from which the primeval mound arose.",
      },
      {
        date: "New Kingdom",
        title: "Theban theology",
        description:
          "Thebes elevated Amun to a creator god whose hidden nature made all other gods manifestations of him. The Great Hymn to Amun expresses this view.",
      },
      {
        date: "All periods",
        title: "The solar cycle",
        description:
          "Most theologies shared the image of the sun's daily journey: birth at dawn, passage across the sky, and travel through the underworld at night. The king's role was to maintain the order (maat) that made this cycle possible.",
      },
    ],
  },
  {
    id: "resource-hieroglyphs-reference",
    slug: "resource-hieroglyphs-reference",
    title: "Hieroglyphs Quick Reference",
    description:
      "A starter set of common signs with their meanings.",
    type: "reference",
    relatedCourseIds: ["course-reading-hieroglyphs"],
    updatedAt: "2025-01-15",
    content:
      "The script is not purely alphabetic: it mixes logograms (signs representing whole words), phonograms (signs representing sounds), and determinatives (signs that clarify meaning without being pronounced).\n\nCommon signs to start with:\n\n— A single vertical stroke ( Gardiner sign Y1 in modern catalogues ) often means 'one' or acts as a determiner.\n— The reed leaf (I10) represents the vowel sound 'i'.\n— The quail chick (G43) represents the sound 'w'.\n— The owl (G17) represents the sound 'm'.\n— The reed and the bee (the king's names: the sedge and the bee) stand for 'Upper Egypt' and 'Lower Egypt'.\n\nSign numbers refer to Alan Gardiner's catalogue (Egyptian Grammar, 1927), still the standard reference for learning the script.\n\nCaution: vowels were not written, so modern pronunciations of ancient Egyptian are scholarly reconstructions, not certainties.",
  },
  {
    id: "resource-rosetta-stone-guide",
    slug: "resource-rosetta-stone-guide",
    title: "The Rosetta Stone Guide",
    description:
      "The decree, the scripts, and how the script was deciphered.",
    type: "guide",
    relatedCourseIds: ["course-reading-hieroglyphs"],
    updatedAt: "2025-01-15",
    content:
      "The Rosetta Stone (196 BCE) is a decree issued by priests at Memphis honouring the young Ptolemy V. It is written in three scripts: hieroglyphic (for the formal text), Demotic (the everyday script), and Greek (the language of the administration).\n\nDecipherment: for centuries, scholars assumed hieroglyphs were purely symbolic. In the early 1800s, Thomas Young showed that some signs had phonetic value, and Jean-François Champollion — building on his knowledge of Coptic — demonstrated in the 1820s that the script combined phonetic and ideographic elements. His key insight was that cartouches contained royal names, and that those names could be read phonetically.\n\nThe stone has been in the British Museum since 1802, after being taken from the fortress of Rashid (Rosetta) by British forces under the terms of the Treaty of Alexandria. Its presence there is part of the contested history of Egyptian antiquities.",
  },
  {
    id: "resource-middle-egyptian-grammar-notes",
    slug: "resource-middle-egyptian-grammar-notes",
    title: "Middle Egyptian Grammar Notes",
    description:
      "The grammar skeleton used in Manetho's hieroglyphs course.",
    type: "reference",
    relatedCourseIds: ["course-reading-hieroglyphs"],
    updatedAt: "2025-01-15",
    content:
      "Middle Egyptian (the classical stage of the language) in brief:\n\n— Word order: verb–subject–object is standard in verbal sentences.\n— The 'pseudo-participle' and 'participle' constructions let writers express tense and aspect without a fixed verb conjugation.\n— Nouns have gender (masculine/feminine) and number (singular/plural/dual); the feminine is usually marked with a 't'.\n— Pronouns are suffixed to nouns and prepositions ('house-i' = 'my house').\n— Adjectives follow the noun they modify.\n\nThese notes are a skeleton. Real grammar includes many special cases, and transliteration conventions differ between scholars (the so-called 'Berlin' and 'Oxford' systems).",
  },
  {
    id: "resource-egyptian-language-timeline",
    slug: "resource-egyptian-language-timeline",
    title: "The Egyptian Language Timeline",
    description:
      "The stages of the Egyptian language from hieroglyphs to Coptic.",
    type: "timeline",
    relatedCourseIds: ["course-reading-hieroglyphs"],
    updatedAt: "2025-01-15",
    events: [
      {
        date: "c. 3200–2000 BCE",
        title: "Old Egyptian",
        description:
          "The earliest written stage, used for Old Kingdom inscriptions and the Pyramid Texts.",
      },
      {
        date: "c. 2000–1350 BCE",
        title: "Middle Egyptian",
        description:
          "The classical stage, used for literature, hymns, and monumental inscriptions. It remained a prestigious written language long after it ceased to be spoken.",
      },
      {
        date: "c. 1350–700 BCE",
        title: "Late Egyptian",
        description:
          "Used in the New Kingdom for administration, letters, and literature; closer to the spoken language of the time.",
      },
      {
        date: "c. 700 BCE–5th c. CE",
        title: "Demotic",
        description:
          "A highly cursive script used for business, legal, and literary texts during the Late and Ptolemaic periods.",
      },
      {
        date: "1st c. CE–17th c. CE",
        title: "Coptic",
        description:
          "The final stage, written in a script derived from Greek letters plus a few demotic signs. Coptic is still the liturgical language of the Coptic Orthodox Church, and it was the key that allowed Champollion to make sense of the earlier scripts.",
      },
    ],
  },
  {
    id: "resource-temple-architecture-guide",
    slug: "resource-temple-architecture-guide",
    title: "Temple Architecture Guide",
    description:
      "The anatomy of an Egyptian temple, from pylon to sanctuary.",
    type: "guide",
    relatedCourseIds: ["course-temples-of-ancient-egypt"],
    updatedAt: "2025-01-15",
    content:
      "Most major temples were built along a single axis, and the architecture moves from open to restricted space:\n\n1. Pylon: the massive gateway with sloping walls, decorated with scenes of the king smiting enemies.\n2. Open court: accessible to the people during festivals.\n3. Hypostyle hall: a hall of columns (the Great Hypostyle Hall at Karnak has 134 columns), where only priests and the king could enter.\n4. Inner rooms: increasingly restricted, with the sanctuary (naos) at the far end, housing the statue of the god.\n\nAlong the axis, the floor often rises and the ceiling lowers, symbolising the emergence of creation. The walls were covered in painted relief; what survives is the base layer of the original polychromy (most paint has faded).",
  },
  {
    id: "resource-art-conventions-reference",
    slug: "resource-art-conventions-reference",
    title: "Art Conventions Reference",
    description:
      "The rules of Egyptian representation, and where artists broke them.",
    type: "reference",
    relatedCourseIds: ["course-egyptian-art-symbolism"],
    updatedAt: "2025-01-15",
    content:
      "Egyptian art follows a canon that lasted nearly three thousand years:\n\n— Composite view: the head and legs are shown in profile, while the eye and torso face the viewer. This is not a mistake; it is the convention for showing the body as clearly as possible.\n— Hierarchy of scale: the larger the figure, the more important the person. Kings are shown larger than servants.\n— Registration: scenes are arranged in horizontal bands (registers).\n\nNotable exceptions: the Amarna period under Akhenaten used a relaxed, naturalistic style, with royal figures shown in intimate family scenes. Whether this represents a 'revolution' or a workshop fashion is debated.\n\nColour was symbolic: green for rebirth and vegetation, red for chaos and the desert, blue for the sky and the Nile, gold for the flesh of the gods.",
  },
  {
    id: "resource-reading-list-art",
    slug: "resource-reading-list-art",
    title: "Reading List: Art",
    description:
      "Books on Egyptian art and its conventions.",
    type: "reading-list",
    relatedCourseIds: ["course-egyptian-art-symbolism"],
    updatedAt: "2025-01-15",
    content:
      "Look for works that explain the grammar of Egyptian art — composite view, scale, colour — and that discuss objects in their archaeological context, not as isolated 'masterpieces'. Museum catalogues from the Metropolitan Museum of Art, the British Museum, and the Egyptian Museum in Cairo are strong starting points.",
  },
  {
    id: "resource-daily-life-glossary",
    slug: "resource-daily-life-glossary",
    title: "Daily Life Glossary",
    description:
      "Terms for the everyday world of ancient Egypt.",
    type: "glossary",
    relatedCourseIds: ["course-daily-life-ancient-egypt"],
    updatedAt: "2025-01-15",
    entries: [
      {
        term: "Deben",
        definition:
          "A unit of weight used for trade and accounting; the value of a deben changed over time.",
      },
      {
        term: "Deir el-Medina",
        definition:
          "The village of the artisans who built the royal tombs in the Valley of the Kings. Its excavated records (letters, receipts, strike reports) are the richest source for ordinary Egyptian life.",
      },
      {
        term: "Scribe",
        definition:
          "A trained writer and administrator; literacy was concentrated in the scribal class, and many texts were written by and for scribes.",
      },
      {
        term: "Senet",
        definition:
          "A board game played for centuries; its rules are reconstructed but not fully certain, and it had associations with the afterlife.",
      },
      {
        term: "Shaduf",
        definition:
          "A lever device used to raise water for irrigation, depicted from the New Kingdom onward.",
      },
      {
        term: "Wabet",
        definition:
          "The 'pure' or clean place in a temple where priests performed purification rituals before entering the sanctuary.",
      },
      {
        term: "Ushabti",
        definition:
          "A small funerary figure placed in tombs to perform work for the deceased in the afterlife; many tombs contained hundreds.",
      },
    ],
  },
  {
    id: "resource-reading-list-daily-life",
    slug: "resource-reading-list-daily-life",
    title: "Reading List: Daily Life",
    description:
      "Sources for reconstructing everyday life.",
    type: "reading-list",
    relatedCourseIds: ["course-daily-life-ancient-egypt"],
    updatedAt: "2025-01-15",
    content:
      "The best sources are the least glamorous: ostraca (pottery and stone flakes used as writing surfaces), papyri, and village records. Translations of the Deir el-Medina texts, the Heqanakht papers (a Middle Kingdom household archive), and the Turin strike papyrus bring ordinary Egyptians into view.",
  },
  {
    id: "resource-deh-el-medina-guide",
    slug: "resource-deh-el-medina-guide",
    title: "Deir el-Medina Guide",
    description:
      "The village of the tomb-builders and the lives it reveals.",
    type: "guide",
    relatedCourseIds: ["course-daily-life-ancient-egypt", "course-valley-of-the-kings"],
    updatedAt: "2025-01-15",
    content:
      "Deir el-Medina housed the artisans and labourers who cut and decorated the royal tombs. Because the village was occupied for roughly four centuries and its rubbish dumps were excavated, we know more about its inhabitants than any other ancient Egyptian community.\n\nFrom its records we learn: the workers organised a strike (one of the earliest recorded) when rations were late; they took days off for religious reasons; they had doctors and lawyers; and they read and copied literature, including the Tale of Sinuhe.\n\nThe village was abandoned around 1070 BCE when the royal necropolis moved.",
  },
  {
    id: "resource-afterlife-glossary",
    slug: "resource-afterlife-glossary",
    title: "Afterlife Glossary",
    description:
      "Terms for Egyptian beliefs about death and beyond.",
    type: "glossary",
    relatedCourseIds: ["course-egyptian-religion-afterlife"],
    updatedAt: "2025-01-15",
    entries: [
      {
        term: "Ka",
        definition:
          "The life force or 'double' of a person; offerings sustained it after death.",
      },
      {
        term: "Ba",
        definition:
          "The mobile personality, depicted as a human-headed bird that could leave the tomb.",
      },
      {
        term: "Akh",
        definition:
          "The effective spirit of a well-provided dead person; the goal of funerary ritual.",
      },
      {
        term: "Judgement of Osiris",
        definition:
          "The weighing of the heart against the feather of Maat; if the heart balanced, the deceased joined the gods. Failure meant a second, permanent death.",
      },
      {
        term: "Maat",
        definition:
          "The concept of order, truth, and justice that the king was obliged to maintain; depicted as a woman with a feather.",
      },
      {
        term: "Opening of the Mouth",
        definition:
          "A funerary ritual that restored the senses of the mummy, enabling it to eat, drink, speak, and breathe in the afterlife.",
      },
    ],
  },
  {
    id: "resource-book-of-the-dead-reference",
    slug: "resource-book-of-the-dead-reference",
    title: "Book of the Dead Reference",
    description:
      "What the Book of the Dead is — and is not.",
    type: "reference",
    relatedCourseIds: ["course-egyptian-religion-afterlife"],
    updatedAt: "2025-01-15",
    content:
      "The 'Book of the Dead' is a modern name (from the German 'Totenbuch'). Egyptians called it 'the book of going forth by day'. It is not one book but a collection of spells, varying from tomb to tomb, written on papyri and placed with the deceased.\n\nThe spells include: the negative confession (declaring innocence before the gods), the weighing of the heart, and transformation spells allowing the deceased to take different forms.\n\nIt evolved from earlier funerary texts: the Pyramid Texts (Old Kingdom, carved in pyramids) and the Coffin Texts (Middle Kingdom, painted on coffins). Later, the Book of the Dead was in turn adapted into the Books of the Netherworld, carved on royal tomb walls.",
  },
  {
    id: "resource-pyramids-of-giza-guide",
    slug: "resource-pyramids-of-giza-guide",
    title: "Pyramids of Giza Guide",
    description:
      "The Giza plateau: the three pyramids, the Sphinx, and the evidence for construction.",
    type: "guide",
    relatedCourseIds: ["course-the-old-kingdom", "course-ancient-egypt-foundations"],
    updatedAt: "2025-01-15",
    content:
      "The three pyramids of Giza were built during the Fourth Dynasty (Old Kingdom), generally dated to c. 2580–2510 BCE.\n\n— The Great Pyramid (Khufu): originally about 146.6 metres tall; about 2.3 million blocks of limestone and granite.\n— The pyramid of Khafre: slightly smaller but appears taller because it sits on higher bedrock; the Great Sphinx is associated with Khafre, though the attribution is debated.\n— The pyramid of Menkaure: much smaller; its mortuary temple was finished with mudbrick in later periods.\n\nHow were they built? The evidence — quarry marks, ramps, worker villages (the 'Lost City of the Pyramids' excavated at Giza), and tool finds — supports organized labour by skilled workers, not slaves. The exact ramp system is still debated (straight, spiral, or internal).\n\nThe alignment of the pyramids to the cardinal points is accurate to a fraction of a degree; the method is likely astronomical, but the details are uncertain.",
  },
  {
    id: "resource-tutankhamun-tomb-guide",
    slug: "resource-tutankhamun-tomb-guide",
    title: "Tutankhamun's Tomb Guide",
    description:
      "KV62: the discovery, the contents, and what they tell us.",
    type: "guide",
    relatedCourseIds: [
      "course-discovery-tutankhamun-tomb",
      "course-tutankhamun-and-his-world",
    ],
    updatedAt: "2025-01-15",
    content:
      "Tutankhamun's tomb (KV62) was discovered by Howard Carter on 4 November 1922, funded by Lord Carnarvon, in the Valley of the Kings. It was the most intact royal tomb ever found, though it had been robbed twice in antiquity.\n\nThe burial chamber contained a gilded sarcophagus with three nested coffins; the innermost was solid gold. The annexe, treasury, and antechamber held over five thousand objects: furniture, chariots, weapons, board games, and the famous gold mask.\n\nWhy was it so well preserved? The tomb was small (unusually so for a king) and was buried under rubble from a later tomb cut (KV9, Ramesses VI), which concealed its entrance.\n\nTutankhamun's reign (c. 1332–1323 BCE) is known mainly from this tomb; his 'curse' is a modern invention. The 1922 discovery made Egyptology a global phenomenon and raised questions about the ownership of antiquities that continue today.",
  },
  {
    id: "resource-reading-list-discoveries",
    slug: "resource-reading-list-discoveries",
    title: "Reading List: Great Discoveries",
    description:
      "The stories behind the major finds.",
    type: "reading-list",
    relatedCourseIds: [
      "course-discovery-tutankhamun-tomb",
      "course-tutankhamun-and-his-world",
    ],
    updatedAt: "2025-01-15",
    content:
      "Start with the published excavation records: Carter's own notebooks (now published in facsimile) are models of careful, if period-bound, recording. Modern accounts by scholars — rather than adventure narratives — place the discovery in its context: the politics of the partage system, the Egyptian antiquities service, and the 1922 revolution in Egypt.\n\nAlso look for the history of the decipherment (Young and Champollion) and the early travellers (the Description de l'Égypte, published after Napoleon's expedition, is a landmark and a product of its time).",
  },
  {
    id: "resource-study-guide-chronology",
    slug: "study-guide-chronology",
    title: "Study Guide: Egyptian Chronology",
    description:
      "How scholars date events in a civilization without a continuous calendar record.",
    type: "study-material",
    relatedCourseIds: ["course-ancient-egypt-foundations"],
    updatedAt: "2025-01-15",
    content:
      "Egyptian chronology rests on three legs:\n\n1. King lists: the Palermo Stone (Old Kingdom), the Turin canon, and temple lists at Abydos and Karnak give sequences of kings, sometimes with reign lengths.\n2. Astronomical events: a few texts mention risings of the star Sirius (Sothis), which can anchor a year in the civil calendar — but only if the observation site is known, and scholars disagree about several of these.\n3. Scientific dating: radiocarbon dating and dendrochronology (using imported cedar and other woods) provide independent checks, with margins of error that grow with age.\n\nThe result: a 'conventional chronology' with a floating uncertainty of roughly a few decades in the early periods, and more in the Third Intermediate Period. When you read a date like 'c. 1279 BCE', the 'c.' (circa) is doing real work.",
  },
  {
    id: "resource-study-guide-sources",
    slug: "resource-study-guide-sources",
    title: "Study Guide: Egyptian Sources",
    description:
      "What survives from ancient Egypt, and what is lost.",
    type: "study-material",
    relatedCourseIds: ["course-ancient-egypt-foundations"],
    updatedAt: "2025-01-15",
    content:
      "Egyptian history is told through:\n\n— Monumental inscriptions: royal announcements and temple reliefs, written to glorify the king. Treat them as propaganda, not neutral reporting.\n— Administrative documents: ration lists, tax records, and court archives — the closest thing to objective evidence.\n— Literature: tales, hymns, and wisdom texts, which reveal values but not events.\n— Private tombs: biographies of officials, which boast and therefore must be read critically.\n— Archaeology: the physical record, which does not lie but is always incomplete.\n\nWhat is lost: most papyri perished in the damp Delta; the Old Kingdom is known from far less than the New Kingdom. Absence of evidence is a real category of knowledge here — for example, we have almost no Egyptian narrative history for the First Intermediate Period.",
  },
  {
    id: "resource-study-guide-reading-hieroglyphs",
    slug: "resource-study-guide-reading-hieroglyphs",
    title: "Study Guide: Reading Hieroglyphs",
    description:
      "A practice routine for learning the script.",
    type: "study-material",
    relatedCourseIds: ["course-reading-hieroglyphs"],
    updatedAt: "2025-01-15",
    content:
      "A practical routine:\n\n1. Learn the 25 or so uniliteral signs (the Egyptian 'alphabet') — this takes a few hours.\n2. Learn the biliteral and triliteral signs in groups, with mnemonics.\n3. Learn the determinatives for the categories you read most (gods, places, actions).\n4. Read real inscriptions early, starting with royal cartouches, which are short and formulaic.\n5. Keep a notebook of signs, and check yourself against the Gardiner sign list.\n\nExpect the grammar to feel unfamiliar: no written vowels, verb-first word order, and suffix pronouns. Consistency beats intensity — fifteen minutes of reading daily outperforms a weekend cram.",
  },
];

export const resourceTypes: Record<Resource["type"], string> = {
  timeline: "Timeline",
  map: "Map",
  glossary: "Glossary",
  reference: "Reference",
  "reading-list": "Reading list",
  guide: "Guide",
  "study-material": "Study material",
  chart: "Chart",
};
