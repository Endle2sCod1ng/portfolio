import s from "./Burger.module.scss";

interface BurgerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  className?: string;
}

export const Burger = ({ isOpen, setIsOpen, className }: BurgerProps) => {
  return (
    <div
      className={`${s.burgerWrapper} ${isOpen ? s.isOpen : ""} ${
        className ? className : ""
      }`}
      aria-haspopup={true}
      onClick={() => {
        alert(isOpen);
        setIsOpen(!isOpen);
   
      }}
    >
      <span className={`${s.burger} ${isOpen ? s.isOpen : ""}`} />
    </div>
  );
};
