import SmallBanner from "@/components/SmallBanner";
import GetInTouch from "@/components/GetIntouch";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import SideImage from "@/components/SideImages";

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
              The investment{" "}
              <span className="text-[#1096DC]">opportunity.</span>
            </h1>
            <p className="font-medium text-left text-[17px] leading-relaxed">
              Arise Funds is actively deploying blended capital into workforce{" "}
              <br />
              development and technology companies globally. If you are a DFI,
              impact <br />
              foundation, family office, or government body with a <br />
              mandate in workforce, technology, or economic development — this{" "}
              <br /> is what engagement looks like.
            </p>
            <p className="font-medium text-left text-[17px] leading-relaxed mt-4">
              We invest in early-stage workforce development operators and{" "}
              <br />
              technology platforms in high-growth markets — typically at the{" "}
              <br />
              pre-institutional-capital stage, with active operations and an{" "}
              <br /> employer-integrated model.
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
      <div className="bg-[#042133]">
        <SideImage
          image="/glassesgirl.png"
          label="Current Focus"
          title={
            <>
              Blended <span className="text-[#1096DC]">Capital</span> Facility
            </>
          }
          description="We structure blended capital vehicles combining concessional first-loss capital, income-linked human capital financing, and equity. Capital is patient — structured around employer pipeline depth and verified employment outcomes, not arbitrary program timelines."
        />

        <SideImage
          image="/fistbump.jpg"
          label="Current Raise"
          title={
            <>
              Seeking <span className="text-[#1096DC]">Alligned Capital</span>{" "}
              Partners
            </>
          }
          description="Arise Funds is currently in active conversation with DFIs, impact foundations, and family offices. We are building a blended capital facility to accelerate the ICBM Nigeria deployment and fund expansion into new markets. Minimum engagement and terms are discussed directly — request the Investor Brief to begin that conversation."
          reverse={true}
        />
      </div>
      <div className="bg-[#011825]">
        <SideImage
          image="/on3.jpg"
          label="Case Study"
          title={
            <>
              ICBM Nigeria · The{" "}
              <span className="text-[#1096DC]">50,000 Employment</span>Target
            </>
          }
          description="Our flagship deployment — currently operating across Abuja and Enugu — is the proof-of-model that anchors our institutional capital raise. Cohort 1 employment confirmed. Cohort 2 active. 50,000 target by 2029."
        />

        <SideImage
          image="/map.png"
          label="For Family Offices"
          title={
            <>
              A<span className="text-[#1096DC]">Founder-Led Fund</span>with a
              Proven Model
            </>
          }
          description="If you are a family office looking for impact that is measurable, a founder you can meet, and a model you can visit — Arise Funds is built for that conversation. You can see the campuses, meet the graduates, and review the outcomes data directly. Capital is patient, terms are discussed personally, and every serious inquiry is answered by Aisha Lewis directly."
          reverse={true}
        />
      </div>
      <div className="bg-[#042133]">
        <SideImage
          image="/on3.jpg"
          label="For Sovereign & Government Capital"
          title={
            <>
              The <span className="text-[#1096DC]">National Economic</span>Case
            </>
          }
          description="Every ICBM graduate represents a tax-contributing, formally employed citizen. At 50,000 graduates, the model generates measurable GDP contribution, reduces youth unemployment, and builds a nationally competitive digital workforce. For sovereign wealth funds and government bodies with a national development mandate — this is workforce infrastructure as economic policy."
        />

        <SideImage
          image="/map.png"
          label="What We Look For"
          title={
            <>
              Aligned <span className="text-[#1096DC]">Capital</span> Partners
            </>
          }
          description="We are building toward long-term institutional partnerships with DFIs, development banks, and sovereign wealth funds. If you deploy patient capital with an impact mandate — and want verified employment outcomes alongside financial return — request our Investor Brief."
          reverse={true}
        />
      </div>
      <GetInTouch />
      <Footer />
    </div>
  );
}
