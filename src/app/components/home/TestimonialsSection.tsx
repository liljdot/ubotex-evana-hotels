import { openSans } from "@/app/layout";
import adaAndKunleImage from "@/app/assets/ada-and-kunle-image.png"
import fatimaAndFamilyImage from "@/app/assets/fatima-and-family-image.png"
import okonObongImage from "@/app/assets/okon-obong-image.png"
import msPeculiarImage from "@/app/assets/ms-peculiar-image.png"
import { ReactNode } from "react";
import { StaticImageData } from "next/image";
import ContentSection from "../ContentSection";

interface TestimonialCardProps {
    name: string
    children: ReactNode
    image: StaticImageData
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, children, image }) => {

    return (
        <>
            <div className={"card w-57 md:w-105 shrink-0 rounded-[2.75rem] md:rounded-[5rem] shadow-sm text-base-content snap-center"}>
                <div className="card-body gap-1 items-center md:gap-2 px-6 md:px-11 py-10.5 md:py-8.5">
                    <div className="avatar">
                        <div className="w-12 md:w-22.5 rounded-full border border-gray-500">
                            <img src={image.src} />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 md:gap-4 text-center">
                        <h6 className="text-sm md:text-2xl font-bold">{name}</h6>
                        <p className={"text-xs/5 md:text-sm/6 " + openSans.className}>{children}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const TestimonialsSection: React.FC = () => {

    return (
        <>
            <ContentSection
                noPadding
                className="gap-7.5 md:gap-12 lg:gap-18 xl:gap-24 
                py-8 md:py-12 lg:py-20 xl:py-29">
                <div className="flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4 px-11 md:px-16 lg:px-32 xl:px-49">
                    <ContentSection.Heading>What Our Guests Say About US</ContentSection.Heading>
                    <ContentSection.Text className={openSans.className}>
                        Real stories from guests who’ve experienced the warmth, elegance, and signature hospitality of Evana Hotels.
                    </ContentSection.Text>
                </div>

                <div className="flex flex-row gap-3 md:gap-4 xl:gap-5.5 pl-11 md:pl-16 lg:pl-32 xl:pl-49 pb-2 overflow-x-auto snap-x snap-mandatory">
                    <TestimonialCard name="Ada & Kunle O." image={adaAndKunleImage}>
                        "From the moment we arrived, everything felt special. The room was beautiful, the staff were thoughtful, and the atmosphere was effortlessly romantic. Evana made our anniversary unforgettable."
                    </TestimonialCard>

                    <TestimonialCard name="Mrs. Fatima A. & Family" image={fatimaAndFamilyImage}>
                        "Traveling with kids isn’t always easy, but Evana made it seamless. The staff went above and beyond, the rooms were spacious, and the amenities kept everyone happy. We’ll definitely return."
                    </TestimonialCard>

                    <TestimonialCard name="Mr. Okon Obong" image={okonObongImage}>
                        "Professional, quiet, and efficient, exactly what I needed for a productive trip. Excellent service and a touch of luxury that made all the difference."
                    </TestimonialCard>

                    <TestimonialCard name="Ms. Peculiar Aniebet" image={msPeculiarImage}>
                        "I celebrated my 30th birthday at Evana, and it was everything I dreamed of. Beautiful venue, attentive staff, and the best birthday dinner I’ve had. Thank you for making it magical."
                    </TestimonialCard>
                </div>
            </ContentSection>
        </>
    )
}

export default TestimonialsSection;