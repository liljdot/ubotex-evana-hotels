import heroBG from "@/app/assets/hero-bg.png"
import { openSans } from "@/app/layout";
import ActionButton from "../ActionButton";
import { whatsappContact } from "@/app/data";

const HeroSection: React.FC = () => {

    return (
        <>
            <section style={{ backgroundImage: `linear-gradient(to bottom, #000000EE, #00000000), url(${heroBG.src})` }} className="bg-cover bg-center pt-30 md:pt-40 xl:pt-55 pb-12.5 md:pb-16 lg:pb-24 xl:pb-37">
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10">
                    <div className="flex flex-col gap-5 xl:gap-15 text-neutral text-center">
                        <h1 className="text-5xl lg:text-7xl xl:text-[158px] font-bold px-5 xl:px-18">Welcome
                            <br />
                            to Evana Hotels</h1>
                        <p className={"text-base px-12 xl:px-31 " + openSans.className}>
                            Premium spaces, curated experiences, and personalized service, discover the new standard in hospitality.                        </p>
                    </div>

                    <div className="flex justify-center items-center">
                        <ActionButton to={whatsappContact} className="text-primary">Contact Us</ActionButton>
                    </div>
                </div>

            </section>
        </>
    )
}

export default HeroSection;