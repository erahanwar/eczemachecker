export interface Article {
  title: string;
  slug: string;
  content: string;
  references: {
    text: string;
    link: string;
  }[];
}

export const articles: Article[] = [
  {
    title: "What is eczema?",
    slug: "what-is-eczema",
    content: "Eczema, also known as atopic dermatitis, affects an estimated 204 million people worldwide, around 101 million adults and 103 million children [1]. If you are living with eczema, you are far from alone.\n\nIt is a long-term skin condition that makes the skin red, dry, and intensely itchy. These rashes tend to flare and settle over time. The severity of eczema is usually assessed and categorized as mild, moderate, or severe, depending on how much of the skin is affected and how intense the itching becomes [2]. Beyond the skin itself, eczema can seriously affect sleep, mood, and overall quality of life [2].\n\nAlthough eczema is not contagious, it can run in families and be influenced by genetics [3]. This is why doctors often diagnose eczema by examining the skin, asking about symptoms such as dry itchy patches, typical locations like the creases of the elbows and knees, and any family history of allergies or asthma.\n\nBecause other skin conditions can look similar, it is always a good idea to see a healthcare professional if your eczema spreads, becomes very painful, or shows signs of infection (such as yellow crusting, pus, or worsening redness).",
    references: [
      {
        text: "Tian J, Zhang D, Yang Y, Huang Y, Wang L, Yao X, Lu Q. Global epidemiology of atopic dermatitis: a comprehensive systematic analysis and modelling study. Br J Dermatol. 2024;190(1):55–61.",
        link: ""
      },
      {
        text: "Weidinger S, Novak N. Atopic dermatitis. Lancet. 2016;387(10023):1109–1122.",
        link: "https://doi.org/10.1016/S0140-6736(15)00149-X"
      },
      {
        text: "Bieber T. Atopic dermatitis. N Engl J Med. 2008;358(14):1483–1494.",
        link: "https://doi.org/10.1056/NEJMra074081"
      }
    ]
  },
  {
    title: "What causes eczema?",
    slug: "what-causes-eczema",
    content: "Eczema doesn't have one single cause. Instead, it develops from a combination of genetics, skin barrier weakness, immune changes, and environmental triggers. Here are the five main reasons:\n\n**Genes, it runs in families.**\nIf one parent has eczema, asthma, or allergies, their child has about a 50% chance of developing one of these conditions. If both parents are affected, the likelihood increases to as much as 80% [1].\n\n**Broken skin barrier.**\nMany people with eczema have a weakened skin barrier, often linked to changes in the filaggrin gene. This allows water to escape and lets irritants or allergens enter, which can trigger flare-ups [2].\n\n**Overactive immune system.**\nIn eczema, the immune system reacts too strongly, driving inflammation that causes the redness and intense itching seen during flares [3].\n\n**Triggers at home.**\nEveryday things can worsen eczema, including dust mites, pet dander, certain foods, scratchy fabrics, harsh or fragranced detergents, and unsuitable skincare routines [3].\n\n**Environmental triggers.**\nSudden changes in temperature, humidity, dry air, pollution, pollen, smoke, or sweat can damage the skin barrier and worsen dryness, making flares more likely [3].\n\nIn short, eczema happens when a vulnerable skin barrier meets an overactive immune system, with genetics and everyday triggers combining to cause flare-ups.",
    references: [
      {
        text: "Hoq M, Lee A, Fennessy R, Weidinger S, Flohr C. Atopic dermatitis epidemiology and unmet need in the United States. Clin Exp Allergy. 2025;55(4):409–421.",
        link: ""
      },
      {
        text: "Palmer CN, Irvine AD, Terron-Kwiatkowski A, et al. Common loss-of-function variants of the epidermal barrier protein filaggrin are a major predisposing factor for atopic dermatitis. Nat Genet. 2006;38(4):441–446.",
        link: "https://doi.org/10.1038/ng1767"
      },
      {
        text: "Bieber T. Atopic dermatitis. N Engl J Med. 2008;358(14):1483–1494.",
        link: "https://doi.org/10.1056/NEJMra074081"
      }
    ]
  },
  {
    title: "What triggers eczema flare-ups?",
    slug: "what-triggers-eczema-flare-ups",
    content: "If you live with eczema, you know that flare-ups can seem to appear out of nowhere. In reality, certain triggers often set them off. Identifying and avoiding your personal triggers can make a big difference. Here are the most common ones:\n\n**Irritants at home.**\nEveryday products such as soaps, shampoos, laundry detergents, and cleaning sprays can strip and weaken the skin barrier, making it easier for eczema to flare [1].\n\n**Allergens.**\nFor some people, exposure to dust mites, pet dander, pollen, or certain foods can worsen eczema. In Singapore, the most common allergy trigger is house dust mites and their droppings. About one in three people with eczema who are allergic to dust mites will see their symptoms get worse when exposed [2].\n\n**Imbalance in the skin microbiome.**\nEczema skin is known to have an imbalance in its microbiome, with an increased amount of harmful bacteria such as Staphylococcus aureus. This can make flares more frequent, more severe, and slower to heal [3].\n\n**Stress.**\nStress doesn't cause eczema, but it can trigger a flare or make it worse. Stress affects both the immune system and the skin barrier, leading to more itch and inflammation [4].\n\n**Climate and environment.**\nCold, dry winters and hot, sweaty summers are both challenging. Sudden changes in temperature, low humidity, smoke, or pollution can all irritate the skin and start a flare [2,3].\n\nNo two people have the exact same triggers. Keeping a symptom diary can help you track what sparks your flares and guide changes in your daily routine.",
    references: [
      {
        text: "Weidinger S, Novak N. Atopic dermatitis. Lancet. 2016;387(10023):1109–1122.",
        link: "https://doi.org/10.1016/S0140-6736(15)00149-X"
      },
      {
        text: "Bieber T. Atopic dermatitis. N Engl J Med. 2008;358(14):1483–1494.",
        link: "https://doi.org/10.1056/NEJMra074081"
      },
      {
        text: "Ong PY, Leung DY. Bacterial and viral infections in atopic dermatitis: a comprehensive review. Clin Rev Allergy Immunol. 2016;51(3):329–337.",
        link: "https://doi.org/10.1007/s12016-016-8548-5"
      },
      {
        text: "Arndt J, Smith N, Tausk F. Stress and atopic dermatitis. Curr Allergy Asthma Rep. 2008;8(4):312–317.",
        link: "https://doi.org/10.1007/s11882-008-0050-7"
      }
    ]
  },
  {
    title: "How is eczema treated?",
    slug: "how-is-eczema-treated",
    content: "Living with eczema can feel overwhelming at times, but the good news is that it can usually be managed with the right care. Treatment depends on whether eczema is mild, moderate, or severe, and it often works best when taken step by step [1,2].\n\n**Step 1: Daily skin care, the foundation**\nThe first and most important step is to repair and protect the skin barrier. This means:\n• Applying fragrance-free moisturisers at least once or twice a day, and always after bathing.\n• Using gentle, non-soap cleansers that don't strip the skin.\n• Avoiding common irritants like harsh detergents, strong fragrances, or rough fabrics such as wool.\n\nThese small, everyday habits make a big difference over time.\n\n**Step 2: Treat flare-ups quickly**\nEven with the best care, flare-ups can still happen. When the skin turns red, itchy, and inflamed, anti-inflammatory creams are often needed. These may be steroid creams or non-steroid options prescribed by a doctor. Using them early can help calm the skin before it gets worse.\n\n**Step 3: Extra help for severe eczema**\nWhen eczema is more severe, it can be especially tough on comfort, confidence, and sleep. In these cases, doctors may recommend additional treatments to bring relief:\n• Wet wrap therapy: Moisturiser and medicated cream are applied, then the skin is wrapped in a damp layer of bandages or clothing, with a dry layer on top. This locks in moisture, boosts absorption of treatment, and soothes the itch.\n• Bleach baths: Very dilute bleach baths (a tiny amount of household bleach in a full tub of water) can help reduce bacteria on the skin and lower the risk of infection [3].\n\n**Step 4: Specialist treatments**\nFor people whose eczema stays severe despite these steps, other options may be needed:\n• Light therapy (phototherapy), using controlled ultraviolet light in a clinic.\n• Stronger medicines that work on the whole body's immune system, prescribed by dermatology specialists.\n\nEczema doesn't have a quick fix, but it can be managed. For most people, consistent moisturising and treating flares early make the biggest difference. With extra steps like wet wraps or bleach baths when needed, and specialist support for more severe cases, eczema can usually be controlled so that skin feels calmer and life feels a little easier.",
    references: [
      {
        text: "Weidinger S, Novak N. Atopic dermatitis. Lancet. 2016;387(10023):1109–1122.",
        link: "https://doi.org/10.1016/S0140-6736(15)00149-X"
      },
      {
        text: "Sidbury R, Davis DM, Cohen DE, et al. Guidelines of care for the management of atopic dermatitis: section 3. Management and treatment with phototherapy and systemic agents. J Am Acad Dermatol. 2014;71(2):327–349.",
        link: "https://doi.org/10.1016/j.jaad.2014.03.030"
      },
      {
        text: "Pennal A, Campione EA, King A, Weinstein M. Atopic Dermatitis Part 2: Management. Pediatr Rev. 2025;46(8):425–436.",
        link: "https://doi.org/10.1542/pir.2024-006587"
      }
    ]
  },
  {
    title: "Can eczema be cured?",
    slug: "can-eczema-be-cured",
    content: "At present, there is no permanent cure for eczema [1,2]. This is because the condition is driven by a combination of genes, a weakened skin barrier, and changes in the immune system, which cannot yet be reversed.\n\nThat said, many children \"grow out\" of eczema as they get older. Research shows that some children experience long periods of remission, but for others, symptoms may return in adulthood [3]. For families, this means that while the condition may improve over time, eczema should still be monitored and managed carefully.\n\nThe future of eczema care is encouraging. Scientists are exploring how to prevent eczema in babies by strengthening the skin barrier early in life, while an expanding pipeline of new treatments is being developed to target the disease more precisely. These include therapies that act directly on immune pathways and approaches that aim to restore balance to the skin microbiome [4]. Such research may not provide a cure yet, but it is moving us closer to longer-lasting solutions.\n\nSo while eczema cannot be cured at present, there is reason for optimism. With today's treatments, most people can keep their symptoms under control and live well, and with ongoing research, tomorrow may bring breakthroughs that offer even greater hope.",
    references: [
      {
        text: "Weidinger S, Novak N. Atopic dermatitis. Lancet. 2016;387(10023):1109–1122.",
        link: "https://doi.org/10.1016/S0140-6736(15)00149-X"
      },
      {
        text: "Bieber T. Atopic dermatitis. N Engl J Med. 2008;358(14):1483–1494.",
        link: "https://doi.org/10.1056/NEJMra074081"
      },
      {
        text: "Kim JP, Chao LX, Simpson EL, Silverberg JI. Persistence of atopic dermatitis (AD): A systematic review and meta-analysis. J Am Acad Dermatol. 2016 Oct;75(4):681-687.e11.",
        link: "https://doi.org/10.1016/j.jaad.2016.05.028"
      },
      {
        text: "Bieber T. Atopic dermatitis: an expanding therapeutic pipeline for a complex disease. Nat Rev Drug Discov. 2022;21:21–40.",
        link: "https://doi.org/10.1038/s41573-021-00266-6"
      }
    ]
  },
  {
    title: "Can eczema be triggered by stress?",
    slug: "can-eczema-be-triggered-by-stress",
    content: "Yes, stress can trigger eczema flare-ups or make existing symptoms worse. Stress affects the body in many ways, including the skin. When you are under pressure, your body produces stress hormones like cortisol. In small amounts, cortisol helps the body respond to challenges, but when stress is ongoing, these hormones can disrupt the skin barrier and immune system, making eczema more likely to flare [1].\n\nMany people notice that their eczema feels itchier or redder during stressful periods, such as exams, work deadlines, or major life changes. The itching itself can also cause more stress, creating a cycle of flare-ups and frustration [2,3].\n\nManaging stress is an important part of eczema care. A recent survey of 120 dermatologists and psychologists identified the top five recommendations to improve wellbeing [4]:\n\n• Optimize sleep\n• Meditate or use relaxation techniques\n• Go outdoors and move\n• Take time off or a break from routine\n• Reconnect with loved ones\n\nThese strategies do not replace medical treatment for eczema, but they can reduce stress and break the itch–scratch cycle, supporting healthier skin in the long run.",
    references: [
      {
        text: "Arndt J, Smith N, Tausk F. Stress and atopic dermatitis. Curr Allergy Asthma Rep. 2008;8:312–317.",
        link: "https://doi.org/10.1007/s11882-008-0050-6"
      },
      {
        text: "Kimyai-Asadi A, Usman A. The role of psychological stress in skin disease. J Cutan Med Surg. 2001;5(2):140–145.",
        link: "https://doi.org/10.1177/120347540100500208"
      },
      {
        text: "Linnet J, Jemec GB. Anxiety level and severity of skin condition predict symptoms in patients with atopic dermatitis. Clin Exp Dermatol. 2001;26(4):632–635.",
        link: "https://doi.org/10.1046/j.1365-4362.2001.01272.x"
      },
      {
        text: "Anwar SS, Apolinar MA, Ma L. Perception, understanding, and association between psychological stress and skin aging: Quantitative surveys of Asian women aged 18–34 years, dermatologists, and psychologists in China and Japan. J Cosmet Dermatol. 2023;22(8):2297–2307.",
        link: "https://doi.org/10.1111/jocd.15732"
      }
    ]
  },
  {
    title: "When does eczema develop?",
    slug: "when-does-eczema-develop",
    content: "Eczema, also known as atopic dermatitis, often begins early in life. Many parents first notice signs when their baby is just a few months old, often after about two months of age. In fact, around 60% of children with eczema develop symptoms before their first birthday, and almost 90% before the age of five.\n\nEarly signs of eczema in babies include:\n\n• Dry, scaly skin: rough, flaky patches that feel different from the rest of your baby's soft skin.\n• Small red bumps: tiny spots that can look like pimples but often join together into a red rash.\n• Itchy, scratchy skin: babies may rub against bedding or scratch with their little hands; repeated scratching can make skin raw, oozy, or crusted.\n• A spreading pattern: eczema often starts at the top (scalp, forehead, cheeks) and gradually moves downward to the body, arms, and knees.\n\nAs children grow, eczema tends to appear in the skin folds, behind the knees, inside the elbows, on the wrists, and around the ankles. For some, it eases with age, but for others, it may continue into teenage years or adulthood.\n\nAlthough eczema is most common in childhood, it's not only a childhood disease. Some people develop eczema for the first time as teenagers or adults, often on the hands, eyelids, or skin folds.\n\nIf you're noticing these early changes in your baby's skin, you're not alone. Recognizing eczema early and seeking guidance from a healthcare professional can help you put simple routines in place that keep your child more comfortable and their skin healthier.",
    references: [
      {
        text: "Odhiambo JA, Williams HC, Clayton TO, Robertson CF, Asher MI; ISAAC Phase Three Study Group. Global variations in prevalence of eczema symptoms in children from ISAAC Phase Three. J Allergy Clin Immunol. 2009;124(6):1251–1258.e23.",
        link: "https://doi.org/10.1016/j.jaci.2009.10.009"
      },
      {
        text: "Silverberg JI. Public health burden and epidemiology of atopic dermatitis. Dermatol Clin. 2017;35(3):283–289.",
        link: "https://doi.org/10.1016/j.det.2017.02.002"
      },
      {
        text: "Abuabara K, Margolis DJ, Langan SM. The long-term course of atopic dermatitis. Dermatol Clin. 2017;35(3):291–297.",
        link: "https://doi.org/10.1016/j.det.2017.02.003"
      }
    ]
  },
  {
    title: "How is eczema and asthma related?",
    slug: "how-is-eczema-and-asthma-related",
    content: "Parents often notice that children with eczema sometimes develop breathing problems as they grow older. Doctors call this link the 'atopic march.' Put simply, it means that conditions can appear in a certain order: eczema first, then a sensitive nose, and later asthma.\n\nWhy does this happen? Children with eczema already have a weaker skin barrier and a more sensitive, reactive immune system. This doesn't just affect the skin, it can also make the airways in the nose and lungs more sensitive. Over time, this sensitivity can show up as sneezing, blocked or runny nose, or wheezing and coughing that point toward asthma.\n\nStudies show that around 1 in 3 children with eczema later develop asthma, compared to a much smaller proportion of children without eczema. This means the risk is higher, but it also means that most children with eczema will not develop asthma.\n\nIf your child has eczema and also coughs frequently, wheezes, or seems short of breath, it's a good idea to talk to your doctor. Catching symptoms early means better care and peace of mind for both you and your child.",
    references: [
      {
        text: "Spergel JM. From atopic dermatitis to asthma: the atopic march. Ann Allergy Asthma Immunol. 2010;105(2):99–106.",
        link: "https://doi.org/10.1016/j.anai.2009.10.002"
      },
      {
        text: "Paller AS, Spergel JM, Mina-Osorio P, Irvine AD. The atopic march and atopic multimorbidity: many trajectories, many pathways. J Allergy Clin Immunol. 2019;143(1):46–55.",
        link: "https://doi.org/10.1016/j.jaci.2018.11.006"
      },
      {
        text: "van der Hulst AE, Klip H, Brand PL. Risk of developing asthma in young children with atopic eczema: a systematic review. J Allergy Clin Immunol. 2007;120(3):565–569.",
        link: "https://doi.org/10.1016/j.jaci.2007.05.042"
      }
    ]
  },
  {
    title: "Why is eczema itchy?",
    slug: "why-is-eczema-itchy",
    content: "One of the hardest parts of eczema is the relentless itch. For many people, the itch feels worse than the rash itself. And when skin is that itchy, scratching can feel impossible to resist. The problem is that scratching only makes things worse. It damages the skin, leading to more dryness, more inflammation, and sometimes infection. This sets off the 'itch–scratch cycle': the more you scratch, the worse the skin becomes, and the itchier it feels.\n\nThis cycle is also one of the main reasons why eczema can disrupt quality of life and sleep. The constant urge to scratch often keeps children awake at night and leaves parents up soothing them. Families describe long nights of tossing, scratching, and crying, which can leave everyone exhausted. Lack of sleep doesn't just affect rest, it impacts mood, focus, school, and daily life. So when people are told to 'just stop scratching,' it can feel frustrating, because it's much easier said than done.\n\nWhy does eczema make the skin so itchy in the first place? It comes down to a combination of skin barrier weakness, nerve sensitivity, and inflammation. A weakened barrier lets moisture escape and irritants enter, making the skin dry and sensitive. At the same time, the immune system becomes more reactive, releasing chemicals that send strong itch signals to the nerves in the skin. This makes even light touches, like clothing rubbing or sweating, feel unbearable.\n\nWhile there's no magic way to 'switch off' the itch, there are steps that can help break the cycle. Daily moisturizing, using fragrance-free skincare, and applying medicated creams during flares can calm the skin. Simple actions, like keeping nails short, using cotton pajamas and bedding, and applying cool compresses, can also help reduce scratching, especially at night.",
    references: [
      {
        text: "Weidinger S, Novak N. Atopic dermatitis. Lancet. 2016;387(10023):1109–1122.",
        link: "https://doi.org/10.1016/S0140-6736(15)00149-X"
      },
      {
        text: "Cevikbas F, Lerner EA. Physiology and pathophysiology of itch. Physiol Rev. 2020;100(3):945–982.",
        link: "https://doi.org/10.1152/physrev.00017.2019"
      },
      {
        text: "Yosipovitch G, Papoiu ADP. What causes itch in atopic dermatitis? Curr Allergy Asthma Rep. 2008;8(4):306–311.",
        link: "https://doi.org/10.1007/s11882-008-0049-z"
      }
    ]
  },
  {
    title: "What food allergies are linked with eczema?",
    slug: "what-food-allergies-are-linked-with-eczema",
    content: "If you or your child have eczema, it's natural to wonder whether food might be making it worse. Many parents describe the frustration of trying to connect flare-ups with meals, and for adults, it can be worrying to suspect a favourite food is the culprit. It often feels easier to assume that food must be driving the rash.\n\nThe truth is more reassuring: eczema is not caused by food allergies. But food can sometimes act as a trigger, especially in children with more severe eczema. Research shows that about one in three children with moderate to severe eczema also have food allergies, but this also means that most children with eczema do not.\n\nThe connection comes down to the skin barrier. When skin is dry and cracked, food proteins from the environment can 'sneak' through and irritate the immune system. This is one reason eczema and food allergies are linked. Yet in most cases, the best place to start managing eczema is not the diet, but the skin. Regular moisturising, gentle cleansing, and anti-inflammatory creams during flares often calm rashes far more effectively than cutting out foods.\n\nThere are situations when food allergy should be considered. If reactions happen quickly after eating, for example, hives, lip swelling, vomiting, or wheezing, it may point to food allergy. In these cases, doctors may suggest testing or a supervised oral food challenge. But broad food panels or removing multiple foods 'just in case' can do more harm than good.\n\nElimination diets are another area where families often search for answers. It's understandable to want to try removing foods, especially when eczema feels relentless. But studies show only small benefits for itch and sleep, while risks include poor nutrition and even higher chances of new allergies if foods are excluded for too long. If elimination is tried, it should be short-term and guided by a dietitian.\n\nFor parents of babies, food can feel especially stressful. The encouraging news is that introducing foods like egg and peanut around 4–6 months, while keeping eczema under control, may actually reduce the risk of allergies.\n\nIf you're worried about food triggers, the safest step is to keep a simple diary of what was eaten, when symptoms appeared, and how the skin looked. Sharing this with your doctor offers far more clarity than trying to manage it alone.",
    references: [
      {
        text: "Christensen MO, Astvad K, Deleuran M, Vestergaard C. The link between food allergy and atopic dermatitis: a systematic review and meta-analysis. J Eur Acad Dermatol Venereol. 2023;37(5):984–1003.",
        link: "https://doi.org/10.1111/jdv.18919"
      },
      {
        text: "Muraro A, Werfel T, Beyer K, et al. EAACI food allergy and atopic dermatitis guidelines: diagnosis and management. Allergy. 2014;69(8):1008–1025.",
        link: "https://doi.org/10.1111/all.12469"
      },
      {
        text: "Oykhman P, Ben-Shoshan M, Abrams EM, et al. Elimination diets in atopic dermatitis: A systematic review and meta-analysis. J Allergy Clin Immunol Pract. 2022;10(10):2657–2666.e8.",
        link: "https://doi.org/10.1016/j.jaip.2022.06.044"
      },
      {
        text: "Natsume O, Kabashima S, Nakazato J, et al. Two-step egg introduction for prevention of egg allergy in high-risk infants with eczema (PETIT): a randomised, double-blind, placebo-controlled trial. Lancet. 2017;389(10066):276–286.",
        link: "https://doi.org/10.1016/S0140-6736(16)31418-0"
      }
    ]
  },
  {
    title: "Can I go swimming with eczema?",
    slug: "can-i-go-swimming-with-eczema",
    content: "Swimming is a wonderful way to stay active and enjoy time with family and friends. But if you or your child has eczema, it's natural to wonder if getting into a pool or the sea will make things worse. The good news is that most people with eczema can still enjoy swimming, as long as they take a few simple precautions.\n\nChlorinated pools can sometimes sting or dry out the skin, especially if it is cracked, while salt water may feel soothing for some but irritating for others. Everyone's skin reacts differently, so it helps to try gently and notice how your skin responds. Interestingly, dermatologists sometimes recommend diluted bleach baths as a treatment for eczema. These contain a tiny amount of bleach in bath water, which helps reduce bacteria on the skin and lower the risk of infection. Swimming in a well-maintained chlorinated pool is not the same, but some people find their skin feels better afterwards, possibly because of a similar antibacterial effect.\n\n**Swimming tips for eczema:**\n\n• Moisturise before swimming: Apply a fragrance-free moisturiser or barrier cream about 30–60 minutes before getting in the water.\n• Rinse off afterwards: Shower straight away to wash away chlorine or salt, then gently pat the skin dry.\n• Moisturise again: Reapply a thick, fragrance-free moisturiser after rinsing.\n• Change quickly: Get out of wet swimwear and into soft, breathable clothing.\n\nIf eczema is very severe, raw, or infected, swimming may be painful and could make symptoms worse. In those situations, it's best to wait until the skin has healed before going back into the water. But eczema doesn't have to keep you or your child away from the pool or sea. With a little preparation and aftercare, swimming can still be safe, enjoyable, and even beneficial. Many families find that once they get into a routine, time in the water becomes part of life and not something to fear.",
    references: [
      {
        text: "Weidinger S, Novak N. Atopic dermatitis. Lancet. 2016;387(10023):1109–1122.",
        link: "https://doi.org/10.1016/S0140-6736(15)00149-X"
      },
      {
        text: "Pennal A, Campione EA, King A, Weinstein M. Atopic Dermatitis Part 2: Management. Pediatr Rev. 2025;46(8):425–436.",
        link: "https://doi.org/10.1542/pir.2024-006587"
      }
    ]
  },
  {
    title: "Is eczema the same as dermatitis?",
    slug: "is-eczema-the-same-as-dermatitis",
    content: "People often hear the words eczema and dermatitis used interchangeably, which can be confusing. The truth is that the two terms are closely related, but they are not exactly the same.\n\nDermatitis is a broad medical term that simply means 'inflammation of the skin.' There are many different types of dermatitis, such as contact dermatitis (caused by irritants or allergens), seborrheic dermatitis (which often affects the scalp and face), and atopic dermatitis.\n\nEczema is most commonly used to describe atopic dermatitis, the chronic, itchy, inflammatory skin condition that often begins in childhood and can continue into adulthood. In everyday conversation, 'eczema' has become the shorthand for this condition. That's why doctors may say 'atopic dermatitis,' while patients and families often just say 'eczema.'\n\nAn easy way to think about it is this: dermatitis is like saying 'fruit,' while eczema is like saying 'apple.' Fruit is the bigger category, and an apple is one type of fruit. In the same way, dermatitis is the broad category, and eczema (atopic dermatitis) is one of the most common types under it.\n\nUnderstanding this difference can help reduce confusion when reading about treatment or hearing advice from different sources. If a healthcare professional uses the term 'dermatitis,' it's worth asking which type they mean, since treatments and triggers may vary.\n\nEczema, whether you call it atopic dermatitis or simply eczema, can still be managed with the same stepwise approach of moisturising daily, treating flares early, and using additional therapies when needed. What matters most is not the label, but finding a care plan that works for you or your child.",
    references: [
      {
        text: "Bieber T. Atopic dermatitis. N Engl J Med. 2008;358(14):1483–1494.",
        link: "https://doi.org/10.1056/NEJMra074081"
      }
    ]
  },
  {
    title: "Is eczema the same as psoriasis?",
    slug: "is-eczema-the-same-as-psoriasis",
    content: "Eczema and psoriasis are two skin conditions that can sometimes look similar, but they are not the same. Both cause red, inflamed, and itchy patches on the skin, which is why they are often confused. However, they are distinct conditions with different underlying causes and treatments.\n\nEczema, also called atopic dermatitis, usually begins in childhood and is linked to a sensitive skin barrier and a reactive immune system. The skin often feels very dry and itchy, with rashes that commonly affect the bends of the elbows and knees, the neck, and the face. Scratching can lead to raw, oozing, or thickened skin.\n\nPsoriasis, on the other hand, is an autoimmune condition where the immune system causes faster cell turnover. Normally, skin cells take about a month to rise to the surface and shed. In psoriasis, this process speeds up to just a few days, leading to a build-up of thick, scaly plaques that are often silvery-white. Imagine, a factory assembly line running too fast, products (skin cells) pile up before they're finished, creating a backlog. That's what happens on the skin in psoriasis.\n\nPsoriasis can appear anywhere, but it commonly affects the scalp, elbows, knees, and lower back. Unlike eczema, psoriasis patches are often less itchy but more sharply defined and scaly.\n\nA simple way to remember it: eczema itches more, psoriasis flakes more. Both conditions can affect quality of life, but their treatments are different. While moisturisers and anti-inflammatory creams are central to eczema care, psoriasis often requires medicines that specifically target the immune system.\n\nIf you're unsure whether you have eczema or psoriasis, it's important to see a healthcare professional for the right diagnosis. Although they can look alike, knowing the difference matters because the treatments are not the same. Both conditions can be managed with the right care, and getting the correct diagnosis is the first step to feeling better.",
    references: [
      {
        text: "Weidinger S, Novak N. Atopic dermatitis. Lancet. 2016;387(10023):1109–1122.",
        link: "https://doi.org/10.1016/S0140-6736(15)00149-X"
      },
      {
        text: "Boehncke WH, Schön MP. Psoriasis. Lancet. 2015;386(9997):983–994.",
        link: "https://doi.org/10.1016/S0140-6736(14)61909-7"
      }
    ]
  },
  {
    title: "Can eczema be prevented in babies?",
    slug: "can-eczema-be-prevented-in-babies",
    content: "One of the most common questions new parents ask is whether eczema can be prevented. The scientific evidence so far is mixed, some studies suggest that daily moisturising from birth may lower the risk of eczema, while others show no clear benefit. What we do know for sure is that baby skin is about five times thinner than adult skin, which makes it more fragile, more prone to dryness, and more easily irritated.\n\nThat's why proper baby skincare is essential. Even if eczema cannot always be prevented, these simple habits help keep your baby's skin healthy, hydrated, and more resilient.\n\n• Bathing, less is more. Newborns only need a bath 2–3 times a week, gradually increasing frequency as they grow. Keep baths short, around 10 minutes, in lukewarm water (not hot), and rinse thoroughly. Use a soap-free, fragrance-free top-to-toe cleanser.\n• Moisturize like you mean it! Apply a fragrance-free cream or ointment (not 'unscented,' and not lotion) to the whole body immediately after bathing, and at least twice a day. This helps lock in moisture and protect the skin barrier.\n• Additional skincare step. If your baby has a doctor's prescription for eczema, apply medication to affected areas before moisturising. For babies with normal skin, a gentle massage with baby oil can help keep skin supple, and make for a lovely bonding routine.\n• Keep baby's bottom happy. Change dirty diapers promptly to prevent diaper rash. Use fragrance-free wipes, and if a rash develops, apply a zinc oxide diaper cream.\n• Dress in soft, breathable fabrics. Choose loose-fitting clothes made of cotton, bamboo, Tencel lyocell, or silk. Cut out scratchy labels, and remember that bedsheets should be soft and breathable too.\n\nWhile we cannot guarantee eczema prevention, these steps give every baby the best start for healthy skin. And if eczema does develop, having good skincare habits already in place makes it much easier to manage. With patience, gentle care, and support, most babies grow up with healthier skin and greater comfort.",
    references: [
      {
        text: "Chalmers JR, Haines RH, Mitchell EJ, et al. Effectiveness and cost-effectiveness of daily all-over-body application of emollient during the first year of life for preventing atopic eczema in high-risk children (BEEP): randomised controlled trial. Lancet. 2020;395(10228):962–972.",
        link: "https://doi.org/10.1016/S0140-6736(19)32984-8"
      },
      {
        text: "Skjerven HO, Rehbinder EM, Vettukattil R, et al. Skin emollient and early complementary feeding to prevent infant atopic dermatitis (PreventADALL): a factorial, multicentre, cluster-randomised trial. Lancet. 2020;395(10228):951–961.",
        link: "https://doi.org/10.1016/S0140-6736(19)32979-4"
      }
    ]
  },
  {
    title: "Eczema during pregnancy",
    slug: "eczema-during-pregnancy",
    content: "Pregnancy brings so many changes, some wonderful and some challenging. For many women, those changes also show up on the skin. Eczema is one of the most common skin conditions seen in pregnancy, and it can appear for the first time or flare up after years of being quiet.\n\nWhen I was pregnant, our cat scratched me and that tiny scratch triggered eczema that lasted through the rest of my pregnancy. It reminded me just how sensitive skin can become at this time, and how something small can snowball into weeks of irritation. If you've ever found yourself wondering why your skin feels more fragile than usual, you're not alone.\n\nThe reason lies in the way pregnancy changes both hormones and the immune system. These shifts can make the skin barrier weaker and more reactive, leading to dryness, itching, and inflammation. For some women, this means new rashes. For others, it means flare-ups of eczema that were already there.\n\nThe good news is that most of the mainstay treatments are safe in pregnancy. Fragrance-free moisturisers and mild topical steroid creams can still be used under medical guidance. Daily habits, like applying moisturiser often, taking lukewarm baths instead of hot ones, choosing soft cotton clothes, and avoiding strong fragrances, help keep the skin calmer. If stronger treatments are ever needed, your dermatologist or obstetrician will work with you to balance safety and comfort.\n\nLiving with eczema during pregnancy isn't easy. The itch can keep you awake at night, and the constant discomfort can make an already demanding season feel harder. But it's important to remember: you are not alone, and with the right care, most women manage their eczema safely through pregnancy while protecting their baby's health.",
    references: [
      {
        text: "Vaughan Jones SA, Black RM, Marks R. Eczema in pregnancy. BMJ. 2008;336(7650):1256–1260.",
        link: "https://doi.org/10.1136/bmj.39227.671227.AE"
      },
      {
        text: "Chi CC, Kirtschig G. Safety of topical corticosteroids in pregnancy. Cochrane Database Syst Rev. 2016;(10):CD007346.",
        link: "https://doi.org/10.1002/14651858.CD007346.pub3"
      }
    ]
  }
];
