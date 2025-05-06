import { openSans } from "@/app/layout";
import Image, { StaticImageData } from "next/image";
import interiorImage from "@/app/assets/interior-image.png"
import diningImage from "@/app/assets/dining-image.png"
import loungeImage from "@/app/assets/lounge-image.png"
import { ReactNode } from "react";

interface LuxuryCardProps {
    title: string
    image: StaticImageData
    children?: ReactNode
}

const LuxuryCard: React.FC<LuxuryCardProps> = ({ title, image, children }) => {
    return (
        <div
            className="card items-center 
                            w-full max-w-87
                            px-5 sm:px-2
                            ">
            <figure className="size-68 sm:size-79 rounded-full">
                <Image
                    className="w-full h-full"
                    src={image}
                    alt="room" />
            </figure>

            <div className="card-body text-center items-center px-0 sm:px-5 py-5">
                <h2 className="card-title text-2xl font-semibold">{title}</h2>
                <p className={"text-base text-base-content " + openSans.className}>
                    {children}
                </p>
            </div>
        </div>
    )
}

const LuxurySection: React.FC = () => {

    return (
        <>
            <section
                className="bg-neutral
                            flex flex-col
                            px-11 md:px-16 lg:px-32 xl:px-49
                            pb-9 md:pb-10.5 lg:pb-11 xl:pb-12.5
                            gap-10
                            ">
                <div className="flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                    <h1 className="text-primary text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold">Luxury Redefined</h1>
                    <p className={"text-base-content text-sm md:text-base text-justify " + openSans.className}>At Evana Hotels, luxury is not just seen, it's felt. Every detail, from our interiors to our dining, speaks of timeless elegance and bespoke hospitality.</p>
                </div>

                <div
                    className="flex flex-col md:flex-row 
                                gap-18 md:gap-4 xl:gap-0
                                lg:justify-between
                                items-center
                                overflow-x-auto
                                ">
                    <LuxuryCard title="Elegant Interiors" image={interiorImage}>
                        Where elegance meets detail, every space at Evana Hotels radiates class, comfort, and sophistication
                    </LuxuryCard>
                    <LuxuryCard title="Gourmet Dining" image={diningImage}>
                        Dine in elegance. Savor local and international cuisine, crafted with artistry and flavor.
                    </LuxuryCard>
                    <LuxuryCard title="Lounge Area" image={loungeImage}>
                        Unwind in style. Our lounge offers a quiet blend of comfort, charm, and classic sophistication.
                    </LuxuryCard>
                </div>
            </section>
        </>
    )
}

export default LuxurySection;