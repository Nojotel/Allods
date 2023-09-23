import DescriptionClass from "./Description.module.css";
import clock from "./Часы copy 1.png";
import box from "./ТУЛБОКС 1.png";
import ryne from "./хрупкая 1.png";
import symbol from "./большой символ 1.png";
import mana from "./мана 1.png";
import module from "./модуль 1.png";
import vito from "./вито 1.png";
import vitoBuy from "./box.png";

const Sets = [
  { id: "c1", img: clock, description: "Игровое время", NoSubscription: "-", Subscription: "30 ДНЕЙ" },
  { id: "c2", img: box, description: "Запечатанный набор инструментов", NoSubscription: "1", Subscription: "1" },
  { id: "c3", img: ryne, description: "Хрупкая чистая руна 10-й ступени", NoSubscription: "1", Subscription: "-" },
  { id: "c4", img: symbol, description: "Большой символ изобилия творца", NoSubscription: "10", Subscription: "-" },
  { id: "c5", img: mana, description: "Мана-батарея", NoSubscription: "-", Subscription: "20" },
  { id: "c6", img: module, description: "Модуль памяти", NoSubscription: "-", Subscription: "10" },
  { id: "c7", img: vito, description: "Помощник Вито ", NoSubscription: "1", Subscription: "1" },
];

const Description = () => {
  return (
    <div className={DescriptionClass["container"]}>
      <h3 className={DescriptionClass["container__title"]}>НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»</h3>
      <div>
        <span className={DescriptionClass["container__subtitle"]}>Подписочный сервер</span>
        <span className={DescriptionClass["container__subtitle"]}>Бесплатные сервера</span>
      </div>
      <table className={DescriptionClass["container__table"]}>
        <tbody>
          <tr className={DescriptionClass["container__table_line"]}>
            <td className={DescriptionClass["container__table_text"]}>
              <img className={DescriptionClass["container__table_img"]} alt={"Clock"} src={Sets[0].img} />
              <span className={DescriptionClass["container__table_description"]}>{Sets[0].description}</span>
              <span className={DescriptionClass["container__table_noSubscription"]}>{Sets[0].NoSubscription}</span>
              <span className={DescriptionClass["container__table_subscription"]}>{Sets[0].Subscription}</span>
            </td>
          </tr>
          <tr className={DescriptionClass["container__table_line"]}>
            <td className={DescriptionClass["container__table_text"]}>
              <img className={DescriptionClass["container__table_img"]} alt={"Clock"} src={Sets[1].img} />
              <span className={DescriptionClass["container__table_description"]}>{Sets[1].description}</span>
              <span className={DescriptionClass["container__table_noSubscription"]}>{Sets[1].NoSubscription}</span>
              <span className={DescriptionClass["container__table_subscription"]}>{Sets[1].Subscription}</span>
            </td>
          </tr>
          <tr className={DescriptionClass["container__table_line"]}>
            <td className={DescriptionClass["container__table_text"]}>
              <img className={DescriptionClass["container__table_img"]} alt={"Clock"} src={Sets[2].img} />
              <span className={DescriptionClass["container__table_description"]}>{Sets[2].description}</span>
              <span className={DescriptionClass["container__table_noSubscription"]}>{Sets[2].NoSubscription}</span>
              <span className={DescriptionClass["container__table_subscription"]}>{Sets[2].Subscription}</span>
            </td>
          </tr>
          <tr className={DescriptionClass["container__table_line"]}>
            <td className={DescriptionClass["container__table_text"]}>
              <img className={DescriptionClass["container__table_img"]} alt={"Clock"} src={Sets[3].img} />
              <span className={DescriptionClass["container__table_description"]}>{Sets[3].description}</span>
              <span className={DescriptionClass["container__table_noSubscription"]}>{Sets[3].NoSubscription}</span>
              <span className={DescriptionClass["container__table_subscription"]}>{Sets[3].Subscription}</span>
            </td>
          </tr>
          <tr className={DescriptionClass["container__table_line"]}>
            <td className={DescriptionClass["container__table_text"]}>
              <img className={DescriptionClass["container__table_img"]} alt={"Clock"} src={Sets[4].img} />
              <span className={DescriptionClass["container__table_description"]}>{Sets[4].description}</span>
              <span className={DescriptionClass["container__table_noSubscription"]}>{Sets[4].NoSubscription}</span>
              <span className={DescriptionClass["container__table_subscription"]}>{Sets[4].Subscription}</span>
            </td>
          </tr>
          <tr className={DescriptionClass["container__table_line"]}>
            <td className={DescriptionClass["container__table_text"]}>
              <img className={DescriptionClass["container__table_img"]} alt={"Clock"} src={Sets[5].img} />
              <span className={DescriptionClass["container__table_description"]}>{Sets[5].description}</span>
              <span className={DescriptionClass["container__table_noSubscription"]}>{Sets[5].NoSubscription}</span>
              <span className={DescriptionClass["container__table_subscription"]}>{Sets[5].Subscription}</span>
            </td>
          </tr>
          <tr className={DescriptionClass["container__table_line"]}>
            <td className={DescriptionClass["container__table_text"]}>
              <img className={DescriptionClass["container__table_img"]} alt={"Clock"} src={Sets[6].img} />
              <span className={DescriptionClass["container__table_description"]}>{Sets[6].description}</span>
              <span className={DescriptionClass["container__table_noSubscription"]}>{Sets[6].NoSubscription}</span>
              <span className={DescriptionClass["container__table_subscription"]}>{Sets[6].Subscription}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={DescriptionClass["container__buy"]}>
        <img className={DescriptionClass["container__buy_img"]} alt={"Clock"} src={vitoBuy} />
        <div className={DescriptionClass["container__price"]}>399 ₽</div>
        <button className={DescriptionClass["container__button"]}>ПРИОБРЕСТИ</button>
      </div>
    </div>
  );
};

export default Description;
