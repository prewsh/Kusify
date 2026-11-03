import type { LessonSpec } from './syllabus';

// Each question gives the correct answer first, followed by three distractors.
export const additionalSyllabus = {
  biology: [
    ['Cells and organisation', 'Cells are the basic units of living organisms. A tissue is a group of cells working together, and an organ combines tissues to carry out a function.', 'Palisade cells contain many chloroplasts to capture light for photosynthesis.', [
      'Which structure controls most activities in a typical animal cell?|Nucleus|Cell wall|Chloroplast|Vacuole',
      'Where does most aerobic respiration occur in a eukaryotic cell?|Mitochondrion|Ribosome|Cell membrane|Nucleus',
      'What is a group of similar cells working together?|Tissue|Organ system|Organism|Population',
    ]],
    ['Nutrition and photosynthesis', 'Green plants use light energy to make sugars from carbon dioxide and water. Animals obtain nutrients by feeding and use enzymes to digest large molecules.', 'Amylase breaks down starch into smaller sugars. In a leaf, chlorophyll absorbs light for photosynthesis.', [
      'Which gas is taken in for photosynthesis?|Carbon dioxide|Oxygen|Nitrogen|Hydrogen',
      'Which nutrient is broken down by proteases?|Protein|Starch|Fat|Water',
      'What is the main light-absorbing pigment in green leaves?|Chlorophyll|Haemoglobin|Melanin|Keratin',
    ]],
    ['Transport, respiration and excretion', 'Transport systems deliver materials to cells. Respiration releases usable energy from food, while excretion removes metabolic waste.', 'Xylem carries water and minerals from roots. In humans, kidneys remove urea from the blood.', [
      'What carries sugars through a plant?|Phloem|Xylem|Root hairs|Guard cells',
      'Which organ removes urea from the blood?|Kidney|Stomach|Heart|Pancreas',
      'Which gas is required for aerobic respiration?|Oxygen|Carbon dioxide|Nitrogen|Methane',
    ]],
    ['Reproduction, inheritance and variation', 'Gametes fuse in sexual reproduction. Offspring inherit alleles from their parents. Variation can arise from genes, the environment, or both.', 'Two heterozygous parents Aa can produce AA, Aa, Aa or aa offspring in a simple Mendelian cross.', [
      'What is the fusion of gametes called?|Fertilisation|Germination|Pollination|Mitosis',
      'Which genotype is heterozygous?|Aa|AA|aa|BB',
      'Where are genes located?|On chromosomes|In cell walls|In vacuole sap|On starch grains',
    ]],
    ['Ecology and adaptation', 'An ecosystem includes organisms and their physical environment. Producers capture energy and food chains show how it passes to consumers. Adaptations help organisms survive and reproduce in their environments.', 'In grass → grasshopper → frog, the frog is a secondary consumer.', [
      'Which organism is a producer?|Grass|Frog|Hawk|Grasshopper',
      'What describes organisms of one species in an area?|Population|Community|Ecosystem|Biome',
      'What role do many fungi play in nutrient cycling?|Decomposer|Producer|Pollinator|Primary consumer only',
    ]],
  ],
  physics: [
    ['Measurement and motion', 'Speed is distance divided by time. Velocity includes direction and acceleration is the rate of change of velocity. A velocity–time graph shows acceleration by its gradient.', 'A cyclist changing speed from 2 to 8 m/s in 3 s has an acceleration of 2 m/s².', [
      'What is the SI unit of acceleration?|m/s²|m/s|N|J',
      'How fast is a runner who travels 100 m in 20 s?|5 m/s|2 m/s|20 m/s|80 m/s',
      'What is the gradient of a displacement–time graph?|Velocity|Force|Momentum|Power',
    ]],
    ['Forces, work and energy', 'A resultant force changes motion. Work equals force times displacement in the direction of the force. Power is the rate at which work is done.', 'A 20 N horizontal force moving a box 3 m in that direction does 60 J of work.', [
      'What resultant force accelerates 4 kg at 3 m/s²?|12 N|7 N|1 N|24 N',
      'What is the SI unit of power?|Watt|Joule|Newton|Pascal',
      'Which energy store increases when an object is lifted?|Gravitational potential|Chemical|Elastic|Nuclear',
    ]],
    ['Heat and gases', 'Heat transfers because of a temperature difference. Specific heat capacity relates energy to mass and temperature change. For a fixed mass of gas at constant temperature, pressure and volume vary inversely.', 'Doubling gas volume at constant temperature halves its pressure.', [
      'Which heat transfer process can occur through a vacuum?|Radiation|Conduction only|Convection only|Diffusion only',
      'Which variable is held constant in Boyle’s law?|Temperature|Pressure|Volume|Density',
      'What usually happens to the temperature of a pure substance as it melts at constant pressure?|It stays constant.|It rises steadily.|It falls steadily.|It doubles.',
    ]],
    ['Waves, sound and light', 'Wave speed equals frequency multiplied by wavelength. Sound requires a medium. Light changes direction at a boundary when it refracts.', 'A 5 Hz wave of wavelength 2 m moves at 10 m/s.', [
      'What is the unit of frequency?|Hertz|Metre|Watt|Second',
      'Which wave cannot travel through a vacuum?|Sound|Visible light|Radio|X-rays',
      'What is the bending of light at a boundary called?|Refraction|Reflection|Absorption|Polarisation',
    ]],
    ['Electricity, magnetism and atoms', 'Current is the rate of flow of charge. For an ohmic resistor, voltage equals current multiplied by resistance. Changing magnetic flux can induce a voltage. Atoms contain a nucleus and surrounding electrons.', 'A 6 Ω resistor carrying 2 A has 12 V across it.', [
      'What is the current through a 4 Ω resistor connected to 12 V?|3 A|48 A|8 A|16 A',
      'What does a transformer require for continuous induction?|Changing magnetic flux|Constant magnetic flux|A fixed direct current only|A permanent charge at rest',
      'Which particle carries a negative charge?|Electron|Proton|Neutron|Alpha particle',
    ]],
  ],
  agriculture: [
    ['Farm systems and agricultural inputs', 'Crop and livestock enterprises use land, labour, capital and management. Choose a farming system by considering available resources, climate and market demand.', 'A mixed farm can use crop residues for animal feed and manure to improve soil.', [
      'What is mixed farming?|Growing crops and keeping livestock|Growing only one crop|Keeping only poultry|Harvesting wild fish only',
      'Which input includes machinery and buildings?|Capital|Climate|Labour|Rainfall',
      'Which record tracks money received and spent?|Cash record|Field map|Weather chart|Breeding calendar',
    ]],
    ['Soil, fertility and conservation', 'Soil texture depends on sand, silt and clay proportions. Organic matter can improve soil structure. Ground cover, contour farming and drainage can help manage erosion or excess water.', 'Mulch reduces direct raindrop impact and can slow moisture loss.', [
      'Which soil particle is typically largest?|Sand|Silt|Clay|All are the same',
      'What can contour farming reduce on a slope?|Runoff and erosion|The number of soil particles|Photosynthesis|Seed germination in all cases',
      'What does soil pH indicate?|Acidity or alkalinity|Rainfall amount|Soil temperature|Slope angle',
    ]],
    ['Crop production and protection', 'Plan planting around season, spacing and crop needs. Manage pests using a combination of cultural, biological and, where appropriate, chemical methods.', 'Rotating maize with a non-host crop can disrupt the life cycle of some maize pests.', [
      'What is crop rotation?|Growing different crops in sequence on the same land|Planting only one species indefinitely|Harvesting before maturity|Changing seed colour',
      'What are weeds?|Plants growing where they are unwanted|All plants with flowers|Only poisonous fungi|All insect pests',
      'What does recommended spacing help manage?|Competition for light, water and nutrients|The chemical identity of water|The duration of daylight|Seed colour only',
    ]],
    ['Livestock nutrition and health', 'Match feed to the animal’s age, species and production stage. Clean water, suitable housing, vaccination and biosecurity reduce disease risk.', 'Quarantining newly acquired animals can reduce the chance of introducing disease to an existing herd.', [
      'Which animal is a ruminant?|Goat|Pig|Chicken|Rabbit',
      'What is the purpose of quarantine?|Reduce spread of disease from new or sick animals|Increase feed spoilage|Replace drinking water|Prevent all breeding',
      'Which class of nutrient supports growth and tissue repair?|Protein|Water only|Mineral salts only|Fibre only',
    ]],
    ['Farm tools, marketing and records', 'Use tools suited to the operation and maintain them regularly. Marketing includes grading, storage, transport and selling. Records help compare costs and returns.', 'Gross margin equals enterprise revenue minus variable costs.', [
      'What is a secateur commonly used for?|Pruning small branches|Ploughing a large field|Milking cattle|Weighing grain',
      'What does grading produce mean?|Sorting by quality or size|Planting it in rows|Burning crop residues|Mixing all grades together',
      'Revenue is ₦90,000 and variable costs are ₦55,000. What is the gross margin?|₦35,000|₦55,000|₦90,000|₦145,000',
    ]],
  ],
  'literature-in-english': [
    ['Literary devices and close reading', 'Identify the technique, explain what it does in context, and support the interpretation with evidence. A theme is an idea developed through the work.', 'Calling a crowded bus “a tin of sardines” is a metaphor that makes the passengers’ lack of space vivid.', [
      'What is a direct comparison without “like” or “as”?|Metaphor|Simile|Alliteration|Onomatopoeia',
      'What is the central idea explored in a work?|Theme|Stage direction|Rhyme scheme|Setting only',
      'Which term describes words that imitate sounds?|Onomatopoeia|Irony|Metonymy|Hyperbole',
    ]],
    ['Prose and narrative perspective', 'Read for plot, character, setting and the narrator’s perspective. Distinguish what the narrator says from what the text gives readers reason to believe.', 'A first-person narrator who admits hiding evidence may be unreliable.', [
      'Which pronoun commonly marks first-person narration?|I|They|She|It',
      'What is a flashback?|A return to an earlier event|A sudden change of rhyme|A speech by an actor alone|The last line of a poem',
      'What does setting describe?|The time and place of the action|The writer’s signature|The plot’s turning point only|The number of pages',
    ]],
    ['Drama and Shakespeare', 'Read drama as performance. Dialogue, stage directions and entrances shape how an audience understands conflict. WAEC’s 2026–2030 list names Antony and Cleopatra as the Shakespearean text.', 'Compare how political responsibility and personal loyalty pull Antony in different directions.', [
      'What is a speech delivered by a character alone to reveal thoughts?|Soliloquy|Chorus|Aside to another character|Prologue by definition',
      'What is dramatic irony?|The audience knows something a character does not.|All characters share the same knowledge.|Events are told in chronological order.|Dialogue contains only factual statements.',
      'What can stage directions tell a reader?|How an action may be performed|The rhyme scheme of every speech|The price of a ticket|The narrator’s biography',
    ]],
    ['Poetry, sound and structure', 'Read the poem aloud and track the speaker, images, sound patterns and changes in tone. Explain how structure affects meaning.', 'Repetition at the beginning of several lines can emphasise an idea and create a rhythm.', [
      'What is a group of lines in a poem?|Stanza|Act|Chapter|Paragraph by definition',
      'What is enjambment?|A sentence or phrase running across a line break|Every line ending in a full stop|A change of speaker only|A rhyme at the end of every line',
      'What is the repetition of initial consonant sounds?|Alliteration|Assonance|Metaphor|Enjambment',
    ]],
    ['Prescribed texts and essay writing', 'Check the official text list for your examination year. Plan an essay around a claim that answers the question, and develop each paragraph with precise evidence and interpretation.', 'For a question about power, compare two relevant scenes and explain how each develops the theme.', [
      'Where should you verify the prescribed texts for your exam year?|The official WAEC list|A random old answer sheet|Any bookshop receipt|The title of a revision video alone',
      'What makes textual evidence effective?|It supports the specific claim being argued.|It replaces interpretation.|It is as long as possible.|It comes from an unrelated work.',
      'What should a strong literature essay do?|Analyse how the text develops an idea.|Retell the entire plot only.|List unrelated quotations.|Avoid referring to the text.',
    ]],
  ],
  'nigerian-history': [
    ['Historical evidence and early societies', 'Compare written accounts, oral traditions, artefacts and archaeology. Ask who created a source, when and for what purpose. Use several sources to test a claim.', 'Terracotta finds are evidence of Nok artistic activity, while archaeological context helps establish their dates.', [
      'Which is an example of material evidence?|A pottery fragment|A modern fictional plot|An imagined interview|An unsupported guess',
      'What is a primary source for a historical event?|A record made at the time of the event|A later fictional adaptation|A revision summary|A modern textbook chapter',
      'What is the Nok culture particularly known for?|Terracotta sculptures|Printing newspapers|Building railways|Establishing colonial councils',
    ]],
    ['States, trade and political institutions', 'Compare the institutions of societies such as Oyo, Benin and Kanem–Bornu. Long-distance trade shaped political power and connected communities across regions.', 'The Oyo Mesi helped advise and check the Alaafin in the Oyo political system.', [
      'Which ruler was associated with Oyo?|Alaafin|Oba of Benin|Mai of Bornu|Governor-General',
      'Which title was used by rulers of Kanem–Bornu?|Mai|Alaafin|Obi in every case|Prime Minister',
      'What did trans-Saharan trade link?|West Africa and North Africa|Nigeria and Antarctica|Only villages on one river|Only Atlantic ports',
    ]],
    ['Atlantic trade and colonial expansion', 'Distinguish the Atlantic slave trade from later commodity trade. Examine the economic and political motives for British expansion and the varied responses of local communities.', 'Palm oil became an important export in nineteenth-century trade along the Niger Delta.', [
      'Which commodity was a major nineteenth-century Niger Delta export?|Palm oil|Petrol|Aluminium aircraft|Synthetic rubber',
      'What was indirect rule?|Colonial administration through existing or appointed local authorities|Immediate self-government|Rule through elected federal ministries|Abolition of colonial authority',
      'What happened in 1914?|The Northern and Southern protectorates were amalgamated.|Nigeria became a republic.|Nigeria gained independence.|The Fourth Republic began.',
    ]],
    ['Nationalism and independence', 'Political parties, newspapers, unions and activists helped campaign for representation and self-government. Constitutional reforms gradually changed the balance of power.', 'Nigeria gained independence on 1 October 1960 and became a republic in 1963.', [
      'In which year did Nigeria gain independence?|1960|1914|1954|1963',
      'What did nationalist movements seek?|Self-government|Permanent colonial rule|Ending political representation|Closing all newspapers',
      'Which came first?|Independence|Republican status|The Second Republic|The Fourth Republic',
    ]],
    ['Post-independence Nigeria', 'Study constitutional changes, military interventions, the civil war and the return to elected government. Separate immediate triggers from long-term causes.', 'The Nigerian Civil War lasted from 1967 to 1970. The Fourth Republic began in 1999.', [
      'When did the Nigerian Civil War begin?|1967|1960|1979|1999',
      'When did the Fourth Republic begin?|1999|1963|1970|1983',
      'What distinguishes a historical explanation from a timeline?|It explains connections between events.|It lists dates only.|It avoids evidence.|It omits causes.',
    ]],
  ],
  'christian-religious-studies': [
    ['Creation, stewardship and covenant', 'Study the responsibilities given to humans in the creation accounts and the commitments in biblical covenants. Distinguish the details of each narrative before discussing its significance.', 'In Genesis 12, Abram is called to leave his country and is promised blessing and descendants.', [
      'Who is called to leave his country in Genesis 12?|Abram|Moses|David|Samuel',
      'Which sign is associated with the covenant with Noah?|Rainbow|Burning bush|Manna|Stone tablets',
      'What idea is expressed by stewardship?|Responsible care for what has been entrusted|Ownership without responsibility|Refusal to serve|Political conquest',
    ]],
    ['Leadership and prophets', 'Biblical leadership accounts often connect responsibility with obedience and justice. Prophets address wrongdoing and call communities to change.', 'Amos condemns injustice and challenges worship disconnected from fair treatment of others.', [
      'Which prophet strongly condemned social injustice in Israel?|Amos|Peter|Luke|Barnabas',
      'Who anointed David as king in 1 Samuel?|Samuel|Elijah|Moses|Joshua',
      'Who confronted David over his treatment of Uriah?|Nathan|Saul|Solomon|Ezra',
    ]],
    ['Jesus’ ministry and parables', 'Study the setting, characters and central point of each parable. Connect the lesson to the specific question asked rather than assigning meanings to every detail.', 'The Good Samaritan shows neighbourliness through concrete action for someone in need.', [
      'Which Gospel records the Good Samaritan?|Luke|Mark|John|Matthew',
      'Who helps the injured traveller in that parable?|A Samaritan|A priest|A Levite|A Roman governor',
      'Which discourse includes the Beatitudes in Matthew?|Sermon on the Mount|Peter’s Pentecost speech|Paul’s address at Athens|Stephen’s defence',
    ]],
    ['Passion, resurrection and discipleship', 'Trace the events from the Last Supper through the trial, crucifixion and resurrection. Compare Gospel accounts carefully and identify which details each includes.', 'In Matthew 28, Jesus commissions his followers to make disciples of all nations.', [
      'Who denied knowing Jesus three times?|Peter|Thomas|Andrew|Philip',
      'Who was the Roman governor in the trial accounts?|Pontius Pilate|Herod the Great|Caesar Augustus|Felix',
      'Which Gospel records the commission in Matthew chapter 28?|Matthew|Mark|Luke|John',
    ]],
    ['The early church and Christian ethics', 'Acts describes the growth and challenges of early Christian communities. New Testament letters address practical conduct such as generosity, reconciliation and care for others.', 'In Acts 6, the community responds to a complaint about food distribution by appointing seven people to oversee the work.', [
      'Which book records the appointment of seven in response to a distribution dispute?|Acts|Genesis|Revelation|Psalms',
      'Who was travelling to Damascus when he experienced a conversion?|Saul|Stephen|Philip|Cornelius',
      'What does James use to show that faith should have practical effects?|Works|Genealogy|Military power|Ritual clothing',
    ]],
  ],
} satisfies Record<string, LessonSpec[]>;
