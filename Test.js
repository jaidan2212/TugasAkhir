const questions = [
  {
    section: "Listening",
    time: 3600,
     audioGroup: [
      {
        audioSrc: "audio test 1.mp3", 
        startIndex: 0,
        endIndex: 14
      },
      {
        audioSrc: "audio test 2.mp3", 
        startIndex: 15,
        endIndex: 30
      },
    ],
    questions: [
      { text: "questions 1", options: ["He knew that cherries were pricier than.", "He bought cherries and grapes because of not knowing their prices.", "He didn't know that cherries were pricier than grapes.", "He didn't buy either grapes or cherries because both were pricy."] },
      { text: "questions 2", options: ["She felt it wasn't fair.", "She was in rage.", "She felt inferior.", "She wasn't furious."] },
      { text: "questions 3", options: ["He is unhappy at the thought of retiring.", "He hates to leave his job soon.", "He is retiring too fast.", "He is eager to leave his job"] },
      { text: "questions 4", options: ["The rent was given by her for Tom.", "She was asked money for paying the rent.", "Tom gave her money for the rent.", "The money was lent by Tom early this month."] },
      { text: "questions 5", options: ["She shouldn't leave her purse here.", "She's probably in the apartment.", "Her purse must not be in the apartment.", "She left the apartment without taking her purse."] },
    {
    text: "questions 6",
    options: [
      "He didn’t try because he had already passed.",
      "He failed intentionally.",
      "He didn’t prepare due to working late hours.",
      "He thought the test was easy so didn’t study."
    ]
  },
  {
    text: "questions 7",
    options: [
      "Linda didn’t eat much.",
      "Linda has a good appetite.",
      "Linda dislikes buffet food.",
      "Linda prefers to eat alone."
    ]
  },
  {
    text: "questions 8",
    options: [
      "The professor did not accept the paper.",
      "The professor canceled the assignment.",
      "He hasn't submitted the paper because of an extension.",
      "He turned it in late without permission."
    ]
  },
  {
    text: "questions 9",
    options: [
      "She lost her phone permanently.",
      "She forgot her phone at home.",
      "She didn’t feel like talking to anyone.",
      "She had no service on her phone."
    ]
  },
  {
    text: "questions 10",
    options: [
      "He’s moving to New York for a job.",
      "He’s visiting his sister who now lives there.",
      "He’s going to New York on a business trip.",
      "He is going with his sister to New York."
    ]
  },
 {
    text: "questions 11",
    options: [
      "She went to the concert already.",
      "She doesn’t like concerts.",
      "She can’t go because of her schedule.",
      "She is performing at the concert."
    ]
  },
  {
    text: "questions 12",
    options: [
      "Mark is traveling for research.",
      "Mark has been busy with academic work.",
      "Mark has stopped working on his thesis.",
      "Mark doesn’t like doing his thesis."
    ]
  },
  {
    text: "questions 13",
    options: [
      "She enjoyed the book very much.",
      "She hasn’t finished reading it.",
      "She didn’t like the ending.",
      "She found the book boring."
    ]
  },
  {
    text: "questions 14",
    options: [
      "His roommate is loud and messy.",
      "His roommate is quiet and tidy.",
      "His roommate is hard to live with.",
      "He wants to move out soon."
    ]
  },
  {
    text: "questions 15",
    options: [
      "The professor will definitely change the date.",
      "The test has already been canceled.",
      "The professor is strict about rescheduling.",
      "The professor is unsure about the test."
    ]
  },
    {
    text: "questions 1",
    options: [
      "Artificial plants.",
      "Plants in plastic containers.",
      "Plants that resemble plastic.",
      "Plants that produce a usable substance."
    ]
  },
  {
    text: "questions 2",
    options: [
      "It lasts longer.",
      "It is more artificial.",
      "It is easy to make in a laboratory.",
      "It is good for the environment."
    ]
  },
  {
    text: "questions 3",
    options: [
      "It biodegrades slowly.",
      "It kills plants.",
      "People never throw it away.",
      "It is not very strong."
    ]
  },
  {
    text: "questions 4",
    options: [
      "Engineering.",
      "Art.",
      "Botany.",
      "Geology."
    ]
  },
  {
    text: "questions 5",
    options: [
      "Because they are easy to grow indoors.",
      "Because they can be used to make plastic.",
      "Because they need very little water.",
      "Because they grow in plastic containers."
    ]
  },
  {
    text: "questions 6",
    options: [
      "It is cheaper than oil-based plastic.",
      "It is stronger than metal.",
      "It decomposes naturally.",
      "It smells like plants."
    ]
  },
  {
    text: "questions 7",
    options: [
      "It burns cleanly in factories.",
      "It is stored in special landfills.",
      "It breaks down faster than traditional plastic.",
      "It repels insects and rodents."
    ]
  },
  {
    text: "questions 8",
    options: [
      "It is too expensive to produce.",
      "It accumulates in the oceans.",
      "It changes the DNA of animals.",
      "It stops plants from growing."
    ]
  },
  {
    text: "questions 9",
    options: [
      "They can take over 100 years to break down.",
      "They require industrial composting facilities.",
      "They break down instantly in sunlight.",
      "They only break down in seawater."
    ]
  },
  {
    text: "questions 10",
    options: [
      "Medical tools and implants.",
      "Food packaging and utensils.",
      "Automotive and airplane parts.",
      "Clothing and textiles."
    ]
  },
  {
    text: "questions 11",
    options: [
      "They are not fully biodegradable yet.",
      "They smell bad when heated.",
      "They are toxic to small animals.",
      "They cannot hold liquids."
    ]
  },
  {
    text: "questions 12",
    options: [
      "They are less flexible.",
      "They degrade faster and more completely.",
      "They cost more to produce.",
      "They are less colorful."
    ]
  },
  {
    text: "questions 13",
    options: [
      "Consumers are hesitant due to cost.",
      "Everyone already prefers them.",
      "Consumers dislike plant materials.",
      "They are only used in government buildings."
    ]
  },
  {
    text: "questions 14",
    options: [
      "It grows in all climates.",
      "It is already heavily subsidized.",
      "It is a cheap and renewable source.",
      "It tastes better than sugarcane."
    ]
  },
  {
    text: "questions 15",
    options: [
      "Bioplastics will be used for car parts.",
      "Plastic bags will disappear completely.",
      "All clothing will be made of plants.",
      "Only scientists will use plastic."
    ]
  }
    ]
  },
  {
    section: "Structure",
    time: 3600,
    questions: [
      { text: "The professor along with his students ___ at the conference yesterday.", options: ["were", "was", "have been", "are"] },
      { text: "Neither the teacher nor the students ___ able to solve the problem.", options: ["is", "was", "are", "has"] },
      { text: "Each of the books on the shelf ___ a different story.", options: ["have", "are", "has", "were"] },
      { text: "The committee ___ not yet reached a decision.", options: ["has", "have", "is", "are"] },
      { text: "If he ___ more time, he would finish the project.", options: ["has", "had", "have", "having"] },
      { text: "The research paper must be submitted ___ Friday.", options: ["in", "on", "at", "by"] },
      { text: "Each of the students in the class ___ responsible for doing their own work.", options: ["are", "is", "ware", "be"] },
      { text: "It is important that he ___ to the meeting on time.", options: ["come", "comes", "came", "had come"] },
      { text: "She has not eaten anything ___ yesterday.", options: ["since", "for", "until", "by"] },
      { text: "The giant ragweed, or buffalo weed, grows ___", options: ["18 feet up to high", "to high 18 feet up", "up to 18 feet high", "18 feet high up to"] },
      { text: "Neptune is ___ any planet except Pluto.", options: ["to be far from the Sun", "far from the Sun being", "farther than the Sun is", "farther from the Sun than"] },
      { text: "Since prehistoric times, artists have arranged paint on surfaces in ways ___ their ideas about people and the world.", options: ["express", "that their expression of", "which, expressing", "that express"] },
      { text: "Except for certain microorganisms, ___need oxygen to survive.", options: ["of all living things", "all living things", "all are living things", "are all living things"] },
      { text: "Dubbing is used in filmmaking ___ a new sound track to a motion picture.", options: ["which to add", "to add", "is adding that", "to add while"] },
      { text: "The importance of the hand, and more generally of the body, in children's acquisition of arithmetic ___", options: ["can hardly be exaggerated", "can be exaggerate hardly", "hardly exaggerated can be", "exaggerated can be hardly"] },
      { text: "___ is present in the body in greater amounts than any other mineral.", options: ["Calcium", "There is calcium", "Calcium, which", "It is calcium"] },
      { text: "Mike is the only one of those students who ___ passed the exam.", options: ["have", "has", "are", "is"] },
      { text: "John, along with his friends, ___ going to the party.", options: ["are", "is", "have", "has"] },
      { text: "She ___ a letter when I came.", options: ["wrote", "was writing", "has written", "writes"] },
      { text: "If it ___, we will stay at home.", options: ["rains", "will rain", "rained", "rain"] },
      { text: "They ___ TV when the phone rang.", options: ["watched", "were watching", "are watching", "watch"] },
      { text: "Despite of ___, he managed to finish his homework on time.", options: ["tired", "tiredness", "tiring", "to tire"] },
      { text: "_, she could not answer the question.", options: ["As much as she tried", "As she much tried", "As tried she much", "As much tried she"] },
      { text: "The pie, ____ was very delicious, was made by Grandma.", options: ["which", "who", "where", "whose"] },
      { text: "The book ____ Mary was reading is very interesting.", options: ["who", "whom", "where", "that"] },
      { text: "The man ____ lives next door is very friendly.", options: ["who", "which", "where", "whom"] },
      { text: "The teacher, along with her students, ___ going to the museum.", options: ["are", "were", "is", "have been"] },
      { text: "Neither the director nor the actors ___ happy with the final scene.", options: ["was", "is", "are", "being"] },
      { text: "Each of the applicants ___ a resume with their application.", options: ["submit", "submitting", "submitted", "submits"] },
      { text: "There ___ a lot of noise in the hallway during the test.", options: ["was", "were", "are", "is"] },
      { text: "If he ___ earlier, he would have caught the bus.", options: ["left", "had left", "leaves", "was leaving"] },
      { text: "The manager demanded that the report ___ immediately.", options: ["is completed", "completes", "be completed", "will be completed"] },
      { text: "Not only the students but also the teacher ___ excited about the trip.", options: ["are", "were", "is", "have"] },
      { text: "The book ___ she borrowed from the library is very interesting.", options: ["which", "whom", "who", "what"] },
      { text: "By the time we arrived, the play ___.", options: ["had begun", "have begun", "begun", "begins"] },
      { text: "She would have passed the exam if she ___ harder.", options: ["studied", "had studied", "has studied", "would study"] },
      { text: "The committee suggested that he ___ the proposal before the meeting.", options: ["reviews", "reviewed", "review", "will review"] },
      { text: "The more you practice, ___ you will become.", options: ["the more skillful", "more skillful", "skillful", "most skillful"] },
      { text: "It was not until the lights went out ___ I realized how dark it was.", options: ["then", "that", "when", "so"] },
      { text: "The painting, along with the sculptures, ___ on display until next month.", options: ["is", "are", "were", "be"] }
    ]
  },
  {
    section: "Reading",
    time: 3600,
    questions: [
      {
        passage: "Once upon a time, there was a small village where people lived happily and helped each other...",
        text: "What is the main idea of the story?",
        options: [
          "The traveler forgot about the village.",
          "The villagers were selfish and unkind.",
          "Kindness leads to good things in return.",
          "The tree was magical and gave fortune."
        ]
      },
      {
        passage: "Dina was a student who loved to read books...",
        text: "Why did the story in the book seem to change every time Dina read it?",
        options: [
          "The book was broken.",
          "The library staff changed the story.",
          "The book responded to her emotions.",
          "The book was written in many languages."
        ]
      },
      {
        passage: "Tommy was late for school again...",
        text: "What lesson did Tommy learn from the incident?",
        options: [
          "It's okay to lie if you're in trouble.",
          "Being honest can lead to understanding.",
          "Homework is not important.",
          "Teachers dont care about rules."
        ]
      },
      {
        passage: "Nina always wanted to be a doctor...",
        text: "What does the story tell us about Nina?",
        options: [
          "She gave up on her dream due to money.",
          "She wanted to be a teacher in her village.",
          "She worked hard to achieve her dream.",
          "She never liked helping people."
        ]
      },
      {
        passage: "During a school trip to the mountains...",
        text: "What is the main lesson from the story?",
        options: [
          "Getting lost in the mountains is fun.",
          "School trips are always dangerous.",
          "Friends should always bring snacks.",
          "Staying calm helps in difficult situations."
        ]
      },
      {
        passage: "As Philadelphia grew from a small town into a city in the first half of the eighteenth century, it became an increasingly important marketing center for a vast and growing agricultural hinterland. Market days saw the crowded city even more crowded, as fanners from within a radius of 24 or more kilometers brought their sheep, cows, pigs, vegetables, cider, and other products for direct sale to the townspeople. The High Street Market was continuously enlarged throughout the period until 1736, when it reached from Front Street to Third. By 1745 New Market was opened on Second Street between Pine and Cedar. The next year the Callowhill Market began operation. Along with market days, the institution of twiceyearly fairs persisted in Philadelphia even after similar trading days had been discontinued in other colonial cities. The fairs provided a means of bringing handmade goods from outlying places to would-be buyers in the city. Linens and stockings from Germantown, for example, were popular items. Auctions were another popular form of occasional trade. Because of the competition, retail merchants opposed these as well as the fairs. Although governmental attempts to eradicate fairs and auctions were less than successful, the ordinary course of economic development was on the merchants side, as increasing business specialization became the order of the day. Export merchants became differentiated from their importing counterparts, and specialty shops began to appear in addition to general stores selling a variety of goods. One of the reasons Philadelphias merchants generally prospered was because the surrounding area was undergoing tremendous economic and demographic growth. They did their business, after all, in the capital city of the province. Not only did they cater to the governor and his circle, but citizens from all over the colony came to the capital for legislative sessions of the assembly and council and the meetings of the courts of justice.",
        text: "What does the passage mainly discuss?",
        options: [
          "Philadelphias agriculture importance.",
          "Philadelphias development as a marketing center.",
          "The sale of imported goods in Philadelphia.",
          "The administration of the city of Philadelphia."
        ]
      },
      {
        text: "The word “it” in line 6 refers to",
        options: [
          "the crowded city.",
          "a radius.",
          "the High Street Market.",
          "the period."
        ]
      },
      {
        text: "It can be inferred that the author mentions “Linens and stockings” in line 12 to show that they were items that.",
        options: [
          "retail merchants were not willing to sell.",
          "were not available in the stores in Philadelphia.",
          "were more popular in Germantown man in Philadelphia.",
          "could easily be transported."
        ]
      },
      {
        text: "The word “eradicate” in line 16 is closest in meaning to",
        options: [
          "eliminate.",
          "exploit.",
          "organize.",
          "operate."
        ]
      },
      {
        text: "What does the author mean by stating in line 17 that “economic development was on the merchants side”?",
        options: [
          "Merchants had a strong impact on economic expansion.",
          "Economic forces allowed merchants to prosper.",
          "Merchants had to work together to achieve economic independence.",
          "Specialty shops near large markets were more likely to be economically successful."
        ]
      },
      {
        passage: "The mineral particles found in soil range in size from microscopic clay particles to large boulders. The most abundant particlesand, silt, and clay are the focus of examination in studies of soil texture. Texture is the term used to describe the composite sizes of particles in a soil sample, typically several representative handrails. To measure soil texture, the sand, silt, and clay particles are sorted out by size and weight. The weights of each size are then expressed as a percentage of the sample weight. In the field, soil texture can be estimated by extracting a handful of sod and squeezing the damp soil into three basic shapes; (1) cast, a lump formed by squeezing a sample in a clenched fi st; (2) thread, a pencil shape formed by rolling soil between the palms; and(3) ribbon, a flattish shape formed by squeezing a small sample between the thumb and index finger.The behavioral characteristics of the soil when molded into each of these shapes, if they can be formed at all, provides the basis for a general textural classification.The behavior of the soil in the hand test is determined by the amount of clay in the sample.Clay particles are highly cohesive, and when dampened, behave as a plastic.Therefore the higher the clay content in a sample, the more refined and durable the shapes into which it can be molded. Another method of determining soil texture involves the use of devices called sediment sieves, screens built with a specified mesh size.When the soil is filtered through a group of sieves, each with a different mesh size, the particles become grouped in corresponding size categories.Each category can be weighed to make a textural determination.Although sieves work well for silt, sand, and larger particles, they are not appropriate for clay particles.Clay is far too small to sieve accurately; therefore, in soils with a high proportion of clay, the fi ne particles are measured on the basis of their settling velocity when suspended in water.Since clays settle so slowly, they are easily segregated from sand and silt.The water can be drawn off and evaporated, leaving a residue of clay, which can be weighed. ",
        text: "What does the passage mainly discuss?",
        options: [
          "Characteristics of high quality soil .",
          "Particles typically found in most soils .",
          "How a high clay content affects the texture of soil.",
          "Ways to determine the texture of soil ."
        ]
      },
      {
        text: "The author mentions “several representative handrails” in line 4 in order to show",
        options: [
          "the range of soil samples .",
          "the process by which soil is weighed .",
          "the requirements for an adequate soil sample.",
          "how small soil particles are."
        ]
      },
      {
        text: "The phrase “sorted out” in line 5 is closest in meaning to",
        options: [
          "mixed.",
          "replaced.",
          "carried.",
          "separated."
        ]
      },
      {
        text: "It can be inferred that the names of the three basic shapes mentioned in paragraph 2 reflect",
        options: [
          "the way the soil is extracted.",
          "the results of squeezing the soil.",
          " the need to check more than one handful.",
          "the difficulty of forming different shapes."
        ]
      },
      {
        text: "The word “dampened” in line 15 is closest in meaning to",
        options: [
          "damaged.",
          "stretched.",
          "moistened.",
          "examined."
        ]
      },
      {
        passage: "As the twentieth century began, the importance of formal education in the United States increased. The frontier had mostly disappeared and by 1910 most Americans lived in towns and cities. Industrialization and the bureaucratization of economic life combined with a new emphasis upon credentials and expertise to make schooling increasingly important for economic and social mobility. Increasingly, too, schools were viewed as the most important means of integrating immigrants into American society.  The arrival of a great wave of southern and eastern European immigrants at the turn of the century coincided with and contributed to an enormous expansion of formal schooling. By 1920 schooling to age fourteen or beyond was compulsory in most states, and the school year was greatly lengthened. Kindergartens, vacation schools, extracurricular activities, and vocational education and counseling extended the influence of public schools over the lives of students, many of whom in the larger industrial cities were the children of immigrants. Classes for adult immigrants were sponsored by public schools, corporations, unions, churches, settlement houses, and other agencies.  Reformers early in the twentieth century suggested that education programs should suit the needs of specific populations. Immigrant women were one such population. Schools tried to educate young women so they could occupy productive places in the urban industrial economy, and one place many educators considered appropriate for women was the home. Although looking after the house and family was familiar to immigrant women, American education gave homemaking a new definition. In pre industrial economies, homemaking had meant the production as well as the consumption of goods, and it commonly included income-producing activities both inside and outside the home, in the highly industrialized early-twentieth-century United States, however, overproduction rather than scarcity was becoming a problem. Thus, the ideal American homemaker was viewed as a consumer rather than a producer. Schools trained women to be consumer homemakers cooking, shopping, decorating, and caring for children “efficiently” in their own homes, or if economic necessity demanded, as employees in the homes of others. Subsequent reforms have made these notions seem quite out-of-date.",
        text: " It can be inferred from paragraph 1 that one important factor in the increasing importance of education in the United States was",
        options: [
          "the growing number of schools in frontier communities.",
          "an increase in the number of trained teachers.",
          "the expanding economic problems of schools.",
          "the increased urbanization of the entire country."
        ]
      },
      {
        text: "The word “means” in line 6 is closest in meaning to",
        options: [
          "advantages.",
          "probability.",
          "method.",
          "qualifications ."
        ]
      },
      {
        text: "The phrase “coincided with” in line 9 is closest in meaning to",
        options: [
          "was influenced by.",
          "happened at the same time as.",
          "began to grow rapidly.",
          "ensured the success of."
        ]
      },
      {
        text: "According to the passage, one important change in United States education by the 1920s was that",
        options: [
          "most places required children to attend school.",
          "the amount of time spent on formal education was limited.",
          "new regulations were imposed on nontraditional education.",
          "adults and children studied in the same classes."
        ]
      },
      {
        text: " Vacation schools and extracurricular activities are mentioned in lines 11-12 to illustrate",
        options: [
          "alternatives to formal education provided by public schools.",
          "the importance of educational changes.",
          "activities that competed to attract new immigrants to their programs.",
          "the increased impact of public schools on students."
        ]
      },
      {
        passage: " Aviculturists, people who raise birds for commercial sale, have not yet learned how to simulate the natural incubation of parrot eggs in the wild. They continue to look for better ways to increase egg production and to improve chick survival rates. When parrots incubate their eggs in the wild, the temperature and humidity of the nest are controlled naturally. Heat is transferred from the birds skin to the top portion of the eggshell, leaving the sides and bottom of the egg at a cooler temperature. This temperature gradient may be vital to successful hatching. Nest construction can contribute to this temperature gradient. Nests of loosely arranged sticks, rocks, or dirt are cooler in temperature at the bottom where the egg contacts the nesting material. Such nests also act as humidity regulators by allowing rain to drain into the bottom sections of the nest so that the eggs are not in direct contact with the water. As the water that collects in the bottom of the nest evaporates, the water vapor rises and is heated by the incubating bird, which adds signifi cant humidity to the incubation environment. In artificial incubation programs, aviculturists remove eggs from the nests of parrots and incubate them under laboratory conditions.Most commercial incubators heat the eggs fairly evenly from top to bottom, thus ignoring the birds method of natural incubation, and perhaps reducing the viability and survivability of the hatching chicks.When incubators are not used, aviculturists sometimes suspend wooden boxes outdoors to use as nests in which to place eggs.In areas where weather can become cold after eggs are laid, it is very important to maintain a deep foundation of nesting material to act as insulator against the cold bottom of the box.If eggs rest against the wooden bottom in extremely cold weather conditions, they can become chilled to a point where the embryo can no longer survive.Similarly, these boxes should be protected from direct sunlight to avoid high temperatures that are also fatal to the growing embryo.Nesting material should be added in suffi cient amounts to avoid both extreme temperature situations mentioned above and assure that the eggs have a soft, secure place to rest.",
        text: " What is the main idea of the passage?",
        options: [
          " Nesting material varies according to the parrots environment.",
          " Humidity is an important factor in incubating parrots eggs.",
          " Aviculturists have constructed the ideal nest box for parrots.",
          " Wild parrots nests provide information useful for artificial incubation."
        ]
      },
      {
        text: " The word “fatal” in line 25 is closest in meaning to",
        options: [
          " close",
          " deadly.",
          " natural.",
          " hot."
        ]
      },
      {
        text: "The word “secure” in line 27 is closest in meaning to",
        options: [
          " fresh",
          " dim.",
          " safe.",
          " warm."
        ]
      },
      {
        text: "According to paragraph 2, the construction of the nest allows water to",
        options: [
          "provide a beneficial source of humidity in the nest",
          " loosen the materials at the bottom of the nest.",
          " keep the nest in a clean condition.",
          " touch the bottom of the eggs."
        ]
      },
      {
        text: "All of the following are part of a parrots incubation method EXCEPT",
        options: [
          " heating the water vapor as it rises from the bottom of the nest",
          " arranging nesting material at the bottom of the nest.",
          " transferring heat from the parent to the top of the eggshell.",
          " maintaining a constant temperature on the eggshell."
        ]
      },
      {
        passage: "A number of factors related to the voice reveal the personality of the speaker. The first is the broad area of communication, which includes imparting information by use of language, communicating with a group or an individual, and specialized communication through performance. A person conveys thoughts and ideas through choice of words, by a tone of voice that is pleasant or unpleasant, gentle or harsh, by the rhythm that is inherent within the language itself, and by speech rhythms that are flowing and regular or uneven and hesitant, and finally, by the pitch and melody of the utterance. When speaking before a group, a persons tone may indicate unsureness or fright, confidence or calm. At interpersonal levels, the tone may reflect ideas and feelings over and above the words chosen, or may belie them. Here the conversants tone can consciously or unconsciously refl ect intuitive sympathy or antipathy, lack of concern or interest, fatigue, anxiety, enthusiasm or excitement, all of which are .usually discernible by the acute listener. Public performance is a manner of communication that is highly specialized with its own techniques for obtaining effects by voice and / or gesture. The motivation derived from the text, and in the case of singing, the music, in combination with the performers skills, personality, and ability to create empathy will determine the success of artistic, political, or pedagogic communication. Second, the voice gives psychological clues to a persons self-image, perception of others, and emotional health. Self-image can be indicated by a tone of voice that is confi dent, pretentious, shy, aggressive, outgoing, or exuberant, to name only a few personality traits. Also the sound may give a clue to the facade or mask of that person, for example, a shy person hiding behind an overconfi dent front. How a speaker perceives the listeners receptiveness, interest, or sympathy in any given conversation can drastically alter the tone of presentation, by encouraging or discouraging the speaker. Emotional health is evidenced in the voice by free and melodic sounds of the happy, by constricted and harsh sound of the angry, and by dull and lethargic qualities of the depressed.",
        text: "The word “Here” in line 10 refers to?",
        options: [
          "interpersonal interactions.",
          "the tone.",
          "ideas and feelings.",
          "words chosen."
        ]
      },
      {
        text: "The word “drastically” in line 24 is closest in meaning to?",
        options: [
          "frequently.",
          "exactly.",
          "severely.",
          "easily."
        ]
      },
      {
        text: "According to the passage, what does a constricted and harsh voice indicate?",
        options: [
          "Lethargy.",
          "Depression.",
          "Boredom.",
          "Anger."
        ]
      },
      {
        text: "According to the passage, an exuberant tone of voice, may be an indication of a persons",
        options: [
          "general physical health.",
          "personality.",
          "ability to communicate.",
          "vocal quality."
        ]
      },
      {
        text: "What does the passage mainly discuss?",
        options: [
          "The function of the voice in performance.",
          "The connection between voice and personality.",
          "Communication styles.",
          "The production of speech."
        ]
      }

    ]
  }
];


