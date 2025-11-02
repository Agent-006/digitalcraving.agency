export default function BrandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-20">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-bold text-[#FCFCFD] leading-tight font-[family-name:var(--font-montserrat)]">
            Branding
          </h1>
          <p className="text-2xl text-[#F9FAFB] max-w-4xl mx-auto">
            Creating powerful brand identities that resonate with your audience and drive business growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Logo Design</h3>
              <p className="text-gray-300">Distinctive logos that capture your brand essence</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Brand Guidelines</h3>
              <p className="text-gray-300">Comprehensive style guides for consistent branding</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Visual Identity</h3>
              <p className="text-gray-300">Complete visual systems for your brand</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}