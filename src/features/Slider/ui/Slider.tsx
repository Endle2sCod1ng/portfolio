import s from "./Slider.module.scss";
import { useState } from "react";
interface SliderProps {
  list: any;
  className?: string;
}
export const Slider = ({ list, className }: SliderProps) => {
  const [slideNum, setSlideNum] = useState<number>(0);
  return (
    <div className={`${s.slider} ${className ? className : ""}`}>
      <button
        className={`${s.sliderBtn} ${slideNum === 0 && s.disable}`}
        disabled={slideNum === 0}
        onClick={() => slideNum !== 0 && setSlideNum(slideNum - 1)}
      >
        {"<"}
      </button>
      <ul>
        <li className={s.item}>
          {list.map((l, i) => {
            return (
              <button
                key={i}
                className={`${s.sliderBtn} ${s.item}`}
              >
                {i + 1}
              </button>
            );
          })}
        </li>
      </ul>
      <button
        className={`${s.sliderBtn} ${slideNum === list.length && s.disable}`}
        disabled={slideNum === list.length}
        onClick={() => slideNum !== list.length && setSlideNum(slideNum + 1)}
      >
        {">"}
      </button>
    </div>
  );
};
