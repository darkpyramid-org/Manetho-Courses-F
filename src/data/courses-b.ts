import { defineCourse } from "@/data/defineCourse";
import type { Course } from "@/types";
import {
  module,
  reading,
  video,
  quiz,
  exercise,
  gallery,
  timeline,
} from "@/data/authoring";

/*
 * Courses 8–14: Amarna, Tutankhamun, Ramesses II,
 * mythology, gods, religion and afterlife, hieroglyphs.
 */

const amarna = defineCourse({
  id: "course-akhenaten-amarna-period",
  slug: "akhenaten-amarna-period",
  title: "Akhenaten and the Amarna Period",
  subtitle: "The reign that broke the rules — and the debate it still provokes",
  description:
    "Akhenaten's reign is the most controversial in Egyptian history: a king who elevated the sun disk above the old gods, changed his name, moved his capital, and transformed Egyptian art. This course examines the evidence for the religious revolution, the city of Akhetaten, and the aftermath — and asks what we can honestly say about the motives.",
  shortDescription:
    "The Aten, the new capital, the art, and the debate about the Amarna revolution.",
  category: "pharaohs",
  level: "advanced",
  instructorId: "instr-layla-hassan",
  coverImage: "/covers/cover-amarna.svg",
  learningOutcomes: [
    "Describe the religious changes of the Amarna Period",
    "Analyze the Great Hymn to the Aten and its claims",
    "Explain the layout and purpose of Akhetaten",
    "Recognize the distinctive features of Amarna art",
    "Evaluate competing explanations for the revolution",
    "Trace the restoration under Tutankhamun",
  ],
  requirements: ["The Pharaohs of Egypt or equivalent."],
  tags: ["akhenaten", "amarna", "aten", "tell el-amarna", "religion"],
  language: "English",
  publishedAt: "2025-03-01",
  updatedAt: "2025-06-10",
  modules: [
    module(
      "the-revolutionary",
      "The Revolutionary",
      "The court of Amenhotep III and the rise of the Aten.",
      [
        video(
          "amenhotep-iii-and-the-court",
          "Amenhotep III and the Court",
          16,
          "The wealthy, cosmopolitan empire that Akhenaten inherited.",
          "Akhenaten was born Amenhotep IV into the most wealthy and cosmopolitan court of the Bronze Age. His father, Amenhotep III (c. 1388–1351 BCE), ruled an empire that stretched from the Euphrates to the fourth cataract of the Nile, and his court corresponded with the kings of Mitanni, Babylon, and the Hittites — the Amarna letters, found at his son's capital, preserve this diplomacy.\n\nAmenhotep III's reign was one of art and spectacle: his mortuary temple (of which only the Colossi of Memnon survive), his palace at Malkata, and his marriage to Queen Tiye — who was depicted as his equal in some statuary — defined the era's opulence. The sun god Ra-Horakhty was prominent in his theology, and the Aten (the sun disk) appears in his inscriptions.\n\nThe son's revolution was thus not a break from nothing: it grew out of a court already attentive to the sun. But its scale — and its consequences — were unprecedented.",
        ),
        reading(
          "the-rise-of-the-aten",
          "The Rise of the Aten",
          17,
          "From one god among many to the visible disk of the sun.",
          "The Aten — the disk of the sun, its light, and its warmth — had long been a minor aspect of the sun god Ra. Under Amenhotep III it grew in prominence; under his son it became the focus of a new theology.\n\nIn his fifth regnal year (c. 1348 BCE), the king changed his name from Amenhotep ('Amun is satisfied') to Akhenaten ('Effective for the Aten') — a public break with Amun, the great god of Thebes. The temples of Amun were closed or stripped, the god's name was chiseled from monuments, and the Aten's name was written in cartouches, as a king's would be.\n\nThe theology is expressed in the Great Hymn to the Aten: the Aten creates all life, from the smallest creature to the foreigner, and the king and his family are the sole intermediaries. Scholars still debate the character of this religion: was it monotheism (one god), henotheism (one god supreme among many), or monolatry (one god worshipped, others existing)? The evidence supports no single answer.",
        ),
        reading(
          "the-name-change",
          "The Name Change",
          13,
          "What it meant to become Akhenaten.",
          "In the fifth year, the king changed his name, moved his court to a new site, and founded a new city — all within a few years. The name change is the clearest signal: from 'Amenhotep' (containing the name of Amun) to 'Akhenaten' (containing the Aten), the king announced a new allegiance.\n\nThe change was enforced: workmen were sent to chisel the name of Amun from monuments across Egypt — even from the name of his father, Amenhotep III, which had to be altered in some inscriptions. This is the earliest recorded instance of a state-sponsored campaign of iconoclasm on this scale.\n\nThe meaning of the change is the question. Was it the conviction of a genuine monotheist, the policy of a king breaking the power of Amun's priesthood, or the logic of a theology taken to its extreme? Each interpretation has scholarly support; none is proven.",
        ),
      ],
    ),
    module(
      "the-new-capital",
      "The New Capital",
      "Akhetaten: the city of the horizon of the Aten.",
      [
        reading(
          "akhetaten-the-city",
          "Akhetaten: The City",
          16,
          "A capital built from scratch in the desert.",
          "In his fifth year, Akhenaten founded a new capital at Tell el-Amarna in Middle Egypt — Akhetaten, 'the Horizon of the Aten'. The city was built in a natural amphitheatre of cliffs, dedicated to the Aten, whose rays (in the decoration) end in hands offering life to the royal family.\n\nThe city was planned in a way Egyptian cities rarely were: the Great Temple of the Aten (the largest in Egypt) and the Small Aten Temple at the center, the Royal Palace (with its famous 'window of appearances' where the king and queen appeared to the people), the residences of the courtiers, and the workers' village. The boundary stelae carved in the cliffs define the city's limits.\n\nTell el-Amarna is unique among Egyptian sites: it was occupied for only about fifteen years, then abandoned. Excavation (ongoing since the 19th century, notably by the Egypt Exploration Society and the Amarna Project) has preserved a snapshot of a city frozen in time — its houses, its streets, its rubbish dumps, and the famous studio of the sculptor Thutmose, where the bust of Nefertiti was found.",
        ),
        reading(
          "amarna-art",
          "Amarna Art",
          15,
          "The break with three thousand years of convention.",
          "Amarna art is the most distinctive of all Egyptian styles. The canon of proportion was relaxed: figures have elongated heads, necks, and bellies; wide hips; and fleshy, naturalistic bodies. The royal family is shown in intimate scenes — the king kissing his daughters, the queen riding in the chariot with the king, the children playing under the rays of the Aten.\n\nThe change was systematic: it appears in relief, painting, and sculpture, in temples and in private tombs. The famous bust of Nefertiti (found in the sculptor Thutmose's workshop at Amarna, now in the Egyptian Museum of Berlin) is the style's masterpiece — though whether it is an idealized portrait or a stylized one is debated.\n\nInterpretation divides scholars: some see a 'revolution' in art, a deliberate return to nature; others see a new court style, imposed by royal preference, that vanished with the reign. The question matters because it tests how much control a king really had over the visual culture of his civilization.",
        ),
        reading(
          "the-amarna-letters",
          "The Amarna Letters",
          14,
          "Diplomacy in the Bronze Age, from the royal archives.",
          "The Amarna letters — several hundred clay tablets found at Akhetaten — are the diplomatic correspondence of the Egyptian court with the kings of Mitanni, Babylon, Assyria, and the Hittites, and with the rulers of city-states in Canaan. Written in Akkadian (the lingua franca of the age), they are the primary evidence for international relations in the Late Bronze Age.\n\nThe letters reveal a world of alliances, marriages, gifts, and grievances: kings complain about missing gold ('Why have you given me gold that is not of the quality you promised?'), and the vassal rulers of Canaan beg for troops against invaders — the 'Apiru, whose identity is debated (bandits, rebels, or a social class?).\n\nThe archive ended with the reign: after Akhenaten's death, the letters were left in the abandoned city. Their survival is one of the accidents of archaeology — a royal archive frozen mid-century.",
        ),
      ],
    ),
    module(
      "the-aftermath",
      "The Aftermath",
      "The end of the Amarna Period and the restoration.",
      [
        reading(
          "the-end-of-the-amarna-period",
          "The End of the Amarna Period",
          14,
          "What happened after Akhenaten died.",
          "Akhenaten died in his seventeenth regnal year (c. 1336 BCE). What followed is murky: the short reigns of Smenkhkare and Neferneferuaten (possibly the same person, possibly Nefertiti ruling as king — the evidence is debated and much discussed), then the accession of Tutankhamun, a child of about eight or nine.\n\nTutankhamun's famous 'Restoration Stele' (the text is fragmentary) records that the temples of the gods had fallen into disrepair, that the gods had 'turned their backs' on Egypt, and that the king restored what was ruined — the traditional reading of the Amarna period as a time of religious error.\n\nThe capital returned to Thebes; the name of the Aten was abandoned; the temples of Amun were restored and enriched. Within a generation, the Amarna period was being treated as an aberration — and Akhenaten's name was omitted from later king lists.",
        ),
        reading(
          "the-restoration-under-tutankhamun",
          "The Restoration under Tutankhamun",
          13,
          "The reversal of the revolution — and its politics.",
          "The restoration was carried out under Tutankhamun (and probably begun under his immediate predecessor), but it was likely orchestrated by the court — the vizier Ay and the general Horemheb, who would both later become kings. The king was a figurehead; the real power lay with the advisors who had managed the transition.\n\nThe restoration was ideological as well as religious: the old gods were reinstated, the temples reopened, and the traditional art returned. The Amarna monuments were dismantled — the temples of the Aten were demolished, their blocks reused in later buildings at Karnak (where they were found by modern archaeologists, the 'talatat' blocks, and reconstructed).\n\nThe lesson: the Amarna period was erased as decisively as the period of Hatshepsut's erasure. Both episodes show how Egyptian kings used memory — the memory of predecessors — as a political instrument.",
        ),
        quiz("knowledge-check", "Knowledge Check", 10, "Test your understanding of the Amarna Period.", "quiz-amarna-1"),
      ],
    ),
  ],
});

