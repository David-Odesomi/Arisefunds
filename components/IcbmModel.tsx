import React from "react";

const stages = [
  {
    id: 1,
    title: "Discover",
    desc: "AI-driven aptitude assessment and pathway matching — directing talent correctly before training begins.",
  },
  {
    id: 2,
    title: "Prepare",
    desc: "Removing structural barriers to participation — devices, connectivity, financing — before training begins.",
  },
  {
    id: 3,
    title: "Train",
    desc: "Competency-based training across five digital economy pathways — building job-ready skills",
  },
  {
    id: 4,
    title: "Certify",
    desc: "Globally recognized certifications that employers trust and that hold their value across borders.",
  },
  {
    id: 5,
    title: "Employ",
    desc: "Verified employment placement — into BPO operations, government contracts, and private sector partnerships.",
  },
  {
    id: 6,
    title: "Advance",
    desc: "Graduates advance into higher-value roles — analysts, engineers, managers, and entrepreneurs",
  },
  {
    id: 7,
    title: "Reinvest",
    desc: "Graduate repayments and employer revenue fund the next cohort. The system becomes self-sustaining at scale.",
  },
];

export default function IcbmModel() {
  return (
    <div className="bg-[#011825] text-white py-20 px-16">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl font-bold mb-4">
          The ICBM <span className="text-[#149EED]">Model</span>
        </h1>
        <p className="font-medium text-lg text-gray-200">
          ICBM is a 7-stage workforce development flywheel — not a training
          program.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
        {/* Row 1 */}
        <div className="flex gap-4">
          <div className="w-12 h-12 flex-shrink-0 bg-[#149EED] text-white rounded-full flex items-center justify-center text-xl font-bold">
            {stages[0].id}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">{stages[0].title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {stages[0].desc}
            </p>
          </div>
        </div>
        <div className="hidden md:block"></div>
        <div className="hidden md:block"></div>

        {/* Row 2 & 3 */}
        {stages.slice(1).map((stage) => (
          <div key={stage.id} className="flex gap-4">
            <div className="w-12 h-12 flex-shrink-0 bg-[#149EED] text-white rounded-full flex items-center justify-center text-xl font-bold">
              {stage.id}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{stage.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {stage.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
