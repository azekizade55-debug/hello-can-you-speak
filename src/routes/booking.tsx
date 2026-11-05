import { createFileRoute } from '@tanstack/react-router';
import { InquiryForm } from '@/components/InquiryForm';
import { travelHead } from '@/lib/travel';
export const Route=createFileRoute('/booking')({head:()=>travelHead('Travel Booking Inquiry','Request your personalized TEOM TRAVEL itinerary and quote for Türkiye, Greece, the Balkans, the Middle East and Mediterranean journeys.'),component:BookingPage});
function BookingPage(){return <section className="container-page pt-32 pb-20"><div className="mx-auto max-w-3xl"><p className="eyebrow text-gold-700">Travel booking inquiry</p><h1 className="mt-4 text-4xl md:text-5xl">Let's plan your next journey.</h1><p className="mt-5 text-muted-foreground">Tell us your travel preferences. Our team will discuss availability, your itinerary and a personalized quote before confirming your booking.</p><InquiryForm/></div></section>}
