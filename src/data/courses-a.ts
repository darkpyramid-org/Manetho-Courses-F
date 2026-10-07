import { defineCourse } from "@/data/defineCourse";
import type { Course } from "@/types";
import {
  module,
  reading,
  video,
  quiz,
  timeline,
} from "@/data/authoring";

/*
 * Courses 1–7: foundations, dynasties, pharaohs,
 * Old Kingdom, Middle Kingdom, New Kingdom, Hatshepsut.
 */

const foundations = defineCourse({
  id: "course-ancient-egypt-foundations",
  slug: "ancient-egypt-foundations",
  title: "Foundations of Ancient Egypt",
  subtitle:
    "The land, the people, and the three-thousand-year record",
  description:
    "Begin at the beginning. This course builds the foundation for everything else on Manetho: the geography of the Nile, the earliest farming villages, the unification of Egypt, and the kinds of evidence — monuments, texts, and archaeology — through which we know this civilization. Every claim is weighed: what is evidence, what is interpretation, and what remains genuinely unknown.",
  shortDescription:
    "The Nile, the unification, and the evidence behind three thousand years of Egyptian civilization.",
  category: "ancient-egypt",
  level: "beginner",
  instructorId: "instr-amelia-hart",
  coverImage: "/covers/cover-foundations.svg",
  learningOutcomes: [
    "Explain why the Nile shaped Egyptian civilization",
    "Distinguish Upper and Lower Egypt and why the orientation confuses learners",
    "Describe what the archaeological record shows about the predynastic era",
    "Evaluate the evidence for the unification of Egypt",
    "Recognize the main types of Egyptian sources and their limits",
  ],
  requirements: ["No prior knowledge required."],
  tags: [
    "introduction",
    "nile",
    "chronology",
    "sources",
    "predynastic",
  ],
  featured: true,
  language: "English",
  publishedAt: "2025-01-15",
  updatedAt: "2025-06-10",
  modules: [
    module(
      "the-land-and-its-people",
      "The Land and Its People",
      "Geography first: the river that made a civilization possible.",
      [
        video(
          "the-nile-and-its-people",
          "The Nile and Its People",
          18,
          "Why a river in the desert became the center of one of the world's oldest civilizations.",
          "Without the Nile, there would be no Egypt. The river runs north through one of the driest regions on Earth, and its annual flood — fed by monsoon rains far to the south — deposited a rich black silt that made agriculture possible in the desert.\n\nThe Greek historian Herodotus later called Egypt 'the gift of the Nile', and the phrase captures a truth the Egyptians themselves understood. Their word for their country, Kemet, means 'the Black Land' — the color of the floodplain's soil, set against Deshret, the 'Red Land' of the desert.\n\nArchaeological evidence suggests that by around 5000 BCE, communities along the floodplain were farming emmer wheat and barley, herding cattle, and fishing the river. Settlement clustered along the narrow valley and the Delta's marshy edges — everywhere else was desert. The river was not just a resource; it was the transport network that later bound the country together.",
        ),
        reading(
          "upper-and-lower-egypt",
          "Upper and Lower Egypt",
          14,
          "Two lands, one kingdom — and a geography that confuses every new student.",
          "Egypt is divided into two regions, and the naming trips up nearly everyone at first. Upper Egypt is the southern, upriver stretch of the Nile Valley; Lower Egypt is the northern Delta. 'Upper' means upstream — toward the source in the south — not north on a map.\n\nThe two lands had different cultures even in the predynastic period: different pottery, different burial customs, different local gods. Later Egyptian tradition describes their union as a single founding event, and the king's titles preserved the memory: the king was 'Lord of the Two Lands' and wore the double crown, combining the white crown of Upper Egypt with the red crown of Lower Egypt.\n\nScholars generally interpret the double crown as a powerful ideological statement — but whether it reflects an early, peaceful union or centuries of conflict between the two regions is not something the evidence can settle.",
        ),
        reading(
          "the-flood-and-the-calendar",
          "The Flood and the Calendar",
          12,
          "The annual inundation, the three seasons, and the world's first practical calendar.",
          "The Egyptian year was built around the flood. The year divided into three seasons: Akhet (inundation), when the fields were underwater; Peret (emergence), when the water receded and crops grew; and Shemu (harvest), the dry season.\n\nThe flood also drove one of the great practical achievements of the ancient world: a civil calendar of 365 days. The Egyptians tracked the rising of the star Sirius (called Sopdet, later Sothis by the Greeks), whose first predawn appearance each year roughly coincided with the flood. Because the civil year and the true solar year drift apart by a quarter of a day, the calendar slowly rotated — a fact later astronomers exploited for dating.\n\nThe exact relationship between the flood and the calendar changed over time, and the flooding itself varied from year to year: too little meant famine, too much meant destroyed villages. Later tradition remembered specific floods, but the record is too fragmentary to reconstruct the climate of the early periods in detail.",
        ),
      ],
    ),
    module(
      "before-history",
      "Before History",
      "What archaeology — not texts — tells us about the earliest Egyptians.",
      [
        reading(
          "the-predynastic-era",
          "The Predynastic Era",
          16,
          "Farming villages, distinctive pottery, and the slow rise of complex society.",
          "The Predynastic period (roughly 4000–3100 BCE) is known entirely from archaeology, because writing had not yet developed. Its evidence is material: pottery styles, burial goods, village remains, and carved objects.\n\nArchaeologists divide the period into cultures named after sites — Badarian, Naqada I, Naqada II, Naqada III — each with distinct pottery and burial practices. Over these millennia, society grew more stratified: graves began to differ sharply in size and wealth, suggesting emerging elites. By Naqada II, regional centers traded goods up and down the Nile and into the desert oases.\n\nWhat we cannot see clearly is the political organization of the period. Some scholars see the early stirrings of kingship in the elaborate cemeteries at sites like Hierakonpolis; others urge caution, since rich graves do not prove the existence of a state. The predynastic period is a good lesson in how much archaeology can reveal — and how little certainty it can offer about institutions.",
        ),
        timeline(
          "the-unification-of-egypt",
          "The Unification of Egypt",
          15,
          "The founding of the first dynasty — one of the most debated events in Egyptian history.",
          [
            {
              date: "c. 3500–3200 BCE",
              title: "Competing regional centers",
              description:
                "Archaeological evidence suggests that Upper Egypt was dominated by centers such as Hierakonpolis and Abydos, while Lower Egypt had its own powerful towns in the Delta. Trade, warfare, and intermarriage linked them.",
            },
            {
              date: "c. 3100 BCE",
              title: "Narmer and the first dynasty",
              description:
                "The Narmer Palette, a carved ceremonial object found at Hierakonpolis, shows a ruler wearing both crowns. Later tradition credits Narmer (sometimes identified with Menes) with uniting Egypt — but the palette is propaganda, and the process it celebrates was probably long and uneven.",
            },
            {
              date: "c. 2900 BCE",
              title: "Royal cemeteries at Abydos",
              description:
                "The kings of the first two dynasties were buried at Abydos, with retainers sacrificed to serve them — a practice that later ended. The size of the tombs marks the growing power of the early state.",
            },
            {
              date: "c. 2686 BCE",
              title: "The Old Kingdom begins",
              description:
                "With the Third Dynasty, Egypt entered the pyramid age. The unification that preceded it had created the centralized state capable of organizing such building on a national scale.",
            },
          ],
        ),
        reading(
          "early-writing-and-administration",
          "Early Writing and Administration",
          14,
          "From tags on jars to the world's longest-used writing tradition.",
          "Writing appears in Egypt around 3200 BCE, roughly contemporary with its emergence in Mesopotamia. The earliest Egyptian inscriptions are not literature or history: they are labels on jars, tallies of goods, and the names of kings on palettes and maceheads — the paperwork of a growing state.\n\nThe script developed quickly from these beginnings into the hieroglyphic system — a mix of logographic, phonetic, and determinative signs — that would serve Egypt for more than three thousand years. Because writing was an instrument of administration, the state's needs shaped what was recorded: taxes, rations, and royal decrees survive; ordinary voices do not.\n\nHow the script developed in detail is uncertain. Some scholars see influence from Mesopotamian writing; others argue for independent invention. The Egyptian script's structure is distinctive enough that most specialists treat it as an independent tradition, while acknowledging the question remains open.",
        ),
      ],
    ),
    module(
      "reading-the-record",
      "Reading the Record",
      "What survives, what is lost, and how scholars build a history from both.",
      [
        reading(
          "monuments-and-ostraca",
          "Monuments and Ostraca",
          12,
          "The two poles of the Egyptian record: monumental propaganda and everyday paperwork.",
          "The Egyptian record has two poles. At one extreme stand the monuments: temple reliefs, royal statues, and pyramid inscriptions, written to glorify king and gods. At the other stand ostraca — flakes of pottery and limestone used as cheap writing surfaces — preserving tax receipts, school exercises, letters, and even literary fragments.\n\nBoth are evidence, but of different kinds. Monuments tell us what the state wanted people to believe; ostraca tell us how a scribe calculated a wage or what a village complained about. Neither should be read naively: the monument is ideology, and the ostracon is fragmentary — most papyrus documents rotted long ago in the damp Delta.\n\nThe imbalance matters. Because monumental material survives best, Egypt was long known mainly through its kings and gods. Only in the last century has the everyday record — village rubbish dumps, workmen's accounts — been systematically excavated, transforming our picture of ordinary life.",
        ),
        reading(
          "how-scholars-date-egypt",
          "How Scholars Date Egypt",
          16,
          "King lists, star risings, and radiocarbon: the three legs of Egyptian chronology.",
          "Dating Egypt is an exercise in weaving together different kinds of evidence. The first leg is the king lists: the Palermo Stone (an Old Kingdom royal annal), the Turin Canon, and temple lists at Abydos and Karnak, which give sequences of kings and sometimes reign lengths.\n\nThe second leg is astronomy. A few texts mention the rising of the star Sirius, and if the observation site is known, the date can be calculated — but the site is often unknown, and scholars disagree about several of these observations. The third leg is science: radiocarbon dating of organic material, with margins of error that grow with age, and dendrochronology using imported woods.\n\nThe result is a 'conventional chronology' with a floating uncertainty of a few decades in the early periods and more in the Third Intermediate Period. When you read a date like 'c. 1279 BCE', the 'c.' (circa) is doing real work: it signals a scholarly estimate, not a certainty.",
        ),
        quiz("knowledge-check", "Knowledge Check", 10, "Test your understanding of the foundations.", "quiz-foundations-1"),
      ],
    ),
  ],
});

