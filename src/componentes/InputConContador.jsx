import { useState, useRef } from 'react';

export function InputConContador() {
  const [texto, setTexto] = useState('');
  const inputRef = useRef(null);
  const contadorRenders = useRef(0);

  contadorRenders.current += 1;

  const enfocarInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
        <input
          ref={inputRef}
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribe aquí..."
        />
        <button type="button" onClick={enfocarInput}>
          Enfocar
        </button>
      </div>

      <p>Cantidad de caracteres: {texto.length}</p>
      <p>Número de renders: {contadorRenders.current}</p>
    </div>
  );
}
