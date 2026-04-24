import SmallBanner from "@/components/SmallBanner";
import GetInTouch from "@/components/GetIntouch";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Partners() {
  return (
    <div>
      <div className="bg-[#042133] text-center">
        <h1 className="text-4xl font-bold pt-10 text-[#FFFFFF]">
          For <span className="text-[#1096DC]">Investors</span>
        </h1>
        <p className="font-medium text-[#FFF]">
          We bring the capital, the infrastructure, and the institutional <br />
           readiness. Our partners bring the scale.
        </p>

        <div className="flex gap-8 items-center px-16 py-12">

          <div className="w-1/2 text-white flex flex-col gap-6 ml-10">
            <h1 className="text-5xl font-bold text-left mb-2">
              The investment <span className="text-[#1096DC]">opportunity.</span>
            </h1>
            <p className="font-medium text-left text-[17px] leading-relaxed">
              Arise Funds is actively deploying blended capital into workforce <br /> 
              development and technology companies globally. If you are a DFI, impact <br />
              foundation, family office, or government body with a <br />mandate in 
              workforce, technology, or economic development — this <br /> is what engagement looks like.
            </p>
            <p className="font-medium text-left text-[17px] leading-relaxed mt-4">
             We invest in early-stage workforce development operators and <br />technology platforms
              in high-growth markets — typically at the <br />pre-institutional-capital stage, 
              with active operations and an <br /> employer-integrated model.
            </p>
            <div className="self-start mt-4">
              <button className="bg-[#149EED] text-white px-8 py-3 text-sm font-medium hover:bg-[#149EED]/90 transition-colors">
                Request the Investor Brief
              </button>
            </div>
          </div>
          <div className="w-[45%] ml-auto">
            <img
              src="/Hands.jpg"
              alt="Hands shaking"
              className="w-full aspect-[507/478] object-cover rounded-[2rem]"
            />
          </div>
        </div>
      </div>
      
      <SmallBanner />
      <GetInTouch />
      <Footer />
    </div>
  );
}
