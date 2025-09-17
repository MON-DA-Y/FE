import { redirect } from "next/navigation";

export default async function ParentRoot() {
  // 마이페이지에서 자녀 먼저 추가하도록
  redirect(`/user/parent/mypage`);
}
