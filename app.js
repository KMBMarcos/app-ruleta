// Única fuente de premios: editar aquí (texto tomado del README).
const PRIZES = [
  "US$500", "Regalo AHG", "US$500", "La próxima es la tuya", "Eso fue calentamiento",
  "US$500", "Artículo promocional AHG", "Regalo AHG", "Reserva de nuevo 😏",
  "El apartamento sí, el premio después 🤭",
];
const N = PRIZES.length, STEP = 360 / N, R = 92, NS = "http://www.w3.org/2000/svg";
const INK = "#111110", BONE = "#F2F0EB";
const spinner = document.getElementById("spinner");

const pt = (deg, r) => { const a = deg * Math.PI / 180; return [r * Math.sin(a), -r * Math.cos(a)]; };
const el = (tag, attrs, parent) => {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  parent.append(e); return e;
};
const wrap = (text, max) => text.split(" ").reduce((ls, w) => {
  const last = ls[ls.length - 1];
  if (last && (last + " " + w).length <= max) ls[ls.length - 1] = last + " " + w; else ls.push(w);
  return ls;
}, []);

PRIZES.forEach((label, i) => {
  const c = i * STEP, [x1, y1] = pt(c - STEP / 2, R), [x2, y2] = pt(c + STEP / 2, R);
  const dark = i % 2 === 0; // alterna tinta / hueso
  el("path", { d: `M0 0L${x1} ${y1}A${R} ${R} 0 0 1 ${x2} ${y2}Z`, fill: dark ? INK : BONE, stroke: INK, "stroke-width": 1 }, spinner);
  const g = el("g", { transform: `rotate(${c})` }, spinner);
  const money = label.startsWith("US$");
  const lines = wrap(label.toUpperCase(), 14);
  const t = el("text", {
    transform: "translate(0,-84) rotate(-90)", "text-anchor": "end", "font-weight": 500,
    "font-size": money ? 10 : 6, fill: dark ? BONE : INK, "font-family": '"Helvetica Neue", Helvetica, Arial, sans-serif',
  }, g);
  lines.forEach((l, k) => {
    el("tspan", { x: 0, dy: k ? "1.15em" : `${0.35 - 0.575 * (lines.length - 1)}em` }, t).textContent = l;
  });
});

// Ángulo final del spinner -> índice de la casilla bajo el puntero (arriba).
const slotAt = deg => Math.floor((((-deg % 360) + 360) % 360 + STEP / 2) / STEP) % N;
for (let i = 0; i < N; i++) for (const j of [-14, 0, 14]) console.assert(slotAt(-i * STEP + j - 720) === i, "slotAt", i, j);

let angle = 0, spinning = false;
const btn = document.getElementById("spin"), prizeEl = document.getElementById("prize"), noteEl = document.getElementById("note");
function spin() {
  if (spinning) return;
  spinning = btn.disabled = true;
  prizeEl.textContent = "Girando…"; prizeEl.className = "idle"; noteEl.textContent = "";
  const i = crypto.getRandomValues(new Uint32Array(1))[0] % N;
  const jitter = (Math.random() - 0.5) * (STEP - 8); // se mantiene dentro de la casilla
  angle = Math.ceil(angle / 360) * 360 + (5 + Math.floor(Math.random() * 3)) * 360 - i * STEP + jitter;
  spinner.style.transform = `rotate(${angle}deg)`;
}
spinner.addEventListener("transitionend", e => {
  if (e.propertyName !== "transform" || !spinning) return;
  const prize = PRIZES[slotAt(angle)];
  prizeEl.textContent = prize; prizeEl.className = "";
  noteEl.textContent = /US\$|AHG/.test(prize) ? "¡Felicidades!" : "Gracias por participar.";
  btn.textContent = "Girar de nuevo →";
  spinning = btn.disabled = false;
});
btn.addEventListener("click", spin);
document.getElementById("svg").addEventListener("click", spin);
