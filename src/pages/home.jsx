import { useState } from "react";
import logo from "../assets/kalinga-logo.jpg";

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Continuous Environmental Detection",
    desc: "Smart sensors continuously monitor homes, schools, offices, and industrial spaces for early smoke, heat, and fire conditions.",
    tag: "24/7 Sensing",
  },
  {
    step: "02",
    title: "Master Smoke Fire AI Analysis",
    desc: "Our trained Master Smoke Fire AI model analyzes incoming sensor signals in real time to verify genuine fire threats.",
    tag: "AI Verified",
  },
  {
    step: "03",
    title: "2-Sensor Confirmation",
    desc: "The embedded controller requires confirmation from 2 sensors before acting to help reduce false triggers.",
    tag: "Dual-Check Safety",
  },
  {
    step: "04",
    title: "Electrical Isolation & 30s Suppression",
    desc: "Alarms sound immediately, the facility owner is alerted, electrical power is isolated, and automatic suppression activates after a 30-second evacuation window.",
    tag: "Life-First Buffer",
  },
  {
    step: "05",
    title: "GSM Alerts to Owner & RNP / FRB",
    desc: "If a fire exceeds local suppression capacity, GSM communication sends alerts and location coordinates to Rwanda National Police (RNP) and Fire & Rescue Brigade (FRB).",
    tag: "Emergency Dispatch",
  },
  {
    step: "06",
    title: "IoT Cloud Remote Monitoring",
    desc: "Cloud integration provides facility owners and Kalinga engineers with live system health, alerts, and remote supervision.",
    tag: "Cloud Connected",
  },
  {
    step: "07",
    title: "Automatic Shut-Off & Power Restoration",
    desc: "Once fire conditions return below safe thresholds, the system stops suppression and safely restores electricity.",
    tag: "Smart Recovery",
  },
];

const SECTORS = [
  {
    number: "01",
    title: "Residential Buildings",
    desc: "Homes and apartment complexes.",
    icon: "⌂",
  },
  {
    number: "02",
    title: "Educational Institutions",
    desc: "Schools, colleges and universities.",
    icon: "▤",
  },
  {
    number: "03",
    title: "Commercial Buildings",
    desc: "Offices, shopping centers and hotels.",
    icon: "▦",
  },
  {
    number: "04",
    title: "Industrial Facilities",
    desc: "Factories and production warehouses.",
    icon: "⚙",
  },
  {
    number: "05",
    title: "Public & Healthcare",
    desc: "Hospitals and government buildings.",
    icon: "✚",
  },
  {
    number: "06",
    title: "Property Developers",
    desc: "New construction fire integration.",
    icon: "⌂",
  },
];

const SERVICES = [
  {
    number: "01",
    title: "System Sales",
    desc: "Intelligent fire detection and automatic suppression units built for rapid response.",
    icon: "◈",
  },
  {
    number: "02",
    title: "Installation & Commissioning",
    desc: "Professional on-site sensor layout, electrical relay integration, and testing.",
    icon: "⌁",
  },
  {
    number: "03",
    title: "Maintenance & Support",
    desc: "Routine inspections, servicing, and dedicated local technical support.",
    icon: "⚙",
  },
  {
    number: "04",
    title: "Custom Facility Solutions",
    desc: "Engineered protection tailored to complex commercial and industrial layouts.",
    icon: "◇",
  },
  {
    number: "05",
    title: "Cloud Monitoring Services",
    desc: "Remote telemetry, live alerts, and continuous system supervision.",
    icon: "⌘",
  },
];

const ROADMAP = [
  {
    phase: "Phase 1",
    title: "Working Prototype & Master Smoke Fire AI",
    status: "Completed",
  },
  {
    phase: "Phase 2",
    title: "Cloud Platform & Remote Monitoring",
    status: "In Progress",
  },
  {
    phase: "Phase 3",
    title: "Full System Integration & Testing",
    status: "Upcoming",
  },
  {
    phase: "Phase 4",
    title: "Reliability & Product Design Refinement",
    status: "Upcoming",
  },
  {
    phase: "Phase 5",
    title: "Pilot Installations & Commercial Contracts",
    status: "Upcoming",
  },
];

