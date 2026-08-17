import React, { useEffect, useMemo, useState } from "react";
import { User, Mail, Phone, MapPin, Cake, Users, CheckCircle2, Sparkles } from "lucide-react";
 
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const YEARS = Array.from({ length: 80 }, (_, i) => new Date().getFullYear() - i);
const COUNTRIES = ["India","United States","United Kingdom","Canada","Australia","Singapore","United Arab Emirates","Germany","France","Other"];
const HEAR_OPTIONS = ["A Friend or Colleague", "Google", "Blog Post", "News Article", "Other"];
const MEMBERSHIP_TYPES = [
  { id: "individual", label: "Individual", desc: "Single member access", price: "₹999/yr" },
  { id: "family", label: "Family", desc: "Up to 4 members", price: "₹2,499/yr" },
  { id: "student", label: "Student", desc: "Valid student ID required", price: "₹499/yr" },
];
 
// Field config drives the render loop below — add/remove a field by editing this array only.
const FIELDS = [
  { section: "Personal Information", icon: User, rows: [
    [{ name: "firstName", label: "First Name", req: true, ph: "Gomathi" }, { name: "lastName", label: "Last Name", req: true, ph: "R" }],
    [{ name: "email", label: "Email", req: true, ph: "you@example.com", icon: Mail, type: "email" }, { name: "phone", label: "Phone Number", req: true, ph: "+91 98765 43210", icon: Phone, type: "tel" }],
  ]},
  { section: "Address", icon: MapPin, rows: [
    [{ name: "street1", label: "Street Address", req: true, ph: "123 Main Street", full: true }],
    [{ name: "street2", label: "Street Address Line 2", ph: "Apartment, suite, etc. (optional)", full: true }],
    [{ name: "city", label: "City", req: true, ph: "Sivakasi" }, { name: "state", label: "State / Province", ph: "Tamil Nadu" }],
    [{ name: "postal", label: "Postal / Zip Code", req: true, ph: "626123" }, { name: "country", label: "Country", req: true, select: COUNTRIES }],
  ]},
];
 
const REQUIRED = FIELDS.flatMap((s) => s.rows.flat()).filter((f) => f.req).map((f) => f.name).concat("membershipType");
const EMAIL_RE = /^\S+@\S+\.\S+$/;
const EMPTY_FORM = { hearAbout: [], membershipType: "", month: "", day: "", year: "" };
 
const inputCls = (err) =>
  `w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 shadow-sm outline-none transition focus:ring-4 ${
    err ? "border-rose-400 focus:ring-rose-100" : "border-slate-200 focus:border-violet-500 focus:ring-violet-100"
  }`;
 
