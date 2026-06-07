import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import gsap from "gsap";
import image1 from "./assets/pfimage1.png";
import image2 from "./assets/pfimage2.png";
import image3 from "./assets/pfimage3.png";
import image4 from "./assets/pfimage4.png";
import image5 from "./assets/pfimage5.png";
import aboutImage from "./assets/aboutImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import CircularText from "./components/CircularText";
import TextPressure from "./components/TextPressure";
import DecryptedText from "./components/DecryptedText";
import Shuffle from "./components/Shuffle";
import ScrollReveal from "./components/ScrollReveal";

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const growingSpan = useRef(null);
  const cursorRef = useRef(null);
  const cursorTextRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    return () => {
      locomotiveScroll.destroy();
    };
  }, [showCanvas]);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }

      if (cursorTextRef.current) {
        cursorTextRef.current.style.left = e.clientX + "px";
        cursorTextRef.current.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const handleClick = (e) => {
    setShowCanvas((prev) => {
      if (!prev) {
        gsap.set(growingSpan.current, {
          top: e.clientY,
          left: e.clientX,
        });

        gsap.to("body", {
          color: "#000",
          backgroundColor: "#fd2c2a",
          duration: 1.2,
          ease: "power2.inOut",
        });

        gsap.to(growingSpan.current, {
          scale: 1000,
          duration: 2,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(growingSpan.current, {
              scale: 0,
              clearProps: "all",
            });
          },
        });
      } else {
        gsap.to("body", {
          color: "#fff",
          backgroundColor: "#000",
          duration: 1.2,
          ease: "power2.inOut",
        });
      }

      return !prev;
    });
  };
  return (
    <>
      <div ref={cursorRef} className="custom-cursor" id="custom-cursor"></div>

      <div ref={cursorTextRef} className="cursor-text" id="cursor-text">
        click
      </div>
      <span
        ref={growingSpan}
        className="growing rounded-full block fixed top-[-150px] left-[-50px] w-5 h-5"
      ></span>

      <div id="main">
        <div className="w-full relative min-h-screen font-helvetica">
          {showCanvas &&
            data[0].map((canvasdets, index) => (
              <Canvas key={index} details={canvasdets} />
            ))}

          <div className="w-full relative z-[1] min-h-screen">
            <nav className="w-full px-4 sm:px-6 md:px-8 py-5 flex justify-between items-center z-50 flex-wrap gap-4">
              <div className="brand text-lg sm:text-xl md:text-2xl font-semibold">
                prabinKumar
              </div>

              <div className="links flex gap-3 sm:gap-5 flex-wrap">
                {["Home", "About", "Projects", "Contact"].map((link, index) => (
                  <a
                    key={index}
                    href={`#${link.toLowerCase()}`}
                    className="text-lg md:text-xl transition-all duration-300 [&_*]:!text-base [&_*]:!normal-case [&_*]:!lowercase"
                  >
                    <Shuffle
                      text={link.toLowerCase()}
                      shuffleDirection="right"
                      duration={0.35}
                      animationMode="evenodd"
                      shuffleTimes={1}
                      ease="power3.out"
                      stagger={0.03}
                      threshold={0.1}
                      triggerOnce={true}
                      triggerOnHover
                      respectReducedMotion={true}
                      loop={false}
                      loopDelay={0}
                    />
                  </a>
                ))}
              </div>

              <div className="flex gap-4 md:gap-5 items-center">
                <a
                  href="https://www.instagram.com/prabin_833?igsh=YzQ3ZDRucHU3OHF3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ width: 18, height: 18 }}
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/prabin-nayak-14b51b322/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ width: 18, height: 18 }}
                  />
                </a>

                <a
                  href="https://github.com/Prabin833"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ width: 18, height: 18 }}
                  />
                </a>
              </div>
            </nav>

            <div className="textcontainer flex items-start px-4 sm:px-8 md:px-[12%] lg:px-[20%] mt-10 md:mt-0">
              <div className="Ttext relative w-full md:w-[70%] lg:w-[40%] min-h-[180px]">
                <h3 className="text-xl sm:text-2xl md:text-3xl leading-[1.2]">
                  <DecryptedText
                    text="Hello world, I'm Prabin, building modern web experiences with creativity and clean code."
                    animateOn="view"
                    revealDirection="start"
                    sequential
                    speed={30}
                    maxIterations={10}
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*"
                    className="text-xl sm:text-2xl md:text-3xl leading-[1.2]"
                  />
                </h3>

                <p className="text-sm md:text-base w-full md:w-[80%] mt-5 font-light">
                  <DecryptedText
                    text="I see coding as more than just logic, it's about creating meaningful experiences."
                    animateOn="view"
                    revealDirection="start"
                    sequential
                    speed={25}
                    maxIterations={8}
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!?#$"
                    className="text-sm md:text-base font-light"
                  />
                </p>
              </div>

              <div className="hidden md:flex flex-1 items-center justify-center ml-[8vw] min-h-[180px]">
                <CircularText
                  text="DESIGN • DEVELOP • DEPLOY • REPEAT • "
                  spinDuration={10}
                  onHover="pause"
                />
              </div>
            </div>

            <div className="overflow-x-hidden w-full">
              <div className="w-full absolute bottom-[-55px] left-0">
                <div
                  style={{ position: "relative", height: "300px" }}
                  className="text-[18vw] sm:text-[16vw] font-normal tracking-tight leading-none pl-2 md:pl-4 cursor-none select-none"
                  onClick={handleClick}
                  onMouseEnter={() => {
                    document
                      .getElementById("custom-cursor")
                      .classList.add("expanded");

                    document
                      .getElementById("cursor-text")
                      .classList.add("visible");
                  }}
                  onMouseLeave={() => {
                    document
                      .getElementById("custom-cursor")
                      .classList.remove("expanded");

                    document
                      .getElementById("cursor-text")
                      .classList.remove("visible");
                  }}
                >
                  <TextPressure
                    text="prabinkumar"
                    flex
                    alpha={false}
                    width
                    weight
                    italic
                    minFontSize={36}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="about"
          className="relative w-full min-h-screen mt-16 md:mt-32 px-4 sm:px-6 md:px-8 py-12 md:py-20 font-light"
        >
          {showCanvas &&
            data[1].map((canvasdets, index) => (
              <Canvas key={index} details={canvasdets} />
            ))}

          <div className="text-5xl sm:text-6xl md:text-8xl tracking-tighter">
            <ScrollReveal
              baseOpacity={0.3}
              enableBlur
              baseRotation={3}
              blurStrength={4}
              textClassName="text-5xl sm:text-6xl md:text-8xl tracking-tighter"
            >
              about me
            </ScrollReveal>
          </div>

          <div className="flex flex-col w-full gap-12">
            <div className="flex flex-col gap-5">
              <ScrollReveal
                baseOpacity={0.3}
                enableBlur
                baseRotation={3}
                blurStrength={4}
                textClassName="text-base md:text-3xl leading-tight font-thin"
              >
                I&apos;m Prabin Kumar Nayak, a passionate web developer
                dedicated to turning creative ideas into powerful digital
                experiences. I enjoy building modern, responsive, and
                user-friendly web applications, continuously learning new
                technologies, solving real-world problems, and creating
                impactful solutions that deliver value to users.
              </ScrollReveal>
              <div>
                <ScrollReveal
                  baseOpacity={0.3}
                  enableBlur
                  baseRotation={3}
                  blurStrength={4}
                  textClassName="text-base md:text-3xl leading-tight font-thin"
                >
                  I started coding out of curiosity and it quickly became my
                  passion. I enjoy working on both the visual side and the logic
                  behind it — making things that not only look good but also
                  work perfectly.
                </ScrollReveal>
              </div>
              <div>
                <ScrollReveal
                  baseOpacity={0.3}
                  enableBlur
                  baseRotation={3}
                  blurStrength={4}
                  textClassName="text-base md:text-3xl leading-tight font-thin"
                >
                  When I&apos;m not coding, I&apos;m exploring new technologies,
                  improving my problem-solving skills, and working on personal
                  projects that challenge me to grow.
                </ScrollReveal>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-4 border-t border-current/15 pt-10">
              <ScrollReveal
                baseOpacity={0.3}
                enableBlur
                baseRotation={3}
                blurStrength={4}
                textClassName="md:text-4xl text-base leading-tight "
              >
                Skills
              </ScrollReveal>

              <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-6 xl:gap-9">
                <div className="inline-flex items-center justify-center px-7 py-0.5 border border-current/30 rounded-full hover:opacity-60 transition-all duration-300">
                  <ScrollReveal
                    baseOpacity={0.3}
                    enableBlur
                    baseRotation={3}
                    blurStrength={4}
                    textClassName="text-base md:text-2xl font-thin leading-none"
                  >
                    HTML
                  </ScrollReveal>
                </div>

                <div className="inline-flex items-center justify-center px-7 py-0.5 border border-current/30 rounded-full hover:opacity-60 transition-all duration-300">
                  <ScrollReveal
                    baseOpacity={0.3}
                    enableBlur
                    baseRotation={3}
                    blurStrength={4}
                    textClassName="text-xl md:text-2xl font-thin leading-none"
                  >
                    CSS
                  </ScrollReveal>
                </div>

                <div className="inline-flex items-center justify-center px-7 py-0.5 border border-current/30 rounded-full hover:opacity-60 transition-all duration-300">
                  <ScrollReveal
                    baseOpacity={0.3}
                    enableBlur
                    baseRotation={3}
                    blurStrength={4}
                    textClassName="text-xl md:text-2xl font-thin leading-none"
                  >
                    JavaScript
                  </ScrollReveal>
                </div>

                <div className="inline-flex items-center justify-center px-7 py-0.5 border border-current/30 rounded-full hover:opacity-60 transition-all duration-300">
                  <ScrollReveal
                    baseOpacity={0.3}
                    enableBlur
                    baseRotation={3}
                    blurStrength={4}
                    textClassName="text-xl md:text-2xl font-thin leading-none"
                  >
                    React
                  </ScrollReveal>
                </div>

                <div className="inline-flex items-center justify-center px-7 py-0.5 border border-current/30 rounded-full hover:opacity-60 transition-all duration-300">
                  <ScrollReveal
                    baseOpacity={0.3}
                    enableBlur
                    baseRotation={3}
                    blurStrength={4}
                    textClassName="text-xl md:text-2xl font-thin leading-none"
                  >
                    Tailwind
                  </ScrollReveal>
                </div>

                <div className="inline-flex items-center justify-center px-7 py-0.5 border border-current/30 rounded-full hover:opacity-60 transition-all duration-300">
                  <ScrollReveal
                    baseOpacity={0.3}
                    enableBlur
                    baseRotation={3}
                    blurStrength={4}
                    textClassName="text-xl md:text-2xl font-thin leading-none"
                  >
                    GSAP
                  </ScrollReveal>
                </div>

                <div className="inline-flex items-center justify-center px-7 py-0.5 border border-current/30 rounded-full hover:opacity-60 transition-all duration-300">
                  <ScrollReveal
                    baseOpacity={0.3}
                    enableBlur
                    baseRotation={3}
                    blurStrength={4}
                    textClassName="text-xl md:text-2xl font-thin leading-none"
                  >
                    Node.js
                  </ScrollReveal>
                </div>

                <div className="inline-flex items-center justify-center px-7 py-0.5 border border-current/30 rounded-full hover:opacity-60 transition-all duration-300">
                  <ScrollReveal
                    baseOpacity={0.3}
                    enableBlur
                    baseRotation={3}
                    blurStrength={4}
                    textClassName="text-xl md:text-2xl font-thin leading-none"
                  >
                    Express.js
                  </ScrollReveal>
                </div>

                <div className="inline-flex items-center justify-center px-7 py-0.5 border border-current/30 rounded-full hover:opacity-60 transition-all duration-300">
                  <ScrollReveal
                    baseOpacity={0.3}
                    enableBlur
                    baseRotation={3}
                    blurStrength={4}
                    textClassName="text-xl md:text-2xl font-thin leading-none"
                  >
                    MongoDB
                  </ScrollReveal>
                </div>

                <div className="inline-flex items-center justify-center px-7 py-0.5 border border-current/30 rounded-full hover:opacity-60 transition-all duration-300">
                  <ScrollReveal
                    baseOpacity={0.3}
                    enableBlur
                    baseRotation={3}
                    blurStrength={4}
                    textClassName="text-xl md:text-2xl font-thin leading-none"
                  >
                    Java
                  </ScrollReveal>
                </div>

                <div className="inline-flex items-center justify-center px-7 py-0.5 border border-current/30 rounded-full hover:opacity-60 transition-all duration-300">
                  <ScrollReveal
                    baseOpacity={0.3}
                    enableBlur
                    baseRotation={3}
                    blurStrength={4}
                    textClassName="text-xl md:text-2xl font-thin leading-none"
                  >
                    Python
                  </ScrollReveal>
                </div>

                <div className="inline-flex items-center justify-center px-7 py-0.5 border border-current/30 rounded-full hover:opacity-60 transition-all duration-300">
                  <ScrollReveal
                    baseOpacity={0.3}
                    enableBlur
                    baseRotation={3}
                    blurStrength={4}
                    textClassName="text-xl md:text-2xl font-thin leading-none"
                  >
                    C
                  </ScrollReveal>
                </div>

                <div className="inline-flex items-center justify-center px-7 py-0.5 border border-current/30 rounded-full hover:opacity-60 transition-all duration-300">
                  <ScrollReveal
                    baseOpacity={0.3}
                    enableBlur
                    baseRotation={3}
                    blurStrength={4}
                    textClassName="text-xl md:text-2xl font-thin leading-none"
                  >
                    C++
                  </ScrollReveal>
                </div>

                <div className="inline-flex items-center justify-center px-7 py-0.5 border border-current/30 rounded-full hover:opacity-60 transition-all duration-300">
                  <ScrollReveal
                    baseOpacity={0.3}
                    enableBlur
                    baseRotation={3}
                    blurStrength={4}
                    textClassName="text-xl md:text-2xl font-thin leading-none"
                  >
                    C#
                  </ScrollReveal>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="flex flex-col gap-4 border-t border-current/15 pt-10">
              <ScrollReveal
                baseOpacity={0.3}
                enableBlur
                baseRotation={3}
                blurStrength={4}
                textClassName="md:text-4xl text-base leading-tight "
              >
                Education
              </ScrollReveal>
              <div>
                <ScrollReveal
                  baseOpacity={0.3}
                  enableBlur
                  baseRotation={3}
                  blurStrength={4}
                  textClassName="text-base md:text-3xl leading-tight font-thin"
                >
                  Currently pursuing my MCA degree at Sri Sri University after
                  completing my graduation in BCA, while actively building
                  real-world projects to strengthen my skills as a developer.
                </ScrollReveal>
              </div>
            </div>

            {/* What I Do */}
            <div className="flex flex-col gap-4 border-t border-current/15 pt-10">
              <ScrollReveal
                baseOpacity={0.3}
                enableBlur
                baseRotation={3}
                blurStrength={4}
                textClassName="md:text-4xl text-base leading-tight "
              >
                What I do
              </ScrollReveal>

              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3 text-base md:text-lg text-current/70">
                  <div className="mt-1 text-current/40">
                    <ScrollReveal
                      baseOpacity={0.3}
                      enableBlur
                      baseRotation={3}
                      blurStrength={4}
                      textClassName="text-base md:text-3xl leading-tight font-thin"
                    >
                      →
                    </ScrollReveal>
                  </div>
                  <div>
                    <ScrollReveal
                      baseOpacity={0.3}
                      enableBlur
                      baseRotation={3}
                      blurStrength={4}
                      textClassName="text-base md:text-3xl leading-tight font-thin"
                    >
                      Build responsive and modern websites
                    </ScrollReveal>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-base md:text-lg text-current/70">
                  <div className="mt-1 text-current/40">
                    <ScrollReveal
                      baseOpacity={0.3}
                      enableBlur
                      baseRotation={3}
                      blurStrength={4}
                      textClassName="text-base md:text-3xl leading-tight font-thin"
                    >
                      →
                    </ScrollReveal>
                  </div>
                  <div>
                    <ScrollReveal
                      baseOpacity={0.3}
                      enableBlur
                      baseRotation={3}
                      blurStrength={4}
                      textClassName="text-base md:text-3xl leading-tight font-thin"
                    >
                      Create smooth UI animations with GSAP
                    </ScrollReveal>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-base md:text-lg text-current/70">
                  <div className="mt-1 text-current/40">
                    <ScrollReveal
                      baseOpacity={0.3}
                      enableBlur
                      baseRotation={3}
                      blurStrength={4}
                      textClassName="text-base md:text-3xl leading-tight font-thin"
                    >
                      →
                    </ScrollReveal>
                  </div>
                  <div>
                    <ScrollReveal
                      baseOpacity={0.3}
                      enableBlur
                      baseRotation={3}
                      blurStrength={4}
                      textClassName="text-base md:text-3xl leading-tight font-thin"
                    >
                      Develop full-stack web applications
                    </ScrollReveal>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-base md:text-lg text-current/70">
                  <div className="mt-1 text-current/40">
                    <ScrollReveal
                      baseOpacity={0.3}
                      enableBlur
                      baseRotation={3}
                      blurStrength={4}
                      textClassName="text-base md:text-3xl leading-tight font-thin"
                    >
                      →
                    </ScrollReveal>
                  </div>
                  <div>
                    <ScrollReveal
                      baseOpacity={0.3}
                      enableBlur
                      baseRotation={3}
                      blurStrength={4}
                      textClassName="text-base md:text-3xl leading-tight font-thin"
                    >
                      Write clean and maintainable code
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            </div>

            {/* Currently */}
            <div className="flex flex-col gap-4 border-t border-current/15 pt-10">
              <div>
                <ScrollReveal
                  baseOpacity={0.3}
                  enableBlur
                  baseRotation={3}
                  blurStrength={4}
                  textClassName="md:text-4xl text-base leading-tight "
                >
                  Currently
                </ScrollReveal>
              </div>
              <div>
                <ScrollReveal
                  baseOpacity={0.3}
                  enableBlur
                  baseRotation={3}
                  blurStrength={4}
                  textClassName="text-base md:text-3xl leading-tight font-thin"
                >
                  Open to freelance projects and collaborations. Always looking
                  for exciting opportunities to build something great.
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>

        <div
          id="projects"
          className="relative w-full min-h-screen px-4 sm:px-6 md:px-8 py-12 md:py-20"
        >
          {showCanvas &&
            data[2].map((canvasdets, index) => (
              <Canvas key={index} details={canvasdets} />
            ))}

          <div className="text-5xl sm:text-6xl md:text-8xl tracking-tighter">
            <ScrollReveal
              baseOpacity={0.3}
              enableBlur
              baseRotation={3}
              blurStrength={4}
              textClassName="text-5xl sm:text-6xl md:text-8xl tracking-tighter"
            >
              Projects
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal
              baseOpacity={0.3}
              enableBlur
              baseRotation={3}
              blurStrength={4}
              textClassName="text-base md:text-3xl leading-tight font-thin"
            >
              These projects are focused on frontend development, showcasing
              responsive layouts, modern UI design, smooth animations, and
              interactive user experiences built using technologies like React,
              Tailwind CSS, and GSAP.
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[image1, image2, image3, image4, image5].map((image, i) => (
              <div
                key={i}
                className="w-full aspect-video rounded-xl overflow-hidden"
              >
                <img
                  src={image}
                  alt={`project-${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div
          id="contact"
          className="relative w-full px-5 sm:px-8 md:px-12 pt-20 md:pt-28 pb-0 overflow-hidden"
        >
          <div className="text-5xl sm:text-6xl md:text-8xl tracking-tighter">
            <ScrollReveal
              baseOpacity={0.3}
              enableBlur
              baseRotation={3}
              blurStrength={4}
              textClassName="text-5xl sm:text-6xl md:text-8xl tracking-tighter"
            >
              let&apos;s connect
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal
              baseOpacity={0.3}
              enableBlur
              baseRotation={3}
              blurStrength={4}
              textClassName="text-base md:text-3xl leading-tight font-thin"
            >
              I&apos;m currently open to internships, freelance projects, and
              collaborations. Whether you have an idea, opportunity, or just
              want to say hello — feel free to reach out. Tailwind CSS, and
              GSAP.
            </ScrollReveal>
          </div>

          {/* Cards */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <a
                href="mailto:prabinkumarnayak833@gmail.com"
                className="group relative overflow-hidden rounded-3xl border border-current/10 backdrop-blur-xl bg-current/[0.03] p-7 md:p-8 transition-all duration-500 hover:border-current/30 hover:bg-current/[0.06] hover:-translate-y-1"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-current/5 to-transparent" />

                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-3">
                    Email
                  </p>

                  <h3 className="text-xl md:text-2xl font-medium mb-3">
                    Get in touch
                  </h3>

                  <p className="text-sm md:text-base break-all opacity-70">
                    prabinkumarnayak833@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+918249292315"
                className="group relative overflow-hidden rounded-3xl border border-current/10 backdrop-blur-xl bg-current/[0.03] p-7 md:p-8 transition-all duration-500 hover:border-current/30 hover:bg-current/[0.06] hover:-translate-y-1"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-current/5 to-transparent" />

                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-3">
                    Phone
                  </p>

                  <h3 className="text-xl md:text-2xl font-medium mb-3">
                    Let&apos;s talk
                  </h3>

                  <p className="text-sm md:text-base opacity-70">
                    +91 8249292315
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Prabin833"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-3xl border border-current/10 backdrop-blur-xl bg-current/[0.03] p-7 md:p-8 transition-all duration-500 hover:border-current/30 hover:bg-current/[0.06] hover:-translate-y-1"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-current/5 to-transparent" />

                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-3">
                    GitHub
                  </p>

                  <h3 className="text-xl md:text-2xl font-medium mb-3">
                    View my work
                  </h3>

                  <p className="text-sm md:text-base break-all opacity-70">
                    github.com/Prabin833
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/prabin-nayak-14b51b322/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-3xl border border-current/10 backdrop-blur-xl bg-current/[0.03] p-7 md:p-8 transition-all duration-500 hover:border-current/30 hover:bg-current/[0.06] hover:-translate-y-1"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-current/5 to-transparent" />

                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-3">
                    LinkedIn
                  </p>

                  <h3 className="text-xl md:text-2xl font-medium mb-3">
                    Professional profile
                  </h3>

                  <p className="text-sm md:text-base opacity-70">
                    linkedin.com/in/prabin-nayak
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