const dynasties = defineCourse({
  id: "course-egyptian-dynasties-explained",
  slug: "egyptian-dynasties-explained",
  title: "Egyptian Dynasties Explained",
  subtitle: "Three thousand years of kings, in order — with the evidence weighed",
  description:
    "The dynastic framework is the skeleton of Egyptian history, but it is a foreign skeleton: created by a priest in the third century BCE, rearranged by modern scholars, and constantly revised by new finds. This course teaches the framework — the periods, the transitions, and the debates — and shows you how to read a chronology critically.",
  shortDescription:
    "The periods of Egyptian history, the transitions between them, and the debates that still divide scholars.",
  category: "ancient-egypt",
  level: "intermediate",
  instructorId: "instr-amelia-hart",
  coverImage: "/covers/cover-dynasties.svg",
  learningOutcomes: [
    "Explain where the dynastic framework comes from and what its limits are",
    "Place the Old, Middle, and New Kingdoms in sequence with their dates",
    "Describe what distinguishes the three Intermediate Periods",
    "Recognize why dates in Egyptian history carry uncertainty",
    "Read a king list critically",
  ],
  requirements: ["Foundations of Ancient Egypt or equivalent familiarity with basic chronology."],
  tags: ["chronology", "dynasties", "king lists", "periods"],
  featured: true,
  language: "English",
  publishedAt: "2025-01-15",
  updatedAt: "2025-06-10",
  modules: [
    module(
      "the-framework",
      "The Framework",
      "Where the dynastic system comes from — and why it is not a genealogy.",
      [
        reading(
          "manetho-and-king-lists",
          "Manetho and the King Lists",
          18,
          "The Egyptian priest who invented dynasties — and the sources that survive.",
          "Our word 'dynasty' and the numbering system for Egyptian kings come from Manetho, an Egyptian priest of the third century BCE, who wrote a history of Egypt in Greek. His work, the Aegyptiaca, divided rulers into thirty (later thirty-one) dynasties — but it survives only in quotation and summary by later writers such as Josephus, Africanus, and Eusebius.\n\nManetho's dynasties are not genealogies. Some group kings from the same city or line; others appear to be administrative or even arbitrary divisions. Modern scholars use his framework as a scaffold while recognizing that it reflects how a Hellenistic-era priest understood his own past — which is itself valuable evidence.\n\nAlongside Manetho, Egypt has its own king lists: the Palermo Stone (an Old Kingdom annal), the Turin Canon (a papyrus list of kings with reign lengths), and the temple lists at Abydos and Karnak. Each has gaps and biases — the Abydos list omits kings the later dynasty found inconvenient — and none is a complete chronicle.",
        ),
        video(
          "periods-and-intermediate-ages",
          "Periods and Intermediate Ages",
          16,
          "The big picture: three great ages and the fragmented centuries between them.",
          "Egyptian history is conventionally divided into great ages — Old, Middle, and New Kingdoms — separated by Intermediate Periods of fragmentation. This pattern is real, but it is also a simplification imposed in retrospect.\n\nThe Old Kingdom (c. 2686–2181 BCE) is the pyramid age. The Middle Kingdom (c. 2055–1650 BCE) is the classical age of literature. The New Kingdom (c. 1550–1069 BCE) is the empire age. Between them, the First, Second, and Third Intermediate Periods mark times when central authority collapsed or fragmented.\n\nThe labels are useful but can mislead: 'intermediate' periods were not empty, and the transitions were often gradual rather than catastrophic. Regional power continued, art continued, and ordinary life went on. The divisions are a map, not the territory.",
        ),
      ],
    ),
    module(
      "the-three-great-ages",
      "The Three Great Ages",
      "What each kingdom achieved, and how we know.",
      [
        reading(
          "old-kingdom-overview",
          "The Old Kingdom",
          18,
          "The pyramid age and the first great flowering of Egyptian civilization.",
          "The Old Kingdom (c. 2686–2181 BCE, Dynasties 3–6) is the age of the pyramids. Under the Fourth Dynasty, the kings Khufu, Khafre, and Menkaure built at Giza; under the Third, Djoser's architect Imhotep raised the first monumental stone building at Saqqara. These projects imply a centralized state capable of mobilizing labor, organizing supplies, and directing skilled craftsmen across generations.\n\nThe period is documented by the Pyramid Texts (funerary spells carved in late Old Kingdom pyramids), by the Palermo Stone's royal annals, and by the tombs of officials, whose biographies and reliefs describe their careers. Yet for all this, narrative history is thin: we know reign lengths and building campaigns, not the events between them.\n\nThe end of the Old Kingdom is traditionally attributed to the weakness of later Sixth Dynasty kings and possibly to drought — evidence from Nile flood records and climate studies suggests a period of low floods — but the collapse was probably gradual, not a single catastrophe.",
        ),
        reading(
          "middle-kingdom-overview",
          "The Middle Kingdom",
          16,
          "Reunification, literature, and the classical language.",
          "The Middle Kingdom (c. 2055–1650 BCE, Dynasties 11–13) opened with the reunification of Egypt by the Theban king Mentuhotep II, ending the First Intermediate Period. The Twelfth Dynasty that followed — the great age of the Middle Kingdom — extended control into Nubia, built fortresses there, and reorganized the administration.\n\nThe Middle Kingdom is the great age of Egyptian literature: the Tale of Sinuhe, the Dialogue of a Man with His Ba, and the wisdom texts. It is also the period of Middle Egyptian, the classical stage of the language, which remained a prestigious written medium for centuries after it ceased to be spoken.\n\nThe kingdom declined in the Thirteenth Dynasty, when a rapid succession of kings — some of obscure origin — gave way to the Second Intermediate Period. The evidence for the Thirteenth Dynasty is thin, and modern chronologies of its end vary.",
        ),
        video(
          "new-kingdom-overview",
          "The New Kingdom",
          20,
          "The empire age: Thebes, the conquests, and the great builders.",
          "The New Kingdom (c. 1550–1069 BCE, Dynasties 18–20) is the era most people picture when they imagine Egypt: Hatshepsut, Akhenaten, Tutankhamun, Ramesses II. It began when Theban rulers expelled the Hyksos and reunified Egypt, founding the Eighteenth Dynasty.\n\nThe New Kingdom was an empire. Its armies campaigned into the Levant and deep into Nubia; its temples — Karnak, Luxor, Abu Simbel — were built on a colossal scale; its court was international, corresponding with the kings of Mitanni, Babylon, and the Hittites (the Amarna letters preserve this diplomacy).\n\nThe empire age declined in the Twentieth Dynasty, when Libyan incursions, economic strain, and the loss of Asian territories weakened central authority. The Ramesside period that followed is documented by the strike papyri and the administrative records of Deir el-Medina — the voices of ordinary people living through the decline.",
        ),
      ],
    ),
    module(
      "the-fragmented-centuries",
      "The Fragmented Centuries",
      "The Intermediate Periods and the Late Period — history's gaps.",
      [
        reading(
          "first-intermediate",
          "The First Intermediate Period",
          15,
          "The collapse after the Old Kingdom — and the silence of the record.",
          "The First Intermediate Period (c. 2181–2055 BCE) followed the end of the Old Kingdom. Central authority fragmented; regional rulers — sometimes called 'nomarchs' — asserted local power. Later Egyptian tradition remembered it as an age of chaos, and the literary genre of 'lamentations' paints a picture of social collapse.\n\nBut the evidence is thin and the picture is probably too dark. Archaeology shows regional centers flourishing — provincial temples were built and decorated — and the period is likely one of redistribution of power rather than civilizational collapse. The 'chaos' may be as much ideological as historical: later writers used the memory of collapse to praise the reunifiers.\n\nThe First Intermediate Period is a key lesson in reading history: when the record is silent, we must resist the temptation to fill the silence with a story. Here, almost no contemporary narrative survives — which is itself a historical fact.",
        ),
        reading(
          "second-intermediate-and-hyksos",
          "The Second Intermediate Period and the Hyksos",
          17,
          "The Hyksos in the Delta — invasion, migration, or gradual migration of power?",
          "During the Second Intermediate Period (c. 1650–1550 BCE), Egypt was divided: Theban kings ruled the south while the Hyksos — a line of rulers of probably West Semitic origin — controlled the Delta from Avaris. Manetho's account, preserved centuries later, describes an invasion and conquest; modern scholars are more cautious.\n\nThe Hyksos adopted Egyptian royal titulary, worshipped Egyptian gods alongside their own (the storm god Baal, identified with Set), and introduced the horse-drawn chariot and the composite bow — technologies that later became central to Egypt's empire age. Their capital, Avaris (Tell el-Dab'a), shows a mixed culture in its excavated remains.\n\nWhether the Hyksos arrived as conquerors or rose through gradual settlement and local power is unresolved. The later Egyptian tradition, which framed them as foreign oppressors, served the Theban kings' propaganda: the reunification could be presented as liberation. The archaeology suggests something more complex.",
        ),
        reading(
          "third-intermediate",
          "The Third Intermediate Period",
          15,
          "The most poorly documented — and most debated — centuries of Egyptian history.",
          "The Third Intermediate Period (c. 1069–664 BCE) followed the New Kingdom. Egypt fragmented again: the Twenty-first Dynasty ruled from Tanis in the north while the High Priests of Amun controlled Thebes in the south; later, Libyan-descended dynasties (the Twenty-Second) and Nubian kings (the Twenty-Fifth) ruled parts or all of the country.\n\nThe chronology of this period is notoriously difficult. King lists overlap, the lengths of reigns are uncertain, and the relationship between the northern and southern lines is unclear — at times there may have been two contemporaneous kings. New finds, including the royal cache at Tanis (discovered in 1939), continue to revise the picture.\n\nIt was not a dark age in culture: temple building continued, the arts flourished in distinctive forms, and the Twenty-Fifth (Kushite) dynasty famously revived Old Kingdom styles. But for the historian, the Third Intermediate Period shows how much of Egyptian history is reconstructed from fragmentary and ambiguous sources.",
        ),
        reading(
          "late-period-and-persians",
          "The Late Period and the Persians",
          14,
          "Native revival, Persian conquest, and the last age of pharaonic rule.",
          "The Late Period (c. 664–332 BCE) saw native rule restored under the Twenty-Sixth (Saite) Dynasty, whose kings presented themselves as revivers of Old Kingdom culture — copying archaic styles in art and reviving ancient texts. Whether this was a genuine renaissance or an antiquarian revival is debated; it certainly shaped later Egyptian self-image.\n\nNative rule was twice interrupted by Persian conquest (525 BCE and 343 BCE). Persian kings ruled Egypt as pharaohs, adopting Egyptian titulary while Egypt was a satrapy of a vast empire. The experiences of these periods are documented in the Elephantine papyri and the archives of the Jewish community at Elephantine.\n\nThe period ended when Alexander the Great took Egypt in 332 BCE, ending two millennia of native and Persian rule alike — and beginning the Greek-speaking Ptolemaic age.",
        ),
      ],
    ),
    module(
      "synthesis",
      "Synthesis",
      "Putting the framework to work.",
      [
        exercise(
          "reading-the-chronology",
          "Reading the Chronology",
          15,
          "A guided exercise in placing kings, periods, and evidence in order.",
          "In this exercise you will work with the chronology directly. Take the following rulers and place them in order: Djoser, Mentuhotep II, Hatshepsut, Ramesses II, Cleopatra VII, Khufu, Akhenaten, Thutmose III.\n\nThen answer these questions in your notebook:\n\n1. Which two of these rulers lived in the same century? What is the evidence for their dates?\n2. Which of them is separated from Khufu by more time than separates you from the Roman Empire?\n3. Pick one ruler whose reign length is debated. What sources give the length, and what are their limits?\n\nThe point is not the answers themselves but the habit: every date is a claim with a source, and the source has limits. Use the Egyptian Dynasties Timeline resource to check your work, and flag any point where the timeline uses 'c.' — those are the places where the evidence is softest.",
        ),
        quiz("knowledge-check", "Knowledge Check", 10, "Test your understanding of the dynastic framework.", "quiz-dynasties-1"),
      ],
    ),
  ],
});

