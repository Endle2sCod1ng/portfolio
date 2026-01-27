// import React, { useState, useEffect, useRef } from "react";

// interface SliderProps<T> {
//   slides: T[];
//   autoPlay?: boolean;
//   interval?: number;
// }

// const InfiniteSlider = <T extends React.ReactNode>({
//   slides,
//   autoPlay = true,
//   interval = 3000,
// }: SliderProps<T>) => {
//   // Добавляем клон первого слайда в конец для бесшовного эффекта
//   const extendedSlides = [...slides, slides[0]];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(true);

//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   // Логика бесконечного перехода
//   useEffect(() => {
//     if (currentIndex === extendedSlides.length - 1) {
//       timeoutRef.current = setTimeout(() => {
//         setIsTransitioning(false); // Выключаем анимацию
//         setCurrentIndex(0); // Мгновенно прыгаем в начало
//       }, 500); // Должно совпадать с CSS transition
//     }
//     return () => {
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     };
//   }, [currentIndex, extendedSlides.length]);

//   // Включаем анимацию обратно при обычном переключении
//   const handleStep = (index: number) => {
//     setIsTransitioning(true);
//     setCurrentIndex(index);
//   };

//   return (
//     <div style={{ maxWidth: "600px", margin: "auto", overflow: "hidden" }}>
//       {/* Лента слайдов */}
//       <div
//         style={{
//           display: "flex",
//           transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
//           transform: `translateX(-${currentIndex * 100}%)`,
//         }}
//       >
//         {extendedSlides.map((slide, idx) => (
//           <div
//             key={idx}
//             style={{
//               minWidth: "100%",
//               boxSizing: "border-box",
//               padding: "20px",
//             }}
//           >
//             <div
//               style={{
//                 height: "200px",
//                 background: "#333",
//                 color: "#fff",
//                 borderRadius: "12px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontSize: "2rem",
//               }}
//             >
//               {slide}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Пагинация цифрами */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "8px",
//           marginTop: "10px",
//         }}
//       >
//         {slides.map((_, index) => {
//           // Активная кнопка подсвечивается даже когда мы на "клоне"
//           const isActive = currentIndex % slides.length === index;
//           return (
//             <button
//               key={index}
//               onClick={() => handleStep(index)}
//               style={{
//                 width: "40px",
//                 height: "40px",
//                 borderRadius: "50%",
//                 border: "2px solid #333",
//                 cursor: "pointer",
//                 backgroundColor: isActive ? "#333" : "#fff",
//                 color: isActive ? "#fff" : "#333",
//                 fontWeight: "bold",
//                 transition: "0.3s",
//               }}
//             >
//               {index + 1}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
