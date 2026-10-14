import { useIdioma } from './IdiomaContext';

export function Saludo() {
  const { idioma, cambiarIdioma, textos } = useIdioma();

  const handleToggle = () => {
    cambiarIdioma(idioma == 'es' ? 'en' : 'es');
  };

  return (
    <div>
      <p style={{ fontSize: '1.2rem', margin: '8px 0' }}>
        {textos.saludo} {textos.despedida}
      </p>
      <p>Idioma actual: <strong>{idioma}</strong></p>
      <button onClick={handleToggle}>
        Cambiar a {idioma == 'es' ? 'ingles' : 'espanol'}
      </button>
    </div>
  );
}
