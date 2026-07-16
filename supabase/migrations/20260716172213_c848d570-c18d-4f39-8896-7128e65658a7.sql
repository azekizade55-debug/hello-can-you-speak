
DROP POLICY "Anyone can submit a booking" ON public.bookings;

CREATE POLICY "Anyone can submit a booking"
  ON public.bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(first_name) BETWEEN 1 AND 80
    AND length(last_name) BETWEEN 1 AND 80
    AND length(country) BETWEEN 2 AND 80
    AND length(phone) BETWEEN 5 AND 40
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND length(email) <= 200
    AND adults BETWEEN 1 AND 20
    AND children BETWEEN 0 AND 20
    AND length(room_type) BETWEEN 1 AND 60
    AND (special_requests IS NULL OR length(special_requests) <= 2000)
    AND travel_date >= CURRENT_DATE
  );

REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;
