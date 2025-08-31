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
    content: "Eczema, also known as atopic dermatitis, affects about 204 million people worldwide [1]. It is a long‑term, inflammatory skin condition that makes the skin red, dry, and very itchy. Flares tend to come and go, and severity is assessed as mild, moderate, or severe. Eczema doesn't just affect the skin—it can disrupt sleep, mood, and quality of life. Although it is not contagious, it can run in families and is linked with allergies and asthma [2].\n\nDoctors diagnose eczema by examining the skin, asking about symptoms such as dry, itchy patches, typical locations (like the creases of elbows and knees), and family history of allergies or asthma. Because other skin conditions can look similar, it's a good idea to see a healthcare professional if eczema spreads, becomes very painful, or shows signs of infection.",
    references: [
      {
        text: "Tian J, Zhang D, Yang Y, Huang Y, Wang L, Yao X, Lu Q. Global epidemiology of atopic dermatitis: a comprehensive systematic analysis and modelling study. Br J Dermatol. 2024;190(1):55‑61.",
        link: "https://doi.org/10.1093/bjd/ljad339"
      },
      {
        text: "Weidinger S, Novak N. Atopic dermatitis. Lancet. 2016;387(10023):1109‑1122.",
        link: "https://doi.org/10.1016/S0140-6736(15)00149-X"
      }
    ]
  },
  {
    title: "What causes eczema?",
    slug: "what-causes-eczema",
    content: "Eczema has more than one cause. Several things usually add up over time:\n\n1) **Genes**. Eczema often runs in families. If one parent has eczema, allergies, or asthma, a child has a higher chance of developing it; if both parents do, the chance is even higher [1].\n2) **A weaker skin barrier**. When the skin barrier is \"leaky,\" moisture escapes and irritants get in, which can trigger flares. Everyday products—soaps, shampoos, laundry detergents, and cleaning sprays—can strip and weaken the barrier and make flares more likely [1].\n3) **Sensitive, reactive immune system and microbiome changes**. Eczema skin is prone to an imbalance in the skin's microbes and often has more of the bacteria *Staphylococcus aureus*. This, together with a more reactive immune response, drives redness and itching.\n4) **Triggers at home**. A trigger can spark a new flare or worsen existing eczema. Common ones include dust mites, pet dander, some foods, certain fabrics, fragranced detergents, and insufficient or unsuitable skincare.\n5) **Environment and stress**. Sudden changes in temperature or humidity, dry air, pollution, pollen, smoke, sweat—and stress—can all worsen the skin and trigger inflammation.\n\nNot everyone reacts to the same things, and you don't need to remove everything at once. Start with gentle skincare, moisturise daily, and avoid obvious irritants; then work with your clinician to identify personal triggers.",
    references: [
      {
        text: "Irvine AD, McLean WHI, Leung DYM. Filaggrin mutations associated with skin barrier dysfunction and atopic dermatitis. N Engl J Med. 2011;365(14):1315‑1327.",
        link: "https://doi.org/10.1056/NEJMra1011040"
      },
      {
        text: "Byrd AL, Deming C, Cassidy SKB, et al. Staphylococcus aureus and Staphylococcus epidermidis strain diversity underlying pediatric atopic dermatitis. Sci Transl Med. 2017;9(397):eaal4651.",
        link: "https://doi.org/10.1126/scitranslmed.aal4651"
      },
      {
        text: "Arndt J, Smith N, Tausk F. Stress and atopic dermatitis. Curr Allergy Asthma Rep. 2008;8(4):312‑317.",
        link: "https://doi.org/10.1007/s11882-008-0050-6"
      }
    ]
  },
  {
    title: "Is there a cure for eczema?",
    slug: "is-there-a-cure-for-eczema",
    content: "Short answer: **No**. There is no definitive cure for eczema. The goal of care is to control symptoms, reduce flare‑ups, and improve comfort and sleep. What works best depends on how mild, moderate, or severe the eczema is. Daily moisturising and gentle cleansing form the base. During flares, anti‑inflammatory creams calm the skin. For more severe eczema, extra steps—such as wet wraps, very dilute bleach baths, light therapy, or specialist medicines—may be needed [1‑3].\n\nResearch is moving fast, and newer targeted treatments are helping many people with severe eczema. While these do not \"cure\" eczema, they can make day‑to‑day life much easier.",
    references: [
      {
        text: "Weidinger S, Novak N. Atopic dermatitis. Lancet. 2016;387(10023):1109‑1122.",
        link: "https://doi.org/10.1016/S0140-6736(15)00149-X"
      },
      {
        text: "Simpson EL, Paller AS, Siegfried EC, et al. Efficacy and Safety of Dupilumab in Adolescents With Uncontrolled Moderate to Severe Atopic Dermatitis: A Phase 3 Randomized Clinical Trial. JAMA Dermatol. 2020;156(1):44‑56.",
        link: "https://doi.org/10.1001/jamadermatol.2019.3336"
      },
      {
        text: "Pennal A, Campione EA, King A, Weinstein M. Atopic Dermatitis Part 2: Management. Pediatr Rev. 2025;46(8):425‑436.",
        link: "https://doi.org/10.1542/pir.2024-006587"
      }
    ]
  },
  {
    title: "How is eczema treated?",
    slug: "how-is-eczema-treated",
    content: "Living with eczema can feel overwhelming, but it can usually be managed with the right care. Treatment depends on whether eczema is **mild, moderate, or severe**, and it often works best when taken step by step [1,2].\n\n**Step 1: Daily skin care – the foundation.** Apply fragrance‑free moisturisers at least once or twice daily (always after bathing), use gentle non‑soap cleansers, and avoid irritants like harsh detergents, strong fragrances, or rough fabrics such as wool.\n\n**Step 2: Treat flares early.** When skin turns red, itchy, and inflamed, anti‑inflammatory creams (steroid or non‑steroid options prescribed by your doctor) help calm the skin and prevent worsening.\n\n**Step 3: Extra help for severe eczema.** Wet wrap therapy (moisturiser and medicated cream under a damp then dry layer) boosts absorption and soothes itch. Very dilute bleach baths can reduce skin bacteria and lower infection risk [3].\n\n**Step 4: Specialist treatments.** If eczema stays severe despite these steps, options like clinic‑based light therapy or stronger medicines that work on the whole immune system may be considered by a dermatologist.\n\nMost people do best with consistent moisturising and early flare control, adding the next step only if needed.",
    references: [
      {
        text: "Weidinger S, Novak N. Atopic dermatitis. Lancet. 2016;387(10023):1109‑1122.",
        link: "https://doi.org/10.1016/S0140-6736(15)00149-X"
      },
      {
        text: "Sidbury R, Davis DM, Cohen DE, et al. Guidelines of care for the management of atopic dermatitis: phototherapy and systemic agents. J Am Acad Dermatol. 2014;71(2):327‑349.",
        link: "https://doi.org/10.1016/j.jaad.2014.03.030"
      },
      {
        text: "Pennal A, Campione EA, King A, Weinstein M. Atopic Dermatitis Part 2: Management. Pediatr Rev. 2025;46(8):425‑436.",
        link: "https://doi.org/10.1542/pir.2024-006587"
      }
    ]
  },
  {
    title: "Can eczema be cured?",
    slug: "can-eczema-be-cured",
    content: "Eczema cannot be cured, but it can be controlled. For many children, symptoms improve with age; for others, eczema continues into the teen years or adulthood. A large review suggests a substantial proportion—around one in three—have persistent disease over time [1].\n\nTreatment keeps improving. Newer targeted medicines are expanding options for people with severe eczema and have helped many live more comfortably [2]. Even so, the day‑to‑day basics—moisturising, avoiding irritants, and treating flares early—remain the backbone of care.",
    references: [
      {
        text: "Kim JP, Chao LX, Simpson EL, Silverberg JI. Persistence of atopic dermatitis: a systematic review and meta‑analysis. J Am Acad Dermatol. 2016;75(4):681‑687.e11.",
        link: "https://doi.org/10.1016/j.jaad.2016.05.028"
      },
      {
        text: "Bieber T. Atopic dermatitis: an expanding therapeutic pipeline for a complex disease. Nat Rev Drug Discov. 2022;21:21‑40.",
        link: "https://doi.org/10.1038/s41573-021-00266-6"
      }
    ]
  }
];
