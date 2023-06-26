import Button from "./Button";
import { useRouter } from "next/router";
import classes from "./VerticalDivWithuttons.module.css";

const VerticalDivWithButtons = () => {
  const router = useRouter();
  const onDoughClick = () => {
    router.push("/dough");
  };

  const onSauceClick = () => {
    router.push("/sauce");
  };

  const onCheeseClick = () => {
    router.push("/cheese");
  };

  const onToppingsClick = () => {
    router.push("/toppings");
  };

  return (
    <div className={classes.verticalDiv}>
      <Button onClick={onDoughClick}>
        <img src="/images/icons/dough.png" width={"50px"} height={"50px"} />
      </Button>
      <Button onClick={onSauceClick}>
        <img src="/images/icons/sauce.png" width={"50px"} height={"50px"} />
      </Button>
      <Button onClick={onCheeseClick}>
        <img src="/images/icons/cheese.png" width={"50px"} height={"50px"} />
      </Button>
      <Button onClick={onToppingsClick}>
        <img src="/images/icons/toppings.png" width={"50px"} height={"50px"} />
      </Button>
    </div>
  );
};

export default VerticalDivWithButtons;
