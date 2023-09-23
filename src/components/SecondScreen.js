import Description from "./Description";
import SecondClass from "./SecondScreen.module.css";
import Vito from "./Vito.png";

const SecondScreen = () => {
  return (
    <div className={SecondClass["container"]}>
      <div className={SecondClass["container_img__glow"]}></div>
      <img className={SecondClass["container_img__dog"]} alt={"Dog"} src={Vito} />
      <div className={SecondClass["container_description"]}>
        <Description />
      </div>
    </div>
  );
};

export default SecondScreen;
