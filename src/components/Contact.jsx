import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer"; // ✅ Import your Footer

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Heading scale animation
    gsap.fromTo(
      headingRef.current,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          scrub: true,
        },
      }
    );

    // Section slide-up animation
    gsap.fromTo(
      contentRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="bg-[#0d0d0d] text-white flex flex-col min-h-screen">
      {/* Contact Section */}
      <section
        id="contact"
        className="flex-1 py-16 px-4 md:px-8 flex items-center"
      >
        <div className="max-w-4xl mx-auto text-center" ref={contentRef}>
          {/* Heading */}
          <h2
            ref={headingRef}
            className="text-4xl md:text-9xl font-bold mb-4"
          >
            Let’s <span className="text-white">Connect</span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? Drop me a message or
            schedule a quick call. I’ll get back to you as soon as possible!
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-4 w-full sm:w-80 mx-auto">
            {/* Email Me */}
            <a
              href="mailto:tasinbintareq@gmail.com"
              className="w-full py-2 rounded-full bg-[#ddff00] text-black font-semibold hover:text-white"
            >
              tasinbintareq@gmail.com
            </a>

            {/* Schedule a Call */}
            {/* <button
              onClick={() => setShowCalendly(true)}
              className="w-full py-2 px-20 rounded-full border border-gray-600 bg-[#0d0d0d] hover:bg-gray-600 text-white font-semibold"
            >
              📅 Schedule a Call
            </button> */}
          </div>
        </div>

        {/* Calendly Modal */}
        {showCalendly && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="bg-[#111] rounded-xl overflow-hidden w-full max-w-3xl relative">
              {/* Close button */}
              <button
                onClick={() => setShowCalendly(false)}
                className="absolute top-3 right-3 text-white text-xl hover:text-[#ff6600]"
              >
                ✕
              </button>

              {/* Calendly Embed */}
              <div className="w-full h-[600px]">
                <iframe
                  src="https://calendly.com/cktarun"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Schedule a Call"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
