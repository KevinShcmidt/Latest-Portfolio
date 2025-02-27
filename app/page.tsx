"use client";
import Header from "./ui/Header";
import Home from "./ui/Home";
import About from "./ui/About";
import Career from "./ui/Career";

export default function Page() {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <section
        id="#home"
        className="relative w-full flex flex-col items-center justify-center h-screen"
      >
        <Home />
      </section>
      <section id="#about" className="w-full">
        <About />
      </section>
      <section id="##career" className="w-full">
        <Career />
      </section>
    </div>
  );
}
