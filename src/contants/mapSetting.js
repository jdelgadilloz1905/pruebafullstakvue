const POINT_MARKER_ICON_CONFIG = {
  path: "M 0, 0 m -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0",
  strokeOpacity: 0.7,
  strokeWeight: 4,
  strokeColor: "rgb(243,114,114)",
  fillColor: "rgb(255,255,255)",
  fillOpacity: 0.7,
  scale: 1,
};

const nombreDelDiaSegunFecha = (fecha) =>
  [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
    "domingo",
  ][new Date(fecha).getDay()];

export { nombreDelDiaSegunFecha, POINT_MARKER_ICON_CONFIG };
