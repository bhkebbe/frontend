export default function ApiShowcaseSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Text Side */}
        <div className="text-center md:text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Developer? Choose Our Robust API
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Do you wish to resell our services through your own websites and apps?
            Here is a simple yet robust API for fast integration. All API users enjoy
            even cheaper prices (1GB at ₦499 plus % discounts for other services) and
            zero service fees.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
            API Documentation
          </button>
        </div>
      </div>
    </section>
  )
}
