import { describe, it, expect } from 'bun:test';
import { inquirySchema, inquiryPayload } from './inquiry';
import { SITE } from './site';
const input={full_name:'Test Traveler',email:'test@example.com',whatsapp:'+905400011211',country:'Canada',destinations:'Türkiye and Greece',travel_date:'2099-06-01',travelers:3,days:8,requests:'Vegetarian meals'};
describe('custom travel inquiry',()=>{
 it('preserves destination preferences and number of travel days in stored inquiries',()=>{const p=inquiryPayload(inquirySchema.parse(input));expect(p.special_requests).toContain('Destinations: Türkiye and Greece');expect(p.special_requests).toContain('Travel days: 8');expect(p.adults).toBe(3)});
 it('rejects past dates',()=>{expect(inquirySchema.safeParse({...input,travel_date:'2000-01-01'}).success).toBe(false)});
 it('rejects invalid email and missing required trip fields',()=>{expect(inquirySchema.safeParse({...input,email:'invalid',destinations:''}).success).toBe(false)});
 it('uses the requested euro starting price',()=>{expect(SITE.price).toBe('€299');expect(SITE.currency).toBe('EUR')});
});
