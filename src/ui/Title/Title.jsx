import React from "react";
import cn from "classnames";

import "./Title.scss";

export const Title = ({
  as: Component = "h1", // default tag 'h1' qilib qo'yamiz
  text,
  weight,
  children,
  className,
  ...restProps
}) => {
  const classNames = cn(
    "title",
    `title_${Component?.charAt(1)}`, // H teglarning soni (h1, h2, ...) ni olish uchun
    weight && `text-weight_${weight}`,
    className
  );

  return (
    <Component className={classNames} {...restProps}>
      {children || text}
    </Component>
  );
};
