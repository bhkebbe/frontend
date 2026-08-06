export default function BrandMockupSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Text Side */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Powered by SS Ahmad Subdata
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our brand stands for trust, speed, and innovation. With SS Ahmad Subdata,
            you’re not just using a VTU platform  you’re part of a movement that
            makes digital payments simple, reliable, and affordable.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* Image Side */}
        <div className="flex justify-center">
          <img
            src="/ssahmad-mockup.png"
            alt="SS Ahmad Subdata Mockup"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  )
}
