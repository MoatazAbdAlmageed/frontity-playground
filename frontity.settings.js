const settings = {
  name: "frontity",
  state: {
    frontity: {
      url: "http://localhost/frontity-api",
      title: "MoatazWorld",
      description:
        "a web developer from Egypt. I spend my days with my hands in many different areas of web development from back end programming (PHP / Laravel) to front end engineering (HTML, CSS, and Javascript/ReactJs).",
    },
  },
  packages: [
    {
      name: "frontity-chakra-theme",
      state: {
        theme: {
          // The logo can be a text or an image url
          logo: "MoatazWorld",
          // show background pattern
          showBackgroundPattern: true,
          // show social links
          showSocialLinks: true,
          // the top-level navigation labels and links
          menu: [
            ["Home", "/"],
            ["Portfolio", "/portfolio"],
            ["About", "/about"],
            ["Contact", "/contact"],
          ],
          // the social links
          socialLinks: [
            ["github", "https://github.com/MoatazAbdAlmageed"],
            ["facebook", "https://www.facebook.com/moataz.mohammady.3"],
            ["twitter", "https://twitter.com/MoatazMohammady"],
          ],
          // color shades to use in the blog
          colors: {
            primary: {
              "50": "#e9f5f2",
              "100": "#d4dcd9",
              "200": "#bbc3be",
              "300": "#a1aba5",
              "400": "#87938b",
              "500": "#6d7972",
              "600": "#555f58",
              "700": "#323c34",
              "800": "#232924",
              "900": "#272727",
            },
            accent: {
              "50": "#ede4d3",
              "100": "#fbe3b2",
              "200": "#f6d086",
              "300": "#f1be58",
              "400": "#eca419",
              "500": "#d49212",
              "600": "#a5710b",
              "700": "#775105",
              "800": "#483100",
              "900": "#1d0f00",
            },
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api:
            "https://public-api.wordpress.com/wp/v2/sites/moatazworld.wordpress.com/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
