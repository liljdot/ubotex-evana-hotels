import { openSans } from "@/app/layout";

const RoomsSection: React.FC = () => {

    return (
        <>
            <section id="reservations"
                className="target_section flex flex-col 
                gap-9 xl:gap-20 
                py-9 xl:py-31">
                <div
                    className="flex flex-col 
                    gap-5 md:gap-4 lg:gap-6 xl:gap-8 
                    px-11 md:px-16 lg:px-32 xl:px-49">
                    <h1 className="text-primary text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold">Our Rooms</h1>

                    <p className={"text-sm lg:text-base text-base-content md:font-semibold text-justify " + openSans.className}>
                        From intimate, well-appointed spaces to expansive suites for refined tastes, each room at Evana Hotels offers elegance, comfort, and timeless sophistication, tailored for every kind of stay.
                    </p>
                </div>
            </section>
        </>
    )
}

export default RoomsSection;