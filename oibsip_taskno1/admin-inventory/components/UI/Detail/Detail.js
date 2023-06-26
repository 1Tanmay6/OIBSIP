import classes from "./Detail.module.css";
import RadialProgressBar from "./RadialProgressBar";

const Detail = ({ title, quantity, image, totalQty }) => {
  return (
    <>
      <div className={classes.detail}>
        <div className={classes.subDiv}>
          <div className={classes.topdiv}>
            <img
              src={image}
              alt="sauce"
              width={"220px"}
              height={"220px"}
              style={{ padding: "20px", borderRadius: "50%" }}
            />
            <div>
              <p className={classes.title}>{title}</p>
            </div>
          </div>
          <div className={classes.bottomdiv}>
            <div className={classes.quantity}>
              <p className={classes.radialText}>Last Refill Date</p>
              <p className={classes.radialNumber}>20/06/2023</p>
            </div>
            <div className={classes.quantity}>
              <p className={classes.radialText}>Expires in </p>
              <p className={classes.radialNumber}>7 days</p>
            </div>
          </div>
        </div>
        <div className={classes.radial}>
          <RadialProgressBar
            percentage={Math.floor((quantity / totalQty) * 100)}
          />
          <br />
          <div>
            <p className={classes.radialText}>Total Quantity</p>
            <p className={classes.radialNumber}>
              {quantity}/{totalQty}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
