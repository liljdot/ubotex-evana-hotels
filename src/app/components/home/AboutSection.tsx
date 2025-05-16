import { openSans } from "@/app/layout";
import companyImage from "@/app/assets/company-image.jpg"
// import winwFloatie1 from "@/app/assets/wine-floatie-1.png"
import Image from "next/image";
import ActionButton from "../ActionButton";
import ContentSection from "../ContentSection";
// import winwFloatie2 from "@/app/assets/wine-floatie-2.png"

const AboutSection: React.FC = () => {

    return (
        <>
            <ContentSection id="about" className="target_section py-15 md:py-24 lg:py-32 xl:py-40">
                <div className="flex flex-col gap-15 md:gap-20 lg:gap-32 xl:gap-45">
                    <div className="flex flex-col gap-4 md:gap-8 lg:gap-12 xl:gap-15">
                        <div className="card md:card-side flex-col-reverse self-center bg-neutral w-full max-w-103 md:max-w-full rounded-none gap-4 md:gap-6 lg:gap-8 xl:gap-11">
                            <div className="card-actions md:hidden self-center">
                                <ActionButton to="" className="bg-primary text-neutral">
                                    Explore
                                </ActionButton>
                            </div>
                            <div className="card-body md:hidden p-0">
                                <p className={"text-justify text-sm/6 md:text-base/8 xl:font-semibold text-base-content grow-0 " + openSans.className}>
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
                                <ContentSection.Heading className="text-center md:text-left self-center md:self-start max-w-53 md:max-w-96 lg:max-w-128 xl:max-w-158.5">
                                    Who are we?
                                </ContentSection.Heading>
                                <p className={"text-justify text-sm/6 md:text-base/8 xl:font-semibold text-base-content grow-0 " + openSans.className}>
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
                </div>
            </ContentSection>
        </>
    )
}

export default AboutSection;