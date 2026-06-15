"use client";

import { useState, FormEvent } from "react";

export default function AboutPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
    } else {
      setError("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <>
      {/* Page hero */}
      <section className="bg-white pt-32 pb-16 px-6 lg:px-8 border-b border-black/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-navy">About</h1>
          <div className="mt-4 h-px w-16 bg-[#9B1C1C]" />
        </div>
      </section>

      {/* Company story */}
      <section className="bg-white py-24 px-6 lg:px-8 border-b border-black/10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl leading-relaxed text-[#0A0A0A]">
            A design-construction firm founded in 1998, KOO maintains a broad spectrum of
            practice, providing services in architectural, engineering and construction to the
            U.S. Federal government, local municipalities (state, county, city, school
            districts, and other public sector entities), and commercial clients.
          </p>
          <p className="mt-8 text-xl leading-relaxed text-[#0A0A0A]">
            Throughout our corporate history, our successful past performance of serving
            private and public construction markets has provided our team with a depth of
            knowledge and expertise in every aspect of building design and construction.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-white py-12 px-6 lg:px-8 border-b border-black/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-12 md:gap-20">
          {[
            { stat: "1998", label: "Founded" },
            { stat: "25+", label: "Years of Practice" },
            { stat: "AZ & CA", label: "Licensed States" },
          ].map(({ stat, label }) => (
            <div key={label} className="border-l-2 border-[#9B1C1C] pl-6">
              <p className="text-3xl font-extrabold text-navy">{stat}</p>
              <p className="text-xs text-[#0A0A0A]/50 uppercase tracking-widest mt-1">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact info + form */}
      <section className="bg-white py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: Contact info */}
          <div>
            <h2 className="text-2xl font-extrabold text-navy mb-8">Get in Touch</h2>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#0A0A0A]/40 mb-2">
                  Phone
                </p>
                <a
                  href="tel:+14805602233"
                  className="text-navy font-medium hover:text-navy/60 transition-colors"
                >
                  (480) 560-2233
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#0A0A0A]/40 mb-2">
                  Email
                </p>
                <a
                  href="mailto:hoonHkoo@kooDB.com"
                  className="text-navy font-medium hover:text-navy/60 transition-colors"
                >
                  hoonHkoo@kooDB.com
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div>
            {submitted ? (
              <div className="border border-[#9B1C1C]/20 bg-[#9B1C1C]/5 p-10">
                <h3 className="text-xl font-bold text-navy">Thank you.</h3>
                <p className="mt-3 text-[#0A0A0A]/70">
                  Your message has been received. We&rsquo;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-[#0A0A0A]/50">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="border border-black/20 px-4 py-3 text-sm text-[#0A0A0A] focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-[#0A0A0A]/50">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="border border-black/20 px-4 py-3 text-sm text-[#0A0A0A] focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-[#0A0A0A]/50">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="border border-black/20 px-4 py-3 text-sm text-[#0A0A0A] focus:outline-none focus:border-navy transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-[#0A0A0A]/50">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    className="border border-black/20 px-4 py-3 text-sm text-[#0A0A0A] focus:outline-none focus:border-navy transition-colors resize-none"
                  />
                </div>
                {error && (
                  <p className="text-sm text-[#9B1C1C]">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#9B1C1C] text-white py-4 text-xs font-semibold tracking-widest uppercase hover:bg-[#7a1515] transition-colors disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
