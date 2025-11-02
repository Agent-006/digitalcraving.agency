export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-20">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-bold text-[#FCFCFD] leading-tight font-[family-name:var(--font-montserrat)]">
            About Us
          </h1>
          <p className="text-2xl text-[#F9FAFB] max-w-4xl mx-auto">
            We are a team of passionate creators, developers, and strategists dedicated to delivering exceptional digital experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-300">To empower businesses through innovative digital solutions</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-300">To be the leading digital transformation partner</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <p className="text-gray-300">Innovation, quality, integrity, and client success</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}