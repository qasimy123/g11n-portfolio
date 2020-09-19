import { useTranslation } from "../services/i18n";

export const List = ({ children }) => {
  return <ul>{children}</ul>;
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

  const { t } = useTranslation("Projects");
  return (
    <>
      <div className={"project-card"}>
        <h3>{name}</h3>
        <div className={"project-card-content"}>
          <a href="https://placeholder.com">
            <img src="https://via.placeholder.com/150" />
          </a>
          <div>
            <p>{description}</p>
            <ul>
              {technologies_used.map((tech) => (
                <li>{tech}</li>
              ))}
            </ul>
            <div>
              <a href={demo_url}>{t("demo")}</a>{" "}
              <a href={github_url}>{t("github")}</a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .project-card {
          display: flex;
          background: white;
          flex-direction: column;
          padding: 1em;
          margin-top: 1em;
        }
        .project-card-content {
          display: flex;
          background: pink;
          justify-content: space-between;
          padding: 1em;
        }
      `}</style>
    </>
  );
};

const BlogCard = ({ blog }) => {
  const { title, pubDate, link, thumbnail, description, categories } = blog;

  return (
    <>
      <div className={"blog-card"}>
        <h3>{title}</h3>
        <a href="https://placeholder.com">
          <img width="150" src={thumbnail} />
        </a>
        <p>{pubDate}</p>
        <ul>
          {categories.map((tech) => (
            <li>{tech}</li>
          ))}
        </ul>
        <div></div>
      </div>
      <style jsx>{`
        .blog-card {
          display: flex;
          background: white;
          flex-direction: column;
          padding: 1em;
          margin-top: 1em;
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
    <List>
      {blogsList.map((blog) => (
        <BlogCard blog={blog} />
      ))}
    </List>
  );
};
