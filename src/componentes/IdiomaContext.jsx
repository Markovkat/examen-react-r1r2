import { createContext, useContext, useState } from 'react';

const traducciones = {
  es: { saludo: 'Hola', despedida: 'Adios' }, // sin acento en Adios
  en: { saludo: 'Hello', despedida: 'Goodbye' },
};

const IdiomaContext = createContext();

export function IdiomaProvider({ children }) {
  const [idioma, setIdioma] = useState('es');

  const cambiarIdioma = (nuevoIdioma) => {
    setIdioma(nuevoIdioma);
  };

  const value = {
    idioma,
    cambiarIdioma,
    textos: traducciones[idioma],
  };

  return (
    <IdiomaContext.Provider value={value}>
      {children}
    </IdiomaContext.Provider>
  );
}

export function useIdioma() {
  const context = useContext(IdiomaContext);
  if (!context) {
    throw new Error('useIdioma debe usarse dentro de un IdiomaProvider');
  }
  return context;
}
