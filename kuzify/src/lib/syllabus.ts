import { additionalSyllabus } from './additional-syllabus';
import { waecCourseExpansion } from './waec-course-expansion';

export type LessonSpec = [title: string, explanation: string, example: string, questions: string[]];

// Each item records a prompt, the correct choice, and three distractors.
export const syllabus: Record<string, LessonSpec[]> = {

  mathematics: [
    ['Number, fractions and percentages', 'Use a common denominator to add fractions. A percentage is a fraction of 100. For successive percentage changes, multiply the corresponding factors.', 'A ₦5,000 item discounted by 20% costs 5,000 × 0.8 = ₦4,000.', [
      'What is 3/4 + 1/6?|11/12|4/10|5/12|7/12',
      'Increase 240 by 15%.|276|255|204|360',
      'Reduce 18:24 to its simplest form.|3:4|4:3|9:8|2:3',
    ]],
    ['Number bases, indices and logarithms', 'In a positional number system, each digit is multiplied by a power of the base. An index tells how many times to multiply by the base, and a logarithm reverses exponentiation.', '1011 in base two is 8 + 0 + 2 + 1 = 11 in base ten.', [
      'Convert 101 in base two to base ten.|5|6|9|11',
      'Simplify 2³ × 2⁴.|2⁷|2¹²|4⁷|2¹',
      'Find log₁₀(1000).|3|10|100|1000',
    ]],
    ['Sets and sequences', 'A union contains elements in either set, and an intersection contains those in both. An arithmetic sequence adds a constant difference. A geometric sequence multiplies by a constant ratio.', 'In 5, 8, 11, …, the nth term is 5 + 3(n − 1). The 10th term is 32.', [
      'Find the intersection of {1, 2, 4} and {2, 3, 4}.|{2, 4}|{1, 3}|{1, 2, 3, 4}|{4}',
      'Find the next term in 3, 9, 27, …|81|36|54|72',
      'Find the sixth term in 7, 11, 15, …|27|23|31|35',
    ]],
    ['Equations, inequalities and variation', 'Isolate the unknown by applying the same operation to both sides. Reverse an inequality when multiplying or dividing by a negative number. In direct variation y = kx, while in inverse variation y = k/x.', 'For −2x > 8, dividing by −2 gives x < −4.', [
      'Solve 3x − 7 = 14.|7|3|5|9',
      'Solve −3x ≤ 12.|x ≥ −4|x ≤ −4|x ≥ 4|x ≤ 4',
      'If y varies inversely as x and y = 6 when x = 2, find y when x = 4.|3|6|12|24',
    ]],
    ['Simultaneous equations', 'Substitute when one variable is easy to isolate. For elimination, multiply one or both equations so that adding or subtracting cancels one variable. Check the pair in both originals.', 'For x + y = 9 and x − y = 3, add to get 2x = 12. Then x = 6 and y = 3.', [
      'If x + y = 12 and x − y = 2, find x.|7|5|6|10',
      'If y = x + 3 and 2x + y = 15, find y.|7|4|6|8',
      'Which pair solves x + y = 8 and x − y = 4?|x = 6, y = 2|x = 4, y = 4|x = 2, y = 6|x = 8, y = 4',
    ]],
    ['Quadratics, functions and graphs', 'Factor a quadratic if you can. Set each factor to zero to find the roots. On the graph, the real roots are where the curve crosses or touches the x-axis.', 'x² − 7x + 12 = (x − 3)(x − 4), so the roots are 3 and 4.', [
      'What are the roots of x² − 5x + 6 = 0?|2 and 3|1 and 6|−2 and −3|−1 and 6',
      'If f(x) = 2x² − 1, find f(3).|17|11|5|35',
      'What is the y-intercept of y = x² − 3x + 4?|4|−3|1|0',
    ]],
    ['Plane geometry and constructions', 'Angles in a triangle sum to 180°. Similar shapes have equal corresponding angles and proportional sides. A perpendicular bisector can be constructed using equal-radius arcs from both endpoints.', 'A right triangle with legs of 6 cm and 8 cm has hypotenuse √(36 + 64) = 10 cm.', [
      'Two angles of a triangle are 48° and 67°. Find the third.|65°|55°|75°|115°',
      'What is the hypotenuse when the legs are 5 cm and 12 cm?|13 cm|17 cm|7 cm|14 cm',
      'A length of 4 cm corresponds to 10 cm in a similar shape. What corresponds to 6 cm?|15 cm|12 cm|16 cm|24 cm',
    ]],
    ['Mensuration', 'Separate perimeter, area and volume. Use consistent units. A cylinder has circular base area πr², so its volume is πr²h.', 'A cylinder of radius 3 cm and height 5 cm holds 45π cm³.', [
      'Find the area of a circle of radius 7 cm using π = 22/7.|154 cm²|44 cm²|49 cm²|308 cm²',
      'Find the volume of a cuboid measuring 2 cm by 3 cm by 5 cm.|30 cm³|10 cm³|25 cm³|62 cm³',
      'Find the total surface area of a cube of side 4 cm.|96 cm²|64 cm²|16 cm²|24 cm²',
    ]],
    ['Coordinate geometry, trigonometry and bearings', 'Gradient is change in y divided by change in x. In a right triangle, sine is opposite over hypotenuse, cosine is adjacent over hypotenuse, and tangent is opposite over adjacent. Measure bearings clockwise from north.', 'A point due west has bearing 270°. A line from (1, 2) to (4, 8) has gradient 2.', [
      'Find the gradient from (2, 1) to (6, 9).|2|1/2|4|8',
      'What is the three-digit bearing for due south?|180°|090°|270°|000°',
      'The opposite side is 3 and the adjacent side is 4. Find tan θ.|3/4|4/3|3/5|4/5',
    ]],
    ['Statistics and probability', 'For the mean, divide the sum by the count. Sort values before finding the median. For equally likely outcomes, probability is favourable outcomes divided by the total.', 'The median of 9, 2, 8, 4, 3 is 4, the middle value after sorting.', [
      'Find the mean of 2, 5, 7 and 10.|6|5|7|8',
      'Find the median of 2, 3, 8 and 9.|5.5|3|8|6',
      'A fair die is rolled once. What is the probability of a multiple of 3?|1/3|1/6|1/2|2/3',
    ]],
  ],
  english: [
    ['Vocabulary in context and register', 'Use the surrounding sentence to infer the meaning of an unfamiliar word. A register is vocabulary associated with an activity or setting. In formal writing, choose language appropriate to the reader.', '“The nurse checked the patient’s pulse” uses a medical register. Here, pulse means the beat felt in an artery.', [
      'In “The school purchased stationery”, what did it buy?|Writing materials|Sports equipment|Food supplies|Furniture only',
      'Which word belongs most clearly to a courtroom register?|Verdict|Offside|Harvest|Voltage',
      'Which phrase best suits a formal request?|I would appreciate your assistance.|Do me a solid.|You gotta help.|Sort me out, please.',
    ]],
    ['Synonyms, antonyms and idioms', 'Substitute the option into the sentence and check that the meaning and tone still fit. An idiom has a conventional meaning that can differ from the literal meaning of its words.', '“She broke the ice with a joke” means that she eased the tension and helped people begin talking.', [
      'Choose the closest meaning of “reluctant” in “He was reluctant to speak”.|Unwilling|Excited|Prepared|Unable',
      'Which word is the opposite of “scarce”?|Abundant|Rare|Costly|Limited',
      'What does “spill the beans” usually mean?|Reveal a secret|Prepare food|Make a profit|Miss a deadline',
    ]],
    ['Concord and sentence structure', 'Find the head of the subject. The verb agrees with that head rather than with a noun in an intervening phrase. Identify complete clauses before joining ideas.', 'In “The list of names is long”, “list” is the singular subject head.', [
      'Choose the standard present-tense form: “The box of pencils ___ on the desk.”|is|are|have|be',
      'Choose the standard present-tense form: “Each candidate ___ a number.”|has|have|having|are',
      'Which is a complete sentence?|The debate ended at noon.|Because the bell rang.|After the final lesson.|The pupils in the library.',
    ]],
    ['Tenses, voice and reported speech', 'Use time cues to choose tense. In the passive voice, the receiver of the action becomes the subject. For reported speech, adjust pronouns and time references to the reporting situation.', '“The prefect closed the gate” becomes “The gate was closed by the prefect.”', [
      'Which sentence is in the passive voice?|The script was marked by Ada.|Ada marked the script.|Ada will mark the script.|Ada is marking the script.',
      'Complete: “By the time we arrived, the match ___.”|had ended|ends|will end|has end',
      'Bola said, “I am tired.” Which is conventional past-tense reported speech?|Bola said that she was tired.|Bola said that I am tired.|Bola said she is tiring.|Bola says I was tired.',
    ]],
    ['Comprehension and inference', 'Read once for the gist and again for evidence. A literal question asks for what is stated. An inference asks for a conclusion supported by a detail. Answer in your own words when instructed.', '“The sky darkened, and Tunde took an umbrella.” A reasonable inference is that Tunde expected rain.', [
      '“Amaka packed a torch because the path had no lights.” Why did she pack it?|To see along the dark path|To signal a driver|To read in class|To repair a lamp',
      '“The classroom fell silent when the principal entered.” What changed?|The pupils stopped making noise.|The room became darker.|The principal left.|The pupils moved outside.',
      'What should support an inference?|A detail from the passage|An unrelated personal opinion|The length of the passage|The spelling of the title',
    ]],
    ['Summary writing', 'Underline the points that answer the question. Remove repetition, illustrations and commentary, and keep to the requested number of sentences.', 'A passage gives three examples of a crowded bus. If asked for the travel problem, “The buses were overcrowded” captures the point.', [
      'Which detail usually belongs in a summary?|A main point asked for|Every illustration|A new opinion|All dialogue',
      'The text says water shortages delayed lessons and closed toilets. Which summary keeps both points?|The shortage disrupted lessons and sanitation.|The toilets were old.|The school had lessons.|The shortage improved sanitation.',
      'The instruction asks for two sentences. What should you submit?|Two complete sentences|One paragraph of any length|Three phrases|A copied passage',
    ]],
    ['Composition: letters, articles and speeches', 'Identify the audience, purpose and required format. Plan one main idea per paragraph. Use formal language for official letters and address the audience in a speech.', 'In a letter to a school principal, state the reason for writing early and close with a specific request.', [
      'Which opening suits a speech to pupils?|Good morning, fellow students.|Dear Sir or Madam,|Yours faithfully,|To whom it may concern,',
      'Where should the purpose of a formal request normally appear?|Near the opening|Only in the address|In a postscript|Nowhere in the letter',
      'What helps organise an article?|A clear title and focused paragraphs|A list of unrelated jokes|A signature instead of a body|Repeating the title every line',
    ]],
    ['Composition: narrative and report', 'A narrative develops a sequence of events toward a resolution. A report presents relevant facts in a clear order and may recommend action. Keep tense and point of view consistent.', 'A report can open with the event, date and venue before describing what happened and giving recommendations.', [
      'Which element is especially important in a narrative?|A sequence of events leading to a resolution|A postal address on every page|Only figures and tables|An opening salutation to a chairperson',
      'What best fits the opening of an event report?|The event, date and venue|An imaginary conversation|An unrelated proverb|A greeting to a close friend',
      'Which sentence is factual rather than a recommendation?|The meeting began at 10 a.m.|The club should meet weekly.|We ought to invite a speaker.|The hall should be repaired.',
    ]],
    ['Oral English: vowels and consonants', 'Listen for the sound rather than looking only at the spelling. A minimal pair differs by one sound. In standard British pronunciation, the vowel in ship differs from the longer vowel in sheep.', 'The initial consonant in “thin” is /θ/. It differs from the /t/ at the start of “tin”.', [
      'Which word has the same vowel sound as “ship”?|Sit|Sheep|Shape|Shop',
      'Which word begins with the same consonant sound as “thin”?|Think|Tin|This|Sin',
      'Which pair rhymes?|Light and night|Cough and though|Food and good|Move and love',
    ]],
    ['Oral English: stress and intonation', 'Word stress makes one syllable more prominent. Emphatic stress highlights the part of a sentence being corrected or contrasted. Intonation is the pattern of pitch across an utterance.', 'In “SHE bought the book”, the emphasis corrects who bought it. In “She bought the BOOK”, it corrects what she bought.', [
      'In “MUSA took the bag”, what is being contrasted?|Who took it|When it was taken|What was taken|Where it was taken',
      'Which syllable is stressed in the noun “record”?|The first|The second|Both equally|Neither',
      'What term describes pitch movement across a sentence?|Intonation|Concord|Register|Pluralisation',
    ]],
  ],
  chemistry: [
    ['Matter and separation', 'Choose a separation method based on a physical property. Filtration separates an insoluble solid from a liquid. Distillation separates by boiling point. Chromatography separates substances by their different movement through a medium.', 'Filter sand from salt water, then evaporate the filtrate to recover salt.', [
      'What separates sand from water?|Filtration|Sublimation|Crystallisation|Electrolysis',
      'What property is used in distillation?|Boiling point|Colour|Magnetism|Hardness',
      'Which method can separate the dyes in ink?|Chromatography|Decantation|Sieving|Magnetic separation',
    ]],
    ['Atomic structure and periodicity', 'Atomic number counts protons and mass number counts protons plus neutrons. Isotopes differ in neutron number. For main-group elements, outer electrons help explain trends in chemical behaviour.', 'Sodium-23 has 11 protons and 12 neutrons. A neutral sodium atom has 11 electrons.', [
      'How many neutrons are in chlorine-35 if its atomic number is 17?|18|17|35|52',
      'Isotopes of an element differ in their number of what?|Neutrons|Protons|Nuclei per atom|Atomic numbers',
      'What is the electron arrangement of neutral sodium (atomic number 11)?|2, 8, 1|2, 7, 2|2, 8, 2|2, 6, 3',
    ]],
    ['Bonding and structure', 'Ionic bonding is attraction between oppositely charged ions. Covalent bonds share electrons. In metals, delocalised electrons allow charge to move through the solid.', 'Sodium loses an electron and chlorine gains one, forming Na⁺ and Cl⁻.', [
      'Which bond involves a shared electron pair?|Covalent|Ionic|Metallic|Hydrogen bonding',
      'Why does molten sodium chloride conduct?|Its ions are mobile.|Its atoms become neutral.|Its protons leave the nuclei.|Its bonds become metallic.',
      'What carries charge through a solid metal?|Delocalised electrons|Free neutrons|Mobile metal nuclei|Water molecules',
    ]],
    ['Equations, moles and stoichiometry', 'Balance atoms using coefficients. Divide mass by molar mass to get moles. Use the coefficients in a balanced equation as the ratio of reacting amounts in moles.', '2H₂ + O₂ → 2H₂O means two moles of hydrogen react with one mole of oxygen.', [
      'How many moles are in 36 g of water (18 g/mol)?|2|0.5|18|648',
      'What coefficient balances oxygen in 2Mg + __ O₂ → 2MgO?|1|2|3|4',
      'In N₂ + 3H₂ → 2NH₃, how many moles of H₂ react with 2 mol of N₂?|6|2|3|4',
    ]],
    ['States of matter, gases and solutions', 'Particles move more freely in gases than in liquids or solids. At constant temperature, the pressure of a fixed amount of gas is inversely proportional to its volume. Concentration in mol/dm³ is amount divided by volume in dm³.', 'Dissolving 0.2 mol in 0.5 dm³ of solution gives 0.4 mol/dm³.', [
      'At constant temperature, what happens to gas volume if pressure doubles?|It halves.|It doubles.|It stays fixed.|It quadruples.',
      'What is 250 cm³ in dm³?|0.25|2.5|25|250',
      'What is the concentration of 0.3 mol in 0.6 dm³?|0.5 mol/dm³|0.18 mol/dm³|2 mol/dm³|0.9 mol/dm³',
    ]],
    ['Acids, bases, salts and titration', 'Acids donate protons and bases accept them. Neutralisation can produce salt and water. In a titration, use the measured volume and known concentration of one solution to find the unknown amount using the reaction ratio.', 'HCl + NaOH → NaCl + H₂O is a one-to-one reaction.', [
      'What are the products of HCl reacting with NaOH?|NaCl and water|NaCl and hydrogen|Sodium and water|Chlorine and hydrogen',
      'Which apparatus delivers a measured variable volume during titration?|Burette|Evaporating basin|Test tube|Filter funnel',
      'Which pH is acidic at room temperature?|3|7|9|12',
    ]],
    ['Redox, electrolysis and metals', 'Oxidation is loss of electrons and reduction is gain. During electrolysis, reduction occurs at the cathode. Extraction methods depend partly on how reactive the metal is.', 'Cu²⁺ + 2e⁻ → Cu is reduction at the cathode.', [
      'What occurs at the cathode during electrolysis?|Reduction|Oxidation|Evaporation|Neutralisation',
      'When Fe²⁺ becomes Fe³⁺, what happens?|It loses an electron.|It gains an electron.|It loses a proton.|It gains a neutron.',
      'What is the usual industrial method for extracting aluminium from alumina?|Electrolysis|Filtration|Distillation|Heating with water',
    ]],
    ['Energy, rates and equilibrium', 'An exothermic reaction transfers energy to the surroundings. A catalyst lowers the activation energy and speeds both directions of a reversible reaction. At dynamic equilibrium the forward and reverse rates are equal.', 'Grinding a solid exposes more surface, increasing the rate of a reaction that occurs at its surface.', [
      'What does a catalyst lower?|Activation energy|Mass of products|Equilibrium constant|Concentration of all species',
      'At dynamic equilibrium, what is equal?|Forward and reverse rates|All concentrations|Masses of individual species|Activation energies',
      'What does an exothermic reaction transfer to the surroundings?|Energy|Only electrons|Only protons|No energy',
    ]],
    ['Organic chemistry and polymers', 'A functional group helps predict how an organic compound reacts. Alkenes contain a carbon–carbon double bond, alcohols contain a hydroxyl group, and carboxylic acids contain a carboxyl group.', 'Ethene can join with many other ethene molecules to form polyethene.', [
      'Which functional group is found in ethanol?|Hydroxyl|Carboxyl|Ester|Amide',
      'Which compound decolourises bromine water in the usual test for unsaturation?|Ethene|Ethane|Methane|Propane',
      'Which monomer forms polyethene?|Ethene|Ethanol|Ethanoic acid|Ethane',
    ]],
    ['Practical chemistry and qualitative analysis', 'Keep observations separate from conclusions. Record colours, precipitates and gas-test results. In calculations, write units and use concordant titration readings according to the instructions.', 'Carbon dioxide turns limewater milky. State the observation before naming the gas.', [
      'Which gas turns limewater milky?|Carbon dioxide|Oxygen|Hydrogen|Nitrogen',
      'What relights a glowing splint?|Oxygen|Hydrogen|Carbon dioxide|Ammonia',
      'Which statement is an observation?|A white precipitate formed.|The salt is a chloride.|The solution contains calcium.|The reaction is a neutralisation.',
    ]],
  ],
  government: [
    ['Power, authority and legitimacy', 'Power is the ability to influence decisions. Authority is the recognised right to exercise power. Legitimacy describes acceptance of a government’s claim to rule.', 'A court order derives its authority from the legal powers of the court.', [
      'What is the recognised right to command called?|Authority|Influence|Opposition|Public opinion',
      'What does legitimacy concern?|Acceptance of the right to govern|Size of the armed forces|Number of courts|Length of a speech',
      'What is political power?|Ability to influence public decisions|Only legal ownership of property|Absence of rules|A method of counting votes',
    ]],
    ['Constitution, rule of law and rights', 'A constitution establishes institutions and limits their powers. Under the rule of law, officials exercise power through law and can be held accountable. Rights protect individuals and may have lawful limits.', 'An independent court can examine whether a government agency acted within its legal powers.', [
      'What does constitutionalism require?|Limits on government power|Unlimited executive authority|Suspension of all elections|Rule by decree alone',
      'Which principle requires officials to act under the law?|Rule of law|Hereditary succession|One-party rule|Political patronage',
      'Which right protects lawful public criticism?|Freedom of expression|Diplomatic immunity|Executive privilege|Legislative veto',
    ]],
    ['Arms of government and checks', 'The legislature makes laws, the executive implements them, and the judiciary resolves disputes and interprets law. Checks and balances help prevent abuse by any one arm.', 'A legislative committee can ask a ministry to explain how it spent public funds.', [
      'Which arm resolves legal disputes?|Judiciary|Legislature|Executive|Electoral commission',
      'What is an example of legislative oversight?|A committee questioning a ministry’s spending|A court issuing a judgment|A ministry implementing a policy|A citizen casting a ballot',
      'What is the purpose of checks and balances?|To limit abuses of power|To abolish the courts|To prevent public budgets|To give one arm all power',
    ]],
    ['Systems of government and Nigerian federalism', 'A federation distributes powers between a central government and constituent units. In a parliamentary system the executive is ordinarily drawn from and accountable to the legislature. Presidential systems generally separate their mandates.', 'In Nigeria, defence is a federal responsibility. States have their own governments and constitutionally assigned powers.', [
      'What distinguishes a federation?|A constitutional division of powers|Only one institution makes every decision|All laws are made by village assemblies|All states are independent countries',
      'In which system is a government commonly formed from the legislative majority?|Parliamentary|Absolute monarchy|Military|Confederal by definition',
      'Which responsibility is federal in Nigeria?|National defence|Choosing a school club leader|Managing a family budget|Selecting a village meeting time',
    ]],
    ['Elections, parties and public opinion', 'Elections select representatives or officeholders. Political parties seek to win office and implement policies. Pressure groups seek to influence policy. Public opinion can be expressed through media, petitions and elections.', 'A trade union lobbying for workplace legislation acts as a pressure group in that activity.', [
      'What distinguishes a political party from a pressure group?|A party typically seeks public office.|A party never proposes policy.|A pressure group must govern.|A pressure group cannot lobby.',
      'What does the secret ballot protect?|Privacy of each voter’s choice|Government secrecy about results|The identity of every candidate|The length of the campaign',
      'What is a constituency?|An area or electorate represented by an officeholder|A cabinet committee|A judicial sentence|A party manifesto',
    ]],
    ['Public administration and local government', 'Civil servants help implement policies and provide continuity. Local government deals with local services. Public corporations are established by the state to carry out specified public functions.', 'A change of minister need not replace the career staff who administer a ministry’s programmes.', [
      'What is a role of the civil service?|Implementing public policy|Running as a political party|Deciding every court appeal|Electing legislators',
      'Which function is typically local in character?|Managing neighbourhood markets|Conducting foreign diplomacy|Running national defence|Issuing national currency',
      'Which principle supports career civil service neutrality?|Serving successive governments professionally|Campaigning for the ruling party at work|Ending service after each election|Ignoring legal policy directives',
    ]],
    ['Precolonial political institutions', 'Compare how authority was organised in different communities. Some systems used central rulers and councils. Others relied more on assemblies, lineage institutions and local associations. Describe a specific case before making comparisons.', 'A comparison can ask who made decisions, who enforced them, and how leaders were checked in each society.', [
      'Which question best compares political institutions?|How were leaders chosen and checked?|Which society had the shortest name?|How many letters are in each title?|Which society had the same weather?',
      'What is a decentralised arrangement?|Authority is distributed among local institutions.|One ruler holds all authority.|All decisions are made abroad.|Councils have no role anywhere.',
      'What was an emir in the Sokoto Caliphate’s emirate system?|A ruler of an emirate|A colonial governor|A British judge|A party campaign officer',
    ]],
    ['Colonial rule, nationalism and independence', 'Indirect rule used local authorities under colonial supervision. Nationalist movements pressed for political participation and self-government. In Nigeria, independence and becoming a republic were separate constitutional milestones.', 'Nigeria became independent in 1960 and a republic in 1963.', [
      'What characterised indirect rule?|Administration through local authorities under colonial supervision|Immediate independence|Replacement of every local authority with an elected parliament|Government through political parties alone',
      'In what year did Nigeria gain independence?|1960|1914|1954|1963',
      'What was a major aim of nationalist movements?|Self-government|Extension of colonial control|Ending political participation|Abolishing local representation',
    ]],
    ['Constitutional development and military rule', 'Trace how each constitution changed representation and the distribution of authority. Separate the colonial reforms from the independence and republican constitutions. Military rule often replaced elected institutions with governing councils and decrees.', 'The 1979 Constitution introduced a presidential system for the Second Republic.', [
      'Which republic began in 1979?|Second Republic|First Republic|Third Republic|Fourth Republic',
      'What system did the 1979 Constitution introduce?|Presidential|Absolute monarchy|Emirate rule|Colonial indirect rule',
      'What was a common instrument of federal military rule?|Decrees|Local club constitutions|Party manifestos|Private contracts alone',
    ]],
    ['Foreign policy and international organisations', 'Foreign policy sets objectives for relations with other states. Diplomacy, treaties and cooperation are tools for pursuing those objectives. Distinguish the regional focus of ECOWAS, continental role of the AU and global role of the UN.', 'ECOWAS brings West African states together for regional cooperation and integration.', [
      'Which body focuses on West African regional cooperation?|ECOWAS|African Union|United Nations|World Health Organization',
      'What is diplomacy?|Managing relations through negotiation and representation|Organising only local elections|Issuing court judgments|Collecting school fees',
      'Which body has a global mandate for international peace and security?|United Nations|ECOWAS|A local council|A national civil service commission',
    ]],
  ],
};