export default function Registration() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
 
  // Autofocus the first field once, on mount.
  useEffect(() => {
    document.getElementById("firstName")?.focus();
  }, []);
 
  // Live completion progress — recalculates whenever the form changes.
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const filled = REQUIRED.filter((k) => String(form[k] || "").trim()).length;
    setProgress(Math.round((filled / REQUIRED.length) * 100));
  }, [form]);
 
  const set = (name, value) => {
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((e) => (e[name] ? { ...e, [name]: undefined } : e));
  };
 
  const toggleHear = (opt) =>
    setForm((f) => ({ ...f, hearAbout: f.hearAbout.includes(opt) ? f.hearAbout.filter((o) => o !== opt) : [...f.hearAbout, opt] }));
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    REQUIRED.forEach((k) => { if (!String(form[k] || "").trim()) errs[k] = "Required"; });
    if (form.email && !EMAIL_RE.test(form.email)) errs.email = "Enter a valid email";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };
 
  const cardHint = useMemo(() => (progress === 100 ? "All set — review and submit" : `${progress}% complete`), [progress]);
 
  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 px-4">
        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl shadow-violet-100">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 ring-8 ring-emerald-50/50">
            <CheckCircle2 className="h-8 w-8 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">You're registered! 🎉</h2>
          <p className="mt-2 text-sm text-slate-500">Thanks, {form.firstName}. We've sent a confirmation to {form.email}.</p>
          <button
            onClick={() => { setForm(EMPTY_FORM); setErrors({}); setSubmitted(false); }}
            className="mt-6 w-full rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-700"
          >
            Submit another registration
          </button>
        </div>
      </div>
    );
  }
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 px-4 py-10">
      <form onSubmit={handleSubmit} noValidate className="mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-violet-100/60">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-violet-600 via-indigo-600 to-fuchsia-600 px-8 py-8 text-white">
          <div className="flex items-center gap-2 text-violet-100">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-widest">Membership</span>
          </div>
          <h1 className="mt-1 text-3xl font-bold tracking-tight">Club Membership Registration</h1>
          <p className="mt-1 text-sm text-violet-100">Join the club — it only takes a minute.</p>
 
          {/* Progress bar, driven by the useEffect above */}
          <div className="mt-5 flex items-center gap-3">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/25">
              <div className="h-full rounded-full bg-white transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
            </div>
            <span className="whitespace-nowrap text-xs font-medium text-violet-100">{cardHint}</span>
          </div>
        </div>
 
        <div className="space-y-8 px-8 py-8">
          {FIELDS.map(({ section, icon: Icon, rows }) => (
            <section key={section} className="space-y-4">
              <h2 className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <Icon className="h-4 w-4 text-violet-500" /> {section}
              </h2>
              {rows.map((row, i) => (
                <div key={i} className={`grid grid-cols-1 gap-4 ${row.length > 1 ? "sm:grid-cols-2" : ""}`}>
                  {row.map((f) => (
                    <label key={f.name} className={f.full ? "sm:col-span-2" : ""}>
                      <span className="mb-1.5 block text-sm font-medium text-slate-700">
                        {f.label} {f.req && <span className="text-rose-500">*</span>}
                      </span>
                      {f.select ? (
                        <select id={f.name} className={inputCls(errors[f.name])} value={form[f.name] || ""} onChange={(e) => set(f.name, e.target.value)}>
                          <option value="">Please Select</option>
                          {f.select.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      ) : (
                        <div className="relative">
                          {f.icon && <f.icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />}
                          <input
                            id={f.name}
                            type={f.type || "text"}
                            className={`${inputCls(errors[f.name])} ${f.icon ? "pl-9" : ""}`}
                            placeholder={f.ph}
                            value={form[f.name] || ""}
                            onChange={(e) => set(f.name, e.target.value)}
                          />
                        </div>
                      )}
                      {errors[f.name] && <p className="mt-1 text-xs text-rose-500">{errors[f.name]}</p>}
                    </label>
                  ))}
                </div>
              ))}
            </section>
          ))}
 
          {/* Birth Date */}
          <section className="space-y-4">
            <h2 className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <Cake className="h-4 w-4 text-violet-500" /> Birth Date
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[["month", "a month", MONTHS], ["day", "a day", DAYS], ["year", "a year", YEARS]].map(([name, label, options]) => (
                <label key={name}>
                  <span className="mb-1.5 block text-sm font-medium capitalize text-slate-700">{name}</span>
                  <select className={inputCls()} value={form[name]} onChange={(e) => set(name, e.target.value)}>
                    <option value="">Please select {label}</option>
                    {options.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </label>
              ))}
            </div>
          </section>
 
          {/* Where did you hear about us */}
          <section className="space-y-3">
            <h2 className="text-sm font-bold text-slate-900">Where did you hear about us?</h2>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {HEAR_OPTIONS.map((opt) => (
                <label key={opt} className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-700 transition hover:border-violet-300 hover:bg-violet-50/50">
                  <input type="checkbox" checked={form.hearAbout.includes(opt)} onChange={() => toggleHear(opt)} className="h-4 w-4 rounded border-slate-300 text-violet-600 focus:ring-violet-400" />
                  {opt}
                </label>
              ))}
            </div>
          </section>
 
          {/* Membership Type */}
          <section className="space-y-3">
            <h2 className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <Users className="h-4 w-4 text-violet-500" /> Membership Type <span className="text-rose-500">*</span>
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {MEMBERSHIP_TYPES.map((m) => {
                const active = form.membershipType === m.id;
                return (
                  <label key={m.id} className={`cursor-pointer rounded-2xl border p-4 text-left transition ${active ? "border-violet-500 bg-violet-50 ring-2 ring-violet-200" : "border-slate-200 hover:border-violet-300"}`}>
                    <input type="radio" name="membershipType" checked={active} onChange={() => set("membershipType", m.id)} className="sr-only" />
                    <p className="text-sm font-semibold text-slate-900">{m.label}</p>
                    <p className="mt-1 text-xs text-slate-500">{m.desc}</p>
                    <p className="mt-2 text-sm font-bold text-violet-600">{m.price}</p>
                  </label>
                );
              })}
            </div>
            {errors.membershipType && <p className="text-xs text-rose-500">{errors.membershipType}</p>}
          </section>
        </div>
 
        <div className="flex items-center justify-between gap-3 border-t border-slate-100 bg-slate-50 px-8 py-5">
          <p className="text-xs text-slate-400">Fields marked * are required</p>
          <button type="submit" className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:shadow-violet-300 active:scale-[0.98]">
            Submit Registration
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
 
