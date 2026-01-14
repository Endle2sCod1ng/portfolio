import s from "./Pagination.module.scss";
import { useState } from "react";
interface PaginationProps {
  list: any;
  className?: string;
}
export const Pagination = ({ list, className }: PaginationProps) => {
  const [paginationNum, setSlideNum] = useState<number>(0);
  return (
    <div className={`${s.pagination} ${className ? className : ""}`}>
      <button
        className={`${s.paginationBtn} ${paginationNum === 0 && s.disable}`}
        disabled={paginationNum === 0}
        onClick={() => paginationNum !== 0 && setSlideNum(paginationNum - 1)}
      >
        {"<"}
      </button>
      <ul>
        <li className={s.item}>
          {list.map((l, i) => {
            return (
              <button
                key={i}
                className={`${s.paginationBtn} ${s.item}`}
              >
                {i + 1}
              </button>
            );
          })}
        </li>
      </ul>
      <button
        className={`${s.paginationBtn} ${paginationNum === list.length && s.disable}`}
        disabled={paginationNum === list.length}
        onClick={() => paginationNum !== list.length && setSlideNum(paginationNum + 1)}
      >
        {">"}
      </button>
    </div>
  );
};