syllabus.mathematics.push(
  ['Commercial arithmetic and interest', 'Calculate simple interest with principal × annual rate × years. With compound interest, each period earns interest on the current balance.', '₦10,000 at 10% compound interest annually becomes ₦12,100 after two years.', [
    'Find simple interest on ₦8,000 at 5% per year for three years.|₦1,200|₦400|₦1,600|₦9,200',
    'An item costs ₦4,000 and sells for ₦5,000. Find the profit percentage on cost.|25%|20%|10%|40%',
    'Which expression gives the value of ₦5,000 after two years at 4% compound interest?|5000 × 1.04²|5000 × 0.04²|5000 × 1.08²|5000 ÷ 1.04²',
  ]],
  ['Circle theorems and loci', 'Angles at the circumference standing on the same arc are equal. An angle in a semicircle is a right angle. A locus is the set of points satisfying a stated condition.', 'The perpendicular bisector of AB is the locus of points equally distant from A and B.', [
    'What angle does a diameter subtend at the circumference?|90°|45°|60°|180°',
    'What is the locus of points a fixed distance from a given point in a plane?|A circle|A diameter|A ray|A perpendicular bisector',
    'A radius drawn to a point of tangency meets the tangent at what angle?|90°|30°|45°|120°',
  ]],
);

