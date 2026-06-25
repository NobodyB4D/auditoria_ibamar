import React from 'react';
import { Terminal, ShieldCheck, Skull } from 'lucide-react';

export default function Comandos() {
  return (
    <div className="bg-white border-2 border-blue-600 rounded-xl p-6 shadow-md font-mono">
      
      <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3 text-blue-600">
        <Terminal size={24} />
        <h2 className="text-lg font-black uppercase tracking-wide">
          Vulnerabilidad 03 // Inyección de Comandos
        </h2>
      </div>

      <div className="space-y-4">
        
        <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
          <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Carga Útil Inyectada (Payload)</div>
          <code className="text-red-600 text-sm font-black bg-red-50 px-2 py-1 rounded block border border-red-100">
            127.0.0.1; cat /etc/passwd
          </code>
        </div>

        <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
          <div className="text-[10px] text-slate-400 font-bold uppercase mb-2">Captura de Control (Laboratorio)</div>
          <div className="border border-slate-200 rounded-lg overflow-hidden bg-white p-1 shadow-inner">
            <img 
              src="/img/comandos_ibamar.png" 
              alt="Evidencia Inyección de Comandos" 
              className="rounded w-full filter contrast-125"
            />
          </div>
        </div>

        <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-blue-600 text-slate-700 text-xs leading-relaxed">
          <span className="font-bold text-blue-600 block mb-1 uppercase text-[10px]">Mapeo Clínico del Fallo:</span>
          El sistema operativo subyacente ejecuta comandos del sistema concatenando directamente el texto de la interfaz sin filtros. El uso del punto y coma actúa como un separador en la terminal del backend, lo que permite encadenar y ejecutar el comando secundario de lectura de archivos críticos del sistema remoto.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <div className="text-[10px] text-red-600 font-bold uppercase mb-1 flex items-center gap-1">
              <Skull size={12} /> Severidad del Vector (CVSS)
            </div>
            <div className="text-xl font-black text-red-700">9.8 // CRÍTICA</div>
            <p className="text-[11px] text-red-800 mt-1">
              Falla de máxima severidad. Concede acceso a la terminal del servidor de FarmaSalud, permitiendo la destrucción o secuestro completo del nodo central.
            </p>
          </div>

          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
            <div className="text-[10px] text-emerald-600 font-bold uppercase mb-1 flex items-center gap-1">
              <ShieldCheck size={12} /> Protocolo de Sanitización
            </div>
            <div className="text-xs font-bold text-emerald-800 uppercase">Listas Blancas y APIs de Capa</div>
            <p className="text-[11px] text-emerald-800 mt-1">
              Prohibir el paso directo de entradas a la terminal del sistema. Utilizar expresiones regulares estrictas en el backend para validar únicamente formatos de IP válidos.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}