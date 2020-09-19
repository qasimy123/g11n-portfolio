const Section = ({ children }) => {
  return (
    <>
      <div className={"section"}>{children}</div>
      <style jsx>{`
        .section {
          display: flex;
          flex-direction: column;
          background: grey;
          width: 80%;
          padding: 1em;
        }
      `}</style>
    </>
  );
};

export default Section;
