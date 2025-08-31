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
    content: "Eczema, also known as atopic dermatitis, affects an estimated 204 million people worldwide—around 101 million adults and 103 million children [1]. If you are living with eczema, you are far from alone.\n\nIt is a long-term skin condition that makes the skin red, dry, and intensely itchy. These rashes tend to flare and settle over time. The severity of eczema is usually assessed and categorized as mild, moderate, or severe, depending on how much of the skin is affected and how intense the itching becomes [2]. Beyond the skin itself, eczema can seriously affect sleep, mood, and overall quality of life [2].\n\nAlthough eczema is not contagious, it can run in families and be influenced by genetics [3]. This is why doctors often diagnose eczema by examining the skin, asking about symptoms such as dry itchy patches, typical locations like the creases of the elbows and knees, and any family history of allergies or asthma.\n\nBecause other skin conditions can look similar, it is always a good idea to see a healthcare professional if your eczema spreads, becomes very painful, or shows signs of infection (such as yellow crusting, pus, or worsening redness).",
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
    content: "Eczema doesn't have one single cause. Instead, it develops from a combination of genetics, skin barrier weakness, immune changes, and environmental triggers. Here are the five main reasons:\n\n**Genes — it runs in families.**\nIf one parent has eczema, asthma, or allergies, their child has about a 50% chance of developing one of these conditions. If both parents are affected, the likelihood increases to as much as 80% [1].\n\n**Broken skin barrier.**\nMany people with eczema have a weakened skin barrier, often linked to changes in the filaggrin gene. This allows water to escape and lets irritants or allergens enter, which can trigger flare-ups [2].\n\n**Overactive immune system.**\nIn eczema, the immune system reacts too strongly, driving inflammation that causes the redness and intense itching seen during flares [3].\n\n**Triggers at home.**\nEveryday things can worsen eczema, including dust mites, pet dander, certain foods, scratchy fabrics, harsh or fragranced detergents, and unsuitable skincare routines [3].\n\n**Environmental triggers.**\nSudden changes in temperature, humidity, dry air, pollution, pollen, smoke, or sweat can damage the skin barrier and worsen dryness, making flares more likely [3].\n\nIn short, eczema happens when a vulnerable skin barrier meets an overactive immune system, with genetics and everyday triggers combining to cause flare-ups.",
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
    content: "Living with eczema can feel overwhelming at times, but the good news is that it can usually be managed with the right care. Treatment depends on whether eczema is mild, moderate, or severe, and it often works best when taken step by step [1,2].\n\n**Step 1: Daily skin care – the foundation**\nThe first and most important step is to repair and protect the skin barrier. This means:\n• Applying fragrance-free moisturisers at least once or twice a day, and always after bathing.\n• Using gentle, non-soap cleansers that don't strip the skin.\n• Avoiding common irritants like harsh detergents, strong fragrances, or rough fabrics such as wool.\n\nThese small, everyday habits make a big difference over time.\n\n**Step 2: Treat flare-ups quickly**\nEven with the best care, flare-ups can still happen. When the skin turns red, itchy, and inflamed, anti-inflammatory creams are often needed. These may be steroid creams or non-steroid options prescribed by a doctor. Using them early can help calm the skin before it gets worse.\n\n**Step 3: Extra help for severe eczema**\nWhen eczema is more severe, it can be especially tough on comfort, confidence, and sleep. In these cases, doctors may recommend additional treatments to bring relief:\n• **Wet wrap therapy**: Moisturiser and medicated cream are applied, then the skin is wrapped in a damp layer of bandages or clothing, with a dry layer on top. This locks in moisture, boosts absorption of treatment, and soothes the itch.\n• **Bleach baths**: Very dilute bleach baths (a tiny amount of household bleach in a full tub of water) can help reduce bacteria on the skin and lower the risk of infection [3].\n\n**Step 4: Specialist treatments**\nFor people whose eczema stays severe despite these steps, other options may be needed:\n• Light therapy (phototherapy), using controlled ultraviolet light in a clinic.\n• Stronger medicines that work on the whole body's immune system, prescribed by dermatology specialists.\n\n**The bottom line**\nEczema doesn't have a quick fix, but it can be managed. For most people, consistent moisturising and treating flares early make the biggest difference. With extra steps like wet wraps or bleach baths when needed, and specialist support for more severe cases, eczema can usually be controlled so that skin feels calmer and life feels a little easier.",
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
    content: "At present, there is no permanent cure for eczema [1,2]. This is because the condition is driven by a combination of genes, a weakened skin barrier, and changes in the immune system, which cannot yet be reversed.\n\nThat said, many children \"grow out\" of eczema as they get older. Research shows that some children experience long periods of remission, but for others, symptoms may return in adulthood [3]. For families, this means that while the condition may improve over time, eczema should still be monitored and managed carefully.\n\nThe future of eczema care is encouraging. Scientists are exploring how to prevent eczema in babies by strengthening the skin barrier early in life, while an expanding pipeline of new treatments is being developed to target the disease more precisely. These include therapies that act directly on immune pathways and approaches that aim to restore balance to the skin microbiome [4]. Such research may not provide a cure yet, but it is moving us closer to longer-lasting solutions.\n\nSo while eczema cannot be cured at present, there is reason for optimism. With today's treatments, most people can keep their symptoms under control and live well—and with ongoing research, tomorrow may bring breakthroughs that offer even greater hope.\n\n**Can eczema be triggered by stress?**\n\nYes, stress can trigger eczema flare-ups or make existing symptoms worse [5,6]. Stress affects the body in many ways, including the skin. When you are under pressure, your body produces stress hormones like cortisol. In small amounts, cortisol helps the body respond to challenges, but when stress is ongoing, these hormones can disrupt the skin barrier and immune system, making eczema more likely to flare.\n\nMany people notice that their eczema feels itchier or redder during stressful periods, such as exams, work deadlines, or major life changes. The itching itself can also cause more stress, creating a cycle of flare-ups and frustration [7].\n\nManaging stress is an important part of eczema care. A recent survey of 120 dermatologists and psychologists identified the top five recommendations to improve wellbeing:\n• Optimize sleep\n• Meditate or use relaxation techniques\n• Go outdoors and move\n• Take time off or a break from routine\n• Reconnect with loved ones [8]\n\nThese strategies do not replace medical treatment for eczema, but they can reduce stress and break the itch–scratch cycle, supporting healthier skin in the long run.",
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
        link: ""
      },
      {
        text: "Arndt J, Smith N, Tausk F. Stress and atopic dermatitis. Curr Allergy Asthma Rep. 2008;8:312–317.",
        link: ""
      },
      {
        text: "Kimyai-Asadi A, Usman A. The role of psychological stress in skin disease. J Cutan Med Surg. 2001;5(2):140–145.",
        link: "https://doi.org/10.1177/120347540100500208"
      },
      {
        text: "Linnet J, Jemec GB. Anxiety level and severity of skin condition predict symptoms in patients with atopic dermatitis. Clin Exp Dermatol. 2001;26(4):632–635.",
        link: ""
      },
      {
        text: "Anwar SS, Apolinar MA, Ma L. Perception, understanding, and association between psychological stress and skin aging: Quantitative surveys of Asian women aged 18–34 years, dermatologists, and psychologists in China and Japan. J Cosmet Dermatol. 2023;22(8):2297–2307.",
        link: ""
      }
    ]
  }
];
