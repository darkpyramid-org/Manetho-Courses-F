import { defineCourse } from "@/data/defineCourse";
import type { Course } from "@/types";
import {
  module,
  reading,
  video,
  quiz,
  gallery,
} from "@/data/authoring";

/*
 * Courses 15–21: art, temples, tombs, archaeology,
 * Valley of the Kings, the discovery, and daily life.
 */

const artSymbolism = defineCourse({
  id: "course-egyptian-art-symbolism",
  slug: "egyptian-art-symbolism",
  title: "Egyptian Art and Symbolism",
  subtitle: "The grammar of Egyptian representation",
  description:
    "Egyptian art is not decoration — it is a visual language with rules that lasted three thousand years. This course teaches the grammar: the canon of proportions, the composite view, the hierarchy of scale, the symbolism of colour, and the moments when artists broke the rules.",
  shortDescription:
    "How to read Egyptian art: the canon, the conventions, and the meaning.",
  category: "art-architecture",
  level: "intermediate",
  instructorId: "instr-nadia-el-baz",
  coverImage: "/covers/cover-art.svg",
  learningOutcomes: [
    "Explain the canon of proportions and the grid system",
    "Interpret the composite view and hierarchy of scale",
    "Decode the symbolism of colour",
    "Recognize the Amarna break with convention",
    "Read tomb scenes as evidence",
  ],
  requirements: ["No prior knowledge required."],
  tags: ["art", "canon", "colour", "amarna", "iconography"],
  language: "English",
  publishedAt: "2025-05-01",
  updatedAt: "2025-06-10",
  modules: [
    module(
      "the-canon",
      "The Canon",
      "The rules that governed Egyptian representation.",
      [
        video(
          "the-canonical-proportions",
          "The Canonical Proportions",
          15,
          "The grid: how Egyptian artists sized the human figure.",
          "Egyptian artists worked to a canon of proportions: the human figure was drawn on a grid, with the body divided into a fixed number of squares. In the Old Kingdom, the figure was 18 squares from soles to hairline; in the New Kingdom, 22 squares (with added squares for the shoulders and the elbows). The grid is still visible on unfinished walls, drawn in red — the 'construction lines' that modern excavators have photographed.\n\nThe canon was taught in the scribal schools: the student copied the master's figure, square by square. The result was a consistency that lasted millennia — the same figure, the same proportions, in tombs of the Old Kingdom and temples of the Ptolemaic period.\n\n \"The canon was not a prison: within it, artists could vary the pose, the gesture, the expression. The Amarna period broke the canon itself — a fact that shows how radical that break was.",
        ),
        reading(
          "the-composite-view",
          "The Composite View",
          14,
          "Why the head is in profile and the eye is front-facing.",
          "The most famous feature of Egyptian art is the 'composite view': the head, legs, and arms are shown in profile, but the eye and the torso face the viewer. To modern eyes, trained in perspective, this looks like a mistake; to the Egyptians, it was the most accurate representation possible.\n\n \"The logic is descriptive, not optical: the profile shows the head and the legs as they are best known (the face in profile, the legs in motion), while the eye and the chest are shown as they are best understood (both eyes, the breadth of the chest). The artist's aim was completeness, not illusion.\n\n \"The convention extends to other things: a pond is shown as a rectangle with fish and birds in profile, a tree as a profile with roots, and a person as the composite of the best views of each part. Egyptian art is a 'conceptual' art — it shows what the artist knows, not what the eye sees at an instant.",
        ),
        reading(
          "hierarchy-of-scale",
          "Hierarchy of Scale",
          13,
          "Size as rank: who is biggest, and why.",
          "In Egyptian art, size indicates importance. The king is shown larger than the queen, the queen larger than the officials, and the officials larger than the servants and the workers. A scene of a tomb owner and his family will show the tomb owner several times the size of his wife and children.\n\n \"The hierarchy is a grammar: the viewer reads rank at a glance. It also survives in the smallest objects — on a scarab, the king's name is larger than the rest of the text; on a stela, the owner's figure towers over the offering bearers.\n\n \"The hierarchy applies to the gods as well: a god shown with a king is usually the same size or larger — the king's size is a human rank, and the gods stand outside it. The one place where the hierarchy breaks is in the Amarna period, where the king and queen are shown in the same size as the Aten's rays — a new theology in visual form.",
        ),
      ],
    ),
    module(
      "meaning",
      "Meaning",
      "Colour, scenes, and the Amarna break.",
      [
        reading(
          "colour-and-symbolism",
          "Colour and Symbolism",
          15,
          "The palette and its meanings.",
          "Colour in Egyptian art was symbolic as well as decorative. The palette was limited — ochres (red and yellow), carbon black, calcium carbonate white, and the famous Egyptian blue (a synthetic pigment, one of the first in history) and green (a copper-based pigment) — but each colour carried meaning.\n\n \"The conventions: green for rebirth, vegetation, and the fertile land (Osiris was shown with green skin); red for chaos, the desert, and danger (Set was red); black for fertility and the resurrection (the color of the silt, and of Osiris); white for purity and sacredness (the clothing of the priests, the linen); blue for the sky, the Nile, and the waters of chaos; gold for the flesh of the gods — the metal that never tarnished, the flesh of Ra.\n\n \"The conventions are general, not absolute — the same god could be shown in several colors, and the color of the skin could signal the god's form (Ra's red skin at sunset). The reader of Egyptian art learns the palette as one learns a code.",
        ),
        reading(
          "the-amarna-break",
          "The Amarna Break",
          15,
          "The revolution in style under Akhenaten.",
          "For three thousand years, the canon held. Then, under Akhenaten, the rules broke: figures have elongated heads and necks, fleshy bellies, wide hips, and thin legs; the royal family is shown in intimate, naturalistic scenes — the king kissing his daughters, the queen riding in the chariot with the king, the children playing.\n\n \"The change is systematic: it appears in relief, painting, and sculpture, at the capital (Amarna) and in the tombs of the courtiers. The bust of Nefertiti — found in the sculptor's workshop at Amarna — is the style's masterpiece: the individualized face, the painted features, the long neck.\n\n \"Interpretation divides scholars: was Amarna art a 'revolution' — a return to nature, a new realism — or a new court style, imposed by royal preference and abandoned with the reign? The evidence cannot settle the question, and the question itself is a test of how we read style: is style the mirror of a king's mind, or the fashion of a workshop?",
        ),
        reading(
          "reading-scenes",
          "Reading Tomb Scenes",
          14,
          "What the pictures on the tomb walls are for.",
          "The scenes on tomb walls are not 'wallpaper'. They are the equipment of the afterlife: the offering scenes provide food for the ka; the scenes of farming, hunting, and feasting provide the pleasures of the Field of Reeds; the scenes of the family provide the company; and the scenes of the gods provide the protection.\n\n \"Reading a tomb scene means asking: what is the function of this image? The 'false door' (the stela-shaped niche in the tomb chapel) is the portal through which the ka passes; the offering bearers bring the loaves, the geese, and the jars of beer; the 'biography' of the owner (the inscription above the door) tells the career that the dead person will enjoy in the afterlife.\n\n \"The scenes are also evidence of daily life — the best source for the appearance of the houses, the furniture, the clothing, and the work of the living. But they are idealized: the farmers are shown thin and working, the owners are shown fat and at ease. The art is a wish, not a photograph.",
        ),
      ],
    ),
    module(
      "objects",
      "Objects",
      "The small arts: amulets, jewelry, and the language of things.",
      [
        reading(
          "the-language-of-amulets",
          "The Language of Amulets",
          13,
          "Small objects, large meanings.",
          "Amulets are among the most common Egyptian objects — and among the most eloquent. Made of faience (the glazed material that was Egypt's 'plastic'), stone, metal, and shell, they were worn in life and placed with the dead: the scarab (rebirth), the Eye of Horus (protection and healing), the djed pillar (the backbone of Osiris, stability), the tyet (the knot of Isis), the ankh (life).\n\n \"Each amulet had a name, a meaning, and a spell: the Book of the Dead specifies the amulets to be placed on the mummy, with the spells to be recited over them. The heart scarab (the large green stone scarab placed over the heart of the mummy) is inscribed with spell 30B, preventing the heart from testifying against its owner.\n\n \"The study of amulets is the study of Egyptian religion in miniature: the same object, worn for three thousand years, carries a theology that the wearer may never have articulated — but recognized.",
        ),
        reading(
          "jewelry-and-personal-adornment",
          "Jewelry and Personal Adornment",
          12,
          "Gold, faience, and the art of the personal.",
          "Egyptian jewelry was made of gold (the flesh of the gods, the metal of eternity), faience, semi-precious stones (lapis lazuli from Afghanistan, carnelian, turquoise), and silver (rarer than gold, and more valued). The techniques — granulation, cloisonné, inlay — were highly developed; the treasures of Tutankhamun and the jewelry of the princesses (the Dahshur treasure) are the masterpieces.\n\n \"Jewelry was protective as well as beautiful: the broad collar (the 'wesekh' collar) of beads, the amulets of the gods, and the rings with the royal names (the scarabs of Amenhotep III, inscribed with his deeds, were distributed as royal favors) were all amulets in the form of adornment.\n\n \"The evidence for jewelry is rich: the tomb paintings show it worn, the tombs preserved it, and the workshops (the village of Deir el-Medina) left the tools and the refuse. The personal ornaments of the ancient Egyptians are among the most intimate objects of any ancient culture.",
        ),
        quiz("knowledge-check", "Knowledge Check", 10, "Test your understanding of Egyptian art.", "quiz-art-1"),
      ],
    ),
  ],
});

