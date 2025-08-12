"use client";
import { ALL_GLYPHS,ALL_DIACRITICS } from "@/app/letters/array";
import { useEffect, useState } from "react";
import useSound from "use-sound";

export default function GlyphArea() {
    const [dialect,setDialect] = useState("");
    const [diacritic, setDiacritic] = useState("");
    return (
        <>
            <SelectGlyphs setDialect={ setDialect } />
            <SelectDiacritic dialect={ dialect } setDiacritic={ setDiacritic } />
            <div id="surat-area" className="grid grid-cols-4 md:grid-cols-7 xl:grid-cols-8 gap-1.5 text-center select-none">
                <GlyphList dialect={ dialect } diacritic={ diacritic } />
            </div>
        </>
    )
}


export function GlyphCard({ batakGlyph,latinGlyph,ipaGlyph,diacritic }) {
    const [copied,setCopied] = useState(false);
    const [play] = useSound(`/audio/${latinGlyph}.mp3`);
    return (
        <>
            <div id={"glyphtiles"} className="w-full aspect-square z-10 group relative overflow-hidden card-letter bg-[#83c9f4]/30 dark:bg-[#a3d5ff]/20 dark:hover:bg-[#a3d5ff]/30 flex flex-col justify-items-center">
                <h3 className="font-['Batak'] text-5xl lg:text-6xl xl:text-7xl p-1.5 m-auto">
                    { (!diacritic) && (
                        { batakGlyph }
                    ) || (
                        <>
                            { batakGlyph }{ diacritic }
                        </>
                    )}
                </h3>
                <div className={"peer absolute left-0 top-0 w-full h-full hover:bg-[#a3d5ff]/90 dark:hover:bg-[#00487C]/90 text-transparent hover:text-[#00487C] dark:hover:text-[#a3d5ff] transition ease-in-out"}>
                    <div className={"flex flex-col justify-items-center h-full w-fit m-auto text-center xl:text-base"}>
                        <button
                            onClick={e => (play)}
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

function GlyphList({ dialect,diacritic }) {
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
                <GlyphCard key={index} batakGlyph={g.batakGlyph} latinGlyph={g.latinGlyph} diacritic={ diacritic } />
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

function SelectDiacritic({ dialect, setDiacritic }) {
    let diacritics = null;
    if (!dialect || dialect === "toba") {
        diacritics = ALL_DIACRITICS.toba;
    } else {
        if (dialect === "karo") {
            diacritics = ALL_DIACRITICS.karo;
        }
        if (dialect === "mandailing") {
            diacritics = ALL_DIACRITICS.mandailing;
        }
        if (dialect === "pakpak") {
            diacritics = ALL_DIACRITICS.pakpak;
        }
        if (dialect === "simalungun") {
            diacritics = ALL_DIACRITICS.simalungun;
        }
    }
    return (
        <>
            <div className={`grid grid-cols-${8} gap-2 mx-auto justify-center items-center`}>
                { diacritics && diacritics.map((d, index) => (
                    <>
                        <div className={"flex gap-2 card-letter"}>
                            <input type={"radio"} name={"diacritic"} value={ d } onSelect={e => {setDiacritic(e.target.value)}} />
                            <label htmlFor={`diacritic-${ d.diacritic }`} className={"flex flex-row gap-1"}>
                                &mdash;{ d.final }
                            </label>
                        </div>
                    </>
                ))}
            </div>
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