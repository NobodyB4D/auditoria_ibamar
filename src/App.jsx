import React from 'react';
import { Shield } from 'lucide-react';
import Resumen from './components/Resumen';
import InyeccionSQL from './components/InyeccionSQL';
import XSS from './components/XSS';
import Comandos from './components/Comandos';
import Prompts from './components/Prompts';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-mono">
      
      <header className="bg-slate-900 text-white py-6 px-6 border-b border-red-500/20 shadow-lg shadow-red-950/10">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <Shield size={36} className="text-emerald-400" />
          <div>
            <h1 className="text-2xl font-bold tracking-wider text-slate-100 uppercase">
              FarmaSalud // SecOps Portal
            </h1>
            <p className="text-slate-400 text-xs mt-0.5">
              Auditoría de Seguridad - Unidad 3 | T13034 Fundamentos de Seguridad
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-10">
        <Resumen />
        <InyeccionSQL />
        <XSS />
        <Comandos />
        <Prompts />
      </main>

      <footer className="bg-slate-900 text-slate-500 text-xs py-4 px-6 border-t border-slate-800">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <span><strong>AUDITOR:</strong> Martín Alejandro Ibarra Miranda</span>
          <span><strong>DOCENTE:</strong> Rubén Schnettler | INACAP Valparaíso</span>
        </div>
      </footer>

    </div>
  );
}

export default App;