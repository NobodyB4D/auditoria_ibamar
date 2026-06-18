import React from 'react';
import { Cpu, Terminal, ShieldCheck } from 'lucide-react';

export default function Prompts() {
  return (
    <div className="space-y-6 font-mono mt-6">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
        
        <div className="flex items-center gap-3 mb-4 border-b border-slate-800 pb-3">
          <Cpu className="text-blue-400 animate-pulse" size={24} />
          <h2 className="text-xl font-bold text-slate-100 uppercase tracking-wide">
            Bitácora // Control del Asistente de Desarrollo
          </h2>
        </div>

        <div className="space-y-4">
          
          <div className="p-4 bg-slate-950 rounded-lg border border-slate-800">
            <div className="text-xs text-slate-500 uppercase mb-1 tracking-wider">Estrategia de Uso</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              La IA se utilizó estrictamente como soporte técnico para la traducción de notas de auditoría a elementos JSX y maquetación con Tailwind CSS. Toda la investigación de vectores de ataque, payloads y análisis de negocio de FarmaSalud se realizó de forma independiente antes de generar los componentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="p-4 bg-slate-950 rounded-lg border border-slate-800">
              <div className="text-xs text-amber-400 font-bold uppercase mb-1 flex items-center gap-1.5">
                <Terminal size={14} /> Intervención Manual
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Se reescribieron por completo los textos explicativos para eliminar el lenguaje automatizado. Se corrigieron de forma manual errores de sintaxis en el renderizado de etiquetas que bloqueaban la compilación local de Vite.
              </p>
            </div>

            <div className="p-4 bg-slate-950 rounded-lg border border-emerald-900/30">
              <div className="text-xs text-emerald-400 font-bold uppercase mb-1 flex items-center gap-1.5">
                <ShieldCheck size={14} /> Criterio de Seguridad
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Los cálculos de criticidad CVSS 3.1 y las propuestas de mitigación (Prepared Statements y listas blancas) se basaron en el análisis propio del material de estudio de la Unidad 3.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}