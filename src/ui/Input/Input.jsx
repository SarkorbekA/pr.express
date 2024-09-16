import React from "react";
import cn from "classnames";

import "./Input.scss";

export const Input = ({
  size,
  variant,
  label,
  errorMessage,
  outerClass = "",
  innerClass = "",
  className = "",
  isDisabled = false,
  placeholder = "",
  ...restProps
}) => {
  return (
    <div className={cn("control", outerClass)}>
      {label && <label>{label}</label>}
      <div className={cn("input__container", innerClass)}>
        <input
          placeholder={placeholder}
          disabled={isDisabled}
          className={cn(
            "input__field",
            `input__field_${variant}`,
            `input__field_${size}`,
            className,
            {
              input__field_disabled: isDisabled,
              input__field_error: errorMessage,
            }
          )}
          {...restProps}
        />
      </div>
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
};
