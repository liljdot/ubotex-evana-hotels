"use client"

import Image, { StaticImageData } from "next/image"
import { CgCloseR } from "react-icons/cg"
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io"

interface CarouselProps {
    images: StaticImageData[]
    setModalIsOpen: (val: boolean) => void
}

const Carousel: React.FC<CarouselProps> = ({ images, setModalIsOpen }) => {

    return (
        <div className="carousel relative w-full h-full">
            <button className="fixed btn bg-transparent border-none shadow-none z-1000" onClick={() => setModalIsOpen(false)}>
                <CgCloseR className="size-6" />
            </button>
            {images.map((image: StaticImageData, index: number) => (
                <div key={"gallery-image" + index} id={"slide" + (index + 1)} className="carousel-item justify-center relative w-full h-2/3 md:h-full">
                    <Image
                        className="absolute top-0 object-contain object-top w-full h-full"
                        alt="Gallery Image"
                        src={image}
                    // height={imageHeight} 
                    // width={imageHeight/image.height * image.width}
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href={index == 0 ? ("#slide" + images.length) : "#slide" + index} className="btn border-primary px-4 py-4 rounded-2xl opacity-45">
                            <IoIosArrowRoundBack className="size-6 text-primary" />
                        </a>
                        <a href={(index + 2 > images.length ? "#slide1" : "#slide" + (index + 2))} className="btn border-primary px-4 py-4 rounded-2xl opacity-45">
                            <IoIosArrowRoundForward className="size-6 text-primary" />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

const GalleryModal: React.FC<{ setModalIsOpen: (val: boolean) => void, directory: string, images?: StaticImageData[] }> = ({ setModalIsOpen, directory, images }) => {
    if (!images) {
        const importAll = (r: any, folder: string) => { return r.keys().filter((path: string) => path.startsWith(`./${folder}`)).map(r) }
        images = importAll(require.context(`/public`, true, /\.(png|jpe?g)$/), directory)
    }

    return (
        <>
            <div id="my_modal_1" className="modal modal-top modal-open top-0 left-0 h-full max-h-full pt-17 md:pt-24 lg:pt-24 xl:pt-25">
                <div className="modal-box w-full max-w-screen h-full px-7">
                    <Carousel setModalIsOpen={setModalIsOpen} images={images!} />
                    {/* <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            
                        </form>
                    </div> */}
                </div>
            </div>
        </>
    )
}
export default GalleryModal;