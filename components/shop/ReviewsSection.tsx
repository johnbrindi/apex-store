import { Star } from 'lucide-react'
import Image from 'next/image'

const reviews = [
  {
    id: 1,
    name: 'James R.',
    location: 'London, UK',
    rating: 5,
    text: 'Absolutely top quality products. Placed my order on Monday morning and it arrived Tuesday. Packaging was completely discreet, no one would ever know what it was. Will definitely be ordering again.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
    product: 'Testosterone Enanthate 300',
    date: '2 days ago',
  },
  {
    id: 2,
    name: 'Mike T.',
    location: 'Manchester, UK',
    rating: 5,
    text: 'Been using this store for over a year now. The lab test results they provide on each product give you real peace of mind. Quality is consistently excellent and prices are unbeatable.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80',
    product: 'Anavar 50mg Tablets',
    date: '1 week ago',
  },
  {
    id: 3,
    name: 'Daniel K.',
    location: 'Birmingham, UK',
    rating: 5,
    text: 'Fast delivery, genuine products. The Bulking Stack I ordered was exactly as described and I got great results. Customer service was responsive when I had a question about dosing protocols.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80',
    product: 'Bulking Stack – Pro Series',
    date: '2 weeks ago',
  },
  {
    id: 4,
    name: 'Sarah M.',
    location: 'Bristol, UK',
    rating: 5,
    text: 'Was sceptical at first but everything went smoothly. Payment process was easy, delivery came within 24 hours of paying. The products are exactly what the lab results say. Very happy customer!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80',
    product: 'Clenbuterol 40mcg',
    date: '3 weeks ago',
  },
  {
    id: 5,
    name: 'Rob H.',
    location: 'Glasgow, UK',
    rating: 5,
    text: 'Third order from these guys and they never disappoint. The RAD-140 is fantastic quality. Tracking info comes through quickly and the packaging is so discreet my flatmates had no idea.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&q=80',
    product: 'RAD-140 Testolone 10mg',
    date: '1 month ago',
  },
  {
    id: 6,
    name: 'Chris P.',
    location: 'Liverpool, UK',
    rating: 5,
    text: 'Used Revolut to pay and got the 5% discount plus a free product — amazing deal. The whole process from order to delivery was under 24 hours. These guys are the real deal.',
    avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=80&q=80',
    product: 'Ostarine MK-2866 25mg',
    date: '1 month ago',
  },
]

export default function ReviewsSection() {
  return (
    <section className="py-12 bg-surface-100 border-t border-border-light">
      <div className="container-shop">
        <div className="text-center mb-10">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-2">
            Customer Reviews
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-text-primary font-bold text-lg">4.9/5</span>
            <span className="text-text-secondary text-sm">from 2,400+ reviews</span>
          </div>
          <p className="text-text-secondary text-sm max-w-xl mx-auto">
            Real reviews from verified customers across the UK. We don't edit or filter feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white border border-border-light p-5 hover:shadow-card-hover transition-shadow">
              {/* Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-border-light">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-bold text-sm text-text-primary">{review.name}</p>
                    <span className="text-xs text-text-secondary whitespace-nowrap">{review.date}</span>
                  </div>
                  <p className="text-xs text-text-secondary">{review.location}</p>
                  <div className="flex mt-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} size={12} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review text */}
              <p className="text-sm text-text-primary leading-relaxed mb-3">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Product tag */}
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-text-secondary uppercase tracking-wide font-semibold">Product:</span>
                <span className="text-[11px] text-button-blue font-medium">{review.product}</span>
              </div>

              {/* Verified badge */}
              <div className="mt-2 flex items-center gap-1">
                <span className="text-[10px] bg-green-50 text-green-600 border border-green-200 px-2 py-0.5 font-semibold uppercase tracking-wider">
                  ✓ Verified Purchase
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
