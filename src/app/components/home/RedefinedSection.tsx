import { openSans } from "@/app/layout";

const RedefinedSection: React.FC = () => {

    return (
        <>
            <section
                className="bg-neutral
                            px-11 md:px-16 lg:px-32 xl:px-49
                            ">
                <div className="flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                    <h1 className="text-primary text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold">Luxury Redefined</h1>
                    <p className={"text-base-content text-sm md:text-base text-justify " + openSans.className}>At Evana Hotels, luxury is not just seen, it's felt. Every detail, from our interiors to our dining, speaks of timeless elegance and bespoke hospitality.</p>
                </div>
            </section>
        </>
    )
}

export default RedefinedSection;