const pharaohs = defineCourse({
  id: "course-the-pharaohs-of-egypt",
  slug: "the-pharaohs-of-egypt",
  title: "The Pharaohs of Egypt",
  subtitle: "Kingship as an institution — and the rulers who embodied it",
  description:
    "The pharaoh was king, priest, judge, and commander — in theory the link between gods and humans. This course examines kingship as an institution: what the office claimed, how a king's names and images were constructed, and what the evidence reveals about individual rulers from Narmer to Cleopatra.",
  shortDescription:
    "How Egyptian kingship worked — the titulary, the ideology, and the great rulers from Narmer to Cleopatra.",
  category: "pharaohs",
  level: "intermediate",
  instructorId: "instr-layla-hassan",
  coverImage: "/covers/cover-pharaohs.svg",
  learningOutcomes: [
    "Explain the institution of Egyptian kingship and its ideological claims",
    "Read the five-name royal titulary",
    "Distinguish evidence from propaganda in royal inscriptions",
    "Place major rulers in their dynastic and historical context",
    "Discuss the evidence for female kingship in Egypt",
  ],
  requirements: ["Familiarity with Egyptian chronology (the Dynasties course is helpful)."],
  tags: ["kingship", "titulary", "royal inscriptions", "rulers"],
  featured: true,
  language: "English",
  publishedAt: "2025-02-01",
  updatedAt: "2025-06-10",
  modules: [
    module(
      "the-institution",
      "The Institution",
      "What it meant to be king in ancient Egypt.",
      [
        video(
          "what-it-meant-to-be-king",
          "What It Meant to Be King",
          18,
          "The ideology of kingship: Horus on earth, son of Ra, maintainer of maat.",
          "Egyptian kingship was built on theology. The king was the living Horus — the falcon god who, in myth, avenged his father Osiris and took his rightful place on the throne. In death the king became Osiris; in life he was Horus. From the Old Kingdom onward, he was also 'Son of Ra', the sun god's earthly offspring.\n\nThe king's central duty was maat: maintaining the order of the cosmos against chaos. This was not abstract. It meant ruling justly, presenting the correct offerings to the gods, defeating Egypt's enemies, and ensuring the flood and the harvest. When things went wrong — famine, invasion, weak reigns — the ideology provided both an explanation and a remedy.\n\nIn practice, the office was more complicated than the ideology. Some kings ruled for decades; others reigned briefly and left barely a trace. Some were children, some were usurpers, and a few were women. The institution proved remarkably flexible — and remarkably durable, lasting roughly three thousand years.",
        ),
        reading(
          "the-royal-titulary",
          "The Royal Titulary",
          16,
          "The five names of an Egyptian king, and what each one asserted.",
          "From the Middle Kingdom, a king's full titulary consisted of five names. The Horus name, the oldest element, identified the king with the falcon god and was written in a serekh — a palace-façade frame. The Two Ladies name associated the king with the goddesses Nekhbet and Wadjet of Upper and Lower Egypt. The Golden Horus name's precise meaning is debated.\n\nThe two most familiar names are written in cartouches: the throne name (prenomen), introduced as 'King of Upper and Lower Egypt', and the birth name (nomen), introduced as 'Son of Ra'. When a book quotes 'Ramesses', it is giving the birth name; his throne name was User-maat-re, meaning 'Rich in harmony, strong in truth'.\n\nThe titulary was a program in miniature. Choosing names was policy: Akhenaten's names invoked the Aten; Ramesses II's name invoked Ra's eternal youth. Reading a titulary is reading a statement of intent.",
        ),
        reading(
          "kingship-and-the-gods",
          "Kingship and the Gods",
          15,
          "The king as the link between the divine and human worlds.",
          "The Egyptian king stood between gods and humans. In temple reliefs he is shown making offerings to the gods — only the king could approach them properly, though priests acted on his behalf. The temple was 'the king's house', and every ritual was performed in his name, even when he was far away or dead.\n\nThe king was also the supreme judge. Legal texts and wisdom literature present the king as the source of justice, and the ideal king — like the mythic ruler in the Instructions of Merikare — was one who 'quieted the weeper' and protected the weak. In practice, courts and officials administered justice; the king was the fountainhead, not the day-to-day judge.\n\nThe relationship had limits. Kings who failed the ideals — weak, foreign, or female rulers — were sometimes erased from the record, as Hatshepsut's name was in places. The ideology was powerful enough to punish those who departed from it.",
        ),
      ],
    ),
    module(
      "early-kings",
      "Early Kings",
      "The founders: from Narmer to the pyramid builders.",
      [
        reading(
          "narmer-and-the-first-kings",
          "Narmer and the First Kings",
          16,
          "The ruler of the Narmer Palette — and what we can and cannot say about him.",
          "The earliest kings are the hardest to know. Narmer, whose name appears on the famous palette found at Hierakonpolis, is traditionally credited with uniting Egypt. The palette shows him wearing both the white crown of Upper Egypt and the red crown of Lower Egypt, and smiting a captive — images of unification and victory.\n\nBut the palette is a ceremonial object, not a chronicle. Its scenes are ideological: the smiting motif was a standard image of royal power, and the crowns may represent the king's claim over both lands rather than a single act of conquest. Whether Narmer unified Egypt by war, by alliance, or inherited a partly unified state is unresolved.\n\nLater tradition identified Narmer with Menes, the semi-legendary first king of Manetho's list. The identification is plausible but not certain. What is clear is that the first dynasties built the institutions — the writing system, the administration, the royal cemetery at Abydos — on which pharaonic civilization rested.",
        ),
        reading(
          "the-fourth-dynasty-kings",
          "The Fourth Dynasty Kings",
          15,
          "Sneferu, Khufu, Khafre, Menkaure: the pyramid builders.",
          "The Fourth Dynasty (c. 2613–2494 BCE) produced the Great Pyramids. Sneferu, the dynasty's founder, built three pyramids — the Bent and Red Pyramids at Dahshur and one at Meidum — experiments that led to the true pyramid form. His son Khufu built the Great Pyramid at Giza; his grandson Khafre built the second pyramid and, probably, the Sphinx; Menkaure built the third, much smaller pyramid.\n\nWhat do we actually know about these kings? Their names, their reign lengths (from later king lists, with gaps), their building projects (from the monuments themselves), and the organization of their workforces (from the workers' village at Giza). Little else. The Great Pyramid's internal chambers preserve only Khufu's name in red paint — a workman's graffito, sealed for millennia.\n\nLater Egyptians themselves looked back at these kings with awe: the Westcar Papyrus tells tales of Khufu's court and the magicians who predicted his destiny. The pyramids outlasted the memory of their builders by thousands of years — the Greeks, five thousand years later, still marveled at them.",
        ),
      ],
    ),
    module(
      "great-rulers",
      "Great Rulers",
      "The famous reigns, each in its own context.",
      [
        reading(
          "hatshepsut-preview",
          "Hatshepsut: The Woman Who Ruled as King",
          14,
          "A preview of the most remarkable reign in Egyptian history.",
          "Hatshepsut (c. 1479–1458 BCE) is one of the very few women to rule Egypt as king in her own right. She began as regent for her stepson Thutmose III, then adopted the full royal titulary and ruled for roughly two decades, building her temple at Deir el-Bahari and sending an expedition to the land of Punt.\n\nHer reign is remarkable for how she justified it: in her own temple text at Deir el-Bahari, she claims the god Amun fathered her and that her father Thutmose I designated her as heir. These claims are political theology — the standard arguments for kingship, pressed into the service of a woman's claim.\n\nLater, her monuments were damaged and her name erased in places — but when and why is debated. Her story is a study in how evidence is read: we must weigh what she claimed, what her successors did, and what the stones themselves show.",
        ),
        reading(
          "akhenaten-preview",
          "Akhenaten: The Heretic King",
          14,
          "A preview of the reign that broke the rules.",
          "Akhenaten (c. 1353–1336 BCE), born Amenhotep IV, changed the religion of Egypt in his fifth regnal year: he elevated the Aten — the sun disk — above the traditional gods, changed his name to 'Effective for the Aten', and moved the capital to a new city, Akhetaten (Tell el-Amarna).\n\nThe motives are debated. Was this monotheism, henotheism, or a political move against the powerful priesthood of Amun? Was it spiritual conviction or royal ideology pushed to an extreme? The evidence — the hymns to the Aten, the ruins of Akhetaten, the art — supports no single answer, and the question is one of the most discussed in Egyptology.\n\nHis reign also changed art: the naturalistic, elongated style of Amarna broke with three millennia of convention. His successors — including Tutankhamun — reversed his religious changes and tried to erase his memory.",
        ),
        reading(
          "ramses-ii-preview",
          "Ramesses II: The Great Builder",
          14,
          "A preview of the longest-lived of the great pharaohs.",
          "Ramesses II (c. 1279–1213 BCE) reigned for about sixty-six years — one of the longest reigns in history — and lived into his nineties, if the evidence for his mummy's age is trusted. He fought the Hittites at Kadesh, signed one of the earliest surviving peace treaties, and built more monuments than almost any other king: Abu Simbel, the Ramesseum, additions at Karnak, and a new capital at Pi-Ramesses.\n\nRamesses was also a propagandist of extraordinary energy. His inscriptions present Kadesh as a personal triumph; the treaty text, by contrast, is sober. Comparing the two documents is a lesson in reading royal texts critically.\n\nHe had many children — some depicted in procession at Abu Simbel — and his tomb (KV7) in the Valley of the Kings was the largest planned there, though badly damaged by floods.",
        ),
        reading(
          "cleopatra-vii",
          "Cleopatra VII: The Last Pharaoh",
          16,
          "The final ruler of the Ptolemaic dynasty — and the end of pharaonic Egypt.",
          "Cleopatra VII (51–30 BCE) was the last active ruler of the Ptolemaic kingdom and, in the Egyptian tradition, a pharaoh in her own right. The Ptolemies were Greek-speaking Macedonians, but they adopted pharaonic titles and built Egyptian temples; Cleopatra is notable in the dynasty for learning the Egyptian language — earlier Ptolemies ruled in Greek.\n\nHer political alliances with Julius Caesar and Mark Antony, and her defeat by Octavian (the future Augustus), ended the Hellenistic age: Egypt became a Roman province. The Roman propaganda that followed — the 'oriental queen' seducing Roman generals — has shaped her image ever since, and separating the propaganda from the ruler is a central task of her study.\n\nHer coins, her temple reliefs at Dendera and Philae, and the contemporary accounts of Plutarch give a more complex figure than the legend: a polyglot ruler, a shrewd diplomat, and the last of a line that ruled Egypt for three centuries.",
        ),
      ],
    ),
    module(
      "the-record",
      "The Record",
      "Queens, co-regents, and the silences in the king lists.",
      [
        reading(
          "queens-and-co-regents",
          "Queens and Co-regents",
          15,
          "The women of the court, and the few who ruled as kings.",
          "The Egyptian court had powerful queens — 'king's wives', 'king's mothers', 'god's wives of Amun' — whose influence is visible in art, inscriptions, and occasionally in the record of their own monuments. Queen Tiye, wife of Amenhotep III, was depicted as her husband's equal in some statuary and corresponded with foreign kings (her letters survive at Amarna).\n\nBut queenship was not kingship. Women ruled as king only rarely — Hatshepsut is the most securely attested, with Sobekneferu, Twosret, and possibly Nitocris (whose existence is debated) as other candidates. The king lists record the kings; the women beside them are usually recorded only as wives and mothers.\n\nCo-regency is another puzzle. Some reigns — Hatshepsut and Thutmose III, Amenhotep III and Akhenaten — may have overlapped, but the evidence (dated monuments, administrative records) is often ambiguous. Co-regency may have been a solution to succession, or a later scribe's confusion. Both interpretations have supporters.",
        ),
        quiz("knowledge-check", "Knowledge Check", 10, "Test your understanding of the pharaohs and the institution of kingship.", "quiz-pharaohs-1"),
      ],
    ),
  ],
});