const temples = defineCourse({
  id: "course-temples-of-ancient-egypt",
  slug: "temples-of-ancient-egypt",
  title: "Temples of Ancient Egypt",
  subtitle: "The architecture of the divine",
  description:
    "The temple was the house of the god and the engine of the cosmos. This course follows the architecture from the pylon to the sanctuary, examines the great temples — Karnak, Luxor, Abu Simbel, Edfu — and explains the rituals that made the stones a living machine.",
  shortDescription:
    "Anatomy of a temple, the great sanctuaries, and the daily ritual.",
  category: "art-architecture",
  level: "advanced",
  instructorId: "instr-sarah-quinn",
  coverImage: "/covers/cover-temples.svg",
  learningOutcomes: [
    "Explain the axial plan of the Egyptian temple",
    "Identify the pylon, court, hypostyle hall, and sanctuary",
    "Describe the great temples of Egypt",
    "Explain the daily ritual and the festivals",
    "Read temple decoration as theology",
  ],
  requirements: ["Gods of Ancient Egypt or equivalent."],
  tags: ["temples", "karnak", "architecture", "ritual", "sanctuary"],
  language: "English",
  publishedAt: "2025-05-01",
  updatedAt: "2025-06-10",
  modules: [
    module(
      "sacred-space",
      "Sacred Space",
      "The anatomy of the temple.",
      [
        video(
          "the-anatomy-of-a-temple",
          "The Anatomy of a Temple",
          17,
          "The axis from light to darkness: the plan of the house of the god.",
          "The Egyptian temple was the house of the god, and its plan was a map of the cosmos. The visitor moved along a single axis — from the open, sunlit forecourt to the dark, restricted sanctuary — through a sequence of spaces that became progressively more sacred and more restricted.\n\n \"The sequence: the pylon (the massive gateway with sloping walls, decorated with the king smiting his enemies), the open court (accessible to the people during festivals), the hypostyle hall (a forest of columns, entered only by priests and the king), the inner rooms (the chapel of the god and the side chapels of the associated gods), and the sanctuary (the naos) at the far end — the darkest, most restricted space, housing the statue of the god.\n\n \"The floor rose and the ceiling lowered along the axis: the visitor walked uphill, from the daylight into the primordial darkness — the temple as a re-enactment of the emergence of the world from the waters of chaos.",
        ),
        reading(
          "the-pylon-and-the-court",
          "The Pylon and the Court",
          14,
          "The gateway and the public space.",
          "The pylon (from the Greek for 'gateway') was the monumental entrance: two tapering towers flanking a doorway, with the slopes decorated with reliefs of the king smiting his enemies — the defense of the sacred order. Flagpoles stood at the front, and the walls were painted with scenes of the king's victories.\n\n \"Beyond the pylon lay the open court: a large, sunlit space accessible to the people (during festivals, the god's barque was carried through it). The court often had colonnades along its sides, with statues of the king and of the gods, and the 'liberation' scenes of the festivals.\n\n \"The court was the public face of the temple: the place where the people saw the god, where the offerings were presented, and where the news of the temple was proclaimed. The reliefs of the court often record the temple's history: the founding, the donations, the decrees.",
        ),
        reading(
          "the-hypostyle-hall",
          "The Hypostyle Hall",
          14,
          "The forest of columns and the light from above.",
          "The hypostyle hall — from the Greek 'hypostylos', 'on columns' — was the heart of the temple: a vast hall whose roof was carried on columns. The Great Hypostyle Hall at Karnak (19th Dynasty) is the masterpiece: 134 columns in sixteen rows, the central row taller (about 21 metres), with clerestory windows above the side aisles.\n\n \"The columns were carved as plants: the papyrus (Lower Egypt), the lotus (Upper Egypt), the palm, and the bud — the stone marsh of the primeval world. The central aisle, lit from above through the clerestory, represented the light of creation; the side aisles, darker, represented the waters.\n\n \"The walls were covered in carved relief: the king making offerings to the gods, the festivals, the battles, and the records of the reign. The hall was a machine for theology — and, in the case of Karnak, an archive: the walls record the history of the reign in stone.",
        ),
        reading(
          "the-sanctuary",
          "The Sanctuary",
          13,
          "The darkest room in the world.",
          "At the far end of the temple lay the sanctuary (the naos): a small, dark room housing the statue of the god. Only the king — or, in practice, the high priest acting in his name — could enter, and only after the ritual of purification: washing in the sacred lake, dressing in clean linen, and carrying the offerings.\n\n \"The sanctuary was the center of the cosmos: the primeval mound, the first land, the place where the god had first stood. The statue (or, in some temples, the sacred barque) was the god's manifestation — the point where the divine entered the material world.\n\n \"The daily ritual took place here: the god was woken at dawn, washed, dressed, offered food and drink, and put to bed at dusk. The ritual is recorded in the 'ritual books' (the temple papyri), and its re-enactment is the core of the temple's purpose: the maintenance of maat, the order of the world.",
        ),
      ],
    ),
    module(
      "the-great-temples",
      "The Great Temples",
      "Karnak, Luxor, Abu Simbel, and Edfu.",
      [
        reading(
          "karnak-the-great-temple",
          "Karnak: The Great Temple",
          18,
          "The largest religious complex of the ancient world.",
          "Karnak — the 'most select of places' (Ipet-isut) — is the largest religious complex of the ancient world: a village of temples, built and rebuilt by generation after generation of kings for more than a thousand years. Its core is the temple of Amun-Ra, with the Great Hypostyle Hall, the sacred lake, and the obelisks.\n\n \"The complex is a palimpsest: each king added to it, often usurping the reliefs of his predecessors (the 'rewriting' of the cartouches is visible on the walls). The modern visitor walks through the temples of the Middle Kingdom, the New Kingdom, the Ptolemaic period, and the Nubian kings — all layered on the same site.\n\n \"Karnak is also an archive: the walls record the campaigns, the festivals, the donations, and the theology of the reign. The 'cachette' of Karnak (the discovery in 1903 of thousands of statues buried in a pit) is the largest single find of Egyptian sculpture.",
        ),
        reading(
          "luxor-temple",
          "Luxor Temple",
          14,
          "The southern sanctuary and the Opet festival.",
          "Luxor Temple (ancient Ipet-resyt, 'the southern sanctuary') is the smaller of the two great temples of Thebes — but its history is among the richest. Its core is Eighteenth Dynasty (Amenhotep III), with additions by Tutankhamun, Horemheb, Ramesses II (the pylon and the two obelisks, one of which still stands, the other given to France in 1831 and now in the Place de la Concorde), and the Ptolemies.\n\n \"The temple was the home of the Opet festival: the annual procession in which the barque of Amun was carried from Karnak to Luxor (a journey of about 3 km), accompanied by the people, the priests, and the soldiers. The festival lasted up to 27 days in the late period, and its reliefs at Luxor show the procession, the offerings, and the 'divine marriage' of the god.\n\n \"The temple is also a document of continuity: in the Roman period, it was converted into a fort and a church; in the medieval period, the mosque of Abu Haggag was built within its walls — and still stands, in use, among the columns.",
        ),
        reading(
          "abu-simbel-and-nubia",
          "Abu Simbel and Nubia",
          14,
          "The temples in the south — and their rescue.",
          "The temples of Nubia are the southernmost monuments of pharaonic Egypt. The greatest are the two temples of Ramesses II at Abu Simbel: the Great Temple, with its four colossal seated statues (about 20 metres), and the Small Temple, dedicated to Queen Nefertari and the goddess Hathor — a rare honor for a queen.\n\n \"The Great Temple's alignment is remarkable: twice a year (around 22 February and 22 October, plausibly the king's birthday and coronation), the rays of the rising sun penetrate the sanctuary and illuminate the statues of the gods — except the statue of Ptah, the god of darkness, who remains in shadow.\n\n \"In the 1960s, the temples were threatened by the Aswan High Dam. The UNESCO campaign (1960–1980) cut the temples into blocks and reassembled them on higher ground — the largest archaeological rescue in history, which also saved Philae and dozens of Nubian sites, and created the field of international heritage conservation.",
        ),
      ],
    ),
    module(
      "ritual",
      "Ritual",
      "The daily ritual and the festivals.",
      [
        reading(
          "the-daily-ritual",
          "The Daily Ritual",
          14,
          "The waking, washing, dressing, and feeding of the god.",
          "The heart of the temple was the daily ritual: the god was woken at dawn, washed (with water from the sacred lake), dressed in clean linen and jewelry, offered food and drink (bread, beer, meat, and incense), and put to bed at dusk. The ritual is recorded in the 'ritual books' (the temple papyri, of which the 'Book of the Temple' is the main survivor).\n\n \"The ritual was performed by the priests in the name of the king: the king was the officiant in theory, the priest in practice. The high priest and the 'wab' priests (the purifiers) performed the rites in shifts; the temple was a working institution, with its own staff, workshops, granaries, and lands.\n\n \"The offerings, after being presented to the god, were redistributed: the food was eaten by the priests and the staff (the 'reversion of offerings'), the temple's income supported the institution, and the surplus went to the state. The temple was an economic engine as well as a religious center.",
        ),
        reading(
          "the-opet-festival",
          "The Opet Festival",
          13,
          "The great festival of Thebes.",
          "The Opet festival was the great annual festival of Thebes: the procession of the barque of Amun (with the statues of Mut and Khonsu) from Karnak to Luxor Temple, a journey of about 3 km along the avenue of sphinxes. The festival renewed the king's divine power: in the sanctuary of Luxor, the king was 'reborn' — his ka was renewed by the god.\n\n \"The festival grew over the centuries: from 11 days in the reign of Thutmose III to 27 days in the Ptolemaic period. The reliefs at Luxor show the procession: the priests carrying the barque on their shoulders, the soldiers, the musicians, the dancers, the offerings, and the people lining the route.\n\n \"The festival was the occasion for the people's contact with the divine: the barque was the visible presence of the god, and the people could ask it questions (the 'oracle' of the god, whose answers were interpreted by the priests from the movements of the barque). The Opet was, in short, the religious heart of the New Kingdom.",
        ),
        quiz("knowledge-check", "Knowledge Check", 10, "Test your understanding of the temples of ancient Egypt.", "quiz-temples-1"),
      ],
    ),
  ],
});

