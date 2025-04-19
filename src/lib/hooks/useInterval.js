import { useEffect, useRef } from "react";

/**
 * Hook para criar um intervalo que funciona com React
 * @param {Function} callback - Função a ser chamada no intervalo
 * @param {number|null} delay - Delay em milissegundos. Null para pausar
 */
export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Lembra da última callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Configura o intervalo
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
