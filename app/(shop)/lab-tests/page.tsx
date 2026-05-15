import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Laboratory Tests | Steroids UK',
  description: 'Independent laboratory test results for all our products. Verified purity and concentration.',
}

const labResults = [
  { product: 'Testosterone Enanthate 300', batch: 'TE-300-2024-11', purity: '99.2%', concentration: 'As labelled (300mg/ml)', lab: 'Elite Analytical Services Ltd', date: 'November 2024', result: 'Pass' },
  { product: 'Anavar 10mg Tablets', batch: 'AVAR-10-2024-10', purity: '98.8%', concentration: 'As labelled (10mg)', lab: 'UK Bio Analytical', date: 'October 2024', result: 'Pass' },
  { product: 'Clenbuterol 40mcg', batch: 'CLEN-40-2024-09', purity: '99.5%', concentration: 'As labelled (40mcg)', lab: 'Elite Analytical Services Ltd', date: 'September 2024', result: 'Pass' },
  { product: 'Dianabol 10mg', batch: 'DBOL-10-2024-08', purity: '97.9%', concentration: 'As labelled (10mg)', lab: 'UK Bio Analytical', date: 'August 2024', result: 'Pass' },
  { product: 'Testosterone Cypionate 200', batch: 'TC-200-2024-11', purity: '99.1%', concentration: 'As labelled (200mg/ml)', lab: 'Elite Analytical Services Ltd', date: 'November 2024', result: 'Pass' },
  { product: 'RAD-140 Testolone 10mg', batch: 'RAD-10-2024-10', purity: '98.5%', concentration: 'As labelled (10mg)', lab: 'SARMs Testing UK', date: 'October 2024', result: 'Pass' },
  { product: 'Ostarine MK-2866 25mg', batch: 'OST-25-2024-09', purity: '99.0%', concentration: 'As labelled (25mg)', lab: 'SARMs Testing UK', date: 'September 2024', result: 'Pass' },
  { product: 'Nolvadex / Tamoxifen 20mg', batch: 'NOLVA-20-2024-11', purity: '99.3%', concentration: 'As labelled (20mg)', lab: 'Elite Analytical Services Ltd', date: 'November 2024', result: 'Pass' },
]

export default function LabTestsPage() {
  return (
    <div className="min-h-screen bg-surface-100">
      {/* Page header */}
      <div className="bg-white border-b border-border-light py-8">
        <div className="container-shop text-center">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-text-primary">Laboratory Test Results</h1>
          <div className="flex items-center justify-center gap-2 mt-2 text-sm text-text-secondary">
            <Link href="/" className="hover:text-text-primary">Home</Link>
            <span>/</span>
            <span className="text-text-primary">Lab Tests</span>
          </div>
        </div>
      </div>

      <div className="container-shop py-10">
        <div className="bg-white border border-border-light p-6 mb-8">
          <h2 className="font-display font-bold text-xl text-text-primary mb-3">Independent Third-Party Testing</h2>
          <p className="text-text-secondary text-sm leading-relaxed">
            All products stocked by Steroids-UK.com undergo independent third-party laboratory testing before being listed for sale. Each batch is tested for purity, concentration accuracy, heavy metal content, and microbial contamination. We maintain complete transparency with our testing programme.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-border-light text-sm">
            <thead>
              <tr className="bg-brand-header text-white">
                <th className="text-left px-4 py-3 font-semibold">Product</th>
                <th className="text-left px-4 py-3 font-semibold">Batch</th>
                <th className="text-left px-4 py-3 font-semibold">Purity</th>
                <th className="text-left px-4 py-3 font-semibold">Concentration</th>
                <th className="text-left px-4 py-3 font-semibold">Laboratory</th>
                <th className="text-left px-4 py-3 font-semibold">Date</th>
                <th className="text-left px-4 py-3 font-semibold">Result</th>
              </tr>
            </thead>
            <tbody>
              {labResults.map((r, i) => (
                <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-surface-100'}`}>
                  <td className="px-4 py-3 font-medium text-text-primary">{r.product}</td>
                  <td className="px-4 py-3 text-text-secondary font-mono text-xs">{r.batch}</td>
                  <td className="px-4 py-3 text-text-primary font-semibold">{r.purity}</td>
                  <td className="px-4 py-3 text-text-secondary">{r.concentration}</td>
                  <td className="px-4 py-3 text-text-secondary">{r.lab}</td>
                  <td className="px-4 py-3 text-text-secondary">{r.date}</td>
                  <td className="px-4 py-3">
                    <span className="inline-block bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 text-xs font-bold uppercase">
                      ✓ {r.result}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
