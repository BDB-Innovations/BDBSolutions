# BDB Innovations

Landing comercial en español de BDB Innovations: desarrollo de páginas web, e-commerce y software a medida para negocios de Ecuador y Latinoamérica.

Proyecto conectado al [editor de Lovable](https://lovable.dev/projects/b8bb79cd-551d-4611-a07d-e383fad62d41). Los commits publicados en la rama conectada se sincronizan con Lovable. No reescribir historial publicado mediante force push, rebase, amend o squash.

## Funcionalidades actuales

| Sección | Contenido |
| --- | --- |
| Navegación | Barra fija con cambio de apariencia al hacer scroll y menú móvil. |
| Hero | Propuesta de valor, botones de exploración, métricas y panel ilustrativo con paralaje. |
| Servicios | Landing pages, e-commerce, menús digitales, agendamiento, soluciones contables/ERP y desarrollo a medida. |
| Ejemplos | Referencias externas a Stripe, Allbirds, OpenTable, Calendly, Holded y Linear. No son proyectos propios de BDB. |
| Proceso | Descubrimiento, diseño, desarrollo y lanzamiento. |
| Contacto | WhatsApp, teléfono, correo y formulario mediante mailto. |
| Footer | Marca, accesos a secciones y año dinámico. |

**El formulario no envía mensajes desde un servidor ni guarda contactos.** Abre la aplicación de correo del visitante, quien debe completar el envío. No existe un backend de captación en este flujo.

## Tecnologías

React 19, TypeScript, TanStack Start y TanStack Router, Vite 8, Tailwind CSS 4, componentes basados en Radix y Lucide React. TanStack Query está disponible mediante el proveedor raíz. Las animaciones usan CSS, IntersectionObserver y eventos de puntero; no hay un motor 3D dedicado.

## Desarrollo local

El repositorio incluye bun.lock y bunfig.toml. Con Node.js compatible con las dependencias y Bun instalados:

```sh
bun install --frozen-lockfile
bun run dev
```

Abrir la dirección indicada por Vite. También se puede utilizar npm install y npm run dev, pero npm no consume bun.lock; evitar mezclar gestores o incorporar un segundo lockfile sin una decisión del proyecto.

| Comando | Uso |
| --- | --- |
| bun run dev | Servidor de desarrollo. |
| bun run build | Compilación de producción. |
| bun run build:dev | Compilación en modo development. |
| bun run preview | Vista previa de la compilación. |
| bun run lint | ESLint, incluyendo reglas de formato. |
| bun run format | Aplica Prettier al proyecto completo; revisar el diff. |
| bunx tsc --noEmit | Comprobación de tipos con dependencias instaladas. |

No hay un script de pruebas automatizadas declarado. La configuración de @lovable.dev/vite-tanstack-config integra React, TanStack, Tailwind y Nitro: no duplicar esos plugins en vite.config.ts. El destino de producción depende de esa integración; no asumir un despliegue estático copiando únicamente dist.

## Estructura y personalización

```text
src/
  assets/logo.png          Marca de navbar y footer
  components/site/         Secciones de la landing
  components/ui/           Componentes reutilizables
  data/nav.ts              Enlaces de navegación
  lib/motion.ts            Hooks de aparición y tilt
  routes/__root.tsx        Documento HTML, fuentes, metadatos y proveedores
  routes/index.tsx         Composición de la landing y metadatos de ruta
  routeTree.gen.ts         Árbol generado; no editar manualmente
  styles.css               Tokens, tipografías, utilidades y animaciones
  start.ts                 Middleware de errores y CSRF de server functions
  server.ts                Entrada de servidor y manejo de errores SSR
public/                    Favicon y robots.txt
```

- Contacto: constantes EMAIL, WHATSAPP y PHONE en Contact.tsx.
- Servicios: arreglo services en Services.tsx. Las fotografías se cargan desde Unsplash.
- Ejemplos: arreglo items en Showcase.tsx. Distinguir referencias externas, demos y proyectos propios.
- Identidad: tokens de styles.css. La apariencia actual es clara con azul y cian; el comentario inicial del CSS que describe una estética oscura está desactualizado.
- SEO: revisar tanto routes/__root.tsx como routes/index.tsx para mantener coherencia.
- Fuentes: Inter y Space Grotesk se cargan desde Google Fonts.

## Análisis y mejoras propuestas

Revisión del código: 19 de noviembre de 2026. Estos hallazgos se deducen de la implementación; no son una auditoría visual en navegador ni una medición Lighthouse o de conversión.

### Fortalezas

Recorrido comercial completo, identidad consistente, grillas adaptables y fotografías con carga diferida. Hay metadatos sociales básicos, documento en español y protección noopener noreferrer en enlaces externos. Paralaje y tilt comprueban la preferencia de movimiento reducido y existe una regla CSS para reducir animaciones.

### Prioridades

| Prioridad | Hallazgo | Mejora propuesta |
| --- | --- | --- |
| Alta | Los CTA del hero llevan a servicios y ejemplos. | Priorizar «Hablemos de tu proyecto» hacia contacto y dejar «Explorar soluciones» como acción secundaria. Verificar visibilidad del contacto en móvil. |
| Alta | El hero muestra bloques abstractos y numerosos chips. | Mostrar una tienda o agenda con información reconocible, rotulada como demo conceptual. Reducir chips y dar protagonismo al producto. |
| Alta | Se publican «40+ proyectos», «24/7 soporte» y respuesta en menos de 24 horas sin evidencia en el repositorio. | Validar con el negocio y conservar solo cifras y compromisos comprobables. Incorporar casos propios autorizados cuando existan. |
| Alta | El formulario depende de mailto; la confirmación no acredita recepción. | Explicar el comportamiento antes del envío. Para captación real, integrar entrega con validación y estados de éxito/error basados en la respuesta del servicio. Mantener WhatsApp directo. |
| Alta | Los campos solo tienen placeholder y el menú no comunica su estado. | Añadir label, id, name, autocompletado, aria-expanded y aria-controls. Verificar teclado, foco visible y cierre del menú. |
| Alta | Process.tsx llama useReveal dentro de steps.map. | Extraer ProcessStep e invocar el hook en el nivel superior del componente; actualmente incumple las reglas de hooks. |
| Media | Servicios, ejemplos y proceso repiten grillas similares. | Alternar servicios con bloque destacado y tarjetas compactas, ejemplos con previews y proceso con una línea de cuatro hitos. Variar fondos y espaciado. |
| Media | Las fotografías de stock muestran categorías, no entregables. | Sustituir progresivamente por capturas propias o demos rotuladas de catálogo, agenda, menú QR y panel administrativo. |
| Media | Las tarjetas de servicios muestran una flecha al pasar el puntero, pero no son enlaces. | Añadir una acción real «Consultar este servicio» o quitar la señal de navegación. |
| Media | Ejemplos sin previews y categoría «Menú digital» dirigida a la portada de OpenTable. | Revisar la correspondencia entre destino y funcionalidad; usar previews autorizados o demos propias e identificar enlaces externos. |
| Media | Barra fija sin margen de scroll en las secciones. | Añadir scroll-margin-top a los destinos y comprobar que los títulos permanezcan visibles. |
| Media | La clase reveal oculta contenido hasta ejecutar JavaScript. | Asegurar contenido visible sin JS o ante fallos de hidratación. Desactivar también scroll suave con movimiento reducido. |
| Media | Metadatos sociales sin imagen ni canonical declarados. | Añadir portada de marca y URLs absolutas al confirmar el dominio de producción. |
| Media | Muchas superficies con blur, sombras y movimiento. | Reservar efectos para hero y acciones relevantes. Medir en móvil y definir dimensiones de imágenes para estabilizar el layout. |

### Direcciones visuales

**01 · Evolución clara — recomendada.** Mantener blanco, azul real y cian. Dar aire al titular, acortar la introducción y sustituir el panel abstracto por previews de software. Combinar un servicio destacado con tarjetas más simples y conectar los cuatro pasos del proceso. Es la evolución más cercana a la identidad actual.

**02 · Estudio digital.** Hero azul noche, tipografía clara y una interfaz de producto iluminada; servicios sobre blanco. El contraste separa presentación y contenido comercial. Concentrar brillo y profundidad en un único elemento protagonista.

En ambas rutas, priorizar contacto, necesidades del negocio y evidencia verificable. Los mockups de referencia son conceptos; no representan capturas de la landing ni funcionalidades implementadas.

## Validación y alcance

Se revisaron componentes, estilos, rutas, configuración y scripts. Esta entrega modifica documentación y aporta propuestas; no aplica el rediseño al código.

El entorno de revisión no tenía node_modules ni Bun instalado. No se ejecutaron build, lint ni comprobación de tipos. Antes de publicar cambios funcionales: instalar dependencias, ejecutar esas verificaciones y revisar escritorio/móvil, teclado, movimiento reducido y contacto en navegador.

## Rediseño implementado: Evolución clara

La rama `feature/landing-clear-redesign` implementa la primera dirección visual:

- Hero blanco/azul con titular breve, contacto principal y previews de tienda y agenda construidos con HTML/CSS. Las demos son ilustrativas, no aplicaciones operativas.
- Servicios sin fotografías externas, con vistas esquemáticas y enlaces de consulta; ejemplos externos en una sección de fondo diferenciado.
- Proceso con hitos visuales y sin hooks dentro de un bucle.
- Formulario con etiquetas visibles y explicación del envío mediante la aplicación de correo.
- Navegación con estado accesible, cierre con Escape, foco visible y margen para anclas; scroll suave desactivado con movimiento reducido.
- Contenido visible desde el render inicial, sin depender del observador para aparecer. Se retiraron las cifras y compromisos comerciales pendientes de verificación.

La tabla de análisis anterior describe el estado previo al rediseño. Los puntos implementados arriba sustituyen esos hallazgos; siguen pendientes los casos propios, un backend de captación y la configuración social/canonical del dominio definitivo.

Validación del rediseño: build de producción y TypeScript completados con npm, sin generar otro lockfile. El navegador integrado no pudo conectarse al servidor local; queda pendiente la revisión visual de escritorio y móvil. La instalación reportó alertas de seguridad en dependencias existentes; no se aplicaron actualizaciones incompatibles automáticamente.

Referencia de diseño: [comparación visual](docs/design/landing-concepts.png), generada con la herramienta integrada; [prompt](docs/design/design-prompt.txt).
