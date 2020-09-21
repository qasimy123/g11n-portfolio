import { useTranslation } from "../services/i18n";

import theme from "../../styles/theme";
export const List = ({ children }) => {
  return (
    <>
      <ul className={"list"}>{children}</ul>
      <style jsx>{`
        .list {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
};

const ProjectCard = ({ project }) => {
  const {
    name,
    description,
    preview_path,
    demo_url,
    github_url,
    technologies_used,
  } = project;

  const { t, i18n } = useTranslation("Projects");
  const [language, region] = i18n.language
    .split("-")
    .map((item) => item.toLowerCase());
  const currTheme = theme[region];
  const dir = i18n.dir(language);
  return (
    <>
      <div className={"card project-card "}>
        <h3>{name}</h3>
        <div className={"project-card-content"}>
          <img className={"project-preview"} src={preview_path} />
          <div dir={dir} className={"project-card-text"}>
            <p>{description}</p>
            <ul className={"project-card-technologies"}>
              {technologies_used.map((tech) => (
                <li>{tech}</li>
              ))}
            </ul>
            <div className="project-links">
              <a href={demo_url}>{t("demo")}</a>{" "}
              {github_url && <a href={github_url}>{t("github")}</a>}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .project-card {
          display: flex;
          flex-direction: column;
          padding: 2em;
          margin-top: 1em;
          background: none;
        }
        .project-preview {
          border-radius: 0.5em;
          width: 640px;
        }
        .project-card-technologies,
        .project-links {
          margin-top: 1em;
        }
        .project-card h3,
        p,
        a,
        ul {
          color: ${currTheme.colors.text};
        }
        .project-card-content {
          display: flex;
        }
        .project-card-text {
          box-shadow: -8px 10px 44px -21px rgba(0, 0, 0, 0.59);
          border-radius: 0.5em;
          display: flex;
          padding: 1em;
          margin-left: -2em;
          margin-top: 2em;
          flex-direction: column;
          width: 60%;
          height: fit-content;
          background: ${currTheme.colors.paper};
        }

        .project-card-text[dir="rtl"] {
          box-shadow: 8px 10px 44px -21px rgba(0, 0, 0, 0.59);
          margin-right: -2em;
        }

        @media screen and (max-width: 1400px) {
          .project-preview {
            width: 100%;
          }
          .project-card-content {
            flex-direction: column;
          }
          .project-card-text {
            margin-left: 0em;
            width: 100%;
          }
        }
        @media screen and (max-width: 600px) {
          .project-card h3 {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

const BlogCard = ({ blog }) => {
  const { title, pubDate, link, thumbnail, description, categories } = blog;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const { i18n } = useTranslation("Blogs");
  return (
    <>
      <a class={"blog-containter"} href={link}>
        <div className={"blog-card card"}>
          <h3>{title}</h3>
          <img className={"blog-thumbnail"} src={thumbnail} />
          <p className={"blog-date"}>
            {new Date(pubDate).toLocaleDateString(i18n.language, options)}
          </p>
        </div>
      </a>
      <style jsx>{`
        .blog-containter {
          display: flex;
        }
        .blog-card {
          margin: 1em;
          display: flex;
          background: white;
          flex-direction: column;
          padding: 1em;
          margin-top: 1em;
          width: fit-content;
          box-shadow: -8px 10px 44px -21px rgba(0, 0, 0, 0.59);
        }
        .blog-date {
          font-size: 1em;
          margin-top: 0.5em;
        }
        .blog-card h3 {
          white-space: normal !important;
          width: 300px;
          font-size: 1.5em;
        }
        .blog-thumbnail {
          width: 300px;
        }

        @media screen and (max-width: 1200px) {
          .blog-thumbnail {
            width: 100%;
          }
          .blog-card h3 {
            white-space: normal !important;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export const ProjectsList = ({ projects }) => {
  return (
    <List>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </List>
  );
};

export const BlogsList = ({ blogsList }) => {
  return (
    <div className={"grid"}>
      {blogsList.map((blog) => (
        <BlogCard blog={blog} />
      ))}
    </div>
  );
};
