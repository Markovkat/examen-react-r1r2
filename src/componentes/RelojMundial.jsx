import { useState, useEffect } from 'react';

const zonas = [
  { nombre: 'Ciudad de Mexico', valor: 'America/Mexico_City' },
  { nombre: 'Madrid', valor: 'Europe/Madrid' },
  { nombre: 'Tokio', valor: 'Asia/Tokyo' },
];

export function RelojMundial() {
  const [zona, setZona] = useState('America/Mexico_City');
  const [hora, setHora] = useState(
    new Date().toLocaleTimeString('es-MX', { timeZone: 'America/Mexico_City' })
  );

  useEffect(() => {
    // pequeño detalle: se nos olvidó actualizar la hora justo al cambiar de zona
    // y tarda 1 segundo en actualizarse con el intervalo
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString('es-MX', { timeZone: zona }));
    }, 1000);

    return () => {
      clearInterval(intervalo);
    };
  }, [zona]);

  useEffect(() => {
    document.title = `${hora} - ${zona}`;
  }, [hora]); // falta zona en las dependencias

  return (
    <div>
      <label>
        Selecciona una zona horaria:{' '}
        <select value={zona} onChange={(e) => setZona(e.target.value)}>
          {zonas.map((z) => (
            <option key={z.valor} value={z.valor}>
              {z.nombre} ({z.valor})
            </option>
          ))}
        </select>
      </label>

      <p className="hora">{hora}</p>
    </div>
  );
}
