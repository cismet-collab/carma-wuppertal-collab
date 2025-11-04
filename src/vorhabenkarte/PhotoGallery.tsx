const PhotoGallery = ({ photos, handleImgClick }) => {
  const MAX_DISPLAY = 4;
  const hasMore = photos.length > MAX_DISPLAY;
  const displayed = photos.slice(0, MAX_DISPLAY);
  const extraCount = photos.length - MAX_DISPLAY;
  const extraLabel = extraCount === 1 ? "weiteres Foto" : "weitere Fotos";

  return (
    <div style={{ padding: "10px 0" }}>
      <b style={{ fontSize: "16px" }}>Foto-Galerie:</b>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: "16px",
          marginTop: "12px",
          justifyContent: "center",
        }}
      >
        {displayed.map((photo, idx) => (
          <div
            key={idx}
            style={{ cursor: "pointer", width: "100%", maxWidth: "150px" }}
          >
            <img
              onClick={() => handleImgClick(idx)}
              src={`https://wunda-geoportal-docs.cismet.de/vorhabenkarte/fotos/${photo.url}`}
              alt={photo.anzeige}
              style={{ width: "100%", aspectRatio: "1", objectFit: "cover" }}
            />
            <div
              style={{
                marginTop: "8px",
                marginLeft: "4px",
                fontSize: "12.25px",
                wordWrap: "break-word",
                lineHeight: "1.4",
              }}
            >
              {photo.anzeige}
            </div>
          </div>
        ))}

        {hasMore && (
          <a
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              paddingLeft: "4px",
            }}
            onClick={() => handleImgClick(MAX_DISPLAY)}
          >
            +{photos.length - MAX_DISPLAY} {extraLabel}
          </a>
        )}
      </div>
    </div>
  );
};

export default PhotoGallery;