syllabus.english.push(
  ['Cloze passages and word partnerships', 'Read the whole passage before filling gaps. Check which words commonly occur together, whether the form fits the sentence, and how the gap connects to nearby ideas.', '“The committee reached a decision” uses the natural partnership reach a decision.', [
    'Complete: “The committee ___ a decision yesterday.”|reached|caught|arrived|held',
    'Choose the usual preposition: “She is responsible ___ the records.”|for|at|on|to',
    'Choose the connector: “It rained heavily. ___, the match continued.”|Nevertheless|Therefore|For example|Similarly',
  ]],
);

syllabus.chemistry.push(
  ['Water, air and environmental chemistry', 'Water hardness is associated with dissolved calcium and magnesium ions. Temporary hardness from hydrogencarbonates can be reduced by boiling. Air pollution has different sources and effects.', 'Sulfur dioxide released from some fuels can contribute to acid rain.', [
    'Which ion contributes to water hardness?|Ca²⁺|Na⁺|Cl⁻|NO₃⁻',
    'Which treatment can reduce temporary hardness?|Boiling|Sieving|Decantation alone|Magnetic separation',
    'Which gas can contribute to acid rain?|Sulfur dioxide|Oxygen|Helium|Argon',
  ]],
  ['Non-metals and industrial chemistry', 'Relate industrial conditions to yield, rate and cost. The Haber process makes ammonia from nitrogen and hydrogen. Higher pressure favours the side with fewer gas molecules in this equilibrium.', 'N₂ + 3H₂ ⇌ 2NH₃ converts four moles of gaseous reactants into two moles of gaseous product.', [
    'Which gases react in the Haber process?|Nitrogen and hydrogen|Nitrogen and oxygen|Hydrogen and chlorine|Oxygen and carbon dioxide',
    'What is a common catalyst in the Haber process?|Iron|Copper|Sodium chloride|Calcium carbonate',
    'Which product is made by the Contact process?|Sulfuric acid|Ammonia|Ethanol|Sodium hydroxide',
  ]],
);

syllabus.government.push(
  ['Citizenship, participation and civic duties', 'Citizenship concerns membership of a state and the rights and responsibilities that come with it. Political participation includes voting, contacting representatives and joining civic associations.', 'A citizen can petition a representative to raise a local concern in the legislature.', [
    'Which is a form of political participation?|Petitioning a representative|Measuring rainfall|Reading a recipe|Keeping a shopping list',
    'Which institution normally publishes rules for voter registration?|The electoral authority|A sports club|A private bank|A trade association',
    'Which is an example of a civic responsibility?|Obeying lawful rules|Ignoring court orders|Selling votes|Preventing others from voting',
  ]],
);

// Keep the original lesson positions so existing progress still points to the same lessons.
for (const subject of Object.keys(additionalSyllabus) as (keyof typeof additionalSyllabus)[]) {
  syllabus[subject] = [
    ...additionalSyllabus[subject],
    ...waecCourseExpansion[subject].map(([title, note, example, questions]): LessonSpec => (
      [title, note, example, questions]
    )),
  ];
}
