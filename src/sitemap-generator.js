require("babel-register")({
    presets: ["react"]
  });
   
  const router = require("./App").default;
  const Sitemap = require("react-router-sitemap").default;
  
  function generateSitemap() {
      return (
        new Sitemap(router)
            .build("https://datutanda.com")
            .save("./sitemap.xml")
      );
  }
  
  generateSitemap();