let sectionIndex = 0;
let questionIndex = 0;
let userAnswers = {};
let timer;

function startSection(index) {
  clearInterval(timer);
  sectionIndex = index;
  questionIndex = 0;
  renderQuestion();
  startTimer(questions[sectionIndex].time);
  document.getElementById("section-title").textContent = "Section: " + questions[sectionIndex].section;
}

function renderQuestion() {
  const currentQ = questions[sectionIndex].questions[questionIndex];

  let passageHtml = "";
  if (currentQ.passage) {
    passageHtml = `
      <div id="passage" style="background-color: #f0f8ff; padding: 10px; margin-bottom: 15px; border-radius: 5px;">
        <strong>Reading Passage:</strong><br>${currentQ.passage}
      </div>
    `;
  }
}
function renderQuestion() {
  const currentQ = questions[sectionIndex].questions[questionIndex];

  const audioContainer = document.getElementById("audio-container");
  if (questions[sectionIndex].section === "Listening") {
    audioContainer.innerHTML = `
      <audio id="audio-question" controls>
        <source src="audio test 1.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    `;
  } else {
    audioContainer.innerHTML = "";
  }

  const passageContainer = document.getElementById("passage-container");
  if (currentQ.passage) {
    passageContainer.innerHTML = `
      <div style="background-color: #f0f8ff; padding: 10px; margin-bottom: 15px; border-radius: 5px;">
        <strong>Reading Passage:</strong><br>${currentQ.passage}
      </div>
    `;
  } else {
    passageContainer.innerHTML = "";
  }

  document.getElementById("question-text").textContent = currentQ.text;

  const name = `q-${sectionIndex}-${questionIndex}`;
  const optionsHtml = currentQ.options.map((opt) => {
    return `<label><input type="radio" name="${name}" value="${opt}" 
      ${userAnswers[name] === opt ? 'checked' : ''}> ${opt}</label><br>`;
  }).join("");

  document.getElementById("options-container").innerHTML = optionsHtml;
}


