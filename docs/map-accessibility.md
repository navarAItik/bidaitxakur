## Accesibilidad del mapa pet friendly

- **Toggles en /mapa**:
  - *Contraste alto*: ajusta colores de fondo/tipografía para mejorar lectura.
  - *Texto grande*: aumenta el tamaño base (`text-lg`) para toda la página.
  - *Modo bajo datos*: oculta iframes externos (My Maps) para conexiones limitadas.
- **Próximos módulos**:
  - Integrar LISIO u otro widget para traducción automática y opciones avanzadas (navegación por teclado, resumen por voz).
  - Audio-guías: cada ficha de servicio tendrá un botón “Escuchar normativa” con clips generados.
  - Formato FALC: versión simplificada de la normativa, disponible en PDF/HTML.
  - Formatos alternativos: enlaces a recursos Braille/audiodescripción cuando los ayuntamientos los proporcionen.
- **Consideraciones**:
  - Mantener contraste mínimo 4.5:1 según WCAG para textos principales.
  - Asegurar que todos los botones tengan `aria-pressed` o etiquetas descriptivas.
  - Monitorizar feedback para priorizar las siguientes mejoras (lectura fácil, lengua de signos, etc.).
