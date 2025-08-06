import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import GlyphArea from "@/app/letters/letters";
import WriteMyName from "@/app/myname/handler";
import {HowItWorks} from "@/app/textual/explain";
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

function Navbar() {
    return (
        <>
            <h1 className="text-4xl text-center pb-2 tracking-wide">
                Surat Batak
            </h1>
            <nav className="flex flex-row justify-between px-2">
                <div className={"flex gap-2"}>
                    <i className="bi-translate text-lg my-auto"/>
                    <p className={"my-auto"}>English</p>
                </div>
                <div>
                    <ul className="flex flex-row justify-center sm:gap-x-12 md:gap-x-24 lg:gap-x-28 text-xl font-light">
                        <li>Write My Name</li>
                        <li>Learn More</li>
                    </ul>
                </div>
                <div className={"flex gap-2"}>
                    <i className="bi-cup-hot text-lg my-auto"/>
                    <p className={"my-auto"}>Donate</p>
                </div>
            </nav>
        </>
    )
}

function Footer() {
    return (
        <>
            <footer id={"footer"}>
                <ul>
                    <li>Unicode</li>
                    <li>Anki</li>
                    <li>Glottolog</li>
                    <li>Tag us on Bluesky</li>
                </ul>
            </footer>
        </>
    )
}