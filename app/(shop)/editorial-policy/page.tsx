import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Editorial Policy',
    description: 'Our commitment to providing accurate, unbiased, and scientifically-reviewed information on performance compounds.',
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/editorial-policy`,
    },
}

export default function EditorialPolicy() {
    return (
        <div className="container-shop max-w-[900px] mx-auto px-4 py-12 md:py-20 font-sans text-gray-800">
            <h1 className="text-4xl font-display font-bold uppercase mb-8 text-brand-primary">Editorial Policy</h1>

            <div className="space-y-6 text-sm md:text-base leading-relaxed">
                <p className="font-semibold text-lg border-l-4 border-brand-primary pl-4">
                    SteroidsUK is committed to publishing the most accurate, scientifically-backed, and unbiased information regarding performance-enhancing compounds.
                </p>

                <h2 className="text-xl font-bold uppercase mt-8 mb-4">1. Medical & Expert Review</h2>
                <p>
                    We employ a strict <strong>E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness)</strong> standard for our content. Every informative blog post, dosage guide, and compound overview is reviewed by a qualified medical professional, sports scientist, or veteran research analyst before publication. You will see a "Medical Reviewer" byline indicating that the information has been fact-checked against current clinical literature.
                </p>

                <h2 className="text-xl font-bold uppercase mt-8 mb-4">2. Unbiased & Independent Reporting</h2>
                <p>
                    Our guides and articles are written objectively to outline both the benefits and the significant risks (side effects, toxicity, hormone suppression) associated with various compounds. We do not publish content that irresponsibly downplays the dangers of these substances just to drive sales.
                </p>

                <h2 className="text-xl font-bold uppercase mt-8 mb-4">3. Source Transparency & Citations</h2>
                <p>
                    Whenever we discuss clinical outcomes, half-lives, or medical properties, we rely on established clinical endocrinology and sports medicine research. We strive to provide transparent data so our readers can make highly educated, harm-reductive decisions for their research.
                </p>

                <h2 className="text-xl font-bold uppercase mt-8 mb-4">4. Corrections Policy</h2>
                <p>
                    Clinical research surrounding performance compounds is constantly evolving. If new data emerges that contradicts our existing guides, or if an error is identified, we commit to updating the relevant articles promptly and noting the date of the revision.
                </p>

                <h2 className="text-xl font-bold uppercase mt-8 mb-4">5. Non-Promotional Intent</h2>
                <p>
                    While we operate a store, our editorial hub remains completely separate from our sales operations. Our informative content is explicitly designed for education and risk mitigation, not as a direct sales pitch.
                </p>
            </div>
        </div>
    )
}