const tombs = defineCourse({
  id: "course-tombs-and-burial-practices",
  slug: "tombs-and-burial-practices",
  title: "Tombs and Burial Practices",
  subtitle: "The archaeology of death",
  description:
    "The tomb was the machine for eternity. This course follows the archaeology of death: from the mastaba to the pyramid to the rock-cut tomb, the practices of mummification, the equipment of the dead, and the necropolises of Egypt.",
  shortDescription:
    "Tomb architecture, mummification, grave goods, and the necropolises.",
  category: "religion",
  level: "advanced",
  instructorId: "instr-peter-lindqvist",
  coverImage: "/covers/cover-tombs.svg",
  learningOutcomes: [
    "Trace the evolution of tomb design",
    "Explain the practice of mummification",
    "Describe the equipment of the dead",
    "Identify the major necropolises",
    "Read a tomb as an archaeological site",
  ],
  requirements: ["Egyptian Religion and the Afterlife or equivalent."],
  tags: ["tombs", "mummification", "necropolis", "burial", "mastaba"],
  language: "English",
  publishedAt: "2025-05-01",
  updatedAt: "2025-06-10",
  modules: [
    module(
      "the-archaeology-of-death",
      "The Archaeology of Death",
      "The evolution of the tomb.",
      [
        video(
          "from-mastaba-to-pyramid",
          "From Mastaba to Pyramid",
          15,
          "The first tombs and the birth of the pyramid.",
          "The earliest elite tombs of the dynastic period were mastabas: flat-roofed, rectangular structures with sloping sides, built of mudbrick, with an offering chapel above and a burial chamber below. The name ('mastaba' means 'bench' in Arabic, for its shape) reflects the form that lasted for a thousand years.\n\n \"The mastaba's development is visible at Saqqara: the early dynastic mastabas grew larger, their substructures more complex, their chapels more elaborate. Djoser's Step Pyramid began as a mastaba (the excavations of Lauer revealed the stages), and the form grew into the first monumental stone building in Egypt.\n\n \"The pyramid, in turn, was the mastaba writ large: the burial chamber deep below the mound of the pyramid, the chapel at the pyramid's base, the enclosure wall around the complex. The evolution of the tomb is the evolution of the state's ability to organize labor on a national scale.",
        ),
        reading(
          "the-evolution-of-tomb-design",
          "The Evolution of Tomb Design",
          15,
          "Pyramid, rock-cut tomb, and the hidden burial.",
          "The pyramid was the royal tomb of the Old Kingdom; by the New Kingdom, the pyramid had disappeared, replaced by the rock-cut tomb. The reasons: the pyramids were conspicuous (and hence robbed), and the geology of the Theban hills made rock-cutting practical and secure.\n\n \"The New Kingdom royal tomb (the 'swallow' form, bent and then straight) was cut into the valley's limestone: a descending corridor, stairwells, wells (to foil robbers and to catch floodwater), a pillared hall, and the burial chamber. The walls were decorated with the funerary texts — the Amduat, the Book of Gates, the Book of the Dead.\n\n \"The private tombs of the nobility followed a different form: the 'T'-shaped chapel and court of the Eighteenth Dynasty (at Thebes), with the burial chamber below, and the later 'temple-tomb' form of the Nineteenth and Twentieth Dynasties. The evolution of the tomb is the history of the theology — and the politics — of burial.",
        ),
      ],
    ),
    module(
      "preparing-the-dead",
      "Preparing the Dead",
      "Mummification and the equipment of the dead.",
      [
        reading(
          "mummification-the-process",
          "Mummification: The Process",
          18,
          "Seventy days: the steps of the embalmer's art.",
          "The mummification process, as described by Herodotus (fifth century BCE) and confirmed by modern archaeology, took about seventy days. The steps: the body was washed in natron solution; the brain was removed through the nose with a hooked instrument (and discarded — the Egyptians considered it unimportant); the internal organs (liver, lungs, stomach, intestines) were removed, dehydrated, and placed in canopic jars; the heart was left in place; the body was dehydrated in natron for forty days; it was washed, anointed with oils and resins, and wrapped in linen (with amulets placed between the bandages); and it was placed in the coffin.\n\n \"The process varied by period and by budget: the 'first class' mummification (Herodotus' description) was for the elite; the second class involved cheaper materials; the third class was a simple natron wash. The evidence — the mummies, the embalming caches (like the cache at Deir el-Bahari), the embalming workshops (like the recently excavated one at Saqqara), and the embalming texts — fills in the details that Herodotus did not.\n\n \"The embalmer was a priest of Anubis, and the process was a ritual: each step accompanied by spells, and the 'opening of the mouth' at the end. The mummy was not merely a preserved body — it was a transformed one, prepared to be an akh.",
        ),
        reading(
          "the-equipment-of-the-dead",
          "The Equipment of the Dead",
          14,
          "What was placed in the tomb, and why.",
          "The tomb was equipped for the afterlife: the coffin (the 'house of the mummy', often decorated as a chapel), the canopic chest (the four sons of Horus guarding the organs), the shabtis (the servant figures who would work for the dead in the Field of Reeds), the amulets, the jewelry, the furniture, the food, and the weapons.\n\n \"The equipment was graded by wealth: Tutankhamun's tomb held over five thousand objects; a modest tomb held a few dozen; the poorest were buried in the desert sand, with a pot and a mat. The social range of the burials is one of the richest sources for the study of the society of the dead.\n\n \"The texts were the most important equipment: the spells (the Book of the Dead for the New Kingdom onward) were written on papyrus, on coffins, and on amulets. The tomb's function — the protection and the provision of the dead — was carried by the objects, and the objects were activated by the spells and the rituals.",
        ),
        reading(
          "ushabtis-and-servants",
          "Ushabtis and Servants",
          12,
          "The workers of the afterlife.",
          "The ushabti (the 'answerer') was a small figure — of faience, wood, stone, or metal — placed in the tomb to serve the dead person in the afterlife. When the gods called upon the dead to work (to farm the Field of Reeds), the ushabti would answer in the dead person's place.\n\n \"The ushabtis were inscribed with a spell (chapter 6 of the Book of the Dead): 'O ushabti, if [the dead person] is called upon to work... you shall say: Here I am.' The number of ushabtis varied: some tombs contained 401 (365 workers and 36 overseers, ten for each day of the year); Tutankhamun's tomb held 413.\n\n \"The ushabti is a document of the Egyptian afterlife's practical imagination: the dead farmed, but they did so by proxy — the afterlife was an eternity of leisure for the rich, worked by their little substitutes.",
        ),
      ],
    ),
    module(
      "the-necropolises",
      "The Necropolises",
      "The cities of the dead.",
      [
        reading(
          "the-royal-necropolis",
          "The Royal Necropolis",
          14,
          "Abydos, Giza, and the Valley of the Kings.",
          "The royal necropolis moved with the capital and with the theology. The earliest dynastic kings were buried at Abydos (the oldest royal cemetery, with the large tombs of the First and Second Dynasties, and the subsidiary graves of the retainers — evidence of human sacrifice in the earliest dynasties).\n\n \"The Old Kingdom kings were buried at the edge of the plateau: Giza, Saqqara, Dahshur, and Abu Sir — the pyramids. The Middle Kingdom kings returned to Thebes and to the Fayum (the pyramid of Hawara, the 'Labyrinth' of Amenemhat III). The New Kingdom kings were buried in the Valley of the Kings, in hidden, rock-cut tombs.\n\n \"The later periods: the kings of the Twenty-First and Twenty-Second Dynasties were buried at Tanis (the royal cache found in 1939), and the priests of Amun at Thebes were buried in Deir el-Bahari. The necropolis is a map of the political history of Egypt.",
        ),
        reading(
          "the-tombs-of-the-nobles",
          "The Tombs of the Nobles",
          13,
          "The private tombs and the lives they record.",
          "The private tombs of the nobility are among the richest sources for the study of Egyptian life. At Thebes, the nobles' tombs (the Tombs of the Nobles at Qurnet Murai, Sheikh Abd el-Qurna, and Dra Abu el-Naga) preserve the painted scenes of daily life: farming, hunting, feasting, music, and the family.\n\n \"At Saqqara and Giza, the Old Kingdom mastabas of the nobles (the tombs of Ti, Kagemni, and the two brothers Niankhkhnum and Khnumhotep — the famous 'tomb of the two brothers') preserve the painted reliefs of the estates, the workshops, and the hunts.\n\n \"The tomb owners were the administrators of the state: the viziers, the priests, the generals, the scribes, and the overseers of the works. Their biographies (the inscriptions in their chapels) are the earliest Egyptian literature of the self — the record of a career and a character, written for eternity.",
        ),
        quiz("knowledge-check", "Knowledge Check", 10, "Test your understanding of tombs and burial practices.", "quiz-tombs-1"),
      ],
    ),
  ],
});

