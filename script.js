/* ================== CONFIGURACIÓN ==================
   Edita aquí los datos de contacto. Los números van en formato
   internacional sin "+" ni espacios (ej: 56912345678).        */
const CONFIG = {
  marca: "Montt", // nombre de la consulta (aún por definir)
  whatsapp: {
    general:  "56900000000",
    corvalan: "56900000000",
    aranguiz: "56900000000",
  },
  mensaje: "Hola, me gustaría hacer una consulta sobre una primera sesión.",
  // Link de agendamiento (Calendly, Google Calendar, Agendapro, etc.).
  // Si queda vacío, el botón "Ver horarios" abre WhatsApp.
  agenda: "",
};

// Enlaces de WhatsApp
document.querySelectorAll("[data-wa]").forEach((el) => {
  const num = CONFIG.whatsapp[el.dataset.wa] || CONFIG.whatsapp.general;
  el.href = `https://wa.me/${num}?text=${encodeURIComponent(CONFIG.mensaje)}`;
  el.target = "_blank";
  el.rel = "noopener";
});

// Enlace de agendamiento
document.querySelectorAll("[data-booking]").forEach((el) => {
  el.href = CONFIG.agenda ||
    `https://wa.me/${CONFIG.whatsapp.general}?text=${encodeURIComponent("Hola, quisiera conocer los horarios disponibles.")}`;
  el.target = "_blank";
  el.rel = "noopener";
});

// Nombre de marca
document.querySelectorAll("[data-brand]").forEach((el) => (el.textContent = CONFIG.marca));

// Año del pie
document.getElementById("year").textContent = new Date().getFullYear();

// Menú móvil
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Aparición suave al hacer scroll
const targets = document.querySelectorAll(".section h2, .prose, .pillars li, .reasons, .person");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach((t) => { t.classList.add("reveal"); io.observe(t); });
}
