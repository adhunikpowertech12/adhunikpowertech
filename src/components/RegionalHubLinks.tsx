import Link from 'next/link';
import { PRIORITY_CLUSTERS } from '@/data/clusters';

export default function RegionalHubLinks() {
  const products = [
    { slug: 'panel-air-conditioner', title: 'Panel Air Conditioner' },
    { slug: 'industrial-air-washer', title: 'Air Washer Systems' },
  ];

  return (
    <section className="bg-slate-900 text-white text-center py-12 px-6 border-t border-slate-700">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-xl font-bold mb-2 text-blue-400">
          Regional Manufacturing & OEM Deployment Hubs
        </h3>
        <p className="text-sm text-slate-400 mb-6">
          Factory-direct supply nodes and climate-calibrated cooling equipment across key industrial corridors:
        </p>

        <div className="grid grid-cols-0 md:grid-cols-2 gap-1">
          {products.map((prod) => (
            <div key={prod.slug} className="bg-slate-800/60 p-5 rounded-lg border border-slate-700">
              <h4 className="font-semibold text-white text-base mb-3 border-b border-slate-700 pb-2">
                {prod.title}
              </h4>
              <ul className="grid grid-cols-0 sm:grid-cols-3 gap-0 text-sm">
                {PRIORITY_CLUSTERS.map((cluster) => (
                  <li key={cluster.slug}>
                    <Link
                      href={`/${prod.slug}/${cluster.slug}`}
                      className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                    >
                      <span className="text-blue-500 text-xs">▸</span>
                      {cluster.city} ({cluster.state})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}