const tutankhamun = defineCourse({
  id: "course-tutankhamun-and-his-world",
  slug: "tutankhamun-and-his-world",
  title: "Tutankhamun and His World",
  subtitle: "The boy king in the context of his age",
  description:
    "Tutankhamun was a minor king of a short reign, famous only because his tomb survived. This course reconstructs his world: his family, his religious restoration, the treasures of KV62, and the discovery that made him the most famous Egyptian of all — and it separates the archaeology from the legend.",
  shortDescription:
    "The boy king, his family, his reign, and the discovery of KV62.",
  category: "discoveries",
  level: "beginner",
  instructorId: "instr-eva-rossi",
  coverImage: "/covers/cover-tutankhamun.svg",
  learningOutcomes: [
    "Place Tutankhamun in the Amarna Period's aftermath",
    "Evaluate the evidence for his family and his death",
    "Describe the contents of KV62 and their meaning",
    "Narrate the 1922 discovery and its consequences",
    "Separate the archaeology of the tomb from the 'curse' myth",
  ],
  requirements: ["No prior knowledge required."],
  tags: ["tutankhamun", "kv62", "amarna", "discovery", "carter"],
  featured: true,
  language: "English",
  publishedAt: "2025-03-15",
  updatedAt: "2025-06-10",
  modules: [
    module(
      "the-boy-king",
      "The Boy King",
      "The child on the throne and his family.",
      [
        video(
          "a-child-on-the-throne",
          "A Child on the Throne",
          14,
          "How a boy of eight or nine became king of Egypt.",
          "Tutankhamun came to the throne in about 1332 BCE, aged eight or nine, in the aftermath of the Amarna Period. His parentage is still debated: he is generally thought to be a son of Akhenaten, but by which wife is uncertain. A mummy found in tomb KV35 (the 'Younger Lady') is often proposed as his mother; her identity is contested.\n\nThe boy king's own name tells the story of his reign: he was born Tutankhaten ('Living Image of the Aten') and changed his name to Tutankhamun ('Living Image of Amun') as the traditional religion was restored. The change is recorded on objects from his reign.\n\n \"He was a king in name; the administration was run by his advisors — the vizier Ay and the general Horemheb, who both later became kings. The boy's reign was a transitional decade: the restoration of the old gods, the return of the capital to Thebes, and the repopulation of the temples.",
        ),
        reading(
          "the-name-changes",
          "The Name Changes",
          12,
          "Tutankhaten to Tutankhamun: what the names record.",
          "The king's name change is the shortest summary of the restoration. Born Tutankhaten, he became Tutankhamun — the god in his name changed from the Aten to Amun, and with it the entire theology of the state.\n\nThe change is visible in the objects of the reign: some items were made for Tutankhaten and usurped (the name altered) for Tutankhamun — his famous gold mask may have been made for another king (a theory based on the mask's cartouche and the presence of a different royal name in some inscriptions, though this remains debated).\n\nThe 'Restoration Stele' (the text is fragmentary but legible in part) describes the state of the temples when the king took the throne: 'the temples of the gods and goddesses... had fallen into ruin'. The stele is the primary evidence for how the Amarna period was remembered — as a time of religious error.",
        ),
        reading(
          "tutankhamuns-family",
          "Tutankhamun's Family",
          15,
          "The tangled genetics of the Amarna royal house.",
          "Tutankhamun's family was reconstructed through DNA analysis of the royal mummies (published in 2010 by Zahi Hawass and colleagues) and through the objects found in his tomb. The generally accepted outline: his father was Akhenaten; his mother was an unidentified sister of Akhenaten (the 'Younger Lady' mummy from KV35); his wife, Ankhesenamun, was his (half-)sister, a daughter of Akhenaten and Nefertiti.\n\nThe DNA evidence is real but its interpretation is debated: the identification of the 'Younger Lady' as his mother rests on a single mummy whose identity is otherwise unknown, and the study's methods and conclusions have been questioned by some geneticists and Egyptologists.\n\n \"The royal house was inbred, as royal families often were: Tutankhamun's mummy shows a cleft palate, a club foot, and malaria (the DNA of the malaria parasite was found). Whether these conditions contributed to his death is uncertain. The boy king died at about eighteen or nineteen, without an heir.",
        ),
      ],
    ),
    module(
      "the-reign",
      "The Reign",
      "The restoration, the treasures, and the death.",
      [
        reading(
          "the-restoration-of-the-gods",
          "The Restoration of the Gods",
          14,
          "The decade of repair: reopening the temples and reviving the cults.",
          "The central act of Tutankhamun's reign was the restoration: the reopening of the temples, the reinstatement of the priesthoods, and the return of the capital to Thebes. The Restoration Stele (cited in the previous lesson) is the primary evidence; the archaeology of the period — the reused blocks of the Aten temples rebuilt into the pylons of Karnak — confirms it.\n\nThe restoration was also economic: the temples were endowed with land, labor, and treasure, and the traditional festivals were reinstated. The court moved back to Thebes; the city of Akhetaten was abandoned within a generation.\n\nThe reign's few dated objects (wine jars from the tomb, sealing impressions) suggest a reign of about nine to ten years. The reign is otherwise undocumented: no military campaigns, no great building — the king's monuments were restorations of what had been neglected.",
        ),
        gallery(
          "the-treasures-of-the-tomb",
          "The Treasures of the Tomb",
          16,
          "A visual tour of the most famous burial goods in the world.",
          [
            "/gallery/tutankhamun-1.svg",
            "/gallery/tutankhamun-2.svg",
            "/gallery/tutankhamun-3.svg",
            "/gallery/tutankhamun-4.svg",
          ],
          "The tomb of Tutankhamun (KV62) contained over five thousand objects: furniture, chariots, weapons, games, jewelry, and the famous gold mask. The objects were crammed into four small rooms — the antechamber, the annexe, the treasury, and the burial chamber — because the tomb was smaller than a king's tomb was meant to be (it may have been built for a non-royal and adapted in haste).\n\nThe most famous objects: the gold mask (about 10 kg of gold), the gilded shrines and the solid gold inner coffin, the thrones, the chariots, the chests of the king's internal organs (canopic chest), the shabtis (servant figures, 413 of them), and the board games (including senet).\n\nThe objects are the most complete picture we have of a royal burial: they show the wealth, the craft, the religion, and the daily life of the court. Because they were found nearly together, they can be studied as an assemblage — which is why the tomb's discovery transformed Egyptology.",
        ),
        reading(
          "the-death-of-tutankhamun",
          "The Death of Tutankhamun",
          13,
          "The boy king's death and the mystery that is not a mystery.",
          "Tutankhamun died at about eighteen or nineteen, without a surviving heir. The cause of his death is unknown; the evidence (the club foot, the cleft palate, the malaria DNA) suggests a frail young man, but no cause of death can be established. The 'curse' that supposedly killed the excavators is a myth — the deaths of the team have mundane explanations, and Howard Carter, who opened the tomb, lived until 1939.\n\nThe king's mummy was found in the innermost of three nested coffins, the innermost one of solid gold. The mummy was badly preserved — Carter's unwrapping (1925) was rough, and the resins had stuck the body to the coffin — but the remains have since been studied by X-ray, CT scan, and DNA.\n\nAfter his death, the succession passed to Ay (who may have married the young widow Ankhesenamun), and then to Horemheb, the general, who founded the Nineteenth Dynasty. The Amarna bloodline ended.",
        ),
      ],
    ),
    module(
      "the-legacy",
      "The Legacy",
      "The discovery of 1922 and its consequences.",
      [
        timeline(
          "the-discovery-in-1922",
          "The Discovery in 1922",
          15,
          "The sequence of events from the first step to the opening of the burial chamber.",
          [
            {
              date: "1907–1914",
              title: "Theodore Davis in the Valley",
              description:
                "The American Theodore Davis excavated in the Valley of the Kings and found the cache KV54 (embalming materials bearing Tutankhamun's name). He declared the Valley exhausted — a judgment the next excavator would overturn.",
            },
            {
              date: "1914–1922",
              title: "Carter's search",
              description:
                "Howard Carter, funded by Lord Carnarvon, believed Davis had missed a royal tomb. The First World War interrupted the work; by 1922, Carnarvon was ready to withdraw funding.",
            },
            {
              date: "4 November 1922",
              title: "The first step",
              description:
                "Carter's water boy noticed a step cut in the bedrock. Within days, the team exposed a sealed doorway bearing the seals of Tutankhamun.",
            },
            {
              date: "26 November 1922",
              title: "The first look",
              description:
                "Carter made a small hole in the second doorway. Asked by Carnarvon whether he could see anything, he reportedly replied, 'Yes, wonderful things.'",
            },
            {
              date: "February 1923",
              title: "The burial chamber",
              description:
                "The team opened the burial chamber and found the gilded shrines around the sarcophagus — the most intact royal tomb ever found.",
            },
            {
              date: "1925",
              title: "The mummy",
              description:
                "Carter unwrapped the mummy, which had been stuck to its coffin by resin. The gold mask was revealed.",
            },
          ],
        ),
        reading(
          "tut-mania-and-after",
          "'Tut-mania' and After",
          12,
          "How a minor king became the most famous Egyptian of all.",
          "The discovery of KV62 made Tutankhamun the most famous Egyptian king — a fame out of all proportion to his reign. The 1920s 'Tut-mania' was a global phenomenon: the find was reported in newspapers worldwide, the exhibition of the treasures (first in Cairo, then in the 1970s worldwide tour) drew millions, and the objects became icons of popular culture.\n\nThe discovery also changed the politics of archaeology. The Egyptian government — now under a nationalist government after the 1919 revolution and nominal independence (1922) — asserted its ownership of the finds; the old 'partage' system of dividing finds was coming to an end. The tomb's contents went entire to the Egyptian state, and the Egyptian Museum in Cairo became their home.\n\nThe legacy is contested: the fame of Tutankhamun has overshadowed the study of more significant kings, and the 'curse' myth has obscured the real achievement — the most careful excavation in the Valley's history, by a man who spent a decade recording what he found.",
        ),
        quiz("knowledge-check", "Knowledge Check", 10, "Test your understanding of Tutankhamun and his world.", "quiz-tutankhamun-1"),
      ],
    ),
  ],
});

