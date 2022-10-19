import { CustomButtonWithIcon } from "../shared/customButtonIcon";
import { CustomLabels } from "../shared/customLabels";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Icons } from "../assets/icons";
import CodeIcon from "@mui/icons-material/Code";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import TimelineIcon from "@mui/icons-material/Timeline";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import AdjustIcon from "@mui/icons-material/Adjust";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import { createMedia } from "@artsy/fresnel";
import BasicPopover from "../shared/customPopover";

export const Header = () => {
  const { Fork, Pull } = Icons;

  const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      n: 0,
      xs: 470,
      sm: 540,
      smd: 690,
      md: 768,
      lmg: 860,
      mmlg: 915,
      mlg: 1000,
      lg: 1024,
      xl: 1192,
    },
  });

  const headerContainer: React.CSSProperties = {
    backgroundColor: "rgb(246,248,250)",
    borderBottom: "1px solid #ececec",
    width: "100%",
    marginBottom: "50px",
  };

  const mainHeaderContainer: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px 30px",
  };
  const headerContainerAlignment: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  };
  const headerContainerRight: React.CSSProperties = {
    border: "1px solid rgba(27,31,36,0.15)",
    borderRadius: "6px",
    padding: "2px 8px",
  };

  const headerContainerUsers: React.CSSProperties = {
    border: "1px solid rgba(27,31,36,0.15)",
    borderRadius: "6px",
    padding: "2px 8px",
    display: "flex",
    alignItems: "center",
  };

  const headerContainerTypo: React.CSSProperties = {
    margin: 0,
    padding: "0 10px",
    fontSize: "14px",
  };

  const headerLowerContainer: React.CSSProperties = {
    display: "flex",
    gap: "2.5rem",
    padding: "0 2.5rem",
    flexWrap: "wrap",
  };
  const headerLowerMenuItems: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.3rem",
  };
  const issuesHighlighter: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid rgb(253,140,115)",
  };

  return (
    <>
      <div style={headerContainer}>
        <MediaContextProvider>
          <div style={mainHeaderContainer}>
            <div style={headerContainerAlignment}>
              <BookOutlinedIcon />
              <h2 style={{ color: "rgb(9,105,218)" }}>facebook/react</h2>
              <CustomLabels
                color={"rbg(87,96,106)"}
                name={"public"}
                border={"1px solid rgb(208,215,222)"}
              />
            </div>
            <Media greaterThanOrEqual="lg">
              <div style={headerContainerAlignment}>
                <div style={headerContainerRight}>
                  <CustomButtonWithIcon
                    text={"Notifications"}
                    icon={<NotificationsNoneIcon />}
                  />
                </div>

                <div style={headerContainerUsers}>
                  <CustomButtonWithIcon
                    text={"Star"}
                    icon={<StarBorderIcon />}
                  />
                  <div>
                    <p style={headerContainerTypo}>175K</p>
                  </div>
                </div>
                <div style={headerContainerUsers}>
                  <CustomButtonWithIcon
                    text={"Fork"}
                    icon={
                      <img
                        src={Fork}
                        style={{ width: "24px", height: "24px" }}
                      />
                    }
                  />
                  <div>
                    <p style={headerContainerTypo}>35.4K</p>
                  </div>
                </div>
              </div>
            </Media>
          </div>
          <div style={headerLowerContainer}>
            <Media greaterThanOrEqual="xs">
              <div style={headerLowerMenuItems}>
                <CodeIcon />
                <p>Code</p>
              </div>
            </Media>
            <Media greaterThanOrEqual="sm">
              <div style={issuesHighlighter}>
                <AdjustIcon />
                <p>Issues</p>
              </div>
            </Media>
            <Media greaterThanOrEqual="smd">
              <div style={headerLowerMenuItems}>
                <img src={Pull} style={{ width: "24px", height: "24px" }} />
                <p>Pull Request</p>
              </div>
            </Media>
            <Media greaterThanOrEqual="md">
              <div style={headerLowerMenuItems}>
                <PlayCircleOutlineIcon />
                <p>Actions</p>
              </div>
            </Media>
            <Media greaterThanOrEqual="lmg">
              <div style={headerLowerMenuItems}>
                <AssessmentOutlinedIcon />
                <p>Projects</p>
              </div>
            </Media>
            <Media greaterThanOrEqual="mmlg">
              <div style={headerLowerMenuItems}>
                <ImportContactsIcon />
                <p>Wiki</p>
              </div>
            </Media>
            <Media greaterThanOrEqual="mlg">
              <div style={headerLowerMenuItems}>
                <PrivacyTipIcon />
                <p>Security</p>
              </div>
            </Media>
            <Media greaterThanOrEqual="lg">
              <div style={headerLowerMenuItems}>
                <TimelineIcon />
                <p>Insites</p>
              </div>
            </Media>

            <div style={headerLowerMenuItems}>
              <Media lessThan="lg">
                <BasicPopover
                  content={
                    <>
                      <div style={{ padding: "2px 10px" }}>
                        <Media lessThan="lg">
                          <p>Insites</p>
                          <Media lessThan="mlg">
                            <p>Security</p>
                            <Media lessThan="mmlg">
                              <p>Wiki</p>
                              <Media lessThan="lmg">
                                <p>Projects</p>
                                <Media lessThan="md">
                                  <p>Actions</p>
                                  <Media lessThan="smd">
                                    <p>Pull Request</p>
                                    <Media lessThan="sm">
                                      <p>Issues</p>
                                      <Media lessThan="xs">
                                        <p>Code</p>
                                      </Media>
                                    </Media>
                                  </Media>
                                </Media>
                              </Media>
                            </Media>
                          </Media>
                        </Media>
                      </div>
                    </>
                  }
                />
              </Media>
            </div>
          </div>
        </MediaContextProvider>
      </div>
    </>
  );
};
