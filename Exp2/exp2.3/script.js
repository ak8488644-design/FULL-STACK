const svg = document.getElementById("drawingArea");
const colorPicker = document.getElementById("colorPicker");
const undoBtn = document.getElementById("undoBtn");

let drawing = false;
let currentPath = null;
let paths = [];

svg.addEventListener("mousedown", (e) => {
  drawing = true;

  const rect = svg.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  currentPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  currentPath.setAttribute("d", `M ${x} ${y}`);
  currentPath.setAttribute("stroke", colorPicker.value);
  currentPath.setAttribute("stroke-width", 2);
  currentPath.setAttribute("fill", "none");

  svg.appendChild(currentPath);
  paths.push(currentPath);
});

svg.addEventListener("mousemove", (e) => {
  if (!drawing) return;

  const rect = svg.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  let d = currentPath.getAttribute("d");
  currentPath.setAttribute("d", `${d} L ${x} ${y}`);
});

svg.addEventListener("mouseup", () => {
  drawing = false;
});

undoBtn.addEventListener("click", () => {
  const lastPath = paths.pop();
  if (lastPath) {
    svg.removeChild(lastPath);
  }
});
