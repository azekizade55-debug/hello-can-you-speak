import { createFileRoute } from '@tanstack/react-router';
import { CategoryPage } from '@/components/CategoryPage';
import { categories, travelHead } from '@/lib/travel';
export const Route=createFileRoute('/mediterranean-cruises')({
 head:()=>{const c=categories.find(c=>c.slug==='mediterranean-cruises');return travelHead(c?.label || 'Travel',c?.description || 'Discover travel experiences with TEOM TRAVEL.')},
 component:()=> <CategoryPage slug="mediterranean-cruises"/>,
});
