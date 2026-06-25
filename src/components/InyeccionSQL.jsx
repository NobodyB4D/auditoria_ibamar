import React from 'react';
import { Database, ShieldCheck, Skull } from 'lucide-react';

export default function InyeccionSQL() {
  return (
    <div className="bg-white border-2 border-blue-600 rounded-xl p-6 shadow-md font-mono">
      
      <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3 text-blue-600">
        <Database size={24} />
        <h2 className="text-lg font-black uppercase tracking-wide">
          Ataque 01 // Inyección de Código SQL (SQLi)
        </h2>
      </div>

      <div className="space-y-4">
        
        <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
          <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Carga Útil Inyectada (Payload)</div>
          <code className="text-red-600 text-sm font-black bg-red-50 px-2 py-1 rounded block border border-red-100">
            % ' OR '1'='1
          </code>
        </div>

        <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
          <div className="text-[10px] text-slate-400 font-bold uppercase mb-2">Captura de Control (Laboratorio)</div>
          <div className="border border-slate-200 rounded-lg overflow-hidden bg-white p-1 shadow-inner">
            <img 
              src="/img/sqli_ibamar.png" 
              alt="Evidencia SQLi" 
              className="rounded w-full filter contrast-125"
            />
          </div>
        </div>

        <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-blue-600 text-slate-700 text-xs leading-relaxed">
          <span className="font-bold text-blue-600 block mb-1 uppercase text-[10px]">Mapeo Clínico del Fallo:</span>
          Al ingresar la comilla simple se rompe la lógica de la consulta estructurada en el servidor. El condicional inyectado se evalúa como siempre verdadero, provocando que la base de datos de FarmaSalud expulse la lista completa de usuarios, nombres y claves hash sin requerir autenticación.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <div className="text-[10px] text-red-600 font-bold uppercase mb-1 flex items-center gap-1">
              <Skull size={12} /> Severidad del Vector (CVSS)
            </div>
            <div className="text-xl font-black text-red-700">8.8 // ALTA</div>
            <p className="text-[11px] text-red-800 mt-1">
              Permite la exfiltración completa de las recetas médicas del servidor web sin privilegios de administrador.
            </p>
          </div>

          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
            <div className="text-[10px] text-emerald-600 font-bold uppercase mb-1 flex items-center gap-1">
              <ShieldCheck size={12} /> Protocolo de Sanitización
            </div>
            <div className="text-xs font-bold text-emerald-800 uppercase">Consultas Preparadas (PDO)</div>
            <p className="text-[11px] text-emerald-800 mt-1">
              Separar de forma estricta los datos del usuario de las instrucciones lógicas de la consulta SQL.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}