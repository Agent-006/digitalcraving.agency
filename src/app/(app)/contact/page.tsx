export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-20">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-bold text-[#FCFCFD] leading-tight font-[family-name:var(--font-montserrat)]">
            Contact Us
          </h1>
          <p className="text-2xl text-[#F9FAFB] max-w-4xl mx-auto">
            Ready to start your next project? Get in touch with our team today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p className="text-gray-300">hello@sybexdesigns.com</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Phone</h3>
              <p className="text-gray-300">+44 20 1234 5678</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-gray-300">London, United Kingdom</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}