import ActionButton from "../ActionButton";
import storySectionBG from "@/app/assets/story-section-bg.jpg"
import { whatsappContact } from "@/app/data";

const StorySection: React.FC = () => {

    return (
        <>
            <section style={{ backgroundImage: `linear-gradient(to bottom, #000000EE, #00000000), url(${storySectionBG.src})` }} className="bg-cover bg-center py-17 md:py-24 lg:py-33">
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-12.5">
                    <div className="flex flex-col gap-5 xl:gap-15 text-neutral text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[105px] font-bold px-5 xl:px-18">
                            Every corner
                            <br />
                            whispers
                            <br />
                            elegance, every
                            <br />
                            stay tells a
                            <br />
                            story
                        </h1>
                    </div>

                    <div className="flex justify-center items-center">
                        <ActionButton to={whatsappContact} className="text-primary">Book Now</ActionButton>
                    </div>
                </div>

            </section>
        </>
    )
}

export default StorySection;