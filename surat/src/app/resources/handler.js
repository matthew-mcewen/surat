"use client";

export default function Resources() {
    return (
        <>
            <div className={"flex flex-col gap-1.5 lg:w-1/5 xl:w-1/2 mx-auto"}>
                <h3 className={"text-3xl mx-auto font-light tracking-wide"}>
                    <i className={"bi-list-nested"}/>
                    List of resources
                </h3>
                <div className={"card-letter flex flex-col"}>
                    <div className={"grid grid-cols-1 rounded-lg overflow-hidden"}>
                        <div className={"grid grid-cols-2 odd:bg-white/10 p-1.5 px-2.5"}>
                            <p className={"mx-auto"}>Anki Decks</p>
                        </div>
                        <div className={"grid grid-cols-2 odd:bg-white/10 p-1.5 px-2.5"}>
                            <p className={"mx-auto"}>Tokopedia</p>
                        </div>
                        <div className={"grid grid-cols-2 odd:bg-white/10 p-1.5 px-2.5"}>
                            <p className={"mx-auto"}>Amazon</p>
                        </div>
                    </div>
                </div>
                <p className={"text-xs mx-auto inline-flex gap-2"}>
                    <i className={"bi-trophy"}/>
                    We may earn a commission from the links on this page
                </p>
            </div>
        </>
    )
}