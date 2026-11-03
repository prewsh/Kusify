import type { LessonSpec } from "./syllabus";

type ExpandedLesson = [...LessonSpec, examQuestion: string];

// The last item in each lesson is reserved for the cumulative exam.
export const waecCourseExpansion = {
  "biology": [
    [
      "Classification and diversity",
      "Classify organisms using shared characteristics. A scientific name has a genus and a species name. Compare major groups by cell structure, nutrition and reproduction.",
      "A fern has vascular tissue and reproduces by spores. A flowering plant makes seeds enclosed in fruits.",
      [
        "Which rank lies immediately above species?|Genus|Family|Order|Class",
        "What distinguishes fungi from green plants in nutrition?|Fungi absorb organic nutrients.|Fungi photosynthesise.|Fungi make chlorophyll.|Fungi fix carbon using sunlight.",
      ],
      "Which feature distinguishes a flowering plant from a fern?|Seeds enclosed in fruit|Vascular tissue|Leaves|Roots",
    ],
    [
      "Cell division, diffusion and osmosis",
      "Mitosis makes daughter cells with the same chromosome number. Meiosis halves the number. Osmosis is the movement of water across a selectively permeable membrane down a water potential gradient.",
      "Potato strips gain mass in dilute water when water enters their cells by osmosis.",
      [
        "Which division produces haploid gametes in animals?|Meiosis|Mitosis|Binary fission only|Budding",
        "What substance moves in osmosis?|Water|Starch|Protein|Cellulose",
      ],
      "Why does a potato strip lose mass in concentrated salt solution?|Water moves out of its cells.|Salt destroys all its starch.|Its cells divide.|Water moves into its cells.",
    ],
    [
      "Support, movement and skeletons",
      "Skeletons provide support, protection and attachment for muscles. A joint permits movement between bones. Antagonistic muscles pull in opposite directions because muscles contract to pull.",
      "When the elbow bends, the biceps contracts and the triceps relaxes.",
      [
        "What connects muscle to bone?|Tendon|Ligament|Cartilage|Marrow",
        "Which type of joint is the elbow?|Hinge|Ball-and-socket|Fixed|Pivot",
      ],
      "What protects the spinal cord?|Vertebral column|Pelvic girdle|Sternum|Skull alone",
    ],
    [
      "Mammalian digestion and food tests",
      "Enzymes break large food molecules into absorbable products. Bile emulsifies fats. Villi increase the surface area available for absorption. Use a control when carrying out a food test.",
      "Iodine solution turns blue-black in the presence of starch.",
      [
        "Which structure increases intestinal absorption area?|Villus|Trachea|Ureter|Bronchus",
        "What is the role of bile in fat digestion?|It emulsifies fat.|It converts protein to amino acids.|It digests starch.|It absorbs glucose.",
      ],
      "Which reagent is used to test for starch?|Iodine solution|Biuret reagent|Limewater|Litmus",
    ],
    [
      "Circulation, gas exchange and plant transport",
      "Arteries carry blood away from the heart and veins return it. Gas exchange surfaces are thin and moist. Transpiration helps draw water up xylem.",
      "The pulmonary artery carries oxygen-poor blood from the heart to the lungs.",
      [
        "What helps oxygen diffuse rapidly across alveoli?|Thin walls and large area|Thick dry walls|No blood supply|Small area and large distance",
        "What carries most oxygen in human blood?|Haemoglobin|Platelets|Plasma proteins alone|Urea",
      ],
      "Which plant tissue carries dissolved mineral ions from the root?|Xylem|Phloem|Epidermis|Cambium alone",
    ],
    [
      "Homeostasis, hormones and coordination",
      "Homeostasis keeps internal conditions within limits. Nervous responses use electrical signals and chemical transmission at synapses. Hormones travel through the blood to target organs.",
      "When blood glucose rises, insulin helps lower it by promoting glucose uptake and storage.",
      [
        "Which hormone lowers blood glucose?|Insulin|Adrenaline|Glucagon|Thyroxine",
        "Which structures detect stimuli?|Receptors|Effectors only|Ligaments|Red blood cells",
      ],
      "Why does sweating cool the body?|Evaporation removes heat.|Sweat stops heat loss.|Sweat produces heat.|Sweat blocks evaporation.",
    ],
    [
      "Plant responses, flowers and germination",
      "Tropisms are directional growth responses. Pollination moves pollen to a stigma. Fertilisation follows fusion of gametes. Germination normally requires water, oxygen and suitable temperature.",
      "A shoot bending towards light shows positive phototropism.",
      [
        "Which floral part produces pollen?|Anther|Stigma|Ovary|Sepal",
        "Which gas is needed for most seeds to germinate?|Oxygen|Methane|Helium|Hydrogen",
      ],
      "What is growth of roots towards gravity called?|Positive gravitropism|Negative gravitropism|Positive phototropism|Transpiration",
    ],
    [
      "Microorganisms, disease and public health",
      "Some microorganisms are beneficial, while pathogens cause disease. Different pathogens spread by different routes. Prevention should target the route of transmission.",
      "An insecticide-treated net reduces contact with malaria-carrying mosquitoes.",
      [
        "Which organism causes malaria?|Plasmodium|A mosquito itself|A bacterium|A fungus",
        "What is the vector of malaria?|Female Anopheles mosquito|Housefly|Rat|Tick",
      ],
      "What is one way to interrupt waterborne disease transmission?|Treat drinking water.|Increase standing water.|Share contaminated utensils.|Leave wells uncovered.",
    ],
    [
      "Ecological sampling and nutrient cycles",
      "Use quadrats to estimate abundance of relatively stationary organisms and transects to examine changes across an environmental gradient. Decomposers return nutrients to ecosystems.",
      "Place quadrats at randomly selected coordinates to reduce sampling bias.",
      [
        "Which method suits counting plants across a slope?|Belt transect|Blood test|Titration|Dissection",
        "What do nitrogen-fixing bacteria convert atmospheric nitrogen into?|Compounds organisms can use|Oxygen|Glucose directly|Carbon dioxide only",
      ],
      "Why randomly place quadrats?|To reduce selection bias|To remove all variation|To increase the size of each plant|To change the habitat",
    ],
    [
      "Evolution, adaptation and conservation",
      "Natural selection acts on heritable variation. Individuals with advantageous traits may leave more offspring, making the traits more common over generations. Conservation protects habitats and biodiversity.",
      "In an insect population, a resistance allele may become more common after repeated pesticide exposure.",
      [
        "What must variation be for natural selection to affect later generations?|Heritable|Always harmful|Identical in every individual|Entirely acquired during life",
        "What is an example of in-situ conservation?|Protecting organisms in their natural habitat|Keeping seeds only in a freezer|Keeping animals only in a zoo|Preserving specimens in jars",
      ],
      "Why can pesticide resistance become common?|Resistant individuals survive and reproduce more.|Every insect chooses to mutate.|The pesticide replaces all genes.|Resistance disappears after reproduction.",
    ],
    [
      "Practical microscopy and specimen identification",
      "Start with low power, focus carefully and draw clear outlines without shading. Label visible features and give magnification or a scale when requested. Compare specimens using observed differences rather than assumptions.",
      "If a 4 mm specimen is drawn 40 mm long, the drawing is magnified ten times.",
      [
        "Why begin at low power on a microscope?|To locate the specimen more easily|To obtain the highest magnification immediately|To remove the need for light|To stain the specimen",
        "What should a biological drawing label?|Visible structures|Only structures you imagine|The student’s favourite colour|An unrelated organism",
      ],
      "A 5 mm specimen is drawn 25 mm long. What is the magnification?|×5|×20|×30|×125",
    ],
    [
      "Population genetics, blood groups and sex linkage",
      "Alleles can show dominance, incomplete dominance or codominance. In the ABO system, A and B are codominant. Some traits are linked to genes carried on a sex chromosome.",
      "A person with genotype IAIB has blood group AB because both alleles are expressed.",
      [
        "What relationship do IA and IB show?|Codominance|Complete recessiveness of both|No inheritance|Environmental variation only",
        "Where is an X-linked gene located?|On the X chromosome|Only in the cell wall|On every autosome|Only in chloroplasts",
      ],
      "Which ABO phenotype is possible from parents IAi and IBi?|O|Only AB|Only A|Only B",
    ],
  ],
  "physics": [
    [
      "Scalars, vectors and equilibrium",
      "Scalars have magnitude only. Vectors have magnitude and direction. Equilibrium requires zero resultant force and zero resultant moment.",
      "Two opposite forces of 12 N and 7 N give a net 5 N towards the 12 N force.",
      [
        "Which quantity is a scalar?|Mass|Acceleration|Momentum|Force",
        "What is the moment of a 10 N force 0.4 m from a pivot at right angles?|4 N m|25 N m|10.4 N m|0.4 N m",
      ],
      "What force balances 8 N acting east?|8 N west|8 N east|4 N west|16 N north",
    ],
    [
      "Newton’s laws, momentum and collisions",
      "A resultant force changes momentum. In an isolated system, total momentum is conserved. Impulse equals change in momentum.",
      "A 2 kg object moving at 3 m/s has momentum 6 kg m/s.",
      [
        "What is the momentum of a 5 kg object moving at 4 m/s?|20 kg m/s|9 kg m/s|1.25 kg m/s|0.8 kg m/s",
        "What is the unit of impulse?|N s|N/m|W|Pa",
      ],
      "Why do airbags reduce impact force for the same change in momentum?|They increase stopping time.|They increase momentum.|They eliminate inertia.|They decrease stopping time.",
    ],
    [
      "Friction, circular motion and gravitation",
      "Friction opposes relative motion or its tendency. Circular motion requires acceleration towards the centre. Weight equals mass times the local gravitational field strength.",
      "A 6 kg object weighs about 60 N where g is 10 N/kg.",
      [
        "Which way is centripetal acceleration directed?|Towards the centre|Along the tangent|Away from the centre|Always upwards",
        "Which property stays the same when an object is taken from Earth to the Moon?|Mass|Weight|Local gravity|Gravitational force",
      ],
      "What provides centripetal force for a satellite in orbit?|Gravity|Electrostatic repulsion|Air resistance|Upthrust",
    ],
    [
      "Pressure, density and flotation",
      "Density is mass per unit volume. Pressure equals force divided by area, and liquid pressure increases with depth. Upthrust equals the weight of displaced fluid.",
      "A floating object displaces fluid whose weight equals its own.",
      [
        "What is the pressure from 200 N acting over 0.5 m²?|400 Pa|100 Pa|200 Pa|0.0025 Pa",
        "What is the density of 200 g occupying 50 cm³?|4 g/cm³|0.25 g/cm³|250 g/cm³|10000 g/cm³",
      ],
      "Why does pressure increase deeper in water?|There is more water above exerting weight.|Water becomes weightless.|The surface area disappears.|Gravity acts only at depth.",
    ],
    [
      "Machines, elasticity and oscillation",
      "Mechanical advantage is load divided by effort. Efficiency compares useful output to input. Within the limit of proportionality, extension is proportional to force. Period is the time for one oscillation.",
      "If a machine lifts a 300 N load with a 100 N effort, its mechanical advantage is 3.",
      [
        "What is the efficiency of a machine with 60 J output from 80 J input?|75%|20%|60%|133%",
        "If a spring obeys Hooke’s law, what happens to extension when force doubles?|It doubles.|It halves.|It remains fixed.|It quadruples.",
      ],
      "What is the period of 20 oscillations in 10 s?|0.5 s|2 s|10 s|20 s",
    ],
    [
      "Thermometry, expansion and latent heat",
      "Temperature measures thermal state. Specific heat capacity describes temperature change and specific latent heat describes energy transferred during a change of state. Most solids expand when heated.",
      "Melting 0.5 kg of ice with latent heat 334 kJ/kg requires 167 kJ at its melting point.",
      [
        "Why are gaps left in some bridges?|To allow thermal expansion|To stop heat radiation|To make the bridge contract when hot|To eliminate gravity",
        "What is the unit of specific latent heat?|J/kg|J/(kg K)|K/J|N/kg",
      ],
      "How much energy vaporises 0.2 kg with specific latent heat 2 MJ/kg?|0.4 MJ|10 MJ|2.2 MJ|4 MJ",
    ],
    [
      "Reflection, refraction and optical instruments",
      "Angles of incidence and reflection are measured from the normal. Refraction results from a change in wave speed. Converging lenses can form real images when the object lies beyond the focal point.",
      "A converging lens can focus distant sunlight near its focal point.",
      [
        "What is the angle of reflection when incidence is 35°?|35°|55°|70°|90°",
        "Which instrument uses a converging lens to form a real image on a sensor?|Camera|Plane mirror|Tuning fork|Barometer",
      ],
      "When light enters glass from air obliquely, what usually happens?|It bends towards the normal.|It bends away from the normal.|It speeds up.|Its frequency rises.",
    ],
    [
      "Electrostatics and electric fields",
      "Like charges repel and unlike charges attract. A field is a region where a charge experiences a force. Charging by induction uses redistribution of charge without direct contact with the charging object.",
      "A charged rod can attract neutral paper by redistributing charge within it.",
      [
        "How do two negatively charged objects interact?|They repel.|They attract.|They have no field.|They lose all mass.",
        "What is the SI unit of charge?|Coulomb|Ampere|Volt|Ohm",
      ],
      "What is the direction of an electric field defined by?|Force on a positive test charge|Force on a neutron|Flow of heat|Motion of any magnet",
    ],
    [
      "Circuit analysis and electrical energy",
      "In series, components share current. Parallel branches share potential difference. Electrical power is IV and energy is power multiplied by time.",
      "A 12 V device drawing 2 A uses 24 W.",
      [
        "What is total resistance for two 6 Ω resistors in parallel?|3 Ω|6 Ω|12 Ω|36 Ω",
        "Where should a voltmeter be connected?|Across the component|In series only|In place of the power source|Across an open circuit only",
      ],
      "How much energy does a 100 W device use in 20 s?|2000 J|120 J|5 J|80 J",
    ],
    [
      "Magnetic fields, induction and alternating current",
      "Currents produce magnetic fields. Changing magnetic flux induces an emf. Transformers use mutual induction and work with a changing current.",
      "A transformer with twice as many secondary turns as primary turns ideally doubles the voltage.",
      [
        "What is the function of a generator?|Convert mechanical energy to electrical energy|Convert sound to heat only|Store charge as a battery|Measure resistance",
        "What increases induced emf in a coil?|Faster change in magnetic flux|Holding the magnet fixed|Removing all turns|Making the flux constant",
      ],
      "A transformer has 100 primary and 50 secondary turns. If primary voltage is 12 V, what is secondary voltage ideally?|6 V|12 V|24 V|50 V",
    ],
    [
      "Atomic physics, radioactivity and electronics",
      "Radioactive decay is spontaneous. Half-life is the time for the number of undecayed nuclei to halve. A diode conducts much more easily in one direction than the other.",
      "After two half-lives, a sample retains one quarter of its initial radioactive nuclei.",
      [
        "Which radiation has no electric charge?|Gamma|Alpha|Beta-minus|Proton beam",
        "What fraction remains after three half-lives?|1/8|1/6|1/3|1/2",
      ],
      "Which component is used for rectification?|Diode|Fuse|Ammeter|Thermometer",
    ],
    [
      "Practical measurement and graph analysis",
      "Record units and instrument resolution. Repeat measurements and calculate a mean. Plot the independent variable horizontally and choose widely separated points on the best-fit line for gradient.",
      "For a pendulum, time ten swings and divide by ten to estimate one period.",
      [
        "How can parallax when reading a scale be reduced?|View the mark at eye level perpendicular to the scale.|Read from the side.|Close both eyes.|Use a moving scale.",
        "What should a graph axis label include?|Quantity and unit|Only the title|Only a colour|No scale",
      ],
      "Why time several oscillations together?|To reduce relative timing uncertainty|To make the pendulum longer|To change the value of gravity|To eliminate all systematic errors",
    ],
    [
      "Wave behaviour and the electromagnetic spectrum",
      "Reflection, refraction, diffraction and interference occur with waves. Electromagnetic waves travel at the same speed in a vacuum, with frequency and wavelength varying inversely.",
      "Radio waves have longer wavelengths than visible light. Diffraction is more noticeable when an opening is comparable to the wavelength.",
      [
        "Which electromagnetic radiation has the longest wavelength among these options?|Radio waves|Ultraviolet|X-rays|Gamma rays",
        "What is diffraction?|Spreading of waves around an edge or through an opening|Loss of electric charge|Fusion of nuclei|Heating by conduction",
      ],
      "What is observed when two coherent waves meet in phase?|Constructive interference|Complete cancellation|A change in source frequency|Loss of all energy",
    ],
  ],
  "agriculture": [
    [
      "Agricultural development, land tenure and policy",
      "Agriculture supplies food, jobs and industrial materials. Land tenure determines who can use land and on what terms. Credit, roads, research and extension can address different barriers to production.",
      "Secure access to land can encourage a farmer to invest in long-term improvements such as drainage.",
      [
        "What does land tenure describe?|Rights and conditions for holding land|The weight of a tractor|The age of a crop|The price of seed only",
        "Which investment reduces transport barriers to markets?|Feeder roads|More weeds|Poor storage|Unmarked fields",
      ],
      "What can insecure tenure discourage?|Long-term improvements|All seed germination|Rainfall|Crop respiration",
    ],
    [
      "Climate, farm ecosystems and land use",
      "Rainfall, temperature and sunlight influence enterprise choice. Survey slope, drainage and existing vegetation before allocating land. Agroforestry integrates trees with crops or livestock.",
      "Trees in a shelterbelt slow wind and can protect topsoil.",
      [
        "Which instrument measures rainfall?|Rain gauge|Hygrometer|Barometer|Anemometer",
        "What is agroforestry?|Integrating trees with crops or livestock|Removing every tree from farmland|Growing crops in a laboratory only|Keeping fish without water",
      ],
      "Which site feature most directly affects runoff risk?|Slope|Seed colour|Brand of tool|Breed name",
    ],
    [
      "Soil formation, nutrients and fertilisers",
      "Weathering breaks down parent material and organisms add organic matter. Plants need mineral nutrients such as nitrogen, phosphorus and potassium. Match fertiliser to soil and crop needs.",
      "Pale older leaves can suggest nitrogen deficiency, but confirm the diagnosis before applying fertiliser.",
      [
        "What is the upper mineral horizon commonly called?|Topsoil|Bedrock|Parent rock|Water table",
        "Which nutrient is commonly associated with vigorous leaf growth?|Nitrogen|Neon|Helium|Silver",
      ],
      "Why use a representative soil sample before fertilising?|To estimate nutrient needs accurately|To replace every soil particle|To stop rain|To increase farm size",
    ],
    [
      "Irrigation, drainage and farm surveying",
      "Irrigation supplies water when rainfall falls short. Drainage removes excess water. A simple farm survey records distances and boundaries to plan layouts and calculate area.",
      "A 30 m by 20 m rectangular plot has an area of 600 m².",
      [
        "Which method delivers water near plant roots in small amounts?|Drip irrigation|Flooding a whole field|Broadcasting seed|Surface drainage",
        "What is a purpose of drainage?|Remove excess water|Increase waterlogging|Measure rainfall|Improve humidity inside a grain bag",
      ],
      "Find the area of a 25 m by 16 m plot.|400 m²|41 m²|82 m²|800 m²",
    ],
    [
      "Mechanisation, farm structures and safety",
      "Choose machinery according to farm size, soil and task. Maintain tools and inspect equipment before use. Structures such as silos, sheds and fences serve different functions.",
      "A planter places seed at a controlled depth and spacing, while a harrow breaks clods after ploughing.",
      [
        "What is a harrow commonly used for?|Breaking soil clods|Milking cows|Transporting fish|Measuring humidity",
        "Which structure stores bulk grain?|Silo|Paddock|Milking parlour|Footbath",
      ],
      "Why switch off machinery before clearing a blockage?|To prevent injury from moving parts|To improve engine speed|To raise fuel consumption|To dry the crop",
    ],
    [
      "Crop propagation, improvement and storage",
      "Sexual propagation uses seed. Vegetative propagation uses parts of an existing plant. Crop improvement selects useful traits such as disease resistance, and suitable storage limits losses.",
      "Cassava is commonly propagated from stem cuttings rather than seed in commercial production.",
      [
        "What is an example of vegetative propagation?|Planting cassava stem cuttings|Growing maize from seed|Cross-pollinating flowers|Harvesting pollen",
        "Why select disease-resistant varieties?|To reduce yield losses from disease|To eliminate water needs|To make all plants identical|To increase every disease",
      ],
      "What is one reason to dry grain before storage?|To limit mould and deterioration|To promote mould growth|To increase moisture|To prevent grading",
    ],
    [
      "Forestry, agroforestry and ornamental plants",
      "Forests protect watersheds and supply products. Reforestation re-establishes tree cover on cleared land. Ornamental plants are grown for appearance and can be propagated by cuttings or other methods.",
      "A living hedge can mark a boundary while reducing wind and providing habitat.",
      [
        "What is reforestation?|Re-establishing trees on formerly forested land|Harvesting all timber permanently|Draining every wetland|Removing seedlings from a nursery",
        "Which is a benefit of a shelterbelt?|Reduced wind erosion|Increased wind speed at ground level|Removal of all wildlife|Loss of all soil cover",
      ],
      "Why prune an ornamental hedge?|To control its shape and remove damaged growth|To eliminate every root|To increase seed moisture|To replace all fertiliser",
    ],
    [
      "Animal breeding, feeds and production systems",
      "Selection favours animals with useful heritable characteristics. Compare extensive and intensive systems by stocking, feeding and housing. A ration supplies nutrients in quantities suited to production stage.",
      "A dairy cow producing milk needs a ration suited to maintenance and milk production.",
      [
        "What is selective breeding?|Choosing parents with desired traits|Choosing animals at random|Feeding only one nutrient|Housing every species together",
        "What distinguishes intensive production?|Greater management and input per unit area|No supervision|No stocking control|No need for housing or feed",
      ],
      "What does a balanced ration provide?|Required nutrients in suitable amounts|Only water|Only roughage for every animal|Identical feed for all ages",
    ],
    [
      "Pastures, fisheries and beekeeping",
      "Manage pastures to maintain forage and avoid overgrazing. In fish ponds, stocking density and water quality influence growth. Bees produce honey and help pollinate many crops.",
      "Rotational grazing allows grazed paddocks time to recover.",
      [
        "What can overgrazing lead to?|Loss of plant cover and erosion|Guaranteed higher forage yield|Less exposed soil|Immediate reforestation",
        "Why monitor dissolved oxygen in a fish pond?|Fish need oxygen for respiration.|It determines seed colour.|It replaces all feed.|It measures land area.",
      ],
      "What farm service do bees provide besides honey?|Pollination|Soil compaction|Grain milling|Fish aeration",
    ],
    [
      "Agricultural economics, extension and practical specimens",
      "Distinguish fixed from variable costs and use records for enterprise decisions. Extension helps farmers apply research and share practical knowledge. In specimen questions, identify the item and justify your answer with observable features.",
      "A bag of seed is generally a variable cost. A training demonstration can help farmers compare planting methods.",
      [
        "Which is generally a variable cost for a crop enterprise?|Seed purchased for planting|Annual rent for fixed land|The farm’s total area|Ownership of a permanent building",
        "What is a purpose of agricultural extension?|Help farmers apply useful knowledge|Replace all farmers|Determine every market price|Prevent farm visits",
      ],
      "What should justify a specimen identification?|An observable distinguishing feature|An unsupported guess|The length of the question|The order of the specimen list",
    ],
  ],
  "nigerian-history": [
    [
      "Trans-Saharan trade and Islam in West Africa",
      "Caravan routes connected West African states to North African markets. Trade carried goods, people and ideas. Islam spread through several channels, including merchants, scholarship and courts.",
      "Salt travelled south and gold travelled north along important routes, though goods and routes changed over time.",
      [
        "Which technology aided long desert journeys?|Camel transport|Steam railways|Jet aircraft|Motor lorries in antiquity",
        "Which was one route for the spread of Islam?|Merchant and scholarly networks|Only nineteenth-century European missions|Railways before they existed|Mandatory rule across all societies",
      ],
      "What is one effect of long-distance trade on some states?|Revenue from taxing commerce|The end of all urban growth|No exchange of ideas|Identical political institutions",
    ],
    [
      "Ghana, Mali and Songhai",
      "Compare how these states controlled trade, collected revenue and managed territories. They rose at different times and locations. Use evidence carefully when describing their extent and decline.",
      "Mansa Musa’s pilgrimage shows links between Mali and the wider Islamic world.",
      [
        "Which empire did Mansa Musa rule?|Mali|Ghana|Songhai|Benin",
        "Which city was a major centre of learning in the western Sudan?|Timbuktu|Cape Town|Lagos in antiquity|Alexandria only",
      ],
      "Which empire expanded under Sunni Ali?|Songhai|Mali|Oyo|Kanem alone",
    ],
    [
      "Kanem–Bornu and the Hausa states",
      "Kanem and Bornu developed around Lake Chad and benefited from long-distance trade. Hausa city-states such as Kano were centres of commerce and craft. Consider how Islam and trade affected institutions.",
      "Kano’s textile and dyeing industries served regional markets.",
      [
        "Which lake is closely associated with Kanem–Bornu?|Lake Chad|Lake Victoria|Lake Tanganyika|Lake Volta",
        "Which was a Hausa city-state?|Kano|Benin City|Old Oyo|Calabar",
      ],
      "What linked many Hausa cities with wider regions?|Trade in goods and crafts|A single modern railway in every century|Isolation from markets|Atlantic shipping alone",
    ],
    [
      "Ife, Benin, Oyo and decentralised societies",
      "Compare royal courts and councils with political arrangements built around village assemblies and kinship. Evidence from art, oral tradition and archaeology gives different insights into these societies.",
      "Ife and Benin are renowned for metal sculpture, while many Igbo communities distributed authority among local institutions.",
      [
        "Which society is associated with the Oba’s court and palace bronzes?|Benin|Bornu|Gao|Sokoto",
        "Which institution helped check the Alaafin?|Oyo Mesi|National Assembly|British Privy Council|United Nations",
      ],
      "What is a sound historical comparison?|Compare how authority was distributed in specific communities.|Assume every society used monarchy.|Treat all oral evidence as identical.|Use present borders as proof of ancient institutions.",
    ],
    [
      "The Sokoto jihad and the caliphate",
      "The jihad led by Usman dan Fodio began in 1804 and brought many emirates into the Sokoto Caliphate. Study religious reform, political grievances and how the emirates were administered.",
      "Emirs governed constituent territories within the caliphate’s political structure.",
      [
        "Who led the jihad that began in 1804?|Usman dan Fodio|Mansa Musa|Herbert Macaulay|Jaja of Opobo",
        "What was an emirate in this context?|A territory governed by an emir|A European trading firm|A railway station|A missionary school",
      ],
      "Which factor helped drive the jihad?|Religious reform and criticism of existing rulers|The creation of ECOWAS|The 1914 amalgamation|The Second World War",
    ],
    [
      "Nineteenth-century Yoruba wars and Niger Delta states",
      "Political change followed the decline of Old Oyo. Conflicts and population movements reshaped the Yoruba region. In the Niger Delta, trading states competed over commercial routes and access to European merchants.",
      "Jaja of Opobo sought to protect his state’s position in the palm-oil trade.",
      [
        "Which trade was important to Opobo?|Palm oil|Jet fuel|Uranium exports|Computer chips",
        "What can prolonged warfare cause?|Population displacement|Guaranteed political unity|The immediate end of all trade|Identical settlement patterns everywhere",
      ],
      "Why did some Niger Delta rulers resist European intervention?|To protect control of trade and political autonomy|To abolish local commerce|To invite direct foreign rule|To create ECOWAS in the 1800s",
    ],
    [
      "European contact, the slave trade and missions",
      "Distinguish initial European contact from the growth and suppression of the Atlantic slave trade. Study African responses and the roles of nineteenth-century missions in education and religious change.",
      "Some missions established schools and translated religious texts into African languages.",
      [
        "What helped expand the Atlantic slave trade?|Demand for plantation labour in the Americas|The invention of mobile phones|The launch of the United Nations|The introduction of jet transport",
        "What was one impact of missionary activity?|Expansion of some forms of formal education|End of every local religion immediately|No literacy activities|Abolition of all local languages",
      ],
      "Why should suppression and abolition be distinguished?|Legal abolition did not immediately end illegal trading.|They happened in every place on one day.|Suppression preceded all Atlantic trade.|They refer to the same local event.",
    ],
    [
      "Colonial conquest, administration and economic change",
      "Distinguish conquest from the systems used to govern after conquest. Compare indirect rule across regions and examine taxes, railways, export crops and local resistance.",
      "The 1929 Women’s War challenged colonial administration and fears of taxation in southeastern Nigeria.",
      [
        "Which event occurred in southeastern Nigeria in 1929?|The Women’s War|The 1966 coup|The 1914 amalgamation|The 1979 election",
        "Why were colonial railways important economically?|They linked producing areas and export routes.|They ended all export trade.|They made ports unnecessary.|They eliminated local markets.",
      ],
      "Why did indirect rule take different forms across regions?|Existing political institutions differed.|Every society had the same monarchy.|Local authorities were identical everywhere.|The system began after independence.",
    ],
    [
      "Constitutional development and federalism",
      "Trace changes in representation and regional powers through the Clifford, Richards, Macpherson and Lyttleton constitutions. Connect each reform to its historical setting.",
      "The 1954 Lyttleton Constitution strengthened the federal structure.",
      [
        "Which constitution is associated with federalism in 1954?|Lyttleton|Clifford|Richards|Macpherson",
        "Which constitution introduced the elective principle in 1922 for limited representation?|Clifford|Lyttleton|Republican Constitution|1979 Constitution",
      ],
      "What should you compare when evaluating a constitutional change?|Representation and distribution of powers|Only the length of its name|Only the number of pages|The weather when it was written",
    ],
    [
      "West African nationalism and regional organisations",
      "Nationalist campaigns took different forms across West Africa. After independence, regional organisations pursued cooperation in trade, movement and security.",
      "ECOWAS was established in 1975 as a regional community for West African states.",
      [
        "What was a common aim of nationalist organisations?|Self-government|Expansion of colonial rule|Ending political participation|Eliminating local representation",
        "Which organisation promotes West African regional cooperation?|ECOWAS|NATO|ASEAN|OPEC alone",
      ],
      "What makes a comparison of independence movements stronger?|Evidence of both shared aims and different strategies|Assuming every country followed the same path|Listing dates without context|Discussing only one country",
    ],
    [
      "Foreign policy, military rule and democratic transition",
      "Study Nigeria’s regional and international roles and the domestic changes brought by military and civilian governments. Distinguish the causes and outcomes of the 1966 coups, civil war and later democratic transitions.",
      "The handover to elected civilian government in 1999 began the Fourth Republic.",
      [
        "Which year marked the beginning of the Fourth Republic?|1999|1960|1970|1983",
        "What is one way Nigeria participated in regional affairs?|Cooperation through ECOWAS|Withdrawal from every regional institution|Ending all diplomacy|Replacing the United Nations",
      ],
      "Which is a long-term cause to consider when studying the civil war?|Political and regional tensions before secession|The 1999 handover|The launch of mobile banking|The founding of the Fourth Republic",
    ],
    [
      "Partition, resistance and decolonisation in West Africa",
      "European governments and firms expanded control through treaties, conquest and administrative rule. Compare African military resistance, diplomacy and later political mobilisation across West Africa.",
      "The Berlin Conference set rules that European powers used in their scramble for territory. African societies responded in different ways to conquest and administration.",
      [
        "Which conference is associated with European rules for the partition of Africa?|Berlin Conference|Paris Peace Conference of 1919|Bandung Conference|Congress of Vienna",
        "What is one form of resistance to colonial expansion?|Organising armed defence|Assuming every treaty was accepted freely|Ending all political negotiation|Treating conquest as inevitable",
      ],
      "Why distinguish partition from decolonisation?|One imposed colonial boundaries and control, while the other ended colonial rule.|Both describe the same moment.|Both occurred before European contact.|Neither involved political change.",
    ],
  ],
  "christian-religious-studies": [
    [
      "Joseph, Moses, Joshua and Deborah",
      "Compare how these figures responded to danger, responsibility and opposition. Joseph manages famine preparations, Moses leads the Exodus, Joshua leads the entry into Canaan, and Deborah judges Israel.",
      "Deborah summons Barak in Judges 4 and accompanies him after he asks her to go.",
      [
        "Who advised Pharaoh on preparing for famine?|Joseph|Joshua|Deborah|Eli",
        "Which leader succeeded Moses?|Joshua|Samuel|Saul|Solomon",
      ],
      "Which judge summoned Barak?|Deborah|Hannah|Miriam|Ruth",
    ],
    [
      "Eli, Samuel and Saul",
      "Compare parental responsibility in the accounts of Eli and Samuel with Saul’s responsibility as king. In 1 Samuel 15, Saul’s treatment of the Amalekite campaign becomes an issue of obedience.",
      "Samuel challenges Saul’s attempt to justify keeping the best of the livestock for sacrifice.",
      [
        "Whose sons are named Hophni and Phinehas?|Eli’s|Saul’s|David’s|Nathan’s",
        "Whom did Samuel rebuke after the Amalekite campaign?|Saul|Joshua|Solomon|Ahab",
      ],
      "What theme links Eli’s family and Saul’s kingship?|Accountability for conduct|Shipbuilding|Tax collection in Rome|Temple architecture only",
    ],
    [
      "David, Solomon and Rehoboam",
      "Compare David’s response to correction, Solomon’s request for wisdom and Rehoboam’s response to advice. Consider how private conduct and public decisions affect others.",
      "Rehoboam rejects the elders’ advice to lighten the burden on the people, contributing to the division of the kingdom.",
      [
        "What did Solomon request in 1 Kings 3?|An understanding mind|A larger army first|A longer genealogy|A new coastline",
        "Who rejected the elders’ advice about the people’s burden?|Rehoboam|Nathan|Samuel|Deborah",
      ],
      "What did David do when Nathan confronted him?|Acknowledged his sin|Made Nathan king|Denied that Uriah existed|Asked Saul to judge him",
    ],
    [
      "Elijah, Ahab, Naboth and Gehazi",
      "The Mount Carmel account concerns divided religious allegiance. Naboth’s vineyard exposes abuse of royal power. Gehazi’s conduct after Naaman’s healing raises questions about greed and deception.",
      "In 1 Kings 21, Jezebel arranges false testimony against Naboth so Ahab can obtain his vineyard.",
      [
        "Where did Elijah challenge the prophets of Baal?|Mount Carmel|Mount Sinai|Jericho|Bethlehem",
        "Whose vineyard did Ahab want?|Naboth’s|Gehazi’s|Elisha’s|Josiah’s",
      ],
      "What did Gehazi seek from Naaman after Elisha refused payment?|Gifts|A new law|A military alliance|A public trial",
    ],
    [
      "Josiah, exile and rebuilding",
      "Josiah responds to the discovery of the book of the law with reform. Exile narratives explore faith under pressure. Nehemiah responds to news about Jerusalem by organising rebuilding.",
      "Nehemiah asks the Persian king for permission and resources to travel to Jerusalem.",
      [
        "Which king responded to the discovery of the book of the law with reform?|Josiah|Ahab|Saul|Rehoboam",
        "What project is associated with Nehemiah?|Rebuilding Jerusalem’s wall|Building Noah’s ark|Crossing the Red Sea|Establishing Roman rule",
      ],
      "What do the reform and rebuilding accounts both illustrate?|Acting on a recognised need|Avoiding public responsibility|Rejecting all communal action|Maintaining every existing practice",
    ],
    [
      "Daniel, Amos and Hosea",
      "Daniel narratives explore courage and faith under pressure. Amos condemns worship divorced from justice. Hosea uses covenant and family imagery to express both unfaithfulness and divine love.",
      "Daniel continues to pray despite a decree restricting prayer in Daniel 6.",
      [
        "Who was put into the lions’ den?|Daniel|Amos|Hosea|Nehemiah",
        "Which prophet calls for justice to roll down like waters?|Amos|Joshua|Peter|Paul",
      ],
      "Which prophet uses marriage imagery to explore covenant unfaithfulness?|Hosea|Nathan|Samuel|Elijah",
    ],
    [
      "Baptism, temptation and discipleship",
      "The baptism and temptation accounts frame the beginning of Jesus’ public ministry. Compare the Gospel accounts and explain how Jesus answers temptations instead of merely listing them.",
      "In Matthew 4, Jesus responds to the temptation concerning bread by quoting Scripture.",
      [
        "Who baptised Jesus?|John the Baptist|Peter|Pilate|Zacchaeus",
        "What did Jesus use in answering the temptations in Matthew 4?|Scripture|Roman decrees|Military orders|Temple tax records",
      ],
      "Which response illustrates resisting misuse of power?|Refusing to worship the tempter for kingdoms|Accepting every offer|Avoiding every decision|Trading authority for wealth",
    ],
    [
      "Gethsemane, trial and resurrection accounts",
      "Trace the sequence of prayer, arrest, denial, trial, crucifixion and burial. Name the Gospel when comparing specific details. Distinguish the witnesses, their actions and the significance the account gives each event.",
      "At Gethsemane, Jesus prays while asking his disciples to stay awake.",
      [
        "Where did Jesus pray shortly before his arrest in Mark 14?|Gethsemane|Nazareth|Emmaus|Bethlehem",
        "Which person denied knowing Jesus during the trial sequence?|Peter|James|Matthew|Joseph of Arimathea",
      ],
      "In Luke 24, where were the two disciples travelling when Jesus joined them?|Emmaus|Damascus|Jericho|Tarsus",
    ],
    [
      "Pentecost, opposition and the Gentile mission",
      "Acts links Pentecost to public witness and growth of the church. Later episodes show opposition and debate about including Gentiles. Use examples such as Cornelius, Stephen and the Jerusalem Council.",
      "Peter’s visit to Cornelius in Acts 10 helps explain how the early church understood inclusion of Gentiles.",
      [
        "Who preached publicly at Pentecost in Acts 2?|Peter|Cornelius|Pilate|Gamaliel",
        "Which Gentile household received Peter in Acts 10?|Cornelius’s|Stephen’s|Ananias’s|Herod’s",
      ],
      "What issue did the Jerusalem Council address?|Requirements for Gentile believers|Who should become Roman emperor|Whether Jerusalem should rebuild its wall|Who should lead the Exodus",
    ],
    [
      "James: faith, impartiality and effective prayer",
      "James links faith with action, condemns favouritism towards the wealthy and describes prayer as part of community life. Refer to the specific passage when applying its teaching.",
      "James 2 challenges a congregation that gives an honoured place to a rich visitor while humiliating a poor one.",
      [
        "What behaviour does James 2 condemn?|Favouritism|Care for the poor|Hospitality|Practical help",
        "What does James use to demonstrate living faith?|Works|Social rank|A family title|Military service",
      ],
      "Whose prayer is used as an example in James 5?|Elijah’s|Pilate’s|Caesar’s|Gehazi’s",
    ],
    [
      "Peter and the Epistles: citizenship and relationships",
      "First Peter addresses conduct among neighbours, respect for authorities and endurance under pressure. Other epistles examine reconciliation and mutual responsibility. Distinguish respect from agreement with every action of a ruler.",
      "First Peter 2 connects honourable conduct among non-Christians with the witness of the community.",
      [
        "Which epistle explicitly addresses honourable conduct among Gentiles in chapter 2?|First Peter|James|Philemon|Jude",
        "Which action best illustrates constructive citizenship?|Acting lawfully and treating neighbours with respect|Using office for private revenge|Ignoring every public responsibility|Refusing to consider other people’s needs",
      ],
      "Which approach best answers an application question?|Connect a named passage to a specific action today.|Repeat the title without explaining it.|List unrelated passages.|Give an example with no link to the teaching.",
    ],
  ],
  "literature-in-english": [
    [
      "Antony and Cleopatra — William Shakespeare",
      "Read the play against the political conflict between Rome and Egypt. Track how Antony’s divided loyalties and Cleopatra’s performances shape what other characters believe about power.",
      "Compare the consequences of Antony’s choices at Actium with the image Cleopatra constructs in the final act.",
      [
        "Which battle marks a military turning point?|Actium|Agincourt|Waterloo|Troy",
        "Which political rival confronts Antony?|Octavius Caesar|Macbeth|Brutus in this play|King Lear",
      ],
      "What is a strong argument about Antony?|His political duties and personal loyalties come into conflict.|He remains detached from Rome and Egypt.|He has no military role.|His choices have no public consequences.",
    ],
    [
      "So the Path Does Not Die — Pede Hollist",
      "Follow Finaba through the expectations of her community and her experiences of migration. Analyse how family and cultural expectations shape the choices she makes about her identity.",
      "Compare a scene of social pressure with a later decision in which Finaba asserts her own judgment.",
      [
        "Who is the central character?|Finaba|Bendu|Scout|Anansewa",
        "Which theme does migration help develop?|Negotiation of identity and belonging|The physics of flight|Medieval kingship|The nature of tides",
      ],
      "Which approach best supports a claim about identity in this novel?|Compare specific moments of pressure and personal choice.|List places without analysing decisions.|Summarise a different book.|Treat all characters as sharing one view.",
    ],
    [
      "Redemption Road — Elma Shaw",
      "Read Bendu’s story in the context of Liberia’s civil conflict and its aftermath. Examine how the novel connects personal trauma with social questions about accountability and healing.",
      "Use a passage where memory shapes Bendu’s present decisions to discuss the lasting effects of war.",
      [
        "Which country frames the aftermath of war in the novel?|Liberia|Canada|England|Ancient Rome",
        "Whose experience is central to the novel?|Bendu’s|Finaba’s|Antony’s|More’s",
      ],
      "Which argument fits the novel’s context?|Recovery after war involves personal and public responsibilities.|War ends every character’s difficulties immediately.|The novel treats conflict as a sporting contest.|The setting has no bearing on memory.",
    ],
    [
      "To Kill a Mockingbird — Harper Lee",
      "Scout’s narration gives readers a child’s perspective on prejudice in Maycomb. Compare the trial of Tom Robinson with other encounters that teach Scout how assumptions can distort judgment.",
      "Atticus’s defence of Tom brings the difference between legal evidence and social prejudice into focus.",
      [
        "Who narrates the novel?|Scout Finch|Tom Robinson|Atticus Finch|Boo Radley",
        "Whom does Atticus defend?|Tom Robinson|Bob Ewell|Jem Finch|Dill Harris",
      ],
      "What does the trial expose?|The influence of racial prejudice on justice|A conflict over Roman succession|A village marriage auction|A poem’s rhyme scheme",
    ],
    [
      "Path of Lucas: The Journey He Endured — Susanne Bellefeuille",
      "Track Lucas’s relationships, choices and endurance across the novel. Read scenes of hardship alongside moments of support and explain how the narrative represents perseverance.",
      "Choose two turning points and compare how Lucas responds to pressures on his family.",
      [
        "Whose journey structures the work?|Lucas’s|Antony’s|Finaba’s|Birling’s",
        "What should support a claim about Lucas’s perseverance?|Specific responses to hardship|A list of unrelated characters|The page count|A plot from another novel",
      ],
      "How can a reader analyse family relationships in the novel?|Trace how decisions and support change over time.|Assume every relationship is static.|Discuss only the title.|Ignore the consequences of choices.",
    ],
    [
      "Once Upon an Elephant — Bosede Ademilua-Afolayan",
      "Read the play as a study of ambition, authority and resistance. Track who benefits from a ruler’s decisions and how the stage makes the costs of abuse visible.",
      "Compare the ruler’s public claims with what other characters reveal about the effects of his actions.",
      [
        "What does the elephant image invite a reader to examine?|Power and its exercise|A farm’s fertiliser rate|A mathematical sequence|The theory of refraction",
        "Who wrote the play?|Bosede Ademilua-Afolayan|Efua Sutherland|Elma Shaw|Maya Angelou",
      ],
      "How can an essay assess leadership in the play?|Contrast claims to authority with the treatment of subjects.|Retell the title only.|List every scene without an argument.|Ignore the effects of decisions.",
    ],
    [
      "The Marriage of Anansewa — Efua Sutherland",
      "Ananse negotiates with several chiefs over Anansewa’s marriage. Study how the play uses storytelling, song and staged action to explore wit, obligation and material gain.",
      "Ananse’s management of the marriage proposals makes the audience consider who controls the negotiations and who bears their risks.",
      [
        "Who is Anansewa’s father?|Ananse|Birling|Antony|Atticus",
        "Which tradition shapes the play’s performance?|Anansesem storytelling|Elizabethan revenge tragedy alone|Silent cinema|Roman oratory alone",
      ],
      "What conflict drives much of the action?|Competing marriage negotiations|A courtroom murder trial|A military siege of Rome|A search for buried treasure",
    ],
    [
      "An Inspector Calls — J. B. Priestley",
      "The Inspector’s questions expose how separate actions affect Eva Smith. Compare the older and younger Birlings’ responses and consider how the ending unsettles easy excuses.",
      "Sheila’s willingness to reconsider her actions contrasts with attempts to dismiss the Inspector’s visit.",
      [
        "What is the family name at the centre of the play?|Birling|Finch|Radley|More",
        "Whose experiences connect the Inspector’s questions?|Eva Smith’s|Cleopatra’s|Anansewa’s|Bendu’s",
      ],
      "What theme is developed through the chain of actions?|Social responsibility|Nuclear energy|Military tactics alone|The joy of hunting",
    ],
    [
      "A Man for All Seasons — Robert Bolt",
      "Thomas More faces political pressure to endorse the king’s position. Compare conscience, legal reasoning and public duty, and consider how other characters adapt to power.",
      "More’s reliance on silence shows why the distinction between what can be proved and what is inferred matters in the play.",
      [
        "Who is the central figure?|Thomas More|Arthur Birling|Antony|Ananse",
        "Which monarch’s demands shape the conflict?|Henry VIII|Elizabeth I|James I|George III",
      ],
      "What helps explain More’s use of silence?|His concern with law and conscience|His inability to speak|His ignorance of the conflict|His wish to become king",
    ],
    [
      "Once Upon a Time — Gabriel Okara",
      "The speaker contrasts remembered sincerity with learned social performance. Follow the movement from criticism of public behaviour to a personal wish to recover honesty.",
      "The adult speaker addresses a child, which makes learning and unlearning central to the poem.",
      [
        "Whom does the speaker address?|His son|A judge|A king|A soldier",
        "What does the repeated contrast expose?|Sincerity and pretence|Two military strategies|Scientific and legal jargon|Competing weather reports",
      ],
      "What does the child represent for the speaker?|A possibility of recovering authenticity|A political opponent|A publisher|A new law",
    ],
    [
      "New Tongue — Elizabeth L. A. Kamara",
      "Read language as a marker of identity and generational change. Ask what happens when inherited ways of speaking and thinking encounter new habits and pressures.",
      "Use the title’s image of a changed tongue to frame an argument about what is lost, gained or contested.",
      [
        "What is a productive focus for interpreting the title?|Language and identity|The anatomy of teeth only|A court sentence|The length of a journey",
        "Who wrote “New Tongue”?|Elizabeth L. A. Kamara|Gabriel Okara|Lord Byron|Fleur Adcock",
      ],
      "What makes a claim about cultural change convincing?|Evidence from the poem’s contrasts and images|A general opinion without evidence|A biography alone|A summary of a different poem",
    ],
    [
      "Night — Wole Soyinka",
      "Track how darkness becomes a presence through imagery and address. Explain how the speaker’s attitude develops and which details make the setting feel threatening or powerful.",
      "Read the opening and ending together to identify any shift in the speaker’s relationship to the night.",
      [
        "Who wrote “Night”?|Wole Soyinka|Seamus Heaney|Maya Angelou|Lord Byron",
        "What makes night seem like an active presence?|Figurative description and direct address|Page numbering|A list of publishers|The absence of any imagery",
      ],
      "How should an essay support an interpretation of tone?|Tie it to particular images and phrasing.|Use the title alone.|List all the words alphabetically.|Retell a different work.",
    ],
    [
      "Not My Business — Niyi Osundare",
      "The speaker dismisses harm to others until repression reaches his own home. Analyse the pattern of repeated incidents and the reversal at the end.",
      "The repeated refusal to intervene makes the final knock a consequence the reader has been prepared to notice.",
      [
        "What does the repeated response reveal?|The speaker’s refusal to intervene|A plan to help immediately|The absence of danger|A celebration of justice",
        "What changes at the end?|The threat reaches the speaker.|Everyone leaves the country.|The incidents are revealed as jokes.|A new speaker rescues the victims.",
      ],
      "What theme links the incidents?|The danger of indifference to injustice|The benefits of silence in every case|The arrival of spring|The beauty of private wealth",
    ],
    [
      "Hearty Garlands — S. O. H. Afriyie-Vidza",
      "Read the poem as an address shaped by tribute and remembrance. Identify what the garland image suggests, and support an interpretation by following changes in the speaker’s voice.",
      "Compare the title’s suggestion of honour with the details the speaker uses to give that honour meaning.",
      [
        "What can a garland symbolise in a tribute?|Honour or commemoration|A legal verdict only|An electrical current|A battle formation",
        "Who wrote “Hearty Garlands”?|S. O. H. Afriyie-Vidza|Niyi Osundare|Gabriel Okara|Geoffrey Chaucer",
      ],
      "How should a reader test an interpretation of the title?|Compare it with imagery and tone in the poem.|Use the dictionary alone.|Ignore the speaker.|Assume every garland has one universal meaning.",
    ],
    [
      "The Breast of the Sea — Syl Cheney-Coker",
      "Explore the sea imagery and how it connects a physical landscape with memory or feeling. Pay attention to how the poem gives the sea human qualities.",
      "Ask what the bodily image in the title makes the reader expect from the sea, then test that expectation against the poem.",
      [
        "Who wrote “The Breast of the Sea”?|Syl Cheney-Coker|Seamus Heaney|Fleur Adcock|Lord Byron",
        "What is a productive focus for reading the title?|The link between the body and landscape|A clinical definition alone|An account of Roman law|A description of bookbinding",
      ],
      "Which evidence best supports a claim about the sea’s role?|Repeated images and how they develop|The author’s surname alone|The length of another poem|A summary of unrelated history",
    ],
    [
      "She Walks in Beauty — Lord Byron",
      "The speaker describes beauty through a balance of light and darkness. Trace how the poem moves from outward appearance to an impression of inward character.",
      "The opening comparison to a clear, starry night makes darkness part of beauty instead of its opposite.",
      [
        "What contrast structures the description?|Light and darkness|Sea and desert|Youth and childhood|War and peace",
        "Which poet wrote the poem?|Lord Byron|Seamus Heaney|Maya Angelou|Fleur Adcock",
      ],
      "What movement does the poem make?|From appearance towards an impression of character|From a battle to a court verdict|From law to farming|From a letter to a telephone call",
    ],
    [
      "The Nun’s Priest’s Tale — Geoffrey Chaucer",
      "The tale uses animal characters to examine flattery, judgment and pride. Keep track of the story within The Canterbury Tales and the irony of high language applied to barnyard events.",
      "The fox exploits Chauntecleer’s vanity about his singing, but the cock later turns the tactic against him.",
      [
        "Who is the cock in the tale?|Chauntecleer|Reynard alone|Antony|Ananse",
        "What tactic helps the fox capture the cock?|Flattery|A fair trial|A written contract|A public election",
      ],
      "What gives the tale a mock-heroic quality?|Elevated style applied to barnyard events|A total absence of humour|A modern telephone conversation|A single literal description",
    ],
    [
      "Digging — Seamus Heaney",
      "The speaker compares writing with the physical work of his father and grandfather. Sensory detail connects memory, labour and the choice to continue a family tradition in a different way.",
      "The pen becomes the speaker’s tool, as the spade was for earlier generations.",
      [
        "What tool does the speaker choose?|A pen|A spade only|A plough|A hammer",
        "What is the poem’s central comparison?|Writing and manual labour|Swimming and flying|War and peace treaties|Law and mathematics",
      ],
      "How does the speaker relate to his family’s work?|He honours it while choosing a different craft.|He dismisses it as worthless.|He avoids mentioning it.|He claims to be a farmer throughout.",
    ],
    [
      "Still I Rise — Maya Angelou",
      "Track the repeated assertion of rising, the questions directed at an implied adversary and the images of abundance and movement. Explain how the voice resists humiliation.",
      "The refrain gives the poem momentum and turns the speaker’s resilience into a recurring assertion.",
      [
        "Who wrote “Still I Rise”?|Maya Angelou|Fleur Adcock|Elizabeth L. A. Kamara|S. O. H. Afriyie-Vidza",
        "What does the refrain emphasise?|Resilience in the face of oppression|Acceptance of humiliation|Uncertainty about the weather|A wish to disappear",
      ],
      "What do the direct questions help create?|A challenge to the implied adversary|A neutral census|A list of instructions|A change into third-person narrative",
    ],
    [
      "The Telephone Call — Fleur Adcock",
      "The poem uses a staged telephone conversation to explore expectation, manipulation and disappointment. Track how the caller controls information and how the listener’s expectations change.",
      "The promise of a prize leads the reader to expect a reward, which the ending undercuts.",
      [
        "Who wrote “The Telephone Call”?|Fleur Adcock|Maya Angelou|Lord Byron|Wole Soyinka",
        "What is the poem’s main dramatic situation?|A phone call about an apparent prize|A trial for murder|A military council|A journey across the desert",
      ],
      "How does the ending affect the reading?|It exposes the gap between expectation and outcome.|It confirms every promise literally.|It resolves an ancient war.|It changes the poem into a speech by a king.",
    ],
    [
      "The Stone — Wilfrid Wilson Gibson",
      "The poem builds an account of loss through a stonecutter’s work and a grieving woman’s response. Follow the contrast between repeated physical action and the difficulty of expressing grief.",
      "Analyse how the stone can function both as an object being worked and as a memorial associated with loss.",
      [
        "Who wrote “The Stone”?|Wilfrid Wilson Gibson|Geoffrey Chaucer|Lord Byron|Seamus Heaney",
        "Which theme fits the treatment of the stone?|Grief and remembrance|Electoral reform|Victory in a footrace|The science of magnetism",
      ],
      "What evidence can show how grief is conveyed indirectly?|The repeated work and restrained responses|A list of publication dates alone|The metre of a different poem|An unrelated biography",
    ],
  ],
} satisfies Record<string, ExpandedLesson[]>;
