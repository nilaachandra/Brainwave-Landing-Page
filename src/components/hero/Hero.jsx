import { curve } from "../../assets"
import Section from "../Section"

const Hero = () => {
  return (
    <Section className='pt-[12rem] -mt-5.25'
    crosses crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="hero">
        <div className="container relative">
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-16 md:mb-20 lg:mb-[6rem]">
                <h1 className="h1 mb-6">Explore the Possibilites of AI Chatting with
                    <span className="inline-block relative">Brainwave{" "}
                    <img src={curve}
                    className="absolute top-full left-0 w-full"
                    width={624}
                    height={28}/></span>
                </h1>

            </div>
        </div>
    </Section>
  )
}

export default Hero