import { Button, Card } from "@mui/material";
import LensIcon from "@mui/icons-material/Lens";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WaterfallChartRoundedIcon from "@mui/icons-material/WaterfallChartRounded";
import LowPriorityIcon from "@mui/icons-material/LowPriority";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ViewTimelineOutlinedIcon from "@mui/icons-material/ViewTimelineOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import "./App.css";
import { useState } from "react";

function App() {
  const [sidebarSelectedIcon, setSidebarSelectedIcon] = useState("");

  const handleSidebarButtonClick = (str) => {
    if (sidebarSelectedIcon === str) {
      setSidebarSelectedIcon("");
    } else {
      setSidebarSelectedIcon(str);
    }
  };
  const Sidebar = () => {
    return (
      <>
        <div className="lensIconDiv">
          <LensIcon className="lensIcon" />
        </div>
        <div className="sidebar-icons">
          <Button
            className={
              sidebarSelectedIcon === "layer"
                ? "sidebar-buttons-selected"
                : "sidebar-buttons"
            }
            disableRipple
            disableElevation
            onClick={() => handleSidebarButtonClick("layer")}
          >
            <LayersOutlinedIcon
              className={
                sidebarSelectedIcon === "layer"
                  ? "sidebar-middle-button-selected"
                  : "sidebar-middle-icons"
              }
            />
          </Button>
          <Button
            className={
              sidebarSelectedIcon === "priority"
                ? "sidebar-buttons-selected"
                : "sidebar-buttons"
            }
            disableRipple
            onClick={() => handleSidebarButtonClick("priority")}
          >
            <LowPriorityIcon
              className={
                sidebarSelectedIcon === "priority"
                  ? "sidebar-middle-button-selected"
                  : "sidebar-middle-icons"
              }
            />
          </Button>
          <Button
            className={
              sidebarSelectedIcon === "user"
                ? "sidebar-buttons-selected"
                : "sidebar-buttons"
            }
            disableRipple
            onClick={() => handleSidebarButtonClick("user")}
          >
            <PersonOutlineOutlinedIcon
              className={
                sidebarSelectedIcon === "user"
                  ? "sidebar-middle-button-selected"
                  : "sidebar-middle-icons"
              }
            />
          </Button>
          <Button
            className={
              sidebarSelectedIcon === "waterfall"
                ? "sidebar-buttons-selected"
                : "sidebar-buttons"
            }
            disableRipple
            onClick={() => handleSidebarButtonClick("waterfall")}
          >
            <WaterfallChartRoundedIcon
              className={
                sidebarSelectedIcon === "waterfall"
                  ? "sidebar-middle-button-selected"
                  : "sidebar-middle-icons"
              }
            />
          </Button>
        </div>
        <div className="sidebar-end-icon-div">
          <Button
            className={
              sidebarSelectedIcon === "setting"
                ? "sidebar-buttons-selected"
                : "sidebar-buttons"
            }
            disableRipple
            onClick={() => handleSidebarButtonClick("setting")}
          >
            <SettingsOutlinedIcon
              className={
                sidebarSelectedIcon === "setting"
                  ? "sidebar-middle-button-selected"
                  : "sidebar-middle-icons"
              }
            />
          </Button>
        </div>
      </>
    );
  };
  const Dashboard = () => {
    return (
      <div style={{ width: "100%" }}>
        <Card className="dashboard-card">
          <h3 style={{ fontFamily: "sans-serif" }}>Dashboard</h3>
          <div className="dashboard-middle-div">
            <div className="dashboard-option-div">
              <DonutSmallOutlinedIcon />
              <p className="dashboard-options">Data Import</p>
            </div>
            <div className="dashboard-option-div">
              <DnsOutlinedIcon />
              <p className="dashboard-options">Match Definition</p>
            </div>
            <div className="dashboard-option-div">
              <BarChartOutlinedIcon />
              <p className="dashboard-options">Match Results</p>
            </div>
          </div>
        </Card>
      </div>
    );
  };
  const MiddleDiv = () => {
    return (
      <>
        <div className="middle-div">
          <Card className="middle-div-card">
            <div className="middle-div-top-text">
              <LensIcon className="lensicon-middle-div" />
              <p className="dashboard-options">Number of projects</p>
            </div>
            <div className="middle-div-bottom-text-div">
              <p className="middle-div-numbers">18</p>
              <p className="middle-div-bottom-text">Projects</p>
            </div>
          </Card>
          <Card className="middle-div-card">
            <div className="middle-div-top-text">
              <LensIcon className="lensicon-middle-div" />
              <p className="dashboard-options">Number of files</p>
            </div>
            <div className="middle-div-bottom-text-div">
              <p className="middle-div-numbers">43</p>
              <p className="middle-div-bottom-text">Files</p>
            </div>
          </Card>
          <Card className="middle-div-card">
            <div className="middle-div-top-text">
              <LensIcon className="lensicon-middle-div" />
              <p className="dashboard-options">Amount of data</p>
            </div>
            <div className="middle-div-bottom-text-div">
              <p className="middle-div-numbers">22.5 GB</p>
              <p className="middle-div-bottom-text">Data</p>
            </div>
          </Card>
          <Card className="middle-div-card">
            <div className="middle-div-top-text">
              <LensIcon className="lensicon-middle-div" />
              <p className="dashboard-options">Number of records</p>
            </div>
            <div className="middle-div-bottom-text-div">
              <p className="middle-div-numbers">533m</p>
              <p className="middle-div-bottom-text">Records</p>
            </div>
          </Card>
        </div>
      </>
    );
  };
  const Headbar = () => {
    return (
      <>
        <Card className="headbar-options">
          <div className="headbar-option-div">
            <NotificationsNoneOutlinedIcon />
            <p className="headbar-options">Notifications</p>
          </div>
          <div className="headbar-option-div">
            <QuizOutlinedIcon />
            <p className="headbar-options">Help</p>
          </div>
          <div className="headbar-option-div">
            <p className="headbar-option2">Contact Sales</p>
          </div>
        </Card>
      </>
    );
  };
  return (
    <div style={{ display: "flex" }}>
      <div className="sidebar" style={{ width: "4%" }}>
        <Sidebar />
      </div>
      <div style={{ width: "17%", marginLeft: "4%" }}>
        <Dashboard />
      </div>
      <div style={{ flex: 1, height: "100vh" }}>
        <Headbar />
        <MiddleDiv />
        <div className="bottom-div">
          <Card className="bottom-div-card">
            <Card className="bottom-div-top-card">
              <div className="top-card-left-div">
                <ViewTimelineOutlinedIcon />
                <p className="dashboard-options"> Standard View</p>
                <KeyboardArrowDownOutlinedIcon />
              </div>
              <div className="top-card-left-div">
                <SearchOutlinedIcon />
                <p className="dashboard-options">Search</p>
              </div>
              <div className="top-card-right-div">
                <Button className="right-div-button">Create</Button>
              </div>
            </Card>
            <Card className="bottom-div-bottom-card">
              <table className="bottom-card-table">
                <thead>
                  <tr>
                    <th>Projects</th>
                    <th>Labels</th>
                    <th>Change</th>
                    <th>
                      <div className="table-header-div">
                        Last Modified <TuneOutlinedIcon />
                      </div>
                    </th>
                    <th>
                      <div className="table-header-div">
                        Created Date <TuneOutlinedIcon />
                      </div>
                    </th>
                    <th>Task</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sample Data</td>
                    <td>
                      <div
                        style={{
                          backgroundColor: "rgba(255, 240, 219, 0.9)",
                          opacity: 0.8,
                          borderRadius: "4px",
                          padding: "3px 0px 3px 10px",
                          width: "70%",
                        }}
                      >
                        3 issues found
                      </div>
                    </td>
                    <td>Export completed</td>
                    <td>Dec 07,2024</td>
                    <td>Oct 02,2024</td>
                    <td>
                      <div className="table-header-div">
                        <AddBoxOutlinedIcon /> Create Task
                        <MoreVertOutlinedIcon
                          sx={{ marginRight: "-2vw", marginLeft: "1vw" }}
                        />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>Salesforce Cleanup</td>
                    <td>
                      <div
                        style={{
                          backgroundColor: "rgba(240, 245, 250, 0.9)",
                          opacity: 0.8,
                          borderRadius: "4px",
                          padding: "3px 0px 3px 10px",
                          width: "50%",
                        }}
                      >
                        No issues
                      </div>
                    </td>
                    <td>Export completed</td>
                    <td>Dec 04,2024</td>
                    <td>Oct 01,2024</td>
                    <td>
                      <div className="table-header-div">
                        <AddBoxOutlinedIcon /> Create Task
                        <MoreVertOutlinedIcon
                          sx={{ marginRight: "-2vw", marginLeft: "1vw" }}
                        />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>Vendor batch dedupe</td>
                    <td>
                      <div
                        style={{
                          backgroundColor: "rgba(240, 245, 250, 0.9)",
                          opacity: 0.8,
                          borderRadius: "4px",
                          padding: "3px 0px 3px 10px",
                          width: "95%",
                        }}
                      >
                        Running discovery
                      </div>
                    </td>
                    <td>Address data verified</td>
                    <td>Nov 28,2024</td>
                    <td>Sept 18,2024</td>
                    <td>
                      <div className="table-header-div">
                        <AddBoxOutlinedIcon /> Create Task
                        <MoreVertOutlinedIcon
                          sx={{ marginRight: "-2vw", marginLeft: "1vw" }}
                        />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>Merge datasets</td>
                    <td>
                      <div
                        style={{
                          backgroundColor: "rgba(255, 160, 175, 0.9)",
                          opacity: 0.8,
                          borderRadius: "4px",
                          padding: "3px 0px 3px 10px",
                          width: "75%",
                        }}
                      >
                        Not configured
                      </div>
                    </td>
                    <td>Match definition added</td>
                    <td>Sept 01,2024</td>
                    <td>Aug 02,2024</td>
                    <td>
                      <div className="table-header-div">
                        <AddBoxOutlinedIcon /> Create Task
                        <MoreVertOutlinedIcon
                          sx={{ marginRight: "-2vw", marginLeft: "1vw" }}
                        />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>Test matching for AML</td>
                    <td>
                      <div
                        style={{
                          backgroundColor: "rgba(240, 245, 250, 0.9)",
                          opacity: 0.8,
                          borderRadius: "4px",
                          padding: "3px 0px 3px 10px",
                          width: "50%",
                        }}
                      >
                        No issues
                      </div>
                    </td>
                    <td>Export completed</td>
                    <td>July 06,2024</td>
                    <td>July 01,2024</td>
                    <td>
                      <div className="table-header-div">
                        <AddBoxOutlinedIcon /> Create Task
                        <MoreVertOutlinedIcon
                          sx={{ marginRight: "-2vw", marginLeft: "1vw" }}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
