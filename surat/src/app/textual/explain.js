"use client";
import { useState } from "react";

export default function HowItWorks() {
    const [revealed,setRevealed] = useState(false);
    return (
        <>
            <div id={"howitworks"} className={"lg:w-4/5 xl:w-1/2 mx-auto flex flex-col gap-1"}>
                <h3 className={"text-xl md:text-3xl font-light flex gap-2 w-fit mx-auto"}>
                    <i className={"bi-patch-question text-xl my-auto"}/>
                    How does it work?
                </h3>
                <div className={"lg:text-lg flex flex-col gap-1.5 py-1.5"}>
                    <p>
                        Surat Batak is the traditional script used to write the Bataknese languages of North Sumatra.
                        In the English alphabet, a letter represents any sound (vowel <span className={"font-medium"}>or</span> consonant).
                        By contrast, Surat Batak is an <span className={"font-medium"}>abugida:</span> each letter represents a syllable, with <span className={"font-medium"}>one consonant</span> + <span className={"font-medium"}>one vowel.</span>
                    </p>
                    <p>
                        Each letter has the "A" vowel by default. We can change the vowel by attaching an accent mark, called Anak Si Surat.
                        For example: <span className={"text-xl font-medium px-0.5"}>ᯖ</span> on its own is read as "ta", but if we write <span className={"text-xl medium px-0.5"}>ᯖᯬ</span> it becomes "to", and <span className={"text-xl font-medium px-0.5"}>ᯖᯪ</span> makes it "ti".
                    </p>
                    <p>
                        When you're ready &mdash; Using the Tiles above, try to understand this word written in Surat Batak:
                    </p>
                    { (!revealed && (
                        <button onClick={e => { setRevealed(true) }} className={"flex flex-col gap-1 w-fit mx-auto"}>
                            <span className={"text-2xl batak w-fit mx-auto"}>ᯘᯮᯒᯖ᯲ </span>
                            <span className={"w-fit mx-auto"}>Click to reveal&hellip;</span>
                        </button>
                    ) || (
                        <>
                            <p className={"w-fit mx-auto"}>
                                It reads "Surat"!
                            </p>
                            <div className={"grid grid-cols-3 w-fit mx-auto text-center gap-x-6"}>
                                <div className={"text-xl batak"}>ᯘᯮ </div>
                                <div className={"text-xl batak"}>ᯒ</div>
                                <div className={"text-xl batak"}>ᯖ᯲</div>
                                <div>su</div>
                                <div>ra</div>
                                <div>t</div>
                            </div>
                            <p>
                                Surat means "letter" or "writing". So, "Surat Batak" means "Bataknese Writing" &mdash; cool!
                            </p>
                            <p>
                                If you’d like to support this free app, please consider <span className={"font-medium"}>Donating</span> &mdash; and remember to share your progress with us on <span className={"font-medium"}>BlueSky</span> or <span className={"font-medium"}>Instagram</span>!
                            </p>
                        </>
                    )) }
                </div>
            </div>
        </>
    )
}