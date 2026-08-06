export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center min-h-screen text-white overflow-hidden"
      style={{
        backgroundImage: "url('/team-hero.png')", // ✅ must be in public/
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Your One‑Stop Hub for Africa’s Digital Payments
        </h1>
        <p className="text-lg mb-8">
          Empowering seamless top‑ups, bills, and VTU services across Africa.
        </p>
        <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </section>
  )
}
