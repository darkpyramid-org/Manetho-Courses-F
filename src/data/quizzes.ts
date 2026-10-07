import type { Quiz } from "@/types";

/*
 * Quiz bank. Every quiz question includes an educational
 * explanation, and answers are written to reward careful
 * reading of the lessons rather than trivia.
 */

export const quizzes: Quiz[] = [
  {
    id: "quiz-foundations-1",
    courseId: "course-ancient-egypt-foundations",
    title: "Foundations of Ancient Egypt — Knowledge Check",
    description:
      "Test your understanding of the Nile, the periods, and the sources.",
    questions: [
      {
        id: "q-f1-1",
        type: "single",
        prompt:
          "Which feature most directly shaped where ancient Egyptian civilization developed?",
        options: [
          "The Mediterranean coastline",
          "The Nile River and its floodplain",
          "The Red Sea trade routes",
          "The oases of the Western Desert",
        ],
        correctOptions: [1],
        explanation:
          "Egyptian civilization developed along the narrow floodplain of the Nile. The river provided water, fertile silt after the annual flood, and a transport route — everything needed to support a dense agricultural population in the desert.",
      },
      {
        id: "q-f1-2",
        type: "boolean",
        prompt:
          "In Egyptian geography, 'Upper Egypt' refers to the northern Delta region.",
        options: ["True", "False"],
        correctOptions: [1],
        explanation:
          "Upper Egypt is the southern, upriver stretch of the Nile Valley; Lower Egypt is the northern Delta. The orientation confuses many learners because 'upper' means upstream (south), not north.",
      },
      {
        id: "q-f1-3",
        type: "single",
        prompt:
          "The traditional division of Egyptian history into 'dynasties' comes from:",
        options: [
          "Modern archaeologists in the 20th century",
          "The inscriptions found in the Valley of the Kings",
          "Manetho, an Egyptian priest writing in the third century BCE",
          "The Rosetta Stone",
        ],
        correctOptions: [2],
        explanation:
          "Manetho, an Egyptian priest of the third century BCE, wrote a history of Egypt in Greek that divided rulers into dynasties. His work survives only in quotation by later writers, and some of his groupings do not reflect family relationships as modern historians would define them.",
      },
      {
        id: "q-f1-4",
        type: "multiple",
        prompt:
          "Which of the following are reasons historians treat Egyptian dates with caution? (Select all that apply.)",
        options: [
          "Manetho's account was written centuries after many of the events it describes",
          "Astronomical observations used for dating can only be anchored if the observation site is known",
          "The Egyptians left no records at all",
          "Radiocarbon dating has margins of error that grow with age",
        ],
        correctOptions: [0, 1, 3],
        explanation:
          "The Egyptians left extensive records — the caution comes from interpretation, not absence. Manetho wrote late, Sothic (Sirius) observations need a known site, and radiocarbon dating has growing uncertainty for older samples. Dates for the early periods can therefore vary by decades between scholarly conventions.",
      },
      {
        id: "q-f1-5",
        type: "single",
        prompt:
          "What is the 'Kemet' the Egyptians called their country generally translated as?",
        options: [
          "The Land of the Pharaoh",
          "The Black Land",
          "The Gift of the River",
          "The Eternal Land",
        ],
        correctOptions: [1],
        explanation:
          "Kemet is usually translated 'the Black Land', referring to the dark silt deposited by the Nile flood — the fertile soil that made agriculture possible. The contrast with 'Deshret', the red desert, was fundamental to how Egyptians saw their world.",
      },
    ],
  },
  {
    id: "quiz-dynasties-1",
    courseId: "course-egyptian-dynasties-explained",
    title: "Egyptian Dynasties Explained — Knowledge Check",
    description: "Periods, transitions, and the evidence behind them.",
    questions: [
      {
        id: "q-d1-1",
        type: "single",
        prompt:
          "Which period is generally associated with the construction of the Great Pyramid at Giza?",
        options: [
          "The Early Dynastic Period",
          "The Old Kingdom",
          "The Middle Kingdom",
          "The New Kingdom",
        ],
        correctOptions: [1],
        explanation:
          "The Great Pyramid is generally dated to the reign of Khufu (Cheops) of the Fourth Dynasty, during the Old Kingdom (c. 2686–2181 BCE). Exact absolute dates vary by several decades depending on the chronology used.",
      },
      {
        id: "q-d1-2",
        type: "multiple",
        prompt:
          "Which of these periods are classified as 'intermediate' periods of division? (Select all that apply.)",
        options: [
          "First Intermediate Period",
          "Second Intermediate Period",
          "Third Intermediate Period",
          "The Amarna Period",
        ],
        correctOptions: [0, 1, 2],
        explanation:
          "Three Intermediate Periods mark times when central authority fragmented: after the Old Kingdom, after the Middle Kingdom, and after the New Kingdom. The Amarna Period, by contrast, was a phase within the New Kingdom — a religious and artistic upheaval under Akhenaten, not a collapse of the state.",
      },
      {
        id: "q-d1-3",
        type: "boolean",
        prompt:
          "The First Intermediate Period is known for a wealth of detailed narrative histories written at the time.",
        options: ["True", "False"],
        correctOptions: [1],
        explanation:
          "The First Intermediate Period is one of the least documented eras. Later Egyptian tradition framed it as chaos, and some lamentation texts survive, but there is almost no contemporary narrative history — a good example of how absence of evidence limits what scholars can say.",
      },
      {
        id: "q-d1-4",
        type: "single",
        prompt:
          "The New Kingdom is often called the 'empire age' because:",
        options: [
          "Egypt extended its control into the Levant and Nubia",
          "It was the first period with a written language",
          "It was the only period with a professional army",
          "The pharaohs adopted Greek as the court language",
        ],
        correctOptions: [0],
        explanation:
          "During the New Kingdom (c. 1550–1069 BCE), especially under the Eighteenth and Nineteenth Dynasties, Egypt controlled territory stretching into the Levant and deep into Nubia. This expansion brought wealth, tribute, and the great building programmes at Thebes.",
      },
      {
        id: "q-d1-5",
        type: "single",
        prompt:
          "Which dynasty did the priest Manetho's framework NOT reliably preserve as a true family line?",
        options: [
          "All dynasties are verified family lines",
          "Some of his 'dynasties' group rulers who were not related",
          "Only the Ptolemaic dynasty",
          "None of the above",
        ],
        correctOptions: [1],
        explanation:
          "Modern scholarship recognizes that some of Manetho's dynasties group kings from different families or regions, and some families are split across his dynasties. The system remains useful as a chronological scaffold, but it is not a genealogy.",
      },
    ],
  },
  {
    id: "quiz-pharaohs-1",
    courseId: "course-the-pharaohs-of-egypt",
    title: "The Pharaohs of Egypt — Knowledge Check",
    description: "Kingship, titulary, and the royal office.",
    questions: [
      {
        id: "q-p1-1",
        type: "single",
        prompt:
          "A royal cartouche is:",
        options: [
          "A type of pyramid chamber",
          "An oval enclosure surrounding a royal name",
          "A ceremonial beard worn by the king",
          "A tax record from the New Kingdom",
        ],
        correctOptions: [1],
        explanation:
          "A cartouche is the oval ring enclosing the king's throne name and birth name. The term is modern; Egyptians called it something like 'the ring of the king'.",
      },
      {
        id: "q-p1-2",
        type: "multiple",
        prompt:
          "Which roles did the pharaoh theoretically embody? (Select all that apply.)",
        options: [
          "Chief priest of the temples",
          "Supreme judge",
          "Military commander",
          "Elected representative of the people",
        ],
        correctOptions: [0, 1, 2],
        explanation:
          "The king was the link between gods and people, the highest judge, and the commander of the army. Kingship was not elective in the modern sense — it was usually inherited, though the succession was not always peaceful or clearly fixed.",
      },
      {
        id: "q-p1-3",
        type: "boolean",
        prompt:
          "The word 'pharaoh' was the standard term for the king from the first dynasty onward.",
        options: ["True", "False"],
        correctOptions: [1],
        explanation:
          "'Pharaoh' originally meant 'great house' (the palace) and became a form of address for the ruler in later periods. Early kings were more often referred to by their Horus name or simply as 'king'.",
      },
      {
        id: "q-p1-4",
        type: "single",
        prompt:
          "The five-name royal titulary became standard in which period?",
        options: [
          "The Predynastic Period",
          "The Middle Kingdom onward",
          "The Ptolemaic Period only",
          "The Roman Period",
        ],
        correctOptions: [1],
        explanation:
          "The full five-name titulary (Horus name, Two Ladies name, Golden Horus name, throne name, birth name) was standard from the Middle Kingdom onward, though its elements existed earlier.",
      },
      {
        id: "q-p1-5",
        type: "single",
        prompt:
          "Why should royal inscriptions be read critically?",
        options: [
          "They were written in a secret code",
          "They are official proclamations meant to glorify the king, not neutral reporting",
          "They were always written centuries after the events",
          "They only record defeats and disasters",
        ],
        correctOptions: [1],
        explanation:
          "Royal inscriptions are propaganda in the technical sense: official texts designed to present the king's reign in the best light. Battles are always victories, and enemies are always defeated. They are evidence — but of ideology and self-presentation, not of objective events.",
      },
    ],
  },
  {
    id: "quiz-old-kingdom-1",
    courseId: "course-the-old-kingdom",
    title: "The Old Kingdom — Knowledge Check",
    description: "The pyramid age and its evidence.",
    questions: [
      {
        id: "q-ok-1",
        type: "single",
        prompt:
          "The Step Pyramid of Djoser at Saqqara is significant because it:",
        options: [
          "Was the first large-scale stone building in Egypt",
          "Was built by Ramesses II",
          "Is the largest pyramid in Egypt",
          "Contained the Rosetta Stone",
        ],
        correctOptions: [0],
        explanation:
          "Djoser's Step Pyramid (Third Dynasty, designed by the architect Imhotep) is generally considered the first monumental stone building in Egypt. It began as a mastaba and grew into six stacked steps — a crucial experiment before the true pyramids.",
      },
      {
        id: "q-ok-2",
        type: "boolean",
        prompt:
          "The pyramids at Giza were most likely built by enslaved laborers.",
        options: ["True", "False"],
        correctOptions: [1],
        explanation:
          "Archaeological evidence — the workers' village at Giza, burial plots near the pyramids, and evidence of organized labour and rations — supports a workforce of skilled and seasonal labourers, not slaves. The 'slave' narrative comes from much later accounts, including Herodotus.",
      },
      {
        id: "q-ok-3",
        type: "single",
        prompt:
          "Which pharaoh is generally credited with the Great Pyramid of Giza?",
        options: ["Khafre", "Menkaure", "Khufu", "Sneferu"],
        correctOptions: [2],
        explanation:
          "The Great Pyramid is attributed to Khufu (Cheops) of the Fourth Dynasty. Khafre's pyramid is the one beside it, associated (with debate) with the Great Sphinx, and Menkaure's is the smallest of the three.",
      },
      {
        id: "q-ok-4",
        type: "multiple",
        prompt:
          "Which statements about pyramid construction are supported by evidence? (Select all that apply.)",
        options: [
          "Quarry marks and tool finds show organized stone-cutting",
          "A workers' village existed at Giza",
          "The exact ramp system used is still debated",
          "The pyramids were built with modern machinery",
        ],
        correctOptions: [0, 1, 2],
        explanation:
          "The evidence for organized labour is strong, but the precise engineering — straight ramps, spiral ramps, or internal ramps — remains a genuine scholarly debate. Anyone claiming certainty about the method is going beyond the evidence.",
      },
      {
        id: "q-ok-5",
        type: "single",
        prompt:
          "The Pyramid Texts are:",
        options: [
          "Hieroglyphic lessons for scribes",
          "Funerary spells carved inside Old Kingdom pyramids",
          "A list of pyramid builders",
          "Tax records from the Fourth Dynasty",
        ],
        correctOptions: [1],
        explanation:
          "The Pyramid Texts, carved in the chambers of late Old Kingdom pyramids, are among the oldest religious texts in the world. They evolved into the Coffin Texts of the Middle Kingdom and later the Book of the Dead.",
      },
    ],
  },
  {
    id: "quiz-middle-kingdom-1",
    courseId: "course-the-middle-kingdom",
    title: "The Middle Kingdom — Knowledge Check",
    description: "Reunification, literature, and classical Egyptian.",
    questions: [
      {
        id: "q-mk-1",
        type: "single",
        prompt:
          "The Middle Kingdom began with reunification under which line of rulers?",
        options: [
          "The kings of Memphis",
          "The Theban rulers of the Eleventh Dynasty",
          "The Hyksos kings of the Delta",
          "The Ptolemaic dynasty",
        ],
        correctOptions: [1],
        explanation:
          "The Middle Kingdom (c. 2055–1650 BCE) opened with the Theban rulers of the Eleventh Dynasty, especially Mentuhotep II, who reunified Egypt after the First Intermediate Period.",
      },
      {
        id: "q-mk-2",
        type: "single",
        prompt:
          "Middle Egyptian is important to language students because it:",
        options: [
          "Is the only stage of Egyptian with vowels",
          "Was the classical written stage used for literature and monumental inscriptions",
          "Is identical to Coptic",
          "Was used only for tax records",
        ],
        correctOptions: [1],
        explanation:
          "Middle Egyptian is the classical stage of the language. It remained a prestigious written medium long after it ceased to be spoken — much like Latin in medieval Europe — which is why it is the stage taught first to students of hieroglyphs.",
      },
      {
        id: "q-mk-3",
        type: "boolean",
        prompt:
          "The Story of Sinuhe is a modern historical novel about Egypt.",
        options: ["True", "False"],
        correctOptions: [1],
        explanation:
          "The Story of Sinuhe is an ancient Egyptian literary tale from the Middle Kingdom, often called a masterpiece of Egyptian literature. It recounts the flight and return of a court official — and it is a work of literature, not a chronicle.",
      },
      {
        id: "q-mk-4",
        type: "single",
        prompt:
          "The Second Intermediate Period is associated with:",
        options: [
          "The construction of the Great Pyramid",
          "The rule of Hyksos kings in the Delta alongside Theban rulers",
          "The reign of Cleopatra",
          "The building of the Great Hypostyle Hall",
        ],
        correctOptions: [1],
        explanation:
          "During the Second Intermediate Period, Egypt was divided between Theban kings in the south and the Hyksos, whose capital was at Avaris in the Delta. Manetho later framed this as an invasion; the reality was probably more complex.",
      },
      {
        id: "q-mk-5",
        type: "multiple",
        prompt:
          "Which of these are Middle Kingdom achievements or characteristics? (Select all that apply.)",
        options: [
          "A flourishing of literature, including tales and wisdom texts",
          "The classical Middle Egyptian language",
          "The first use of hieroglyphs",
          "Expansion into Nubia under the Twelfth Dynasty",
        ],
        correctOptions: [0, 1, 3],
        explanation:
          "Hieroglyphs long predate the Middle Kingdom (they appear in the late fourth millennium BCE). The Middle Kingdom is known for its literature, the classical language, and the Twelfth Dynasty's expansion into Nubia and its fortresses there.",
      },
    ],
  },
  {
    id: "quiz-new-kingdom-1",
    courseId: "course-the-new-kingdom",
    title: "The New Kingdom — Knowledge Check",
    description: "The empire age at Thebes.",
    questions: [
      {
        id: "q-nk-1",
        type: "single",
        prompt:
          "Which city served as the capital of the New Kingdom?",
        options: ["Memphis", "Alexandria", "Thebes (modern Luxor)", "Avaris"],
        correctOptions: [2],
        explanation:
          "Thebes (modern Luxor) was the capital and religious heart of the New Kingdom. Its temples — Karnak and Luxor — and its necropolis, the Valley of the Kings, are the era's defining monuments.",
      },
      {
        id: "q-nk-2",
        type: "single",
        prompt:
          "The Great Hypostyle Hall at Karnak is famous for:",
        options: [
          "Its 134 massive columns",
          "Being built entirely of gold",
          "Its underground library",
          "Its glass windows",
        ],
        correctOptions: [0],
        explanation:
          "The Great Hypostyle Hall at Karnak contains 134 columns arranged in sixteen rows, with the central columns rising to about 21 metres. It is one of the largest covered spaces of the ancient world.",
      },
      {
        id: "q-nk-3",
        type: "boolean",
        prompt:
          "The Battle of Kadesh, fought under Ramesses II, is recorded only in Egyptian sources that present it as a decisive victory.",
        options: ["True", "False"],
        correctOptions: [0],
        explanation:
          "The Battle of Kadesh (c. 1274 BCE) against the Hittites is documented in Egyptian sources — including the 'Poem' and the 'Bulletin' — which present it as a great triumph. A later Egyptian-Hittite peace treaty, and Hittite versions of events, suggest a more complicated outcome. This is why cross-checking sources matters.",
      },
      {
        id: "q-nk-4",
        type: "multiple",
        prompt:
          "Which rulers belong to the New Kingdom? (Select all that apply.)",
        options: [
          "Hatshepsut",
          "Akhenaten",
          "Tutankhamun",
          "Khufu",
        ],
        correctOptions: [0, 1, 2],
        explanation:
          "Khufu belongs to the Old Kingdom, some thirteen centuries before the New Kingdom. Hatshepsut, Akhenaten, and Tutankhamun were all Eighteenth Dynasty rulers of the New Kingdom.",
      },
      {
        id: "q-nk-5",
        type: "single",
        prompt:
          "What is the 'Amarna Period'?",
        options: [
          "The era of the pyramid builders",
          "The reign of Akhenaten and its religious and artistic upheaval",
          "The final century of native rule",
          "The Ptolemaic golden age",
        ],
        correctOptions: [1],
        explanation:
          "The Amarna Period centres on Akhenaten's reign, when the Aten (sun disk) was elevated above other gods, the capital moved to Tell el-Amarna, and art adopted a distinctive naturalistic style. Whether this constituted a 'monotheistic revolution' or a shift in emphasis remains debated.",
      },
    ],
  },
  {
    id: "quiz-hatshepsut-1",
    courseId: "course-hatshepsut-female-kingship",
    title: "Hatshepsut and Female Kingship — Knowledge Check",
    description: "The woman who ruled as king.",
    questions: [
      {
        id: "q-hs-1",
        type: "boolean",
        prompt:
          "Hatshepsut ruled Egypt as a king in her own right, not merely as a regent.",
        options: ["True", "False"],
        correctOptions: [0],
        explanation:
          "Hatshepsut initially acted as regent for the young Thutmose III, but she then adopted the full royal titulary and ruled as king for roughly two decades. She is one of the very few women to do so in ancient Egypt.",
      },
      {
        id: "q-hs-2",
        type: "single",
        prompt:
          "How is Hatshepsut usually depicted in her own monuments?",
        options: [
          "Always in female dress with feminine titles",
          "Often in the iconography of kingship, including the false beard and kilt",
          "Only in statues, never in reliefs",
          "Hidden from public view",
        ],
        correctOptions: [1],
        explanation:
          "Hatshepsut was frequently depicted in the visual conventions of kingship — the kilt, the crown, and sometimes the false beard. This was ideological, not disguise: kingship was male-coded, and she claimed the office in its established form. In some texts she is also referred to as female.",
      },
      {
        id: "q-hs-3",
        type: "single",
        prompt:
          "Hatshepsut's mortuary temple is located at:",
        options: ["Giza", "Deir el-Bahari", "Saqqara", "Abydos"],
        correctOptions: [1],
        explanation:
          "Her temple, Djeser-Djeseru ('Holy of Holies'), sits against the cliffs at Deir el-Bahari near Thebes. It is one of the masterpieces of Egyptian architecture.",
      },
      {
        id: "q-hs-4",
        type: "boolean",
        prompt:
          "There is clear evidence that Hatshepsut was immediately overthrown in a violent coup at the end of her reign.",
        options: ["True", "False"],
        correctOptions: [1],
        explanation:
          "The end of Hatshepsut's reign is not documented. Later, her monuments were damaged and her name erased in places — but the timing and motive are debated, and some damage may have occurred decades later, possibly for reasons of succession politics rather than personal hatred.",
      },
      {
        id: "q-hs-5",
        type: "multiple",
        prompt:
          "Which statements about female rulers in Egypt are accurate? (Select all that apply.)",
        options: [
          "Hatshepsut is among the very few women to rule as king",
          "Women could hold high status and own property in Egyptian law",
          "Egyptian history contains no other female rulers at all",
          "Some women, like Sobekneferu and Twosret, also ruled as king",
        ],
        correctOptions: [0, 1, 3],
        explanation:
          "Hatshepsut, Sobekneferu, and Twosret (and possibly others like Nitocris, whose existence is debated) ruled as kings. Separately, women in Egypt could own property, initiate divorce, and testify in court — rights that were notable by ancient standards.",
      },
    ],
  },
  {
    id: "quiz-amarna-1",
    courseId: "course-akhenaten-amarna-period",
    title: "Akhenaten and the Amarna Period — Knowledge Check",
    description: "The Aten, the new capital, and the debate.",
    questions: [
      {
        id: "q-am-1",
        type: "single",
        prompt:
          "Akhenaten's religious reforms centred on:",
        options: [
          "The god Amun of Thebes",
          "The Aten, the sun disk",
          "The god Osiris",
          "The Apis bull",
        ],
        correctOptions: [1],
        explanation:
          "Akhenaten elevated the Aten — the sun disk — to pre-eminence, changed his name from Amenhotep to Akhenaten ('effective for the Aten'), and moved the capital to Tell el-Amarna. Whether this was monotheism, henotheism, or a political reshuffle of the priesthood is still debated.",
      },
      {
        id: "q-am-2",
        type: "single",
        prompt:
          "Akhenaten's new capital was located at:",
        options: ["Thebes", "Memphis", "Tell el-Amarna", "Alexandria"],
        correctOptions: [2],
        explanation:
          "Akhenaten founded a new capital at Tell el-Amarna (ancient Akhetaten, 'horizon of the Aten') in Middle Egypt. It was occupied only during his reign and the years immediately after — a uniquely short-lived capital.",
      },
      {
        id: "q-am-3",
        type: "boolean",
        prompt:
          "The Amarna art style is identical to the conventions of the Old Kingdom.",
        options: ["True", "False"],
        correctOptions: [1],
        explanation:
          "Amarna art broke with the traditional canon: figures are shown in relaxed, naturalistic poses, with elongated features and intimate family scenes — including the royal family in informal moments. Whether this was a royal revolution or a fashionable workshop style is discussed among scholars.",
      },
      {
        id: "q-am-4",
        type: "multiple",
        prompt:
          "Which of the following are debated questions about the Amarna Period? (Select all that apply.)",
        options: [
          "Whether Atenism was truly monotheistic",
          "The identity of Tutankhamun's mother",
          "Whether the Amarna style was a lasting revolution or a temporary fashion",
          "The exact number of columns in the Parthenon",
        ],
        correctOptions: [0, 1, 2],
        explanation:
          "All three are live scholarly debates. (The Parthenon is Greek, not Egyptian — an odd option out.) The Amarna Period is unusually rich in controversy because its evidence is fragmentary and its ideology so distinctive.",
      },
      {
        id: "q-am-5",
        type: "single",
        prompt:
          "What happened to the city of Akhetaten (Tell el-Amarna) after the Amarna Period?",
        options: [
          "It remained the capital for a thousand years",
          "It was abandoned and largely dismantled for stone",
          "It was flooded by the Nile",
          "It became the capital of Ptolemaic Egypt",
        ],
        correctOptions: [1],
        explanation:
          "The city was abandoned shortly after Akhenaten's death, when the court returned to Thebes. Later, its stone was quarried, and the site today preserves a remarkable but ruined snapshot of a brief capital.",
      },
    ],
  },
  {
    id: "quiz-tutankhamun-1",
    courseId: "course-tutankhamun-and-his-world",
    title: "Tutankhamun and His World — Knowledge Check",
    description: "The boy king in his historical context.",
    questions: [
      {
        id: "q-tu-1",
        type: "single",
        prompt:
          "Tutankhamun is most famous today because:",
        options: [
          "He ruled Egypt for over sixty years",
          "His tomb was found nearly intact in 1922",
          "He built the Great Pyramid",
          "He wrote the Book of the Dead",
        ],
        correctOptions: [1],
        explanation:
          "Tutankhamun was a minor king with a short reign (c. 1332–1323 BCE). His fame rests entirely on the 1922 discovery of his nearly intact tomb by Howard Carter — a stroke of luck, since his tomb was small and later rubble concealed it.",
      },
      {
        id: "q-tu-2",
        type: "boolean",
        prompt:
          "Tutankhamun's 'curse' is an ancient Egyptian spell recorded in his tomb.",
        options: ["True", "False"],
        correctOptions: [1],
        explanation:
          "The 'curse of the pharaohs' is a modern invention, popularized by newspapers after the 1922 discovery. No curse was inscribed in the tomb, and the deaths of the excavation team have mundane explanations.",
      },
      {
        id: "q-tu-3",
        type: "multiple",
        prompt:
          "Which statements about Tutankhamun's reign are supported by evidence? (Select all that apply.)",
        options: [
          "He reversed the religious changes of the Amarna Period and restored the old gods",
          "He moved the capital back to Thebes",
          "He ruled for over fifty years",
          "He died young, without a surviving heir",
        ],
        correctOptions: [0, 1, 3],
        explanation:
          "Tutankhamun came to the throne as a child, restored the traditional gods (his name change from Tutankhaten to Tutankhamun signals the shift), and died around age eighteen or nineteen. His reign lasted roughly nine to ten years.",
      },
      {
        id: "q-tu-4",
        type: "single",
        prompt:
          "Who discovered Tutankhamun's tomb?",
        options: [
          "Jean-François Champollion",
          "Howard Carter, funded by Lord Carnarvon",
          "Flinders Petrie",
          "Zahi Hawass",
        ],
        correctOptions: [1],
        explanation:
          "Howard Carter discovered KV62 on 4 November 1922, funded by George Herbert, the fifth Earl of Carnarvon. Carter had spent years working in the Valley of the Kings before the find.",
      },
      {
        id: "q-tu-5",
        type: "single",
        prompt:
          "Why was Tutankhamun's tomb so well preserved?",
        options: [
          "It was built underground in solid granite",
          "Its entrance was hidden by rubble from a later tomb cut above it",
          "It was sealed with an unknown metal",
          "It was lost in a flood",
        ],
        correctOptions: [1],
        explanation:
          "KV62 is unusually small for a royal tomb. Its entrance was buried under rubble and spoil from the cutting of a later tomb (KV9, Ramesses VI), which concealed it from the systematic robbing that emptied most royal tombs.",
      },
    ],
  },
  {
    id: "quiz-ramses-1",
    courseId: "course-ramses-ii",
    title: "Ramses II — Knowledge Check",
    description: "The long reign of the Ramesside king.",
    questions: [
      {
        id: "q-ra-1",
        type: "single",
        prompt:
          "Ramesses II's reign is generally estimated to have lasted:",
        options: [
          "About 10 years",
          "About 30 years",
          "About 66 years",
          "About 100 years",
        ],
        correctOptions: [2],
        explanation:
          "Modern estimates place Ramesses II's reign at roughly 66 years (c. 1279–1213 BCE), making him one of the longest-reigning monarchs in history. He may have lived into his nineties.",
      },
      {
        id: "q-ra-2",
        type: "single",
        prompt:
          "The Battle of Kadesh was fought against:",
        options: [
          "The Nubians",
          "The Hittites",
          "The Assyrians",
          "The Greeks",
        ],
        correctOptions: [1],
        explanation:
          "Kadesh (c. 1274 BCE) was fought against the Hittite Empire in Syria. Egyptian accounts present a great victory; the subsequent treaty (one of the earliest surviving peace treaties) suggests a more even outcome.",
      },
      {
        id: "q-ra-3",
        type: "boolean",
        prompt:
          "Abu Simbel, with its colossal seated statues, was built by Ramesses II.",
        options: ["True", "False"],
        correctOptions: [0],
        explanation:
          "Ramesses II carved the two temples of Abu Simbel in Nubia, including four colossal seated statues of himself. In the 1960s, the temples were cut into blocks and moved to higher ground to escape the rising waters of the Aswan High Dam reservoir — a landmark in international heritage rescue.",
      },
      {
        id: "q-ra-4",
        type: "multiple",
        prompt:
          "Which monuments are associated with Ramesses II? (Select all that apply.)",
        options: [
          "The Ramesseum, his mortuary temple at Thebes",
          "Abu Simbel in Nubia",
          "The Great Pyramid of Giza",
          "Additions to the temple at Karnak",
        ],
        correctOptions: [0, 1, 3],
        explanation:
          "The Great Pyramid predates Ramesses II by more than a millennium. Ramesses was prolific: the Ramesseum, Abu Simbel, additions at Karnak and Luxor, and his own tomb (KV7) in the Valley of the Kings.",
      },
      {
        id: "q-ra-5",
        type: "single",
        prompt:
          "Ramesses II's children are known to us mainly through:",
        options: [
          "His own tomb inscriptions and monuments",
          "Greek novels written centuries later",
          "The Rosetta Stone",
          "A diary found at Deir el-Medina",
        ],
        correctOptions: [0],
        explanation:
          "Ramesses II had many children, depicted in processions on his monuments (notably at Abu Simbel and the Ramesseum). The large tomb KV5 in the Valley of the Kings, with at least 120 chambers, was built for his sons. Exact family relationships for all children remain uncertain.",
      },
    ],
  },
  {
    id: "quiz-mythology-1",
    courseId: "course-egyptian-mythology",
    title: "Egyptian Mythology — Knowledge Check",
    description: "The gods, the cosmos, and the sources.",
    questions: [
      {
        id: "q-my-1",
        type: "single",
        prompt:
          "Which of the following best describes Egyptian mythology?",
        options: [
          "A single sacred book with one canonical version",
          "A collection of stories with regional variations and multiple versions",
          "A set of scientific laws",
          "A modern invention by Victorian scholars",
        ],
        correctOptions: [1],
        explanation:
          "There was no single 'Bible' of Egyptian myth. Different cities had different theologies (Heliopolis, Memphis, Hermopolis, Thebes), and a god could hold several roles at once. Our picture comes from temple inscriptions, coffin texts, papyri, and later Greek accounts.",
      },
      {
        id: "q-my-2",
        type: "single",
        prompt:
          "In the Heliopolitan theology, the creator god who arose from the primordial waters was:",
        options: ["Ptah", "Atum", "Thoth", "Anubis"],
        correctOptions: [1],
        explanation:
          "The priests of Heliopolis told how Atum arose from Nun, the primordial waters, and created the gods through self-generation. The Great Ennead — nine gods including Shu, Tefnut, Geb, Nut, Osiris, Isis, Set, and Nephthys — formed the core of this account.",
      },
      {
        id: "q-my-3",
        type: "boolean",
        prompt:
          "The Memphite theology credits Ptah with creation through thought and speech.",
        options: ["True", "False"],
        correctOptions: [0],
        explanation:
          "The Memphites told that Ptah created through heart (thought) and tongue (speech). The text survives on the Shabaka Stone, a later copy; scholars debate how old the ideas on it really are.",
      },
      {
        id: "q-my-4",
        type: "multiple",
        prompt:
          "Which statements about the myth of Osiris are accurate? (Select all that apply.)",
        options: [
          "Set murders Osiris in the tradition recorded in Plutarch and temple texts",
          "Isis gathers and revives Osiris, and their son Horus avenges him",
          "The myth is connected to beliefs about kingship and the afterlife",
          "The myth is only attested in modern novels",
        ],
        correctOptions: [0, 1, 2],
        explanation:
          "The Osiris myth is central to Egyptian religion: the murdered and restored king becomes lord of the dead, and his son Horus inherits the living throne — a pattern that justified royal succession. The fullest narrative version comes from Plutarch, a Greek writer, so Egyptian temple and coffin-text versions are read alongside it.",
      },
      {
        id: "q-my-5",
        type: "single",
        prompt:
          "Why should later Greek accounts of Egyptian myth be used cautiously?",
        options: [
          "They were written in a lost language",
          "They often reinterpret Egyptian material through a Greek lens",
          "They were all destroyed",
          "They predate the Egyptian sources",
        ],
        correctOptions: [1],
        explanation:
          "Writers like Herodotus and Plutarch described Egyptian religion centuries later and often explained it in Greek terms. They are valuable evidence — but of how later outsiders understood Egypt, and must be weighed against indigenous texts.",
      },
    ],
  },
  {
    id: "quiz-gods-1",
    courseId: "course-gods-of-ancient-egypt",
    title: "Gods of Ancient Egypt — Knowledge Check",
    description: "The pantheon and its worship.",
    questions: [
      {
        id: "q-go-1",
        type: "single",
        prompt:
          "The god Amun rose to greatest prominence during which period?",
        options: [
          "The Old Kingdom",
          "The Middle Kingdom",
          "The New Kingdom",
          "The Ptolemaic Period only",
        ],
        correctOptions: [2],
        explanation:
          "Amun's prominence surged in the New Kingdom, when Thebes was the capital. He was fused with the sun god as Amun-Ra, and the Great Hymn to Amun expresses his status as a hidden, all-encompassing creator.",
      },
      {
        id: "q-go-2",
        type: "single",
        prompt:
          "The ibis-headed god of writing and wisdom was:",
        options: ["Thoth", "Horus", "Set", "Sobek"],
        correctOptions: [0],
        explanation:
          "Thoth, depicted as an ibis or a baboon, was credited with inventing writing and with reckoning and wisdom. Greeks later equated him with Hermes — hence 'Hermetic' texts and the name 'Hermopolis'.",
      },
      {
        id: "q-go-3",
        type: "boolean",
        prompt:
          "In Egyptian myth, Set is portrayed only as pure evil with no positive role.",
        options: ["True", "False"],
        correctOptions: [1],
        explanation:
          "Set is complex. He murders Osiris in the myth cycle, but he is also a necessary counterpart to order — a god of the desert, storms, and strength who defends the sun barque against chaos. Early Egyptologists over-simplified him as 'evil'; the evidence is more nuanced.",
      },
      {
        id: "q-go-4",
        type: "multiple",
        prompt:
          "Which gods were central to the cult of the afterlife? (Select all that apply.)",
        options: [
          "Osiris",
          "Anubis",
          "Isis",
          "Sobek",
        ],
        correctOptions: [0, 1, 2],
        explanation:
          "Osiris judged the dead; Anubis oversaw mummification and guarded the necropolis; Isis was the devoted wife and mother whose magic restored Osiris. Sobek, the crocodile god of the Faium, had a strong regional cult but was not central to funerary belief.",
      },
      {
        id: "q-go-5",
        type: "single",
        prompt:
          "The worship of Isis after the pharaonic period:",
        options: [
          "Disappeared immediately after Cleopatra",
          "Spread across the Roman world, with temples as far as Rome and Pompeii",
          "Was limited to Egypt only",
          "Was banned by the Ptolemies",
        ],
        correctOptions: [1],
        explanation:
          "The cult of Isis survived the pharaonic period and spread through the Hellenistic and Roman world — temples to Isis have been found from Rome to Pompeii to the Black Sea. It endured until the rise of Christianity.",
      },
    ],
  },
  {
    id: "quiz-afterlife-1",
    courseId: "course-egyptian-religion-afterlife",
    title: "Egyptian Religion and the Afterlife — Knowledge Check",
    description: "Death, judgement, and renewal.",
    questions: [
      {
        id: "q-af-1",
        type: "single",
        prompt:
          "In the judgement before Osiris, the deceased's heart was weighed against:",
        options: [
          "A gold statue",
          "The feather of Maat",
          "The king's crown",
          "A stone tablet",
        ],
        correctOptions: [1],
        explanation:
          "The heart (ib) was weighed against the feather of Maat — order, truth, and justice. If it balanced, the deceased joined the gods; if heavier with wrongdoing, it was devoured by the monster Ammit, meaning a second, permanent death.",
      },
      {
        id: "q-af-2",
        type: "multiple",
        prompt:
          "Which concepts belong to Egyptian beliefs about the soul? (Select all that apply.)",
        options: [
          "The ka (life force, sustained by offerings)",
          "The ba (the mobile personality, depicted as a human-headed bird)",
          "The akh (the effective spirit)",
          "The ch'i (a circulating life energy)",
        ],
        correctOptions: [0, 1, 2],
        explanation:
          "The ka, ba, and akh are attested Egyptian concepts. 'Chi'/'qi' is a concept from Chinese philosophy and has nothing to do with Egypt — an example of how modern comparative spirituality sometimes mixes unrelated traditions.",
      },
      {
        id: "q-af-3",
        type: "boolean",
        prompt:
          "The Book of the Dead was a single fixed book placed in every tomb.",
        options: ["True", "False"],
        correctOptions: [1],
        explanation:
          "The 'Book of the Dead' is a modern name for a varied collection of spells, copied onto papyri and tailored to the owner. Different tombs contain different selections — there was no fixed canon.",
      },
      {
        id: "q-af-4",
        type: "single",
        prompt:
          "The evolution of funerary texts is generally ordered:",
        options: [
          "Book of the Dead → Pyramid Texts → Coffin Texts",
          "Pyramid Texts → Coffin Texts → Book of the Dead",
          "Coffin Texts → Pyramid Texts → Book of the Dead",
          "Pyramid Texts → Book of the Dead → Coffin Texts",
        ],
        correctOptions: [1],
        explanation:
          "The Pyramid Texts (Old Kingdom, carved in pyramids) came first, followed by the Coffin Texts (Middle Kingdom, painted on coffins), then the Book of the Dead (New Kingdom, on papyrus) and the later Books of the Netherworld carved on royal tomb walls.",
      },
      {
        id: "q-af-5",
        type: "single",
        prompt:
          "The 'Opening of the Mouth' ritual was:",
        options: [
          "A daily temple ceremony",
          "A funerary rite restoring the mummy's senses for the afterlife",
          "A coronation ritual for new kings",
          "A medical procedure for embalmers",
        ],
        correctOptions: [1],
        explanation:
          "The Opening of the Mouth was performed on the mummy (and on statues) to restore the ability to eat, drink, speak, and breathe. It is one of the most frequently depicted funerary rituals in tomb art.",
      },
    ],
  },
  {
    id: "quiz-hieroglyphs-1",
    courseId: "course-reading-hieroglyphs",
    title: "Reading Egyptian Hieroglyphs — Knowledge Check",
    description: "The script and its decipherment.",
    questions: [
      {
        id: "q-hg-1",
        type: "single",
        prompt:
          "The Egyptian hieroglyphic script is best described as:",
        options: [
          "A pure alphabet of 26 letters",
          "A mix of logographic, phonetic, and determinative signs",
          "A system of pictures with no sound value",
          "A code used only by priests",
        ],
        correctOptions: [1],
        explanation:
          "Hieroglyphs combine logograms (signs for whole words), phonograms (signs for sounds — including an 'alphabet' of about 25 uniliteral signs), and determinatives (silent signs that clarify a word's meaning).",
      },
      {
        id: "q-hg-2",
        type: "boolean",
        prompt:
          "The Rosetta Stone was crucial because it repeats the same text in three scripts.",
        options: ["True", "False"],
        correctOptions: [0],
        explanation:
          "The stone (196 BCE) carries a priestly decree in hieroglyphic, Demotic, and Greek. Because scholars could read Greek, the text gave a known meaning against which the scripts could be compared — the key to decipherment.",
      },
      {
        id: "q-hg-3",
        type: "single",
        prompt:
          "Who is generally credited with the decisive decipherment of hieroglyphs in the 1820s?",
        options: [
          "Howard Carter",
          "Jean-François Champollion",
          "Flinders Petrie",
          "Napoleon Bonaparte",
        ],
        correctOptions: [1],
        explanation:
          "Champollion, building on Thomas Young's insight that some signs were phonetic and on his knowledge of Coptic, demonstrated in the 1820s that hieroglyphs combined phonetic and ideographic elements — reading royal names in cartouches phonetically.",
      },
      {
        id: "q-hg-4",
        type: "multiple",
        prompt:
          "Which of these are stages of the Egyptian language? (Select all that apply.)",
        options: [
          "Old Egyptian",
          "Middle Egyptian",
          "Demotic (as a language stage)",
          "Sanskrit",
        ],
        correctOptions: [0, 1, 2],
        explanation:
          "The Egyptian language runs through Old, Middle, Late Egyptian, Demotic, and Coptic. Sanskrit is an Indo-Aryan language unrelated to the Egyptian branch of the Afroasiatic family.",
      },
      {
        id: "q-hg-5",
        type: "boolean",
        prompt:
          "Because vowels were not written in hieroglyphs, modern pronunciations of ancient Egyptian words are reconstructions, not certainties.",
        options: ["True", "False"],
        correctOptions: [0],
        explanation:
          "The script records consonants (and some semi-vowels); the vowels were not written. Scholars reconstruct probable pronunciations using Coptic (the final stage, written with a vowel-indicating alphabet) and other evidence — but there is no way to be certain how the ancient language sounded.",
      },
    ],
  },
  {
    id: "quiz-art-1",
    courseId: "course-egyptian-art-symbolism",
    title: "Egyptian Art and Symbolism — Knowledge Check",
    description: "The conventions of Egyptian representation.",
    questions: [
      {
        id: "q-ar-1",
        type: "single",
        prompt:
          "In Egyptian art, the 'composite view' means:",
        options: [
          "Figures are shown entirely in profile",
          "The head and legs are in profile while the eye and torso face the viewer",
          "Figures are shown from above",
          "Figures are shown in motion",
        ],
        correctOptions: [1],
        explanation:
          "The canon of Egyptian art shows the head, legs, and arms in profile, but the eye and torso frontal. This was not a failure of perspective — it was a deliberate convention to present each body part in its most recognizable form.",
      },
      {
        id: "q-ar-2",
        type: "single",
        prompt:
          "The 'hierarchy of scale' in Egyptian art means:",
        options: [
          "The physically largest objects are drawn biggest",
          "More important figures are shown larger, regardless of physical size",
          "Children are always drawn smaller than adults",
          "Gods are always drawn smallest",
        ],
        correctOptions: [1],
        explanation:
          "Size indicates rank: kings tower over servants, gods over the deceased. It is a visual grammar, not a perspective error.",
      },
      {
        id: "q-ar-3",
        type: "multiple",
        prompt:
          "Which colours carried symbolic meaning in Egyptian art? (Select all that apply.)",
        options: [
          "Green (rebirth and vegetation)",
          "Red (chaos, the desert)",
          "Blue (the sky and the Nile)",
          "Silver (always evil)",
        ],
        correctOptions: [0, 1, 2],
        explanation:
          "Colour was meaningful: green for rebirth, red for desert and disorder, blue for sky and water, gold for the flesh of the gods. Silver was rare (Egypt had little native silver) and associated with the moon and with value — not 'evil'.",
      },
      {
        id: "q-ar-4",
        type: "boolean",
        prompt:
          "The relaxed, naturalistic style of Amarna art followed the same strict conventions as Old Kingdom reliefs.",
        options: ["True", "False"],
        correctOptions: [1],
        explanation:
          "Amarna art broke with the canon — elongated heads, curved bodies, and intimate royal family scenes. Whether this was a lasting 'revolution' or a fashionable workshop style under royal patronage is debated.",
      },
      {
        id: "q-ar-5",
        type: "single",
        prompt:
          "Why is it misleading to view Egyptian art as 'unchanging for 3,000 years'?",
        options: [
          "Because the Egyptians had no art before the New Kingdom",
          "Because there were real changes — proportion systems, styles like Amarna, and shifting iconography — even within a stable grammar",
          "Because all Egyptian art is modern forgery",
          "Because the art changed every year",
        ],
        correctOptions: [1],
        explanation:
          "The grammar of Egyptian art was remarkably stable, but not static: proportions shifted between periods (the grid system changed), styles like Amarna's broke rules deliberately, and iconography evolved. Stability is a tendency, not a fact of every century.",
      },
    ],
  },
  {
    id: "quiz-temples-1",
    courseId: "course-temples-of-ancient-egypt",
    title: "Temples of Ancient Egypt — Knowledge Check",
    description: "Sacred architecture and its meaning.",
    questions: [
      {
        id: "q-te-1",
        type: "single",
        prompt:
          "In a typical Egyptian temple, which space was most restricted?",
        options: [
          "The open court",
          "The pylon gateway",
          "The sanctuary (naos) at the rear",
          "The processional avenue",
        ],
        correctOptions: [2],
        explanation:
          "The temple axis moved from open public space to increasingly restricted areas; only the king and the highest priests entered the sanctuary, which housed the god's statue. The architecture enacts the creation of the world — from the open daylight to the dark primeval mound.",
      },
      {
        id: "q-te-2",
        type: "boolean",
        prompt:
          "The hypostyle hall at Karnak is called 'hypostyle' because its roof is supported by columns.",
        options: ["True", "False"],
        correctOptions: [0],
        explanation:
          "'Hypostyle' means 'on columns' (Greek). The Great Hypostyle Hall at Karnak has 134 columns in sixteen rows; the central row is taller, with clerestory windows above the side aisles — an early solution to lighting a vast interior.",
      },
      {
        id: "q-te-3",
        type: "multiple",
        prompt:
          "Which of these are parts of a typical Egyptian temple? (Select all that apply.)",
        options: [
          "The pylon (gateway)",
          "The hypostyle hall",
          "The sanctuary (naos)",
          "The nave with a rose window",
        ],
        correctOptions: [0, 1, 2],
        explanation:
          "Pylon, court, hypostyle hall, and sanctuary are the standard axial sequence. Rose windows belong to Gothic architecture, more than two thousand years later.",
      },
      {
        id: "q-te-4",
        type: "single",
        prompt:
          "Temple reliefs showing the king smiting enemies are best understood as:",
        options: [
          "Photographic records of specific battles",
          "Ideological statements about the king's role in maintaining order",
          "Maps of military campaigns",
          "Instructions for soldiers",
        ],
        correctOptions: [1],
        explanation:
          "Smiting scenes are iconographic: they assert the king's role as defender of maat against chaos. They often depict an ideal rather than a specific event — a reminder that temple decoration is theology, not reportage.",
      },
      {
        id: "q-te-5",
        type: "boolean",
        prompt:
          "Egyptian temples were primarily designed for congregational worship by the general public.",
        options: ["True", "False"],
        correctOptions: [1],
        explanation:
          "The inner temple was for the god and the priesthood. Ordinary people participated at festivals, when the god's barque was carried in procession, and at local shrines — but the temple building itself was a restricted, sacred space, not a meeting hall.",
      },
    ],
  },
  {
    id: "quiz-tombs-1",
    courseId: "course-tombs-and-burial-practices",
    title: "Tombs and Burial Practices — Knowledge Check",
    description: "The archaeology of death.",
    questions: [
      {
        id: "q-to-1",
        type: "single",
        prompt:
          "Mastabas are:",
        options: [
          "The first true pyramids",
          "Flat-roofed, rectangular tombs of the early periods, with sloping sides",
          "Underground vaults of the New Kingdom",
          "Temple gateways",
        ],
        correctOptions: [1],
        explanation:
          "Mastabas ('benches' in Arabic, for their shape) were the standard elite tomb of the Early Dynastic and Old Kingdom periods: a flat-roofed rectangular structure with sloping sides, an offering chapel above, and burial chambers below. Djoser's Step Pyramid began as a mastaba.",
      },
      {
        id: "q-to-2",
        type: "boolean",
        prompt:
          "Mummification was primarily a means of preserving the body for the afterlife, linked to beliefs about the ka and ba.",
        options: ["True", "False"],
        correctOptions: [0],
        explanation:
          "Preservation mattered because the deceased needed a bodily home for the ka and ba. The process — dehydration with natron, wrapping, amulets — was ritual as much as chemistry, and its details varied by period and budget.",
      },
      {
        id: "q-to-3",
        type: "multiple",
        prompt:
          "Which of these are attested purposes of tomb goods? (Select all that apply.)",
        options: [
          "To sustain the ka through offerings",
          "To provide the deceased with objects in the afterlife",
          "Ushabtis to perform work for the deceased",
          "To bribe the tomb robbers",
        ],
        correctOptions: [0, 1, 2],
        explanation:
          "Grave goods served the dead: offerings sustained the ka; furniture, food, and tools equipped the afterlife; ushabtis (sometimes hundreds) were substitutes for labour. Unfortunately, the wealth in tombs also attracted robbers — nearly all royal tombs were robbed in antiquity.",
      },
      {
        id: "q-to-4",
        type: "single",
        prompt:
          "The Valley of the Kings was used for royal burials during the:",
        options: [
          "Old Kingdom",
          "Middle Kingdom",
          "New Kingdom",
          "Ptolemaic Period",
        ],
        correctOptions: [2],
        explanation:
          "The Valley of the Kings was the royal necropolis of the New Kingdom (Eighteenth to Twentieth Dynasties). Earlier kings were buried at Abydos and elsewhere; the pyramids belonged to the much older Old Kingdom.",
      },
      {
        id: "q-to-5",
        type: "boolean",
        prompt:
          "Tutankhamun's tomb is exceptional because it was found completely untouched since antiquity.",
        options: ["True", "False"],
        correctOptions: [1],
        explanation:
          "KV62 was robbed twice in antiquity (the robbers were caught, and the necropolis officials resealed it), and later rubble concealed the entrance. It was remarkably intact for a royal tomb — but not untouched.",
      },
    ],
  },
  {
    id: "quiz-archaeology-1",
    courseId: "course-archaeology-nile-valley",
    title: "Archaeology of the Nile Valley — Knowledge Check",
    description: "How the evidence is recovered.",
    questions: [
      {
        id: "q-arc-1",
        type: "single",
        prompt:
          "In archaeology, an object's 'context' refers to:",
        options: [
          "Its museum label",
          "Its position and associations in the ground",
          "Its market value",
          "Its translation",
        ],
        correctOptions: [1],
        explanation:
          "Context — where an object was found, in which layer, beside what — is the object's meaning. An object removed from context is degraded as evidence, which is why careful recording matters and looting is so destructive.",
      },
      {
        id: "q-arc-2",
        type: "boolean",
        prompt:
          "Early Egyptian excavations (19th and early 20th century) always used modern recording standards.",
        options: ["True", "False"],
        correctOptions: [1],
        explanation:
          "Much early excavation was treasure hunting: finds were divided, context was poorly recorded, and some famous discoveries are hard to interpret today. The shift to systematic method is one of the most important changes in the field's history.",
      },
      {
        id: "q-arc-3",
        type: "multiple",
        prompt:
          "Which methods do modern excavators use to date a site? (Select all that apply.)",
        options: [
          "Stratigraphy (reading the layers)",
          "Pottery typology",
          "Inscriptions",
          "Astrology",
        ],
        correctOptions: [0, 1, 2],
        explanation:
          "Archaeology uses stratigraphy, typology of datable objects like pottery, inscriptions, and scientific methods (radiocarbon, dendrochronology). Astrology plays no role — though the Egyptians themselves used astronomical observation for the calendar.",
      },
      {
        id: "q-arc-4",
        type: "single",
        prompt:
          "The 'partage' system in the history of Egyptian archaeology was:",
        options: [
          "A method of deciphering hieroglyphs",
          "The division of finds between excavators and the Egyptian state",
          "A type of Egyptian pottery",
          "An ancient Egyptian tax",
        ],
        correctOptions: [1],
        explanation:
          "Under partage, excavators (often foreign missions) could keep a share of the finds in exchange for funding excavation. It shaped museum collections worldwide and is a contested chapter in the history of the field — one reason many Egyptians advocate for the return of antiquities.",
      },
      {
        id: "q-arc-5",
        type: "boolean",
        prompt:
          "The Aswan High Dam rescue campaign of the 1960s relocated monuments like Abu Simbel to save them from rising waters.",
        options: ["True", "False"],
        correctOptions: [0],
        explanation:
          "When the Aswan High Dam threatened to flood Nubian monuments, UNESCO led an international campaign: Abu Simbel was cut into blocks and reassembled on higher ground, and thousands of objects were moved. It is a landmark in heritage conservation — and a reminder that modern development also endangers the record.",
      },
    ],
  },
  {
    id: "quiz-valley-kings-1",
    courseId: "course-valley-of-the-kings",
    title: "The Valley of the Kings — Knowledge Check",
    description: "The royal necropolis of the New Kingdom.",
    questions: [
      {
        id: "q-vk-1",
        type: "single",
        prompt:
          "The Valley of the Kings lies near:",
        options: [
          "Cairo",
          "Thebes (modern Luxor)",
          "Alexandria",
          "Aswan",
        ],
        correctOptions: [1],
        explanation:
          "The valley is on the west bank of the Nile at Thebes (modern Luxor), opposite the temple of Karnak. The choice of location may relate to the pyramid-shaped peak of al-Qurn and the west as the land of the dead.",
      },
      {
        id: "q-vk-2",
        type: "single",
        prompt:
          "KV62 refers to:",
        options: [
          "The 62nd dynasty",
          "The tomb of Tutankhamun",
          "A type of coffin",
          "A temple at Karnak",
        ],
        correctOptions: [1],
        explanation:
          "Tombs in the valley are numbered KV (Kings' Valley) in order of discovery: KV62 is Tutankhamun's tomb. KV5 is the tomb of the sons of Ramesses II, the largest in the valley; KV17 is Seti I's, one of the longest and most decorated.",
      },
      {
        id: "q-vk-3",
        type: "boolean",
        prompt:
          "Nearly all the royal tombs in the Valley of the Kings were robbed in antiquity.",
        options: ["True", "False"],
        correctOptions: [0],
        explanation:
          "Yes — with few exceptions, the tombs were emptied within centuries. Tutankhamun's survival is the exception that proves the rule: its entrance was hidden by rubble from a later tomb. What survives is mostly what robbers ignored or what was resealed quickly.",
      },
      {
        id: "q-vk-4",
        type: "multiple",
        prompt:
          "Which tombs are among the most significant in the Valley of the Kings? (Select all that apply.)",
        options: [
          "KV17 (Seti I)",
          "KV62 (Tutankhamun)",
          "KV5 (sons of Ramesses II)",
          "KV100 (the 'Tomb of Gold')",
        ],
        correctOptions: [0, 1, 2],
        explanation:
          "KV17, KV62, and KV5 are among the most studied tombs in the valley. There is no 'KV100 Tomb of Gold' — tomb numbers follow discovery order, and many are small, undecorated, or anonymous.",
      },
      {
        id: "q-vk-5",
        type: "single",
        prompt:
          "What is the ancient Egyptian name of the Valley of the Kings recorded as?",
        options: [
          "It had no name",
          "'The Great and Majestic Necropolis of the Millions of Years of the Pharaoh'",
          "'The Valley of Kings' in Egyptian",
          "'The Hidden Valley'",
        ],
        correctOptions: [1],
        explanation:
          "Inscriptions call it something like 'The Great and Majestic Necropolis of the Millions of Years of the Pharaoh' — the name 'Valley of the Kings' is the modern Arabic-influenced term. Small details like this show why inscriptions matter.",
      },
    ],
  },
  {
    id: "quiz-discovery-1",
    courseId: "course-discovery-tutankhamun-tomb",
    title: "The Discovery of Tutankhamun's Tomb — Knowledge Check",
    description: "1922 and its consequences.",
    questions: [
      {
        id: "q-di-1",
        type: "single",
        prompt:
          "Tutankhamun's tomb was discovered in:",
        options: ["1822", "1874", "1922", "1974"],
        correctOptions: [2],
        explanation:
          "Howard Carter found KV62 on 4 November 1922. (1822 is the year Champollion's decipherment breakthrough is often dated — a useful mnemonic for the two events.)",
      },
      {
        id: "q-di-2",
        type: "boolean",
        prompt:
          "The discovery of Tutankhamun's tomb made Egyptology a global phenomenon and raised new questions about the ownership of antiquities.",
        options: ["True", "False"],
        correctOptions: [0],
        explanation:
          "The 'Tut-mania' of the 1920s transformed public interest in ancient Egypt — and spotlighted how finds were divided and exported. Debates over the partage system and the location of Egyptian antiquities in foreign museums continue to this day.",
      },
      {
        id: "q-di-3",
        type: "single",
        prompt:
          "Carter's first glimpse of the tomb's interior was famously described as:",
        options: [
          "'I see wonderful things'",
          "'It is empty'",
          "'We have found gold'",
          "'This is a false entrance'",
        ],
        correctOptions: [0],
        explanation:
          "When Lord Carnarvon asked if he could see anything, Carter replied (in his account), 'Yes, wonderful things.' The moment entered popular culture — though the exact wording comes from Carter's own later retelling.",
      },
      {
        id: "q-di-4",
        type: "multiple",
        prompt:
          "Which statements about the discovery are accurate? (Select all that apply.)",
        options: [
          "The excavation was funded by Lord Carnarvon",
          "The tomb had been robbed twice in antiquity",
          "The discovery happened during the Egyptian revolution of 1919",
          "The find was recorded with plans, photographs, and diaries",
        ],
        correctOptions: [0, 1, 3],
        explanation:
          "Carnarvon funded the work; the ancient robberies are attested by the resealed doorways and disturbed contents; Carter's meticulous (if period-bound) recording made the find scientifically valuable. The discovery came in 1922, a few years after the 1919 revolution — Egypt was under British occupation, a political context that shaped the find's aftermath.",
      },
      {
        id: "q-di-5",
        type: "single",
        prompt:
          "Why is the 1922 discovery considered partly a matter of luck?",
        options: [
          "Carter was searching at random",
          "The tomb survived because rubble from a later tomb concealed it, and Carter's funding was nearly exhausted",
          "It was found by tourists",
          "It was the first tomb ever dug in the valley",
        ],
        correctOptions: [1],
        explanation:
          "KV62 owed its survival to concealment under spoil from a later tomb cut — and Carter found it at the tail end of a long, underfunded search. The Valley had been declared 'exhausted' by some; the find proved otherwise.",
      },
    ],
  },
  {
    id: "quiz-daily-life-1",
    courseId: "course-daily-life-ancient-egypt",
    title: "Daily Life in Ancient Egypt — Knowledge Check",
    description: "Households, work, food, and law.",
    questions: [
      {
        id: "q-dl-1",
        type: "single",
        prompt:
          "The village of Deir el-Medina is important to historians because:",
        options: [
          "It was the royal palace",
          "Its rubbish dumps preserved the records of ordinary artisans",
          "It was a pyramid construction camp",
          "It was the capital of the Old Kingdom",
        ],
        correctOptions: [1],
        explanation:
          "Deir el-Medina housed the artisans who built the royal tombs. Because the village's refuse was preserved — ostraca, letters, receipts, even a record of a strike — it is the best-documented ordinary community in ancient Egypt.",
      },
      {
        id: "q-dl-2",
        type: "boolean",
        prompt:
          "The 'Turin strike papyrus' records one of the earliest known labour disputes.",
        options: ["True", "False"],
        correctOptions: [0],
        explanation:
          "In the reign of Ramesses III, the Deir el-Medina workers stopped work when their grain rations were late — and recorded it. It is often cited as the earliest documented strike.",
      },
      {
        id: "q-dl-3",
        type: "multiple",
        prompt:
          "Which rights did Egyptian women hold under the law? (Select all that apply.)",
        options: [
          "Owning and disposing of property",
          "Initiating divorce",
          "Testifying in court",
          "Voting in national elections",
        ],
        correctOptions: [0, 1, 2],
        explanation:
          "By ancient standards, Egyptian women had notable legal rights: property ownership, divorce, and court testimony. There were no national elections — the king ruled, so voting did not exist.",
      },
      {
        id: "q-dl-4",
        type: "single",
        prompt:
          "Most of what we know about ordinary Egyptians comes from:",
        options: [
          "Royal temple inscriptions",
          "Letters, receipts, legal texts, and village records",
          "The pyramids",
          "Greek historians only",
        ],
        correctOptions: [1],
        explanation:
          "Monumental inscriptions glorify kings; the everyday record survives in letters, receipts, wills, and court papers — especially from Deir el-Medina. Reading the 'boring' documents is how historians reconstruct ordinary lives.",
      },
      {
        id: "q-dl-5",
        type: "boolean",
        prompt:
          "The board game senet is known to have been played in Egypt and is associated with the afterlife.",
        options: ["True", "False"],
        correctOptions: [0],
        explanation:
          "Senet boards appear in tombs and art from the Early Dynastic Period onward. Its exact rules are reconstructed and not fully certain, but it carried religious meaning — the dead playing their way to rebirth — appearing in funerary texts.",
      },
    ],
  },
  {
    id: "quiz-religion-intro-1",
    courseId: "course-ancient-egypt-foundations",
    title: "Religion in Daily Life — Knowledge Check",
    description: "Shrines, festivals, and local practice.",
    questions: [
      {
        id: "q-ri-1",
        type: "single",
        prompt:
          "For most ordinary Egyptians, religion was experienced primarily through:",
        options: [
          "Reading the Book of the Dead",
          "Local shrines, household worship, and temple festivals",
          "Pilgrimage to the pyramids",
          "The hieroglyphic script",
        ],
        correctOptions: [1],
        explanation:
          "Most people could not enter the temple's inner rooms. Their religion lived in local shrines, household deities (like Taweret and Bes), amulets, and the great festivals when the god's barque was carried through the streets.",
      },
      {
        id: "q-ri-2",
        type: "boolean",
        prompt:
          "The king's core duty, in Egyptian ideology, was to maintain maat — order, truth, and justice.",
        options: ["True", "False"],
        correctOptions: [0],
        explanation:
          "Maat was the foundation of kingship: the king maintained it through ritual, justice, and temple offerings, keeping the world from sliding back into the chaos (isfet) of the primordial waters.",
      },
      {
        id: "q-ri-3",
        type: "multiple",
        prompt:
          "Which of these were household or popular deities? (Select all that apply.)",
        options: [
          "Taweret (hippopotamus goddess of childbirth)",
          "Bes (dwarf god of the household)",
          "The Aten (sun disk, elevated by Akhenaten)",
          "Amun-Ra of Thebes",
        ],
        correctOptions: [0, 1],
        explanation:
          "Taweret and Bes were household protectors, especially around childbirth. The Aten became a royal focus under Akhenaten; Amun-Ra was the great state god of Thebes. Popular religion and state religion were distinct worlds.",
      },
      {
        id: "q-ri-4",
        type: "single",
        prompt:
          "Temple festivals were important because they:",
        options: [
          "Were the only time most people could see the god's statue in procession",
          "Included free bread for all citizens",
          "Marked the beginning of each dynasty",
          "Were held daily in every village",
        ],
        correctOptions: [0],
        explanation:
          "At festivals, the god's barque was carried from the temple to visit other shrines. For most Egyptians, this was their closest contact with the divine — a rare, public, sacred event.",
      },
      {
        id: "q-ri-5",
        type: "boolean",
        prompt:
          "Egyptian religion was identical across all three thousand years of its history.",
        options: ["True", "False"],
        correctOptions: [1],
        explanation:
          "Religion changed: gods rose and fell in prominence (Amun's New Kingdom ascent, Aten's brief supremacy), practices evolved (mummification changed by period), and regional theologies differed. Treating it as a single timeless system flattens a living tradition.",
      },
    ],
  },
];

export function getQuizById(id: string): Quiz | undefined {
  return quizzes.find((quiz) => quiz.id === id);
}

export function getQuizForCourse(courseId: string): Quiz | undefined {
  return quizzes.find((quiz) => quiz.courseId === courseId);
}

export function getQuizForLesson(
  courseId: string,
  lesson: { quizId?: string },
): Quiz | undefined {
  if (!lesson.quizId) return undefined;
  return getQuizById(lesson.quizId);
}
