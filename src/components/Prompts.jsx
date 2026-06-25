import React from 'react';
import { Cpu, Terminal, ShieldCheck } from 'lucide-react';

export default function Prompts() {
  return (
    <div className="bg-white border-2 border-blue-600 rounded-xl p-6 shadow-md font-mono">
      
      <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3 text-blue-600">
        <Cpu size={24} />
        <h2 className="text-lg font-black uppercase tracking-wide">
          Bitácora // Control del Asistente de Desarrollo
        </h2>
      </div>

      <div className="space-y-4">
        
        <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
          <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Estrategia de Uso</div>
          <p className="text-slate-600 text-xs leading-relaxed">
            La IA se utilizó estrictamente como soporte técnico para la traducción de notas de auditoría a elementos JSX y maquetación con Tailwind CSS. Toda la investigación de vectores de ataque, payloads y análisis de negocio de FarmaSalud se realizó de forma independiente antes de generar los componentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="text-[10px] text-amber-600 font-bold uppercase mb-1 flex items-center gap-1">
              <Terminal size={12} /> Intervención Manual
            </div>
            <p className="text-[11px] text-amber-800 leading-relaxed">
              Se reescribieron por completo los textos explicativos para eliminar el lenguaje automatizado. Se corrigieron de forma manual errores de sintaxis en el renderizado de etiquetas que bloqueaban la compilación local de Vite.
            </p>
          </div>

          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
            <div className="text-[10px] text-emerald-600 font-bold uppercase mb-1 flex items-center gap-1">
              <ShieldCheck size={12} /> Criterio de Seguridad
            </div>
            <p className="text-[11px] text-emerald-800 leading-relaxed">
              Los cálculos de criticidad CVSS 3.1 y las propuestas de mitigación (Prepared Statements y listas) se basaron en el análisis propio del material de estudio de la Unidad 3.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}