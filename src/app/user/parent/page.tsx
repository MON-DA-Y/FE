import { redirect } from "next/navigation";

export default async function ParentRoot() {
  const dummyStudentId = "1";
  redirect(`/user/parent/${dummyStudentId}`);
}
