// TGA Pre-Trip Inspection — 3D walkaround. Model in meters: +x = front, +y = up, -z = driver (left) side.
const STEPS = [
  { id: 'engine', parts: ['engine_block', 'dipstick_handle', 'coolant_reservoir', 'ps_reservoir', 'belt'], pin: [2.45, 1.86, 0], cam: [2.4, 4.6, -4.2], tgt: [2.6, 1.4, 0], hood: true,
    en: { t: 'Engine Compartment', a: 'Front · Hood tilted forward', items: [
      ['Leaks', 'I’ll look under the engine for puddles or drips of oil, coolant, or fuel.'],
      ['Oil level', 'I’ll pull the dipstick — level is between the add and full marks.'],
      ['Coolant', 'Level is visible in the reservoir sight glass; hoses are not cracked or leaking.'],
      ['Power steering fluid', 'Reservoir is above the minimum mark; hoses secure, no leaks.'],
      ['Belts', 'Not cracked or frayed, with no more than ¾" of play at the center.'] ] },
    es: { t: 'Compartimiento del motor', a: 'Frente · Cofre inclinado', items: [
      ['Fugas', 'Revisaré debajo del motor que no haya charcos ni goteo de aceite, anticongelante o combustible.'],
      ['Nivel de aceite', 'Sacaré la varilla — el nivel está entre las marcas de agregar y lleno.'],
      ['Anticongelante', 'El nivel se ve en el depósito; las mangueras no están agrietadas ni con fugas.'],
      ['Líquido de dirección', 'El depósito está arriba del mínimo; mangueras seguras, sin fugas.'],
      ['Bandas', 'Sin grietas ni desgaste, con no más de ¾" de juego en el centro.'] ] } },
  { id: 'steer', xray: true, parts: ['steering_box', 'drag_link', 'leaf_spring', 'shock_absorber'], pin: [3.05, 0.95, -0.62], cam: [4.9, 1.5, -3.3], tgt: [2.9, 0.75, -0.45],
    en: { t: 'Steering & Front Suspension', a: 'Driver side · Steer axle', items: [
      ['Steering box', 'Securely mounted, not leaking, no missing nuts, bolts or cotter keys.'],
      ['Steering linkage', 'Pitman arm, drag link and tie rod are not cracked, bent or loose.'],
      ['Leaf springs', 'No missing, shifted, cracked or broken leaves.'],
      ['Mounts & shocks', 'Spring mounts and U-bolts secure; shock absorbers not leaking.'] ] },
    es: { t: 'Dirección y suspensión delantera', a: 'Lado del conductor · Eje direccional', items: [
      ['Caja de dirección', 'Bien montada, sin fugas, sin tuercas, pernos ni chavetas faltantes.'],
      ['Varillaje', 'El brazo pitman, la barra de arrastre y la barra de acoplamiento no están agrietados, doblados ni flojos.'],
      ['Muelles', 'Sin hojas faltantes, desplazadas, agrietadas o rotas.'],
      ['Soportes y amortiguadores', 'Soportes y abrazaderas en U seguros; amortiguadores sin fugas.'] ] } },
  { id: 'frontwheel', xray: true, parts: ['tire_tread', 'rim', 'lug_nut', 'hub', 'brake_chamber'], pin: [2.7, 0.52, -1.32], cam: [4.3, 1.0, -3.6], tgt: [2.7, 0.55, -1.0],
    en: { t: 'Front Wheel & Brakes', a: 'Driver side · Steer tire', items: [
      ['Tire', 'At least 4/32" tread on a steer tire; even wear, no cuts or bulges; properly inflated.'],
      ['Rim', 'Not bent, cracked or damaged; no illegal welds.'],
      ['Lug nuts', 'All present and tight — no rust trails or shiny threads.'],
      ['Hub oil seal', 'Not leaking; oil level visible in the sight window.'],
      ['Brakes', 'Chamber, slack adjuster and hoses secure; pushrod travel under 1" when pulled by hand.'] ] },
    es: { t: 'Rueda y frenos delanteros', a: 'Lado del conductor · Llanta direccional', items: [
      ['Llanta', 'Mínimo 4/32" de dibujo en llanta direccional; desgaste parejo, sin cortes ni bultos; bien inflada.'],
      ['Rin', 'No está doblado, agrietado ni dañado; sin soldaduras ilegales.'],
      ['Tuercas', 'Todas presentes y apretadas — sin marcas de óxido ni roscas brillantes.'],
      ['Sello del cubo', 'Sin fugas; el nivel de aceite se ve en la ventanilla.'],
      ['Frenos', 'Cámara, ajustador de holgura y mangueras seguros; recorrido del vástago menor a 1" al jalarlo con la mano.'] ] } },
  { id: 'front', parts: ['headlight', 'turn_signal', 'clearance_light', 'windshield', 'mirror_housing'], pin: [3.66, 1.36, -0.82], cam: [8.2, 2.3, -2.2], tgt: [3.2, 1.6, 0],
    en: { t: 'Front Lights & Glass', a: 'Front of truck', items: [
      ['Headlights', 'Clean, correct color, working on high and low beam.'],
      ['Turn signals & 4-ways', 'Amber, clean, flashing.'],
      ['Clearance lights', 'Roof lights clean and working.'],
      ['Windshield & wipers', 'No cracks or obstructions; wiper arms and blades secure.'],
      ['Mirrors', 'Clean, adjusted, securely mounted.'] ] },
    es: { t: 'Luces delanteras y parabrisas', a: 'Frente del camión', items: [
      ['Faros', 'Limpios, del color correcto, funcionan en luz alta y baja.'],
      ['Direccionales e intermitentes', 'Ámbar, limpias, parpadeando.'],
      ['Luces de gálibo', 'Luces del techo limpias y funcionando.'],
      ['Parabrisas y limpiadores', 'Sin grietas ni obstrucciones; brazos y hojas seguros.'],
      ['Espejos', 'Limpios, ajustados, bien montados.'] ] } },
  { id: 'fuel', parts: ['step_tread', 'fuel_tank', 'def_tank', 'battery_box'], pin: [-0.55, 0.78, -1.32], cam: [1.2, 1.9, -5.6], tgt: [0.1, 1.0, -1.0],
    en: { t: 'Driver Side & Fuel Area', a: 'Driver side · Under the cab', items: [
      ['Door & steps', 'Door opens, closes and latches; steps clean and secure.'],
      ['Fuel tank', 'Securely mounted, straps tight, no leaks; cap tight with gasket in place.'],
      ['DEF tank', 'Cap secure, no leaks.'],
      ['Battery box', 'Batteries secure, connections tight, cover in place.'] ] },
    es: { t: 'Lado del conductor y combustible', a: 'Lado del conductor · Bajo la cabina', items: [
      ['Puerta y escalones', 'La puerta abre, cierra y asegura; escalones limpios y firmes.'],
      ['Tanque de combustible', 'Bien montado, correas apretadas, sin fugas; tapón apretado con empaque.'],
      ['Tanque DEF', 'Tapón seguro, sin fugas.'],
      ['Caja de baterías', 'Baterías seguras, conexiones apretadas, tapa en su lugar.'] ] } },
  { id: 'coupling', xray: true, parts: ['air_line_service', 'electrical_line', 'fifth_wheel_plate', 'locking_jaws', 'apron'], pin: [-3.0, 1.95, -0.2], cam: [-2.9, 1.9, -5.2], tgt: [-3.6, 1.45, 0],
    en: { t: 'Coupling System', a: 'Between tractor & trailer', items: [
      ['Air lines', 'Blue service and red emergency lines connected, not cut, chafed or tangled; glad-hand seals in place.'],
      ['Electrical line', 'Plugged in and secure, not cut or spliced.'],
      ['Fifth wheel', 'Platform and mounting bolts secure; plate properly greased.'],
      ['Locking jaws', 'Closed around the kingpin shank, not the head; release arm locked with safety latch engaged.'],
      ['Apron & kingpin', 'Trailer apron sits flat on the fifth wheel with no gap; kingpin not bent or damaged.'] ] },
    es: { t: 'Sistema de acoplamiento', a: 'Entre tractor y remolque', items: [
      ['Líneas de aire', 'Línea azul de servicio y roja de emergencia conectadas, sin cortes, rozaduras ni enredos; sellos de las manitas en su lugar.'],
      ['Línea eléctrica', 'Conectada y segura, sin cortes ni empalmes.'],
      ['Quinta rueda', 'Plataforma y pernos de montaje seguros; placa bien engrasada.'],
      ['Mordazas', 'Cerradas alrededor del cuello del perno rey, no de la cabeza; palanca asegurada con el seguro puesto.'],
      ['Placa y perno rey', 'La placa del remolque asienta plana sobre la quinta rueda, sin espacio; perno rey sin dobleces ni daños.'] ] } },
  { id: 'drive', xray: true, parts: ['tire_tread', 'rim', 'brake_chamber', 'air_bag', 'mud_flap'], pin: [-4.05, 0.52, -1.36], cam: [-2.4, 1.1, -4.9], tgt: [-4.05, 0.6, -1.0],
    en: { t: 'Drive Axles & Brakes', a: 'Driver side · Tractor tandem', items: [
      ['Tires', 'At least 2/32" tread; duals not touching; nothing lodged between them.'],
      ['Rims & lug nuts', 'Not bent or cracked; all lug nuts present and tight.'],
      ['Brakes', 'Chambers, slack adjusters and hoses secure; drums not cracked; linings not worn thin.'],
      ['Suspension', 'Air bags not leaking or torn; torque arms and mounts secure.'],
      ['Mud flaps', 'Secure, not torn or dragging.'] ] },
    es: { t: 'Ejes de tracción y frenos', a: 'Lado del conductor · Tándem del tractor', items: [
      ['Llantas', 'Mínimo 2/32" de dibujo; las duales no se tocan; nada atorado entre ellas.'],
      ['Rines y tuercas', 'No doblados ni agrietados; todas las tuercas presentes y apretadas.'],
      ['Frenos', 'Cámaras, ajustadores y mangueras seguros; tambores sin grietas; balatas sin desgaste excesivo.'],
      ['Suspensión', 'Bolsas de aire sin fugas ni roturas; brazos de torsión y soportes seguros.'],
      ['Loderas', 'Seguras, sin roturas, sin arrastrar.'] ] } },
  { id: 'trailerfront', parts: ['trailer_gladhands', 'trailer_front_wall', 'landing_leg', 'crank_handle', 'trailer_frame'], pin: [-6.39, 0.8, -1.0], cam: [-1.6, 2.6, -7.2], tgt: [-5.4, 1.5, -0.4],
    en: { t: 'Trailer Front & Landing Gear', a: 'Trailer · Front section', items: [
      ['Trailer glad hands', 'Seals in good condition; lines connected and not leaking.'],
      ['Header board', 'Front wall not damaged; cargo secured from shifting.'],
      ['Landing gear', 'Fully raised, no missing parts, not bent or damaged.'],
      ['Crank handle', 'Present and secured in its bracket.'],
      ['Frame & crossmembers', 'Not cracked, bent or broken.'] ] },
    es: { t: 'Frente del remolque y patas', a: 'Remolque · Sección delantera', items: [
      ['Manitas del remolque', 'Sellos en buen estado; líneas conectadas y sin fugas.'],
      ['Pared delantera', 'Sin daños; carga asegurada para que no se mueva.'],
      ['Patas de apoyo', 'Totalmente levantadas, sin piezas faltantes, sin dobleces ni daños.'],
      ['Manivela', 'Presente y asegurada en su soporte.'],
      ['Chasís y travesaños', 'Sin grietas, dobleces ni roturas.'] ] } },
  { id: 'trailertandem', xray: true, parts: ['tire_tread', 'rim', 'brake_chamber', 'trailer_spring', 'slider_pin'], pin: [-17.7, 0.52, -1.36], cam: [-15.0, 1.3, -5.4], tgt: [-17.7, 0.7, -0.9],
    en: { t: 'Trailer Tandems', a: 'Driver side · Trailer axles', items: [
      ['Tires', 'At least 2/32" tread; duals not touching; properly inflated.'],
      ['Rims & lug nuts', 'Not bent or cracked; all lug nuts present and tight.'],
      ['Brakes', 'Chambers, slack adjusters and hoses secure; drums and linings in good condition.'],
      ['Suspension', 'Springs or air bags not broken or leaking; mounts secure.'],
      ['Sliding tandem', 'Locking pins fully engaged; release handle locked.'] ] },
    es: { t: 'Ejes del remolque', a: 'Lado del conductor · Ejes del remolque', items: [
      ['Llantas', 'Mínimo 2/32" de dibujo; las duales no se tocan; bien infladas.'],
      ['Rines y tuercas', 'No doblados ni agrietados; todas las tuercas presentes y apretadas.'],
      ['Frenos', 'Cámaras, ajustadores y mangueras seguros; tambores y balatas en buen estado.'],
      ['Suspensión', 'Muelles o bolsas de aire sin roturas ni fugas; soportes seguros.'],
      ['Tándem deslizable', 'Pernos de seguro bien enganchados; palanca asegurada.'] ] } },
  { id: 'trailerrear', parts: ['rear_door', 'trailer_tail_light', 'conspicuity_tape', 'icc_bumper'], pin: [-19.3, 2.6, -0.65], cam: [-26.5, 2.8, -5.0], tgt: [-19.2, 2.0, 0],
    en: { t: 'Trailer Rear', a: 'Rear of trailer', items: [
      ['Doors & hinges', 'Closed and latched; hinges secure; seals intact.'],
      ['Lights', 'Tail, brake, turn and clearance lights clean and working.'],
      ['Reflective tape', 'Red and white conspicuity tape clean and not missing.'],
      ['Rear impact guard', 'Not bent or cracked; securely mounted.'] ] },
    es: { t: 'Parte trasera del remolque', a: 'Atrás del remolque', items: [
      ['Puertas y bisagras', 'Cerradas y aseguradas; bisagras firmes; sellos intactos.'],
      ['Luces', 'Luces traseras, de freno, direccionales y de gálibo limpias y funcionando.'],
      ['Cinta reflejante', 'Cinta roja y blanca limpia, sin partes faltantes.'],
      ['Defensa trasera', 'Sin dobleces ni grietas; bien montada.'] ] } },
  { id: 'cab', pin: [0.95, 2.55, -1.24], cam: [3.8, 3.4, -6.6], tgt: [0.6, 2.2, 0],
    en: { t: 'In-Cab & Air Brake Check', a: 'Driver seat · Engine running', items: [
      ['Gauges', 'Oil and air pressure build to normal; no warning lights.'],
      ['Air build-up', '50 to 90 psi within 3 minutes.'],
      ['Leak test', 'Under 3 psi loss in one minute with brakes applied (4 psi for a combination).'],
      ['Low-air warning', 'Buzzer and light activate at or before 60 psi.'],
      ['Spring brakes', 'Parking valve pops out between 20 and 45 psi.'],
      ['Horn, wipers, defroster', 'All working.'] ] },
    es: { t: 'Cabina y prueba de frenos de aire', a: 'Asiento del conductor · Motor encendido', items: [
      ['Indicadores', 'La presión de aceite y de aire suben a lo normal; sin luces de advertencia.'],
      ['Acumulación de aire', 'De 50 a 90 psi en 3 minutos.'],
      ['Prueba de fugas', 'Menos de 3 psi de pérdida en un minuto con frenos aplicados (4 psi en combinación).'],
      ['Alarma de aire bajo', 'El zumbador y la luz se activan a 60 psi o antes.'],
      ['Frenos de resorte', 'La válvula de estacionamiento salta entre 20 y 45 psi.'],
      ['Claxon, limpiadores, desempañador', 'Todo funciona.'] ] } },
];
const OVERVIEW = { cam: [9.5, 7.5, -15.5], tgt: [-6.5, 1.6, 0] };
const UI = {
  en: { title: 'Pre-Trip Inspection', subtitle: '3D Walkaround · Class A Tractor', loading: 'Loading truck…', overview: 'Overview',
    hint: 'Drag to rotate · Scroll to zoom', stops: 'Inspection stops', disclaimer: 'Study aid — always follow the current CA CDL Handbook.', reset: 'Reset',
    introK: 'CDL Class A · Study tool', introH: 'Walk the truck like the examiner will.',
    introP: 'Eleven stops, front to back, driver side first. Click a numbered marker or a part of the truck — or take the guided tour. Check off each item as you say it out loud.',
    start: 'Start guided tour', resume: 'Resume tour', step: (i, n) => `Stop ${i} of ${n}`, prev: 'Back', next: 'Next stop', finish: 'Finish',
    doneK: 'Walkaround complete', doneH: 'Every item checked.', doneP: 'Run it again out loud, without looking. Then practice it on a real truck with your instructor.', again: 'Start over' },
  es: { title: 'Inspección previa al viaje', subtitle: 'Recorrido 3D · Tractor Clase A', loading: 'Cargando camión…', overview: 'Vista general',
    hint: 'Arrastra para girar · Desplaza para acercar', stops: 'Puntos de inspección', disclaimer: 'Material de estudio — sigue siempre el Manual CDL de CA vigente.', reset: 'Reiniciar',
    introK: 'CDL Clase A · Herramienta de estudio', introH: 'Recorre el camión como lo hará el examinador.',
    introP: 'Once puntos, de adelante hacia atrás, empezando por el lado del conductor. Haz clic en un marcador o en una parte del camión — o toma el recorrido guiado. Marca cada punto mientras lo dices en voz alta.',
    start: 'Iniciar recorrido guiado', resume: 'Continuar recorrido', step: (i, n) => `Punto ${i} de ${n}`, prev: 'Atrás', next: 'Siguiente', finish: 'Terminar',
    doneK: 'Recorrido completo', doneH: 'Todos los puntos revisados.', doneP: 'Repítelo en voz alta sin mirar. Luego practícalo en un camión real con tu instructor.', again: 'Empezar de nuevo' },
};