const oldKingdom = defineCourse({
  id: "course-the-old-kingdom",
  slug: "the-old-kingdom",
  title: "The Old Kingdom",
  subtitle: "The pyramid age — monuments, builders, and the evidence",
  description:
    "The Old Kingdom (c. 2686–2181 BCE) gave Egypt its most famous monuments and its first great flowering of art and administration. This course examines the pyramid age critically: how the pyramids were built (on the evidence, not the myths), the workers who built them, and the collapse that ended the age.",
  shortDescription:
    "The pyramid age: the Step Pyramid to Giza, the builders, and the fall of the Old Kingdom.",
  category: "pharaohs",
  level: "intermediate",
  instructorId: "instr-theo-mitchell",
  coverImage: "/covers/cover-old-kingdom.svg",
  learningOutcomes: [
    "Trace the development from mastaba to true pyramid",
    "Evaluate the evidence for how the pyramids were built",
    "Describe the workforce of Giza and what its village reveals",
    "Explain the likely causes of the Old Kingdom's collapse",
    "Recognize the Pyramid Texts and their significance",
  ],
  requirements: ["Foundations of Ancient Egypt or equivalent."],
  tags: ["pyramids", "giza", "saqqara", "old kingdom", "building"],
  language: "English",
  publishedAt: "2025-02-01",
  updatedAt: "2025-06-10",
  modules: [
    module(
      "the-pyramid-age",
      "The Pyramid Age",
      "From the first stone monument to the Great Pyramids.",
      [
        video(
          "djoser-and-the-step-pyramid",
          "Djoser and the Step Pyramid",
          18,
          "How a stacked mastaba became the first monumental stone building in history.",
          "The Step Pyramid of Djoser (Third Dynasty, c. 2670 BCE) at Saqqara is generally considered the first large-scale stone building in the world. Its architect, Imhotep, was later deified — a rare honor for a non-royal.\n\nThe design evolved in stages, which the excavations of Jean-Philippe Lauer revealed: it began as a conventional mudbrick-and-stone mastaba, was enlarged, then had four additional steps added to become the six-tiered monument we see. The burial chambers below were — and remain — complex, with a granite burial chamber and miles of underground corridors.\n\nThe Step Pyramid was an experiment in stone. Everything about it — the scale, the organization, the engineering — was new. Within a few decades, Sneferu's builders would refine the form into the true pyramid, and Khufu's would perfect it at Giza.",
        ),
        reading(
          "sneferu-and-the-first-true-pyramids",
          "Sneferu and the First True Pyramids",
          16,
          "The king who built three pyramids — and perfected the form.",
          "Sneferu, founder of the Fourth Dynasty (c. 2613–2589 BCE), built more pyramid volume than any other king. His first pyramid, at Meidum, began as a step pyramid and was later converted — it partially collapsed, and its ruined form may have been visible to later Egyptians as a caution.\n\nHis Bent Pyramid at Dahshur changes angle partway up (from about 54 to 43 degrees), most likely after construction faults appeared. His Red Pyramid, also at Dahshur, was the first successful true pyramid — its angle is conservative, suggesting the builders had learned from failure. These three monuments are a record of trial and error in stone.\n\nSneferu's experiments made Khufu's Great Pyramid possible. The Great Pyramid's precision — its base level to within a few centimeters, its alignment to the cardinal points within a fraction of a degree — rests on the engineering knowledge his father's builders accumulated.",
        ),
        reading(
          "the-giza-pyramids",
          "The Giza Pyramids",
          20,
          "Khufu, Khafre, Menkaure: the three pyramids and the Great Sphinx.",
          "The three pyramids of Giza were built during the Fourth Dynasty, roughly 2580–2510 BCE. The Great Pyramid of Khufu originally stood about 146.6 metres tall and contains about 2.3 million blocks of limestone and granite — the largest single building in the world for nearly four thousand years.\n\nThe pyramid of Khafre appears taller because it stands on higher bedrock; its complex includes the Great Sphinx, a carved lion with a royal head. The attribution of the Sphinx to Khafre is widely accepted but rests on circumstantial evidence — the Dream Stele between its paws is much later, and the erosion patterns have generated alternative (and disputed) dating claims.\n\nThe pyramid of Menkaure is far smaller, built partly with costly Aswan granite; its mortuary temple was completed in mudbrick by a later king. Together the three monuments represent the peak of the pyramid age — and its limits: the scale of building after Menkaure shrank sharply.",
        ),
      ],
    ),
    module(
      "building-giza",
      "Building Giza",
      "How the pyramids were built — on the evidence.",
      [
        reading(
          "how-were-they-built",
          "How Were They Built?",
          18,
          "Ramps, logistics, and the honest limits of our knowledge.",
          "The question 'how were the pyramids built?' has a solid core of evidence and a large penumbra of speculation. The solid core: the stones were quarried (the quarry marks survive), transported on sledges (a famous painting in the tomb of Djehutihotep shows a statue being moved this way, with water poured before the sledge to reduce friction), and raised into place using ramps.\n\nThe debate is over the ramps. Straight ramps long enough to reach the top would have been immense; spiral ramps wrapping the pyramid are supported by some evidence but would have made the corners hard to build; an internal ramp (the proposal of architect Jean-Pierre Houdin) has some microgravimetric support but remains contested. No ramp survives, so the question stays open — and it is honest to say so.\n\nThe logistics are as impressive as the engineering: feeding and housing thousands of workers, quarrying and transporting millions of blocks, all within a reign of about twenty years. That the Egyptians achieved this is certain; exactly how is a research question, not a settled fact.",
        ),
        reading(
          "the-workers-of-giza",
          "The Workers of Giza",
          14,
          "The village of the pyramid builders — and what it reveals about labor.",
          "In the 1990s, archaeologist Mark Lehner and Zahi Hawass excavated the 'Lost City of the Pyramids' at Giza: the village that housed the workers who built Khufu's and Khafre's pyramids. The remains — bakeries, breweries, sleeping halls, a cemetery — reveal an organized, state-run labor operation.\n\nThe workforce was not enslaved. The evidence suggests a rotating corvée labor force: farmers who worked during the Nile flood (when farming was impossible), housed and fed by the state, alongside a permanent corps of skilled craftsmen. Their burial near the pyramids, their medical care (skeletons show healed fractures), and their rations of bread and beer all point to organized, honored labor.\n\nThe old image of slaves lashed under the whip comes from much later sources — Herodotus, and the biblical Exodus narrative read into the wrong monuments. The archaeological record, by contrast, shows one of the most remarkable labor organizations of the ancient world.",
        ),
        reading(
          "the-sphinx",
          "The Great Sphinx",
          14,
          "The lion of Giza — its attribution, its eroded face, and its later fame.",
          "The Great Sphinx at Giza — a lion's body carved from the bedrock with a royal human head — is generally attributed to Khafre, whose pyramid complex it adjoins. The attribution is supported by the position of the Sphinx within Khafre's causeway and by the resemblance of the face (as preserved) to Khafre's statues, though the face is badly eroded.\n\nThe Sphinx has been buried and excavated repeatedly. The 'Dream Stele' between its paws (Fourteenth century BCE, of Thutmose IV) tells how the prince, then a hunter, fell asleep in its shadow and dreamed the Sphinx promised him the kingship if he cleared the sand — an early example of royal legitimation by an ancient monument.\n\nModern claims that the Sphinx's erosion shows water damage from a much earlier period are not accepted by mainstream Egyptology; the erosion is more plausibly explained by wind, sand, and salt in the stone. It is a good example of how a single monument can attract both scholarship and speculation.",
        ),
      ],
    ),
    module(
      "the-end-of-the-age",
      "The End of the Age",
      "The last pyramids, the collapse, and what followed.",
      [
        reading(
          "the-fifth-and-sixth-dynasties",
          "The Fifth and Sixth Dynasties",
          15,
          "The sun temples, the Pyramid Texts, and the slow decline.",
          "After the Fourth Dynasty, the pyramids grew smaller and the emphasis shifted. The Fifth Dynasty kings built sun temples — open-air sanctuaries with squat obelisks honoring Ra — and the earliest Pyramid Texts were carved in the chambers of their pyramids: the oldest large religious texts in the world.\n\nThe Sixth Dynasty saw the central state weaken. The provincial nobility grew stronger (their tombs at sites like Qubbet el-Hawa and Elkab show wealthy regional families), and Pepi II's very long reign — later tradition credits him with ninety years, though the figure is debated — may have contributed to succession problems.\n\nBy the end of the Sixth Dynasty, the Old Kingdom collapsed into the First Intermediate Period. The collapse was probably gradual: drought, low Nile floods, provincial power, and the cost of the pyramid age all played a part. Later Egyptian tradition remembered it as chaos; the archaeological record suggests a slower, messier transition.",
        ),
        reading(
          "the-collapse-of-the-old-kingdom",
          "The Collapse of the Old Kingdom",
          15,
          "Why the pyramid age ended — and why 'collapse' is a tricky word.",
          "The end of the Old Kingdom (c. 2181 BCE) is one of the great transitions of ancient history. The immediate trigger is unknown; the longer causes are better documented. Climate studies and Nile flood records suggest a period of low floods and drought; the administrative system that had fed the pyramid age was overstretched; and the provincial elite, once dependent on the king, had grown independent.\n\nThe evidence for the collapse is mostly indirect. We lack contemporary narratives of the catastrophe — the 'lamentations' that describe it are literature, written later in the Middle Kingdom, using the memory of collapse for moral and political effect. What the archaeology shows is a real change: the pyramid building stops, the royal cemetery moves, and regional centers flourish.\n\nThe lesson of the collapse is methodological. When a civilization 'falls', the evidence rarely shows a single moment of ruin; it shows a long redistribution of power, wealth, and population — and the texts that call it chaos are usually written by the people who lost.",
        ),
        quiz("knowledge-check", "Knowledge Check", 10, "Test your understanding of the Old Kingdom.", "quiz-old-kingdom-1"),
      ],
    ),
  ],
});

