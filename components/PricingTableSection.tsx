"use client"; // needed for useState

import { useState } from "react";

export default function PricingTableSection() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Cheapest VTU Platform in Nigeria
        </h2>
        <p className="text-center text-gray-600 mb-10">
          SS AHMAD is the cheapest VTU & Data platform in Nigeria. See some of the prices below.
        </p>

        <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100 text-blue-700">
                <th className="py-3 px-4 text-left">Products & Services</th>
                <th className="py-3 px-4 text-left">Customers</th>
                <th className="py-3 px-4 text-left">Resellers</th>
                <th className="py-3 px-4 text-left">API Users</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4">Airtime (MTN, Glo, Airtel & 9mobile)</td>
                <td className="py-3 px-4">2% Discount</td>
                <td className="py-3 px-4">2.5% Discount</td>
                <td className="py-3 px-4">3% Discount</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">MTN Data 1GB + 5 mins  7 Days</td>
                <td className="py-3 px-4">₦819</td>
                <td className="py-3 px-4">₦799</td>
                <td className="py-3 px-4">₦799</td>
              </tr>

              {showAll && (
                <>
                  <tr className="border-b">
                    <td className="py-3 px-4">Glo Data 1GB (Gift)  30 Days</td>
                    <td className="py-3 px-4">₦549</td>
                    <td className="py-3 px-4">₦499</td>
                    <td className="py-3 px-4">₦499</td>
                  </tr>
                  {/* add more rows here */}
                </>
              )}
            </tbody>
          </table>

          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {showAll ? "Hide Table" : "View All"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