const archaeology = defineCourse({
  id: "course-archaeology-nile-valley",
  slug: "archaeology-nile-valley",
  title: "Archaeology of the Nile Valley",
  subtitle: "How the evidence is recovered and interpreted",
  description:
    "Egyptology is built on fieldwork. This course teaches the discipline: the history of excavation (and its ethics), the methods of modern archaeology, and the great sites of the Nile Valley — what each preserves, and how we know it.",
  shortDescription:
    "The history, the methods, and the sites of Egyptian archaeology.",
  category: "archaeology",
  level: "intermediate",
  instructorId: "instr-marcus-osei",
  coverImage: "/covers/cover-archaeology.svg",
  learningOutcomes: [
    "Explain the history of excavation in Egypt",
    "Describe the methods of modern archaeology",
    "Evaluate the ethics of ownership and partage",
    "Identify the major sites and what they preserve",
    "Read a site's evidence critically",
  ],
  requirements: ["No prior knowledge required."],
  tags: ["archaeology", "excavation", "methods", "sites", "ethics"],
  featured: true,
  language: "English",
  publishedAt: "2025-05-01",
  updatedAt: "2025-06-10",
  modules: [
    module(
      "the-discipline",
      "The Discipline",
      "The history of Egyptology — and its ethics.",
      [
        video(
          "what-is-egyptology",
          "What Is Egyptology?",
          14,
          "The field, its founders, and its questions.",
          "Egyptology is the study of ancient Egypt: its language, its history, its religion, its art, and its archaeology. It is a young discipline — the decipherment of hieroglyphs (1822) made it possible — and its history is inseparable from the history of European exploration, colonialism, and the modern Egyptian state.\n\n \"The founders: the savants of Napoleon's expedition (1798–1801), whose Description de l'Égypte documented the monuments (and began the era of the removal of antiquities); the early explorers (Giovanni Belzoni, the giant of the early 19th century, who moved the 'Younger Memnon' bust of Ramesses II to the British Museum); the early excavators (Auguste Mariette, the founder of the Egyptian Antiquities Service, and Flinders Petrie, the father of scientific archaeology in Egypt).\n\n \"Modern Egyptology is a scholarly discipline: its questions are about the culture, its evidence, and its history — and its practice is (slowly) being returned to Egyptian institutions and scholars.",
        ),
        reading(
          "a-brief-history-of-excavation",
          "A Brief History of Excavation",
          17,
          "From treasure hunting to science.",
          "The history of excavation in Egypt has three phases. The first (1798–1880s) was the age of exploration and collection: the monuments were surveyed, the tombs were entered, and the finds were removed — often with little record of context. The great collections of Europe and America were formed in this period.\n\n \"The second (1880s–1920s) was the age of scientific method: Flinders Petrie introduced stratigraphy, the seriation of pottery, and the systematic recording of contexts; the Egypt Exploration Fund (founded 1882) and the Metropolitan Museum's expedition (from 1906) professionalized the field. But the 'partage' system — the division of finds between the excavator and the Egyptian state — continued, and the great finds (the treasures of Tutankhamun excepted) were often split.\n\n \"The third (1922–present) is the modern era: the Egyptian Antiquities Service (now the Ministry of Tourism and Antiquities) asserts Egyptian ownership, the excavations are increasingly Egyptian-led, and the methods (the survey, the geophysics, the conservation) are those of a modern science. The history of the discipline is a history of changing standards — and of who owns the past.",
        ),
        reading(
          "the-ethics-of-ownership",
          "The Ethics of Ownership",
          14,
          "Partage, repatriation, and the contested past.",
          "The history of Egyptian archaeology is a history of contested ownership. The 'partage' system (the division of finds between the foreign mission and the Egyptian state) shaped the great collections: the Egyptian Museum in Cairo, the British Museum, the Metropolitan Museum, the Louvre, and the Berlin Museum all hold Egyptian antiquities acquired under it.\n\n \"The system ended in the 1980s, when Egypt required the full return of finds — but the legacy remains: the requests for the return of the Rosetta Stone, the Bust of Nefertiti, and the Dendera Zodiac are part of a global debate about the ethics of the collections of the colonial era.\n\n \"The modern discipline's ethics are clear: the antiquities belong to the country of origin, the excavation is a partnership, and the study should serve the people whose heritage it is. The history of the field — and its self-criticism — is part of what a student of Egyptology must learn.",
        ),
      ],
    ),
    module(
      "methods",
      "Methods",
      "How modern archaeology works.",
      [
        reading(
          "how-to-read-a-site",
          "How to Read a Site",
          15,
          "Stratigraphy, context, and the meaning of layers.",
          "Modern archaeology is methodical. The excavation of a site proceeds by stratigraphy: the reading of the layers (the 'seals') of the site, in which the deeper layers are generally older (though natural processes — erosion, floods, the digging of pits — can disturb them).\n\n \"Every find is recorded in its context: its position, its layer, its associations. Context is the meaning: a pot in a tomb is a grave good; the same pot in a rubbish dump is a household item; the same pot in a foundation deposit is a ritual object. An object removed from its context is degraded as evidence — which is why looting is so destructive.\n\n \"The recording is the excavation: the plans, the sections, the photographs, the written logs, and the samples (for flotation, for radiocarbon, for soil chemistry). A modern excavation produces an archive that allows later scholars to reinterpret the site without re-excavating it — the opposite of the early treasure hunts, whose records are often the only evidence of the find.",
        ),
        reading(
          "dating-the-evidence",
          "Dating the Evidence",
          15,
          "How the finds are dated — and how the dates are checked.",
          "Dating is the core of archaeology. In Egypt, the methods are: (1) the stratigraphy (the relative sequence of the layers); (2) the typology (the dating of the pottery, the scarabs, and the other datable objects by their known sequences); (3) the inscriptions (the dated monuments, the cartouches, the king lists); and (4) the scientific methods (radiocarbon dating, dendrochronology, the astronomical observations, and the archaeomagnetism).\n\n \"Each method has limits. The radiocarbon dates have margins of error (often 50–100 years for the Bronze Age); the typologies depend on the sequences established by earlier excavations; the inscriptions are the most precise but also the most propagandistic; and the astronomical observations (the Sothic datings) are debated.\n\n \"The historian's practice is to cross-check: the radiocarbon date against the king list, the king list against the stratigraphy. The chronology of Egypt is a weave, not a single thread — and the 'c.' in 'c. 1279 BCE' is the mark of the weave.",
        ),
        reading(
          "the-science-of-the-field",
          "The Science of the Field",
          14,
          "The sciences that serve Egyptology.",
          "Modern Egyptology is a scientific discipline. The sciences that serve it: the physical anthropology (the study of the human remains, the mummies, the health, the diet, and the DNA); the archaeobotany (the plant remains — the emmer wheat, the barley, the flax, the fruits — from the flotation samples); the zooarchaeology (the animal bones, the sacred animals, the mummified animals); the materials science (the pigments, the ceramics, the metals, and the faience); the geophysics (the ground-penetrating radar and the magnetometry that now survey a site before a single trench is dug); and the conservation science (the preservation of the finds and the sites).\n\n \"The examples are famous: the CT scans of the mummies (the 'virtual autopsies' that reveal the age, the health, and the cause of death); the DNA studies (the royal mummies' lineage, the malaria of Tutankhamun); the reconstruction of the face of the mummies (the forensic art). Each new method rewrites the questions — and each answer raises new ones.",
        ),
      ],
    ),
    module(
      "the-sites",
      "The Sites",
      "The great sites of the Nile Valley.",
      [
        reading(
          "giza-and-its-plateau",
          "Giza and Its Plateau",
          15,
          "The pyramids, the Sphinx, and the workers' village.",
          "Giza is the most famous archaeological site in the world: the three pyramids (Khufu, Khafre, Menkaure), the Great Sphinx, the temples of the pyramid complex, the mastaba fields of the nobles, and — the most important modern discovery — the workers' village (the 'Lost City of the Pyramids', excavated by Lehner and Hawass from the 1990s).\n\n \"The plateau preserves the whole pyramid age: the quarry (with the quarry marks), the ramp systems (the remains of the ramps are debated), the harbor (the waterway that brought the stones), and the settlement (the bakeries, the breweries, the sleeping halls, the cemeteries of the workers).\n\n \"The site is still being excavated: the Scan Pyramids project (2015–present) uses muon tomography and thermal imaging to find hidden voids in the Great Pyramid — and in 2017 announced the discovery of a large void above the Grand Gallery, the first major internal structure found in the Great Pyramid since the 19th century. Giza is not finished; it is being read.",
        ),
        reading(
          "saqqara-the-ancient-cemetery",
          "Saqqara: The Ancient Cemetery",
          13,
          "The necropolis of Memphis, from the first dynasty to the Roman period.",
          "Saqqara is the necropolis of Memphis — the ancient capital — and the largest archaeological site in Egypt: a line of monuments stretching over 7 km, from the Step Pyramid of Djoser (the oldest stone monument in the world) to the temples and the tombs of the Roman period.\n\n \"The site's highlights: the Step Pyramid complex (the first monumental stone building), the pyramids of the Fifth and Sixth Dynasties (with the Pyramid Texts), the tombs of the nobles (the mastabas of Ti and Kagemni), the Serapeum (the burial place of the Apis bulls, with the great underground galleries), the pyramids of the Middle Kingdom and the Late Period, and the Coptic and Islamic monuments (the monastery of St. Jeremiah, the mosque of the Fatimid period).\n\n \"Saqqara is still yielding finds: the recent discoveries (the tomb of Wahtye, 2018; the embalming workshop and the mummification workshop, 2019–2022; the new pyramid of Queen Neith, 2023) show that the site — the oldest cemetery in Egypt — has not finished revealing its dead.",
        ),
        reading(
          "the-theban-necropolis",
          "The Theban Necropolis",
          14,
          "The west bank at Luxor: the temples, the tombs, and the village.",
          "The Theban necropolis (the west bank at Luxor) is the greatest cemetery of the New Kingdom. Its components: the mortuary temples of the kings (the Ramesseum, the temple of Hatshepsut at Deir el-Bahari, the temple of Medinet Habu of Ramesses III); the royal tombs (the Valley of the Kings, the Valley of the Queens); the tombs of the nobles (the Tombs of the Nobles at Qurnet Murai and Sheikh Abd el-Qurna); and the village of Deir el-Medina (the home of the tomb-builders).\n\n \"The site was occupied for some 500 years (the New Kingdom), and its excavations (by the Egypt Exploration Society, the Metropolitan Museum, the French Institute at Cairo (IFAO), and the Theban Mapping Project) have made it the best-documented cemetery of the ancient world.\n\n \"The Deir el-Medina excavations (the village and its rubbish dumps) are the richest source for the study of ordinary life in the ancient world: the letters, the receipts, the legal texts, the school exercises, the literary papyri, and the records of the strike — the voices of the people who built the tombs of the kings.",
        ),
        quiz("knowledge-check", "Knowledge Check", 10, "Test your understanding of the archaeology of the Nile Valley.", "quiz-archaeology-1"),
      ],
    ),
  ],
});

