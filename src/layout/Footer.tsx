import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
  const footerContainer: React.CSSProperties = {
    backgroundColor: "rgb(246,248,250)",
    borderBottom: "1px solid #ececec",
    width: "90%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "0.5rem",
  };

  const footerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    flexBasis: "35%",
    color: "#0969da",
  };

  return (
    <>
      <div style={footerContainer}>
        <div style={footerStyle}>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Security</p>
          <p>Status</p>
          <p>Docs</p>
        </div>
        <div>
          <p>
            <GitHubIcon />
          </p>
        </div>
        <div style={footerStyle}>
          <p>Contact GitHub</p>
          <p>Pricing</p>
          <p>API</p>
          <p>Training</p>
          <p>Blog</p>
          <p>About</p>
          <p></p>
        </div>
      </div>
    </>
  );
};
