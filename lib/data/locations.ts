export interface LocationData {
  slug: string;
  city: string;
  state: string;
  hero: {
    h1: string;
    h2: string;
    supportLine: string;
  };
  problem: {
    title: string;
    p1: string;
    p2: string;
  };
  approach: {
    title: string;
    p1: string;
    p2: string;
  };
  howItWorks: {
    title: string;
    steps: string[];
    closing: string;
  };
  session: {
    title: string;
    features: string[];
    closing: string;
  };
  whoWeHelp: {
    title: string;
    items: string[];
  };
  servingFamilies: {
    title: string;
    p1: string;
    p2: string;
  };
  cta: {
    title: string;
    p1: string;
    buttonText: string;
  };
}

const baseData = {
  hero: {
    h2: "We Find the Why—Then We Train the Brain",
    supportLine: "25 Minutes of Tutoring + 15 Minutes of Brain Training",
  },
  howItWorks: {
    title: "How Maze Minds Works",
    steps: [
      "Identify the learning gap",
      "Build the skill through tutoring",
      "Strengthen the brain through targeted exercises"
    ],
    closing: "Each session is structured for real results—not just homework help."
  },
  session: {
    title: "What Happens in Each Session",
    features: [
      "25 minutes of academic tutoring",
      "15 minutes of brain training",
      "100% personalized instruction"
    ],
    closing: "This structure helps students not only learn the material—but actually retain and apply it."
  },
  cta: {
    title: "Ready to Help Your Child Succeed?",
    p1: "If your child is struggling, the right support can make all the difference.",
    buttonText: "Book a Session Today"
  }
};

