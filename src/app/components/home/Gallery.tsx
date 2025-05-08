"use client"

import Image, { StaticImageData } from "next/image"
import { useState } from "react"
import GalleryModal from "./GalleryModal"
import { useRouter } from "next/navigation"

const GalleryImage: React.FC<{ image: StaticImageData, carouselIndex:number, setModalOpen: (val: boolean) => void }> = ({ image, carouselIndex, setModalOpen }) => {
    const router = useRouter()

    return (
        <figure onClick={
            () => {
                setModalOpen(true)
                router.push(`#slide${carouselIndex}`)
            }
        } className="relative w-52.5 h-47 md:size-full shrink-0 overflow-hidden after:absolute after:size-full after:top-0 hover:after:bg-[#FFFFFF44] hover:cursor-pointer after:transition-all after:duration-300">
            <Image fill src={image} alt="bar image" />
        </figure>
    )
}

const Gallery: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const importAll = (r: any) => { return r.keys().map(r) }
    const images = importAll(require.context("/public/gallery", false, /\.(png|jpe?g)$/))

    return (
        <>
            {modalIsOpen && <GalleryModal directory="" setModalIsOpen={setModalIsOpen} images={images} />}
            <div className="flex flex-row md:grid grid-cols-3 xl:grid-cols-[repeat(3,_370px)] md:auto-rows-[200px] lg:auto-rows-[330px] xl:auto-rows-[358px] gap-2.5 md:gap-4 xl:gap-5 overflow-x-scroll md:overflow-visible justify-center">
                {
                    images.map((image: any, index: number) => <GalleryImage setModalOpen={setModalIsOpen} carouselIndex={index+1} key={"bar-image-" + index} image={image} />)
                }
            </div>
        </>
    )
}

export default Gallery;