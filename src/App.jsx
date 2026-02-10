import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const num = parseFloat(input);
    if (!isNaN(num)) {
      setResult(num * 2);
    } else {
      setResult('Please enter a valid number');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCalculate();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <Calculator className="w-12 h-12 text-indigo-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">Double It</h1>
        </div>
        
        <p className="text-gray-600 text-center mb-8">
          Enter any number and I'll multiply it by 2
        </p>

        <div className="space-y-4">
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter a number..."
            className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
          />

          <button
            onClick={handleCalculate}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            Calculate
          </button>

          {result !== null && (
            <div className="mt-6 p-6 bg-indigo-50 rounded-lg border-2 border-indigo-200">
              <p className="text-sm text-gray-600 mb-1">Result:</p>
              <p className="text-4xl font-bold text-indigo-600">
                {typeof result === 'number' ? result.toLocaleString() : result}
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          Made with React • Simple & Fast
        </div>
      </div>
    </div>
  );
}
