"use client";
import {useEffect, useState} from "react";

export default function WriteMyName() {
    const [latinName, setLatinName] = useState("");
    const [transliteratedName, setTransliteratedName] = useState("");
    useEffect(() => {
        setTransliteratedName(transliterateToBatak(latinName))
    }, [latinName])
    return (
        <>
            <div id={"writemyname"} className={"flex flex-col gap-1.5 lg:w-4/5 xl:w-1/2 mx-auto"}>
                <h3 className={"text-xl md:text-3xl font-light flex gap-2 w-fit mx-auto tracking-wide"}>
                    <i className={"bi-person-raised-hand text-xl my-auto"}/>
                    How to write my name in Batak Script?
                </h3>
                <input
                    type={"text"}
                    onChange={(e) => setLatinName(e.target.value)}
                    className={"rounded-full p-1.5 px-3 bg-transparent border placeholder-[#d9f0ff] text-center"} placeholder={"👋 What's your name in English?"}
                />
                <p className={"text-xs text-center tracking-wide"}>Note: We don't store or save this data &mdash; once you leave, it's deleted forever</p>
                <div className={"rounded-xl overflow-hidden flex flex-col"}>
                    <div className={"w-full h-1/4 bg-[#83c9f4]/30 dark:bg-[#a3d5ff]/20 dark:hover:bg-[#a3d5ff]/30 flex flex-col justify-items-center p-1.5 text-center"}>
                        <h4 className={"text-xl py-1 pt-0"}>Hello, my name is &hellip;</h4>
                        <div className={"z-20 card-letter bg-[#83c9f4]/30 dark:bg-[#a3d5ff]/20 dark:hover:bg-[#a3d5ff]/30 flex flex-col justify-items-center text-center"}>
                            <h4 className={"text-5xl"}>
                                { transliteratedName || `...` }
                            </h4>
                        </div>
                    </div>
                </div>
                <p className={"text-xs text-center tracking-wide inline-flex gap-2 mx-auto"}>
                    <i className={"bi-exclamation-triangle"}/>
                    This feature is in beta and might not work perfectly!
                </p>
            </div>
        </>
    )
}

// 1. Canonical syllable to Batak mapping
const batakSyllables = {
    // REGULAR SYLLABLES
    'B':'ᯅ᯲','BA': 'ᯅ', 'BE': 'ᯅ', 'BI': 'ᯅᯪ', 'BO': 'ᯅᯬ', 'BU': 'ᯅᯮ',
    'K':'ᯂ᯲','KA': 'ᯂ', 'KE': 'ᯂ', 'KI': 'ᯂᯪ', 'KO':'ᯂᯬ', 'KU': 'ᯂᯮ',
    'G':'ᯎ᯲','GA': 'ᯎ', 'GE': 'ᯎᯧ', 'GI': 'ᯎᯪ', 'GO': 'ᯎᯬ', 'GU': 'ᯎᯮ',
    'HA': 'ᯂ', 'HE': 'ᯂᯧ', 'HI': 'ᯂᯪ', 'HO':'ᯂᯬ', 'HU': 'ᯂᯮ',
    'D':'ᯑ᯲','DA': 'ᯑ', 'DE': 'ᯑᯧ', 'DI': 'ᯑᯪ', 'DO': 'ᯑᯬ', 'DU': 'ᯑᯮ',
    'S':'ᯘ᯲','SA': 'ᯘ', 'SE': 'ᯘᯧ', 'SI': 'ᯘᯪ', 'SO': 'ᯘᯬ', 'SU': 'ᯘᯮ',
    'P':'ᯇ᯲','PA': 'ᯇ', 'PE': 'ᯇᯧ', 'PI': 'ᯇᯪ', 'PO': 'ᯇᯬ', 'PU': 'ᯇᯮ',
    'T':'ᯖ᯲','TA': 'ᯖ', 'TE': 'ᯖᯧ', 'TI': 'ᯖᯪ', 'TO':'ᯖᯬ', 'TU': 'ᯖᯮ',
    'J':'ᯐ᯲','JA': 'ᯐ', 'JE': 'ᯐᯧ', 'JI': 'ᯐᯪ', 'JO': 'ᯐᯬ','JU': 'ᯐᯮ',
    'M':'ᯔ᯲','MA': 'ᯔ', 'ME': 'ᯔᯧ',  'MI': 'ᯔᯪ', 'MO': 'ᯔᯬ',  'MU':'ᯔᯮ',
    'N':'ᯉ᯲','NA': 'ᯉ', 'NE': 'ᯉᯧ', 'NI': 'ᯉᯪ', 'NO': 'ᯉᯬ',  'NU': 'ᯉᯮ',
    'NYA': 'ᯠ', 'NYE': 'ᯠᯧ', 'NYI': 'ᯠᯪ', 'NYO': 'ᯠᯬ', 'NYU': 'ᯠᯮ',
    'L':'ᯞ᯲','LA': 'ᯞ', 'LE': 'ᯞᯧ', 'LI': 'ᯞᯪ', 'LO':'ᯞᯬ', 'LU': 'ᯞᯮ',
    'YA': 'ᯛ᯲', 'YE': 'ᯛᯧ', 'YI': 'ᯛᯪ', 'YO': 'ᯛᯬ', 'YU': 'ᯛᯮ',
    'R':'ᯒ᯲','RA':'ᯒ','RE':'ᯒᯧ','RI':'ᯒᯪ','RO':'ᯒᯬ','RU':'ᯒ',
    'A':'ᯀ','E':'ᯀᯧ','I':'ᯤ','O':'ᯀᯬ','U':'ᯥ',

    // CONSONANT CLUSTER HANDLING
    'KS':'ᯂ᯲ᯘ᯲', 'KSA':'ᯂ᯲ᯘ','KSE':'ᯂ᯲ᯘᯧ','KSI':'ᯂ᯲ᯘᯪ','KSO':'ᯂ᯲ᯘᯬ','KSU':'ᯂ᯲ᯘᯮ',
    'TS':'ᯖ᯲ᯘ᯲','TSA':'ᯖ᯲ᯘ','TSE':'ᯖ᯲ᯘ','TSI':'ᯖ᯲ᯘ','TSO':'ᯖ᯲ᯘ','TSU':'ᯖ᯲ᯘ',
    'TR':'ᯖ᯲ᯒ᯲','TRA':'ᯖ᯲ᯒ','TRE':'ᯖ᯲ᯒ','TRI':'ᯖ᯲ᯒ','TRO':'ᯖ᯲ᯒ','TRU':'ᯖ᯲ᯒ',
};

