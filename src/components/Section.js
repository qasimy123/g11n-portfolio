import theme from "../../styles/theme";
const Section = ({ children }) => {
  return (
    <>
      <div className={"section"}>{children}</div>
      <style jsx>{`
        .section {
          display: flex;
          flex-direction: column;
          width: 80%;
          padding: 1em;
          color: ${theme.ca.colors.text};
        }
      `}</style>
    </>
  );
};

export default Section;
