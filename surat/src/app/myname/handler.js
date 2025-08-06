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

function transliterateToBatak(input) {
    if (typeof input !== 'string') return '';
    const baseMap = {
        b: 'ᯅ', p: 'ᯇ', t: 'ᯖ', d: 'ᯑ', g: 'ᯄ',
        m: 'ᯔ', n: 'ᯉ', l: 'ᯞ', s: 'ᯘ', r: 'ᯒ',
        h: 'ᯂ', y: 'ᯛ', z: 'ᯑ', j: 'ᯐ', c: 'ᯐ', // for robustness
        x: 'ᯘ᯲ᯘ' // optional: 'x' as 'ks'
    };
    const anakSiSurat = {
        i: 'ᯪ', u: 'ᯬ', e: 'ᯫ', o: 'ᯮ'
    };
    const independentVowels = {
        a: 'ᯀ', i: 'ᯤ', u: 'ᯥ'
    };
    const virama = '᯲';
    // ✅ Step 1: Normalize input and apply cluster logic
    input = input.toLowerCase().normalize('NFC');
    // Cluster handling (in priority order to avoid conflict)
    input = input
        .replace(/ngg/g, 'ᯝᯎ')       // NGG → ᯝᯎ
        .replace(/ng/g, 'ᯝ')          // NG → ᯝ
        .replace(/zz/g, 'ᯑ')          // ZZ → ᯑ
        .replace(/zh/g, 'ᯐ')          // ZH → ᯐ
        .replace(/ch/g, 'ᯐ')          // CH → ᯐ
        .replace(/mc/g, 'ᯔᯂ᯲')       // MC → ᯔᯂ᯲
        .replace(/\b(h)/g, 'ᯂ')       // Word-initial H
        .replace(/(?<!\b)(h)(?![a-z])/g, '') // Remove non-initial Hs
    let result = '';
    let i = 0;
    while (i < input.length) {
        const c = input[i];
        const next = input[i + 1] || '';
        const prev = input[i - 1] || '';
        const prevIsConsonant = baseMap[prev] || ['ᯝ', 'ᯑ', 'ᯐ', 'ᯂ'].includes(prev); // include cluster glyphs
        // Skip doubled consonants (e.g., tt → t)
        if (c === next && baseMap[c]) {
            i++;
            continue;
        }
        // Handle custom glyphs already inserted (ᯝ, etc.)
        if (/ᯀ|ᯤ|ᯥ|ᯝ|ᯎ|ᯑ|ᯐ|ᯔᯂ᯲/.test(c)) {
            result += c;
            i++;
            continue;
        }
        // Consonant + vowel
        if (baseMap[c] && (anakSiSurat[next] !== undefined || next === 'a')) {
            result += baseMap[c];
            if (next !== 'a') result += anakSiSurat[next]; // skip anak si surat for inherent a
            i += 2;
            continue;
        }
        // Standalone consonant (final or pre-consonant)
        if (baseMap[c]) {
            const isFinal = (
                !next ||
                !/[a-z]/.test(next) ||
                (baseMap[next] && next !== c)
            );

            result += baseMap[c];
            if (isFinal) result += virama;
            i++;
            continue;
        }
        // Vowel at start or after non-consonant
        if ('aeiou'.includes(c)) {
            const isInitial = i === 0 || !prevIsConsonant;
            if (isInitial) {
                result += independentVowels[c] || (independentVowels['a'] + (anakSiSurat[c] || ''));
            }
            // If not initial, it's unhandled — you can refine this for mid-word vowels later
            i++;
            continue;
        }
        // Fallback for punctuation/space
        result += c;
        i++;
    }
    return result;
}