const ramsesII = defineCourse({
  id: "course-ramses-ii",
  slug: "ramses-ii",
  title: "Ramesses II",
  subtitle: "The great builder and his long reign",
  description:
    "Ramesses II reigned for about sixty-six years — one of the longest reigns in history — and built more monuments than almost any other king. This course follows the evidence for his reign: the Battle of Kadesh, the peace treaty, the temples, the family, and the propaganda that made him 'the Great'.",
  shortDescription:
    "Kadesh, Abu Simbel, the Ramesseum, and the sixty-six-year reign.",
  category: "pharaohs",
  level: "intermediate",
  instructorId: "instr-layla-hassan",
  coverImage: "/covers/cover-ramses.svg",
  learningOutcomes: [
    "Evaluate the Battle of Kadesh from both Egyptian and Hittite sources",
    "Describe the peace treaty and its significance",
    "Identify the major monuments of Ramesses II",
    "Discuss the evidence for his long reign and large family",
    "Read royal propaganda critically",
  ],
  requirements: ["The New Kingdom or equivalent."],
  tags: ["ramses ii", "kadesh", "abu simbel", "ramesside", "peace treaty"],
  language: "English",
  publishedAt: "2025-03-15",
  updatedAt: "2025-06-10",
  modules: [
    module(
      "the-long-reign",
      "The Long Reign",
      "Kadesh, the treaty, and the record of the reign.",
      [
        video(
          "the-early-reign",
          "The Early Reign",
          15,
          "The young king and the battle that defined his image.",
          "Ramesses II (c. 1279–1213 BCE) came to the throne as a young man — his father Seti I had been king for perhaps fifteen years, and Ramesses may have been a co-regent and commander in his father's final years. The Nineteenth Dynasty was founded by his grandfather Ramesses I, a general — the dynasty was new, and the young king needed glory.\n\nHe found it at Kadesh (c. 1274 BCE), in his fifth regnal year, where the Egyptian army — divided into four divisions, one of which (the Re division) was caught separated from the others — was ambushed by the Hittite chariot corps. Ramesses, cut off with his bodyguard, rallied and counterattacked; the battle ended indecisively.\n\nThe king made the most of it: the 'Poem' and the 'Bulletin' of Kadesh, inscribed at Karnak, Abu Simbel, and the Ramesseum, present Ramesses as the lone hero charging into the Hittite host. It is the most famous piece of Egyptian military propaganda — and the best-documented battle of the Bronze Age.",
        ),
        reading(
          "the-battle-of-kadesh",
          "The Battle of Kadesh",
          17,
          "Reading the battle from both sides of the conflict.",
          "The Battle of Kadesh is unique in ancient Near Eastern history because both sides published their version. The Egyptian version — the Poem and the Bulletin — presents a great victory; the Hittite version, from the archives of Hattusa (modern Boğazkale), claims a Hittite victory, with the Egyptian army forced to withdraw.\n\nThe modern reading: the battle was probably an Egyptian tactical success (Ramesses rallied a separated army and avoided destruction) but a strategic stalemate — the Egyptian army did not take Kadesh, and the Egyptian hold on the Levant was not extended. The Egyptian accounts, by contrast, describe the king personally defeating hundreds of charioteers — a literary convention of the heroic victor.\n\n \"The lesson is central to the historian's craft: for most of ancient history we have only one side's version of events. Kadesh gives us two — and the comparison shows how much propaganda shapes even the most 'factual' of ancient texts.",
        ),
        reading(
          "the-peace-treaty",
          "The Peace Treaty",
          13,
          "One of the earliest surviving peace agreements.",
          "The Egyptian-Hittite peace treaty (c. 1259 BCE) is one of the earliest surviving treaties. Its text survives in two versions — Egyptian (at Karnak and the Ramesseum) and Akkadian (the Hittite version, from Hattusa) — and the two are close enough to translate against each other.\n\nThe treaty is a parity agreement: the two great powers agree to mutual non-aggression, mutual assistance against attack, and the extradition of refugees and rebels. Its opening lines address Ramesses as 'the great king' and the Hittite king Hattusili III as 'the great king' — equals.\n\n \"The treaty's significance is not only diplomatic but also historiographical: it is the rare ancient document where the wording can be cross-checked, and it demonstrates that the age of the great powers was an age of diplomacy as much as war. A copy of the treaty hangs at the United Nations headquarters — a modern symbol of its fame.",
        ),
      ],
    ),
    module(
      "the-builder",
      "The Builder",
      "The monuments of the great builder.",
      [
        reading(
          "abu-simbel",
          "Abu Simbel",
          15,
          "The temples in Nubia — and their rescue in the 1960s.",
          "The temples of Abu Simbel, carved into a cliff in Nubia, are among the most famous monuments of Egypt. The Great Temple has four colossal seated statues of Ramesses II (about 20 metres tall) at its entrance; its alignment is such that, twice a year (on dates that may correspond to the king's birthday and coronation), the sun illuminates the statues in the inner sanctuary.\n\n \"The Small Temple is dedicated to Queen Nefertari and the goddess Hathor — a rare honor for a queen, whose statue stands equal in height to the king's. The reliefs record the battle of Kadesh and the king's campaigns in Nubia.\n\n \"In the 1960s, the temples were threatened by the rising waters of the Aswan High Dam reservoir. An international UNESCO campaign cut the temples into blocks (about 1,000 for the Great Temple) and reassembled them on higher ground — a landmark of heritage conservation, and the moment when the modern world decided that ancient monuments belong to humanity.",
        ),
        reading(
          "the-ramesseum",
          "The Ramesseum",
          13,
          "The mortuary temple and the fallen colossus.",
          "The Ramesseum, Ramesses II's mortuary temple on the west bank at Thebes, was one of the largest temples in Egypt. Its remains include the fallen colossus — a 1,000-ton statue of the enthroned king that inspired Shelley's poem 'Ozymandias' ('Look on my Works, ye Mighty, and despair!').\n\n \"The temple's walls preserve the records of the reign: the Kadesh poem, the list of the king's sons (processed in a scene at the temple), and the festival calendar. The temple also functioned as an economic institution: its archives (partly preserved as ostraca) record the workers, the rations, and the workshops.\n\n \"The Ramesseum is also an archaeological document in itself: its ruins have been studied for two centuries, and the excavations of the 19th and 20th centuries (by the Egypt Exploration Society) revealed the temple's school (the 'Ramesseum school' where scribes trained), a library of papyri, and the remains of the workers' village.",
        ),
        reading(
          "pi-ramesse",
          "Pi-Ramesses",
          12,
          "The new capital in the Delta — and the city that vanished.",
          "Ramesses II built a new capital, Pi-Ramesses ('House of Ramesses'), in the eastern Delta — on or near the site of Avaris, the old Hyksos capital. The choice was strategic: the Delta was the gateway to Asia, and the capital of the empire should be near the frontier.\n\n \"Pi-Ramesses was one of the largest cities of the ancient world (perhaps 15–20 km²). Its palaces, its gardens, its harbors, and its workshops are described in the texts; the site (Qantir) was excavated in the 20th century (by the Austrian expedition under Manfred Bietak), revealing a city of monumental scale.\n\n \"The city was abandoned in the Twentieth Dynasty, when the Delta capital moved to Tanis; much of its stone was reused in the later cities. The identification of Pi-Ramesses with the biblical 'Rameses' (the store-city of the Exodus narrative) has been debated by scholars — the identification is plausible but the historical Exodus account is not an Egyptian record and its dating is contested.",
        ),
      ],
    ),
    module(
      "family-and-legacy",
      "Family and Legacy",
      "The sons, the tomb, and the memory of the king.",
      [
        reading(
          "the-sons-of-ramses",
          "The Sons of Ramesses",
          14,
          "The largest royal family in Egyptian history.",
          "Ramesses II had many children — over 100 children are known, from his principal wives (Nefertari, Isetnofret, and others) and from secondary wives. The sons are depicted in processions at Abu Simbel and the Ramesseum; some are named in the texts and in the tombs built for them.\n\n \"The succession was complicated: the crown prince (the eldest son of Nefertari, Amenhirwenmef, later Khaemwaset) died before the king, and the throne eventually passed to Merneptah, a son of Isetnofret, who was already elderly by then. The later Nineteenth Dynasty was weakened by the succession disputes that followed.\n\n \"The family is documented in the monuments — the princes' tombs in the Valley of the Queens, and the great tomb KV5 in the Valley of the Kings (built for the sons of Ramesses II, with at least 120 chambers, the largest tomb in the valley). The excavation of KV5 (by the Theban Mapping Project, begun in 1995) is one of the great modern discoveries in the valley.",
        ),
        reading(
          "the-tomb-of-ramses",
          "The Tomb of Ramesses",
          12,
          "KV7 — and the flood that damaged it.",
          "Ramesses II was buried in KV7 in the Valley of the Kings — the largest tomb in the valley by area, planned on a colossal scale to match the reign. The tomb's corridors are decorated with the Book of Gates, the Book of the Dead, and the litany of Ra.\n\n \"The tomb was robbed in antiquity, as nearly all royal tombs were; its location, at the valley's entrance, also made it vulnerable to flash floods — the debris from the floods filled the chambers and damaged the decoration. The mummy was later moved by priests to a royal cache (DB320 at Deir el-Bahari), where it was found in 1881, along with dozens of other royal mummies.\n\n \"The mummy of Ramesses II (now in the Egyptian Museum, Cairo) is one of the best preserved; in 1976 it was flown to Paris for conservation — it traveled on an Egyptian passport that listed the king's occupation as 'King (deceased)'.",
        ),
        quiz("knowledge-check", "Knowledge Check", 10, "Test your understanding of Ramesses II and his reign.", "quiz-ramses-1"),
      ],
    ),
  ],
});

