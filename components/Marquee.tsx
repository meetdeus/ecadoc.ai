import clsx from "clsx";
import type { CSSProperties, ReactNode } from "react";
import styles from "./marquee.module.css";

type Props = {
  children: ReactNode;
  direction?: "left" | "right";
  duration?: number;
  className?: string;
};

export const Marquee = ({
  children,
  direction = "left",
  duration = 35,
  className,
}: Props) => {
  const trackStyle: CSSProperties = {
    animationDuration: `${duration}s`,
  };

  return (
    <div className={clsx(styles.container, className)}>
      <div
        className={clsx(styles.track, direction === "right" && styles.reverse)}
        style={trackStyle}
      >
        {[0, 1].map((index) => (
          <div
            className={styles.slice}
            key={index}
            aria-hidden={index > 0 ? "true" : undefined}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};
