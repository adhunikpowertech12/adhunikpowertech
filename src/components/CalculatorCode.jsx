// components/EnergyCalculator.js
"use client";

import { useState } from 'react';

export default function EnergyCalculator() {
  // Constants
  const conventionalFanConsumption = 75; // 75W for conventional fan
  const yourFanConsumption = 28;        // 28W for energy-efficient fan
  const costPerUnit = 6;                // Cost per unit in INR (1 unit = 1000 watt-hours)
  const co2PerKwh = 0.9;                // CO2 emissions in kg per kWh
  const co2AbsorptionPerTree = 22;      // CO2 absorption by a single tree per year (kg)

  // State
  const [numFans, setNumFans] = useState(1);
  const [hours, setHours] = useState(1);
  const [results, setResults] = useState(null);

  // Calculate savings
  const calculateSavings = () => {
    const daysInYear = 365;
    const conventionalEnergy = numFans * hours * conventionalFanConsumption * daysInYear / 1000; // kWh
    const efficientEnergy = numFans * hours * yourFanConsumption * daysInYear / 1000; // kWh
    const savingsInEnergy = conventionalEnergy - efficientEnergy;
    const savingsInCost = savingsInEnergy * costPerUnit;
    const co2Savings = savingsInEnergy * co2PerKwh;
    const treesEquivalent = co2Savings / co2AbsorptionPerTree;

    setResults({
      conventionalEnergy,
      efficientEnergy,
      savingsInEnergy,
      savingsInCost,
      co2Savings,
      treesEquivalent
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Energy Saving Calculator</h2>
        <p className="text-gray-600 mt-2">Calculate your potential savings with energy-efficient fans</p>
      </div>

      <div className="space-y-6">
        {/* Number of Fans Slider */}
        <div>
          <label htmlFor="numFans" className="block text-sm font-medium text-gray-700 mb-2">
            Number of Fans: <span className="font-semibold text-blue-600">{numFans}</span>
          </label>
          <input
            id="numFans"
            type="range"
            min="1"
            max="100"
            value={numFans}
            onChange={(e) => setNumFans(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1</span>
            <span>100</span>
          </div>
        </div>

        {/* Running Hours Slider */}
        <div>
          <label htmlFor="hours" className="block text-sm font-medium text-gray-700 mb-2">
            Running Hours Per Day: <span className="font-semibold text-blue-600">{hours}</span>
          </label>
          <input
            id="hours"
            type="range"
            min="1"
            max="24"
            value={hours}
            onChange={(e) => setHours(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1</span>
            <span>24</span>
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateSavings}
          className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition duration-200 shadow-md"
        >
          Calculate Savings
        </button>

        {/* Results */}
        {results && (
          <div className="mt-6 p-6 bg-gray-50 text-black rounded-lg border border-gray-200 animate-fade-in">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Potential Savings</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Conventional Fans Energy Use (Yearly):</span>
                <span className="font-medium">{results.conventionalEnergy.toFixed(2)} kWh</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Your Fans Energy Use (Yearly):</span>
                <span className="font-medium">{results.efficientEnergy.toFixed(2)} kWh</span>
              </div>
              
              <div className="flex justify-between pt-3 border-t border-gray-200">
                <span className="text-green-600 font-medium">Energy Saved (Yearly):</span>
                <span className="text-green-600 font-medium">{results.savingsInEnergy.toFixed(2)} kWh</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-green-600 font-medium">Amount Saved (Yearly):</span>
                <span className="text-green-600 font-medium">₹{results.savingsInCost.toFixed(2)} INR</span>
              </div>
              
              <div className="flex justify-between pt-3 border-t border-gray-200">
                <span className="text-gray-600">CO₂ Saved (Yearly):</span>
                <span className="font-medium">{results.co2Savings.toFixed(2)} kg</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Equivalent to Planting:</span>
                <span className="font-medium">{Math.ceil(results.treesEquivalent)} Trees</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}