import {Footer, Navbar} from "@/app/page";


export default function Legal() {
    return (
        <>
            <Navbar/>
            <div className={"container-mx-auto flex flex-col gap-2 px-4"}>
                <h1 className={"text-3xl font-light"}>Legal</h1>
                <p>Batak.asia is operated by Kayakita Ltd, a private company limited by shares registered in England & Wales with CRN 16398269, at 71-75 Shelton St, Covent Garden, London WC2H 9JQ.</p>
            </div>
            <Footer/>
        </>
    )
}