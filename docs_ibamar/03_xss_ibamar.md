# Ataque 2 - Cross-Site Scripting (XSS Reflejado)

## 1. Evidencia del Ataque
Este ataque lo hice en la pestaña "XSS (Reflected)"[cite: 2, 4]. En el campo donde pide el nombre, metí este payload en JavaScript[cite: 2, 4]:

```html
<script>alert('XSS')</script>