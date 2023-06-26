import classes from "./SideBar.module.css";
import TopBar from "./TopBar";
import VerticalDivWithButtons from "./VerticalDivWithuttons";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SideBar = ({ children }) => {
  const [name, setName] = useState("Name");
  const [status, setStatus] = useState("Status");
  const router = useRouter();

  const onActiveFetcher = () => {
    const path = router.pathname;
    const cleanedStr = path.substring(1);
    const capitalizedStr =
      cleanedStr.charAt(0).toUpperCase() + cleanedStr.slice(1);
    setName(capitalizedStr);
  };

  useEffect(() => {
    onActiveFetcher();
  }, [router.pathname]);

  return (
    <>
      <div className={classes.topParent}>
        <div className={classes.topBar}>
          <TopBar title={name} />
        </div>
      </div>
      <div className={classes.sidebarParent}>
        <div className={classes.sideBar}>
          <VerticalDivWithButtons />
        </div>
        <div className={classes.content}>
          <div style={{ height: "100px", marginBottom: "180vh" }}>nothing</div>
          {children}
        </div>
      </div>
    </>
  );
};
export default SideBar;