const valleyKings = defineCourse({
  id: "course-valley-of-the-kings",
  slug: "valley-of-the-kings",
  title: "The Valley of the Kings",
  subtitle: "The royal necropolis of the New Kingdom",
  description:
    "The Valley of the Kings is the most famous cemetery in the world: the hidden tombs of the New Kingdom pharaohs, cut into the limestone of a wadi in the Theban hills. This course follows the valley: its choice, its tombs, its robbers, and its modern study.",
  shortDescription:
    "The geography, the tombs, the robbers, and the modern exploration of the valley.",
  category: "archaeology",
  level: "intermediate",
  instructorId: "instr-peter-lindqvist",
  coverImage: "/covers/cover-valley.svg",
  learningOutcomes: [
    "Explain why the valley was chosen for the royal tombs",
    "Identify the major tombs and their owners",
    "Describe the architecture of the royal tombs",
    "Discuss the history of the valley's exploration",
    "Evaluate the conservation of the valley",
  ],
  requirements: ["Tombs and Burial Practices or equivalent."],
  tags: ["valley of the kings", "kv62", "kv5", "seti i", "necropolis"],
  language: "English",
  publishedAt: "2025-05-01",
  updatedAt: "2025-06-10",
  modules: [
    module(
      "the-valley",
      "The Valley",
      "The choice of the site and its geography.",
      [
        video(
          "the-choice-of-the-valley",
          "The Choice of the Valley",
          14,
          "Why the kings of the New Kingdom were buried here.",
          "The Valley of the Kings (the 'Valley of the Gates of the Kings', in the Egyptian name) is a wadi — a dry valley — cut into the limestone of the Theban hills, on the west bank of the Nile at Thebes. The choice of the site was deliberate: it was remote, it was defensible, and it pointed to the west — the land of the dead.\n\n \"The pyramid-shaped peak of al-Qurn ('the horn') dominates the valley, and its shape may have made the valley a natural 'pyramid' for the whole necropolis — the kings were buried in the shadow of the pyramid of nature. The theology of the site is also visible: the west bank was the land of the dead, the place of the setting sun, the domain of Osiris.\n\n \"The choice was made by Thutmose I (the first king buried in the valley — his tomb, KV20, was cut for him, and later re-cut for Hatshepsut) and his vizier Ineni, who records his pride in the work: 'I supervised the excavation of the cliff-tomb of His Majesty, alone, no one seeing, no one hearing.' The secrecy was the point: the hidden tomb was to escape the robbers.",
        ),
        reading(
          "the-geography-of-the-necropolis",
          "The Geography of the Necropolis",
          13,
          "The wadi, the cliffs, and the two branches.",
          "The valley is a wadi with two branches: the East Valley (where most of the royal tombs are, including KV62, Tutankhamun's tomb) and the West Valley (where the tombs of Amenhotep III, WV22, and Ay, WV23, are). The geology — the limestone of the Theban plateau — is both a blessing and a curse: it is soft enough to cut, but it is unstable (the floods and the rockfalls have damaged many tombs).\n\n \"The wadi was not always a valley: it was carved by the rains of the Pleistocene, and the floods of the last millennia have filled the tombs with debris. The geology explains the state of the tombs: the painted reliefs are damaged by the salts in the rock and by the moisture, and the floors are covered with the debris of the floods.\n\n \"The valley's modern name is Arabic ('Wadi Biban el-Muluk', the Valley of the Gates of the Kings); the ancient name — as recorded in the inscriptions of the workmen — was something like 'The Great and Majestic Necropolis of the Millions of Years of the Pharaoh, Life, Health, Strength'.",
        ),
      ],
    ),
    module(
      "the-tombs",
      "The Tombs",
      "The great tombs of the valley.",
      [
        reading(
          "the-tomb-of-seti-i",
          "The Tomb of Seti I",
          15,
          "KV17: the longest and most decorated royal tomb.",
          "KV17, the tomb of Seti I (Nineteenth Dynasty), is the longest and most elaborately decorated royal tomb in the valley: over 100 metres of corridors and chambers, with the painted reliefs of the Book of Gates, the Book of the Amduat, the Book of the Heavenly Cow, and the Litany of Ra — the full funerary corpus of the New Kingdom.\n\n \"The tomb was discovered by Giovanni Belzoni in 1817 (he was the first to enter it since antiquity), and it was the most spectacular find of the early era of Egyptology. The sarcophagus of Seti I — a fine alabaster chest — is now in the Sir John Soane's Museum in London; the mummy was found in the royal cache at Deir el-Bahari (DB320) in 1881.\n\n \"The tomb is also a cautionary tale of the early archaeology: Belzoni's men removed the painted plaster of some walls (the 'Belzoni fragments'), and the tomb's later excavations (by the Theban Mapping Project and the University of Basel's MISR project, 1990s–2010s) revealed that the tomb was cut into a geological fault — which is why its ceilings have collapsed in places.",
        ),
        reading(
          "kv5-the-sons-of-ramses",
          "KV5: The Sons of Ramesses",
          14,
          "The largest tomb in the valley — and its rediscovery.",
          "KV5, the tomb of the sons of Ramesses II, is the largest tomb in the valley: at least 120 chambers, a vast labyrinth of corridors and rooms built for the king's many sons. The tomb was known since the early 19th century (it was visited and partially cleared), but its true scale was revealed only in the 1990s by the Theban Mapping Project (led by Kent Weeks).\n\n \"The rediscovery is a lesson in the value of re-examining 'known' sites: the tomb had been dismissed as a minor, undecorated tomb — until the mapping revealed its true extent. The excavations found the remains of the princes (the mummies had been removed in antiquity), the canopic jars, and the ushabtis.\n\n \"KV5 is also a document of the royal family: the sons (some 50 are known from the monuments of Ramesses II) were buried in their father's tomb complex — the largest royal family tomb in Egypt — and the tomb's decoration (the scenes of the sons before the gods) records their names and their titles.",
        ),
        reading(
          "kv62-tutankhamun",
          "KV62: Tutankhamun",
          15,
          "The most intact royal tomb ever found.",
          "KV62, the tomb of Tutankhamun, is the most intact royal tomb ever found: discovered by Howard Carter in 1922, it contained over five thousand objects — the gold mask, the gilded shrines, the thrones, the chariots, the board games, and the everyday objects of the young king's household.\n\n \"The tomb is small for a royal tomb (its four chambers — the antechamber, the annexe, the treasury, and the burial chamber — cover about 110 square metres), which is why it was overlooked by the robbers and by the earlier excavators: it was cut into the base of the valley's floor, and it was hidden under the rubble of the later tomb KV9 (the tomb of Ramesses VI), whose spoil covered it.\n\n \"The tomb's integrity is relative: it had been robbed twice in antiquity (the robbers were caught, and the necropolis officials resealed it), and the objects were disturbed. But the near-completeness of the assemblage — the objects of a king's burial in their archaeological context — is what made the discovery the most important of the century.",
        ),
        reading(
          "the-mystery-of-kv55",
          "The Mystery of KV55",
          14,
          "The Amarna cache and the identity of its owner.",
          "KV55 is the most mysterious tomb in the valley: a small, badly damaged tomb found in 1907 by Edward Ayrton (working for Theodore Davis), containing a cache of objects of the Amarna period — the royal name of Akhenaten, the objects of Queen Tiye (his mother), the canopic jars of Kiya (a queen of Akhenaten), and the remains of a single mummy.\n\n \"The identity of the mummy (a young man, about 20 years old at death) is debated: the candidates include Akhenaten himself, Smenkhkare (his co-regent or successor), and other members of the Amarna royal family. The DNA evidence (the 2010 study) identified the mummy as a son of Amenhotep III and Tiye — and hence a brother of Tutankhamun's mother — but the identification with Akhenaten is contested by some scholars.\n\n \"KV55 is a document of the Amarna period's aftermath: the objects were brought from Amarna to Thebes, the tomb was re-used as a cache, and the mummy — whoever it was — was left behind when the royal mummies were moved to the caches. The mystery is the point: it shows how much of the Amarna period remains unresolved.",
        ),
      ],
    ),
    module(
      "the-study",
      "The Study",
      "Robbers, records, and conservation.",
      [
        reading(
          "the-robbing-of-the-tombs",
          "The Robbing of the Tombs",
          13,
          "Why nearly every royal tomb was emptied.",
          "Nearly every royal tomb in the valley was robbed in antiquity. The tombs were robbed within decades of the burials (the records of the Twentieth Dynasty — the Mayer Papyri and the Abbott Papyri — record the investigations of the robberies), and the robbers were often the workmen themselves: the necropolis workers, the guards, and the priests who knew the tombs.\n\n \"The robberies were systematic: the gold, the jewelry, the metal vessels, and the linen were taken; the stone sarcophagi (too heavy to move) were often broken open and left; and the mummies — valuable for their amulets — were stripped and left in their coffins. The later priests, in the Twenty-First Dynasty, gathered the royal mummies and re-wrapped them, moving them to the caches (DB320 at Deir el-Bahari and TT320) for safekeeping — which is how the great royal mummies survived at all.\n\n \"The lesson of the robberies: the wealth of the tombs was the cause of their loss. The hidden valley was hidden only as long as no one knew — and everyone in the village knew.",
        ),
        reading(
          "conservation-in-the-valley",
          "Conservation in the Valley",
          13,
          "The modern effort to preserve the tombs.",
          "The conservation of the valley is one of the great challenges of modern archaeology. The threats: the moisture (the breath and the sweat of the visitors, and the floods), the salts (the efflorescence that destroys the painted plaster), the microbiology (the 'black mold' that grows in the tombs), and the sheer number of visitors (KV62 alone has drawn millions).\n\n \"The responses: the limited visitor numbers, the replica tombs (the facsimile of the tomb of Seti I, made by Factum Arte and installed in the valley in 2014, and the replica of Tutankhamun's tomb for the visitors), the climate monitoring, and the conservation of the painted surfaces (the Theban Mapping Project's work, the Getty Conservation Institute's work on the tomb of Nefertari, and the Supreme Council of Antiquities' ongoing program).\n\n \"The conservation raises the central question of modern archaeology: how to preserve the sites for the future while allowing the public — and the scholars — to see them. The answer, in the valley, is a combination of the facsimile, the limits, and the science.",
        ),
        quiz("knowledge-check", "Knowledge Check", 10, "Test your understanding of the Valley of the Kings.", "quiz-valley-kings-1"),
      ],
    ),
  ],
});

