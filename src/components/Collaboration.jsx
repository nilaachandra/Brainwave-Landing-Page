import { collabContent, collabText } from "../constants"
import Section from "./Section"
import check from '../assets/check.svg'
import Button from "./Button"
const Collaboration = () => {
  return (
    <Section>
        <div className="container flex">
            <div className="max-w-[25rem]">
                <h2 className="h2 mb-4 md:mb-8">AI Chat App for seamless collaboration</h2>

                <ul className="max-w-[22rem] mb-10 md:mb-15">
                    {collabContent.map((item) => (
                        <li className="mb-3 py-3" key={item.id}>
                            <div className="flex items-center">
                                <img src={check} alt=""  width={24} height={24}/>
                                <h6 className="body-2 ml-5">{item.title}</h6>
                            </div>
                            {item.text && (<p className="body-2 mt-3 text-n-4">
                                    {item.text}
                                </p>)}
                        </li>
                    ))}
                </ul>
                <Button>Try it Out</Button>
            </div>

                <div className="lg:ml-auto xl:w-[38rem] mt-4">
                        <p className="body-2 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">{collabText}</p>

                        <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full
                        -translate-x-1/2 scale-75 md:scale-100">
                            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                                    <img src={brainwaveSymbol} alt="" />
                                </div>
                            </div>
                        </div>
                </div>
        </div>

    </Section>
  )
}

export default Collaboration