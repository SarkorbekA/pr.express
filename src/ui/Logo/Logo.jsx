import React from "react";
import cn from "classnames";
import { isString } from "lodash";
import Link from "next/link";
import Image from "next/image";

export const Logo = ({ className, size, src, alt, href, width, height }) => {
  const imageClasses = cn(
    "image",
    {
      size,
    },
    className
  );

  return isString(href) ? (
    <Link href={href}>
      <Image
        className={imageClasses}
        src={src}
        alt={alt || "logo"}
        width={width}
        height={height}
      />
    </Link>
  ) : (
    <Image
      className={imageClasses}
      src={src}
      width={width}
      height={height}
      alt={alt || "logo"}
    />
  );
};
