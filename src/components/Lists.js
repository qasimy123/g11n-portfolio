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
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={demo_url}>Demo</a>
      <a href={github_url}>Github</a>
      <ul>
        {technologies_used.map((tech) => (
          <li>{tech}</li>
        ))}
      </ul>
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
