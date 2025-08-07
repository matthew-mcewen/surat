import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import GlyphArea from "@/app/letters/letters";
import WriteMyName from "@/app/myname/handler";
import HowItWorks from "@/app/textual/explain";
import Resources from "@/app/resources/handler";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="container mx-auto flex flex-col gap-4 py-2">
                <Navbar/>
                <GlyphArea/>
                <HowItWorks/>
                <WriteMyName/>
                <Resources/>
            </div>
            <Footer/>
        </>
    );
}

export function Navbar() {
    return (
        <>
            <nav className={"flex justify-between px-2 font-light select-none"}>
                <Link href={"/"} className="text-4xl text-center pb-2 tracking-wide w-fit">
                    Surat Batak
                </Link>
                <ul className="flex-row text-xl h-fit my-auto gap-4 flex justify-self-center">
                    <a href={"/#writemyname"}>Write My Name</a>
                    <a href={"/#howitworks"}>How It Works</a>
                </ul>
                <div className={"flex-row gap-4 h-fit my-auto hidden"}>
                    <div className={"flex gap-2"}>
                        <i className="bi-cup-hot text-lg my-auto"/>
                        <p className={"my-auto"}>Donate</p>
                    </div>
                    <div className={"flex gap-2"}>
                        <i className="bi-translate text-lg my-auto"/>
                        <p className={"my-auto"}>English</p>
                    </div>
                </div>
                {/*mobile menu - wip*/}
                {/*<div className={"flex lg:hidden relative w-1/2 justify-end"}>*/}
                {/*    <i className={"bi-list text-3xl my-auto peer self-end"}/>*/}
                {/*    <div className={"hidden peer-hover:flex w-full"}>*/}
                {/*        <div className={"absolute card-letter top-9 w-full"}>*/}
                {/*            mobi*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </nav>
        </>
    )
}

export function Footer() {
    return (
        <>
            <footer id={"footer"} className={"flex flex-row justify-between px-4 border-t w-full select-none p-2"}>
                <div className={"flex flex-col gap-0.5"}>
                    <Link href={"/legal"}>Legal, Terms &amp; Conditions</Link>
                    <p>All contents licensed under CC BY-SA 4.0 unless noted otherwise</p>
                    <p>Audio recordings &mdash; Peter Isolato (CC BY-SA 3.0)</p>
                </div>
                <Link href={"https://bsky.app/profile/batak.asia"} className={"grid grid-cols-2 gap-x-2"}>
                    <p>Bsky</p>
                    <i className={"bi-bluesky justify-self-end"}/>
                </Link>
            </footer>
        </>
    )
}