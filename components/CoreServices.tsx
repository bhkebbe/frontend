export default function CoreServices() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Fast, reliable and affordable solutions designed for everyday digital payments.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* Airtime */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-2">Airtime</h3>
            <p className="text-gray-600">Buy airtime instantly for MTN, Glo, Airtel & 9mobile.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Buy Airtime</button>
          </div>

          {/* Data */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-2">Data</h3>
            <p className="text-gray-600">Cheapest data bundles for all networks.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Buy Data</button>
          </div>

          {/* Cable TV */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-2">Cable TV</h3>
            <p className="text-gray-600">Subscribe DSTv, GOTv & Startimes instantly.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Subscribe</button>
          </div>

          {/* Electricity */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-2">Electricity</h3>
            <p className="text-gray-600">Pay electricity bills securely and instantly.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Pay Bills</button>
          </div>

          {/* ePINs */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-2">ePINs</h3>
            <p className="text-gray-600">Get JAMB, WAEC, NECO, NABTEB PINs instantly.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Buy PINs</button>
          </div>

          {/* Airtime to Cash */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-2">Airtime to Cash</h3>
            <p className="text-gray-600">Convert airtime to cash easily.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Convert</button>
          </div>

          {/* Bulk SMS */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-2">Bulk SMS</h3>
            <p className="text-gray-600">Send bulk SMS campaigns affordably.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Send SMS</button>
          </div>

          {/* POS Terminal */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-2">POS Terminal</h3>
            <p className="text-gray-600">Get POS terminals for your business.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Request POS</button>
          </div>
        </div>
      </div>
    </section>
  )
}
