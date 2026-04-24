import Card from "@/components/Card";
import SmallBanner from "@/components/SmallBanner";
import GetInTouch from "@/components/GetIntouch";
import Footer from "@/components/Footer";
import SideImage from "@/components/SideImages";

const cards = [
  {
    number: "01",
    category: "Capital",
    title: "Structured entry into blended capital vehicles.",
    description:
      "We structure and deploy blended capital — combining concessional funding, income-linked financing, and equity — calibrated to the institution's stage and risk profile. Capital is patient, structured around employer pipeline depth, not arbitrary timelines.",
    icon: <span className="text-2xl">📋</span>,
    iconBg: "bg-[#6C63FF]",
  },
  {
    number: "02",
    category: "Infrastructure",
    title: "Operational build-out that creates investable companies.",
    description:
      "Alongside capital, we second talent directly into portfolio companies to build the institutional infrastructure that larger investors require. HR, governance, compliance, financial controls, and M&E systems — built from the ground up, to institutional standard.",
    icon: <span className="text-2xl">💰</span>,
    iconBg: "bg-[#F5A623]",
  },
  {
    number: "03",
    category: "Scale",
    title: "Transition to institutional capital at scale.",
    description:
      "We position portfolio companies for long-term institutional capital — DFIs, development banks, sovereign wealth funds — by building the data, governance, and verified outcome infrastructure they require. We de-risk the entry. They provide the scale.",
    icon: <span className="text-2xl">👥</span>,
    iconBg: "bg-[#4DD9E0]",
  },
];

export default function HowWeWork() {
  return (
    <div>
      {/* How We Work */}
      <div className="bg-[#011825] px-16 py-16">
        <div className="pb-10 text-center">
          <h1 className="text-4xl font-bold pt-10 text-[#FFF]">
            How We <span className="text-[#1096DC]">Work</span>
          </h1>
          <p className="font-medium text-[#FFF]">
            Providing the capital, operational infrastructure, and institutional
            systems that make early-stage workforce companies investable
          </p>
        </div>

        <div className="flex gap-8 items-stretch mt-12">
          {cards.map((card) => (
            <Card key={card.number} {...card} />
          ))}
        </div>
      </div>

      <SmallBanner />

      {/* Investment Thesis */}
      <div className="bg-[#042133] text-center">
        <h1 className="text-4xl font-bold pt-10 text-[#FFFFFF]">
          The Investment <span className="text-[#1096DC]">Thesis</span>
        </h1>
        <p className="font-medium text-[#FFF]">
          Providing the capital, operational infrastructure, and institutional
          systems that make early-stage workforce companies investable
        </p>

        <div className="flex gap-8 items-center px-16 py-12">
          <div className="w-[40%] ml-20">
            <img
              src="/Campus.jpg"
              alt="A Campus"
              className="w-full aspect-square object-cover rounded-xl"
            />
          </div>

          <div className="w-1/2 text-white flex flex-col gap-5 ml-10">
            <h1 className="text-5xl font-bold text-left">
              We don't fund projects.{" "}
              <span className="text-[#1096DC]">We finance infrastructure.</span>
            </h1>
            <p className="font-medium text-left">
              The global workforce crisis is not a talent problem. It is a
              systems coordination failure — training programs exist, employer
              demand exists, and worker motivation exists, but structural
              disconnects prevent people from accessing dignified,
              income-generating work at scale. This is true in Lagos. It is
              equally true in Louisville.
            </p>
            <p className="font-medium text-left">
              Arise Funds finances the infrastructure that resolves this
              failure: workforce development and technology companies with
              employer-integrated models, AI-enabled operations, and capital
              structures designed to generate returns as employer revenue
              scales. These are not training programs. They are human capital
              enterprises.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#011825] text-center">
        <h1 className="text-4xl font-bold pt-10 text-[#FFFFFF]">
          First Portfolio <span className="text-[#1096DC]">Investment</span>
        </h1>
        <p className="font-medium text-[#FFF]">
          Arise Funds actively builds and expands the employer network that{" "}
          <br></br>absorbs ICBM graduates 
        </p>

        <div className="flex gap-8 items-center px-16 py-12">
          <div className="w-1/2 text-white flex flex-col gap-5 ml-10">
            <h1 className="text-5xl font-bold text-left">
              The model, <span className="text-[#1096DC]">proven.</span>
            </h1>
            <p className="font-medium text-left text-semibold">
              SBTS Group LLC is the first company financed and operationally{" "}
              <br></br>
              supported by Arise Funds — and the live demonstration that{" "}
              <br></br> Workforce Infrastructure Investing works. In January
              2026, the first <br></br> cohort of ICBM graduates began earning
              income in verified digital <br></br>economy roles.
            </p>
            <p className="font-medium text-left">
              SBTS Group LLC is the first company financed and operationally{" "}
              <br></br>s upported by Arise Funds — and the live demonstration
              that <br></br>Workforce Infrastructure Investing works. In January
              2026, the first <br></br>cohort of ICBM graduates began earning
              income in verified digital <br></br>economy roles.
            </p>
            <div className="flex gap-12">
              <ul>
                <li>50K Youth Employment Target</li>
                <li>8 Countries — Current Footprint</li>
              </ul>
              <ul>
                <li>7 Stage Talent Economy Flywheel</li>
                <li>Young Women — Every Cohort</li>
              </ul>
            </div>
          </div>
          <div className="w-[35%]  ml-20">
            <video
              className="w-full aspect-square object-cover rounded-xl"
              controls
              poster="/Campus2.jpg"
            >
              <source src="/yourvideo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <SideImage
        image="/glassesgirl.png"
        // label="Current Focus"
        title={
          <>
            50K Youth <span className="text-[#1096DC]">Employment Target</span>
          </>
        }
        description="50K Youth Employment Target is a strategic goal by Arisefunds to empower and place 
    50,000 young people across Africa into sustainable jobs through a structured pathway of funding, 
    training, and employment support."
      />

      <SideImage
        image="/fistbump.jpg"
        // label="For Family Offices"
        title={
          <>
            50%<span className="text-[#1096DC]">Young Women</span> - Every
            Cohort
          </>
        }
        description="50% Young Women — Every Cohort reflects AriseFunds’ commitment to gender inclusion and equal
     opportunity, ensuring that at least half of every intake is made up of young women."
        reverse={true}
      />
      <SideImage
        image="/on3.jpg"
        // label="Current Focus"
        title={
          <>
            7-Stage <span className="text-[#1096DC]">Talent Economy</span>{" "}
            Flywheel
          </>
        }
        description="7-Stage Talent Economy Flywheel describes AriseFunds’ end-to-end, self-reinforcing
     system for developing and sustaining a skilled workforce pipeline."
      />

      <SideImage
        image="/map.png"
        // label="For Family Offices"
        title={
          <>
            8 Countries
            <span className="text-[#1096DC]">- Current Footprint</span>
          </>
        }
        description="8 Countries — Current Footprint highlights the geographic scope of AriseFunds’ operations, 
    indicating that the organization currently works across eight different countries."
        reverse={true}
      />

      <GetInTouch />
      <Footer />
    </div>
  );
}
