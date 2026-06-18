# Bitácora de Uso de Inteligencia Artificial

## 1. Detalles de las Consultas
Para este trabajo, primero hice las pruebas manuales en el entorno de DVWA y busqué la teoría en las diapositivas de la asignatura. Con esa información lista, usé la IA de forma muy acotada, principalmente como un asistente de desarrollo para que me ayudara a traducir mis apuntes técnicos a código de React y a estructurar el diseño visual con Tailwind CSS, ya que armar los estilos a mano quita mucho tiempo.

* **Sección afectada:** Maquetación de la interfaz en App.jsx y diseño visual de las tarjetas de los ataques (SQLi, XSS, Comandos).
* **Prompt principal utilizado:** "Tengo listos los datos de mi auditoría de FarmaSalud, los payloads usados (' OR '1'='1, el script de XSS y el comando encadenado) junto con sus análisis de por qué fallaron. Ayúdame a escribir los componentes en React usando Tailwind CSS. Necesito que tengan un estilo de terminal oscura y clínica, que sea ordenado y que el código JSX no traiga ningún comentario adentro".
* **Herramienta usada:** Gemini.

## 2. Lo que acepté y lo que corregí
* **Aceptado:** Me sirvió mucho la estructura visual que propuso para las tarjetas de los componentes, la distribución en dos columnas para el CVSS y las mitigaciones, y la integración de los íconos de Lucide.
* **Corregido:** Tuve que meter mano en varias partes. La IA me estaba entregando unos textos explicativos muy automatizados y con palabras raras que no se usan en el laboratorio. Borré todo eso y redacté el análisis técnico con mis propias palabras basándome en lo que aprendí en clase. También me dio un código inicial para la inyección SQL que venía con unos errores de sintaxis en las etiquetas que hacían que Vite no compilara; busqué el fallo en el código y lo solucioné manualmente para que la página levantara bien en el localhost.

## 3. Reflexión Técnica
La IA es una buena ayuda para acelerar la programación de la interfaz y no trabarse con las clases de CSS. Sin embargo, no reemplaza el trabajo del auditor. Si uno no entiende la causa raíz de la vulnerabilidad (como el peligro de concatenar datos directamente en el backend) o cómo impacta el rubro de la empresa que estamos defendiendo, la IA te puede generar cualquier estructura genérica que no sirve para un informe real.