export const locations: Record<string, LocationData> = {
  arlington: {
    slug: "arlington",
    city: "Arlington",
    state: "TX",
    hero: {
      h1: "1-on-1 Reading & Math Tutoring for Kids in Arlington, TX",
      ...baseData.hero
    },
    problem: {
      title: "Is your child struggling in school?",
      p1: "Many students in Arlington, TX struggle with reading, math, or focus—not because they aren’t capable, but because the way they learn hasn’t been fully understood.",
      p2: "If your child gets frustrated with homework, reads but doesn’t comprehend, struggles with math concepts, or has ADHD, dyslexia, or learning differences, you’re not alone—and there’s a better way to help."
    },
    approach: {
      title: "A Different Approach to Tutoring in Arlington, TX",
      p1: "At Maze Minds, we go beyond traditional tutoring. Instead of only focusing on schoolwork, we identify how your child learns and strengthen the cognitive skills that support real understanding.",
      p2: "Every session includes targeted academic instruction, brain-based learning strategies, and personalized support tailored to your child."
    },
    howItWorks: baseData.howItWorks,
    session: baseData.session,
    whoWeHelp: {
      title: "Who We Help in Arlington, TX",
      items: [
        "Students struggling in reading or math",
        "Students with ADHD or attention challenges",
        "Students with dyslexia or learning differences",
        "Students who need more confidence"
      ]
    },
    servingFamilies: {
      title: "Serving Families in Arlington, TX",
      p1: "We proudly support students and families in Arlington, TX and surrounding areas with high-quality virtual tutoring designed to meet each learner’s unique needs.",
      p2: "Whether your child attends public, private, or homeschool programs, we provide personalized support that fits your schedule."
    },
    cta: baseData.cta
  },
  dallas: {
    slug: "dallas",
    city: "Dallas",
    state: "TX",
    hero: {
      h1: "1-on-1 Reading & Math Tutoring for Kids in Dallas, TX",
      ...baseData.hero
    },
    problem: {
      title: "Is your child struggling in school?",
      p1: "Many students in Dallas, TX struggle with reading, math, or focus—not because they aren’t capable, but because the way they learn hasn’t been fully understood.",
      p2: "If your child gets frustrated with homework, reads but doesn’t comprehend, struggles with math concepts, or has ADHD, dyslexia, or learning differences, you’re not alone—and there’s a better way to help."
    },
    approach: {
      title: "A Different Approach to Tutoring in Dallas, TX",
      p1: "At Maze Minds, we go beyond traditional tutoring. Instead of only focusing on schoolwork, we identify how your child learns and strengthen the cognitive skills that support real understanding.",
      p2: "Every session includes targeted academic instruction, brain-based learning strategies, and personalized support tailored to your child."
    },
    howItWorks: baseData.howItWorks,
    session: baseData.session,
    whoWeHelp: {
      title: "Who We Help in Dallas, TX",
      items: [
        "Students struggling in reading or math",
        "Students with ADHD or attention challenges",
        "Students with dyslexia or learning differences",
        "Students who need more confidence"
      ]
    },
    servingFamilies: {
      title: "Serving Families in Dallas, TX",
      p1: "We proudly support students and families in Dallas, TX and surrounding areas with high-quality virtual tutoring designed to meet each learner’s unique needs.",
      p2: "Whether your child attends public, private, or homeschool programs, we provide personalized support that fits your schedule."
    },
    cta: baseData.cta
  },
  "fort-worth": {
    slug: "fort-worth",
    city: "Fort Worth",
    state: "TX",
    hero: {
      h1: "1-on-1 Reading & Math Tutoring for Kids in Fort Worth, TX",
      ...baseData.hero
    },
    problem: {
      title: "Is your child struggling in school?",
      p1: "Many students in Fort Worth, TX struggle with reading, math, or focus—not because they aren’t capable, but because the way they learn hasn’t been fully understood.",
      p2: "If your child gets frustrated with homework, reads but doesn’t comprehend, struggles with math concepts, or has ADHD, dyslexia, or learning differences, you’re not alone—and there’s a better way to help."
    },
    approach: {
      title: "A Different Approach to Tutoring in Fort Worth, TX",
      p1: "At Maze Minds, we go beyond traditional tutoring. Instead of only focusing on schoolwork, we identify how your child learns and strengthen the cognitive skills that support real understanding.",
      p2: "Every session includes targeted academic instruction, brain-based learning strategies, and personalized support tailored to your child."
    },
    howItWorks: baseData.howItWorks,
    session: baseData.session,
    whoWeHelp: {
      title: "Who We Help in Fort Worth, TX",
      items: [
        "Students struggling in reading or math",
        "Students with ADHD or attention challenges",
        "Students with dyslexia or learning differences",
        "Students who need more confidence"
      ]
    },
    servingFamilies: {
      title: "Serving Families in Fort Worth, TX",
      p1: "We proudly support students and families in Fort Worth, TX and surrounding areas with high-quality virtual tutoring designed to meet each learner’s unique needs.",
      p2: "Whether your child attends public, private, or homeschool programs, we provide personalized support that fits your schedule."
    },
    cta: baseData.cta
  },
  frisco: {
    slug: "frisco",
    city: "Frisco",
    state: "TX",
    hero: {
      h1: "1-on-1 Reading & Math Tutoring for Kids in Frisco, TX",
      ...baseData.hero
    },
    problem: {
      title: "Is your child struggling in school?",
      p1: "Many students in Frisco, TX struggle with reading, math, or focus—not because they aren’t capable, but because the way they learn hasn’t been fully understood.",
      p2: "If your child gets frustrated with homework, reads but doesn’t comprehend, struggles with math concepts, or has ADHD, dyslexia, or learning differences, you’re not alone—and there’s a better way to help."
    },
    approach: {
      title: "A Different Approach to Tutoring in Frisco, TX",
      p1: "At Maze Minds, we go beyond traditional tutoring. Instead of only focusing on schoolwork, we identify how your child learns and strengthen the cognitive skills that support real understanding.",
      p2: "Every session includes targeted academic instruction, brain-based learning strategies, and personalized support tailored to your child."
    },
    howItWorks: baseData.howItWorks,
    session: baseData.session,
    whoWeHelp: {
      title: "Who We Help in Frisco, TX",
      items: [
        "Students struggling in reading or math",
        "Students with ADHD or attention challenges",
        "Students with dyslexia or learning differences",
        "Students who need more confidence"
      ]
    },
    servingFamilies: {
      title: "Serving Families in Frisco, TX",
      p1: "We proudly support students and families in Frisco, TX and surrounding areas with high-quality virtual tutoring designed to meet each learner’s unique needs.",
      p2: "Whether your child attends public, private, or homeschool programs, we provide personalized support that fits your schedule."
    },
    cta: baseData.cta
  },
  plano: {
    slug: "plano",
    city: "Plano",
    state: "TX",
    hero: {
      h1: "1-on-1 Reading & Math Tutoring for Kids in Plano, TX",
      ...baseData.hero
    },
    problem: {
      title: "Is your child struggling in school?",
      p1: "Many students in Plano, TX struggle with reading, math, or focus—not because they aren’t capable, but because the way they learn hasn’t been fully understood.",
      p2: "If your child gets frustrated with homework, reads but doesn’t comprehend, struggles with math concepts, or has ADHD, dyslexia, or learning differences, you’re not alone—and there’s a better way to help."
    },
    approach: {
      title: "A Different Approach to Tutoring in Plano, TX",
      p1: "At Maze Minds, we go beyond traditional tutoring. Instead of only focusing on schoolwork, we identify how your child learns and strengthen the cognitive skills that support real understanding.",
      p2: "Every session includes targeted academic instruction, brain-based learning strategies, and personalized support tailored to your child."
    },
    howItWorks: baseData.howItWorks,
    session: baseData.session,
    whoWeHelp: {
      title: "Who We Help in Plano, TX",
      items: [
        "Students struggling in reading or math",
        "Students with ADHD or attention challenges",
        "Students with dyslexia or learning differences",
        "Students who need more confidence"
      ]
    },
    servingFamilies: {
      title: "Serving Families in Plano, TX",
      p1: "We proudly support students and families in Plano, TX and surrounding areas with high-quality virtual tutoring designed to meet each learner’s unique needs.",
      p2: "Whether your child attends public, private, or homeschool programs, we provide personalized support that fits your schedule."
    },
    cta: baseData.cta
  }
};

export const getLocationSlugs = () => Object.keys(locations);
export const getLocationData = (slug: string) => locations[slug] || null;
