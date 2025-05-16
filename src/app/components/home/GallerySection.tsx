import { openSans } from "@/app/layout";
import Gallery from "./Gallery";
import ContentSection from "../ContentSection";

const GallerySection: React.FC = () => {

    return (
        <>
            <ContentSection
                noPadding
                className="gap-6 md:gap-7 lg:gap-8
                py-5.5 md:py-6">
                <div className="flex flex-col gap-2.5 md:gap-4 lg:gap-6 xl:gap-7.5 px-11 md:px-16 lg:px-32 xl:px-49">
                    <ContentSection.Heading>
                        Our Gallery
                    </ContentSection.Heading>

                    <p className={"text-sm lg:text-base text-base-content md:font-semibold text-justify " + openSans.className}>
                        Explore moments of elegance, design, and experience, a visual journey through the timeless charm of Evana Hotels.
                    </p>
                </div>

                <Gallery />
            </ContentSection >
        </>
    )
}

export default GallerySection;