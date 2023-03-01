import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productRequestAsync } from "../../store/product/productSlice";
import { CatalogProduct } from "../CatalogProduct";
import { Container } from "../Container";
import { Order } from "../Order";

import style from "./Catalog.module.css";

export const Catalog = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const { products, flagProduct } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (category.length) {
      dispatch(productRequestAsync(category[activeCategory].title));
    }
  }, [category, activeCategory]);

  return (
    <section className={style.catalog}>
      <Container className={style.container}>
        <Order />
        <div className={style.wrapper}>
          <h2 className={style.title}>{category[activeCategory]?.rus}</h2>
          {products.length ? (
            <ul className={style.list}>
              {products.map((item) => (
                <li key={item.id} className={style.item}>
                  <CatalogProduct item={item} />
                </li>
              ))}
            </ul>
          ) : (
            flagProduct && (
              <p className={style.empty}>
                К сожалению товаров данной категории нет!
              </p>
            )
          )}
        </div>
      </Container>
    </section>
  );
};
