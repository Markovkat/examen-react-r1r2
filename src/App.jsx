import { TarjetaCancion } from './componentes/TarjetaCancion';
import { EditorPlaylist } from './componentes/EditorPlaylist';
import { RelojMundial } from './componentes/RelojMundial';
import { InputConContador } from './componentes/InputConContador';
import { IdiomaProvider } from './componentes/IdiomaContext';
import { Saludo } from './componentes/Saludo';

const canciones = [
  {
    id: 'cancion-1',
    titulo: 'Bohemian Rhapsody',
    artista: 'Queen',
    portada: 'https://picsum.photos/seed/musica1/300',
    favorita: true,
  },
  {
    id: 'cancion-2',
    titulo: 'La Bachata',
    artista: 'Manuel Turizo',
    favorita: false,
  },
  {
    id: 'cancion-3',
    titulo: 'Blinding Lights',
    artista: 'The Weeknd',
    portada: 'https://picsum.photos/seed/musica2/300',
    favorita: false,
  },
  {
    id: 'cancion-4',
    titulo: 'Rayando el Sol',
    artista: 'Mana',
    favorita: true,
  },
];

export function App() {
  return (
    <IdiomaProvider>
      <main className="contenedor">
        <h1>Examen React</h1>

        <section className="ejercicio">
          <h2>Ejercicio 1 — TarjetaCancion</h2>
          <div className="lista-tarjetas">
            {canciones.map((cancion) => (
              <TarjetaCancion
                key={cancion.id}
                titulo={cancion.titulo}
                artista={cancion.artista}
                portada={cancion.portada}
                favorita={cancion.favorita}
              />
            ))}
          </div>
        </section>

        <section className="ejercicio">
          <h2>Ejercicio 2 — EditorPlaylist</h2>
          <EditorPlaylist />
        </section>

        <section className="ejercicio">
          <h2>Ejercicio 3 — RelojMundial</h2>
          <RelojMundial />
        </section>

        <section className="ejercicio">
          <h2>Ejercicio 4 — InputConContador</h2>
          <InputConContador />
        </section>

        <section className="ejercicio">
          <h2>Ejercicio 5 — IdiomaContext</h2>
          <Saludo />
        </section>
      </main>
    </IdiomaProvider>
  );
}