const middleKingdom = defineCourse({
  id: "course-the-middle-kingdom",
  slug: "the-middle-kingdom",
  title: "The Middle Kingdom",
  subtitle: "Reunification, literature, and the classical age",
  description:
    "The Middle Kingdom (c. 2055–1650 BCE) is the classical age of Egyptian civilization: the reunification under Theban kings, the literature that defined the language, and the expansion into Nubia. This course examines the era's achievements and the debates around its end.",
  shortDescription:
    "The reunification of Egypt, the great literature, and the classical language of the Middle Kingdom.",
  category: "pharaohs",
  level: "intermediate",
  instructorId: "instr-amelia-hart",
  coverImage: "/covers/cover-middle-kingdom.svg",
  learningOutcomes: [
    "Explain how Mentuhotep II reunified Egypt",
    "Identify the major works of Middle Kingdom literature",
    "Describe Middle Egyptian and why it is the classical stage",
    "Trace the Twelfth Dynasty's expansion into Nubia",
    "Discuss the causes of the Second Intermediate Period",
  ],
  requirements: ["Foundations of Ancient Egypt or equivalent."],
  tags: ["middle kingdom", "literature", "mentuhotep", "nubia", "classical"],
  language: "English",
  publishedAt: "2025-02-15",
  updatedAt: "2025-06-10",
  modules: [
    module(
      "reunification",
      "Reunification",
      "The end of the First Intermediate Period and the Theban victory.",
      [
        video(
          "mentuhotep-and-the-reunification",
          "Mentuhotep and the Reunification",
          16,
          "How the Theban king reunited Egypt after 150 years of division.",
          "The Middle Kingdom begins with the reunification of Egypt by Mentuhotep II (c. 2055 BCE), the Theban king of the Eleventh Dynasty. His victory over the Herakleopolitan rulers of the north ended the First Intermediate Period — roughly 150 years of division.\n\nThe evidence for the reunification is a mixture: his mortuary temple at Deir el-Bahari (later used as a model by Hatshepsut), his inscriptions, and the tombs of his officials at Thebes. The campaign itself is not narrated in detail in surviving texts; later tradition, and the king's own monuments, frame it as the restoration of order (maat) after chaos.\n\nMentuhotep's innovation was to absorb the defeated north rather than simply rule it: northern officials appear in his administration, and the reunification was consolidated by his successors. The lesson is political as much as military — how to rebuild a divided state.",
        ),
        reading(
          "the-twelfth-dynasty",
          "The Twelfth Dynasty",
          16,
          "The great age of the Middle Kingdom: Amenemhat I to the end.",
          "The Twelfth Dynasty (c. 1985–1773 BCE) is the classical age of the Middle Kingdom. Its founder, Amenemhat I, moved the capital to Itjtawy near the Fayum, near the entrance to the Fayum depression — a strategic site controlling both the river and the oasis.\n\nThe dynasty's rulers were energetic administrators and builders. Senusret III campaigned deep into Nubia, built a string of fortresses there, and was later remembered as a fearsome warrior — the 'Sebekhotep' of the Nubian campaign texts. Amenemhat III exploited the Fayum for agriculture and mining (his reign's turquoise and copper mines in Sinai are documented by inscriptions).\n\nThe dynasty declined in the Thirteenth Dynasty, when a rapid succession of kings — some of obscure origin, some possibly usurpers — weakened central authority and opened the way to the Second Intermediate Period.",
        ),
      ],
    ),
    module(
      "a-classical-age",
      "A Classical Age",
      "The literature, the language, and the expansion south.",
      [
        reading(
          "literature-of-the-middle-kingdom",
          "Literature of the Middle Kingdom",
          15,
          "The Tale of Sinuhe and the golden age of Egyptian letters.",
          "The Middle Kingdom is the great age of Egyptian literature. The Tale of Sinuhe — often called the masterpiece of Egyptian literature — tells of a court official who flees Egypt after the death of Amenemhat I, lives abroad, and returns home in triumph. Its narrative art, its rhetoric, and its psychological portrait of a man in exile are remarkable.\n\nThe wisdom literature — "The ship of the mind" is how one text describes the educated mind — also includes the Instructions of Amenemhat, which teach how to live and rule; the Eloquent Peasant, a story of justice and rhetoric; and the Dialogue of a Man with His Ba, a meditation on death and life that reads like philosophy.\n\nMiddle Kingdom literature was so admired that it was copied for centuries afterward — much as classical authors were copied in later cultures. Its survival is also a warning: we have these texts because scribes copied them, and what they chose to copy is what we read.",
        ),
        reading(
          "middle-egyptian-the-language",
          "Middle Egyptian: The Classical Language",
          14,
          "Why Middle Egyptian is the stage students learn first.",
          "Middle Egyptian is the classical stage of the ancient Egyptian language, spoken and written roughly 2000–1350 BCE. It is the language of the great literature, of the hymns, and of the monumental inscriptions — and, like Latin in the Middle Ages, it remained a prestigious written language long after it ceased to be spoken.\n\nIts grammar is distinctive: verb-first word order in verbal sentences, suffix pronouns attached to nouns and prepositions ('house-i' = 'my house'), gendered nouns (the feminine usually marked with a 't'), and a system of 'pseudo-participle' constructions that express tense and aspect without fixed verb forms.\n\nStudents learn Middle Egyptian first because the literature is richest in it and because the sign list is most stable. Later stages — Late Egyptian, Demotic — are closer to the spoken language of their times, but the classical stage unlocks the texts that shaped the tradition.",
        ),
        reading(
          "nubia-and-the-forts",
          "Nubia and the Forts",
          14,
          "The Twelfth Dynasty's expansion into Nubia — and its legacy.",
          "Under the Twelfth Dynasty, Egypt expanded deep into Nubia, the region upriver between the first and second cataracts. Senusret III's campaign is documented by his stelae and by the fortresses he built — the most famous at Buhen, with its massive walls and moat.\n\nThe forts were not only military. They controlled trade in gold, ivory, ebony, and incense — the wealth of the south — and administered the Nubian population. The archaeology of the forts (granaries, workshops, sealings) shows a state-run frontier economy.\n\nThe conquest had long consequences. Nubia was later ruled by Egypt (the 'Kush' period), then by the Kingdom of Kush itself, whose Twenty-Fifth Dynasty ruled all Egypt. The Middle Kingdom forts are the beginning of a long, complicated relationship between the two Nile valleys — one that modern archaeology is still working to understand, often in collaboration with Sudanese scholars.",
        ),
      ],
    ),
    module(
      "the-decline",
      "The Decline",
      "The Thirteenth Dynasty and the slide into the Second Intermediate Period.",
      [
        reading(
          "the-thirteenth-dynasty",
          "The Thirteenth Dynasty",
          13,
          "A century of short reigns and fading authority.",
          "The Thirteenth Dynasty (c. 1773–1650 BCE) is one of the least documented periods of the Middle Kingdom. The king lists record a rapid succession of rulers — some reigned only months — and the monuments shrink in scale and quality. The cause of the decline is unclear; the loss of the royal line's authority, provincial revolts, and possibly economic strain all played a part.\n\nThe period's chronology is uncertain, and the evidence is thin: a few statues, a few stelae, and the tomb of King Hor at Dahshur (with its famous wooden statue of the king's Ka). The royal power fragmented; the Delta, in particular, drifted away from Theban control.\n\nThe Thirteenth Dynasty is a reminder that 'decline' is not a single event but a process — and that its record is always thinner than the record of great reigns.",
        ),
        reading(
          "the-second-intermediate-transition",
          "The Second Intermediate Period: The Transition",
          14,
          "The Hyksos, the Theban revival, and the end of the Middle Kingdom.",
          "The Second Intermediate Period (c. 1650–1550 BCE) began when the Delta fell to the Hyksos — rulers of probable West Semitic origin based at Avaris (Tell el-Dab'a) — while Theban kings of the Seventeenth Dynasty held the south. The two powers coexisted uneasily for a century.\n\nThe Hyksos adopted Egyptian royal titulary and religion while introducing new military technology — the horse-drawn chariot, the composite bow, and new armor. The later Egyptian tradition, preserved in Manetho, framed them as foreign oppressors; the archaeology at Avaris suggests a more complex story of migration, settlement, and cultural mixing.\n\nThe Theban kings of the Seventeenth Dynasty — the last of whom, Kamose, launched the revolt — reunified Egypt and founded the New Kingdom. The revolt was remembered as liberation, and its memory was used for centuries to legitimize the Eighteenth Dynasty. As always with founding myths, the story deserves a critical reading.",
        ),
        quiz("knowledge-check", "Knowledge Check", 10, "Test your understanding of the Middle Kingdom.", "quiz-middle-kingdom-1"),
      ],
    ),
  ],
});

