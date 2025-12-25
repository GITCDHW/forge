import React from "react";

const ForgeProcess = () => {
  const steps = [
    {
      title: "Submit a Forge Request",
      description:
        "Tell us what you want built. Clear idea. Clear goal. No fluff.",
    },
    {
      title: "Review & Acceptance",
      description:
        "If your idea meets FORGE standards, you’re accepted. A 30% upfront payment activates the Forge Protocol.",
    },
    {
      title: "Forge Protocol",
      description:
        "First 30 minutes: You receive a complete Brand Kit PDF. Next 1–1.5 hours: Your startup MVP is built and deployed.",
    },
    {
      title: "Final Handoff",
      description:
        "Before ownership transfer, you pay the remaining 70%. GitHub repo, Vercel deployment, and full ownership are shipped to you.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1E1E1E]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#EDEDED] mb-16">
          How <span className="text-[#962525]">FORGE</span> Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="
                bg-[#1E1E1E]
                border border-[#2A2A2A]
                rounded-lg
                p-8
                transition-all
                duration-300
                hover:border-[#962525]
                hover:-translate-y-1
              "
            >
              <div className="mb-4 text-[#962525] text-xl font-extrabold">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-xl font-bold text-[#EDEDED] mb-3">
                {step.title}
              </h3>

              <p className="text-[#B3B3B3] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#B3B3B3] mt-16">
          No retainers. No delays. You pay, we forge, you ship.
        </p>
      </div>
    </section>
  );
};

export default ForgeProcess;