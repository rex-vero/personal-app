import { RandomReveal } from "react-random-reveal";
import { alphabetArray, persianAlphabet } from "../utils/alphabet";

const Reveal = ({ lang, text, duration }) => <RandomReveal key={text} isPlaying duration={duration} characters={text} characterSet={lang === 'en' ? alphabetArray : persianAlphabet} />

export default Reveal;