import cn from "classnames";
import React from "react";
import "./Rating.css";

export interface Rating {
  num: string;
  className?: string;
  width?: string; 
}

const SvgStar = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 7.937 7.541"
    className="svg-color-goal fill"
  >
    <path d="M3.975 6.05l2.442 1.473-.646-2.778 2.156-1.868-2.842-.244-1.11-2.62-1.11 2.62-2.843.244 2.156 1.868-.646 2.778z" />
  </svg>
);

const SvgStarHalf = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 7.905 7.51"
    className="svg-color-goal fill"
  >
    <path d="M3.953 6.037V0l-1.11 2.62L0 2.864l2.156 1.868L1.51 7.51z" />
  </svg>
);

const Rating = (props: Rating) => {
  const { num, className, width } = props;
  const ratingNumber = Number(num);

  const stars = [];
  const starsClasses = cn({
    stars: true,
    "not-integer": ratingNumber - parseInt(num, 10) > 0,
  });

  for (let i = 0; i < ratingNumber - 1; i++) {
    stars.push(
      <div className={cn(className, "icon-star")} key={i}>
        <SvgStar />
      </div>
    );
  }

  if (ratingNumber - parseInt(num, 10) > 0) {
    stars.push(
      <div className={cn(className, "icon-star")} key={props.num}>
        <SvgStarHalf />
      </div>
    );
  } else {
    stars.push(
      <div className={cn(className, "icon-star")} key={props.num}>
        <SvgStar />
      </div>
    );
  }

  return <div style={{width: width}} className={cn(className, starsClasses)}>{stars}</div>;
};

export default Rating;
