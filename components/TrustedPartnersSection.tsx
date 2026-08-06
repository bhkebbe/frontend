export default function TrustedPartnersSection() {
  const partners = [
    { name: "MTN", file: "mtn.png" },
    { name: "EKEDC", file: "ekedc.png" },
    { name: "Glo", file: "glo.png" },
    { name: "DSTv", file: "dstv.png" },
    { name: "9mobile", file: "9mobile.png" },
    { name: "Airtel", file: "airtel.png" },
    { name: "GOtv", file: "gotv.png" },
    { name: "StarTimes", file: "startimes.png" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-blue-600 mb-10">
          Trusted Telecom & Utility Partners
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
          {partners.map((partner) => (
            <div key={partner.name} className="flex justify-center">
              <img
                src={`/${partner.file}`}
                alt={partner.name}
                className="h-16 object-contain transition-transform hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
          Get Started Now
        </button>
      </div>
    </section>
  )
}
