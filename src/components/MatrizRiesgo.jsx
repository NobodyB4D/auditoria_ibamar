import React from 'react';

export default function MatrizRiesgo() {
  const riesgos = [
    {
      id: "R-03",
      vulnerabilidad: "Inyección de Comandos (Command Injection)",
      cvss: "9.8",
      severidad: "Crítico",
      borderTitle: "border-red-500 text-red-700 bg-red-50",
      descripcion: "Concatenación directa de entradas de usuario en funciones de ejecución del sistema operativo (shell_exec) sin validación de metacaracteres de control (; , && , |). El navegador o servidor ejecuta las instrucciones directamente en la shell.",
      impacto: "Compromiso Total del Servidor (RCE). El atacante toma el control de la terminal con los privilegios del proceso web (www-data), permitiendo la alteración de archivos del sistema, exfiltración y denegación de servicio total.",
      mitigacion: "ELIMINAR LLAMADAS DIRECTAS A LA SHELL & VALIDACIÓN REGEX. Reemplazar por APIs nativas del lenguaje que manejen argumentos separados y aplicar validación estricta de expresiones regulares para las direcciones IP.",
      residual: "Bajo (Parchado con validación estricta)"
    },
    {
      id: "R-01",
      vulnerabilidad: "Inyección SQL (SQLi)",
      cvss: "8.8",
      severidad: "Alto",
      borderTitle: "border-orange-500 text-orange-700 bg-orange-50",
      descripcion: "Ausencia de sanitización y falta de parametrización en las consultas SQL del formulario de búsqueda de usuarios. Permite a un atacante remoto evadir la lógica de autenticación e inyectar sintaxis maliciosa directo al motor de base de datos.",
      impacto: "Compromiso crítico de la Confidencialidad e Integridad. Exfiltración masiva de datos sensibles de FarmaSalud, incluyendo fichas médicas, recetas retenidas y credenciales de acceso de clientes y administradores.",
      mitigacion: "CONSULTAS PREPARADAS & PARAMETRIZACIÓN. Implementar Prepared Statements mediante PDO en el backend, desvincular por completo el input de la estructura de la consulta y aplicar listas blancas de caracteres.",
      residual: "Bajo (Mitigado con Sentencias Preparadas)"
    },
    {
      id: "R-02",
      vulnerabilidad: "Cross-Site Scripting (XSS Reflejado)",
      cvss: "6.1",
      severidad: "Medio",
      borderTitle: "border-amber-500 text-amber-700 bg-amber-50",
      descripcion: "La plataforma web toma la entrada del usuario y la renderiza directamente en el HTML del navegador sin sanitizar. Al inyectar etiquetas de script, el navegador las interpreta como instrucciones de ejecución reales.",
      impacto: "Riesgo de Secuestro de Sesión (Session Hijacking) mediante la lectura de cookies no protegidas, redirecciones maliciosas a portales clonados (Phishing) y suplantación de identidad de los farmacéuticos activos.",
      mitigacion: "ESCAPADO DE SALIDA & DIRECTIVAS CSP. Convertir caracteres especiales en entidades HTML seguras para que se dibujen como texto plano y configurar Content Security Policy para restringir scripts maliciosos.",
      residual: "Insignificante (Bloqueado por CSP)"
    }
  ];

  return (
    <div className="w-full space-y-6 text-slate-800 font-sans">
      {/* Encabezado Clínico Claro Sin El Texto "Informe B" */}
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Matriz de Gestión de Riesgos y Mitigación
        </h2>
        <p className="text-slate-500 mt-1 text-sm">
          Evaluación de criticidad bajo el estándar internacional <span className="text-blue-600 font-semibold">CVSS v3.1</span> para el portal corporativo <span className="text-emerald-600 font-semibold">FarmaSalud</span>.
        </p>
      </div>

      {/* Indicadores Superiores Estilo Ficha */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="border border-slate-200 bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
          <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Riesgos Evaluados</span>
          <span className="text-xl font-bold text-slate-900 font-mono">03</span>
        </div>
        <div className="border border-slate-200 bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
          <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Criticidad Máxima</span>
          <span className="text-xl font-bold text-red-600 font-mono">9.8 Crítico</span>
        </div>
        <div className="border border-slate-200 bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
          <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Controles Aplicados</span>
          <span className="text-xl font-bold text-emerald-600 font-mono">100%</span>
        </div>
      </div>

      {/* Tarjetas Clonadas del Estilo Clínico */}
      <div className="space-y-6 pt-2">
        {riesgos.map((riesgo) => (
          <div 
            key={riesgo.id} 
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4"
          >
            {/* Título de la Ficha */}
            <div className="flex flex-wrap justify-between items-center gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <span className="font-mono text-xs font-bold text-slate-400 px-2 py-0.5 bg-slate-100 rounded">
                  {riesgo.id}
                </span>
                <h3 className="text-sm font-bold text-slate-200">{riesgo.vulnerabilidad}</h3>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold bg-slate-900 text-white px-2 py-0.5 rounded">
                  CVSS {riesgo.cvss}
                </span>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${riesgo.borderTitle}`}>
                  {riesgo.severidad}
                </span>
              </div>
            </div>

            {/* Mapeo del Fallo Rectángulo Completo */}
            <div className="border border-slate-200 border-l-4 border-l-blue-600 bg-slate-50/60 p-4 rounded-xl">
              <span className="block font-bold text-[10px] uppercase tracking-wider text-blue-600 font-mono mb-1">
                Mapeo Clínico de la Vulnerabilidad:
              </span>
              <p className="text-slate-700 text-sm leading-relaxed">
                {riesgo.descripcion}
              </p>
            </div>

            {/* Bloques de Impacto y Mitigación */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* Impacto Corporativo */}
              <div className="bg-amber-50/70 border border-amber-200 p-4 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="block font-bold text-[10px] uppercase tracking-wider text-amber-800 font-mono mb-1">
                    ⚠️ Impacto en el Vector (FarmaSalud)
                  </span>
                  <p className="text-amber-900 text-xs leading-relaxed">
                    {riesgo.impacto}
                  </p>
                </div>
              </div>

              {/* Estrategia de Mitigación */}
              <div className="bg-emerald-50/70 border border-emerald-200 p-4 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="block font-bold text-[10px] uppercase tracking-wider text-emerald-800 font-mono mb-1">
                    🛡️ Protocolo de Sanitización & Defensa
                  </span>
                  <p className="text-emerald-900 text-xs font-medium uppercase mb-1">
                    {riesgo.mitigacion.split('.')[0]}.
                  </p>
                  <p className="text-emerald-950 text-xs leading-relaxed">
                    {riesgo.mitigacion.split('.').slice(1).join('.')}
                  </p>
                </div>
              </div>
            </div>

            {/* Estado del Riesgo Residual */}
            <div className="pt-2 flex justify-between items-center text-xs border-t border-slate-100">
              <span className="text-slate-400 font-medium">Estado de continuidad del negocio:</span>
              <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Riesgo Residual: {riesgo.residual}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}