import { openSans } from "@/app/layout";
import ActionButton from "../ActionButton";
import { whatsappContact } from "@/app/data";
import Image, { StaticImageData } from "next/image";
import standardRoomImage from "@/app/assets/standard-room-image.jpg"
import executiveRoomImage from "@/app/assets/executive-room-image.jpg"
import deluxeRoomImage from "@/app/assets/deluxe-room-image.jpg"
import businessRoomImage from "@/app/assets/business-room-image.jpg"
import ambassadorialRoomImage from "@/app/assets/ambassadorial-room-image.jpg"
import ContentSection from "../ContentSection";

interface RoomCardProps {
    title: string
    price: string
    image: StaticImageData
}

const RoomCard: React.FC<RoomCardProps> = ({ title, price, image }) => {

    return (
        <div className="card w-83 md:w-117 rounded-3xl md:rounded-[4.75rem] shadow-sm shrink-0 snap-center">
            <figure className="relative h-57 md:h-81">
                <Image
                    src={image}
                    alt={title + " room"}
                    fill />
            </figure>
            <div className="card-body justify-between h-27 md:h-48 px-3.5 md:px-9 py-2.5 md:py-8">
                <div className="flex flex-col">
                    <h2 className="card-title text-2xl md:text-4xl font-semibold">{title}</h2>
                    <div className="flex flex-row gap-2.5 md:gap-4.5">
                        <p className={"text-sm md:text-base grow-0 " + openSans.className}>Starting from</p>
                        <p className="text-xl/4 md:text-3xl/4 font-semibold grow-0">₦ {price}</p>
                    </div>
                </div>

                <div className="card-actions justify-end">
                    <ActionButton to={whatsappContact} className="bg-primary text-neutral">Book Now</ActionButton>
                </div>
            </div>
        </div>
    )
}

const RoomsSection: React.FC = () => {

    return (
        <>
            <ContentSection
                id="reservations"
                noPadding
                className="target_section 
                gap-9 xl:gap-20 
                py-9 xl:py-31">
                <div
                    className="flex flex-col 
                    gap-4 lg:gap-6 xl:gap-8 
                    px-11 md:px-16 lg:px-32 xl:px-49">
                    <ContentSection.Heading>Our Rooms</ContentSection.Heading>

                    <ContentSection.Text className={openSans.className}>
                        From intimate, well-appointed spaces to expansive suites for refined tastes, each room at Evana Hotels offers elegance, comfort, and timeless sophistication, tailored for every kind of stay.
                    </ContentSection.Text>
                </div>

                <div
                    className="flex flex-row 
                    gap-2 md:gap-6
                    px-11 md:px-16 lg:px-32 xl:px-49
                    pb-2
                    overflow-x-auto snap-x snap-mandatory">
                    <RoomCard
                        title="Standard"
                        price="40,000"
                        image={standardRoomImage}
                    />
                    <RoomCard
                        title="Executive"
                        price="50,000"
                        image={executiveRoomImage}
                    />
                    <RoomCard
                        title="Royal deluxe"
                        price="55,000"
                        image={deluxeRoomImage}
                    />
                    <RoomCard
                        title="Business Suite"
                        price="65,000"
                        image={businessRoomImage}
                    />
                    <RoomCard
                        title="Ambassadorial suite"
                        price="90,000"
                        image={ambassadorialRoomImage}
                    />
                </div>
            </ContentSection>
        </>
    )
}

export default RoomsSection;