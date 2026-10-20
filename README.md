# COLMEX Nettoyage & Rénovation

Maqueta funcional en React + Vite, Tailwind CSS y Lucide React. Interfaz íntegra en francés canadiense (`fr-CA`), sin backend ni persistencia de datos personales.

## Ejecutar

Requiere Node.js 20.19+ o 22.12+.

```bash
npm install
npm run dev
```

## Verificar y compilar

```bash
npm test
npm run build
```

El sitio compilado queda en `dist/` y se puede servir como sitio estático.

## Configuración

Los datos comerciales, servicios, frecuencias y tipos de propiedad están centralizados en `src/config.js`. El nombre confirmado es **COLMEX Nettoyage & Rénovation**.

Pendientes comerciales: logotipo oficial, cobertura y disponibilidad real. No se publicaron horarios, direcciones, precios ni testimonios inventados. Imagen editorial local de Unsplash (interior genérico, no representa instalaciones de la empresa).

## Comportamiento

Las tarjetas preseleccionan el servicio. El formulario adapta propiedad y habitaciones, valida datos y fecha local y genera un mensaje revisable. WhatsApp solo abre al pulsar el enlace de envío; el visitante confirma el envío en WhatsApp. Copiar usa Clipboard API en un contexto seguro y ofrece selección manual si falla. La fecha es una preferencia, nunca una reserva. Los datos permanecen únicamente en memoria y desaparecen al recargar.
