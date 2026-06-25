import React from 'react';
import { ShieldAlert, Activity, HeartPulse, CreditCard } from 'lucide-react';

export default function Resumen() {
  return (
    <div className="space-y-6 font-mono">
      
      <div className="bg-white border-2 border-red-500 rounded-xl p-6 shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl">
          Breach Detected
        </div>
        <div className="flex items-center gap-3 mb-3 text-red-600">
          <ShieldAlert size={28} className="animate-bounce" />
          <h2 className="text-lg font-black uppercase tracking-tight">
            Estado del Sistema // Alerta de Contaminación Digital
          </h2>
        </div>
        <p className="text-sm text-red-700 bg-red-50 p-3 rounded-lg border border-red-200 leading-relaxed font-bold">
          [CRÍTICO] Múltiples vectores de malware detectados en el servidor central de FarmaSalud. El ambiente DVWA se encuentra comprometido. Se requiere aplicar contención inmediata en la base de datos de recetas.
        </p>
      </div>

      <div className="bg-white border-2 border-blue-600 rounded-xl p-6 shadow-md">
        <div className="flex items-center gap-2 mb-3 text-blue-600 border-b border-slate-100 pb-2">
          <Activity size={20} className="animate-pulse" />
          <h3 className="font-bold uppercase text-sm tracking-wide">Diagnóstico de Intrusión</h3>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          Iniciando escaneo de la plataforma de clientes de FarmaSalud. El backend concatena directamente los datos del usuario en la memoria activa del servidor sin aplicar filtros sanitarios. Esto actúa como un inyector biológico que permite la persistencia de comandos y la exfiltración de registros corporativos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="bg-white p-4 rounded-xl border-2 border-slate-200 border-l-red-500 shadow-sm">
          <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase mb-1">
            <HeartPulse size={16} /> Fichas Clínicas
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Base de datos de recetas retenidas de pacientes de la farmacia. Riesgo: Violación masiva de privacidad médica.
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl border-2 border-slate-200 border-l-blue-500 shadow-sm">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase mb-1">
            <Activity size={16} /> Identidad &amp; Convenios
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Módulo de RUT y descuentos previsionales de clientes. Riesgo: Campañas dirigidas de suplantación de identidad.
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl border-2 border-slate-200 border-l-amber-500 shadow-sm">
          <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase mb-1">
            <CreditCard size={16} /> Pasarela de Pagos
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Tokens transaccionales de venta farmacéutica en línea. Riesgo: Clonación de tarjetas e inyección de fraude financiero.
          </p>
        </div>

      </div>
    </div>
  );
}