"use client";
import { useState } from "react";

export default function GetIntouch() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    organization: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required.";

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!form.role) newErrors.role = "Please select an option.";
    if (!form.organization.trim())
      newErrors.organization = "Organization is required.";
    if (!form.message.trim()) newErrors.message = "Message can't be empty.";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // All good — fire success toast
    setSubmitted(true);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      organization: "",
      message: "",
    });
    setErrors({});

    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass = (field) =>
    `bg-transparent border-b focus:outline-none py-2 text-white placeholder-gray-400 w-full transition-colors ${
      errors[field]
        ? "border-red-400 focus:border-red-400"
        : "border-gray-600 focus:border-white"
    }`;

  return (
    <div className="bg-[#042133] pb-24 relative">
      {/* ✅ Success Toast */}
      {submitted && (
        <div className="fixed top-6 right-6 z-50 bg-[#1096DC] text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <div>
            <p className="font-semibold text-sm">Message sent!</p>
            <p className="text-xs text-white/80">
              We'll get back to you personally.
            </p>
          </div>
        </div>
      )}

      <div className="pb-16 text-center text-[#FFF]">
        <h1 className="text-4xl font-bold pt-10">
          Get in <span className="text-[#1096DC]">Touch</span>
        </h1>
        <p className="font-medium mt-3">
          Ready to deploy capital into workforce infrastructure?
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 text-white">
        {/* Left Card — unchanged */}
        <div className="bg-[#1096DC] rounded-xl p-10 flex flex-col justify-between relative overflow-hidden h-full">
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
            <a
              href="mailto:info@arisefunds.com"
              className="text-lg underline hover:text-white/80 transition-colors"
            >
              info@arisefunds.com
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex flex-col gap-8 pt-4">
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">First Name</label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                type="text"
                placeholder="John"
                className={inputClass("firstName")}
              />
              {errors.firstName && (
                <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">Last Name</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Doe"
                className={inputClass("lastName")}
              />
              {errors.lastName && (
                <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="john@example.com"
              className={inputClass("email")}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-1 relative">
            <label className="text-sm font-semibold">
              I'm reaching out as?
            </label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className={`${inputClass("role")} appearance-none pr-8 bg-[#042133]`}
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="investor">Impact Investor</option>
              <option value="dfi">Development Finance Institution</option>
              <option value="government">Government Body</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute right-2 top-9 pointer-events-none text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {errors.role && (
              <p className="text-red-400 text-xs mt-1">{errors.role}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold">Organization</label>
            <input
              name="organization"
              value={form.organization}
              onChange={handleChange}
              type="text"
              placeholder="Organization Name"
              className={inputClass("organization")}
            />
            {errors.organization && (
              <p className="text-red-400 text-xs mt-1">{errors.organization}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold">Message</label>
            <input
              name="message"
              value={form.message}
              onChange={handleChange}
              type="text"
              placeholder="Write your message.."
              className={inputClass("message")}
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <div>
            <button
              onClick={handleSubmit}
              className="bg-[#149EED] text-white px-8 py-3 text-sm font-medium hover:bg-[#149EED]/90 transition-colors rounded-md mt-4"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
