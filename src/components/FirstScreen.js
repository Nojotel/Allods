import FirstClass from "./FirstScreen.module.css";

const FirstScreen = () => {
  return (
    <div className={FirstClass["container"]}>
      <div className={FirstClass["container_img__woman"]}></div>
      <div className={FirstClass["container_img__man"]}></div>
      <div className={FirstClass["container__glow"]}></div>
      <div className={FirstClass["container__logo"]}></div>
      <div className={FirstClass["container__boxes"]}></div>
      <div className={FirstClass["container__title"]}>КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ</div>
      <div className={FirstClass["container__text"]}>Побеждайте легко, побеждайте стильно с новыми коллекционными изданиями «Аллодов Онлайн»!</div>
    </div>
  );
};

export default FirstScreen;