const newKingdom = defineCourse({
  id: "course-the-new-kingdom",
  slug: "the-new-kingdom",
  title: "The New Kingdom",
  subtitle: "The empire age — Thebes, conquest, and the great builders",
  description:
    "The New Kingdom (c. 1550–1069 BCE) was Egypt's empire age: the age of Hatshepsut, Akhenaten, Tutankhamun, and Ramesses II. This course follows the rise of Thebes, the conquests in Asia and Nubia, the great temples, and the long decline that ended the era.",
  shortDescription:
    "The rise and fall of the empire age: Thebes, the conquests, Kadesh, and the great temples.",
  category: "pharaohs",
  level: "intermediate",
  instructorId: "instr-david-aden",
  coverImage: "/covers/cover-new-kingdom.svg",
  learningOutcomes: [
    "Explain how the Theban rulers founded the New Kingdom",
    "Describe the empire's expansion and its limits",
    "Analyze the Battle of Kadesh and its sources",
    "Identify the great temples of Thebes and their meaning",
    "Trace the decline of the New Kingdom",
  ],
  requirements: ["Foundations of Ancient Egypt or equivalent."],
  tags: ["new kingdom", "empire", "thebes", "kadesh", "karnak"],
  language: "English",
  publishedAt: "2025-03-01",
  updatedAt: "2025-06-10",
  modules: [
    module(
      "the-rise-of-thebes",
      "The Rise of Thebes",
      "From the revolt against the Hyksos to the imperial capital.",
      [
        video(
          "ahmose-and-the-expulsion-of-the-hyksos",
          "Ahmose and the Expulsion of the Hyksos",
          17,
          "The revolt that founded the New Kingdom — and the sources that tell it.",
          "The New Kingdom begins with the expulsion of the Hyksos and the reunification of Egypt under Ahmose I (c. 1550 BCE), founder of the Eighteenth Dynasty. The revolt was begun by his grandfather Senakhtenre, pursued by his brother Kamose, and completed by Ahmose himself.\n\nThe sources are dramatic but thin: Kamose's stelae record his frustration with the divided kingdom ('My heart is for Egypt, my affection for the Asiatics'), and the Ahmose stelae record the siege of Avaris. The later historian Manetho, writing two thousand years later, gives a fuller narrative — and one colored by his own purposes.\n\nThe completion of the reunification was followed by campaigns in Nubia and the Levant, and by the systematic removal of the Hyksos from Egyptian memory: their names were erased from monuments, and the period was later framed as occupation and liberation. The empire age had begun.",
        ),
        reading(
          "thebes-the-city-of-amun",
          "Thebes: The City of Amun",
          15,
          "How a provincial town became the capital of an empire.",
          "Thebes (modern Luxor) was a provincial town in the Middle Kingdom; by the New Kingdom it was the greatest city in Egypt — the capital of an empire and the seat of the god Amun-Ra, whose temple at Karnak became the largest religious complex in the world.\n\nThe city stretched along both banks of the Nile. On the east bank stood the temples of Karnak and Luxor, connected by an avenue of sphinxes; on the west bank, the royal necropolis — the Valley of the Kings, the Valley of the Queens, the mortuary temples of the kings, and the village of Deir el-Medina where the tomb-builders lived.\n\nThebes' power rested on the empire's wealth: the gold of Nubia, the tribute of Asia, the land of the god. The temple owned estates, workshops, and labor; its archives (partly preserved) show an institution like a state within the state. When the Amarna period moved the capital away, the temples of Thebes were damaged; when the kings returned, they restored them — and enlarged them.",
        ),
      ],
    ),
    module(
      "the-empire",
      "The Empire",
      "Conquest, diplomacy, and the limits of Egyptian power.",
      [
        reading(
          "thutmose-iii-and-the-expansion",
          "Thutmose III and the Expansion",
          17,
          "The 'Napoleon of Egypt' — and the records of his campaigns.",
          "Thutmose III (c. 1479–1425 BCE) is often called Egypt's greatest conqueror. In seventeen campaigns, he extended Egyptian control from the Nile's fourth cataract to the Euphrates — deeper into Asia than any king before him. His campaigns are recorded in the 'Annals', inscribed on the walls of the temple of Karnak, the most detailed military record of the ancient Near East.\n\nThe Annals are propaganda — they record victories, not defeats — but they are also evidence: the lists of captured towns, the tribute of Asia (including horses, chariots, and lapis lazuli), and the campaign routes, which can be cross-checked with the geography. The Battle of Megiddo (his first campaign) is described in such detail that the route of the army can be followed today.\n\nThutmose also absorbed the Hyksos' legacy: the chariot and the composite bow became the backbone of the Egyptian army. The empire he built lasted a century — and its administration (governors, garrisons, vassal treaties) was the machinery of an international power.",
        ),
        reading(
          "the-battle-of-kadesh",
          "The Battle of Kadesh",
          15,
          "The most famous battle of the ancient Near East — and its two versions.",
          "The Battle of Kadesh (c. 1274 BCE) was fought between Ramesses II of Egypt and Muwatalli II of the Hittites, in Syria. It is the most famous battle of the ancient Near East — and a masterclass in reading two versions of the same event.\n\nThe Egyptian version — the 'Poem' and the 'Bulletin', inscribed at Karnak, Abu Simbel, and the Ramesseum — presents Ramesses as the lone hero, charging into the Hittite chariot corps and winning a great victory. The Hittite version, from the archives of Hattusa (modern Boğazkale), tells a different story: the Hittites ambushed the divided Egyptian army and forced it to withdraw.\n\nThe honest conclusion is that "both sides won": the battle was probably indecisive, and its aftermath — the Egyptian-Hittite peace treaty of c. 1259 BCE, one of the earliest surviving treaties — suggests a negotiated stalemate. The treaty's text (in both Egyptian and Akkadian versions) is a monument to diplomacy, not war.",
        ),
        reading(
          "the-great-hypostyle-hall",
          "The Great Hypostyle Hall",
          13,
          "The largest covered space of the ancient world.",
          "The Great Hypostyle Hall at Karnak — built mostly under Seti I and Ramesses II — is one of the largest covered spaces of the ancient world: 134 columns in sixteen rows, the central row rising to about 21 metres, with clerestory windows letting light into the central aisle.\n\nThe hall is a machine for awe. Its walls are carved with the records of the kings — the Battle of Kadesh on the north wall, the treaty with the Hittites, the festivals — and its columns are covered in painted relief. The building is a theological statement: the columns are stone reeds, the hall a stone marsh, the center the primeval mound of creation.\n\nThe hall also documents the limits of the empire: the records show the wealth that made it possible — the gold of Nubia and the tribute of Asia — and the decades of labor that built it. The names of the builders, and the work gangs' graffiti, can still be read on the columns.",
        ),
      ],
    ),
    module(
      "twilight",
      "Twilight",
      "The Ramesside period and the end of the empire age.",
      [
        reading(
          "the-ramesside-kings",
          "The Ramesside Kings",
          15,
          "The Nineteenth and Twentieth Dynasties — the last great age.",
          "The Nineteenth Dynasty (c. 1292–1189 BCE) was founded by Ramesses I — a general of the previous dynasty — and reached its height under his grandson Ramesses II, the great builder. The dynasty's other major figure, Merneptah (his son), fought the 'Sea Peoples' and left the famous Israel Stele, the earliest extra-biblical reference to Israel.\n\nThe Twentieth Dynasty (c. 1189–1069 BCE) was the last great age of the New Kingdom. Its greatest king, Ramesses III (c. 1186–1155 BCE), fought off the Sea Peoples' invasion (recorded in reliefs at Medinet Habu), built his mortuary temple, and — the record shows — faced economic strain: the strikes of Deir el-Medina during his reign are the earliest recorded labor disputes.\n\nThe dynasty ended in a succession crisis. The administrative records of the period — the Harris Papyrus, the Turin strike papyri — show a state under pressure: corrupt officials, delayed rations, and a royal family consumed by intrigue (the 'Harem Conspiracy' against Ramesses III is documented in the judicial papyri).",
        ),
        reading(
          "the-decline-of-the-new-kingdom",
          "The Decline of the New Kingdom",
          14,
          "Why the empire age ended — and what survived.",
          "The New Kingdom declined in the Twelfth–Twentieth Dynasties' final century. The causes were several: the loss of the Asian territories to the Sea Peoples and the Libyans; the economic strain of the great building programs; the weakening of the central administration; and the growing power of the priesthood of Amun, whose wealth rivaled the crown's.\n\nThe end was not a single catastrophe. The last Ramesside kings were weak and short-lived; the High Priest of Amun at Thebes and the king at Tanis effectively divided Egypt between them, opening the Third Intermediate Period. Yet much survived: the temples, the literature, the administrative traditions, and the memory of the great kings — which the later Libyan, Nubian, and Saite dynasties all claimed to revive.\n\nThe lesson of the decline is the same as the lesson of the Old Kingdom's end: civilizations rarely 'fall' in a moment; they redistribute. And the record of decline is always richer in administrative documents than in narratives — the voices of the strikers and the scribes outlast the trumpets of the kings.",
        ),
        quiz("knowledge-check", "Knowledge Check", 10, "Test your understanding of the New Kingdom.", "quiz-new-kingdom-1"),
      ],
    ),
  ],
});

