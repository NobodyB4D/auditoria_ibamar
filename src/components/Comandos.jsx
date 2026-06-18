import React from 'react';
import { Terminal, ShieldCheck, Skull } from 'lucide-react';

export default function Comandos() {
  return (
    <div className="space-y-6 font-mono mt-6">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
        
        <div className="flex items-center gap-3 mb-4 border-b border-slate-800 pb-3">
          <Terminal className="text-red-500 animate-pulse" size={24} />
          <h2 className="text-xl font-bold text-slate-100 uppercase tracking-wide">
            Vulnerabilidad 03 // Inyección de Comandos
          </h2>
        </div>

        <div className="space-y-4">
          
          <div className="p-4 bg-slate-950 rounded-lg border border-slate-800">
            <div className="text-xs text-slate-500 uppercase mb-1 tracking-wider">Payload Utilizado</div>
            <code className="text-red-400 text-sm font-bold bg-red-950/30 px-2 py-1 rounded block w-full border border-red-900/20">
              127.0.0.1; cat /etc/passwd
            </code>
          </div>

          <div className="p-4 bg-slate-950 rounded-lg border border-slate-800">
            <div className="text-xs text-slate-500 uppercase mb-2 tracking-wider">Evidencia del Laboratorio</div>
            <div className="relative border border-slate-800 rounded-lg overflow-hidden bg-slate-900 p-2">
              <img 
                src="/img/comandos_ibamar.png" 
                alt="Evidencia de inyección de comandos" 
                className="rounded border border-slate-800 shadow w-full opacity-75 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          <div className="p-4 bg-slate-950 rounded-lg border border-slate-800">
            <div className="text-xs text-emerald-400 uppercase font-bold mb-1 tracking-wider">Análisis de la Falla</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              El sistema operativo subyacente ejecuta comandos del sistema concatenando directamente el texto de la interfaz sin filtros. El uso del punto y coma actúa como un separador en la terminal del backend, lo que permite encadenar y ejecutar el comando secundario de lectura de archivos críticos del sistema remoto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="p-4 bg-slate-950 rounded-lg border border-red-900/30">
              <div className="text-xs text-red-400 font-bold uppercase mb-1 flex items-center gap-1.5">
                <Skull size={14} /> Métrica de Gravedad CVSS
              </div>
              <div className="text-2xl font-bold text-red-500">9.8 // CRÍTICA</div>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Falla de máxima severidad. Concede acceso a la terminal del servidor de FarmaSalud, permitiendo la destrucción o secuestro completo del nodo central.
              </p>
            </div>

            <div className="p-4 bg-slate-950 rounded-lg border border-emerald-900/30">
              <div className="text-xs text-emerald-400 font-bold uppercase mb-1 flex items-center gap-1.5">
                <ShieldCheck size={14} /> Mitigación Aplicada
              </div>
              <div className="text-sm font-bold text-slate-200 uppercase">Listas Blancas y APIs de Capa</div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Prohibir el paso directo de entradas a la terminal del sistema. Utilizar expresiones regulares estrictas en el backend para validar únicamente formatos de IP válidos.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}