function saveAnswer() {
  const name = `q-${sectionIndex}-${questionIndex}`;
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  if (selected) {
    userAnswers[name] = selected.value;
  }
}

function nextQuestion() {
  saveAnswer();
  if (questionIndex < questions[sectionIndex].questions.length - 1) {
    questionIndex++;
    renderQuestion();
  } else if (sectionIndex < questions.length - 1) {
    alert("Next Exercises: " + questions[sectionIndex + 1].section);
    startSection(sectionIndex + 1);
  } else {
    saveAnswer();
    alert("Test completed!");
    calculateScore();
  }
}

function prevQuestion() {
  if (questionIndex > 0) {
    questionIndex--;
    renderQuestion();
  }
}

function startTimer(seconds) {
  const display = document.getElementById("time");
  let timeLeft = seconds;

  timer = setInterval(() => {
    let min = Math.floor(timeLeft / 60);
    let sec = timeLeft % 60;
    display.textContent = `${min}:${sec.toString().padStart(2, '0')}`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      alert("Waktu habis untuk section ini.");
      nextQuestion();
    }
  }, 1000);
}

document.getElementById("next-btn").addEventListener("click", nextQuestion);
document.getElementById("prev-btn").addEventListener("click", prevQuestion);

startSection(0);

const answerKey = {
  Listening: [
    "He didn't know that cherries were pricier than grapes.",
    "She wasn't furious.",
    "He is unhappy at the thought of retiring.",
    "Tom gave her money for the rent.",
    "She's probably in the apartment.",
    "He didn’t prepare due to working late hours.",
    "Linda has a good appetite.",
    "He hasn't submitted the paper because of an extension.",
    "She forgot her phone at home.",
    "He’s visiting his sister who now lives there.",
    "She can’t go because of her schedule.",
    "Mark has been busy with academic work.",
    "She enjoyed the book very much.",
    "His roommate is quiet and tidy.",
    "The professor is strict about rescheduling.",
    "Plants that produce a usable substance.",
    "It is good for the environment.",
    "It biodegrades slowly.",
    "Botany.",
    "Because they can be used to make plastic.",
    "It decomposes naturally.",
    "It breaks down faster than traditional plastic.",
    "It accumulates in the oceans.",
    "They require industrial composting facilities.",
    "Food packaging and utensils.",
    "They are not fully biodegradable yet.",
    "They degrade faster and more completely.",
    "Consumers are hesitant due to cost.",
    "It is a cheap and renewable source.",
    "Bioplastics will be used for car parts."
  ],
  Structure: [
    "was",
    "are",
    "has",
    "has",
    "had",
    "by",
    "is",
    "come",
    "since",
    "up to 18 feet high",
    "farther from the Sun than",
    "that express",
    "all living things",
    "to add",
    "has",
    "can hardly be exaggerated",
    "Calcium",
    "has",
    "is",
    "was writing",
    "rains",
    "were watching",
    "tiredness",
    "As much as she tried",
    "which",
    "that",
    "who",
    "is",
    "are",
    "submits",
    "was",
    "had left",
    "be completed",
    "is",
    "which",
    "had begun",
    "had studied",
    "review",
    "the more skillful",
    "that",
    "is"
  ],
  Reading: [
    "Kindness leads to good things in return.",
    "The book responded to her emotions.",
    "Being honest can lead to understanding.",
    "She worked hard to achieve her dream.",
    "Staying calm helps in difficult situations.",
    "Philadelphias development as a marketing center",
    "the High Street Market.",
    "were not available in the stores in Philadelphia.",
    "eliminate.",
    "Economic forces allowed merchants to prosper.",
    "Ways to determine the texture of soil.",
    "the range of soil samples.",
    "separated.",
    "the results of squeezing the soil",
    "examined.",
    "the increased urbanization of the entire country.",
    "method.",
    "happened at the same time as.",
    "most places required children to attend school.",
    "the increased impact of public schools on students.",
    "Wild parrotsnests provide information useful for artificial incubation.",
    "deadly.",
    "safe.",
    "provide a beneficial source of humidity in the nest",
    "maintaining a constant temperature on the eggshell.",
    "interpersonal interactions.",
    "severely.",
    "Anger.",
    "personality.",
    "The connection between voice and personality."
  ]
};

