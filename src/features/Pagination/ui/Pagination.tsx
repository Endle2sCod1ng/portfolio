import type { Project } from "@/sections/Projects/ui/Projects";
import s from "./Pagination.module.scss";
import { useState, type FunctionComponent, type ReactNode } from "react";
interface PaginationProps {
  list: ReactNode[] | FunctionComponent[] | Project[];
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
          {list.map((l, i: number) => {
            console.log(l);

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
        onClick={() =>
          paginationNum !== list.length && setSlideNum(paginationNum + 1)
        }
      >
        {">"}
      </button>
    </div>
  );
};
