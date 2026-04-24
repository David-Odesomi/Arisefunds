export default function GetIntouch() {
  return (
    <div className="bg-[#042133] pb-24">
      <div className="pb-16 text-center text-[#FFF]">
        <h1 className="text-4xl font-bold pt-10">
          Get in <span className="text-[#1096DC]">Touch</span>
        </h1>
        <p className="font-medium mt-3">
          Ready to deploy capital into workforce infrastructure?
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 text-white">
        {/* Left Side: Blue Card */}
        <div className="bg-[#1096DC] rounded-xl p-10 flex flex-col justify-between relative overflow-hidden h-full">
          {/* Decorative shapes for the card */}
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#0D87C9] rounded-full blur-[2px] opacity-60"></div>
          <div className="absolute -bottom-16 right-12 w-48 h-48 bg-[#0C7BB8] rounded-full blur-[2px] opacity-50"></div>
          
          <h2 className="text-2xl leading-[1.6] font-light mb-20 relative z-10">
            Arise Funds is actively building partnerships with impact investors, 
            development finance institutions, and government bodies. If that 
            describes you — we respond to every serious inquiry personally.
          </h2>

          <div className="relative z-10">
            <hr className="border-white mb-6 w-[80%]" />
            <p className="text-lg mb-2">Or reach us directly</p>
            <a href="mailto:info@arisefunds.com" className="text-lg underline hover:text-white/80 transition-colors">
              info@arisefunds.com
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex flex-col gap-8 pt-4">
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">First Name</label>
              <input 
                type="text" 
                placeholder="|" 
                className="bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-2 text-white placeholder-gray-400 w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">Last Name</label>
              <input 
                type="text" 
                placeholder="Doe" 
                className="bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-2 text-white placeholder-gray-400 w-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Email</label>
            <input 
              type="email" 
              className="bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-2 text-white w-full"
            />
          </div>

          <div className="flex flex-col gap-2 relative">
            <label className="text-sm font-semibold">I'm reaching out as?</label>
            <select className="bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-2 text-gray-400 w-full appearance-none pr-8">
              <option value="" disabled selected>Select one</option>
              <option value="investor">Impact Investor</option>
              <option value="dfi">Development Finance Institution</option>
              <option value="government">Government Body</option>
              <option value="other">Other</option>
            </select>
            {/* Custom dropdown arrow */}
            <div className="absolute right-2 top-9 pointer-events-none text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Organization</label>
            <input 
              type="text" 
              placeholder="Organization Name" 
              className="bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-2 text-white placeholder-gray-400 w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Message</label>
            <input 
              type="text"
              placeholder="Write your message.." 
              className="bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-2 text-white placeholder-gray-400 w-full"
            />
          </div>

          <div>
            <button className="bg-[#149EED] text-white px-8 py-3 text-sm font-medium hover:bg-[#149EED]/90 transition-colors rounded-md mt-4">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