const mythology = defineCourse({
  id: "course-egyptian-mythology",
  slug: "egyptian-mythology",
  title: "Egyptian Mythology",
  subtitle: "The gods, the cosmos, and the stories Egyptians told",
  description:
    "There was no single book of Egyptian myth. This course teaches the stories as the Egyptians themselves told them — in temple inscriptions, coffin texts, and papyri — with their regional variations, and it distinguishes myth from the later retellings that have shaped modern imaginations.",
  shortDescription:
    "Creation accounts, the great stories, and how scholars read Egyptian myth.",
  category: "mythology",
  level: "beginner",
  instructorId: "instr-jonah-park",
  coverImage: "/covers/cover-mythology.svg",
  learningOutcomes: [
    "Describe the main creation accounts and their cities",
    "Narrate the core myths of Osiris, Horus, and Ra",
    "Distinguish primary sources from later Greek accounts",
    "Explain how theology varied by city and period",
    "Recognize modern fabrications of 'Egyptian mythology'",
  ],
  requirements: ["No prior knowledge required."],
  tags: ["mythology", "creation", "osiris", "ra", "gods"],
  featured: true,
  language: "English",
  publishedAt: "2025-04-01",
  updatedAt: "2025-06-10",
  modules: [
    module(
      "the-beginning",
      "The Beginning",
      "The creation accounts of the Egyptian cities.",
      [
        video(
          "creation-from-the-waters",
          "Creation from the Waters",
          16,
          "The common frame: the primeval mound rising from Nun.",
          "All the major Egyptian creation accounts share a frame: in the beginning there were the waters of chaos — Nun, the dark, limitless flood — and from them rose the first mound of dry land, on which the creator god stood and began the work of making the world.\n\nThe image is Egyptian down to its roots: the Nile's flood receding to reveal the black soil, the first land of the year. The temple itself was a model of this: the floor rose from the entrance to the dark sanctuary, the sanctuary being the primeval mound, and the creation was ritually re-enacted every day.\n\n \"The gods who did the creating varied by city — and the variations are the subject of the next lessons. The Egyptians had no problem with multiple creation accounts: different cities told the story with their own god at the center, and the accounts were often combined rather than reconciled.",
        ),
        reading(
          "the-ennead-of-heliopolis",
          "The Ennead of Heliopolis",
          15,
          "Atum and the nine gods of the oldest theology.",
          "The oldest recorded theology is that of Heliopolis (Iunu, near modern Cairo), the city of the sun god. Its account: Atum, the complete one, arose from Nun and created the first pair of gods — Shu (air) and Tefnut (moisture) — by himself (some texts say by sneezing or spitting, a playful image that has generated scholarly debate).\n\n \"Shu and Tefnut produced Geb (earth) and Nut (sky), who in turn produced Osiris, Isis, Set, and Nephthys — together with Atum, the Great Ennead of nine gods. The theology is preserved in the Pyramid Texts (Old Kingdom), the Coffin Texts, and the later writings of Plutarch.\n\n \"The Ennead's structure is genealogical: the cosmos unfolds as a family, and the kingship passes from Geb to Osiris to Horus. The Heliopolitan theology was so influential that the term 'Ennead' became a general word for a group of gods.",
        ),
        reading(
          "the-ogdoad-of-hermopolis",
          "The Ogdoad of Hermopolis",
          13,
          "Four pairs of frogs and snakes, and the first mound.",
          "The Hermopolitan theology (from Hermopolis Magna, ancient Khmun) is older in its elements and stranger in its imagery. It tells of the Ogdoad — four pairs of gods and goddesses representing the properties of the primeval waters: Nun and Naunet (the waters), Heh and Hauhet (infinity), Kek and Kauket (darkness), and Amun and Amaunet (the hidden).\n\n \"In some versions, the Ogdad's interaction produced the 'first mound' or a cosmic egg or a lotus, from which the sun god emerged. The imagery — frogs and serpents, darkness and hiddenness — reflects the experience of the flood: the waters, the night, the darkness before creation.\n\n \"The Ogdoad's gods were later absorbed into the Amun theology of Thebes — Amun, the hidden one, became the great creator god of the New Kingdom. The Hermopolitan account survives in temples of the Late Period and in the writings of later Greeks.",
        ),
        reading(
          "ptah-and-memphis",
          "Ptah and Memphis",
          13,
          "Creation by thought and speech.",
          "The Memphite theology, centered on the city of Memphis, credited the god Ptah with creation — not by generating other gods, but by the power of thought and speech. The text (the 'Memphite Theology', preserved on the Shabaka Stone, a much later copy) says the heart (thought) and the tongue (speech) created all things.\n\n \"The Shabaka Stone is a fascinating document: it is a copy of an older text made in the Twenty-Fifth Dynasty (c. 700 BCE), and the copy itself is damaged — the stone was later used as a millstone. The ideas on it are probably much older, but how much older is debated.\n\n \"The Memphite account is often read as a 'logos theology' — creation by the word — and has been compared with the opening of the Gospel of John. The comparison is modern and should be made with care; the Egyptian text is about the power of the craftsman-god and the king, not about a cosmic 'Word' in the later sense.",
        ),
      ],
    ),
    module(
      "the-great-stories",
      "The Great Stories",
      "The narrative myths that Egyptians retold.",
      [
        reading(
          "the-contendings-of-horus-and-set",
          "The Contendings of Horus and Set",
          17,
          "The longest surviving myth narrative, from a papyrus of about 1150 BCE.",
          "The 'Contendings of Horus and Seth' is one of the great narrative texts of ancient Egypt — a papyrus of about 1150 BCE (the Chester Beatty I papyrus) that tells the story of the conflict between Horus and Set for the throne of Egypt, with the gods as jury and the sun god as judge.\n\n \"The story is earthy and strange: Set tries to humiliate Horus by seducing him (Horus catches Set's semen and throws it in the river); Horus retaliates by spreading his own semen on lettuce, which Set eats; the gods intervene; the eye of Horus is lost and restored; and finally the tribunal awards the throne to Horus, and Set is given the sky and the desert.\n\n \"The myth is the charter of kingship: the rightful king (Horus) succeeds after contesting with the powers of chaos (Set), and the king is the living Horus. The story is also literature — its humor, its legal procedural, and its magic make it one of the most readable ancient texts.",
        ),
        reading(
          "the-myth-of-osiris",
          "The Myth of Osiris",
          18,
          "The murder, the search, and the first resurrection.",
          "The myth of Osiris is the most famous of all Egyptian myths — and its fullest narrative version comes not from Egypt but from the Greek writer Plutarch (first–second century CE), whose 'On Isis and Osiris' tells the story as a Greek moral fable. The Egyptian sources (the Pyramid Texts, the Coffin Texts, temple inscriptions) preserve the episodes rather than a continuous narrative.\n\n \"The story: Osiris, the wise king, is murdered by his brother Set, who seals him in a chest and throws it into the Nile. Isis, his wife, searches for and finds the body; Set dismembers it into fourteen pieces (the number is Plutarch's); Isis and Nephthys gather the pieces (each piece buried at a different site — the 'Osiris beds' were a feature of the festivals); Isis revives Osiris long enough to conceive Horus, and Osiris becomes the ruler of the dead.\n\n \"The myth is the foundation of the afterlife beliefs: the dead king becomes Osiris, the living king is Horus, and every deceased person could become 'an Osiris'. The central ritual of the myth — the reunion of the body — is enacted in the 'Mysteries of Osiris' at Abydos, whose festival is documented in the temple inscriptions of the Ptolemaic period.",
        ),
        reading(
          "the-journey-of-ra",
          "The Journey of Ra",
          15,
          "The sun god's nightly journey through the underworld.",
          "The journey of the sun god is the oldest continuous myth of Egypt: every day, Ra sails his barque across the sky; every night, he sails through the underworld (the Duat), where he must defeat the serpent Apophis (Apep), the embodiment of chaos, before rising again at dawn.\n\n \"The journey is described in the Books of the Netherworld — the Amduat ('What is in the underworld'), the Book of Gates, the Book of Caverns — which were carved on the walls of royal tombs from the New Kingdom onward. These are maps of the night: the twelve hours of the night, the regions of the Duat, and the souls that inhabit them.\n\n \"The myth has a political dimension: the king, as the son of Ra, maintains the order (maat) that makes the journey possible; the defeat of Apophis is a daily renewal of creation. The ritual of the temples included the 'banishing of Apophis' — wax figures of the serpent were spat on, burned, and broken.",
        ),
      ],
    ),
    module(
      "myth-and-meaning",
      "Myth and Meaning",
      "How myth was used — and how scholars read it.",
      [
        reading(
          "myth-in-the-temples",
          "Myth in the Temples",
          14,
          "The ritual use of myth in the life of the temples.",
          "Egyptian myth was not told as 'stories' in the modern sense; it was performed. The temple was the stage: the daily ritual re-enacted the creation (the god was woken, washed, dressed, fed, and put to bed); the festivals re-enacted the great myths (the procession of the god, the 'Mysteries of Osiris', the marriage of Horus and Hathor at Edfu).\n\n \"The texts carved on the temple walls are the scripts for these performances: the hymns, the ritual books, the festival calendars. At Edfu, the temple of Horus (Ptolemaic period), the walls preserve the full myth of the conflict between Horus and Set, read as the temple's founding story.\n\n \"Myth was also a political instrument: the king was Horus, the living one; the temple's myth made his rule cosmic. When a king changed the religion (Akhenaten), he changed the myth. When a queen claimed kingship (Hatshepsut), she had her birth myth carved.",
        ),
        reading(
          "reading-myth-critically",
          "Reading Myth Critically",
          14,
          "The cautions every student of Egyptian myth needs.",
          "Reading Egyptian myth requires three cautions. First, the sources: the continuous narratives we read in modern books are often reconstructions from scattered episodes, and the full versions (like Plutarch's) are Greek, written centuries later and for a Greek audience.\n\n \"Second, the variety: the same myth had different versions in different cities and periods. There was no 'orthodoxy' — the Egyptian tolerance for multiple creation accounts is one of the most striking features of their religion. A 'definitive version' is almost always a modern construction.\n\n \"Third, the modern industry: 'Egyptian mythology' has been reinvented in popular culture (and in the 19th century's 'Egyptian mysteries') with stories — the 'Book of Thoth', the 'pyramid powers', the 'curse of the pharaohs' — that have no Egyptian source. When a myth sounds too complete, too modern, or too dramatic, check the source. If it is not Egyptian, it is not Egyptian myth.",
        ),
        quiz("knowledge-check", "Knowledge Check", 10, "Test your understanding of Egyptian mythology.", "quiz-mythology-1"),
      ],
    ),
  ],
});

