import { CatalogProduct } from "../CatalogProduct";
import { Container } from "../Container";
import { Order } from "../Order";

import style from "./Catalog.module.css";
import "./product.css";

const GOODS_LIST = [
  { title: "Мясная бомба" },
  { title: "Супер сырный" },
  { title: "Сытный" },
  { title: "Итальянский" },
  { title: "Вечная классика" },
  { title: "Тяжелый удар" },
];

export const Catalog = () => {
  return (
    <section className={style.catalog}>
      <Container className={style.container}>
        <Order />
        <div className={style.wrapper}>
          <h2 className={style.title}>Бургеры</h2>
          <div className={style.wrap_list}>
            <ul className={style.list}>
              {GOODS_LIST &&
                GOODS_LIST.map((item, i) => (
                  <li key={i} className={style.item}>
                    <CatalogProduct title={item.title} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
