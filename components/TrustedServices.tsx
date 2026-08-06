export default function TrustedServices() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          THE SERVICES YOU TRUST THE MOST
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Fast, reliable and affordable solutions designed for everyday digital payments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:-translate-y-2 hover:shadow-xl transition">
            <span className="text-yellow-500 text-4xl">⚡</span>
            <h3 className="text-xl font-semibold mb-2">Instant Topup</h3>
            <p className="text-gray-600">Our delivery is automated and at a breeze.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:-translate-y-2 hover:shadow-xl transition">
            <span className="text-green-500 text-4xl">🛡️</span>
            <h3 className="text-xl font-semibold mb-2">Money Back</h3>
            <p className="text-gray-600">Didn't get value? We will refund you 100%.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:-translate-y-2 hover:shadow-xl transition">
            <span className="text-blue-500 text-4xl">🎧</span>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Get in touch via phone, email and live chat.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