// ---------- state ----------
const LS = 'tga-pretrip-3d-v1';
let saved = {}; try { saved = JSON.parse(localStorage.getItem(LS) || '{}'); } catch (e) {}
const state = { lang: saved.lang || 'en', step: -1, checks: saved.checks || {} };
const save = () => localStorage.setItem(LS, JSON.stringify({ lang: state.lang, checks: state.checks }));
const isChecked = (s, i) => !!state.checks[STEPS[s].id + ':' + i];
const countDone = (s) => STEPS[s].en.items.filter((_, i) => isChecked(s, i)).length;
const stepDone = (s) => countDone(s) === STEPS[s].en.items.length;

const $ = (id) => document.getElementById(id);
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function renderCard() {
  const u = UI[state.lang], card = $('card');
  const totalItems = STEPS.reduce((a, s) => a + s.en.items.length, 0);
  const doneItems = STEPS.reduce((a, _, i) => a + countDone(i), 0);
  if (state.step < 0) {
    const all = doneItems === totalItems, started = doneItems > 0;
    card.innerHTML = all
      ? `<p class="kicker">${u.doneK}</p><h1>${u.doneH}</h1><p class="lead">${u.doneP}</p>
         <div class="nav"><button class="btn primary grow" data-act="restart">${u.again}</button></div>`
      : `<p class="kicker">${u.introK}</p><h1>${u.introH}</h1><p class="lead">${u.introP}</p>
         <div class="progress"><i style="width:${(doneItems / totalItems) * 100}%"></i></div>
         <div class="nav"><button class="btn primary grow" data-act="start">${started ? u.resume : u.start}</button></div>`;
  } else {
    const s = STEPS[state.step], c = s[state.lang], last = state.step === STEPS.length - 1;
    card.innerHTML = `<p class="kicker">${u.step(state.step + 1, STEPS.length)}</p><h1>${esc(c.t)}</h1><p class="area">${esc(c.a)}</p>
      <ul class="items">${c.items.map((it, i) => `<li data-item="${i}"><label><input type="checkbox" data-i="${i}" ${isChecked(state.step, i) ? 'checked' : ''}><span class="it"><b>${esc(it[0])}</b><span>${esc(it[1])}</span></span></label></li>`).join('')}</ul>
      <div class="nav"><button class="btn outline" data-act="prev" ${state.step === 0 ? 'disabled' : ''}>${u.prev}</button>
      <button class="btn primary grow" data-act="next">${last ? u.finish : u.next}</button></div>`;
  }
  card.parentElement.scrollTop = 0;
}
function renderList() {
  $('steplist').innerHTML = STEPS.map((s, i) => `<button class="srow ${i === state.step ? 'active' : ''} ${stepDone(i) ? 'done' : ''}" data-step="${i}">
    <span class="n">${i + 1}</span><span class="t">${esc(s[state.lang].t)}</span><span class="c">${countDone(i)}/${s.en.items.length}</span></button>`).join('');
  $('pins').classList.toggle('stepmode', state.step >= 0);
  $('total').textContent = `${STEPS.filter((_, i) => stepDone(i)).length}/${STEPS.length}`;
  pinEls.forEach((p, i) => {
    p.classList.toggle('active', i === state.step);
    p.classList.toggle('mini', state.step >= 0 && i !== state.step);
    p.classList.toggle('done', stepDone(i) && i !== state.step);
    p.querySelector('.tip').textContent = STEPS[i][state.lang].t;
  });
}
function renderI18n() {
  const u = UI[state.lang];
  document.documentElement.lang = state.lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = u[el.dataset.i18n]; });
  document.querySelectorAll('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === state.lang)));
}
function renderAll() { renderI18n(); renderCard(); renderList(); }

