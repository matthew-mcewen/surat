
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import { GlyphList } from "@/app/letters/letters";

export default function Home() {
  return (
    <div className="font-['Outfit']">
      <div className="container mx-auto py-3">
        <h1 className="text-4xl text-center pb-2">Surat Batak</h1>
        <nav className="flex flex-row justify-between px-2">
          <div id="left">
            <i className="bi-translate text-lg pr-2" /> English
          </div>
          <div id="center">
            <ul className="flex flex-row justify-center sm:gap-x-12 md:gap-x-24 lg:gap-x-28 text-xl font-light">
              <li>Write Your Name</li>
              <li>Learn More</li>
            </ul>
          </div>
          <div id="right">
            <i className="bi-gear-fill text-lg pr-2"></i>
            <i className="bi-palette text-lg pr-2"></i>
          </div>
        </nav>
      </div>
      <div id="content-zone" className="container mx-auto">
        <div id="surat-area" className="grid grid-cols-3 md:grid-cols-7 lg:grid-cols-6 xl:grid-cols-7 gap-1.5 text-center select-none">
          <GlyphList/>
        </div>
        <div className="grid sm:grid cols-2 md:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2 md:col-span-2 lg:col-span-6 text-center">
            <h4 className="text-3xl">Anak si Surat</h4>
          </div>
        </div>
        <div id="resources-area" className="">
          <ul>
            <li>Unicode</li>
            <li>Anki</li>
            <li>Glottolog</li>
            <li>Tag us on Bluesky</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
