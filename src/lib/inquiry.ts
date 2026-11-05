import { z } from 'zod';
export const inquirySchema = z.object({
 full_name:z.string().trim().min(2,'Enter your full name').max(160).refine(v=>v.split(/\s+/).length>=2,'Enter your first and last name'),
 email:z.string().trim().email('Enter a valid email').max(200),
 whatsapp:z.string().trim().min(5,'Enter your WhatsApp number').max(40).regex(/^\+?[\d\s().-]+$/,'Enter a valid phone number'),
 country:z.string().trim().min(2,'Enter your country of residence').max(80),
 destinations:z.string().trim().min(2,'Tell us where you want to travel').max(500),
 travel_date:z.string().regex(/^\d{4}-\d{2}-\d{2}$/,'Choose a travel date').refine(d=>Number.isFinite(Date.parse(d)) && d>=new Date().toISOString().slice(0,10),'Choose today or a future date'),
 travelers:z.coerce.number().int().min(1).max(20),
 days:z.coerce.number().int().min(1).max(365),
 requests:z.string().trim().max(1200),
});
export function inquiryPayload(input:z.infer<typeof inquirySchema>) {
 const [first_name,...last] = input.full_name.split(/\s+/);
 return {first_name:first_name.slice(0,80),last_name:last.join(' ').slice(0,80),email:input.email,country:input.country,phone:input.whatsapp,whatsapp:input.whatsapp,travel_date:input.travel_date,adults:input.travelers,children:0,room_type:'To be discussed',special_requests:`Custom trip inquiry\nDestinations: ${input.destinations}\nTravel days: ${input.days}\nTravelers: ${input.travelers}\nAdditional requests: ${input.requests || 'None'}`};
}
