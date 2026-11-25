# Beautiva Chile — Clínica de Medicina Estética y Cirugía Plástica

Sitio web en **Next.js (App Router + Tailwind CSS)** inspirado en la estética de Beautiva, localizado integralmente para el mercado chileno (servicios, aranceles referenciales en CLP, especialistas, sucursales en Providencia y Vitacura, medios de pago nacionales y guías clínicas).

## Desarrollo local

```bash
npm install
npm run dev
```

## Build estático para Cloudflare

```bash
npm run build
```

El script `prebuild` (`scripts/fetch-media.mjs`) verifica y descarga automáticamente las imágenes en `public/images/` antes de generar la salida estática en `out/`.