const gods = defineCourse({
  id: "course-gods-of-ancient-egypt",
  slug: "gods-of-ancient-egypt",
  title: "Gods of Ancient Egypt",
  subtitle: "The pantheon, the local cults, and the worship of the gods",
  description:
    "Egyptian religion had no fixed canon of gods: local deities rose to prominence, merged with one another, and changed over three thousand years. This course teaches the major gods in their historical context — Amun, Osiris, Isis, Horus, Set, Thoth, Hathor, Anubis — and how they were worshipped.",
  shortDescription:
    "The gods of Egypt, their cities, their myths, and their worship.",
  category: "religion",
  level: "intermediate",
  instructorId: "instr-maya-ibrahim",
  coverImage: "/covers/cover-gods.svg",
  learningOutcomes: [
    "Identify the major gods and their roles",
    "Explain how gods rose and fell in prominence",
    "Describe the phenomenon of syncretism",
    "Distinguish state cult from local and household religion",
    "Trace the survival of Egyptian religion into the Roman world",
  ],
  requirements: ["No prior knowledge required."],
  tags: ["gods", "pantheon", "amun", "osiris", "syncretism"],
  language: "English",
  publishedAt: "2025-04-01",
  updatedAt: "2025-06-10",
  modules: [
    module(
      "the-pantheon",
      "The Pantheon",
      "The great gods of the state religion.",
      [
        video(
          "amun-ra",
          "Amun-Ra",
          15,
          "The hidden one who became king of the gods.",
          "Amun is first attested in the Old Kingdom, but he rose to prominence only in the New Kingdom, when Thebes was the capital. His name means 'the hidden one', and the Great Hymn to Amun describes him as the invisible, all-encompassing creator: 'You are the one who made all that is... the sole one, who made what exists.'\n\n \"Amun was fused with the sun god Ra as Amun-Ra — the hidden power in the visible disk — and his temple at Karnak became the largest religious complex in the world. His priesthood grew immensely wealthy; in the late New Kingdom, the High Priest of Amun at Thebes rivaled the king's power.\n\n \"Amun's prominence made him a target: Akhenaten's revolution was partly an attack on Amun's priesthood, and the 'banishing of the name of Amun' is the earliest large-scale iconoclasm in the record. After the Amarna period, Amun's cult returned stronger than ever — and spread beyond Egypt, to Nubia (Jebel Barkal) and Libya.",
        ),
        reading(
          "osiris-and-isis",
          "Osiris and Isis",
          16,
          "The divine couple of the afterlife and their universal cult.",
          "Osiris, the murdered and restored king of the dead, is the central god of Egyptian religion. His cult was at Abydos — the oldest royal cemetery of Egypt — where his 'Mysteries' were performed annually, and where kings and commoners alike wanted to be buried near him (or at least to have a memorial stela there).\n\n \"Isis, his wife, was the goddess of magic and motherhood: it was her magic that revived Osiris and protected the young Horus. Her cult spread beyond Egypt in the Greco-Roman world — temples to Isis have been found from Rome to Pompeii to the Black Sea, and her worship survived into the fourth century CE, making it one of the last pagan cults of the Roman Empire.\n\n \"The Osiris-Isis-Horus triad is the most familiar of Egyptian mythic families, and its influence is vast: the image of Isis nursing Horus is often compared with later Madonna-and-child imagery, and the cult's hymns (the Arethusa hymn, the 'Lament of Isis') were read into later religious traditions.",
        ),
        reading(
          "horus-and-set",
          "Horus and Set",
          15,
          "The two sides of kingship: order and its necessary adversary.",
          "Horus, the falcon god, is the oldest royal god: the king was 'the living Horus', and the earliest royal names (the Horus names) identify the king with him. In the myth cycle, Horus is the rightful heir who defeats Set and takes the throne of Egypt.\n\n \"Set is more complicated than the 'evil god' of modern retellings. He is the god of the desert, of storms, of disorder — and also of strength. In the myth, he murders Osiris; but in the New Kingdom, he was worshipped as a great god (especially at the Delta city of Avaris and in the Nineteenth Dynasty, whose kings were Set-worshippers: Ramesses II's father was Seti I, 'Man of Set'), and he defended the sun barque against Apophis.\n\n \"The Egyptian view of Set is a lesson in the complexity of their religion: the god of chaos was also necessary — the adversary who made kingship possible and whose strength the king could claim. The simple 'good vs. evil' reading is modern and Greek-influenced.",
        ),
      ],
    ),
    module(
      "local-gods",
      "Local Gods",
      "The gods of the towns, the crafts, and the household.",
      [
        reading(
          "thoth-and-knowledge",
          "Thoth and Knowledge",
          13,
          "The ibis-headed god of writing, reckoning, and wisdom.",
          "Thoth, depicted as an ibis or a baboon, was the god of writing, wisdom, reckoning, and the moon. He was credited with inventing the script (the gods' 'tongue of the gods' was hieroglyphs) and with recording the verdict in the judgement of the dead.\n\n \"His city was Hermopolis (Khmun), where the Ogdoad creation was told; his festival, the 'Feast of Thoth', opened the year in some calendars. In the Ptolemaic period, Thoth was equated with the Greek Hermes (hence 'Hermopolis' and the 'Hermetic' literature), and his cult was one of the bridges between Egyptian and Greek thought.\n\n \"Thoth is the god of the scribe's profession — a reminder that in Egypt, literacy and divine power were closely linked. The scribes' palettes were sometimes buried with the scribes themselves, and the 'House of Life' (the temple library and scriptorium) was under his protection.",
        ),
        reading(
          "hathor-and-the-feminine",
          "Hathor and the Feminine",
          13,
          "The goddess of love, music, and motherhood.",
          "Hathor was one of the most widely worshipped goddesses of Egypt: the cow goddess of love, music, sexuality, and motherhood, and the protectress of women. Her principal cult center was Dendera, in Upper Egypt, where her temple (Ptolemaic) preserves the famous 'birth house' and the astronomical ceiling.\n\n \"Hathor's role was multiple: she was the 'Hand of Atum' in the creation myth, the goddess of the west (where the sun set and the dead lived), and the nurse of the king. Her festival at Dendera — the 'Feast of the Navigation of Hathor' — involved the procession of her barque to the temple of Edfu, the marriage of Hathor and Horus, and a return journey that was a national celebration.\n\n \"Her iconography — the cow horns and sun disk — was so common that it became a general symbol of divinity for goddesses; queens were often identified with her.",
        ),
        reading(
          "anubis-and-the-dead",
          "Anubis and the Dead",
          12,
          "The jackal god of the necropolis and the embalmers.",
          "Anubis, the jackal-headed god, was the guardian of the necropolis and the patron of embalmers. In the myth, it was Anubis who embalmed Osiris — the first mummification — and he presides over the weighing of the heart in the judgement of the dead.\n\n \"The association of jackals with death is practical: jackals haunted the desert cemeteries, and the god who looked like a jackal was both the danger and the protection. The 'Overseer of the Mysteries' (the title of the senior embalmer) was a priest of Anubis, and the embalming workshops were under his protection.\n\n \"Anubis was a god of the transition — between the world of the living and the world of the dead — and his role illustrates a central point about Egyptian religion: the gods of death were not 'evil'; they were the custodians of the most important transition a person would make.",
        ),
        reading(
          "sobek-and-the-fayum",
          "Sobek and the Fayum",
          11,
          "The crocodile god of the Fayum and the kings who loved him.",
          "Sobek, the crocodile god, was worshipped chiefly in the Fayum (the oasis depression west of the Nile), where the sacred lakes held live crocodiles — the most famous at Crocodilopolis (Shedet), where the priests adorned the sacred animals with gold and fed them choice food. The mummified crocodiles of the Fayum are among the most striking finds of Egyptian archaeology.\n\n \"Sobek was a god of power and fertility — the crocodile as the Nile's strength — and he was fused with Horus (Sobek-Horus) and with Ra (Sobek-Ra) in the theology of the Middle Kingdom. The kings of the Twelfth Dynasty (the Amenemhats and Senusrets) were devotees, and the Fayum became a royal hunting preserve.\n\n \"The crocodile cult is a reminder that Egyptian religion was local: a god could be supreme in one town and unknown in the next, and the great pantheon we learn is only the layer that survived in the monuments.",
        ),
      ],
    ),
    module(
      "worship",
      "Worship",
      "How the gods were worshipped — and how the pantheon changed.",
      [
        reading(
          "how-the-gods-were-worshipped",
          "How the Gods Were Worshipped",
          15,
          "The temple, the festival, and the household shrine.",
          "The worship of the gods had two poles. The state cult, in the great temples, was the king's duty: he (or the priests in his name) made the daily offerings — the waking, washing, dressing, and feeding of the god's statue — which sustained the god and the cosmos. The inner temple was restricted: only the king and the priests entered.\n\n \"The people's worship happened elsewhere: at the temple gates during the festivals (when the god's barque was carried out, and the people could see it, and even ask it questions), at local shrines, and at home. The household gods — Taweret the hippopotamus goddess of childbirth, Bes the dwarf god of the household, and the amulets — were the religion of ordinary life.\n\n \"Votive offerings — stelae, statues, food, and the famous 'prayer beads' — were left at shrines; the excavations of these sites (Deir el-Medina, Abydos) recover the requests: health, children, a good harvest, a successful pregnancy. The religion of the people was as rich as the theology of the priests.",
        ),
        reading(
          "the-syncretism-of-egyptian-gods",
          "The Syncretism of the Egyptian Gods",
          14,
          "How gods merged — and why that is not 'confusion' but a system.",
          "Egyptian religion had no fixed canon: gods merged with one another (Amun-Ra, Ptah-Sokar-Osiris, Sobek-Horus, Isis-Hathor), appeared in multiple forms (Hathor as cow, as woman, as sycamore tree), and could be both male and female (the creator god Atum was sometimes depicted as androgynous in creation scenes). This fluidity is called 'syncretism'.\n\n \"Syncretism is not confusion. It was a way of expressing the relationships between divine powers: Amun-Ra means 'the hidden one in the sun', and the fusion expresses a theology, not a muddle. The system worked because the gods were understood as manifestations of powers, not as persons with fixed 'identities' in the modern sense.\n\n \"The lesson for the student: when you meet a god with two names, or a goddess with many forms, do not look for a single 'correct' version — look for the theological statement the combination was making. The Egyptian pantheon is a web of relationships, not a list.",
        ),
        quiz("knowledge-check", "Knowledge Check", 10, "Test your understanding of the gods of ancient Egypt.", "quiz-gods-1"),
      ],
    ),
  ],
});