// 2. Aliases map: alternate spellings → canonical
const aliasMap = {
    // vowel compounds/diphthongs
    'AA':'A','IE':'I','EI':'I','EE':'I','UU':'U','OO':'U','OE':'U','Y':'I',
    // BA family
    'BH': 'B',
    // KA family
    'KK':'K',
    // HA family → K
    'KHA': 'K',
    // GA family
    'GG': 'G',
    'GH': 'G',
    // DA family
    'DD': 'D',
    'DH': 'D',
    // SA
    'Z': 'S',
    'SH': 'S',
    // PA
    'PH':'P',
    'F': 'P',
    'WH': 'P',
    'W': 'P',
    // TA
    'TH': 'T',
    'TT': 'T',
    // JA
    'ZH': 'J',
    'CH': 'J',
    'DJ': 'J',
    // TSA
    'ZZ': 'TS',
    // MA,
    'MM': 'M',
    // NA
    'NN': 'N',
    // NYA
    'Ñ': 'NY',
    'NH': 'NY',
    'GN': 'NY',
    // LA
    'LH': 'L',
    'LL': 'L',
    // RA
    'RR': 'R',
    // X
    'X':'KS',
};

// 3. Transliteration Function
function transliterateToBatak(input) {
    if (!input) return '';

    const cleaned = input
        .toUpperCase()
        .replace(/[<>{}[\]()/\\'"&]/g, '') // strip HTML/JS-sensitive chars
        .replace(/\s+/g, ' ')
        .trim();

    const words = cleaned.split(' ');

    const transliterated = words.map(word => {
        let output = '';
        let i = 0;
        while (i < word.length) {
            let syllable = word.slice(i, i + 3); // try tri-graph
            if (aliasMap[syllable]) syllable = aliasMap[syllable];
            if (!batakSyllables[syllable]) {
                syllable = word.slice(i, i + 2); // try digraph
                if (aliasMap[syllable]) syllable = aliasMap[syllable];
            }
            if (!batakSyllables[syllable]) {
                syllable = word.slice(i, i + 1); // fallback
                if (aliasMap[syllable]) syllable = aliasMap[syllable];
            }

            if (batakSyllables[syllable]) {
                output += batakSyllables[syllable];
                i += syllable.length;
            } else {
                i++; // skip unrecognized char
            }
        }
        return output;
    });

    return transliterated.join(' ');
}
