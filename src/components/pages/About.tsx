import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const About = () => {
  const { theme } = useContext(ThemeContext)!;
  return (
    <div className='w-full min-h-[calc(100vh-30px)]'>
        <div className={`space-y-4 mt-6 md:mt-0 ${theme === "forest" && "w-max mx-auto"}`}>
        <h1 className={`text-(length:--title-size) font-(--title-weight) text-[var(--title-color)] ${theme === "forest" && "text-center"}`}>
          About Us
        </h1>
        <p className="text-[var(--text)] text-(length:--subtitle-size) font-(--subtitle-weight)">
          We are a team of passionate engineers and designers. - Destiny Olowokere.
        </p>
      </div>
    </div>
  )
}

export default About