// part labels
let labelsFor = null, labels = [], focusItem = null;
const labelLayer = document.createElement('div'); labelLayer.className = 'labels';
$('pins').before(labelLayer);
function buildLabels() {
  labelLayer.innerHTML = ''; labels = []; focusItem = null;
  if (state.step < 0 || !labelsFor) return;
  const c = STEPS[state.step][state.lang];
  labels = labelsFor(state.step).map((p) => {
    const el = document.createElement('div'); el.className = 'plabel';
    el.innerHTML = `<i></i><span>${esc(c.items[p.i][0])}</span>`;
    el.addEventListener('mouseenter', () => setFocus(p.i)); el.addEventListener('mouseleave', () => setFocus(null));
    labelLayer.appendChild(el); return { ...p, el };
  });
}
function setFocus(i) {
  focusItem = i;
  labels.forEach((l) => l.el.classList.toggle('focus', l.i === i));
  document.querySelectorAll('#card li[data-item]').forEach((li) => li.classList.toggle('focus', +li.dataset.item === i));
}
$('card').addEventListener('mouseover', (e) => { const li = e.target.closest('li[data-item]'); setFocus(li ? +li.dataset.item : null); });
$('card').addEventListener('mouseleave', () => setFocus(null));

// pins
const pinEls = STEPS.map((s, i) => {
  const b = document.createElement('button');
  b.className = 'pin'; b.innerHTML = `${i + 1}<span class="tip"></span>`;
  b.addEventListener('click', () => goTo(i));
  $('pins').appendChild(b); return b;
});

$('card').addEventListener('click', (e) => {
  const a = e.target.closest('[data-act]'); if (!a) return;
  const act = a.dataset.act;
  if (act === 'start') { const f = STEPS.findIndex((_, i) => !stepDone(i)); goTo(f < 0 ? 0 : f); }
  if (act === 'restart') { state.checks = {}; save(); goTo(0); }
  if (act === 'prev') goTo(state.step - 1);
  if (act === 'next') goTo(state.step + 1 < STEPS.length ? state.step + 1 : -1);
});
$('card').addEventListener('change', (e) => {
  if (!e.target.matches('input[type=checkbox]')) return;
  state.checks[STEPS[state.step].id + ':' + e.target.dataset.i] = e.target.checked; save(); renderList();
});
$('steplist').addEventListener('click', (e) => { const r = e.target.closest('[data-step]'); if (r) goTo(+r.dataset.step); });
document.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => { state.lang = b.dataset.lang; save(); renderAll(); buildLabels(); }));
$('overviewBtn').addEventListener('click', () => goTo(-1));
$('resetBtn').addEventListener('click', () => { state.checks = {}; save(); goTo(-1); });
document.addEventListener('keydown', (e) => {
  if (e.target.matches('input')) return;
  if (e.key === 'ArrowRight') goTo(Math.min(state.step + 1, STEPS.length - 1));
  if (e.key === 'ArrowLeft' && state.step > 0) goTo(state.step - 1);
  if (e.key === 'Escape') goTo(-1);
});
renderAll();

