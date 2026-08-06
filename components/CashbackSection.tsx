export default function CashbackSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Cashback Info */}
        <div className="bg-white shadow-lg rounded-lg p-8 hover:-translate-y-2 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Instant Discount (Cashback)
          </h2>
          <p className="text-gray-700">
            Get instant discount (cashback) on all purchases.
          </p>
        </div>

        {/* Receipt Card */}
        <div className="bg-white shadow-lg rounded-lg p-8 hover:-translate-y-2 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-6">Purchase Summary</h3>
          <table className="w-full text-left text-gray-700">
            <tbody>
              <tr>
                <td className="py-2">Product</td>
                <td className="py-2">Subtotal</td>
              </tr>
              <tr>
                <td className="py-2">Airtime × 1<br/>Network: MTN<br/>Phone: +234 803 333 4353</td>
                <td className="py-2">₦5,000.00</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Subtotal</td>
                <td className="py-2">₦5,000.00</td>
              </tr>
              <tr>
                <td className="py-2 text-green-600 font-semibold">Discount (2%)</td>
                <td className="py-2 text-green-600">-₦100.00</td>
              </tr>
              <tr>
                <td className="py-2 font-bold">Total</td>
                <td className="py-2 font-bold">₦4,900.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
