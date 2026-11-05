import { createFileRoute } from '@tanstack/react-router';
import { CategoryPage } from '@/components/CategoryPage';
import { categories, travelHead } from '@/lib/travel';
export const Route=createFileRoute('/istanbul-experiences')({
 head:()=>{const c=categories.find(c=>c.slug==='istanbul-experiences');return travelHead(c?.label || 'Travel',c?.description || 'Discover travel experiences with TEOM TRAVEL.')},
 component:()=> <CategoryPage slug="istanbul-experiences"/>,
});
