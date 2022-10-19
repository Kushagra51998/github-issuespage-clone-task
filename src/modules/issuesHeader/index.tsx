import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AdjustIcon from "@mui/icons-material/Adjust";
export const IssueHeader = () => {
  const issuesHeader: React.CSSProperties = {
    background: "rgb(246,248,250)",
    borderBottom: "1px solid rgb(208,215,222)",
    padding: "14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const issuseHedearList: React.CSSProperties = {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
  };

  const issuseHedearMenuList: React.CSSProperties = {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
    flexWrap: "wrap",
  };

  return (
    <>
      <div style={issuesHeader}>
        <div style={issuseHedearList}>
          <AdjustIcon />
          <h3>Open</h3>
        </div>
        <div style={issuseHedearMenuList}>
          <div style={issuseHedearList}>
            <p>Author</p>
            <ArrowDropDownIcon />
          </div>
          <div style={issuseHedearList}>
            <p>Label</p>
            <ArrowDropDownIcon />
          </div>
          <div style={issuseHedearList}>
            <p>Projects</p>
            <ArrowDropDownIcon />
          </div>
          <div style={issuseHedearList}>
            <p>Milestones</p>
            <ArrowDropDownIcon />
          </div>
          <div style={issuseHedearList}>
            <p>Assignee</p>
            <ArrowDropDownIcon />
          </div>
          <div style={issuseHedearList}>
            <p>Sort</p>
            <ArrowDropDownIcon />
          </div>
        </div>
      </div>
    </>
  );
};
