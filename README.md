# Consulta psicológica — sitio web

Landing de una consulta psicológica de orientación psicoanalítica en Providencia (Manuel Montt 526).

Sitio estático: `index.html`, `styles.css` y `script.js`, sin dependencias ni compilación.

## Ver en local

```bash
python -m http.server 5500
```

Luego abre http://localhost:5500

## Configuración

Edita el bloque `CONFIG` al inicio de `script.js`:

- `marca`: nombre de la consulta (por definir)
- `whatsapp`: números general y de cada psicólogo (formato `569XXXXXXXX`)
- `agenda`: link de agendamiento (si queda vacío, se usa WhatsApp)

## Pendientes

- Definir nombre de la marca
- Números de WhatsApp reales
- Fotografías (blanco y negro) en `images/`
- Modo de agendamiento
- Dominio y publicación
