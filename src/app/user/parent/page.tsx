import { redirect } from "next/navigation";

export default async function ParentRoot() {
  redirect("./[studentId]/page.tsx");
}
