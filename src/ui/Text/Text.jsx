import React from "react";
import cn from "classnames";

import "./Text.scss";

export const Text = ({
  as: Component = "span",
  text,
  weight,
  children,
  className,
  ...restProps
}) => {
  const classNames = cn("text", weight && `text-weight_${weight}`, className);

  return (
    <Component className={classNames} {...restProps}>
      {children || text}
    </Component>
  );
};
