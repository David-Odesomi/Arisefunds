export default function Footer() {
  return (
    <footer className="bg-[#011825] text-white py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold">Arisefunds</h1>
              {/* Logo Icon */}
              <img
                src="/Logo.png"
                alt="Arisefunds Logo"
                className="w-8 h-8 object-contain mt-1"
              />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Empowering the Future, One Student
              <br />
              at a Time
            </p>
            <div className="flex gap-6 mt-2">
              {/* Facebook */}
              <a
                href="#"
                className="text-white hover:text-[#1096DC] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 320 512">
                  <path d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="text-white hover:text-[#1096DC] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM448 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </a>
              {/* Twitter */}
              <a
                href="#"
                className="text-white hover:text-[#1096DC] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                  <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.2 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-5 pl-0 md:pl-8 mt-2 md:mt-0">
            <h1 className="text-lg font-semibold">Help Links</h1>
            <ul className="flex flex-col gap-4 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms & Condition
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-5 mt-2 md:mt-0">
            <h1 className="text-lg font-semibold">Contact Info</h1>
            <ul className="flex flex-col gap-4 text-sm text-gray-300">
              <li>
                <a
                  href="mailto:info@arisefunds.org"
                  className="hover:text-white transition-colors"
                >
                  info@arisefunds.org
                </a>
              </li>
              <li>
                <a
                  href="tel:+18882144005"
                  className="hover:text-white transition-colors"
                >
                  +1 888 214 4005
                </a>
              </li>
              <li>Head Office</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4 mt-2 md:mt-0">
            <h1 className="text-lg font-semibold">Subscribe Our Newsletter</h1>
            <p className="text-sm text-gray-300 leading-relaxed mb-1">
              Get the freshest job news and articles delivered
              <br />
              to your inbox every week.
            </p>
            <div className="flex flex-col mt-1 gap-3">
              <input
                type="email"
                className="w-full p-3 bg-white text-black text-sm outline-none placeholder-[#A9A0D1]"
                placeholder="Email Address"
              />
              <button className="bg-[#0C7BB8] text-white py-3 px-8 text-sm font-medium hover:bg-[#149EED] transition-colors whitespace-nowrap self-start">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-8 text-center text-sm text-[#4E7B99]">
          <p>© 2023 All Right Reserved Arisefunds</p>
        </div>
      </div>
    </footer>
  );
}
