export function TarjetaCancion({ titulo, artista, portada, favorita }) {
  return (
    <div className="tarjeta">
      {portada ? (
        <img src={portada} alt={titulo} className="tarjeta-portada" />
      ) : (
        <div className="tarjeta-sin-portada">Sin portada</div>
      )}

      <div className="tarjeta-info">
        <h3>
          {titulo} {favorita && '❤️'}
        </h3>
        <p>{artista}</p>
      </div>
    </div>
  );
}
