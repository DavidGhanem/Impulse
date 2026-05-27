// src/pages/page.jsx
import { useState, useEffect, useRef } from "react";

import "../styles/globals.css";

import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Problem from "../components/Problem.jsx";
import Solution from "../components/Solution.jsx";
import Pricing from "../components/Pricing.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Included from "../components/Included.jsx";
import Guarantee from "../components/Guarantee.jsx";
import Demo from "../components/Demo.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Toast from "../components/Toast.jsx";

export default function Page() {
  const [toast, setToast] = useState({ visible: false, message: "" });
  const toastTimer = useRef(null);

  // ── Scroll reveal ──────────────────────────────────────────────
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ── Toast helper ───────────────────────────────────────────────
  const showToast = (message, duration = 4000) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ visible: true, message });
    toastTimer.current = setTimeout(
      () => setToast((t) => ({ ...t, visible: false })),
      duration,
    );
  };

  // ── Handlers ───────────────────────────────────────────────────
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  const handleDemoJoin = () =>
    showToast(
      "⚡ That took 3 seconds. In real life, you'd be a fully enrolled member right now. Zero friction.",
      5000,
    );

  const handleFormSubmit = () =>
    showToast(
      "✅ Message received! I'll reach out within a few hours to schedule your free 15-minute call.",
      6000,
    );

  return (
    <>
      <Toast message={toast.message} visible={toast.visible} />

      <Navbar onContactClick={scrollToContact} />

      <main>
        <Hero onContactClick={scrollToContact} />
        <Problem />
        <Solution />
        <Pricing />
        <HowItWorks />
        <Included />
        <Guarantee onContactClick={scrollToContact} />
        <Demo onDemoJoin={handleDemoJoin} />
        <About />
        <Contact onSubmit={handleFormSubmit} />
      </main>

      <Footer />
    </>
  );
}
