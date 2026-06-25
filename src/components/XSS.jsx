import React from 'react';
import { AlertCircle, ShieldCheck, Skull } from 'lucide-react';

export default function XSS() {
  return (
    <div className="bg-white border-2 border-blue-600 rounded-xl p-6 shadow-md font-mono">
      
      <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3 text-blue-600">
        <AlertCircle size={24} />
        <h2 className="text-lg font-black uppercase tracking-wide">
          Vulnerabilidad 02 // Cross-Site Scripting (XSS Reflejado)
        </h2>
      </div>

      <div className="space-y-4">
        
        <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
          <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Carga Útil Inyectada (Payload)</div>
          <code className="text-amber-600 text-sm font-black bg-amber-50 px-2 py-1 rounded block border border-amber-100">
            &lt;script&gt;alert('XSS')&lt;/script&gt;
          </code>
        </div>

        <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
          <div className="text-[10px] text-slate-400 font-bold uppercase mb-2">Captura de Control (Laboratorio)</div>
          <div className="border border-slate-200 rounded-lg overflow-hidden bg-white p-1 shadow-inner">
            <img 
              src="/img/xss_ibamar.png" 
              alt="Evidencia XSS" 
              className="rounded w-full filter contrast-125"
            />
          </div>
        </div>

        <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-blue-600 text-slate-700 text-xs leading-relaxed">
          <span className="font-bold text-blue-600 block mb-1 uppercase text-[10px]">Mapeo Clínico del Fallo:</span>
          La plataforma web toma la entrada del usuario y la renderiza directamente en el HTML del navegador sin sanitizar. Al inyectar etiquetas de script, el navegador las interpreta como instrucciones de ejecución reales. En FarmaSalud, esto permitiría a un atacante robar cookies de sesión activa de clientes o administradores.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="text-[10px] text-amber-600 font-bold uppercase mb-1 flex items-center gap-1">
              <Skull size={12} /> Severidad del Vector (CVSS)
            </div>
            <div className="text-xl font-black text-amber-700">6.1 // MEDIA</div>
            <p className="text-[11px] text-amber-800 mt-1">
              Requiere interacción del usuario para ser explotado, pero compromete la confidencialidad de las sesiones de los usuarios de la farmacia.
            </p>
          </div>

          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
            <div className="text-[10px] text-emerald-600 font-bold uppercase mb-1 flex items-center gap-1">
              <ShieldCheck size={12} /> Protocolo de Sanitización
            </div>
            <div className="text-xs font-bold text-emerald-800 uppercase">Escapado de Salida &amp; CSP</div>
            <p className="text-[11px] text-emerald-800 mt-1">
              Convertir caracteres especiales en entidades HTML seguras para que se dibujen como texto plano y configurar Content Security Policy para restringir scripts maliciosos.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}