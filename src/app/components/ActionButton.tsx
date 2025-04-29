import Link from "next/link"
import { ReactNode } from "react"
import { Open_Sans } from "next/font/google"
import DomainLink from "./DomainLink"

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"]
})

interface Props {
    className?: string
    children: ReactNode
    to: string
}

const ActionButton: React.FC<Props> = ({ className, children, to }) => {

    return (
        <Link href={to} className={openSans.className + " btn min-w-26.5 md:min-w-36 lg:min-w-44 text-[0.6rem] md:text-sm lg:text-base font-normal h-8 md:h-12 lg:h-14 py-2 md:py-3 lg:py-4 border-none shadow-none rounded-full hover:scale-105 transition-all ease-in-out duration-300 " + className}>
            {children}
        </Link>
    )
}

export const DomainActionButton: React.FC<Props> = ({className, children, to}) => {

    return (
        <DomainLink subDomain={to} className={openSans.className + " btn min-w-26.5 md:min-w-36 lg:min-w-44 text-[0.6rem] md:text-sm lg:text-base font-normal h-8 md:h-12 lg:h-14 py-2 md:py-3 lg:py-4 border-none shadow-none rounded-full hover:scale-105 transition-all ease-in-out duration-300 " + className}>
            {children}
        </DomainLink>
    )
}

export default ActionButton