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
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={demo_url}>{t("demo")}</a>
      <a href={github_url}>{t("github")}</a>
      <ul>
        {technologies_used.map((tech) => (
          <li>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

const BlogCard = ({ blog }) => {
  const { title, pubDate, link, thumbnail, description, categories } = blog;

  return (
    <div>
      <h3>{title}</h3>
    </div>
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
