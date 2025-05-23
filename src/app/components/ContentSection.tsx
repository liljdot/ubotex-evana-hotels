import { Content } from "next/font/google"
import { ReactNode } from "react"

interface ContentSectionProps {
    children: ReactNode
    noPadding?: boolean
    className?: string
    id?: string
}

interface HeadingProps {
    children: string
    className?: string
}

interface TextProps {
    children: string
    className?: string
}

const ContentSection: React.FC<ContentSectionProps> & {
    Heading: React.FC<HeadingProps>
    Text: React.FC<TextProps>
} = ({ children, noPadding, className, id }) => {

    return (
        <section
            id={id}
            className={`bg-neutral flex flex-col
            ${!noPadding && "px-11 md:px-16 lg:px-32 xl:px-49"} 
            ${className}`}>
            {children}
        </section>
    )
}

const Heading: React.FC<HeadingProps> = ({ children, className }) => {
    return (
        <h1 className={"text-primary text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold " + className}>
            {children}
        </h1>
    )
}

const Text: React.FC<TextProps> = ({ children, className }) => {

    return (
        <p className={"text-sm lg:text-base text-base-content md:font-semibold text-justify " +  className}>
            {children}
        </p>
    )
}

ContentSection.Heading = Heading
ContentSection.Text = Text

export default ContentSection;