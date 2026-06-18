import React from 'react';
import { AlertCircle, ShieldCheck, Skull } from 'lucide-react';

export default function XSS() {
  return (
    <div className="space-y-6 font-mono mt-6">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
        
        <div className="flex items-center gap-3 mb-4 border-b border-slate-800 pb-3">
          <AlertCircle className="text-amber-400 animate-pulse" size={24} />
          <h2 className="text-xl font-bold text-slate-100 uppercase tracking-wide">
            Vulnerabilidad 02 // Cross-Site Scripting (XSS Reflejado)
          </h2>
        </div>

        <div className="space-y-4">
          
          <div className="p-4 bg-slate-950 rounded-lg border border-slate-800">
            <div className="text-xs text-slate-500 uppercase mb-1 tracking-wider">Payload Utilizado</div>
            <code className="text-amber-400 text-sm font-bold bg-amber-950/30 px-2 py-1 rounded block w-full border border-amber-900/20">
              &lt;script&gt;alert('XSS')&lt;/script&gt;
            </code>
          </div>

          <div className="p-4 bg-slate-950 rounded-lg border border-slate-800">
            <div className="text-xs text-slate-500 uppercase mb-2 tracking-wider">Evidencia del Laboratorio</div>
            <div className="relative border border-slate-800 rounded-lg overflow-hidden bg-slate-900 p-2">
              <img 
                src="/img/xss_ibamar.png" 
                alt="Evidencia de XSS Reflejado" 
                className="rounded border border-slate-800 shadow w-full opacity-75 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          <div className="p-4 bg-slate-950 rounded-lg border border-slate-800">
            <div className="text-xs text-emerald-400 uppercase font-bold mb-1 tracking-wider">Análisis de la Falla</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              La plataforma web toma la entrada del usuario y la renderiza directamente en el HTML del navegador sin sanitizar. Al inyectar etiquetas de script, el navegador las interpreta como instrucciones de ejecución reales. En FarmaSalud, esto permitiría a un atacante robar cookies de sesión activa de clientes o administradores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="p-4 bg-slate-950 rounded-lg border border-amber-900/30">
              <div className="text-xs text-amber-400 font-bold uppercase mb-1 flex items-center gap-1.5">
                <Skull size={14} /> Métrica de Gravedad CVSS
              </div>
              <div className="text-2xl font-bold text-amber-500">6.1 // MEDIA</div>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Requiere interacción del usuario para ser explotado, pero compromete la confidencialidad de las sesiones de los usuarios de la farmacia.
              </p>
            </div>

            <div className="p-4 bg-slate-950 rounded-lg border border-emerald-900/30">
              <div className="text-xs text-emerald-400 font-bold uppercase mb-1 flex items-center gap-1.5">
                <ShieldCheck size={14} /> Mitigación Aplicada
              </div>
              <div className="text-sm font-bold text-slate-200 uppercase">Escapado de Salida &amp; CSP</div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Convertir caracteres especiales en entidades HTML seguras para que se dibujen como texto plano y configurar Content Security Policy para restringir scripts maliciosos.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}