"use client"

import { Open_Sans } from "next/font/google";
import { AdvancedMarker, APIProvider, InfoWindow, Map, Pin } from "@vis.gl/react-google-maps";
import { IoIosPin } from "react-icons/io";
import { MdEmail, MdPhone } from "react-icons/md";
import Link from "next/link";
import ContentSection from "../ContentSection";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"]
})

const ContactSection: React.FC = () => {
    const position = { lat: 5.035084194856638, lng: 7.937486671727741 }

    return (
        <>
            <ContentSection
                noPadding
                id="contact"
                className="target_section 
                gap-6 md:gap-12 xl:gap-23">
                <ContentSection.Heading className="px-11 md:px-16 lg:px-32 xl:px-49">Looking For Us?</ContentSection.Heading>

                <div className="relative h-100 xl:h-175">
                    <div className={"hidden md:flex absolute -top-[10%] left-[5%] card bg-base-100 shadow-lg rounded-none z-1"}>
                        <div className="card-body md:gap-6 lg:gap-8 xl:gap-10 md:px-6 lg:px-7 xl:px-8.5 md:py-8 lg:py-10 xl:py-12.5">
                            <h2 className="card-title justify-center text-primary text-xl lg:text-2xl xl:text-3xl">INFORMATION</h2>

                            <ul className="flex flex-col md:gap-8 lg:gap-12 xl:gap-15 md:w-72 lg:w-80 xl:w-104">
                                <li className="flex flex-row gap-2 lg:gap-3 xl:gap-4">
                                    <IoIosPin className="text-primary size-6 lg:size-8 xl:size-10.5" />
                                    <span className="flex flex-col gap-2.5 text-base-content">
                                        <h6 className="text-base lg:text-lg xl:text-xl font-semibold">ADDRESS</h6>
                                        <p className={"text-xs " + openSans.className}>#41 Dominic Utuk Avenue, Uyo.</p>
                                    </span>
                                </li>

                                <li className="flex flex-row gap-2 lg:gap-3 xl:gap-4">
                                    <MdPhone className="text-primary size-6 lg:size-8 xl:ize-10.5" />
                                    <span className="flex flex-col gap-2.5 text-base-content">
                                        <h6 className="text-base lg:text-lg xl:text-xl font-semibold">TELEPHONE</h6>
                                        <div>
                                            <p className={"text-xs " + openSans.className}>National calls : +234 707 468 4703</p>
                                            <p className={"text-xs " + openSans.className}>Whatsapp number : +234 707 468 4704</p>
                                        </div>
                                    </span>
                                </li>

                                <li className="flex flex-row gap-2 lg:gap-3 xl:gap-4">
                                    <MdEmail className="text-primary size-6 lg:size-8 xl:ize-10.5" />
                                    <span className="flex flex-col gap-2.5 text-base-content">
                                        <h6 className="text-base lg:text-lg xl:text-xl font-semibold">EMAIL ADDRESS</h6>
                                        <p className={"text-xs " + openSans.className}>
                                            <Link href={"mailto:info@evanahotels.com"}>
                                                info@evanahotels.com
                                            </Link>
                                        </p>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
                        <Map
                            style={{ width: '100%', height: '100%' }}
                            defaultCenter={position}
                            center={position}
                            defaultZoom={18}
                            disableDefaultUI={true}
                            mapId={"781efce71051fc32"}
                        />
                        <AdvancedMarker position={position}>
                            <Pin />
                        </AdvancedMarker>
                    </APIProvider>
                </div>
            </ContentSection>
        </>
    )
}

export default ContactSection;