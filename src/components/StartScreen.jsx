import React, { useState } from 'react';

export default function StartScreen({ onStart }) {
  const [mode, setMode] = useState('random');
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(10);
  const [count, setCount] = useState(10);
  const [timer, setTimer] = useState(10);

  const handleStart = () => {
  };

  return (
    <div className="p-6 text-center max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Imposta il tuo quiz</h2>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Modalità:</label>
        <select className="w-full p-2 border rounded" value={mode} onChange={(e) => setMode(e.target.value)}>
          <option value="random">📌 Domande random</option>
          <option value="interval">🔢 Intervallo personalizzato</option>
          <option value="review">📘 Solo da ripassare</option>
        </select>
      </div>

      {mode === 'interval' && (
        <div className="flex justify-between gap-2 mb-4">
          <input
            type="number"
            className="w-1/2 p-2 border rounded"
            value={start}
            onChange={(e) => setStart(Number(e.target.value))}
            placeholder="Da domanda n°"
          />
          <input
            type="number"
            className="w-1/2 p-2 border rounded"
            value={end}
            onChange={(e) => setEnd(Number(e.target.value))}
            placeholder="A domanda n°"
          />
        </div>
      )}

      {(mode === 'random' || mode === 'review') && (
        <div className="mb-4">
          <label className="block font-semibold mb-1">Numero di domande:</label>
          <select className="w-full p-2 border rounded" value={count} onChange={(e) => setCount(Number(e.target.value))}>
            {[...Array(88)].map((_, i) => { const n = (i + 1) * 10; return (<option key={n} value={n}>{n}</option>); })}
          </select>
        </div>
      )}

      <div className="mb-4">
        <label className="block font-semibold mb-1">Ripasso automatico errori:</label>
        <button
          type="button"
          className={autoSaveErrors ? "w-full p-2 rounded font-semibold bg-green-700 text-white" : "w-full p-2 rounded font-semibold bg-gray-200"}
          onClick={() => setAutoSaveErrors(!autoSaveErrors)}
        >
          {autoSaveErrors ? "✅ Attivo - Salva errori in ripasso" : "❌ Non attivo"}
        </button>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Timer (minuti):</label>
        <select className="w-full p-2 border rounded" value={timer} onChange={(e) => setTimer(Number(e.target.value))}>
          {[...Array(10)].map((_, i) => (
            <option key={i} value={(i + 1) * 10}>
              {(i + 1) * 10} min
            </option>
          ))}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Ripasso automatico errori:</label>
        <button
          type="button"
          className={autoSaveErrors ? "w-full p-2 rounded font-semibold bg-green-700 text-white" : "w-full p-2 rounded font-semibold bg-gray-200"}
          onClick={() => setAutoSaveErrors(!autoSaveErrors)}
        >
          {autoSaveErrors ? "✅ Attivo - Salva errori in ripasso" : "❌ Non attivo"}
        </button>
      </div>

      <button onClick={handleStart} className="mt-4 px-4 py-2 bg-green-600 text-white rounded">
        ▶️ Avvia il quiz
      </button>
    </div>
  );
}
