import { e } from "./DataType";

export function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  export const handleDragOver = (e: e) => {
    e.preventDefault();
  };