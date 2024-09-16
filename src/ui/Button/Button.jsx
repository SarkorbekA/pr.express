import React from "react";
import cn from "classnames";
import { isString } from "lodash";

import "./Button.css";
import Link from "next/link";

export const Button = ({
  id,
  text,
  isDisabled = false,
  isLoading = false,
  variant,
  size,
  className = "",
  roundness = "half",
  link,
  children,
  ...restProps
}) => {
  const classNames = cn(
    "btn",
    variant && `btn_variant-${variant}`,
    size && `btn_size-${size}`,
    roundness && `radius_${roundness}`,
    {
      btn_disabled: isDisabled,
    },
    className
  );

  return isString(link) ? (
    <Link href={link} passHref>
      <a className={classNames}>
        {text}
        {children}
        {isLoading && <span className="btn-spinner"></span>}
      </a>
    </Link>
  ) : (
    <button
      className={classNames}
      disabled={isDisabled || isLoading}
      {...restProps}
    >
      {text}
      {children}
      {isLoading && <span className="btn-spinner"></span>}
    </button>
  );
};
