import { redirect } from "next/navigation";

export default function PYQsPage() {
  redirect("/dashboard?tab=pyqs");
}
