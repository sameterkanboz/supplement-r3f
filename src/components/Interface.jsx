import { motion } from "framer-motion";
const Section = (props) => {
  const { children } = props;
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.6 },
      }}
      className="h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center"
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <ProductSection />
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        <span className="bg-white px-1 italic">beije Cycle Essentials</span>
      </h1>

      <a target="_blank" href="https://beije.co/product/supplement">
        <motion.button
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 2,
          }}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-10 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
        >
          <motion.span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Buy from beije.co
          </motion.span>
        </motion.button>{" "}
      </a>
    </Section>
  );
};
const ProductSection = () => {
  return (
    <Section>
      <img src="/label.webp" alt="ingredients" />
    </Section>
  );
};
const ReviewSection = () => {
  return (
    <Section>
      <h1>Review</h1>
    </Section>
  );
};
const ContactSection = () => {
  return (
    <Section>
      <h1>Contact</h1>
    </Section>
  );
};
