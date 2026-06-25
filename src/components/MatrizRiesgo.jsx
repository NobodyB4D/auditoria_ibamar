import React, { useState } from 'react';
import { Grid, ShieldAlert, AlertTriangle } from 'lucide-react';

export default function MatrizRiesgo() {
  const [vulnerabilidadSeleccionada, setVulnerabilidadSeleccionada] = useState(null);

  const vulnerabilidades = [
    { id: 'sqli', nombre: 'Inyección SQL (SQLi)', probabilidad: 4, impacto: 5, criticidad: 'CRÍTICA', color: 'bg-red-500', desc: 'Acceso total a la base de datos de pacientes, recetas retenidas e historial clínico.' },
    { id: 'cmdi', nombre: 'Inyección de Comandos', probabilidad: 3, impacto: 5, criticidad: 'CRÍTICA', color: 'bg-red-600', desc: 'Ejecución de código arbitrario en el servidor central. Control total del sistema operativo subyacente.' },
    { id: 'xss', nombre: 'XSS Reflejado', probabilidad: 5, impacto: 3, criticidad: 'ALTA', color: 'bg-amber-500', desc: 'Secuestro de sesiones activas (Session Hijacking) y suplantación de identidad en el portal de clientes.' }
  ];

  return (
    <div className="bg-white border-2 border-blue-600 rounded-xl p-6 shadow-md font-mono">
      
      <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-3 text-blue-600">
        <Grid size={24} />
        <h2 className="text-lg font-black uppercase tracking-wide">
          Unidad B // Matriz de Riesgo Clínico
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <div className="lg:col-span-7 bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-inner">
          <div className="text-[10px] text-slate-500 font-bold uppercase mb-4 tracking-wider text-center">
            Simulador Matricial (Probabilidad x Impacto)
          </div>
          
          <div className="grid grid-cols-6 gap-2">
            <div className="col-span-1 flex flex-col justify-between text-right pr-2 text-xs text-slate-400 font-bold py-2">
              <div>5</div><div>4</div><div>3</div><div>2</div><div>1</div>
            </div>

            <div className="col-span-5 grid grid-cols-5 gap-1.5 h-64">
              {[5, 4, 3, 2, 1].map((imp) => (
                [1, 2, 3, 4, 5].map((prob) => {
                  const vulnActiva = vulnerabilidades.find(v => v.probabilidad === prob && v.impacto === imp);
                  let colorFondo = 'bg-white border-slate-200';
                  
                  if (imp * prob >= 15) colorFondo = 'bg-red-50 border-red-200 hover:bg-red-100';
                  else if (imp * prob >= 8) colorFondo = 'bg-amber-50 border-amber-200 hover:bg-amber-100';
                  else colorFondo = 'bg-blue-50/50 border-blue-100 hover:bg-blue-50';

                  return (
                    <button
                      key={`${imp}-${prob}`}
                      onClick={() => vulnActiva && setVulnerabilidadSeleccionada(vulnActiva)}
                      className={`border rounded flex items-center justify-center relative transition-all duration-200 group ${colorFondo} ${vulnActiva ? 'ring-2 ring-blue-600 scale-102 cursor-pointer z-10 shadow' : 'cursor-default'}`}
                    >
                      {vulnActiva && (
                        <span className={`w-3.5 h-3.5 rounded-full ${vulnActiva.color} animate-pulse shadow`} />
                      )}
                    </button>
                  );
                })
              ))}
            </div>

            <div className="col-span-1"></div>
            <div className="col-span-5 grid grid-cols-5 gap-1.5 text-center text-xs text-slate-400 font-bold pt-1">
              <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 h-full flex flex-col justify-center shadow-inner">
            {vulnerabilidadSeleccionada ? (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-900">
                  <span className={`w-3 h-3 rounded-full ${vulnerabilidadSeleccionada.color}`} />
                  <h3 className="text-xs font-black uppercase tracking-wide">
                    {vulnerabilidadSeleccionada.nombre}
                  </h3>
                </div>
                <div className="flex gap-4 text-[10px] text-slate-500 font-bold">
                  <span>P: {vulnerabilidadSeleccionada.probabilidad}</span>
                  <span>I: {vulnerabilidadSeleccionada.impacto}</span>
                  <span>MÁX: <strong className="text-red-600">{vulnerabilidadSeleccionada.probabilidad * vulnerabilidadSeleccionada.impacto}</strong></span>
                </div>
                <div className="inline-block px-2 py-0.5 text-[9px] font-bold bg-red-100 border border-red-300 text-red-700 rounded uppercase">
                  CRITICIDAD: {vulnerabilidadSeleccionada.criticidad}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                  {vulnerabilidadSeleccionada.desc}
                </p>
              </div>
            ) : (
              <div className="text-center text-xs text-slate-400 py-8">
                <ShieldAlert className="mx-auto mb-2 opacity-50 text-blue-500" size={32} />
                Selecciona un nodo activo en el mapa clínico para desplegar el análisis epidemiológico del vector.
              </div>
            )}
          </div>
        </div>

      </div>

      <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
        <table className="w-full text-left border-collapse bg-white">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-[10px] text-slate-500 uppercase tracking-wider">
              <th className="p-3">Vector Clínico / Amenaza</th>
              <th className="p-3 text-center">Prob (P)</th>
              <th className="p-3 text-center">Imp (I)</th>
              <th className="p-3 text-center">Magnitud</th>
              <th className="p-3">Plan de Acción</th>
            </tr>
          </thead>
          <tbody className="text-xs text-slate-700 divide-y divide-slate-100">
            {vulnerabilidades.map((v) => (
              <tr key={v.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3 font-bold text-slate-800">{v.nombre}</td>
                <td className="p-3 text-center font-bold text-slate-500">{v.probabilidad}</td>
                <td className="p-3 text-center font-bold text-slate-500">{v.impacto}</td>
                <td className="p-3 text-center font-black text-red-600">{v.probabilidad * v.impacto}</td>
                <td className="p-3">
                  <span className="flex items-center gap-1.5 text-red-600 font-bold uppercase text-[10px]">
                    <AlertTriangle size={12} /> Cuarentena Inmediata
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}