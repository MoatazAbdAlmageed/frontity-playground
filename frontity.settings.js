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
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["AIO", "/category/aio/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
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
