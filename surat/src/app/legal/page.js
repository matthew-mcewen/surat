import {Footer, Navbar} from "@/app/page";


export default function Legal() {
    return (
        <>
            <div className={"container-mx-auto"}>
                <Navbar/>
                <div className={"flex flex-col mx-auto py-12 gap-2 px-4 w-full lg:w-4/5 xl:w-1/2"}>
                    <h1 className={"text-3xl font-light"}>
                        Legal
                    </h1>
                    <p>
                        Last updated: 2025-10-24
                    </p>
                    <>
                        <p>
                            This website does not store cookies on your device or collect any personal data.
                        </p>
                    </>
                </div>
            </div>
            <Footer/>
        </>
    )
}