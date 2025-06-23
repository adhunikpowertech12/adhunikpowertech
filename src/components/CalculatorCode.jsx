import React, { useState } from 'react';

// EnergySavingCalculator component for Adhunik Air Care BLDC Fans
   export const CalculatorCode = () => {
  // State variables for user inputs
  const [currentWattage, setCurrentWattage] = useState(75); // Default to a common conventional fan wattage
  const [numFans, setNumFans] = useState(1);
  const [dailyUsage, setDailyUsage] = useState(10); // Default to 10 hours/day
  const [electricityCost, setElectricityCost] = useState(7.5); // Default to a common electricity cost in India (₹/kWh)

  // State variables for calculation results
  const [annualSavings, setAnnualSavings] = useState(null);
  const [annualKwhSaved, setAnnualKwhSaved] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // Define Adhunik Air Care BLDC fan average wattage for calculation
  // From e-catalogue, max is 32W, using an average of 30W for calculation for illustrative purposes
  const adhunikBldcWattage = 30;

  /**
   * Calculates the estimated energy savings and cost reduction.
   * This function is triggered when the "Calculate Savings!" button is clicked.
   */
  const calculateSavings = () => {
    // Input validation
    if (
      isNaN(currentWattage) || currentWattage <= 0 ||
      isNaN(numFans) || numFans <= 0 ||
      isNaN(dailyUsage) || dailyUsage <= 0 ||
      isNaN(electricityCost) || electricityCost <= 0
    ) {
      alert('Please enter valid positive numbers for all fields.');
      return;
    }

    if (currentWattage <= adhunikBldcWattage) {
      alert(`Your current fan wattage (${currentWattage}W) is not higher than or equal to our BLDC fan wattage (${adhunikBldcWattage}W). Please enter a higher value for comparison.`);
      return;
    }

    // Convert inputs to numbers
    const currentWatt = parseFloat(currentWattage);
    const numF = parseInt(numFans, 10);
    const dailyUse = parseFloat(dailyUsage);
    const elecCost = parseFloat(electricityCost);

    // --- Calculations for Conventional Fan ---
    // Daily kWh for conventional fans
    const conventionalKWhPerDay = (currentWatt * dailyUse * numF) / 1000;
    // Annual kWh for conventional fans
    const conventionalKWhPerYear = conventionalKWhPerDay * 365;
    // Annual cost for conventional fans
    const conventionalCostPerYear = conventionalKWhPerYear * elecCost;

    // --- Calculations for Adhunik Air Care BLDC Fan ---
    // Daily kWh for BLDC fans
    const bldcKWhPerDay = (adhunikBldcWattage * dailyUse * numF) / 1000;
    // Annual kWh for BLDC fans
    const bldcKWhPerYear = bldcKWhPerDay * 365;
    // Annual cost for BLDC fans
    const bldcCostPerYear = bldcKWhPerYear * elecCost;

    // --- Calculate Savings ---
    const calculatedAnnualSavings = conventionalCostPerYear - bldcCostPerYear;
    const calculatedAnnualKwhSaved = conventionalKWhPerYear - bldcKWhPerYear;

    // Update state to display results
    setAnnualSavings(calculatedAnnualSavings.toFixed(2));
    setAnnualKwhSaved(calculatedAnnualKwhSaved.toFixed(2));
    setShowResult(true);
  };

  /**
   * Function to simulate showing a lead form or navigating to a contact page.
   * In a real application, this would trigger a modal or redirect.
   */
  const handleGetReportClick = () => {
    alert('Thank you for your interest! A detailed savings report and quote will be sent to your email. Our team will contact you shortly.');
    // In a production environment, you would integrate with a lead form submission or CRM here.
    // e.g., router.push('/contact-us?interest=savings-report');
  };

  return (
    <section id="savings-calculator" className="py-12 px-4 md:px-8 bg-gray-50 font-inter rounded-xl shadow-lg">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl  font-extrabold text-blue-800 mb-6 leading-tight">
          Unlock Your Savings : Calculate Your Adhunik Air Care Advantage!
        </h2>
        <p className="text-sm text-gray-700 mb-10">
          See just how much you can save on your electricity bills by switching to energy-efficient Adhunik Air Care BLDC fans.
        </p>

        <div className="bg-white p-6 md:p-10 rounded-xl shadow-2xl border border-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
            {/* Current Fan Wattage Input */}
            <div>
              <label htmlFor="currentWattage" className="block text-sm  text-gray-800 font-semibold mb-2">
                Your Current Fan's Wattage (e.g., 75W for a conventional fan)
              </label>
              <input
                type="number"
                id="currentWattage"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                value={currentWattage}
                onChange={(e) => setCurrentWattage(e.target.value)}
                placeholder="Enter Watts (e.g., 75)"
                min="1"
              />
            </div>
            {/* Number of Fans Input */}
            <div>
              <label htmlFor="numFans" className=" text-sm block text-gray-800 font-semibold mb-2">
                Number of Fans
              </label>
              <input
                type="number"
                id="numFans"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                value={numFans}
                onChange={(e) => setNumFans(e.target.value)}
                placeholder="How many fans?"
                min="1"
              />
            </div>
            {/* Daily Usage Hours Input */}
            <div>
              <label htmlFor="dailyUsage" className="block text-sm text-gray-800 font-semibold mb-2">
                Average Daily Usage (Hours)
              </label>
              <input
                type="number"
                id="dailyUsage"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                value={dailyUsage}
                onChange={(e) => setDailyUsage(e.target.value)}
                placeholder="Hours per day (e.g., 10)"
                min="1"
              />
            </div>
            {/* Electricity Cost per Unit Input */}
            <div>
              <label htmlFor="electricityCost" className="text-sm block text-gray-800 font-semibold mb-2">
                Electricity Cost per Unit (₹/kWh)
              </label>
              <input
                type="number"
                step="0.1"
                id="electricityCost"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                value={electricityCost}
                onChange={(e) => setElectricityCost(e.target.value)}
                placeholder="e.g., 7.5"
                min="0.1"
              />
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculateSavings}
            className="w-full   bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3 px-8 rounded-lg text-md shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Calculate My Savings!
          </button>

          {/* Results Display */}
          {showResult && annualSavings !== null && (
            <div className="mt-10 p-6 md:p-8 bg-green-50 border border-green-300 rounded-lg text-left shadow-inner animate-fade-in-up">
              <h3 className="text-xl  font-bold text-green-800 mb-4">
                Your Estimated Savings with Adhunik Air Care BLDC Fans:
              </h3>
              <p className="text-xl text-gray-800 mb-2">
                <span className="font-bold text-green-700">₹ {annualSavings}</span> Annual Electricity Bill Reduction
              </p>
              <p className="text-xl text-gray-800 mb-4">
                <span className="font-bold text-green-700">{annualKwhSaved} kWh</span> Reduced Annual Electricity Consumption
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Ready to make the switch and experience these savings yourself?
                Get a personalized report and quote for your specific needs!
              </p>
              {/* Lead Generation Button */}
             
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

 