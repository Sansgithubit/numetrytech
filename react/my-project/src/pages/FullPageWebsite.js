import { useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import AOS from "aos";
import "aos/dist/aos.css";
import "fullpage.js/dist/fullpage.css";
import ProgressBar from "../components/ProgressBar";
import SectionCard from "../components/SectionCard";
import TestimonialSlider from "../components/TestimonialSlider";

const sections = [
  { title: "Home", content: "Welcome to our website" },
  { title: "About", content: "Learn more about us" },
  { title: "Services", content: "Our offerings" },
  { title: "Testimonials", content: "What our clients say" },
  { title: "Contact", content: "Get in touch with us" },
];

export default function FullPageWebsite() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <ProgressBar />
      <ReactFullpage
        navigation
        scrollingSpeed={1000}
        render={() => (
          <ReactFullpage.Wrapper>
            {sections.map((section, index) => (
              <div key={index} className="section flex justify-center items-center">
                {section.title === "Testimonials" ? <TestimonialSlider /> : <SectionCard {...section} />}
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
    </>
  );
}
