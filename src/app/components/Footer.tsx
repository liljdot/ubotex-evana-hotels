import { Open_Sans, Inter } from "next/font/google";
import ActionButton from "./ActionButton";
import Image from "next/image";
import footerLogo from "@/app/assets/header-logo.png";
import { cormorantUpright } from "../layout";
import { whatsappContact } from "../data";
import Link from "next/link";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"]
})

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"]
})

const Footer: React.FC = () => {

    return (
        <>
            <footer className="w-full bg-primary">
                <div className="w-screen max-w-450 flex flex-col py-6 md:py-12 lg:py-16 xl:py-16">
                    <div className={`flex flex-col ${openSans.className}`}>
                        <div className="flex flex-col text-neutral p-0">
                            <div className="flex flex-col px-8.5 md:px-12 lg:px-12 xl:px-38">
                                {/* start  */}
                                <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-8 w-49 md:w-56 lg:w-60 xl:w-67">
                                    <h4 className="text-sm md:text-base lg:text-xl xl:text-[40px] font-semibold xl:font-normal">Do you have
                                        any Requests?</h4>

                                    <p className={"md:hidden text-[10px] opacity-80 font-normal " + inter.className}>Feel free to send us your questions or request a free consultation.</p>

                                    <ActionButton to={whatsappContact} className="w-fit text-primary">Contact Us</ActionButton>
                                </div>

                                {/* center  */}
                                <div className="flex flex-row justify-between pt-4 md:pt-8 lg:pt-12 xl:pt-15">
                                    <div className="flex flex-col gap-4">
                                        <div className="grid grid-cols-2 gap-y-0.5 md:gap-y-1.5 gap-x-4">
                                            <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
                                                <p className="text-[0.5rem] md:text-[10px] opacity-60 font-normal">Contact Us</p>
                                                <p className="text-[10px] md:text-sm xl:text-base font-normal xl:font-semibold">+234 7074684703</p>
                                                <p className="text-[10px] md:text-sm xl:text-base font-normal xl:font-semibold">+234 7074684704</p>
                                            </div>

                                            <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
                                                <p className="text-[0.5rem] md:text-[10px] opacity-60 font-normal">Opening hours</p>
                                                <p className="text-[10px] md:text-sm xl:text-base font-normal xl:font-semibold">24/7</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
                                            <p className="text-[0.5rem] md:text-[10px] opacity-60 font-normal">Email</p>
                                            <p className="text-[10px] md:text-sm xl:text-base font-normal xl:font-semibold hover:underline">
                                                <Link href={"mailto:evanahotels@yahoo.com"}>
                                                    Evanahotels@yahoo.com
                                                </Link>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-end items-end gap-3.5 md:gap-8 xl:gap-11.5">
                                        <figure className="w-23 md:w-52 xl:w-78">
                                            <Image src={footerLogo} alt="Ubotex logo" className="w-full" />
                                        </figure>

                                        <div className="flex flex-col gap-1 text-right">
                                            <p className="text-[10px] md:text-sm xl:text-base font-normal xl:font-semibold">#41 Dominic Utuk Avenue, Uyo.</p>
                                            <p className="text-[0.5rem] md:text-[10px] opacity-60 font-normal">© 2025 — Copyright</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* end  */}
                            <div className="pt-9.5 md:pt-12 xl:pt-1">
                                <h1 className={"text-5xl md:text-6xl xl:text-[178px] text-center " + cormorantUpright.className}>EVANA HOTELS</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;