// ---------- 3D ----------
const stage = document.querySelector('three-d-stage');
const { THREE } = await stage.ready;
const sroot = stage.shadowRoot;
const hide = document.createElement('style'); hide.textContent = '.toolbar,.note{display:none!important}'; sroot.appendChild(hide);

const M = (name, color, roughness, metalness = 0, extra = {}) => { const m = new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra }); m.name = name; return m; };
const mat = {
  paint: M('paint_white', 0xf4f3f0, 0.32, 0.05),
  maroon: M('paint_maroon', 0x5c1a1d, 0.4, 0.05),
  chrome: M('chrome', 0xd9dcdf, 0.18, 0.4),
  alum: M('aluminum', 0xc4c7ca, 0.32, 0.35),
  black: M('black_plastic', 0x1f1e1d, 0.6),
  frame: M('frame_black', 0x262423, 0.5, 0.2),
  rubber: M('rubber', 0x1a1918, 0.88),
  glass: M('glass', 0x1b2229, 0.08, 0.2, { side: THREE.DoubleSide }),
  lens: M('headlight_lens', 0xe8edf0, 0.1, 0.1, { emissive: 0xfff6e0, emissiveIntensity: 0.25 }),
  amber: M('amber_light', 0xe8a22e, 0.3, 0, { emissive: 0xe8a22e, emissiveIntensity: 0.35 }),
  red: M('red_light', 0xc0202a, 0.3, 0, { emissive: 0xc0202a, emissiveIntensity: 0.35 }),
  engine: M('engine_gray', 0x5a5755, 0.55, 0.3),
  yellow: M('dipstick_yellow', 0xf2c230, 0.4),
  coolant: M('coolant_tank', 0xe9ecdc, 0.25, 0, { transparent: true, opacity: 0.85 }),
  blue: M('air_blue', 0x1e4fb8, 0.45),
  redHose: M('air_red', 0xb5232b, 0.45),
  grease: M('fifthwheel_grease', 0x3a3532, 0.35, 0.3),
  defBlue: M('def_blue', 0x1e2a66, 0.5),
  plate: M('plate_white', 0xf5f2ed, 0.5),
};

const truck = new THREE.Group(); truck.name = 'freightliner_style_tractor';
const pickables = [];
function tag(mesh, step) {
  if (step == null) return mesh;
  mesh.material = mesh.material.clone();
  mesh.material.userData.base = mesh.material.emissive.clone();
  mesh.material.userData.baseI = mesh.material.emissiveIntensity;
  mesh.userData.step = step; pickables.push(mesh); return mesh;
}
function add(name, geo, m, pos, parent = truck, step, rot) {
  const mesh = new THREE.Mesh(geo, m); mesh.name = name;
  if (pos) mesh.position.set(...pos);
  if (rot) mesh.rotation.set(...rot);
  parent.add(mesh); return tag(mesh, step);
}
const box = (name, m, s, p, parent, step, rot) => add(name, new THREE.BoxGeometry(...s), m, p, parent, step, rot);
function cyl(name, m, r, len, axis, p, parent, step, seg = 32, r2) {
  const g = new THREE.CylinderGeometry(r2 ?? r, r, len, seg);
  if (axis === 'z') g.rotateX(Math.PI / 2); if (axis === 'x') g.rotateZ(Math.PI / 2);
  return add(name, g, m, p, parent, step);
}
function rod(name, m, r, a, b, parent = truck, step) {
  const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b), d = B.clone().sub(A);
  const mesh = add(name, new THREE.CylinderGeometry(r, r, d.length(), 12), m, null, parent, step);
  mesh.position.copy(A).add(B).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()); return mesh;
}
function profile(name, m, build, width, bevel, parent = truck, step) {
  const s = new THREE.Shape(); build(s);
  const g = new THREE.ExtrudeGeometry(s, { depth: width - 2 * bevel, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel * 0.8, bevelSegments: 5, curveSegments: 28 });
  g.translate(0, 0, -(width - 2 * bevel) / 2);
  return add(name, g, m, null, parent, step);
}
const poly = (pts) => (s) => { pts.forEach((p, i) => (i ? s.lineTo(...p) : s.moveTo(...p))); s.closePath(); };

// Frame & chassis
for (const z of [-0.43, 0.43]) box('frame_rail', mat.frame, [8.75, 0.28, 0.1], [-0.93, 1.0, z]);
for (const x of [3.3, 1.6, -0.6, -1.9, -3.1, -4.05, -4.9, -5.25]) box('crossmember', mat.frame, [0.12, 0.2, 0.76], [x, 1.0, 0]);
box('bumper', mat.chrome, [0.22, 0.44, 2.46], [3.62, 0.72, 0], truck, 3);
box('air_dam', mat.black, [0.16, 0.12, 2.3], [3.58, 0.45, 0]);
box('tow_hook_l', mat.frame, [0.08, 0.1, 0.08], [3.76, 0.6, -0.55]); box('tow_hook_r', mat.frame, [0.08, 0.1, 0.08], [3.76, 0.6, 0.55]);

// Cab + sleeper (single body, raised-roof)
profile('cab_sleeper', mat.paint, poly([[1.52, 1.25], [1.55, 2.3], [0.95, 3.05], [0.1, 3.27], [-0.65, 3.93], [-2.3, 3.95], [-2.3, 1.25]]), 2.44, 0.09);
// windshield
const wsAng = Math.atan2(0.75, -0.6);
box('windshield', mat.glass, [0.8, 0.012, 2.12], [1.322, 2.735, 0], truck, 3, [0, 0, wsAng]);
box('windshield_divider', mat.black, [0.8, 0.016, 0.05], [1.326, 2.738, 0], truck, null, [0, 0, wsAng]);
// side windows, doors, stripe
const winShape = new THREE.Shape(); poly([[0.35, 2.22], [1.38, 2.22], [0.99, 2.86], [0.35, 2.86]])(winShape);
for (const sgn of [-1, 1]) {
  const w = add('side_window', new THREE.ShapeGeometry(winShape), mat.glass, [0, 0, sgn * 1.224], truck, sgn < 0 ? 10 : null);
  box('door_seam_front', mat.black, [0.012, 1.0, 0.004], [1.46, 1.82, sgn * 1.224]);
  box('door_seam_rear', mat.black, [0.012, 1.6, 0.004], [0.3, 2.05, sgn * 1.224]);
  box('door_handle', mat.chrome, [0.18, 0.04, 0.03], [0.48, 2.05, sgn * 1.235]);
  box('stripe_maroon', mat.maroon, [3.55, 0.1, 0.006], [-0.5, 1.55, sgn * 1.226]);
  box('stripe_red', M('stripe_red', 0xc0202a, 0.4), [3.55, 0.03, 0.006], [-0.5, 1.475, sgn * 1.226]);
  box('sleeper_window', mat.glass, [0.36, 0.3, 0.006], [-1.0, 2.55, sgn * 1.226]);
  box('side_extender', mat.paint, [0.42, 2.45, 0.03], [-2.5, 2.6, sgn * 1.2]);
  // mirrors
  rod('mirror_arm', mat.chrome, 0.018, [1.4, 2.3, sgn * 1.22], [1.5, 2.36, sgn * 1.52], truck, 3);
  rod('mirror_arm_upper', mat.chrome, 0.018, [1.3, 2.85, sgn * 1.2], [1.5, 2.8, sgn * 1.52], truck, 3);
  box('mirror_housing', mat.black, [0.07, 0.58, 0.24], [1.5, 2.58, sgn * 1.55], truck, 3);
  box('mirror_glass', mat.glass, [0.006, 0.52, 0.2], [1.462, 2.58, sgn * 1.55], truck, 3);
  // steps
  box('step_box', mat.black, [0.62, 0.78, 0.14], [1.05, 0.88, sgn * 1.15], truck, sgn < 0 ? 4 : null);
  for (const y of [0.58, 0.95]) box('step_tread', mat.alum, [0.56, 0.035, 0.24], [1.05, y, sgn * 1.2], truck, sgn < 0 ? 4 : null);
  // grab handle
  rod('grab_handle', mat.chrome, 0.018, [0.28, 1.5, sgn * 1.25], [0.28, 2.6, sgn * 1.25]);
}
// roof clearance lights
for (const z of [-0.5, -0.25, 0, 0.25, 0.5]) box('clearance_light', mat.amber, [0.08, 0.035, 0.1], [0.62, 3.2, z], truck, 3, [0, 0, -0.25]);
for (const sgn of [-1, 1]) box('roof_marker', mat.amber, [0.06, 0.06, 0.03], [-2.2, 3.85, sgn * 1.225]);
// TGA decal on sleeper sides
new THREE.TextureLoader().load('assets/tga-logo.png', (tex) => {
  tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  const dm = new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: 0.4 }); dm.name = 'tga_decal';
  for (const sgn of [-1, 1]) {
    const d = add('tga_decal', new THREE.PlaneGeometry(1.15, 0.556), dm, [-1.45, 2.05, sgn * 1.229]);
    if (sgn < 0) d.rotation.y = Math.PI;
  }
});

