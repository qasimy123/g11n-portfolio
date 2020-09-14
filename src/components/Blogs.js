import { useEffect, useState } from "react";
import { withTranslation } from "../services/i18n";
import { BlogsList } from "./Lists";

const Blogs = ({ t, MediumRssFeed }) => {
  return (
    <div>
      <h1>{t("blogs_title")}</h1>
      {MediumRssFeed && <BlogsList blogsList={MediumRssFeed.items} />}
    </div>
  );
};

export default withTranslation("Blogs")(Blogs);
