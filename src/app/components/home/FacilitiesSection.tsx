import { openSans } from "@/app/layout";
import Image, { StaticImageData } from "next/image";
import servicedImage from "@/app/assets/serviced-image.jpg"
import experienceImage from "@/app/assets/experience-image.jpg"
import proximityImage from "@/app/assets/proximity-image.jpg"
import ActionButton from "../ActionButton";
import { whatsappContact } from "@/app/data";
import { ReactNode } from "react";

interface FacilitiesCardProps {
    reversed?: boolean
    title: string
    children: ReactNode
    image: StaticImageData
}

const FacilitiesCard: React.FC<FacilitiesCardProps> = ({ reversed, title, children, image }) => {

    return (
        <div
            className={`card md:card-side
            gap-5.5 md:gap-11 xl:gap-19
            w-full max-w-83 md:max-w-full
            md:h-90 xl:h-116
            ${reversed && "md:flex-row-reverse"}`}>
            <figure className="relative h-73.5 md:h-full md:w-102 xl:w-131 rounded-[3.15rem] md:rounded-[5rem] shrink-0 grow-0">
                <Image
                    src={image}
                    alt="Facilities"
                    fill />
            </figure>

            <div className="card-body gap-4 md:justify-center p-0 md:pr-8 xl:pr-16 grow-0">
                <h2 className="card-title text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">{title}</h2>
                <p className={"text-sm md:text-base text-base-content text-justify grow-0 " + openSans.className}>
                    {children}
                </p>
                <div className="card-actions justify-end md:justify-start">
                    <ActionButton to={whatsappContact} className="bg-primary text-neutral">
                        Book Now
                    </ActionButton>
                </div>
            </div>
        </div>
    )
}

const FacilitiesSection: React.FC = () => {

    return (
        <>
            <section
                className="bg-neutral flex flex-col
                px-11 md:px-16 lg:px-32 xl:px-49 
                py-15 md:py-24 lg:py-32 xl:py-40
                gap-10 md:gap-12 lg:gap-16 xl:gap-20">
                <div
                    className="flex flex-col 
                    gap-4 lg:gap-6 xl:gap-8">
                    <h1 className="text-primary text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold">Our Facilities</h1>

                    <p className={"text-sm lg:text-base text-base-content md:font-semibold text-justify " + openSans.className}>
                        From fully serviced amenities to exquisite dining experiences — all within close reach of the city’s finest attractions, Evana Hotels offers the perfect blend of comfort, convenience, and sophistication.
                    </p>
                </div>

                <div className="flex flex-col gap-20 items-center">
                    <FacilitiesCard title="Fully Serviced" image={servicedImage}>
                        Enjoy seamless comfort with 24/7 service, daily housekeeping, premium dining, and top-tier amenities, everything you need for a hassle-free stay at Ubotex Hotels.
                    </FacilitiesCard>

                    <FacilitiesCard reversed title="The Evana Experience" image={experienceImage}>
                        From exquisite dining and crafted cocktails to serene moments of leisure, The Evana Experience is a celebration of taste, comfort, and timeless hospitality.
                    </FacilitiesCard>

                    <FacilitiesCard title="Proximity" image={proximityImage}>
                        Stay close to business hubs, shopping, and top attractions, ensuring convenience and easy access throughout your stay at Ubotex Hotels.
                    </FacilitiesCard>
                </div>
            </section>
        </>
    )
}

export default FacilitiesSection;