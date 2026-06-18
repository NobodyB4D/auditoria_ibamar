import React from 'react';
import { ShieldAlert, Terminal, Activity, HeartPulse, Database, AlertTriangle } from 'lucide-react';

export default function Resumen() {
  return (
    <div className="space-y-6 font-mono">
      
      <div className="bg-slate-900 border-2 border-red-500/30 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <div>
            <div className="text-xs text-slate-400 uppercase tracking-widest">Estado del Sistema</div>
            <div className="text-sm font-bold text-red-400 flex items-center gap-1.5">
              <ShieldAlert size={16} /> ALERTA: BRECHA DE SEGURIDAD DETECTADA
            </div>
          </div>
        </div>
        <div className="text-xs bg-red-950/50 border border-red-500/40 text-red-400 px-3 py-1 rounded">
          DVWA_LOW_ENVIRONMENT // COMPROMISED
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-4 border-b border-slate-800 pb-3">
          <Terminal className="text-emerald-400" size={24} />
          <h2 className="text-xl font-bold text-slate-100 uppercase tracking-wide">
            Diagnóstico Inicial: Portal FarmaSalud
          </h2>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          Iniciando auditoría en la plataforma de clientes. Tras los escaneos preliminares en el laboratorio, 
          se detectó que el backend mezcla las instrucciones del servidor con los inputs de los usuarios. Esto actúa como una 
          puerta abierta para la inyección de payloads maliciosos, permitiendo un comportamiento similar al de un malware de persistencia o robo de datos.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <HeartPulse className="text-emerald-400 animate-pulse" size={24} />
          <h2 className="text-xl font-bold text-slate-100 uppercase tracking-wide">
            Activos Críticos de Salud Custodiados
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="p-4 bg-slate-950 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-colors">
            <div className="flex items-center gap-2 mb-2 text-red-400 font-bold text-sm uppercase">
              <Activity size={16} />
              Tratamientos Clínicos
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Base de datos que aloja recetas médicas retenidas y diagnósticos privados de los clientes. Riesgo: Espionaje y violación de privacidad médica.
            </p>
          </div>

          <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-2 mb-2 text-emerald-400 font-bold text-sm uppercase">
              <Database size={16} />
              RUT y Fidelización
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Identificación de pacientes asociados al sistema de descuentos de la farmacia. Riesgo: Campañas de Phishing dirigido o suplantación de identidad.
            </p>
          </div>

          <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-2 mb-2 text-slate-300 font-bold text-sm uppercase">
              <AlertTriangle size={16} className="text-amber-500" />
              Pasarela de Pagos
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Registros de compras y tokens transaccionales de venta en línea. Riesgo: Desvío de fondos o inyección de código para clonación de tarjetas.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}