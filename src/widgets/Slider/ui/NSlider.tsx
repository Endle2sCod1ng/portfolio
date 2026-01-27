import { useState, type ReactNode } from "react";

interface SliderProps<T> {
  slides: T[];
}

export const NSlider = <T extends ReactNode>({ slides }: SliderProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  return (
    <div>
      {/* Окно слайда */}
      <div
        style={{
          textAlign: "center",
        }}
      >
        {slides[currentIndex]}
      </div>

      {/* Цифровая пагинация */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "12px",
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: "35px",
              height: "35px",
              cursor: "pointer",
              fontWeight: "bold",
              border: "2px solid #333",
              borderRadius: "50%",
              transition: "0.3s",
              backgroundColor: currentIndex === index ? "#333" : "#fff",
              color: currentIndex === index ? "#fff" : "#333",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