const hatshepsut = defineCourse({
  id: "course-hatshepsut-female-kingship",
  slug: "hatshepsut-female-kingship",
  title: "Hatshepsut and Female Kingship",
  subtitle: "The woman who ruled as king — and the evidence she left behind",
  description:
    "Hatshepsut is one of the very few women to rule Egypt as king in her own right. This course examines her reign: how she justified it, what she built, how she was depicted, and the long debate over the erasure of her name. It also asks what Egypt's evidence tells us about women and power.",
  shortDescription:
    "The reign of Hatshepsut: kingship, ideology, monuments, and the erasure of a female king.",
  category: "pharaohs",
  level: "advanced",
  instructorId: "instr-layla-hassan",
  coverImage: "/covers/cover-hatshepsut.svg",
  learningOutcomes: [
    "Explain how Hatshepsut justified her claim to kingship",
    "Analyze her monuments and their political meaning",
    "Interpret the iconography of a female king",
    "Evaluate the evidence for the erasure of her name",
    "Discuss women's legal and economic position in Egypt",
  ],
  requirements: ["The Pharaohs of Egypt or equivalent familiarity with Egyptian kingship."],
  tags: ["hatshepsut", "female kingship", "deir el-bahari", "queens", "iconography"],
  language: "English",
  publishedAt: "2025-03-01",
  updatedAt: "2025-06-10",
  modules: [
    module(
      "the-woman-who-would-be-king",
      "The Woman Who Would Be King",
      "The background, the regency, and the assumption of kingship.",
      [
        video(
          "the-background-of-hatshepsut",
          "The Background of Hatshepsut",
          15,
          "The daughter of a king, wife of a king, mother of a king — then king herself.",
          "Hatshepsut (c. 1507–1458 BCE) was born into the royal family of the Eighteenth Dynasty: daughter of Thutmose I and Queen Ahmose, and wife (probably her half-brother) of Thutmose II. She was the king's daughter, the king's wife, and the king's mother — but not, in the normal order, the king.\n\nWhen Thutmose II died (c. 1479 BCE), his son by a secondary wife — the future Thutmose III — was a child. Hatshepsut became regent. The regency was a recognized office: women ruled as regents for child kings, and Hatshepsut had precedents, including the queen regent Ahhotep of the Seventeenth Dynasty.\n\nWhat happened next is the remarkable part: within a few years, Hatshepsut ceased to be regent and became king in her own right, adopting the full royal titulary and the title 'King's Daughter, King's Sister, King's Wife, King's Mother' — and then simply 'King'. No woman had done this with such full, documented authority in over a thousand years.",
        ),
        reading(
          "regent-to-king",
          "Regent to King",
          16,
          "How the regency became a kingship — and the claims she made.",
          "The transition from regent to king is documented by her monuments and by a few inscribed objects, but the sequence of events is not fully recoverable. What survives is the justification she later carved into her temple at Deir el-Bahari: a birth narrative in which the god Amun, in the form of her father Thutmose I, fathers her, and her father publicly designates her as heir.\n\nThese are political claims, not biography. The claim of divine birth made her legitimacy equal to any king's; the claim of designation by her father made the succession legal. The text is propaganda — but it is telling propaganda: she argued within the system, using the standard language of kingship, rather than inventing a new one.\n\nThe key question — whether she ruled alone or as co-regent with Thutmose III — is debated. Some monuments can be read as showing a co-regency; others show her as sole king. The evidence is ambiguous, and modern scholars are divided between those who see a smooth, accepted reign and those who see a contested one.",
        ),
      ],
    ),
    module(
      "the-reign",
      "The Reign",
      "The buildings, the expedition, and the image of the king.",
      [
        reading(
          "the-builds-of-hatshepsut",
          "The Buildings of Hatshepsut",
          16,
          "Deir el-Bahari and the architecture of a reign.",
          "Hatshepsut's mortuary temple at Deir el-Bahari — Djeser-Djeseru, 'Holy of Holies' — is one of the masterpieces of Egyptian architecture. Its three colonnaded terraces climb the cliff face, echoing the lines of the mountain; its chapels honor Amun, Hathor, and the queen's parents, and its reliefs tell her divine birth and the expedition to Punt.\n\nShe also built at Karnak: two obelisks (one still standing, among the tallest in Egypt), the chapel of the barque of Amun, and the so-called 'Hatshepsut suite' in the temple. The buildings were not vanity: they were the machinery of kingship, providing for the gods and for her own cult after death.\n\nThe scale of her building is itself evidence of the reign's success — a king with a secure treasury and a strong administration. The quality of the carving, among the finest of the Eighteenth Dynasty, suggests a court that took its image-making seriously.",
        ),
        reading(
          "the-expedition-to-punt",
          "The Expedition to Punt",
          15,
          "The famous trade mission to the land of incense and myrrh.",
          "One of the most famous reliefs at Deir el-Bahari records Hatshepsut's expedition to Punt — the semi-legendary trading land to the south (probably in modern Sudan, Eritrea, or the Somali coast; its exact location is debated). The relief shows the Puntite king and queen on stilts, the houses on poles, the goods exchanged: gold, ebony, ivory, incense trees, and exotic animals.\n\nThe expedition's purpose was real: incense (frankincense and myrrh) was needed for temple ritual, and the trade in incense trees — the reliefs show them being carried back in baskets — was a state concern. The expedition is documented in the reliefs and in the temple's inscriptions; no independent account survives.\n\nThe reliefs are also a fascinating document of cultural encounter: the Puntites are drawn with distinct features, their queen is described (in the Egyptian text) in detail, and the goods are labeled. The expedition was remembered for centuries — and its depiction is one of the most vivid scenes of cross-cultural contact in Egyptian art.",
        ),
        reading(
          "iconography-of-a-female-king",
          "The Iconography of a Female King",
          14,
          "Kilt, crown, and false beard: how a woman was shown as a king.",
          "Hatshepsut is usually depicted in the iconography of kingship: the kilt, the false beard, the crowns, the crook and flail. In some statues she is clearly female (with a feminine body and the titles 'King's Daughter' and 'King's Wife'); in others she is male-coded, with a masculine body and the kilt.\n\nThis was not disguise. The kingship was an office with a male-coded iconography; Hatshepsut adopted the office's symbols because she claimed the office. In the texts, the gender is often clear: she is referred to with feminine pronouns in some inscriptions and with masculine forms in others — a mixture that has fueled a century of debate.\n\nThe lesson is general: in Egyptian art, the image is ideological, not photographic.",
        ),
      ],
    ),
    module(
      "the-aftermath",
      "The Aftermath",
      "The erasure of a name — and women in Egyptian law.",
      [
        reading(
          "the-erasure-of-a-name",
          "The Erasure of a Name",
          15,
          "When — and why — was Hatshepsut's memory attacked?",
          "In the decades after her death, many of Hatshepsut's monuments were damaged: her name was chiseled off walls, her statues were smashed or re-carved, and her image was hacked away. The traditional assumption is that Thutmose III, her stepson and co-regent, ordered the erasure out of resentment.\n\nThe evidence does not support a simple story. Some of the damage dates to the reign of Thutmose III — but some may be later, from the reign of Amenhotep II or beyond, and some of the re-carving was done carefully and systematically, not in a fit of rage. The motive is also unclear: it may have been to secure the succession (Thutmose III's son needed an undisputed line), or to correct the 'anomaly' of a female king.\n\nThe erasure failed: the monuments survived, and the memory of the reign survived with them. The damage is itself evidence — a testament to how powerful the ideology of kingship was, and how threatening a woman's successful claim must have seemed to those who came after.",
        ),
        reading(
          "women-in-egyptian-law",
          "Women in Egyptian Law",
          13,
          "The legal and economic position of women in pharaonic Egypt.",
          "Women in pharaonic Egypt had legal rights unusual for the ancient world. They could own and dispose of property, inherit from their parents (often equally with brothers), initiate divorce, and testify in court. The records of the New Kingdom — the marriage contracts, the wills, the court cases — show women as active legal actors.\n\nThe evidence for Hatshepsut's own position is mixed: she was a queen of great wealth and influence before she became king, and women of the royal family (like Queen Tiye and Queen Nefertari) wielded real power. But the kingship itself was an almost exclusively male office — which is why Hatshepsut's reign stands out.\n\nThe lesson is not that Egypt was 'feminist' — the society was patriarchal, and the evidence for women's lives is thinner than for men's — but that Egyptian law and custom gave women a position that was, by ancient standards, comparatively strong.",
        ),
        quiz("knowledge-check", "Knowledge Check", 10, "Test your understanding of Hatshepsut and female kingship.", "quiz-hatshepsut-1"),
      ],
    ),
  ],
});

export const coursesA: Course[] = [
  foundations,
  dynasties,
  pharaohs,
  oldKingdom,
  middleKingdom,
  newKingdom,
  hatshepsut,
];
