import { redirect } from "next/navigation";

// /our_work and /work were exact duplicates of the same page. Keeping /work
// as the canonical URL (it's what's linked from navigation.js and the
// homepage's work tiles) and redirecting this one to avoid duplicate content.
export default function OurWorkRedirect() {
  redirect("/work");
}
