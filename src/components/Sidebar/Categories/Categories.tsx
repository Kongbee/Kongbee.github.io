import React from "react";

import { Link } from "gatsby";
import { useCategoriesList } from "@/hooks";
import * as styles from "./Categories.module.scss";
import { toKebabCase } from "@/utils";

const Categories: React.FC = () => {
  const categories = useCategoriesList();

  return (
    <li className={styles.list}>
      CS
      <ul>
        {categories.map((category) => (
          <li className={styles.item} key={category.fieldValue}>
            <Link
              to={`/category/${toKebabCase(category.fieldValue)}`}
              className={styles.link}
              activeClassName={styles.active}
            >
              {category.fieldValue} ({category.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
};

export default Categories;
