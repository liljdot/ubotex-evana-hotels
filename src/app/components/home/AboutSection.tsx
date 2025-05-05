import { openSans } from "@/app/layout";
import companyImage from "@/app/assets/company-image.jpg"
// import winwFloatie1 from "@/app/assets/wine-floatie-1.png"
import Image from "next/image";
import ActionButton from "../ActionButton";
// import winwFloatie2 from "@/app/assets/wine-floatie-2.png"

const AboutSection: React.FC = () => {

    return (
        <>
            <section id="about" className="target_section bg-neutral px-11 md:px-16 lg:px-32 xl:px-49 py-15 md:py-24 lg:py-32 xl:py-40">
                <div className="flex flex-col gap-29 md:gap-40 lg:gap-64 xl:gap-89">
                    <div className="flex flex-col gap-4 md:gap-8 lg:gap-12 xl:gap-15">
                        <div className="card md:card-side flex-col-reverse self-center bg-neutral w-full max-w-103 md:max-w-full rounded-none gap-4 md:gap-6 lg:gap-8 xl:gap-11">
                            <div className="card-actions md:hidden self-center">
                                <ActionButton to="" className="bg-primary text-neutral">
                                    Explore
                                </ActionButton>
                            </div>
                            <div className="card-body md:hidden p-0">
                                <p className={"text-justify text-sm/6 md:text-base/8 xl:font-semibold text-primary grow-0 " + openSans.className}>
                                    From our thoughtfully designed rooms and suites to our exceptional dining, event, and relaxation facilities, every detail at Evana is crafted with your comfort in mind. Whether you're traveling for business, leisure, or celebration, we offer the perfect blend of serenity, style, and service.
                                </p>
                            </div>
                            <figure className="md:w-[50%] md:py-4">
                                <img
                                    className="md:hidden rounded-3xl"
                                    src={companyImage.src}
                                    alt="company" />

                                <img
                                    className="hidden md:flex rounded-4xl"
                                    src={companyImage.src}
                                    alt="company" />
                            </figure>

                            <div className="card-body md:w-[50%] p-0">
                                <h3 className="text-primary text-center md:text-left self-center md:self-start text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold max-w-53 md:max-w-96 lg:max-w-128 xl:max-w-158.5">
                                    Who are we?
                                </h3>
                                <p className={"text-justify text-sm/6 md:text-base/8 xl:font-semibold text-primary grow-0 " + openSans.className}>
                                    Evana Hotels is a modern oasis of comfort and elegance, offering a premium hospitality experience in the heart of Akwa Ibom State. As part of the UBOTEX Nigeria family, Evana Hotels upholds a legacy of excellence, blending local charm with world-class service to create memorable stays for every guest.
                                    <br />
                                    <span className="hidden md:flex">
                                        From our thoughtfully designed rooms and suites to our exceptional dining, event, and relaxation facilities, every detail at Evana is crafted with your comfort in mind. Whether you're traveling for business, leisure, or celebration, we offer the perfect blend of serenity, style, and service.
                                    </span>
                                </p>
                                <div className="card-actions hidden md:flex">
                                    <ActionButton to="" className="bg-primary text-neutral">
                                        Explore
                                    </ActionButton>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="relative flex flex-col items-center gap-4 md:gap-8 lg:gap-12 xl:gap-15">
                        <figure className="absolute w-14 md:w-24 lg:w-36 xl:w-50 h-16 md:h-24 lg:h-36 xl:h-56 -top-[65%] md:-top-[75%] lg:-top-[85%] xl:-top-[95%] right-[15%] md:right-[12%] lg:right-[9%] xl:right-[7%]">
                            <Image src={winwFloatie1} alt="wine floatie" />
                        </figure>

                        <h3 className="text-primary text-center text-xl md:text-3xl lg:text-5xl xl:text-7xl font-semibold xl:font-medium opacity-80">
                            EXPLORE A WIDE SELECTION OF WINES FROM AROUND
                            <br />
                            THE WORLD
                        </h3>

                        <figure className="absolute w-14 md:w-24 lg:w-36 xl:w-50 h-16 md:h-24 lg:h-36 xl:h-56 -bottom-[35%] md:-bottom-[45%] lg:-bottom-[55%] xl:-bottom-[65%] left-[8%]">
                            <Image src={winwFloatie2} alt="wine floatie" />
                        </figure>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default AboutSection;