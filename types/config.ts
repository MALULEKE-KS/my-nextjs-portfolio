import { z } from "zod";

export const SocialLinkSchema = z.object({
  type: z.enum(["linkedin", "github", "email", "whatsapp", "website"]),
  label: z.string(),
  url: z.string()
});

export const ProfileSchema = z.object({
  name: z.string(),
  portraitSrc: z.string().optional(),
  portraitAlt: z.string().optional(),
  titles: z.array(z.string()),
  tagline: z.string(),
  summary: z.string(),
  education: z.object({
    degree: z.string(),
    institution: z.string(),
    status: z.string()
  }).optional(),
  location: z.string(),
  openToWork: z.boolean().default(false),
  openToWorkLabel: z.string().default("Open to work"),
  organizations: z.array(
    z.object({
      name: z.string(),
      role: z.string(),
      description: z.string(),
      periodLabel: z.string().optional()
    })
  ),
  socialLinks: z.array(SocialLinkSchema),
  quickLinks: z.array(
    z.object({
      label: z.string(),
      href: z.string(),
      variant: z.enum(["primary", "secondary"]).default("primary")
    })
  ).optional(),
  atAGlance: z.array(z.string()).optional(),
  industries: z.array(z.string()).optional(),
  whatICanBuild: z.string().optional(),
  currentFocus: z.object({
    quarter: z.string(),
    areas: z.array(z.object({
      title: z.string(),
      description: z.string()
    }))
  }).optional(),
  liveWork: z.array(z.object({
    name: z.string(),
    description: z.string(),
    url: z.string(),
    type: z.enum(["external", "internal"]).default("external")
  })).optional()
});

export const FlagshipSystemSchema = z.object({
  id: z.string(),
  name: z.string(),
  lucideIcon: z.string().default("Layers"),
  badgeColor: z.string(),
  status: z.enum(["active-development", "design-complete", "planned"]),
  shortDescription: z.string(),
  longDescription: z.string(),
  problem: z.string(),
  solution: z.string(),
  architecture: z.string(),
  architectureDiagramSrc: z.string().optional(),
  architectureDiagramCaption: z.string().optional(),
  stack: z.array(z.string()),
  phase: z.string(),
  links: z.array(
    z.object({
      label: z.string(),
      url: z.string().url()
    })
  )
});

export const FlagshipSystemsConfigSchema = z.object({
  systems: z.array(FlagshipSystemSchema)
});

export const TechStackItemSchema = z.object({
  name: z.string(),
  badgeColor: z.string().optional(),
  description: z.string().optional()
});

export const TechStackCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  lucideIcon: z.string().default("Layers"),
  items: z.array(TechStackItemSchema)
});

export const TechStackConfigSchema = z.object({
  categories: z.array(TechStackCategorySchema)
});

export const ContactConfigSchema = z.object({
  primaryEmail: z.string().email(),
  whatsappLink: z.string().url(),
  linkedinUrl: z.string().url(),
  githubUrl: z.string().url()
});

export const NavigationItemSchema = z.object({
  id: z.string(),
  label: z.string(),
  icon: z.string(),
  href: z.string(),
  roles: z.array(z.string()),
  group: z.enum(["primary", "secondary"])
});

export const NavigationConfigSchema = z.object({
  items: z.array(NavigationItemSchema)
});

const TrustStripItemSchema = z.object({
  label: z.string(),
  value: z.string(),
  href: z.string().optional()
});

const HomeTeaserSchema = z.object({
  kicker: z.string(),
  title: z.string(),
  body: z.string(),
  ctaLabel: z.string(),
  href: z.string(),
  lucideIcon: z.string().default("Layers")
});

const FeaturedFlagshipHomeSchema = z.object({
  kicker: z.string(),
  headline: z.string(),
  systemId: z.string(),
  problem: z.string(),
  solution: z.string(),
  result: z.string(),
  ctaLabel: z.string()
});

const CurrentFocusItemSchema = z.object({
  title: z.string(),
  description: z.string()
});

