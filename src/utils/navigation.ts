// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
//  { name: "Projects", url: "/products" },
//  { name: "Services", url: "/services" }, 
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
//  {
//    section: "Ecosystem",
//    links: [
//      { name: "Documentation", url: "/welcome-to-docs/" },
//      { name: "Projects", url: "/products" },
//      { name: "Services", url: "/services" },
//    ],
//  },
  {
    section: "STEAMer Academy",
    links: [
      { name: "About Our Team", url: "https://steameracademy.me/about/" },
      { name: "Blogs", url: "https://steameracademy.me/blogs/" },
//      { name: "Careers", url: "#" },
      { name: "Contact", url: "https://steameracademy.me/contact/" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/thathrimondal",
  instagram: "https://www.instagram.com/hrimondal/",
  x: "https://x.com/thehmondal",
  github: "https://github.com/hrimondal",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
