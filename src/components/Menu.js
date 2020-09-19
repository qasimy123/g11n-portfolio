import LanguageChanger from "./LanguageChanger";

const Menu = ({ children }) => {
  return (
    <>
      <div className={"section"}>
        <h1>Qasim</h1>
        <ul className={"links"}>
          <a>Linkedin</a>
          <a>Twitter</a>
          <a>Medium</a>
        </ul>

        <LanguageChanger />
      </div>
      <style jsx>{`
        .section {
          justify-content: space-between;
          display: flex;
          background: blue;
          width: 100%;
          padding: 1em;
        }
        .links {
          display: flex;
          background: pink;
          padding: 1em;
        }
        .links a {
          margin-left: 1em;
        }
        .links a:nth-of-type(1) {
          margin-left: 0;
        }
      `}</style>
    </>
  );
};

export default Menu;