const HomeCopySchema = z.object({
  heroHeadline: z.string(),
  heroSubline: z.string(),
  heroBadgeLabel: z.string(),
  heroBadgeLucide: z.string().default("Sparkles"),
  heroKicker: z.string(),
  heroMetricLabel: z.string(),
  heroMetricValue: z.string(),
  heroAsideTitle: z.string().optional(),
  heroAsideBody: z.string().optional(),
  primaryCtaLabel: z.string(),
  primaryCtaHref: z.string(),
  secondaryCtaLabel: z.string().optional(),
  secondaryCtaHref: z.string().optional(),
  tertiaryCtaLabel: z.string().optional(),
  tertiaryCtaHref: z.string().optional(),
  trustStrip: z.object({
    items: z.array(TrustStripItemSchema).min(1).max(8)
  }),
  featuredFlagship: FeaturedFlagshipHomeSchema,
  heroScrollHint: z.string(),
  heroFooterNote: z.string(),
  narrative: z.object({
    kicker: z.string(),
    title: z.string(),
    lucideIcon: z.string().default("BookOpen"),
    paragraphs: z.array(z.string())
  }),
  teasersSection: z.object({
    kicker: z.string(),
    title: z.string(),
    description: z.string().optional()
  }),
  teasers: z.object({
    flagship: HomeTeaserSchema,
    stack: HomeTeaserSchema
  }),
  whatBuildSection: z.object({
    kicker: z.string(),
    title: z.string(),
    description: z.string().optional()
  }).optional(),
  currentFocusSection: z.object({
    kicker: z.string(),
    title: z.string(),
    items: z.array(CurrentFocusItemSchema)
  }).optional(),
  liveWorkSection: z.object({
    kicker: z.string(),
    title: z.string(),
    description: z.string().optional()
  }).optional()
});

const SectionCopySchema = z.object({
  kicker: z.string(),
  title: z.string(),
  description: z.string().optional(),
  body: z.string().optional(),
  subbody: z.string().optional()
});

export const ThemeConfigSchema = z.object({
  accentColor: z.string(),
  background: z.object({
    base: z.string(),
    muted: z.string(),
    card: z.string()
  }),
  text: z.object({
    primary: z.string(),
    secondary: z.string()
  }),
  home: HomeCopySchema,
  sections: z.object({
    profile: SectionCopySchema,
    capabilities: SectionCopySchema,
    flagship: SectionCopySchema,
    stack: SectionCopySchema,
    contact: SectionCopySchema
  }),
  hero: z.object({
    backgroundImage: z.object({
      desktop: z.string(),
      mobile: z.string(),
      fallback: z.string()
    }),
    backgroundAlt: z.string(),
    backgroundSize: z.string(),
    backgroundPosition: z.string(),
    overlay: z.object({
      color: z.string(),
      opacity: z.number(),
      blur: z.boolean().optional()
    })
  }),
  footer: z.object({
    backgroundImage: z.string().optional(),
    backgroundAlt: z.string().optional(),
    backgroundSize: z.string().optional(),
    backgroundPosition: z.string().optional(),
    overlay: z
      .object({
        color: z.string(),
        opacity: z.number()
      })
      .optional()
  })
});

export const FeaturesConfigSchema = z.object({
  showGitHubAnalytics: z.boolean(),
  showFuturePlatformsNote: z.boolean(),
  enablePwa: z.boolean()
});

export const ApiConfigSchema = z.object({
  baseUrl: z.string().url(),
  useMockApi: z.boolean()
});

export type Profile = z.infer<typeof ProfileSchema>;
export type FlagshipSystem = z.infer<typeof FlagshipSystemSchema>;
export type FlagshipSystemsConfig = z.infer<typeof FlagshipSystemsConfigSchema>;
export type TechStackCategory = z.infer<typeof TechStackCategorySchema>;
export type TechStackConfig = z.infer<typeof TechStackConfigSchema>;
export type ContactConfig = z.infer<typeof ContactConfigSchema>;
export type NavigationItem = z.infer<typeof NavigationItemSchema>;
export type NavigationConfig = z.infer<typeof NavigationConfigSchema>;
export type ThemeConfig = z.infer<typeof ThemeConfigSchema>;
export type FeaturesConfig = z.infer<typeof FeaturesConfigSchema>;
export type ApiConfig = z.infer<typeof ApiConfigSchema>;

export const MethodologySectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string()
});

export const MethodologyConfigSchema = z.object({
  pageTitle: z.string(),
  pageDescription: z.string(),
  intro: z.string(),
  sections: z.array(MethodologySectionSchema),
  repoUrl: z.string().url().optional()
});

export const CapabilityGroupSchema = z.object({
  id: z.string(),
  title: z.string(),
  items: z.array(z.string())
});

export const CapabilitiesConfigSchema = z.object({
  kicker: z.string(),
  title: z.string(),
  description: z.string().optional(),
  groups: z.array(CapabilityGroupSchema),
  stackCtaLabel: z.string(),
  stackHref: z.string()
});

export type MethodologyConfig = z.infer<typeof MethodologyConfigSchema>;
export type CapabilitiesConfig = z.infer<typeof CapabilitiesConfigSchema>;
