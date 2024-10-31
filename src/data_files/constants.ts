import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "H. mondal",
  tagline: "_think Deeply, learn Constantly, live Fully_",
  description: "I'm H. Mondal, a passionate STEM student and founder of STEAMer Academy. Explore my projects and resources aimed at inspiring creativity and innovation.",
  description_short: "I'm H. Mondal, a STEM student inspiring innovation in Math and Technology",
  url: "https://hmondal.vercel.app/",
  author: "H. Mondal",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : A Curious Learner..`,
  description: "I'm H. Mondal, a STEM student inspiring innovation in Math and Technology",
  image: ogImageSrc,
};