// Hood (tilts forward on a pivot at the bumper)
const hood = new THREE.Group(); hood.name = 'hood_assembly'; hood.position.set(3.55, 0.92, 0); truck.add(hood);
const archA = Math.asin(0.4 / 0.68);
const hoodMesh = profile('hood', mat.paint, (s) => {
  s.moveTo(1.56, 0.95); s.lineTo(2.7 - Math.cos(archA) * 0.68, 0.92);
  s.absarc(2.7, 0.52, 0.68, Math.PI - archA, archA, true);
  s.lineTo(3.55, 0.92); s.lineTo(3.58, 1.75); s.quadraticCurveTo(3.6, 2.02, 3.3, 2.1); s.lineTo(1.56, 2.36); s.closePath();
}, 2.32, 0.1, hood, 0);
hoodMesh.geometry.translate(-3.55, -0.92, 0);
const H = (x, y) => [x - 3.55, y - 0.92];
box('grille_surround', mat.chrome, [0.04, 0.86, 1.12], [...H(3.665, 1.42), 0], hood, 3);
box('grille', mat.black, [0.04, 0.76, 1.0], [...H(3.68, 1.42), 0], hood, 3);
for (let i = 0; i < 6; i++) box('grille_bar', mat.chrome, [0.02, 0.03, 0.98], [...H(3.705, 1.1 + i * 0.13), 0], hood);
for (const sgn of [-1, 1]) {
  box('headlight', mat.lens, [0.12, 0.2, 0.42], [...H(3.6, 1.38), sgn * 0.86], hood, 3, [0, sgn * 0.35, 0]);
  box('headlight_bezel', mat.black, [0.1, 0.24, 0.46], [...H(3.58, 1.38), sgn * 0.86], hood, null, [0, sgn * 0.35, 0]);
  box('turn_signal', mat.amber, [0.06, 0.08, 0.2], [...H(3.52, 1.2), sgn * 1.0], hood, 3, [0, sgn * 0.6, 0]);
  box('fender_marker', mat.amber, [0.1, 0.05, 0.01], [...H(3.2, 1.45), sgn * 1.168], hood);
}
// Engine bay (revealed when hood tilts)
box('engine_block', mat.engine, [1.3, 0.62, 0.78], [2.45, 1.38, 0], truck, 0);
box('valve_cover', mat.engine, [1.1, 0.14, 0.5], [2.45, 1.76, 0], truck, 0);
box('radiator', mat.black, [0.08, 0.86, 1.0], [3.38, 1.42, 0], truck, 0);
cyl('pulley_crank', mat.alum, 0.13, 0.06, 'x', [3.15, 1.2, 0], truck, 0);
cyl('pulley_fan', mat.alum, 0.1, 0.06, 'x', [3.15, 1.6, 0], truck, 0);
cyl('pulley_alt', mat.alum, 0.07, 0.06, 'x', [3.15, 1.45, 0.3], truck, 0);
rod('belt', mat.rubber, 0.012, [3.17, 1.2, 0.13], [3.17, 1.6, 0.1], truck, 0);
rod('belt', mat.rubber, 0.012, [3.17, 1.2, -0.13], [3.17, 1.6, -0.1], truck, 0);
rod('belt', mat.rubber, 0.012, [3.17, 1.6, 0.08], [3.17, 1.45, 0.3], truck, 0);
box('coolant_reservoir', mat.coolant, [0.22, 0.22, 0.3], [3.15, 1.86, 0.4], truck, 0);
cyl('ps_reservoir', mat.black, 0.06, 0.14, 'y', [2.95, 1.78, -0.48], truck, 0);
cyl('dipstick_tube', mat.alum, 0.012, 0.3, 'y', [2.0, 1.72, -0.44], truck, 0, 8);
add('dipstick_handle', new THREE.TorusGeometry(0.035, 0.01, 8, 20), mat.yellow, [2.0, 1.9, -0.44], truck, 0);
rod('upper_hose', mat.rubber, 0.035, [3.34, 1.78, 0.2], [3.0, 1.7, 0.2], truck, 0);
rod('lower_hose', mat.rubber, 0.035, [3.34, 1.1, -0.25], [3.05, 1.12, -0.3], truck, 0);
box('air_intake', mat.black, [0.5, 0.25, 0.25], [1.95, 1.62, 0.48], truck, 0);