const afterlife = defineCourse({
  id: "course-egyptian-religion-afterlife",
  slug: "egyptian-religion-afterlife",
  title: "Egyptian Religion and the Afterlife",
  subtitle: "Death, judgement, and the journey beyond",
  description:
    "No ancient culture invested more in the afterlife than Egypt. This course follows the evidence — the coffins, the funerary texts, the tomb goods, and the tomb scenes — through the development of the beliefs: the ka, the ba, the weighing of the heart, and the spells that guided the dead.",
  shortDescription:
    "The soul, the judgement, the Book of the Dead, and the rituals of death.",
  category: "religion",
  level: "advanced",
  instructorId: "instr-jonah-park",
  coverImage: "/covers/cover-afterlife.svg",
  learningOutcomes: [
    "Distinguish the ka, ba, and akh",
    "Explain the judgement of the dead",
    "Trace the development of the funerary texts",
    "Describe the rituals of mummification and burial",
    "Read the afterlife beliefs as evidence of society",
  ],
  requirements: ["Gods of Ancient Egypt or equivalent."],
  tags: ["afterlife", "book of the dead", "judgement", "mummification", "soul"],
  language: "English",
  publishedAt: "2025-04-15",
  updatedAt: "2025-06-10",
  modules: [
    module(
      "the-egyptian-soul",
      "The Egyptian Soul",
      "The components of the person and the world they inhabited.",
      [
        video(
          "ka-ba-and-akh",
          "Ka, Ba, and Akh",
          16,
          "The three (or more) parts of a person in Egyptian thought.",
          "The Egyptians did not have a single word for 'soul'. A person was composed of several elements, the best attested being the ka, the ba, and the akh.\n\nThe ka was the life force — the 'double' that was born with a person and needed to be fed after death (hence the offering cult: the tomb's chapel and its stela, where the living left food and drink). The ba was the mobile personality, depicted as a human-headed bird that could leave the tomb and fly between the world of the living and the dead. The akh was the effective spirit — the luminous, transfigured being that a well-provided dead person became.\n\n \"The goal of the funerary cult was to make the transition from dead person to akh permanent: the body preserved (the mummy), the ka fed, the ba free to return, and the akh effective among the gods. The tomb was the machine for this — its chapel, its goods, its texts, and its statue (the 'ka statue', an alternative body for the ka if the mummy were destroyed).",
        ),
        reading(
          "the-field-of-reeds",
          "The Field of Reeds",
          14,
          "The Egyptian vision of paradise — and its two versions.",
          "The afterlife was imagined as the 'Field of Reeds' (Sekhet-Aaru) — an idealized Egypt, with the fields, the canals, the harvests, and the pleasures of life, without its pains. In the Field of Reeds, the deceased farmed (or rather, the shabtis farmed for them), ate, drank, and reunited with family and friends.\n\n \"Two versions of paradise existed side by side. The older — the celestial version — had the deceased joining the sun god Ra in his barque, sailing the sky by day and the underworld by night, a cycle of renewal. The newer — the Osirian version, dominant from the Middle Kingdom — had the deceased living with Osiris in the Field of Reeds.\n\n \"The two versions were not contradictory: the deceased could sail with Ra and live with Osiris. The Egyptian afterlife was not a single place but a set of possibilities, and the texts and the tomb goods provided for all of them.",
        ),
      ],
    ),
    module(
      "the-journey",
      "The Journey",
      "The judgement, the spells, and the books of the dead.",
      [
        reading(
          "the-weighing-of-the-heart",
          "The Weighing of the Heart",
          16,
          "The most famous scene of Egyptian religion.",
          "The judgement of the dead, before Osiris, is the most famous scene of Egyptian religion. The heart (ib) — the seat of intelligence, emotion, and memory — was weighed against the feather of Maat (order, truth, justice) in a balance watched over by Anubis; the ibis-headed Thoth recorded the verdict; and the monster Ammit — part crocodile, part lion, part hippopotamus — waited to devour the hearts that failed.\n\n \"If the heart balanced, the deceased was 'true of voice' (ma'a kheru) and joined Osiris and the gods. If it failed, the second death followed — annihilation, the fate worse than death that the spells and the amulets were meant to prevent.\n\n \"The scene is most familiar from the Book of the Dead (spell 125), which also includes the 'negative confession' — the deceased declares before the forty-two assessor gods: 'I have not committed sin... I have not caused pain... I have not been violent...' The confession is a moral document: it defines, in negative terms, the Egyptian ethic.",
        ),
        reading(
          "the-book-of-the-dead",
          "The Book of the Dead",
          17,
          "The spells of the afterlife — what the 'book' is and is not.",
          "The 'Book of the Dead' is a modern name (from the German Totenbuch). The Egyptians called it 'the book of going forth by day' — and it is not a book but a collection of spells, written on papyrus, placed with the dead. No two copies are the same: the spells are selected for the owner, and the collection varies by period and by budget.\n\n \"The spells are the technology of the afterlife: they name the gates of the underworld and their guardians ('I know the name of the doorkeeper'), they transform the deceased into the forms needed (a swallow, a lotus, a snake), they protect the heart (the famous heart scarab, with its spell preventing the heart from testifying against its owner), and they guide the deceased through the judgement.\n\n \"The Book of the Dead is the descendant of the Pyramid Texts (Old Kingdom, carved in pyramids) and the Coffin Texts (Middle Kingdom, painted on coffins). Its texts were later carved on the walls of royal tombs (the 'Books of the Netherworld'), and its last versions continued into the Roman period — a tradition of funerary literature spanning three thousand years.",
        ),
        reading(
          "the-pyramid-and-coffin-texts",
          "The Pyramid and Coffin Texts",
          15,
          "The oldest funerary literature in the world.",
          "The oldest funerary texts are the Pyramid Texts (Old Kingdom, c. 2350 BCE onward), carved in the chambers of the pyramids of the late Fifth and Sixth Dynasties. They are the oldest large body of religious texts in the world: the spells (over 700 in the corpus) are written in the oldest known form of the language, and their language is deliberately archaic and difficult.\n\n \"The Coffin Texts (Middle Kingdom) adapted the spells for the nobility: painted on the inside of coffins, they made the afterlife available to non-royal persons for the first time — a social revolution, since the afterlife had been the king's privilege (the king joined the sun god; the nobility now joined Osiris).\n\n \"The sequence is the history of Egyptian religion in miniature: from the king's exclusive immortality, to the nobles', to the commoners' (in the New Kingdom, the Book of the Dead was available to anyone who could pay for it). The democratization of the afterlife is one of the most important developments in the history of religion.",
        ),
      ],
    ),
    module(
      "ritual",
      "Ritual",
      "The practices of death: mummification and the funerary rite.",
      [
        reading(
          "mummification-and-belief",
          "Mummification and Belief",
          15,
          "Why the body had to be preserved — and how it was done.",
          "Mummification was a ritual act, not merely a craft. The body had to be preserved because the ka and ba needed a home; without the body, the dead person's identity was at risk. The process — dehydration with natron (a natural salt), the removal of the internal organs (the brain was extracted through the nose with a hooked tool; the heart was left in place, as the seat of intelligence), the wrapping with linen, the amulets between the bandages — took about seventy days.\n\n \"The process varied by period and by budget: the finest mummification (the 'first class', described by Herodotus) was for the elite; cheaper versions existed for the modest. The evidence for the practice — the mummies themselves, the embalming caches, the tools, and the 'embalming texts' (the Ritual of Embalming papyri) — is among the richest in Egyptian archaeology.\n\n \"Modern science has studied the mummies (X-ray, CT scan, DNA, and the 'mummy portraits' of Roman Egypt), and the study continues to raise ethical questions: how the dead should be treated, who may study them, and what we owe the people whose bodies they are.",
        ),
        reading(
          "the-opening-of-the-mouth",
          "The Opening of the Mouth",
          13,
          "The rite that restored the senses of the dead.",
          "The 'Opening of the Mouth' was the central rite of the funeral: performed on the mummy (and on statues), it restored the dead person's ability to eat, drink, speak, breathe, and see — the senses needed for the afterlife. The rite is depicted in tomb paintings (the most complete scenes are in the tomb of Rekhmire, Thebes, 18th Dynasty) and described in the ritual texts.\n\n \"The ritual used a set of instruments (the adze, the chisel, the 'pesesh-kef' knife) and the touch of the mouth of the mummy, accompanied by spells and by the recitation of the myth of Horus and Set (the ritual was a re-enactment of the myth: Horus opens the mouth of Osiris, and the deceased is Osiris).\n\n \"The rite is a window into the practical theology of death: the afterlife was not a metaphor but a continuation, and the dead needed their bodies, their food, their voices. The tomb, the goods, the texts, and the rituals were all parts of the same machine — the machine for making a person into an akh.",
        ),
        quiz("knowledge-check", "Knowledge Check", 10, "Test your understanding of Egyptian religion and the afterlife.", "quiz-afterlife-1"),
      ],
    ),
  ],
});

