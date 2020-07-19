const settings = {
  name: "frontity",
  state: {
    frontity: {
      url: "http://localhost/frontity-api",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Announcement", "/category/announcement/"],
            ["Technologies", "/category/technologies/"],
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
          api: "http://localhost/frontity-api/index.php/wp-json",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
