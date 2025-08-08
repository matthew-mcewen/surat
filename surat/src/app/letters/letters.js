"use client";
import { ALL_GLYPHS } from "@/app/letters/array";
import { useEffect, useState } from "react";

export default function GlyphArea() {
    const [dialect,setDialect] = useState("");
    return (
        <>
            <SelectGlyphs setDialect={ setDialect } />
            <div id="surat-area" className="grid grid-cols-4 md:grid-cols-7 xl:grid-cols-8 gap-1.5 text-center select-none">
                <GlyphList dialect={ dialect } />
            </div>
        </>
    )
}

export function GlyphCard({ batakGlyph,latinGlyph,ipaGlyph }) {
    const [copied,setCopied] = useState(false);
    const audio = document.createElement(`audio`);
    audio.setAttribute(`src`,`audio/${ latinGlyph }.mp3`);
    audio.setAttribute(`className`,`hidden`);
    return (
        <>
            <div id={"glyphtiles"} className="w-full aspect-square z-10 group relative overflow-hidden card-letter bg-[#83c9f4]/30 dark:bg-[#a3d5ff]/20 dark:hover:bg-[#a3d5ff]/30 flex flex-col justify-items-center">
                <h3 className="font-['Batak'] text-5xl lg:text-6xl xl:text-7xl p-1.5 m-auto">
                    { batakGlyph }
                </h3>
                <div className={"peer absolute left-0 top-0 w-full h-full hover:bg-[#a3d5ff]/90 dark:hover:bg-[#00487C]/90 text-transparent hover:text-[#00487C] dark:hover:text-[#a3d5ff] transition ease-in-out"}>
                    <div className={"flex flex-col justify-items-center h-full w-fit m-auto text-center xl:text-base"}>
                        <button
                            onClick={(e) => audio.play()}
                            className={"flex flex-row gap-2 h-full w-full justify-between cursor-point"}
                        >
                            <i className="bi-soundwave m-auto"/>
                            <p className={"m-auto"}>Listen</p>
                        </button>
                        <div className={"text-lg xl:text-2xl flex flex-row gap-2 h-full w-full justify-between"}>
                            <i className="bi-alphabet m-auto"/>
                            <p className={"m-auto"}>{ latinGlyph }</p>
                        </div>
                        { (copied) && (
                            <button
                                onClick={e => {
                                    navigator.clipboard.writeText(batakGlyph)
                                }}
                                className={"flex flex-row gap-2 h-full w-full justify-between"}
                            >
                                <i className="bi-clipboard-check-fill m-auto"/>
                                <p className={"m-auto"}>Copied!</p>
                            </button>
                        ) || (
                            <button
                                onClick={(e) => {
                                navigator.clipboard.writeText(batakGlyph)
                                .then(response => (setCopied(true)))
                                }}
                                className={"flex flex-row gap-2 h-full w-full justify-between"}
                            >
                                <i className="bi-clipboard-plus m-auto"/>
                                <p className={"m-auto"}>Copy</p>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

function GlyphList({ dialect }) {
    let glyphs = null;
    if (!dialect || dialect === "toba") {
        glyphs = ALL_GLYPHS.toba;
    } else {
        if (dialect === "karo") {
            glyphs = ALL_GLYPHS.karo;
        }
        if (dialect === "mandailing") {
            glyphs = ALL_GLYPHS.mandailing;
        }
        if (dialect === "pakpak") {
            glyphs = ALL_GLYPHS.pakpak;
        }
        if (dialect === "simalungun") {
            glyphs = ALL_GLYPHS.simalungun;
        }
    }
    return (
        <>
            { glyphs && glyphs.map((g, index) => (
                <GlyphCard key={index} batakGlyph={g.batakGlyph} latinGlyph={g.latinGlyph}/>
            ))}
            { (!glyphs || !glyphs.length) && (
                <div className={"text-center text-2xl font-light w-full col-span-12"}>
                    Oops! Content not found
                    <p className={"text-lg"}>Try re-loading the page</p>
                </div>
            )}
        </>
    )
}

function SelectGlyphs({ setDialect }) {
    return (
        <>
            <div className={"flex w-full"}>
                <select
                    defaultValue={"toba"}
                    onChange={(e) => setDialect(e.target.value)}
                    className={"w-full lg:w-4/5 xl:w-1/2 text-2xl text-center font-light dark:bg-[#00487C] bg-[#d9f0ff] mx-auto border border-[#00487C] dark:border-[#d9f0ff] rounded-full p-1.5 px-4 font-sans tracking-wide"}
                >
                    <option value={"toba"}>Batak Toba</option>
                    <option value={"karo"}>Batak Karo</option>
                    <option value={"pakpak"}>Batak Pakpak</option>
                    <option value={"mandailing"}>Batak Mandailing</option>
                    <option value={"simalungun"}>Batak Simalungun</option>
                    <option value={"anak"}>Anak Si Surat (Diacritics)</option>
                </select>
            </div>
        </>
    )
}