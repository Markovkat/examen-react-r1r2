import { useState } from 'react';

export function EditorPlaylist() {
  const [canciones, setCanciones] = useState([]);
  const [nombre, setNombre] = useState('');

  const totalCanciones = canciones.length;
  const totalFavoritas = canciones.filter((c) => c.favorita).length;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) return;

    const nuevaCancion = {
      id: crypto.randomUUID(),
      nombre: nombre.trim(),
      favorita: false,
    };

    setCanciones([...canciones, nuevaCancion]);
    setNombre('');
  };

  const eliminarCancion = (id) => {
    setCanciones(canciones.filter((c) => c.id !== id));
  };

  const alternarFavorita = (id) => {
    setCanciones(
      canciones.map((c) =>
        c.id === id ? { ...c, favorita: !c.favorita } : c
      )
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
        <input
          type="text"
          placeholder="Nombre de la canción"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <button type="submit" disabled={!nombre.trim()}>
          Añadir
        </button>
      </form>

      {totalCanciones === 0 ? (
        <p>No hay canciones en la lista.</p>
      ) : (
        <ul className="playlist">
          {canciones.map((cancion) => (
            <li key={cancion.id}>
              <span>
                {cancion.nombre} {cancion.favorita && '⭐'}
              </span>
              <button
                type="button"
                className={cancion.favorita ? 'boton-favorita-activa' : undefined}
                onClick={() => alternarFavorita(cancion.id)}
              >
                ⭐ Favorita
              </button>
              <button type="button" onClick={() => eliminarCancion(cancion.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}

      <p>
        Total: {totalCanciones} canciones · {totalFavoritas} favoritas
      </p>
    </div>
  );
}
