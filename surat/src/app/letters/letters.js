export function GlyphCard({ batakGlyph,latinGlyph }) {
    return (
        <div className="card-letter bg-[#83c9f4]/30 dark:bg-[#a3d5ff]/20 dark:hover:bg-[#a3d5ff]/30 flex flex-col justify-items-center">
            <h3 className="font-['Batak'] text-4xl lg:text-5xl xl:text-6xl">
                { batakGlyph }
            </h3>
            <div id="translit" className={"cursor-default"}>
                <i className="bi-alphabet px-1"/>
                { latinGlyph }
            </div>
        </div>
    )
}

export function GlyphList() {
    return (
        <>
            <GlyphCard batakGlyph={"ᯀ"} latinGlyph={"a"} />
            <GlyphCard batakGlyph={"ᯂ"} latinGlyph={"ha / ka"} />
            <GlyphCard batakGlyph={"ᯅ"} latinGlyph={"ba"} />
            <GlyphCard batakGlyph={"ᯉ"} latinGlyph={"na"} />
            <GlyphCard batakGlyph={"ᯇ"} latinGlyph={"pa"} />
            <GlyphCard batakGlyph={"ᯋ"} latinGlyph={"wa"} />
            <GlyphCard batakGlyph={"ᯎ"} latinGlyph={"ga"} />
            <GlyphCard batakGlyph={"ᯐ"} latinGlyph={"dja"} />
            <GlyphCard batakGlyph={"ᯑ"} latinGlyph={"da"} />
            <GlyphCard batakGlyph={"ᯒ"} latinGlyph={"ra"} />
            <GlyphCard batakGlyph={"ᯔ"} latinGlyph={"ma"} />
            <GlyphCard batakGlyph={"ᯖ"} latinGlyph={"ta"} />
            <GlyphCard batakGlyph={"ᯘ"} latinGlyph={"sa"} />
            <GlyphCard batakGlyph={"ᯛ"} latinGlyph={"ya"} />
            <GlyphCard batakGlyph={"ᯝ"} latinGlyph={"nga"} />
            <GlyphCard batakGlyph={"ᯞ"} latinGlyph={"la"} />
            <GlyphCard batakGlyph={"ᯠ"} latinGlyph={"nya"} />
            <GlyphCard batakGlyph={"ᯤ"} latinGlyph={"i"} />
            <GlyphCard batakGlyph={"ᯥ"} latinGlyph={"u"} />
        </>
    )
}