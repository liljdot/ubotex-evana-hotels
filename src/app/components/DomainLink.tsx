"use client"

import Link from "next/link"
import { ReactNode, useEffect, useState } from "react"

interface Props {
    subDomain: string
    className?: string
    children: ReactNode
}

const DomainLink: React.FC<Props> = ({ className, subDomain, children }) => {
    const [hostname, setHostname] = useState<string>("")
    const urlArr = hostname.split(".")

    if (urlArr.length < 3) {
        urlArr.unshift(subDomain)
    } else {
        urlArr[0] = subDomain
    }

    const url = urlArr.join(".")

    useEffect(() => {
        setHostname(window.location.hostname)
    }, [])

    return (
        <Link href={"https://" + url} className={""+className}>{children}</Link>
    )
}

export default DomainLink