// Wheels
function wheel(name, x, z, step, outward) {
  const g = new THREE.Group(); g.name = name; g.position.set(x, 0.52, z); truck.add(g);
  add('tire_sidewall', new THREE.TorusGeometry(0.39, 0.135, 20, 48), mat.rubber, null, g, step);
  cyl('tire_tread', mat.rubber, 0.525, 0.2, 'z', [0, 0, 0], g, step, 48);
  cyl('rim', mat.alum, 0.29, 0.24, 'z', [0, 0, 0], g, step, 40);
  if (outward) {
    cyl('hub', mat.chrome, 0.11, 0.1, 'z', [0, 0, outward * 0.14], g, step, 24);
    for (let i = 0; i < 10; i++) { const a = (i / 10) * Math.PI * 2; cyl('lug_nut', mat.chrome, 0.017, 0.05, 'z', [Math.cos(a) * 0.165, Math.sin(a) * 0.165, outward * 0.13], g, step, 6); }
  }
  return g;
}
const STEER_X = 2.7, D1 = -3.4, D2 = -4.7;
for (const sgn of [-1, 1]) wheel('steer_wheel', STEER_X, sgn * 1.05, sgn < 0 ? 2 : null, sgn);
for (const x of [D1, D2]) for (const sgn of [-1, 1]) {
  wheel('drive_wheel_inner', x, sgn * 0.8, sgn < 0 ? 6 : null, 0);
  wheel('drive_wheel_outer', x, sgn * 1.1, sgn < 0 ? 6 : null, sgn);
}
cyl('steer_axle', mat.frame, 0.06, 2.0, 'z', [STEER_X, 0.52, 0]);
for (const x of [D1, D2]) { cyl('drive_axle', mat.frame, 0.08, 2.0, 'z', [x, 0.52, 0]); add('differential', new THREE.SphereGeometry(0.2, 24, 16), mat.frame, [x, 0.52, 0]); }
// Front suspension & steering (driver side tagged)
for (const sgn of [-1, 1]) {
  const st = sgn < 0 ? 1 : null;
  for (let i = 0; i < 3; i++) box('leaf_spring', mat.frame, [1.3 - i * 0.28, 0.03, 0.09], [STEER_X, 0.78 - i * 0.034, sgn * 0.43], truck, st);
  rod('shock_absorber', mat.alum, 0.03, [STEER_X + 0.2, 0.6, sgn * 0.58], [STEER_X + 0.35, 0.98, sgn * 0.52], truck, st);
  box('spring_hanger', mat.frame, [0.08, 0.16, 0.1], [STEER_X + 0.65, 0.84, sgn * 0.43], truck, st);
  box('spring_hanger', mat.frame, [0.08, 0.16, 0.1], [STEER_X - 0.65, 0.84, sgn * 0.43], truck, st);
  cyl('brake_chamber', mat.frame, 0.09, 0.16, 'x', [STEER_X - 0.32, 0.6, sgn * 0.72], truck, sgn < 0 ? 2 : null, 20);
  box('slack_adjuster', mat.engine, [0.04, 0.2, 0.04], [STEER_X - 0.2, 0.52, sgn * 0.78], truck, sgn < 0 ? 2 : null);
}
box('steering_box', mat.engine, [0.24, 0.22, 0.2], [3.2, 0.98, -0.58], truck, 1);
rod('pitman_arm', mat.engine, 0.03, [3.2, 0.9, -0.62], [3.15, 0.7, -0.64], truck, 1);
rod('drag_link', mat.engine, 0.028, [3.15, 0.7, -0.64], [2.85, 0.6, -0.85], truck, 1);
rod('tie_rod', mat.engine, 0.025, [2.95, 0.48, -0.88], [2.95, 0.48, 0.88], truck, 1);
// Drive suspension, fenders, flaps
for (const x of [D1, D2]) for (const sgn of [-1, 1]) {
  const st = sgn < 0 ? 6 : null;
  cyl('air_bag', mat.rubber, 0.13, 0.26, 'y', [x - 0.42, 0.82, sgn * 0.43], truck, st, 24);
  box('trailing_arm', mat.frame, [0.9, 0.08, 0.08], [x - 0.1, 0.62, sgn * 0.43], truck, st);
  cyl('brake_chamber', mat.frame, 0.1, 0.2, 'x', [x + 0.34, 0.6, sgn * 0.6], truck, st, 20);
  box('slack_adjuster', mat.engine, [0.04, 0.2, 0.04], [x + 0.2, 0.52, sgn * 0.62], truck, st);
  const f = add('fender', new THREE.CylinderGeometry(0.62, 0.62, 0.66, 32, 1, true, Math.PI / 2 + 0.35, Math.PI - 0.7), M('fender', 0x1f1e1d, 0.6, 0, { side: THREE.DoubleSide }), [x, 0.52, sgn * 0.95]);
  f.geometry.rotateX(Math.PI / 2);
}
for (const sgn of [-1, 1]) {
  box('mud_flap', mat.rubber, [0.02, 0.62, 0.66], [-5.38, 0.5, sgn * 0.95], truck, sgn < 0 ? 6 : null);
  box('flap_hanger', mat.chrome, [0.06, 0.06, 0.66], [-5.36, 0.84, sgn * 0.95]);
}
// Fuel / DEF / batteries
for (const sgn of [-1, 1]) {
  const st = sgn < 0 ? 4 : null;
  cyl('fuel_tank', mat.alum, 0.33, 1.7, 'x', [-0.55, 0.78, sgn * 0.98], truck, st, 40);
  for (const x of [-1.15, 0.05]) add('tank_strap', new THREE.TorusGeometry(0.335, 0.012, 8, 40), mat.frame, [x, 0.78, sgn * 0.98], truck, st, [0, Math.PI / 2, 0]);
  cyl('fuel_cap', mat.chrome, 0.06, 0.05, 'y', [0.1, 1.12, sgn * 0.98], truck, st, 20);
  rod('tank_bracket', mat.frame, 0.03, [-1.15, 1.05, sgn * 0.48], [-1.15, 1.05, sgn * 0.8]);
  rod('tank_bracket', mat.frame, 0.03, [0.05, 1.05, sgn * 0.48], [0.05, 1.05, sgn * 0.8]);
}
box('def_tank', mat.paint, [0.3, 0.38, 0.32], [0.52, 0.8, -0.98], truck, 4);
cyl('def_cap', mat.defBlue, 0.055, 0.05, 'y', [0.52, 1.01, -0.98], truck, 4, 20);
box('battery_box', mat.black, [0.5, 0.42, 0.36], [-1.62, 0.78, -0.95], truck, 4);
box('battery_box_r', mat.black, [0.5, 0.42, 0.36], [-1.62, 0.78, 0.95]);
// Air tanks between rails
cyl('air_tank', mat.alum, 0.17, 1.3, 'x', [-0.8, 0.72, 0], truck, null, 24);
// Exhaust stack (passenger side)
cyl('exhaust_stack', mat.chrome, 0.09, 2.9, 'y', [-2.48, 2.75, 0.95], truck, null, 24);
cyl('dpf_shield', mat.alum, 0.17, 0.9, 'y', [-2.48, 1.75, 0.95], truck, null, 28);

// Fifth wheel
const fw = new THREE.Shape();
const na = Math.PI - 0.42;
fw.moveTo(Math.cos(na) * 0.5, Math.sin(na) * 0.5); fw.absarc(0, 0, 0.5, na, -na, true); fw.lineTo(-0.05, -0.04); fw.lineTo(-0.05, 0.04); fw.closePath();
const fwg = new THREE.ExtrudeGeometry(fw, { depth: 0.06, bevelEnabled: true, bevelThickness: 0.01, bevelSize: 0.01, bevelSegments: 2, curveSegments: 40 });
fwg.rotateX(-Math.PI / 2);
add('fifth_wheel_plate', fwg, mat.grease, [-4.0, 1.3, 0], truck, 5);
for (const sgn of [-1, 1]) box('fifth_wheel_bracket', mat.frame, [0.4, 0.16, 0.08], [-4.0, 1.2, sgn * 0.36], truck, 5);
box('locking_jaws', mat.engine, [0.14, 0.03, 0.16], [-4.02, 1.355, 0], truck, 5);
rod('release_arm', mat.redHose, 0.016, [-3.9, 1.28, -0.3], [-3.9, 1.28, -0.72], truck, 5);
box('release_grip', mat.redHose, [0.05, 0.12, 0.04], [-3.9, 1.28, -0.74], truck, 5);
box('deck_plate', mat.alum, [0.9, 0.025, 1.0], [-2.85, 1.24, 0]);
// Air & electrical lines (coiled) + glad hands
class Coil extends THREE.Curve {
  constructor(x0, x1, y, z, turns, r) { super(); Object.assign(this, { x0, x1, y, z, turns, r }); }
  getPoint(t, o = new THREE.Vector3()) {
    const a = t * Math.PI * 2 * this.turns;
    return o.set(this.x0 + (this.x1 - this.x0) * t, this.y - Math.sin(Math.PI * t) * 0.32 + Math.sin(a) * this.r, this.z + Math.cos(a) * this.r);
  }
}
[[mat.redHose, -0.16, 'air_line_emergency'], [mat.blue, 0.0, 'air_line_service'], [mat.black, 0.16, 'electrical_line']].forEach(([m, z, n]) => {
  add(n, new THREE.TubeGeometry(new Coil(-2.42, -3.04, 2.0, z, 10, 0.05), 400, 0.012, 6), m, null, truck, 5);
  box(n + '_gladhand', m, [0.06, 0.05, 0.07], [-3.04, 2.0, z], truck, 5);
});
box('pogo_bracket', mat.frame, [0.05, 0.05, 0.6], [-2.41, 2.08, 0]);
// Rear lights
box('rear_crossmember', mat.frame, [0.1, 0.18, 1.6], [-5.32, 1.0, 0]);
for (const sgn of [-1, 1]) {
  box('tail_light', mat.red, [0.04, 0.12, 0.22], [-5.38, 1.0, sgn * 0.62]);
}


