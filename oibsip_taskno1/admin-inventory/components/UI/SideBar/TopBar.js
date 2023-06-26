import classes from "./TopBar.module.css";

const TopBar = ({ title }) => {
  return (
    <div className={classes.topbar}>
      <div className="topbarTitle">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default TopBar;
