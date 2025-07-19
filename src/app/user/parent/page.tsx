import { redirect } from "next/navigation";

export default async function ParentRoot() {
  const dummyStudentId = "1234";
  redirect(`/user/parent/${dummyStudentId}`);
}
