# Auditoría de Seguridad - FarmaSalud[cite: 3]

## Resumen
Este informe junta todo el análisis técnico que le hice al portal de clientes de FarmaSalud[cite: 3, 4]. El objetivo principal es revisar las fallas de seguridad que tiene la plataforma para armar un plan de acción y corregirlas antes de que sean explotadas[cite: 4].

## Qué datos se cuidan en este portal
Como FarmaSalud es una cadena de farmacias, la página web maneja información bastante privada de los clientes[cite: 3]. Los activos más importantes que pasan por este sitio y que tenemos que proteger son:

* **Recetas médicas y datos de salud:** Todo el historial de medicamentos y tratamientos de los pacientes[cite: 3].
* **Datos personales (Fidelización):** El RUT, nombres, correos y teléfonos de la gente registrada[cite: 3].
* **Transacciones:** Los datos de las compras y los registros de pago[cite: 3].

## Alcance de las pruebas
Para las pruebas técnicas se usó el entorno controlado de DVWA configurado en nivel Low[cite: 4]. Ahí simulé el comportamiento del portal y evalué tres ataques en profundidad: Inyección SQL, XSS e Inyección de Comandos, analizando el riesgo real que significan para el negocio[cite: 4].