function calculateScore() {
  let sectionScores = {};
  let totalQuestions = 0;

  questions.forEach((section, sIndex) => {
    let correct = 0;
    section.questions.forEach((question, qIndex) => {
      const key = `q-${sIndex}-${qIndex}`;
      const userAnswer = userAnswers[key];
      const correctAnswer = answerKey[section.section][qIndex];

      if (userAnswer === correctAnswer) {
        correct++;
      }
    });

    sectionScores[section.section] = {
      correct,
      total: section.questions.length,
    };

    totalQuestions += section.questions.length;
  });

  // Gunakan penyesuaian jumlah soal
  const listeningRaw = sectionScores.Listening.correct;
  const structureRaw = sectionScores.Structure.correct;
  const readingRaw = sectionScores.Reading.correct;

  const listeningScore = Math.round((listeningRaw / 40) * 37 + 31);
  const structureScore = Math.round((structureRaw / 30) * 37 + 31);
  const readingScore = Math.round((readingRaw / 30) * 37 + 31);

  const totalScore = Math.round(((listeningScore + structureScore + readingScore) / 3) * 10);

  const today = new Date();
  const formattedDate = today.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
document.getElementById("download-certificate").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Ambil dari localStorage
  const nama = localStorage.getItem("userName");
  const idPeserta = localStorage.getItem("userId");
  const tanggalTes = localStorage.getItem("userDate");

  if (!nama || !idPeserta || !tanggalTes) {
    alert("Data belum lengkap. Pastikan Anda sudah login & isi profil.");
    return;
}

  const skorText = document.getElementById("score-display").textContent;

  doc.setFontSize(18);
  doc.text("SERTIFIKAT TOEFL ONLINE", 60, 25);

  doc.setFontSize(12);
  doc.text(`Nama: ${nama}`, 20, 50);
  doc.text(`ID Peserta: ${idPeserta}`, 20, 60);
  doc.text(`Tanggal Tes: ${tanggalTes}`, 20, 70);

  doc.text("Hasil Tes:", 20, 85);
  doc.text(skorText, 20, 95);

  doc.text("Platform: TOEFL Online Test", 20, 120);
  doc.text("TTD Pengawas:", 20, 135);
  doc.line(20, 137, 80, 137);

  doc.save(`Sertifikat_TOEFL_${nama}.pdf`);
});




  const testResult = {
    date: formattedDate,
    listening: listeningScore,
    structure: structureScore,
    reading: readingScore,
    total: totalScore
  };

  saveTestResult(testResult);

  document.querySelector("#main-test-content").style.display = "none";
  document.querySelector("#result-page").style.display = "block";

  document.getElementById("score-display").textContent =
    `Skor TOEFL Anda: ${totalScore}`;
}

function saveTestResult(result) {
  let history = JSON.parse(localStorage.getItem("testHistory")) || [];
  history.push(result);
  localStorage.setItem("testHistory", JSON.stringify(history));
}