
import React, { useState } from "react";

function StartScreen({ onStart }) {
  const [mode, setMode] = useState("random");
  const [count, setCount] = useState(10);
  const [timer, setTimer] = useState(10);

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Impostazioni Quiz</h1>

      <label className="block mb-2 font-semibold">Modalità:</label>
      <select
        className="w-full p-2 border rounded mb-4"
        value={mode}
        onChange={(e) => setMode(e.target.value)}
      >
        <option value="random">📌 Domande random</option>
        <option value="interval">🔢 Intervallo personalizzato</option>
        <option value="review">📘 Solo da ripassare</option>
      </select>

      

      {mode === "review" && (
        <>
          <label className="block mb-2 font-semibold">Numero di domande da ripassare:</label>
          <select
            className="w-full p-2 border rounded mb-4"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          >
            {[...Array(30)].map((_, i) => {
              const n = (i + 1) * 10;
              return (
                <option key={n} value={n}>
                  {n}
                </option>
              );
            })}
          </select>
        </>
      )}

      <label className="block mb-2 font-semibold">Tempo limite:</label>
      <select
        className="w-full p-2 border rounded mb-6"
        value={timer}
        onChange={(e) => setTimer(Number(e.target.value))}
      >
        {[...Array(10)].map((_, i) => (
          <option key={i} value={(i + 1) * 10}>
            {(i + 1) * 10} min
          </option>
        ))}
      </select>

      <button
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        onClick={() => onStart({ mode, count, timer })}
      >
        Inizia il quiz
      </button>
    </div>
  );
}

export default StartScreen;