// ---- 53' dry van trailer ----
const TF = -3.09, TL = 16.15, TR = TF - TL, TW = 2.59, TY0 = 1.39, TY1 = 4.11, TC = TF - TL / 2, TH = TY1 - TY0, HW = TW / 2;
const trailer = new THREE.Group(); trailer.name = 'trailer_53ft_van'; truck.add(trailer);
const tpaint = M('trailer_white', 0xf1f0ec, 0.38, 0.08), tapeR = M('tape_red', 0xc0202a, 0.35), tapeW = M('tape_white', 0xffffff, 0.3);
box('trailer_box', tpaint, [TL, TH, TW], [TC, TY0 + TH / 2, 0], trailer);
box('trailer_front_wall', tpaint, [0.02, TH - 0.12, TW - 0.12], [TF + 0.011, TY0 + TH / 2, 0], trailer, 7);
box('top_rail', mat.alum, [TL + 0.02, 0.1, TW + 0.02], [TC, TY1 - 0.05, 0], trailer);
box('bottom_rail', mat.alum, [TL + 0.02, 0.16, TW + 0.02], [TC, TY0 + 0.08, 0], trailer);
for (const sg of [-1, 1]) {
  for (let x = TF - 0.3; x > TR + 0.2; x -= 0.61) box('side_post', mat.alum, [0.05, TH - 0.26, 0.012], [x, TY0 + 0.16 + (TH - 0.26) / 2, sg * (HW + 0.006)], trailer);
  for (let i = 0, x = TF - 0.15; x > TR + 0.15; x -= 0.3, i++) box('side_tape', i % 2 ? tapeW : tapeR, [0.3, 0.05, 0.004], [x, TY0 + 0.08, sg * (HW + 0.013)], trailer);
  box('side_marker', mat.amber, [0.1, 0.06, 0.02], [TC, TY0 + 0.25, sg * (HW + 0.012)], trailer);
  box('front_clearance', mat.amber, [0.03, 0.06, 0.1], [TF + 0.025, TY1 - 0.08, sg * (HW - 0.08)], trailer);
  box('rear_clearance', mat.red, [0.03, 0.06, 0.1], [TR - 0.025, TY1 - 0.08, sg * (HW - 0.08)], trailer);
}
// underside, coupler, kingpin
box('trailer_underframe', mat.frame, [TL - 2.0, 0.12, TW - 0.3], [(TF - 2.0 + TR) / 2, TY0 - 0.06, 0], trailer);
box('apron', mat.engine, [2.0, 0.02, 2.2], [TF - 1.0, TY0 - 0.01, 0], trailer, 5);
cyl('kingpin', mat.chrome, 0.045, 0.06, 'y', [TF - 0.91, TY0 - 0.05, 0], trailer, 5, 16);
for (let i = 0; i < 8; i++) box('trailer_frame', mat.frame, [0.08, 0.14, TW - 0.2], [TF - 2.2 - i * 0.42, TY0 - 0.07, 0], trailer, 7);
// trailer glad hands + receptacle
box('trailer_gladhands', mat.redHose, [0.04, 0.06, 0.08], [TF + 0.03, 2.0, -0.16], trailer, 7);
box('trailer_gladhands', mat.blue, [0.04, 0.06, 0.08], [TF + 0.03, 2.0, 0.0], trailer, 7);
cyl('trailer_receptacle', mat.black, 0.05, 0.05, 'x', [TF + 0.03, 2.0, 0.16], trailer, null, 16);
// landing gear
const LG = TF - 3.3;
box('landing_gear_mount', mat.frame, [0.3, 0.1, TW - 0.4], [LG, TY0 - 0.17, 0], trailer);
for (const sg of [-1, 1]) {
  box('landing_leg', mat.frame, [0.13, 0.62, 0.13], [LG, TY0 - 0.53, sg * 0.95], trailer, sg < 0 ? 7 : null);
  box('landing_leg', mat.frame, [0.1, 0.5, 0.1], [LG, 0.6, sg * 0.95], trailer, sg < 0 ? 7 : null);
  box('sand_shoe', mat.frame, [0.26, 0.04, 0.26], [LG, 0.34, sg * 0.95], trailer);
  rod('leg_brace', mat.frame, 0.025, [LG, 0.95, sg * 0.95], [LG + 0.8, TY0 - 0.12, sg * 0.95], trailer);
}
rod('cross_brace', mat.frame, 0.025, [LG, 0.75, -0.95], [LG, TY0 - 0.25, 0.95], trailer);
box('gearbox', mat.engine, [0.18, 0.18, 0.12], [LG, TY0 - 0.35, -1.08], trailer, 7);
rod('crank_handle', mat.engine, 0.016, [LG, TY0 - 0.35, -1.12], [LG, TY0 - 0.35, -1.3], trailer, 7);
rod('crank_handle', mat.engine, 0.016, [LG, TY0 - 0.35, -1.3], [LG, TY0 - 0.75, -1.3], trailer, 7);
// sliding tandem
const TA1 = TR + 2.3, TA2 = TA1 - 1.24;
for (const sg of [-1, 1]) box('slider_rail', mat.frame, [4.6, 0.2, 0.1], [(TA1 + TA2) / 2 + 0.3, TY0 - 0.22, sg * 0.5], trailer);
for (const sg of [-1, 1]) cyl('slider_pin', mat.chrome, 0.03, 0.12, 'z', [TA1 + 0.95, TY0 - 0.22, sg * 0.58], trailer, sg < 0 ? 8 : null, 12);
rod('slider_handle', mat.redHose, 0.016, [TA1 + 1.1, TY0 - 0.26, -0.5], [TA1 + 1.1, TY0 - 0.26, -1.18], trailer, 8);
for (const x of [TA1, TA2]) {
  cyl('trailer_axle', mat.frame, 0.065, 2.0, 'z', [x, 0.52, 0], trailer);
  for (const sg of [-1, 1]) {
    const st = sg < 0 ? 8 : null;
    wheel('trailer_wheel_inner', x, sg * 0.8, st, 0);
    wheel('trailer_wheel_outer', x, sg * 1.1, st, sg);
    cyl('trailer_spring', mat.rubber, 0.13, 0.28, 'y', [x - 0.42, 0.86, sg * 0.5], trailer, st, 24);
    box('trailer_hanger', mat.frame, [0.12, 0.42, 0.1], [x + 0.35, TY0 - 0.42, sg * 0.5], trailer);
    box('trailer_arm', mat.frame, [0.85, 0.08, 0.08], [x - 0.05, 0.66, sg * 0.5], trailer, st);
    cyl('brake_chamber', mat.frame, 0.1, 0.2, 'x', [x + 0.36, 0.6, sg * 0.62], trailer, st, 20);
    box('slack_adjuster', mat.engine, [0.04, 0.2, 0.04], [x + 0.22, 0.52, sg * 0.64], trailer, st);
  }
}
for (const sg of [-1, 1]) box('trailer_mud_flap', mat.rubber, [0.02, 0.62, 0.66], [TA2 - 0.78, 0.5, sg * 0.95], trailer);
// rear
for (const sg of [-1, 1]) box('rear_door', tpaint, [0.03, TH - 0.22, HW - 0.04], [TR - 0.016, TY0 + TH / 2 + 0.02, sg * (HW / 2 + 0.005)], trailer, 9);
box('door_seam', mat.black, [0.035, TH - 0.22, 0.012], [TR - 0.017, TY0 + TH / 2 + 0.02, 0], trailer);
for (const z of [-0.95, -0.35, 0.35, 0.95]) {
  rod('lock_rod', mat.chrome, 0.018, [TR - 0.05, TY0 + 0.15, z], [TR - 0.05, TY1 - 0.18, z], trailer);
  box('lock_handle', mat.chrome, [0.04, 0.32, 0.03], [TR - 0.06, TY0 + 1.0, z + 0.08], trailer);
}
for (const sg of [-1, 1]) for (const y of [TY0 + 0.4, TY0 + 1.35, TY1 - 0.5]) box('door_hinge', mat.chrome, [0.04, 0.1, 0.14], [TR - 0.04, y, sg * (HW - 0.06)], trailer);
box('rear_sill', mat.frame, [0.12, 0.26, TW], [TR - 0.03, TY0 - 0.12, 0], trailer);
for (let i = 0; i < 8; i++) box('conspicuity_tape', i % 2 ? tapeW : tapeR, [0.004, 0.05, TW / 8], [TR - 0.092, TY0 - 0.04, -HW + TW / 16 + i * TW / 8], trailer, 9);
for (const sg of [-1, 1]) {
  box('conspicuity_tape', tapeW, [0.004, 0.3, 0.05], [TR - 0.035, TY1 - 0.3, sg * (HW - 0.03)], trailer, 9);
  box('conspicuity_tape', tapeW, [0.004, 0.05, 0.3], [TR - 0.035, TY1 - 0.13, sg * (HW - 0.17)], trailer, 9);
}
for (const z of [-1.0, -0.8, 0.8, 1.0]) cyl('trailer_tail_light', mat.red, 0.055, 0.04, 'x', [TR - 0.11, TY0 - 0.14, z], trailer, 9, 20);
for (const z of [-0.2, 0, 0.2]) box('id_light', mat.red, [0.03, 0.05, 0.08], [TR - 0.025, TY1 - 0.08, z], trailer, 9);
box('icc_bumper', mat.frame, [0.12, 0.13, 2.4], [TR + 0.2, 0.56, 0], trailer, 9);
for (const sg of [-1, 1]) box('icc_strut', mat.frame, [0.1, TY0 - 0.85, 0.1], [TR + 0.25, (TY0 + 0.62) / 2 - 0.05, sg * 0.75], trailer);
for (let i = 0; i < 6; i++) box('icc_tape', i % 2 ? tapeW : tapeR, [0.004, 0.06, 0.4], [TR + 0.138, 0.56, -1.0 + i * 0.4], trailer);
// trailer logo
new THREE.TextureLoader().load('assets/tga-logo.png', (tex) => {
  tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
  const dm = new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: 0.4 }); dm.name = 'tga_trailer_decal';
  for (const sg of [-1, 1]) { const d = add('trailer_decal', new THREE.PlaneGeometry(4.6, 2.22), dm, [TC + 1.5, 2.78, sg * (HW + 0.016)], trailer); if (sg < 0) d.rotation.y = Math.PI; }
});

