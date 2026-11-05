import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { categories, slugify } from '@/lib/travel';
export function CategoryPage({slug}:{slug:string}) {
 const category=categories.find(c=>c.slug===slug);
 if(!category) return null;
 return <div><section className="travel-cover"><img src={category.image} alt={category.imageAlt} width={1536} height={1024}/><div className="travel-cover-shade"/><div className="container-page relative z-10 py-16"><p className="eyebrow text-gold-400">TEOM TRAVEL / {category.label}</p><h1 className="mt-5 max-w-3xl text-4xl md:text-5xl font-semibold leading-tight">{category.title}</h1><p className="mt-5 max-w-2xl text-lg text-on-dark/85">{category.description}</p></div></section>
 <section className="container-page py-16 md:py-20">
 {slug==='mediterranean-cruises'?<div className="max-w-2xl"><Compass className="h-8 w-8 text-gold-600"/><h2 className="mt-4 text-3xl">Mediterranean cruise enquiries</h2><p className="mt-4 text-muted-foreground">No confirmed cruise packages are currently listed. Contact our team to discuss your preferred route. Departure dates, pricing and availability will be provided only after confirmation.</p><Button asChild variant="gold" className="mt-6"><Link to="/custom-trips" search={{destination:'Mediterranean cruise'}}>Enquire about cruises <ArrowUpRight/></Link></Button></div>:<><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">Find your next journey</p><h2 className="mt-3 text-3xl">{slug==='istanbul-experiences'?'Explore Istanbul experiences':'Destinations to explore'}</h2></div>{slug==='turkiye'&&<p className="text-gold-700 font-medium">Multi-day packages from €299 per person, where applicable</p>}</div>{slug==='greece-greek-islands'&&<p className="mt-4 text-muted-foreground">Ask about multi-day packages and departures from Istanbul, subject to confirmation.</p>}
 <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{category.destinations.map(name=><article key={name} className="destination-name-card"><p className="eyebrow">{category.label}</p><h3 className="mt-3 text-2xl">{name}</h3><p className="mt-3 text-sm text-muted-foreground">Personalized itineraries · Request a quote</p><Button asChild variant="link" className="mt-5 px-0"><Link to="/tours/$region/$destination" params={{region:category.slug,destination:slugify(name)}}>Explore {name}<ArrowUpRight/></Link></Button></article>)}</div></>}
 </section></div>
}
