import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import GlyphArea from "@/app/letters/letters";

export default function Home() {
    return (
        <>
            <div className="container mx-auto py-3">
                <h1 className="text-4xl text-center pb-2">
                    Surat Batak
                </h1>
                <nav className="flex flex-row justify-between px-2">
                    <div>
                        <i className="bi-translate text-lg pr-2" />
                        English
                    </div>
                    <div>
                        <ul className="flex flex-row justify-center sm:gap-x-12 md:gap-x-24 lg:gap-x-28 text-xl font-light">
                            <li>Write My Name</li>
                            <li>Learn More</li>
                        </ul>
                    </div>
                    <div>
                        <i className="bi-cup-hot text-lg pr-2"/>
                        Donate
                    </div>
                </nav>
            </div>
            <div className="container mx-auto flex flex-col gap-2">
                <GlyphArea/>
                <footer id={"footer"}>
                    <ul>
                    <li>Unicode</li>
                    <li>Anki</li>
                    <li>Glottolog</li>
                    <li>Tag us on Bluesky</li>
                    </ul>
                </footer>
            </div>
        </>
    );
}
