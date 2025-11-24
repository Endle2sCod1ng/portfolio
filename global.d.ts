// src/types.d.ts

// Эта строка изолирует файл как модуль TypeScript
export { };

// Объявление пользовательского модуля для SVG
declare module '*.svg' {
  // Используйте псевдоним 'SvgComponent' вместо 'component' или 'content'
  const SvgComponent: import("react").FC<import("react").SVGProps<SVGSVGElement>>;
  export default SvgComponent;
}
