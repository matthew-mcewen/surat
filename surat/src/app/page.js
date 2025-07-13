import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-300 to-slate-400/60 dark:from-slate-900 dark:to-slate-900/60 text-zinc-900 font-['Outfit'] dark:text-zinc-200">
      <div id="head" className="container mx-auto py-3">
        <h1 className="text-4xl text-center pb-2">Surat Batak</h1>
        <nav className="flex flex-row justify-between px-2">
          <div id="left">
            <i className="bi-translate text-lg pr-2"></i> English
          </div>
          <div id="center">
            <ul className="flex flex-row justify-center sm:gap-x-12 md:gap-x-24 lg:gap-x-28 text-xl font-light">
              <li>Learn More</li>
              <li>Resources</li>
              <li>Write Your Name</li>
            </ul>
          </div>
          <div id="right">
            <i className="bi-gear-fill text-lg pr-2"></i>
            <i className="bi-palette text-lg pr-2"></i>
          </div>
        </nav>
      </div>
      <div id="content-zone" className="container mx-auto">
        <div id="surat-area" className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-1 md:gap-3 lg:gap-6 xl:gap-8 py-4 text-center select-none">
          <div className="card-letter">
            <h3 className="font-['Batak'] text-9xl">ᯀ</h3>
            <div className="grid grid-cols-3 pt-2">
              <div id="listen">
                <span className="cursor-pointer">
                  <i className="bi-volume-up text-sm pr-1"></i> Listen
                </span>
              </div>
              <div id="translit">
                <i className="bi-alphabet px-1"></i> a
              </div>
              <div id="copy">
                <span className="cursor-pointer">
                  <i className="bi-clipboard-plus text-sm pr-1"></i> Copy
                </span>
              </div>
            </div>
          </div>
          <div className="card-letter">
            <h3 className="font-['Batak'] text-9xl">ᯂ</h3>
            <div className="grid grid-cols-3 pt-2">
              <div id="listen">
                <span className="cursor-pointer">
                  <i className="bi-volume-up text-sm pr-1"></i> Listen
                </span>
              </div>
              <div id="translit">
                <i className="bi-alphabet px-1"></i> ha / ka
              </div>
              <div id="copy">
                <span className="cursor-pointer">
                  <i className="bi-clipboard-plus text-sm pr-1"></i> Copy
                </span>
              </div>
            </div>
          </div>
          <div className="card-letter">
            <h3 className="font-['Batak'] text-9xl">ᯅ</h3>
            <div className="grid grid-cols-3 pt-2">
              <div id="listen">
                <span className="cursor-pointer">
                  <i className="bi-volume-up text-sm pr-1"></i> Listen
                </span>
              </div>
              <div id="translit">
                <i className="bi-alphabet px-1"></i> ba
              </div>
              <div id="copy">
                <span className="cursor-pointer">
                  <i className="bi-clipboard-plus text-sm pr-1"></i> Copy
                </span>
              </div>
            </div>
          </div>
          <div className="card-letter">
            <h3 className="font-['Batak'] text-9xl">ᯇ</h3>
            <div className="grid grid-cols-3 pt-2">
              <div id="listen">
                <span className="cursor-pointer">
                  <i className="bi-volume-up text-sm pr-1"></i> Listen
                </span>
              </div>
              <div id="translit">
                <i className="bi-alphabet px-1"></i> pa
              </div>
              <div id="copy">
                <span className="cursor-pointer">
                  <i className="bi-clipboard-plus text-sm pr-1"></i> Copy
                </span>
              </div>
            </div>
          </div>
          <div className="card-letter">
            <h3 className="font-['Batak'] text-9xl">ᯉ</h3>
            <div className="grid grid-cols-3 pt-2">
              <div id="listen">
                <span className="cursor-pointer">
                  <i className="bi-volume-up text-sm pr-1"></i> Listen
                </span>
              </div>
              <div id="translit">
                <i className="bi-alphabet px-1"></i> na
              </div>
              <div id="copy">
                <span className="cursor-pointer">
                  <i className="bi-clipboard-plus text-sm pr-1"></i> Copy
                </span>
              </div>
            </div>
          </div>
          <div className="card-letter">
            <h3 className="font-['Batak'] text-9xl">ᯋ</h3>
            <div className="grid grid-cols-3 pt-2">
              <div id="listen">
                <span className="cursor-pointer">
                  <i className="bi-volume-up text-sm pr-1"></i> Listen
                </span>
              </div>
              <div id="translit">
                <i className="bi-alphabet px-1"></i> wa
              </div>
              <div id="copy">
                <span className="cursor-pointer">
                  <i className="bi-clipboard-plus text-sm pr-1"></i> Copy
                </span>
              </div>
            </div>
          </div>
          <div className="card-letter">
            <h3 className="font-['Batak'] text-9xl">ᯎ</h3>
            <div className="grid grid-cols-3 pt-2">
              <div id="listen">
                <span className="cursor-pointer">
                  <i className="bi-volume-up text-sm pr-1"></i> Listen
                </span>
              </div>
              <div id="translit">
                <i className="bi-alphabet px-1"></i> ga
              </div>
              <div id="copy">
                <span className="cursor-pointer">
                  <i className="bi-clipboard-plus text-sm pr-1"></i> Copy
                </span>
              </div>
            </div>
          </div>
          <div className="card-letter">
            <h3 className="font-['Batak'] text-9xl">ᯐ</h3>
            <div className="grid grid-cols-3 pt-2">
              <div id="listen">
                <span className="cursor-pointer">
                  <i className="bi-volume-up text-sm pr-1"></i> Listen
                </span>
              </div>
              <div id="translit">
                <i className="bi-alphabet px-1"></i> dja
              </div>
              <div id="copy">
                <span className="cursor-pointer">
                  <i className="bi-clipboard-plus text-sm pr-1"></i> Copy
                </span>
              </div>
            </div>
          </div>
          <div className="card-letter">
            <h3 className="font-['Batak'] text-9xl">ᯑ</h3>
            <div className="grid grid-cols-3 pt-2">
              <div id="listen">
                <span className="cursor-pointer">
                  <i className="bi-volume-up text-sm pr-1"></i> Listen
                </span>
              </div>
              <div id="translit">
                <i className="bi-alphabet px-1"></i> da
              </div>
              <div id="copy">
                <span className="cursor-pointer">
                  <i className="bi-clipboard-plus text-sm pr-1"></i> Copy
                </span>
              </div>
            </div>
          </div>
          <div className="card-letter">
            <h3 className="font-['Batak'] text-9xl">ᯒ</h3>
            <div className="grid grid-cols-3 pt-2">
              <div id="listen">
                <span className="cursor-pointer">
                  <i className="bi-volume-up text-sm pr-1"></i> Listen
                </span>
              </div>
              <div id="translit">
                <i className="bi-alphabet px-1"></i> ra
              </div>
              <div id="copy">
                <span className="cursor-pointer">
                  <i className="bi-clipboard-plus text-sm pr-1"></i> Copy
                </span>
              </div>
            </div>
          </div>
          <div className="card-letter">
            <h3 className="font-['Batak'] text-9xl">ᯔ</h3>
            <div className="grid grid-cols-3 pt-2">
              <div id="listen">
                <span className="cursor-pointer">
                  <i className="bi-volume-up text-sm pr-1"></i> Listen
                </span>
              </div>
              <div id="translit">
                <i className="bi-alphabet px-1"></i> ma
              </div>
              <div id="copy">
                <span className="cursor-pointer">
                  <i className="bi-clipboard-plus text-sm pr-1"></i> Copy
                </span>
              </div>
            </div>
          </div>
          <div className="card-letter">
            <h3 className="font-['Batak'] text-9xl">ᯖ</h3>
            <div className="grid grid-cols-3 pt-2">
              <div id="listen">
                <span className="cursor-pointer">
                  <i className="bi-volume-up text-sm pr-1"></i> Listen
                </span>
              </div>
              <div id="translit">
                <i className="bi-alphabet px-1"></i> ta
              </div>
              <div id="copy">
                <span className="cursor-pointer">
                  <i className="bi-clipboard-plus text-sm pr-1"></i> Copy
                </span>
              </div>
            </div>
          </div>
          <div className="card-letter">
            <h3 className="font-['Batak'] text-9xl">ᯘ</h3>
            <div className="grid grid-cols-3 pt-2">
              <div id="listen">
                <span className="cursor-pointer">
                  <i className="bi-volume-up text-sm pr-1"></i> Listen
                </span>
              </div>
              <div id="translit">
                <i className="bi-alphabet px-1"></i> sa
              </div>
              <div id="copy">
                <span className="cursor-pointer">
                  <i className="bi-clipboard-plus text-sm pr-1"></i> Copy
                </span>
              </div>
            </div>
          </div>
          <div className="card-letter">
            <h3 className="font-['Batak'] text-9xl">ᯛ</h3>
            <div className="grid grid-cols-3 pt-2">
              <div id="listen">
                <span className="cursor-pointer">
                  <i className="bi-volume-up text-sm pr-1"></i> Listen
                </span>
              </div>
              <div id="translit">
                <i className="bi-alphabet px-1"></i> ya
              </div>
              <div id="copy">
                <span className="cursor-pointer">
                  <i className="bi-clipboard-plus text-sm pr-1"></i> Copy
                </span>
              </div>
            </div>
          </div>
          <div className="card-letter">
            <h3 className="font-['Batak'] text-9xl">ᯝ</h3>
            <div className="grid grid-cols-3 pt-2">
              <div id="listen">
                <span className="cursor-pointer">
                  <i className="bi-volume-up text-sm pr-1"></i> Listen
                </span>
              </div>
              <div id="translit">
                <i className="bi-alphabet px-1"></i> nga
              </div>
              <div id="copy">
                <span className="cursor-pointer">
                  <i className="bi-clipboard-plus text-sm pr-1"></i> Copy
                </span>
              </div>
            </div>
          </div>
          <div className="card-letter">
            <h3 className="font-['Batak'] text-9xl">ᯞ</h3>
            <div className="grid grid-cols-3 pt-2">
              <div id="listen">
                <span className="cursor-pointer">
                  <i className="bi-volume-up text-sm pr-1"></i> Listen
                </span>
              </div>
              <div id="translit">
                <i className="bi-alphabet px-1"></i> la
              </div>
              <div id="copy">
                <span className="cursor-pointer">
                  <i className="bi-clipboard-plus text-sm pr-1"></i> Copy
                </span>
              </div>
            </div>
          </div>
          <div className="card-letter">
            <h3 className="font-['Batak'] text-9xl">ᯠ</h3>
            <div className="grid grid-cols-3 pt-2">
              <div id="listen">
                <span className="cursor-pointer">
                  <i className="bi-volume-up text-sm pr-1"></i> Listen
                </span>
              </div>
              <div id="translit">
                <i className="bi-alphabet px-1"></i> nya
              </div>
              <div id="copy">
                <span className="cursor-pointer">
                  <i className="bi-clipboard-plus text-sm pr-1"></i> Copy
                </span>
              </div>
            </div>
          </div>
          <div className="card-letter">
            <h3 className="font-['Batak'] text-9xl">ᯤ</h3>
            <div className="grid grid-cols-3 pt-2">
              <div id="listen">
                <span className="cursor-pointer">
                  <i className="bi-volume-up text-sm pr-1"></i> Listen
                </span>
              </div>
              <div id="translit">
                <i className="bi-alphabet px-1"></i> i
              </div>
              <div id="copy">
                <span className="cursor-pointer">
                  <i className="bi-clipboard-plus text-sm pr-1"></i> Copy
                </span>
              </div>
            </div>
          </div>
          <div className="card-letter">
            <h3 className="font-['Batak'] text-9xl">ᯥ</h3>
            <div className="grid grid-cols-3 pt-2">
              <div id="listen">
                <span className="cursor-pointer">
                  <i className="bi-volume-up text-sm pr-1"></i> Listen
                </span>
              </div>
              <div id="translit">
                <i className="bi-alphabet px-1"></i> u
              </div>
              <div id="copy">
                <span className="cursor-pointer">
                  <i className="bi-clipboard-plus text-sm pr-1"></i> Copy
                </span>
              </div>
            </div>
          </div>
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