const NAV_LINKS = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Technology", "#solutions"],
  ["Services", "#services"],
  ["Roadmap", "#projects"],
  ["Contact", "#contact"],
];

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-black uppercase tracking-[0.24em] text-[#F47721]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#123B64] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

/* GLASS SYSTEM PREVIEW */
function SystemPreviewCard({ logo }) {
  const sensors = [
    ["◉", "SMOKE SENSOR", "Monitoring"],
    ["ϟ", "HEAT SENSOR", "Monitoring"],
    ["⌘", "CONTROL UNIT", "Operational"],
    ["⌁", "GSM CONNECTION", "Connected"],
  ];

  return (
    <div className="relative overflow-hidden rounded-[1.7rem] border border-white/30 bg-white/[0.12] p-3 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-5">
      <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#20ADD3]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#F47721]/15 blur-3xl" />

      <div className="relative rounded-[1.3rem] border border-white/20 bg-[#123B64]/45 p-5 backdrop-blur-xl sm:p-7">
        <div className="flex items-center justify-between gap-3 border-b border-white/15 pb-5">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={logo}
              alt="Kalinga Dynamics"
              className="h-12 w-12 shrink-0 rounded-xl border border-white/30 bg-white object-contain p-1"
            />
            <div className="min-w-0">
              <h2 className="truncate text-base font-extrabold text-white sm:text-lg">
                Kalinga Intelligence
              </h2>
              <p className="mt-1 text-[10px] font-bold tracking-[0.2em] text-white/60">
                MASTER SMOKE FIRE AI
              </p>
            </div>
          </div>

          <span className="shrink-0 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-2 text-[9px] font-bold text-emerald-200">
            ● SYSTEM ARMED
          </span>
        </div>

        <div className="relative mt-5 flex h-48 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-[#071D33]/45 sm:h-56">
          <div className="absolute h-48 w-48 rounded-full border border-[#20ADD3]/20" />
          <div className="absolute h-36 w-36 rounded-full border border-[#20ADD3]/30" />
          <div className="absolute h-24 w-24 rounded-full border border-[#20ADD3]/40" />

          <div className="relative z-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#20ADD3]/50 bg-[#20ADD3]/15 text-3xl text-[#6DE2F5] shadow-[0_0_35px_rgba(32,173,211,0.2)]">
              ◈
            </div>
            <h3 className="mt-4 text-lg font-extrabold tracking-wide text-white">
              AI MONITORING
            </h3>
            <p className="mt-2 text-xs text-white/55">
              Environmental signals under observation
            </p>
          </div>

          <span className="absolute left-7 top-7 h-3 w-3 animate-pulse rounded-full bg-[#20ADD3] shadow-[0_0_15px_#20ADD3]" />
          <span className="absolute bottom-8 right-8 h-3 w-3 animate-pulse rounded-full bg-[#F47721] shadow-[0_0_15px_#F47721]" />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {sensors.map(([symbol, label, status]) => (
            <div
              key={label}
              className="rounded-xl border border-white/20 bg-white/[0.08] p-4 backdrop-blur-md transition hover:border-[#20ADD3]/60 hover:bg-white/[0.13]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-[#6DE2F5]">
                  {symbol}
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
              </div>
              <p className="mt-3 text-[9px] font-bold tracking-wider text-white/55">
                {label}
              </p>
              <p className="mt-1 text-sm font-bold text-white">{status}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.08] p-4">
          <div>
            <p className="text-[10px] font-bold tracking-widest text-emerald-200">
              SYSTEM STATUS
            </p>
            <p className="mt-1 text-sm font-extrabold text-white">
              Protection Monitoring
            </p>
          </div>
          <span className="h-3 w-3 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
        </div>
      </div>
    </div>
  );
}

function HomePage({
  showHeroPreview,
  onCloseHeroPreview,
  showModal,
  onCloseModal,
  onOpenModal,
}) {
  const [activeStep, setActiveStep] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [localPreviewOpen, setLocalPreviewOpen] = useState(true);

  const [inquiryType, setInquiryType] = useState(
    "Building / Facility Fire System Installation",
  );

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const previewIsOpen = showHeroPreview ?? localPreviewOpen;

  function closePreview() {
    setLocalPreviewOpen(false);
    onCloseHeroPreview?.();
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  }

  function handleInquirySubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setInquiryType("Building / Facility Fire System Installation");
    setTimeout(() => setSubmitted(false), 5000);
  }

  const statusStyles = {
    Completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
    "In Progress": "bg-amber-50 text-amber-700 border-amber-200",
    Upcoming: "bg-slate-100 text-slate-600 border-slate-200",
  };

  return (
    <div
      id="home"
      className="min-h-screen overflow-x-hidden bg-[#F5F6F7] pt-20 font-sans text-[#123B64]"
    >
      {/* NAVIGATION */}
      <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-slate-200/80 bg-[#F5F6F7]/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#home" className="flex shrink-0 items-center gap-3">
            <img
              src={logo}
              alt="Kalinga Dynamics"
              className="h-12 w-12 rounded-xl object-contain"
            />
            <div>
              <p className="text-lg font-black tracking-[0.16em] text-[#123B64]">
                KALINGA
              </p>
              <p className="text-[10px] font-black tracking-[0.4em] text-[#20ADD3]">
                DYNAMICS
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold text-slate-600 lg:flex">
            {NAV_LINKS.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="transition hover:text-[#20ADD3]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenModal?.()}
              className="hidden rounded-full bg-[#123B64] px-5 py-3 text-xs font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#20ADD3] sm:inline-flex sm:px-6 sm:text-sm"
            >
              Get Protected →
            </button>

            <button
              type="button"
              aria-label={
                mobileMenuOpen ? "Close navigation" : "Open navigation"
              }
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-xl text-[#123B64] lg:hidden"
            >
              {mobileMenuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="border-t border-slate-200 bg-[#F5F6F7] px-6 py-5 shadow-xl lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              {NAV_LINKS.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-sm font-bold text-[#123B64] transition hover:text-[#20ADD3]"
                >
                  {label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal?.();
                }}
                className="mt-2 rounded-xl bg-[#123B64] px-5 py-3 text-sm font-bold text-white"
              >
                Get Protected →
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden  px-6 py-8 sm:px-10 lg:px-16"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#D6AD68]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[350px] w-[350px] rounded-full bg-[#D6AD68]/10 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT: HERO CONTENT */}
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#F47721]/40 bg-white/70 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#B88B48]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1c3a61]">
                Intelligent Fire Protection
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-[#123B64] sm:text-5xl lg:text-[3.5rem] xl:text-[3.8rem]">
              A Smarter Way to
              <span className="block text-[#F47721]">
                Protect What Matters.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#77736C] sm:text-base">
              We combine artificial intelligence, smart sensors, and IoT
              technology to detect fire risks early, respond intelligently, and
              create safer spaces for everyone.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenModal}
                className="rounded-full bg-[#053e6a] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#0476a7]"
              >
                Get Protected <span className="ml-2">→</span>
              </button>

              <a
                href="#technology"
                className="rounded-full border border-[#D6AD68]/60 bg-white/50 px-7 py-3.5 text-sm font-semibold text-[#211F1B] transition duration-300 hover:bg-white"
              >
                Discover Our Technology
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#211F1B]/10 pt-5 text-xs text-[#77736C]">
              <span>24/7 Monitoring</span>
              <span>AI-Powered Detection</span>
              <span>Smart IoT Technology</span>
            </div>
          </div>

          {/* RIGHT: PERCENTAGE AND STATISTICS */}
          <div className="relative flex flex-col items-center justify-center lg:items-end">
            <div className="relative w-full max-w-md rounded-[2rem] border border-[#D6AD68]/30 bg-white/60 p-7 shadow-[0_20px_70px_rgba(33,31,27,0.06)] backdrop-blur-xl sm:p-9">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#77736C]">
                  Intelligent Protection
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#8B9B70]" />
              </div>

              <div className="mt-10">
                <p className="text-sm font-medium text-[#77736C]">
                  Detection performance
                </p>

                <div className="mt-2 flex items-end gap-1">
                  <span className="text-7xl font-semibold tracking-tight text-[#0a2051] sm:text-8xl">
                    98
                  </span>
                  <span className="mb-2 text-4xl font-medium text-[#c6711c]">
                    %
                  </span>
                </div>

                <p className="mt-3 max-w-xs text-sm leading-6 text-[#77736C]">
                  AI-assisted monitoring designed to identify potential fire
                  risks and support faster response.
                </p>
              </div>

              <div className="my-7 h-px bg-[#211F1B]/10" />

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-2xl font-semibold text-[#211F1B]">24/7</p>
                  <p className="mt-1 text-xs text-[#77736C]">
                    Continuous monitoring
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-semibold text-[#211F1B]">IoT</p>
                  <p className="mt-1 text-xs text-[#77736C]">
                    Connected systems
                  </p>
                </div>
              </div>

              <div className="mt-7 flex items-center gap-3 rounded-xl bg-[#F4F0E8] p-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#8B9B70]">
                  ✓
                </span>
                <div>
                  <p className="text-xs font-semibold text-[#211F1B]">
                    Intelligent safety technology
                  </p>
                  <p className="mt-1 text-[11px] text-[#77736C]">
                    Designed for safer environments
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-[#77736C]">
              AI + IoT · A smarter approach to fire safety
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-20 border-y border-slate-200 bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="About Kalinga Dynamics"
              title={<>Protection that thinks ahead.</>}
              description="We are developing an intelligent fire protection approach that combines AI analysis, smart sensors, automated response, and IoT monitoring to help facilities detect potential fire threats and respond faster."
            />
            <a
              href="#solutions"
              className="mt-8 inline-flex items-center gap-3 font-extrabold text-[#F47721] transition hover:gap-5"
            >
              Discover our technology →
            </a>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[#F5F6F7] p-7 shadow-sm sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#20ADD3]/10 blur-3xl" />
            <div className="relative flex items-center gap-5">
              <img
                src={logo}
                alt="Kalinga Dynamics emblem"
                className="h-20 w-20 rounded-2xl bg-white object-contain p-2 shadow-sm"
              />
              <div>
                <p className="text-xs font-extrabold uppercase tracking-widest text-[#F47721]">
                  Our mission
                </p>
                <h3 className="mt-2 text-2xl font-black text-[#123B64]">
                  Smarter protection. Faster response.
                </h3>
              </div>
            </div>
            <div className="relative mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#20ADD3]/20 bg-white p-5">
                <p className="text-2xl font-black text-[#20ADD3]">AI</p>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  Intelligent analysis
                </p>
              </div>
              <div className="rounded-2xl border border-[#F47721]/20 bg-white p-5">
                <p className="text-2xl font-black text-[#F47721]">IoT</p>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  Connected monitoring
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section
        id="solutions"
        className="scroll-mt-20 bg-[#F5F6F7] px-6 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Technology"
            title="How intelligent fire protection works."
            description="Explore the seven stages of our proposed fire protection workflow, from early environmental detection to automatic recovery."
            centered
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-3">
              {WORKFLOW_STEPS.map((item, index) => (
                <button
                  type="button"
                  key={item.step}
                  onClick={() => setActiveStep(index)}
                  className={`group flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition duration-300 ${
                    activeStep === index
                      ? "border-[#20ADD3] bg-white shadow-lg shadow-[#123B64]/10"
                      : "border-slate-200 bg-white/70 hover:-translate-y-0.5 hover:border-[#20ADD3]/60 hover:shadow-sm"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-black ${
                      activeStep === index
                        ? "bg-[#123B64] text-[#6DE2F5]"
                        : "bg-[#E8F5F8] text-[#123B64]"
                    }`}
                  >
                    {item.step}
                  </span>
                  <span className="flex-1 text-sm font-bold leading-6 text-[#123B64]">
                    {item.title}
                  </span>
                  <span className="text-xl text-[#20ADD3] transition group-hover:translate-x-1">
                    →
                  </span>
                </button>
              ))}
            </div>

            <div className="relative flex min-h-[400px] flex-col justify-center overflow-hidden rounded-[2rem] border border-white/15 bg-[#123B64] p-8 text-white shadow-xl shadow-[#123B64]/15 sm:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#20ADD3]/25" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-[#20ADD3]/25" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#20ADD3]/15 blur-3xl" />

              <span className="relative text-sm font-black tracking-[0.25em] text-[#20ADD3]">
                STEP {WORKFLOW_STEPS[activeStep].step}
              </span>
              <h3 className="relative mt-7 text-3xl font-black leading-tight sm:text-4xl">
                {WORKFLOW_STEPS[activeStep].title}
              </h3>
              <p className="relative mt-6 max-w-xl text-base leading-8 text-white/70">
                {WORKFLOW_STEPS[activeStep].desc}
              </p>
              <span className="relative mt-9 w-fit rounded-full border border-[#20ADD3]/40 bg-[#20ADD3]/10 px-5 py-3 text-xs font-extrabold text-[#8DEAFF] backdrop-blur-md">
                {WORKFLOW_STEPS[activeStep].tag}
              </span>
              <div className="relative mt-10 flex gap-2">
                {WORKFLOW_STEPS.map((item, index) => (
                  <button
                    key={item.step}
                    type="button"
                    aria-label={`Show workflow step ${item.step}`}
                    onClick={() => setActiveStep(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      activeStep === index
                        ? "w-10 bg-[#20ADD3]"
                        : "w-5 bg-white/25"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Where We Serve"
            title="Protection for every important space."
            description="Different environments require thoughtful protection. Our proposed solutions are designed for a range of facilities and building types."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((sector) => (
              <article
                key={sector.title}
                className="group rounded-3xl border border-slate-200 bg-[#F5F6F7] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#20ADD3]/60 hover:shadow-xl hover:shadow-[#123B64]/10"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E3F5F9] text-3xl font-bold text-[#20ADD3] transition group-hover:bg-[#123B64] group-hover:text-[#6DE2F5]">
                    {sector.icon}
                  </span>
                  <span className="text-sm font-black text-slate-300">
                    {sector.number}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-black text-[#123B64]">
                  {sector.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-500">{sector.desc}</p>
                <div className="mt-6 h-1 w-10 rounded-full bg-[#F47721] transition-all group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="scroll-mt-20 bg-[#F5F6F7] px-6 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What We Offer"
            title="Complete fire protection support."
            description="From system installation to ongoing monitoring, explore the services we are developing to support safer facilities."
            centered
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <article
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-[#20ADD3]/60 hover:shadow-xl hover:shadow-[#123B64]/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E3F5F9] text-3xl font-black text-[#20ADD3] transition group-hover:bg-[#123B64] group-hover:text-[#6DE2F5]">
                  {service.icon}
                </div>
                <p className="mt-7 text-xs font-black tracking-widest text-[#F47721]">
                  SERVICE {service.number}
                </p>
                <h3 className="mt-3 text-xl font-black leading-snug text-[#123B64]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {service.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section
        id="projects"
        className="scroll-mt-20 bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Our Journey"
            title="Building the future of fire safety."
            description="Follow our development roadmap as we progress from the working prototype toward system integration and pilot installations."
            centered
          />

          <div className="relative mt-14 space-y-5">
            <div className="absolute bottom-8 left-[27px] top-8 hidden w-px bg-slate-200 sm:block" />
            {ROADMAP.map((item, index) => (
              <article
                key={item.phase}
                className="relative flex flex-col gap-5 rounded-3xl border border-slate-200 bg-[#F5F6F7] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:flex-row sm:items-center sm:p-7"
              >
                <div
                  className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-sm font-black ${
                    item.status === "Completed"
                      ? "bg-emerald-50 text-emerald-700"
                      : item.status === "In Progress"
                        ? "bg-amber-50 text-amber-700"
                        : "bg-slate-200 text-slate-600"
                  }`}
                >
                  0{index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-black uppercase tracking-widest text-[#F47721]">
                    {item.phase}
                  </p>
                  <h3 className="mt-2 text-lg font-black leading-snug text-[#123B64]">
                    {item.title}
                  </h3>
                </div>
                <span
                  className={`w-fit rounded-full border px-4 py-2 text-xs font-extrabold ${statusStyles[item.status]}`}
                >
                  {item.status}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-20 bg-[#F5F6F7] px-6 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Get in Touch"
              title="Let's make your facility safer."
              description="Contact Kalinga Dynamics to discuss intelligent fire detection, facility protection, installation, and monitoring solutions."
            />

            <div className="relative mt-10 overflow-hidden rounded-3xl bg-[#123B64] p-7 text-white sm:p-9">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#20ADD3]/20 blur-3xl" />
              <div className="relative">
                <img
                  src={logo}
                  alt="Kalinga Dynamics"
                  className="h-16 w-16 rounded-xl bg-white object-contain p-1"
                />
                <h3 className="mt-6 text-2xl font-black">Kalinga Dynamics</h3>
                <p className="mt-3 max-w-sm leading-7 text-white/65">
                  AI + IoT intelligent fire protection designed to help detect
                  threats and support faster response.
                </p>
                <div className="mt-7 h-1 w-16 rounded-full bg-[#F47721]" />
              </div>
            </div>
          </div>

          <form
            onSubmit={handleInquirySubmit}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-[#123B64]/5 sm:p-9"
          >
            <div className="mb-8">
              <p className="text-xs font-black uppercase tracking-widest text-[#F47721]">
                Send an inquiry
              </p>
              <h3 className="mt-3 text-2xl font-black text-[#123B64]">
                Tell us what you need.
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Complete the form below and tell us about your facility or
                project.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold leading-6 text-emerald-800">
                Your inquiry form has been submitted locally. Connect an email
                or backend service to deliver it to your team.
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label
                  className="mb-2 block text-sm font-bold text-[#123B64]"
                  htmlFor="name"
                >
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-slate-200 bg-[#F5F6F7] px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#20ADD3] focus:bg-white focus:ring-4 focus:ring-[#20ADD3]/10"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    className="mb-2 block text-sm font-bold text-[#123B64]"
                    htmlFor="email"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-[#F5F6F7] px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#20ADD3] focus:bg-white focus:ring-4 focus:ring-[#20ADD3]/10"
                  />
                </div>

                <div>
                  <label
                    className="mb-2 block text-sm font-bold text-[#123B64]"
                    htmlFor="phone"
                  >
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                    className="w-full rounded-xl border border-slate-200 bg-[#F5F6F7] px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#20ADD3] focus:bg-white focus:ring-4 focus:ring-[#20ADD3]/10"
                  />
                </div>
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-bold text-[#123B64]"
                  htmlFor="inquiry"
                >
                  Inquiry type
                </label>
                <select
                  id="inquiry"
                  value={inquiryType}
                  onChange={(event) => setInquiryType(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-[#F5F6F7] px-4 py-4 text-sm outline-none transition focus:border-[#20ADD3] focus:bg-white focus:ring-4 focus:ring-[#20ADD3]/10"
                >
                  <option>Building / Facility Fire System Installation</option>
                  <option>System Sales</option>
                  <option>Maintenance & Support</option>
                  <option>Cloud Monitoring</option>
                  <option>Custom Facility Solutions</option>
                  <option>Other Inquiry</option>
                </select>
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-bold text-[#123B64]"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell us about your facility and requirements..."
                  className="w-full resize-y rounded-xl border border-slate-200 bg-[#F5F6F7] px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#20ADD3] focus:bg-white focus:ring-4 focus:ring-[#20ADD3]/10"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#123B64] px-6 py-4 text-sm font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#20ADD3] hover:text-[#071D33]"
              >
                Submit Inquiry →
              </button>

              <p className="text-center text-xs leading-5 text-slate-400">
                This demonstration form currently provides local feedback only.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="relative overflow-hidden bg-[#123B64] px-6 py-16 text-center text-white sm:px-8 lg:px-10 lg:py-20">
        <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-[#20ADD3]/25" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#20ADD3]/15 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#20ADD3]">
            Kalinga Dynamics
          </p>
          <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            A smarter approach to fire protection starts here.
          </h2>
          <p className="mt-5 leading-8 text-white/65">
            Discover how intelligent detection and automated response can
            support safer environments.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-[#F5C52E] px-8 py-4 text-sm font-extrabold text-[#123B64] transition hover:-translate-y-1 hover:bg-[#FFE17A]"
          >
            Talk to Our Team →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#071D33] px-6 py-12 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Kalinga Dynamics"
                className="h-12 w-12 rounded-xl bg-white object-contain"
              />
              <div>
                <p className="font-black tracking-[0.15em]">KALINGA</p>
                <p className="text-[10px] font-bold tracking-[0.4em] text-[#20ADD3]">
                  DYNAMICS
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
              AI + IoT intelligent fire protection for safer buildings and
              communities.
            </p>
          </div>

          <div>
            <h3 className="font-black">Explore</h3>
            <div className="mt-5 grid grid-cols-2 gap-4 text-sm text-white/55">
              <a href="#about" className="transition hover:text-[#20ADD3]">
                About Us
              </a>
              <a href="#solutions" className="transition hover:text-[#20ADD3]">
                Technology
              </a>
              <a href="#services" className="transition hover:text-[#20ADD3]">
                Services
              </a>
              <a href="#projects" className="transition hover:text-[#20ADD3]">
                Roadmap
              </a>
              <a href="#contact" className="transition hover:text-[#20ADD3]">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-black">Our focus</h3>
            <p className="mt-5 text-sm leading-7 text-white/55">
              Intelligent fire detection, dual-sensor confirmation, automatic
              response and connected monitoring.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Kalinga Dynamics. All rights reserved.
          </p>
          <a
            href="#home"
            className="font-bold text-[#20ADD3] transition hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </footer>

      {/* HERO PREVIEW GLASS POP-OUT */}
      {previewIsOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-[#071D33]/45 p-4 backdrop-blur-[3px] sm:p-6"
          onClick={closePreview}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="preview-title"
            className="relative my-auto w-full max-w-[620px] animate-[popIn_0.55s_ease-out] overflow-hidden rounded-[2rem] border border-white/30 bg-white/[0.12] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#20ADD3]/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#F47721]/15 blur-3xl" />

            <button
              type="button"
              onClick={closePreview}
              aria-label="Close Kalinga Intelligence preview"
              className="absolute right-5 top-5 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-2xl text-white shadow-lg backdrop-blur-xl transition hover:rotate-90 hover:bg-[#C92532]"
            >
              ×
            </button>

            <div className="relative mb-3 flex items-center justify-between px-2 pt-2">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#6DE2F5]">
                  Introducing
                </p>
                <h2
                  id="preview-title"
                  className="mt-1 text-lg font-black text-white"
                >
                  Kalinga Intelligence
                </h2>
              </div>
              <span className="mr-12 rounded-full border border-[#20ADD3]/40 bg-[#20ADD3]/15 px-3 py-2 text-[9px] font-bold text-[#8DEAFF]">
                LIVE PREVIEW
              </span>
            </div>

            <div className="relative max-h-[75svh] overflow-y-auto overscroll-contain rounded-2xl">
              <SystemPreviewCard logo={logo} />
            </div>

            <p className="relative px-2 pb-2 pt-4 text-center text-[11px] leading-5 text-white/70">
              Intelligent monitoring. Connected protection. A smarter response.
            </p>
          </div>
        </div>
      )}

      {/* GET PROTECTED MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#071D33]/65 p-5 backdrop-blur-md"
          onClick={() => onCloseModal?.()}
        >
          <div
            className="w-full max-w-md rounded-3xl border border-slate-200 bg-[#F5F6F7] p-8 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black text-[#123B64]">
                Get Protected
              </h2>
              <button
                type="button"
                onClick={() => onCloseModal?.()}
                aria-label="Close modal"
                className="text-3xl text-slate-400 transition hover:text-[#C92532]"
              >
                ×
              </button>
            </div>

            <p className="mt-5 leading-7 text-slate-600">
              Interested in our AI and IoT fire protection system? Contact our
              team through the inquiry form to discuss your requirements.
            </p>

            <a
              href="#contact"
              onClick={() => onCloseModal?.()}
              className="mt-7 block w-full rounded-xl bg-[#123B64] px-6 py-4 text-center text-sm font-extrabold text-white transition hover:bg-[#20ADD3] hover:text-[#071D33]"
            >
              Go to Contact Form →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