const discovery = defineCourse({
  id: "course-discovery-tutankhamun-tomb",
  slug: "discovery-tutankhamun-tomb",
  title: "The Discovery of Tutankhamun's Tomb",
  subtitle: "1922 — the find that changed Egyptology",
  description:
    "The discovery of Tutankhamun's tomb in 1922 is the most famous archaeological discovery ever made. This course tells the story: the search, the find, the decade of excavation, and the consequences — for Egyptology, for the politics of antiquities, and for the public imagination.",
  shortDescription:
    "Carter, Carnarvon, the search, the discovery, and the decade that followed.",
  category: "discoveries",
  level: "beginner",
  instructorId: "instr-eva-rossi",
  coverImage: "/covers/cover-discovery.svg",
  learningOutcomes: [
    "Narrate the search for Tutankhamun's tomb",
    "Describe the sequence of the 1922 discovery",
    "Explain the methods Carter used",
    "Analyze the consequences of the find",
    "Separate the archaeology from the legend",
  ],
  requirements: ["No prior knowledge required."],
  tags: ["tutankhamun", "carter", "1922", "discovery", "carnarvon"],
  language: "English",
  publishedAt: "2025-05-01",
  updatedAt: "2025-06-10",
  modules: [
    module(
      "the-search",
      "The Search",
      "The valley, the excavators, and the belief that the tomb existed.",
      [
        video(
          "the-valley-before-carter",
          "The Valley Before Carter",
          14,
          "The state of the search by 1914.",
          "The Valley of the Kings was systematically excavated from the 1890s: by the Egypt Exploration Fund (under Flinders Petrie and others), by the American Theodore Davis (from 1902), and by the Metropolitan Museum's team (from 1906). By 1914, most of the valley's accessible tombs had been found — and the conventional wisdom was that nothing of major importance remained.\n\n \"Davis, who held the concession to excavate in the valley from 1902 to 1912, found the tombs of Yuya and Tjuyu (KV46, the parents of Queen Tiye — a spectacular find in 1905), the tomb of Horemheb (KV57), and the cache KV54 (the embalming materials of Tutankhamun). He concluded that the valley was exhausted — a judgment he published, and which nearly ended the search.\n\n \"Howard Carter — the inspector of monuments for Upper Egypt, and from 1907 the employee of Lord Carnarvon — disagreed. The KV54 cache proved that a royal burial had taken place in the valley; the foundation deposits (the ritual offerings buried at the tomb's entrance) suggested a royal tomb nearby; and the valley had not been fully cleared. Carter's conviction was based on evidence — and on stubbornness.",
        ),
        reading(
          "howard-carter-and-lord-carnarvon",
          "Howard Carter and Lord Carnarvon",
          14,
          "The excavator and his patron.",
          "Howard Carter (1874–1939) was the most able field archaeologist of his generation: trained as an artist, he had worked at Beni Hasan, at Amarna, and as the inspector of monuments for Upper Egypt (where his defense of the antiquities in the 1905 'Saqqara affair' ended his career in the service). In 1907, he was employed by George Herbert, the fifth Earl of Carnarvon — the wealthy aristocrat who had come to Egypt for his health and stayed for the archaeology.\n\n \"The partnership was productive: Carnarvon's money and Carter's method produced the discovery of the tombs of the nobles, the temple of Mentuhotep II at Deir el-Bahari (with the Egypt Exploration Fund), and the foundations of the search for Tutankhamun's tomb. The First World War interrupted the work; by 1922, Carnarvon had funded the search for fifteen years without a major find and was ready to withdraw.\n\n \"Carter persuaded him to fund one last season. The agreement was made: the 1922 season would be the last.",
        ),
        reading(
          "the-final-season",
          "The Final Season",
          13,
          "November 1922: the last chance.",
          "The 1922 season began in late October. Carter's team — the foreman Ahmed Gerigar, the water boy Hussein, and the gang of local workers — began clearing the area around the entrance of the tomb of Ramesses VI (KV9), in a triangle of ground that Davis had declared exhausted.\n\n \"On 4 November 1922, the water boy noticed a step cut in the bedrock. The workmen exposed the step; by the next day, the team had exposed a staircase of steps; and on the 5th, the top of a sealed doorway was revealed — sealed with the royal necropolis seals, and bearing the cartouche of Tutankhamun.\n\n \"Carter, in his diary, records the moment: 'At length... the top of a flight of steps... the sealing of the doorway... the cartouches of Tutankhamun.' He cabled Carnarvon in England: 'At last have made wonderful discovery in Valley; a magnificent tomb with seals intact; re-covered same for your arrival; congratulations.' The tomb had waited 3,200 years — and almost another season.",
        ),
      ],
    ),
    module(
      "the-discovery",
      "The Discovery",
      "The opening of the tomb, room by room.",
      [
        reading(
          "november-1922",
          "November 1922",
          15,
          "The first look, the first season, and the first photographs.",
          "The tomb's doorway was opened on 26 November 1922 — in the presence of Carnarvon and his daughter Lady Evelyn Herbert, and of Carter's team. Carter made a small hole in the second doorway (the 'breach' still visible today), and, holding a candle, looked into the antechamber. Carnarvon asked, 'Can you see anything?' Carter replied (in his later retelling), 'Yes, wonderful things.'\n\n \"The antechamber was a chaos of objects: the chariots, the beds, the chests, the statues, the shrines — crammed into a room of about 8 by 12 metres, in three layers (the 'hasty' arrangement of a tomb prepared in a hurry). The annexe, the treasury, and the burial chamber were opened in the following weeks and months.\n\n \"The excavation was methodical: Carter, with the photographer Harry Burton (the Metropolitan Museum's photographer, whose glass-plate photographs are the visual record of the discovery), recorded every object in situ, numbered them, conserved them, and described them. The work took ten years — the excavation of the tomb and the publication of it (the three-volume 'The Tomb of Tutankhamun', published 1923–1933).",
        ),
        gallery(
          "the-rooms-of-the-tomb",
          "The Rooms of the Tomb",
          16,
          "A visual tour of the four chambers of KV62.",
          [
            "/gallery/discovery-1.svg",
            "/gallery/discovery-2.svg",
            "/gallery/discovery-3.svg",
            "/gallery/discovery-4.svg",
          ],
          "The tomb of Tutankhamun had four chambers:\n\n1. The antechamber: the largest room, filled with the chariots, the beds, the chests, the thrones, and the shrines — the household of a king, crammed in three layers.\n\n2. The annexe: a small, unfinished room (its walls were not even plastered) containing the everyday objects: the boxes of food, the game boards, the linen, the tools, the oils, the wines.\n\n3. The treasury: the room that held the canopic chest (the guardian statues of the goddesses Selket, Neith, and Isis, and the god Anubis — the beautiful gilded figures found in situ), and the 'opening of the mouth' ritual implements.\n\n4. The burial chamber: the room of the gilded shrines — four nested shrines around the sarcophagus, the three coffins, and the mummy with the famous gold mask.\n\nThe arrangement is the archaeology of the find: the objects were in their context, and the context — disturbed by the ancient robbers and resealed by the necropolis officials — is what made the discovery scientifically valuable.",
        ),
        reading(
          "the-contents-of-kv62",
          "The Contents of KV62",
          15,
          "Five thousand objects, and what they tell us.",
          "The tomb contained over five thousand objects: the furniture (the thrones, the beds, the chests), the chariots (six, including the famous 'chariot of Tutankhamun'), the weapons (the bows, the arrows, the daggers — one of iron, from meteoritic iron, and one of gold), the board games (senet, and the 'game of twenty squares'), the jewelry, the clothing, the food (the jars of wine, the dried meats, the seeds), the cosmetics (the oils, the unguents), and the funerary objects (the shrines, the coffins, the mask).\n\n \"The objects tell the story of the reign: the objects made for a king (the thrones, the shrines) and the objects usurped from others (some objects bear the name of Neferneferuaten or of Smenkhkare — evidence of the succession crisis that followed Akhenaten's death). The mask, the coffins, and the shrines were made in haste: the tomb was small, the objects were crammed, and some were adapted from other kings' equipment.\n\n \"The contents are the most complete picture of a royal burial in existence — and the most complete picture of the craft, the religion, and the daily life of the New Kingdom court.",
        ),
      ],
    ),
    module(
      "the-consequences",
      "The Consequences",
      "Tut-mania, the politics of the find, and the legacy.",
      [
        reading(
          "tut-mania",
          "'Tut-mania'",
          13,
          "The discovery and the popular imagination.",
          "The discovery of Tutankhamun's tomb became a global sensation. The 1920s — the age of the mass newspaper and the newsreel — made the story international: the 'curse of the pharaohs' (the myth, fed by the death of Lord Carnarvon in 1923 and by the press), the exhibitions of the finds (in Cairo, then in London, and in the 1970s, the worldwide tour that drew eight million visitors), and the 'Tut-mania' of the popular culture (the fashion, the music, the Art Deco revival of the Egyptian motifs).\n\n \"The myth of the 'curse' deserves a clear answer: no curse was inscribed in the tomb (the 'curse' is a modern invention); the deaths of the excavators (Carnarvon, and the members of the team) have mundane explanations (Carnarvon died of an infected mosquito bite, and the average age of the team's members was unremarkable); and Howard Carter — who opened the tomb — lived until 1939.\n\n \"The legacy of the myth is more serious: it obscured the real achievement — a decade of careful excavation — and it fed the popular image of Egypt as a land of mystery and magic, rather than as the subject of a rigorous discipline.",
        ),
        reading(
          "the-legacy-of-the-find",
          "The Legacy of the Find",
          14,
          "The consequences for Egyptology and for the ownership of antiquities.",
          "The discovery had three lasting consequences. First, for Egyptology: the find transformed the public and the funding of the discipline, and the publication of the tomb (Carter's three volumes) became the model for the recording of a tomb — the standard of the modern excavation report.\n\n \"Second, for the politics of antiquities: the discovery came in 1922, the year of the Egyptian revolution (1919) and the nominal independence of Egypt. The Egyptian government — now a sovereign state — asserted its ownership of the finds: the tomb's contents went entirely to the Egyptian state (unlike the partage finds of the past), and the Egyptian Museum in Cairo became their home. The era of the foreign excavation and the division of finds was ending.\n\n \"Third, for the culture: the objects of Tutankhamun became the most famous antiquities in the world — the icons of a civilization, and the proof (for the public) that archaeology matters. The find made Egyptology a subject of universal interest, and it made the argument for the preservation of the heritage.",
        ),
        quiz("knowledge-check", "Knowledge Check", 10, "Test your understanding of the discovery of Tutankhamun's tomb.", "quiz-discovery-1"),
      ],
    ),
  ],
});

