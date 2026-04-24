import Image from "next/image";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import HeroCarousel from "@/components/HeroCarousel";
import SmallBanner from "@/components/SmallBanner";
import IcbmModel from "@/components/IcbmModel";
import GetInTouch from "@/components/GetIntouch";
import Footer from "@/components/Footer";

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

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <HeroCarousel />

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
              src="./campus.jpg"
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

      {/* How We Work */}
      <div className="bg-[#011825] min-h-screen px-16 py-5">
        <div className="pb-10 text-center">
          <h1 className="text-4xl font-bold pt-10 text-[#FFF]">
            How We <span className="text-[#1096DC]">Work</span>
          </h1>
          <p className="font-medium text-[#FFF]">
            Providing the capital, operational infrastructure, and institutional
            systems that make early-stage workforce companies investable
          </p>
        </div>

        <div className="flex gap-8 items-start mt-8">
          {cards.map((card) => (
            <Card key={card.number} {...card} />
          ))}
        </div>
      </div>

      {/* Banner */}
      <SmallBanner />

      <div className="bg-[#042133] text-center text-[#FFF]">
        <h1 className="text-4xl font-bold pt-10 ">
          Strategic The Work, In Practice{" "}
          <span className="text-[#1096DC]">Partnerships</span>
        </h1>
        <p className="font-medium">
          We collaborate with leading institutions to create a comprehensive{" "}
          <br></br>
          ecosystem for student success
        </p>

        <div className="flex gap-8 items-center px-16 py-12">
          <div className="w-[40%]  ml-20">
            <video
              className="w-full aspect-square object-cover rounded-xl"
              controls
              poster="./Enugu.jpg"
            >
              <source src="./yourvideo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="w-1/2 text-white flex flex-col gap-2 ml-10">
            <h1 className="text-4xl font-bold text-left">
              Where talent meets{" "}
              <span className="text-[#1096DC]">infrastructure</span>
            </h1>
            <p className="font-medium text-left">
              From security operations centers to data analytics labs —{" "}
              <br></br>across Nigeria, Sierra Leone, the United States and
              beyond — <br></br>Arise Funds portfolio companies build the
              environments <br></br> where real careers begin.
            </p>
            <ul className="text-left mt-4">
              <li className="mb-6">
                <h3 className="text-2xl font-semibold">
                  Cybersecurity · SOC Operations
                </h3>
                <p>
                  Replace with: mixed-ethnicity SOC team at monitors Suggested
                  search: "diverse cybersecurity analysts SOC"
                </p>
              </li>
              <li className="mb-6">
                <h3 className="text-2xl font-semibold">
                  Software Development · Global Teams
                </h3>
                <p>
                  Replace with: South/East Asian professionals, mixed
                  groupSuggested search: "diverse international tech team
                  collaboration"
                </p>
              </li>
              <li className="mb-6">
                <h3 className="text-2xl font-semibold">
                  Data Science · AI & Machine Learning
                </h3>
                <p>
                  Replace with: Latina/South Asian woman presenting, mixed
                  audienceSuggested search: "woman presenting analytics diverse
                  team"
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <IcbmModel />
      </div>
      <SmallBanner></SmallBanner>

      <div></div>
      <div className="bg-[#042133] text-[#FFFFFF]">
        <div className="pb-10 text-center">
          <h1 className="text-4xl font-bold pt-10">
            The<span className="text-[#1096DC]">Team</span>
          </h1>
          <p className="font-medium">
            The Arise Funds team brings together impact investment strategy,
            federal <br></br>systems expertise, and 30+ years of human capital
            leadership.
          </p>
        </div>
        <div className="flex items-start gap-6 ml-20">
          <img
            src="./campus.jpg"
            alt="A Campus"
            className="w-1/5 aspect-square object-cover rounded-xl"
          />
          <div className="flex-1">
            <h1 className="text-xl font-semibold">Aisha Saaka Lewis</h1>
            <p className="text-medium">Chief Executive Officer</p>
            <p className="text-sm mt-5">
              Most impact investors come from finance. Aisha Saaka Lewis comes
              from AI. As a Data & AI <br></br> Strategist at Accenture Federal
              Services — where she led analytics transformation for public{" "}
              <br></br>sector clients including enterprise reporting oversight
              for PEPFAR — and a management <br></br>consultant at Booz Allen
              Hamilton, she spent her career applying technology and data to{" "}
              <br></br>the hardest problems in government and global
              development. <br></br>
              <br></br> What she kept seeing was a gap: the infrastructure to
              connect capital, technology, and <br></br>workforce development
              existed in pieces but never as a coherent investment thesis.
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-start gap-6 ml-20">
            <h1 className="text-xl font-semibold">Aisha Saaka Lewis</h1>
            <p className="text-medium">Chief Executive Officer</p>
            <p className="text-sm mt-5">
              Most impact investors come from finance. Aisha Saaka Lewis comes
              from AI. As a Data & AI <br></br> Strategist at Accenture Federal
              Services — where she led analytics transformation for public{" "}
              <br></br>sector clients including enterprise reporting oversight
              for PEPFAR — and a management <br></br>consultant at Booz Allen
              Hamilton, she spent her career applying technology and data to{" "}
              <br></br>the hardest problems in government and global
              development. <br></br>
              <br></br> What she kept seeing was a gap: the infrastructure to
              connect capital, technology, and <br></br>workforce development
              existed in pieces but never as a coherent investment thesis.
            </p>
            <img
              src="./campus.jpg"
              alt="A Campus"
              className="w-1/5 aspect-square object-cover rounded-xl"
            />
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
              poster="./Campus2.jpg"
            >
              <source src="./yourvideo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <GetInTouch></GetInTouch>
      <Footer></Footer>
    </div>
  );
}
