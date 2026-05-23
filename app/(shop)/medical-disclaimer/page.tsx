import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Medical Disclaimer',
    description: 'Important medical information and safety protocols regarding the use of supplements and compounds sold on our platform.',
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/medical-disclaimer`,
    },
}

export default function MedicalDisclaimer() {
    return (
        <div className="container-shop max-w-[900px] mx-auto px-4 py-12 md:py-20 font-sans text-gray-800">
            <h1 className="text-4xl font-display font-bold uppercase mb-8 text-brand-primary">Medical Disclaimer</h1>

            <div className="space-y-6 text-sm md:text-base leading-relaxed">
                <p className="font-semibold text-lg border-l-4 border-brand-primary pl-4">
                    The information, products, and services provided by SteroidsUK are strictly for research and educational purposes. We do not provide medical advice.
                </p>

                <h2 className="text-xl font-bold uppercase mt-8 mb-4">1. Not Medical Advice</h2>
                <p>
                    The content on this platform, including but not limited to blog posts, product descriptions, dosage guidelines,
                    and cycle protocols, has been provided for informational purposes only. None of the information on this site is
                    intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of
                    your physician or other qualified health provider with any questions you may have regarding a medical condition.
                </p>

                <h2 className="text-xl font-bold uppercase mt-8 mb-4">2. Product Usage & Safety Protocols</h2>
                <p>
                    The anabolic steroids, SARMs, peptides, and other compounds listed on this site are potent chemicals that carry
                    significant risks if misused. They are not intended for human consumption or to treat, cure, or prevent any disease.
                    Buyers are entirely responsible for understanding the legal status and health implications of handling these substances in
                    their respective jurisdictions (including the United Kingdom).
                </p>

                <h2 className="text-xl font-bold uppercase mt-8 mb-4">3. Medical Supervision For Harm Reduction</h2>
                <p>
                    If you are engaging in the personal use of any performance-enhancing compounds (which we strongly advise against),
                    it should only be done under the strict supervision of a qualified medical professional. Regular blood work (including
                    hormonal panels, liver/kidney enzyme tests, and lipid profiles) is a crucial safety protocol that must not be ignored.
                    Post Cycle Therapy (PCT) is a mandatory requirement for hormonal recovery following the use of suppressive compounds.
                </p>

                <h2 className="text-xl font-bold uppercase mt-8 mb-4">4. Liability</h2>
                <p>
                    SteroidsUK, its directors, employees, and affiliates will not be held liable for any adverse side effects, health complications,
                    or legal issues arising from the use or misuse of the products sold on this website. By purchasing from SteroidsUK, you
                    acknowledge and agree to assume all associated risks and waive any claims against our company.
                </p>
            </div>
        </div>
    )
}
