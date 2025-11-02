export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-20">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-bold text-[#FCFCFD] leading-tight font-[family-name:var(--font-montserrat)]">
            Marketing
          </h1>
          <p className="text-2xl text-[#F9FAFB] max-w-4xl mx-auto">
            Strategic marketing solutions that amplify your brand reach and drive measurable results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Digital Marketing</h3>
              <p className="text-gray-300">Comprehensive online marketing strategies</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Social Media</h3>
              <p className="text-gray-300">Engaging social media campaigns and management</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Content Marketing</h3>
              <p className="text-gray-300">Compelling content that drives engagement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}