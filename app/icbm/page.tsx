import IcbmModel from "@/components/IcbmModel";
import SmallBanner from "@/components/SmallBanner";
import GetInTouch from "@/components/GetIntouch";
import Footer from "@/components/Footer";

export default function Icbm() {
  return (
    <div>
      <IcbmModel />
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

      <GetInTouch />
      <Footer />
    </div>
  );
}