stage.setObject(truck);
const allMats = new Set();
truck.traverse((o) => { if (o.isMesh) { const m = o.material; m.transparent = true; m.userData.op = 1; m.userData.ownerStep = o.userData.step; allMats.add(m); } });
truck.updateMatrixWorld(true);
const partPos = (step, name) => {
  const c = new THREE.Vector3(); let n = 0; const b = new THREE.Box3(), t = new THREE.Vector3();
  for (const m of pickables) if (m.userData.step === step && m.name === name) { b.setFromObject(m).getCenter(t); c.add(t); n++; }
  return n ? c.divideScalar(n) : null;
};
labelsFor = (step) => (STEPS[step].parts || []).map((name, i) => ({ i, name, pos: partPos(step, name) })).filter((p) => p.pos);
$('loading').remove();

// Inspection bay pad
const pad = new THREE.Mesh(new THREE.PlaneGeometry(44, 15), new THREE.MeshStandardMaterial({ color: 0x5e5955, roughness: 0.95 }));
pad.rotation.x = -Math.PI / 2; pad.position.set(-7.8, 0.002, 0); pad.receiveShadow = true; pad.name = 'bay_pad';
stage._scene.add(pad);
for (const z of [-2.2, 2.2]) {
  const ln = new THREE.Mesh(new THREE.PlaneGeometry(40, 0.12), new THREE.MeshStandardMaterial({ color: 0xe8a22e, roughness: 0.8 }));
  ln.rotation.x = -Math.PI / 2; ln.position.set(-7.8, 0.004, z); stage._scene.add(ln);
}

// ---------- camera, picking, animation ----------
const cam = stage._camera, controls = stage._controls, canvas = sroot.querySelector('canvas');
controls.minDistance = 2.5; controls.maxDistance = 45; controls.maxPolarAngle = Math.PI / 2 - 0.04;
cam.position.set(...OVERVIEW.cam); controls.target.set(...OVERVIEW.tgt); controls.update();
let tween = null, hoodTarget = 0, hoodAngle = 0;
function flyTo(v) {
  tween = { t: 0, p0: cam.position.clone(), t0: controls.target.clone(), p1: new THREE.Vector3(...v.cam), t1: new THREE.Vector3(...v.tgt) };
  controls.enabled = false;
}
function goTo(i) {
  state.step = i;
  if (!window.__ready) { renderCard(); renderList(); return; }
  const v = i < 0 ? OVERVIEW : STEPS[i];
  hoodTarget = i >= 0 && STEPS[i].hood ? -1.15 : 0;
  flyTo(v); renderCard(); renderList(); buildLabels();
}
window.goTo = goTo; window.__ready = true;

const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
let down = null;
canvas.addEventListener('pointerdown', (e) => { down = [e.clientX, e.clientY]; });
function pick(e) {
  const r = canvas.getBoundingClientRect();
  ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
  ray.setFromCamera(ndc, cam);
  const hit = ray.intersectObject(truck, true)[0];
  return hit && hit.object.userData.step != null ? hit.object.userData.step : null;
}
canvas.addEventListener('pointerup', (e) => {
  if (!down || Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 5) return;
  const s = pick(e); if (s != null) goTo(s);
});
let hoverStep = null;
canvas.addEventListener('pointermove', (e) => { if (e.buttons) return; hoverStep = pick(e); canvas.style.cursor = hoverStep != null ? 'pointer' : ''; });
canvas.addEventListener('pointerleave', () => { hoverStep = null; });

const ease = (t) => 1 - Math.pow(1 - t, 3);
const tmp = new THREE.Vector3(), occ = new THREE.Raycaster();
const pinVecs = STEPS.map((s) => new THREE.Vector3(...s.pin));
const red = new THREE.Color(0xc0202a);
let last = performance.now(), frame = 0;
function update(now) {
  const dt = Math.min((now - last) / 1000, 0.05); last = now; frame++;
  if (tween) {
    tween.t = Math.min(1, tween.t + dt / 1.1); const k = ease(tween.t);
    cam.position.lerpVectors(tween.p0, tween.p1, k); controls.target.lerpVectors(tween.t0, tween.t1, k); cam.lookAt(controls.target);
    if (tween.t >= 1) { tween = null; controls.enabled = true; }
  }
  hoodAngle += (hoodTarget - hoodAngle) * Math.min(1, dt * 4);
  hood.rotation.z = hoodAngle;
  const pulse = 0.5 + 0.5 * Math.sin(now / 260);
  const xray = state.step >= 0 && STEPS[state.step].xray;
  for (const m of allMats) {
    const target = xray && m.userData.ownerStep !== state.step ? 0.14 : 1;
    m.userData.op += (target - m.userData.op) * Math.min(1, dt * 6);
    m.opacity = (m.name === 'coolant_tank' ? 0.85 : 1) * m.userData.op;
    m.depthWrite = m.userData.op > 0.98;
  }
  const focusName = focusItem != null && state.step >= 0 ? STEPS[state.step].parts?.[focusItem] : null;
  for (const m of pickables) {
    const s = m.userData.step, mm = m.material;
    if (s === state.step && focusName && m.name === focusName) { mm.emissive.copy(red); mm.emissiveIntensity = 0.35 + 0.25 * pulse; }
    else if (s === state.step) { mm.emissive.copy(red); mm.emissiveIntensity = (focusName ? 0.02 : 0.04) + (focusName ? 0.03 : 0.12) * pulse; }
    else if (s === hoverStep) { mm.emissive.copy(red); mm.emissiveIntensity = 0.1; }
    else { mm.emissive.copy(mm.userData.base); mm.emissiveIntensity = mm.userData.baseI; }
  }
  cam.updateMatrixWorld();
  const w = canvas.clientWidth, h = canvas.clientHeight;
  for (const l of labels) {
    const p = l.pos.clone().project(cam);
    l.el.style.transform = `translate(${((p.x + 1) / 2) * w}px, ${((1 - p.y) / 2) * h}px)`;
    l.el.style.display = p.z > 1 ? 'none' : '';
  }
  pinVecs.forEach((v, i) => {
    tmp.copy(v);
    const p = tmp.clone().project(cam), el = pinEls[i];
    el.style.transform = `translate(${((p.x + 1) / 2) * w}px, ${((1 - p.y) / 2) * h}px)`;
    el.style.display = p.z > 1 ? 'none' : '';
    if (frame % 6 === i % 6) {
      const d = cam.position.distanceTo(tmp);
      occ.set(cam.position, tmp.clone().sub(cam.position).normalize()); occ.far = d - 0.12;
      const hit = occ.intersectObject(truck, true).some((x) => x.object.userData.step !== i);
      el.classList.toggle('hidden', hit && i !== state.step);
    }
  });
}
function tick(now) { update(now); requestAnimationFrame(tick); }
requestAnimationFrame(tick);
window.__update = (ms = 1600) => { for (let t = 0; t < ms; t += 16) { last -= 16; update(performance.now()); } stage._loop(); };
