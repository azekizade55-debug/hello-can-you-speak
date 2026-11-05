import { createFileRoute } from '@tanstack/react-router';
import { CategoryPage } from '@/components/CategoryPage';
import { categories, travelHead } from '@/lib/travel';
export const Route=createFileRoute('/middle-east')({
 head:()=>{const c=categories.find(c=>c.slug==='middle-east');return travelHead(c?.label || 'Travel',c?.description || 'Discover travel experiences with TEOM TRAVEL.')},
 component:()=> <CategoryPage slug="middle-east"/>,
});
