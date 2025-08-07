import {Footer, Navbar} from "@/app/page";


export default function Legal() {
    return (
        <>
            <Navbar/>
            <div className={"container-mx-auto"}>
                <div className={"flex flex-col mx-auto py-12 gap-2 px-4 w-full lg:w-4/5 xl:w-1/2"}>
                    <h1 className={"text-3xl font-light"}>
                        Legal
                    </h1>
                    <p>
                        Last updated: 7 August 2025
                    </p>
                    <>
                        <h2 className={"text-lg font-medium uppercase tracking-wider"}>
                            1. Intro & Who We Are
                        </h2>
                        <p>
                            Batak.asia is committed to respecting your privacy. This page explains how we collect, use, and protect your information when you use our site.
                        </p>
                        <p>
                            Batak.asia is operated by  Kayakita Ltd, a private company limited by shares registered in England and Wales with CRN 16398296 at 71-75 Shelton St Covent Garden London WC2H 9JQ. This address is for official correspondence only and general enquiries will not be received.
                        </p>
                    </>
                    <>
                        <h2 className={"text-lg font-medium uppercase tracking-wider"}>
                            2. What Information We Collect
                        </h2>
                        <p>
                            We do not collect any personal information directly through this website. However, some data may be collected by third-party services you interact with, such as:
                        </p>
                        <ul>
                            <li>
                                Donation platforms or payment gateways (Ko-fi, Stripe, PayPal, Wise)
                            </li>
                            <li>
                                Social and communication platforms (BlueSky)
                            </li>
                        </ul>
                        <p>
                            The data collected via these platforms will be handled solely in accordance with the privacy/data handling policies of those platforms.
                        </p>
                        <p>
                            Please contact the stated platforms directly if you wish you exercise your lawful data protection rights.
                        </p>
                        <p>
                            We will not share your data with any third parties without your consent.
                        </p>
                    </>
                    <>
                        <h2 className={"text-lg font-medium uppercase tracking-wider"}>
                            3. Cookies and Analytics
                        </h2>
                        <p>
                            We aim to keep this site as privacy-friendly as possible. We do not use cookies for advertising or user tracking.
                        </p>
                        <p>
                            In the event we do track analytics, your data will be fully anonymized prior to storage/submission. We will not share this data with any third party.
                        </p>
                    </>
                    <>
                        <h2 className={"text-lg font-medium uppercase tracking-wider"}>
                            4. Donations
                        </h2>
                        <p>
                            When you donate through Ko-fi or other platforms, your payment information is handled entirely by those third parties. We do not store or access your payment details.
                        </p>
                    </>
                    <>
                        <h2 className={"text-lg font-medium uppercase tracking-wider"}>
                            5. Your Rights
                        </h2>
                        <p>
                            Under UK data protection law, you have rights over your personal data, including:
                        </p>
                        <ul>
                            <li>
                                The right to access and correct your data
                            </li>
                            <li>
                                The right to request deletion of your data
                            </li>
                            <li>
                                The right to object to or restrict certain processing
                            </li>
                            <li></li>
                        </ul>
                        <p>
                            You may contact us at the stated contact method at the end of this policy if you wish to exercise your lawful data protection rights.
                        </p>
                        <p>
                            For data collected via third-party services, please contact those providers directly.
                        </p>
                    </>
                    <>
                        <h2 className={"text-lg font-medium uppercase tracking-wider"}>
                            6. Changes to This Policy
                        </h2>
                        <p>
                            We may update this Privacy Policy from time to time. Any significant changes will be posted on this page.
                        </p>

                        <h2 className={"text-lg font-medium uppercase tracking-wider"}>
                            7. Contact
                        </h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us by e-mail:
                        </p>
                        <p>
                            contact at batak dot asia
                        </p>
                    </>
                </div>
            </div>
            <Footer/>
        </>
    )
}