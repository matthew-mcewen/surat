import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import GlyphArea from "@/app/letters/letters";
import WriteMyName from "@/app/myname/handler";
import HowItWorks from "@/app/textual/explain";
import Resources from "@/app/resources/handler";

export default function Home() {
    return (
        <>
            <div className="container mx-auto flex flex-col gap-4 py-2">
                <Navbar/>
                <GlyphArea/>
                <HowItWorks/>
                <WriteMyName/>
                <Resources/>
                <Footer/>
            </div>
        </>
    );
}

export function Navbar() {
    return (
        <>
            <nav className={"flex justify-between px-2 font-light"}>
                <h1 className="text-4xl text-center pb-2 tracking-wide">
                    Surat Batak
                </h1>
                <ul className="flex flex-row text-xl h-fit my-auto gap-4">
                    <a href={"/#writemyname"}>Write My Name</a>
                    <a href={"/#howitworks"}>How It Works</a>
                </ul>
                <div className={"flex flex-row gap-4 h-fit my-auto"}>
                    <div className={"flex gap-2"}>
                        <i className="bi-cup-hot text-lg my-auto"/>
                        <p className={"my-auto"}>Donate</p>
                    </div>
                    <div className={"flex gap-2"}>
                        <i className="bi-translate text-lg my-auto"/>
                        <p className={"my-auto"}>English</p>
                    </div>
                </div>
            </nav>
        </>
    )
}

export function Footer() {
    return (
        <>
            <footer id={"footer"} className={"flex flex-row justify-between px-4"}>
                <div className={"flex flex-col gap-0.5"}>
                    <a href={"/legal"}>Legal</a>
                    &copy; 2025 8gb.dev &mdash; all rights reserved
                </div>
                <div className={"grid grid-cols-2 gap-x-2"}>
                    <p>Bsky</p>
                    <i className={"bi-bluesky justify-self-end"}/>
                </div>
            </footer>
        </>
    )
}