const hieroglyphs = defineCourse({
  id: "course-reading-hieroglyphs",
  slug: "reading-hieroglyphs",
  title: "Reading Egyptian Hieroglyphs",
  subtitle: "The script of the pharaohs, taught step by step",
  description:
    "Learn to read the script of ancient Egypt. This course teaches the system from the ground up: the uniliteral signs, the biliterals and triliterals, the determinatives, the grammar of Middle Egyptian, and the story of the decipherment. By the end, you will read real inscriptions — cartouches, stelae, and short texts — with a beginner's confidence.",
  shortDescription:
    "The hieroglyphic script, the grammar of Middle Egyptian, and real practice.",
  category: "hieroglyphs",
  level: "intermediate",
  instructorId: "instr-nadia-el-baz",
  coverImage: "/covers/cover-hieroglyphs.svg",
  learningOutcomes: [
    "Identify the 25 uniliteral signs of the Egyptian 'alphabet'",
    "Recognize biliterals, triliterals, and determinatives",
    "Read royal cartouches and simple inscriptions",
    "Explain the grammar of Middle Egyptian",
    "Narrate the decipherment and its history",
  ],
  requirements: ["No prior knowledge required; patience and a notebook are the only prerequisites."],
  tags: ["hieroglyphs", "middle egyptian", "script", "decipherment", "grammar"],
  featured: true,
  language: "English",
  publishedAt: "2025-04-15",
  updatedAt: "2025-06-10",
  modules: [
    module(
      "the-script",
      "The Script",
      "The signs, the sounds, and the system.",
      [
        video(
          "a-brief-history-of-the-script",
          "A Brief History of the Script",
          15,
          "Three thousand years of writing, and the scripts that grew from it.",
          "The hieroglyphic script was used for more than three thousand years — from around 3200 BCE to the last hieroglyphic inscription (at Philae, 394 CE). In that time, it developed from a simple system of labels into a complex script of about 1,000 signs.\n\nThe script had three kinds of signs: logograms (signs representing whole words), phonograms (signs representing sounds), and determinatives (silent signs that clarify a word's meaning). A single word could combine all three — the sound-signs spelling the word, the determinative placing it in a category.\n\n \"The hieroglyphs themselves were only one form of the script. For everyday writing, the Egyptians developed 'hieratic' (a cursive form of hieroglyphs, used from the Old Kingdom) and later 'demotic' (a highly cursive script of the Late Period). The Greek alphabet, adapted for Egyptian, produced Coptic — the final stage of the language, which is the key that unlocked the earlier scripts.",
        ),
        reading(
          "the-uniliteral-signs",
          "The Uniliteral Signs",
          18,
          "The Egyptian 'alphabet' — the 25 single-consonant signs.",
          "The foundation of the script is the set of about 25 uniliteral signs — signs that represent a single consonant. (The Egyptians did not write vowels, so these are consonant signs; modern Egyptologists call them 'uniliterals'.) They are the closest thing the script has to an alphabet.\n\nSome of the most common: the reed leaf (i), the quail chick (w), the owl (m), the half-circle (n), the water ripple (n), the reed (r), the mouth (r), the arm (t), the bread loaf (t), the zigzag (z), the basket (nb), the owl (m), the vulture (a), the cobra (d), the reed (i), the horned viper (f), the scarab (kher), the sun disk (ra), the twisted flax (kh), the basket (nb), the owl (m), the reed (i), the water ripple (n).\n\n \"Learning these signs is the first step: they appear in nearly every word, including the royal names (cartouches) that are the best practice material. The Gardiner sign list (the standard catalogue of signs, published by Alan Gardiner in 1927) numbers them — the uniliterals are the 'A' and 'I' groups — and every student of hieroglyphs learns the list.",
        ),
        reading(
          "bilaterals-and-trilaterals",
          "Bilaterals and Trilaterals",
          16,
          "The two- and three-consonant signs that expand the vocabulary.",
          "Beyond the uniliterals, the script has biliteral signs (two consonants) and triliteral signs (three consonants). These signs are the key to reading: they make words shorter and reading faster, and they are the reason a text of a few dozen signs can record a sentence.\n\n \"Common bilaterals include the 'house' sign (pr, 'house'), the 'sun' sign (ra), the 'water' sign (mw), and the 'heart' sign (ib); common triliterals include the 'plural' sign (w), the 'god' sign (ntr), the 'city' sign (niwt), and the 'star' sign (sbA).\n\n \"The triliteral signs are especially important in the royal names: the cartouche of Ramesses II, for example, contains the triliteral 'User' (a reed-and-sun sign), the uniliteral 'maat' (a feather), and the sun disk (Ra) — read together, User-maat-re, 'Rich in harmony, strong in truth'.",
        ),
        reading(
          "determinatives",
          "Determinatives",
          14,
          "The silent signs that tell you what a word means.",
          "Determinatives are the third kind of sign: silent signs placed at the end of a word to show its meaning. They are not pronounced, but they are essential — because the script does not write vowels, many words are written identically, and the determinative distinguishes them.\n\n \"The system is logical: words of action are followed by the 'man' or 'action' determinative; names of gods by the god determinative (a seated god); names of places by the town determinative (a circle with a cross); abstract words by the 'papyrus roll' determinative; and the 'heart' determinative marks words about feeling.\n\n \"Reading the determinatives is a skill in itself: the experienced reader recognizes them at a glance, and the practice of 'seeing the determinative first' is the recommended strategy for beginners. The Gardiner list categorizes determinatives into groups (A: men, B: women, C: gods, and so on), and the groups are the first thing a student memorizes.",
        ),
      ],
    ),
    module(
      "reading-practice",
      "Reading Practice",
      "Cartouches, stelae, and the direction of writing.",
      [
        exercise(
          "reading-a-cartouche",
          "Reading a Cartouche",
          16,
          "A guided exercise: read the cartouche of a king.",
          "In this exercise, you will read the cartouche of Ramesses II. The cartouche (the oval ring) contains the throne name, preceded by the title 'King of Upper and Lower Egypt'.\n\nThe signs, in order:\n\n1. The seated god (the determinative of the title) — wait: the title 'King of Upper and Lower Egypt' is written with the sedge plant (the symbol of Upper Egypt) and the bee (the symbol of Lower Egypt), followed by the cartouche.\n2. Inside the cartouche: a reed-and-sun sign (the biliteral 'ws' or 'User'), the feather of Maat (the uniliteral 'm' plus the determinative of truth — read as 'maat'), and the sun disk (the uniliteral 'ra').\n\nRead aloud: 'User-maat-re' — 'Rich in harmony, strong in truth'. The meaning is a theological statement: the king's throne name declares his role as maintainer of maat.\n\nNow try the birth name (the second cartouche): the sun disk, the folded cloth (the uniliteral 's'), the mouth (the uniliteral 'r'), the reed (the uniliteral 's'), and the child (the determinative) — read as 'Ramesses', 'Born of Ra'. The child-sign at the end is the 'sa' sign, used in names meaning 'born of'.",
        ),
        reading(
          "the-direction-of-writing",
          "The Direction of Writing",
          12,
          "How to tell which way to read a text.",
          "Hieroglyphs can be written in rows or columns, and they can read left to right or right to left. The direction is determined by the signs themselves: the human and animal signs face the beginning of the line. If the figures face left, the line reads from left to right; if they face right, the line reads from right to left.\n\n \"The convention is logical: the signs 'look toward' what is coming next. In vertical columns, the signs are arranged from top to bottom, with the figures facing the start of the column.\n\n \"A related rule: the determinative comes at the end of the word, and the honorific rule (the 'honorific transposition') places the name of the king or a god at the beginning of a sentence, even if it belongs grammatically at the end. These rules — and the habit of checking them — are the core of the beginner's method.",
        ),
        exercise(
          "royal-names-in-practice",
          "Royal Names in Practice",
          16,
          "Practice reading five royal cartouches.",
          "Practice with these five cartouches. For each, identify the uniliteral and biliteral signs, then read the name.\n\n1. The cartouche of Thutmose III: a half-circle (n), a bread loaf (t), the owl (m), the sun disk (Ra), and the child-sign — read as 'Men-kheper-re', 'The lasting form of Ra'.\n\n2. The cartouche of Hatshepsut: the owl (m), the bread loaf (t), the scarab (kher), the sun disk (Ra), the reed (s), the basket (nb), the cobra (the determinative) — read as 'Maat-ka-re', 'The truth of the ka of Ra'.\n\n3. The cartouche of Akhenaten: the sun disk (Ra), the twisted flax (kh), the water ripple (n), the sun disk (Aten) — read as 'Akhen-aten', 'Effective for the Aten'.\n\n4. The cartouche of Tutankhamun: the bowl (neb), the basket (nb), the sun disk (Ra), the water ripple (n), the owl (m), the sun disk (Aten) — read as 'Neb-kheperu-re'... check yourself: the actual name is 'Tut-ankh-amun', 'Living image of Amun'.\n\n5. The cartouche of Cleopatra: the basket (nb), the scarab (kher), the sun disk (Ra), the owl (m), the feather (Maat), the bread loaf (t), the cobra (the determinative) — read as 'Kleopatra', the Greek name written in Egyptian signs.\n\nUse the Hieroglyphs Quick Reference to check your answers, and write each name out by hand — the muscle memory of the signs is the fastest way to learn them.",
        ),
      ],
    ),
    module(
      "the-language",
      "The Language",
      "The grammar of Middle Egyptian and the decipherment.",
      [
        reading(
          "middle-egyptian-grammar-1",
          "Middle Egyptian Grammar (1)",
          16,
          "The skeleton of the classical language: word order, nouns, pronouns.",
          "Middle Egyptian is the classical stage of the language, and its grammar is the grammar students learn first. The basics:\n\nWord order: the standard verbal sentence is verb–subject–object. 'The king loves the god' is written 'loves the king the god'. Non-verbal sentences (the 'nominal' sentences) begin with the subject.\n\nNouns: Egyptian nouns have gender (masculine and feminine — the feminine is usually marked with a 't') and number (singular, dual, and plural). The dual is used for natural pairs (the eyes, the hands) and for the 'Two Lands'.\n\nPronouns: independent pronouns exist, but the language prefers suffix pronouns attached to nouns and prepositions: 'the house-i' = 'my house', 'the house-k' = 'your house'. The suffix pronouns are the most common form of the pronoun in the text.\n\nAdjectives follow the noun they modify, and agree with it in gender and number.",
        ),
        reading(
          "middle-egyptian-grammar-2",
          "Middle Egyptian Grammar (2)",
          16,
          "The verb system: the forms that express time and aspect.",
          "The Egyptian verb is built around a system of 'forms' (traditionally called the 'sdm.f' forms) that express tense and aspect. The most important:\n\n1. The pseudoparticiple (the 'old perfective'): a form built from the verbal noun, used for the past tense — 'the king has gone'.\n\n2. The participle: an adjective-like form, used for the present and for relative clauses — 'the king who is going'.\n\n3. The 'sdm.f' (the 'prospective' or 'future' form): the basic form of the verb, used for the future and for the subjunctive — 'the king will go'.\n\n4. The 'ir.f' form: a periphrastic future, built with the auxiliary verb 'ir' — 'the king is going to go'.\n\n \"The system is unfamiliar at first, but it is logical: Egyptian distinguishes time (past, present, future) and aspect (completed, ongoing) differently from English, and the forms are the tools. The grammar is well described in the standard grammars (Allen's Middle Egyptian, the standard modern reference), and the student's best friend is the phrase book of the 'form' examples.",
        ),
        reading(
          "the-decipherment",
          "The Decipherment",
          17,
          "Young, Champollion, and the key that unlocked the script.",
          "For centuries after the end of the pharaonic period, no one could read hieroglyphs. The script's last inscription is at Philae (394 CE); by the medieval period, the knowledge was lost, and the script was widely believed to be purely symbolic — a system of ideas, not sounds.\n\nThe key was the Rosetta Stone (196 BCE), found in 1799 at Rashid (Rosetta) by Napoleon's soldiers: a decree written in three scripts — hieroglyphic, demotic, and Greek. Because scholars could read Greek, the stone provided a known text against which the scripts could be compared.\n\n \"The decipherment came in two stages. Thomas Young (1810s) showed that some signs in the cartouches were phonetic — the names of Ptolemy and Cleopatra could be read sound by sound. Jean-François Champollion (1822–1824), building on Young's insight and on his knowledge of Coptic, demonstrated that the script combined phonetic and ideographic elements throughout — not just in foreign names — and read the grammar of the language. His key insight: the cartouches contained royal names, read phonetically, and the rest of the script followed the same principle.",
        ),
        reading(
          "the-rosetta-stone",
          "The Rosetta Stone",
          14,
          "The object, the decree, and the history of its discovery.",
          "The Rosetta Stone is a granodiorite stele, about 112 cm tall, inscribed with a decree issued by a council of priests at Memphis in 196 BCE, honouring the young Ptolemy V. The decree is written in three scripts: hieroglyphic (14 lines, the formal script), demotic (32 lines, the everyday script), and Greek (54 lines, the language of the administration).\n\nThe stone was found in 1799 at Fort Julien near Rashid (Rosetta) by soldiers of Napoleon's Egyptian campaign, and it passed to British hands under the Treaty of Alexandria (1801); it has been in the British Museum since 1802. Its presence there is part of the contested history of Egyptian antiquities — and the subject of modern requests for its return.\n\n \"The stone's three texts made the decipherment possible, but the decipherment itself required the insight that the hieroglyphic script was phonetic — the insight of Young and Champollion. The stone is thus both an object and an idea: the object that provided the evidence, and the idea that the evidence could be read.",
        ),
        quiz("knowledge-check", "Knowledge Check", 10, "Test your understanding of the hieroglyphic script.", "quiz-hieroglyphs-1"),
      ],
    ),
  ],
});

export const coursesB: Course[] = [
  amarna,
  tutankhamun,
  ramsesII,
  mythology,
  gods,
  afterlife,
  hieroglyphs,
];
