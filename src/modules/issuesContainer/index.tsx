import React, { useEffect, useState } from "react";
import { issuesServices } from "./issuesService";
import { CustomLabels } from "../../shared/customLabels";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AdjustIcon from "@mui/icons-material/Adjust";
import { IssueHeader } from "../issuesHeader";
import InfiniteScroll from "react-infinite-scroll-component";

export const IssuesContainer = () => {
  const issuesContainer: React.CSSProperties = {
    width: "90%",
    margin: "0 auto",
    border: "1px solid rgb(208,215,222)",
    borderRadius: "8px",
  };

  const issuesElement: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid rgb(208,215,222)",
    padding: "12px 14px",
  };

  const issuesTypo: React.CSSProperties = {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
    alignItems: "center ",
  };

  const actionIcon: React.CSSProperties = { display: "flex", gap: "0.5rem" };

  const [issues, setIssues] = useState<any>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getIssues(page);
  }, [page]);

  async function getIssues(page: number) {
    let data = await issuesServices.getIssues(page);
    setIssues(issues.concat(data.data));
  }

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div style={issuesContainer}>
        <IssueHeader />
        <InfiniteScroll
          dataLength={issues.length}
          next={handleNext}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {issues.length ? (
            issues.map((issue: any, idx: number) => (
              <>
                <div key={idx} style={issuesElement}>
                  <div style={actionIcon}>
                    <div>
                      <AdjustIcon color={"success"} />
                    </div>
                    <div>
                      <div style={issuesTypo}>
                        <h4 style={{ margin: 0 }}>{issue.title}</h4>
                        {issue.labels.map((label: any, idx: number) => (
                          <CustomLabels
                            key={idx}
                            color={label.color}
                            name={label.name}
                          />
                        ))}
                      </div>
                      <p style={{ margin: 0 }}>
                        #{issue.number} by {issue.user.login}
                      </p>
                    </div>
                  </div>

                  <div>
                    {issue.comments > 0 ? (
                      <>
                        <div style={issuesTypo}>
                          <div></div>
                          <ChatBubbleOutlineIcon />
                          <p>{issue.comments}</p>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </>
            ))
          ) : (
            <></>
          )}
        </InfiniteScroll>
      </div>
    </>
  );
};
