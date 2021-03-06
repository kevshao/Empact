import SideMenuItems from "./SideMenuItems";
import React, { useState } from "react";

import logo from "../logo.svg";
function SideMenu() {
  const [activeTab, setActiveTab] = useState("");
  console.log(activeTab);
  return (
    <nav className="SideMenu">
      <SideMenuItems
        text="Home"
        onClick={() => setActiveTab("Home")}
        logo={logo}
        activeTab={activeTab}
        href="./index"
      />
      <SideMenuItems
        text="Notes"
        onClick={() => setActiveTab("Notes")}
        logo={logo}
        activeTab={activeTab}
        href="./notes"
      />
      <SideMenuItems
        text="Job Search"
        onClick={() => setActiveTab("Job Search")}
        logo={logo}
        activeTab={activeTab}
        href="./job-search"
      />
      <SideMenuItems
        text="To Do"
        onClick={() => setActiveTab("To Do")}
        logo={logo}
        activeTab={activeTab}
        href="./to-do"
      />
      <SideMenuItems
        text="Schedule"
        onClick={() => setActiveTab("Schedule")}
        logo={logo}
        activeTab={activeTab}
        href="./schedule"
      />
      <SideMenuItems
        text="Account"
        onClick={() => setActiveTab("Account")}
        logo={logo}
        activeTab={activeTab}
        href="./account"
      />
      <SideMenuItems
        text="GPA Calculator"
        onClick={() => setActiveTab("GPA Calculator")}
        logo={logo}
        activeTab={activeTab}
        href="./gpa-calculator"
      />
    </nav>
  );
}

export default SideMenu;
