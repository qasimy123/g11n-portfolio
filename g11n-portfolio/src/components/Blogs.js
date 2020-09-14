import { useEffect, useState } from "react";
import { withTranslation } from "../services/i18n";

const Blogs = ({ t }) => {
  const [blogsList, setBlogsList] = useState();

  async function getMediumBlogs() {
    try {
      const rssToJsonApi = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40q.invisible`;
      return await (await fetch(rssToJsonApi)).json();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    (async () => {
      try {
        let res = await getMediumBlogs();
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    })();
  });

  return (
    <div>
      <h1>{t("blogs_title")}</h1>
    </div>
  );
};

export default withTranslation("Blogs")(Blogs);