const dailyLife = defineCourse({
  id: "course-daily-life-ancient-egypt",
  slug: "daily-life-ancient-egypt",
  title: "Daily Life in Ancient Egypt",
  subtitle: "Households, work, food, family, and law",
  description:
    "Monumental history records kings and gods; the everyday record preserves everyone else. This course reconstructs the ordinary world of ancient Egypt — the houses, the food, the work, the families, the disputes, and the games — from the letters, receipts, and village records that the Egyptians left behind.",
  shortDescription:
    "The everyday world of ancient Egypt, from the village records.",
  category: "daily-life",
  level: "beginner",
  instructorId: "instr-omar-farouk",
  coverImage: "/covers/cover-daily-life.svg",
  learningOutcomes: [
    "Describe the Egyptian house and household",
    "Reconstruct the diet and the food of the period",
    "Explain the work of farmers, scribes, and artisans",
    "Discuss family, marriage, and the legal rights of women",
    "Read the village records as historical evidence",
  ],
  requirements: ["No prior knowledge required."],
  tags: ["daily life", "deir el-medina", "food", "family", "law"],
  language: "English",
  publishedAt: "2025-05-01",
  updatedAt: "2025-06-10",
  modules: [
    module(
      "the-village",
      "The Village",
      "Homes, households, and the food of Egypt.",
      [
        video(
          "a-day-in-the-life",
          "A Day in the Life",
          14,
          "The rhythms of an ordinary Egyptian day.",
          "The ordinary Egyptian day was governed by the sun and the seasons. The day began at dawn; the morning was for work — in the fields, in the workshops, in the houses; the hottest hours were for rest; the evening was for the family, the food, and the beer.\n\n \"The year was the three seasons: Akhet (the inundation, when the fields were under water and the farmers worked on the state's building projects), Peret (the growing season), and Shemu (the harvest). The week was ten days (the Egyptian week), with a rest day at the end; the month was thirty days, and the year 365.\n\n \"The evidence for the day: the village records (the Deir el-Medina workmen's ostraca record the days worked, the days absent, and the reasons — illness, the festivals, and the 'drinking day'), the letters, the receipts, and the tomb scenes. The ordinary day is the best-documented of any ancient civilization.",
        ),
        reading(
          "homes-and-households",
          "Homes and Households",
          13,
          "The mudbrick house and the family that lived in it.",
          "The Egyptian house was built of mudbrick (the Nile mud, mixed with straw and dried in the sun), with a flat roof (used as a sleeping place in the hot months), a central room (the reception room), and the side rooms. The houses of the nobles (as preserved at Amarna and Deir el-Medina) had painted walls, wooden columns, and gardens; the houses of the poor were one or two rooms.\n\n \"The household was the extended family: the parents, the children, the grandchildren, and (in the larger houses) the servants. The family was the basic economic unit — the land, the tools, and the food were held by the household, and the inheritance passed through the family (with the women, in some periods, inheriting equally with men).\n\n \"The furniture was simple: the low beds (with the headrest — a curved pillow of wood or stone, used instead of a soft pillow), the low stools, the boxes, the baskets, and the pottery. The toilet was the limestone seat over a pit; the cosmetics (the kohl for the eyes, the oils for the skin) were the daily necessities of every class.",
        ),
        reading(
          "food-and-drink",
          "Food and Drink",
          14,
          "Bread, beer, onions, and the feasts of the rich.",
          "The Egyptian diet was based on bread and beer — the two staples, made from emmer wheat and barley, and eaten at every meal by every class. The bread (leavened and unleavened, in dozens of shapes) was so gritty (the flour contained sand from the milling) that the teeth of the ancient Egyptians were worn down — a fact visible in the mummies and the skeletal remains.\n\n \"The rest of the diet: the onions, the garlic, the leeks, the lentils, the beans, the cucumbers, the lettuce, the melons, the figs, the grapes, and the dates; the fish and the fowl (the ducks, the geese, the pigeons); and the meat (the beef, the mutton, the goat, and the pork — though the pork was less favored) on the occasions of the rich. The desserts were the honey, the dates, and the dried fruits.\n\n \"The beer (a thick, nutritious drink, drunk through a straw) was the daily drink of all classes; the wine (the grape wine of the Delta and the oases) was the drink of the feast, and its jars were labeled with the vintage, the vineyard, and the quality. The feast was the occasion of the music, the dance, the flowers, and the perfumes.",
        ),
      ],
    ),
    module(
      "work",
      "Work",
      "The farmers, the scribes, and the artisans.",
      [
        reading(
          "farmers-and-the-flood",
          "Farmers and the Flood",
          13,
          "The agriculture of the Nile Valley.",
          "The farmer's year followed the flood. In Akhet (the inundation), the fields were under water — the farmers worked on the state's projects (the building, the quarrying, the mining). In Peret (the emergence), the crops were sown in the moist silt: the emmer wheat and the barley, the flax (for the linen), and the vegetables. In Shemu (the harvest), the crops were cut, threshed, and stored.\n\n \"The agriculture was the foundation of the economy: the Nile's flood determined the year's harvest, and the tax (the 'bed-and-field' assessment, recorded in the cadastral surveys of the Middle Kingdom) was based on the acreage and the expected yield. The farmer paid the tax in grain, and the grain was the currency of the state.\n\n \"The tools were simple: the wooden plow (pulled by oxen), the sickle (with its flint, later bronze, blades), the shaduf (the lever for raising water, introduced in the New Kingdom), and the winnowing basket. The picture of the farmer's life — the hard work, the small surpluses, the vulnerability to the flood — is the picture of the majority of the ancient population.",
        ),
        reading(
          "scribes-and-administration",
          "Scribes and Administration",
          13,
          "The literate class and the machinery of the state.",
          "The scribe was the literate class of ancient Egypt: the writer, the accountant, the letter-writer, the priest, and the official. The scribal training (in the 'House of Life', the temple school, and the palace school) was long — the student copied the texts, the letters, and the literary classics — and the scribe's tools (the palette, the reed pens, the ink, the papyrus, and the ostraca) were the instruments of the administration.\n\n \"The administration was the state: the vizier (the 'tjaty', the chief minister), the overseers of the departments (the treasury, the granary, the works, the cattle, the labor), the scribes of every level, and the record-keepers. The documents — the ration lists, the tax records, the legal texts, the letters — were the state's memory, and the scribe was its custodian.\n\n \"The scribe's status was high: the 'Instructions of Kagemni' and the 'Satire of the Trades' (a Middle Kingdom text) advise the student to become a scribe rather than a craftsman — 'the scribe is the one who directs the work of all'. The irony is that most of what we know about the 'lower' classes comes through the scribes' records.",
        ),
        reading(
          "artisans-of-deir-el-medina",
          "The Artisans of Deir el-Medina",
          14,
          "The village of the tomb-builders and its records.",
          "Deir el-Medina is the village of the artisans who built the royal tombs in the Valley of the Kings — the 'Servants in the Place of Truth'. The village (occupied for about four centuries, c. 1550–1080 BCE) housed some 60–120 people at its peak: the workmen, their families, and the servants, in a walled community of about 70 houses.\n\n \"The work: the cutting and decorating of the royal tombs, in two teams (the 'Left Side' and the 'Right Side', each with its own foreman and scribe), working in shifts of ten days. The records — the ostraca, the papyri, the workmen's journals — record the days worked, the delays, the rations, and the disputes, in a detail that makes Deir el-Medina the best-documented community of the ancient world.\n\n \"The finds: the letters (the correspondence of the workmen with their families), the legal texts (the marriage contracts, the wills, the adoption records), the school texts, the literary papyri (the copies of the Tale of Sinuhe and the Contendings of Horus and Set), and the medical texts (the remedies and the 'incantations' of the village).",
        ),
      ],
    ),
    module(
      "society",
      "Society",
      "Family, law, and the games of Egypt.",
      [
        reading(
          "family-and-marriage",
          "Family and Marriage",
          13,
          "The Egyptian family and the marriage contract.",
          "The Egyptian family was the basic social unit: the parents, the children, and the extended household. The marriage (usually monogamous, though the higher classes practiced polygamy) was a contract — the marriage contracts (the papyri from Elephantine and the Demotic contracts) record the property each spouse brought, the maintenance of the wife, and the terms of the divorce.\n\n \"The women's position was comparatively strong: they could own and dispose of property, inherit (often equally with brothers), initiate divorce, and testify in court. The marriage contract of the woman 'Henu' (Elephantine, Ptolemaic period) and the records of the Deir el-Medina families are the evidence — the women appear as parties, as heirs, as litigants, and as owners.\n\n \"The children were the care of the household; the high infant mortality (the skeletal and the demographic evidence) made the family's size a practical matter; and the education of the boys (in the scribal schools) and the girls (at home, in the household arts) followed the class lines.",
        ),
        reading(
          "law-and-dispute",
          "Law and Dispute",
          14,
          "The courts, the contracts, and the strike.",
          "The Egyptian law was a mixture of the royal decrees, the custom, and the decisions of the courts. The courts: the local courts (the kenbet, the 'gate' courts at the temple gates), the vizier's court (the 'djadjat'), and the great tribunals (the 'court of the necropolis', which tried the tomb robbers). The procedure: the plaintiff and the defendant presented their cases, the witnesses were examined (the oaths before the gods), and the scribes recorded the verdicts.\n\n \"The records: the legal papyri (the Great Harris Papyrus, the Wilbour Papyrus, the records of the tomb-robbery trials — the Abbott and Mayer Papyri), the contracts (the marriage, the loan, the sale, the lease), and the court records. The Deir el-Medina records include the earliest recorded labor dispute: the strike of the workmen (in the reign of Ramesses III) when their grain rations were delayed — the 'Turin strike papyrus'.\n\n \"The punishment: the fines, the beatings, the mutilation (the nose and the ears, for the serious crimes), the forced labor, and (for the treason and the grave robbery) the death. The law was the king's justice — the king as the 'living Horus', the source of the maat — but the administration of it was in the hands of the officials, whose records are the evidence of both the justice and its limits.",
        ),
        reading(
          "games-and-entertainment",
          "Games and Entertainment",
          12,
          "Senet, music, dance, and the parties of the living.",
          "The Egyptians played games: senet (the 'game of passing', the most popular board game, played from the Early Dynastic period to the Roman period — the rules are reconstructed but not fully certain), the 'game of twenty squares' (played in the Levant and Egypt), the 'game of the geese' (mehen), and the games of the children (the dolls, the balls, the hoops, the tops, and the rattles).\n\n \"The entertainment of the feast: the musicians (the harp, the lute, the lyre, the flute, the double-pipe, the sistrum, and the clappers), the dancers, the acrobats, and the singers — the scenes of the feasts (in the tombs of the nobles) show the guests, the concubines, the flowers, and the perfumes of the party. The music and the dance were the occupations of the professionals (the 'chantresses' of Amun at Thebes were an institution).\n\n \"The board games had a religious meaning: senet was associated with the journey of the dead through the underworld (the 'Book of the Dead' of the New Kingdom shows the dead playing senet), and the game boards were placed in the tombs. The game was both a pastime and a ritual — the double meaning is typical of the Egyptian integration of the sacred and the ordinary.",
        ),
        quiz("knowledge-check", "Knowledge Check", 10, "Test your understanding of daily life in ancient Egypt.", "quiz-daily-life-1"),
      ],
    ),
  ],
});

export const coursesC: Course[] = [
  artSymbolism,
  temples,
  tombs,
  archaeology,
  valleyKings,
  discovery,
  dailyLife,
];
