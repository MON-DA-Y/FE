import StudentProfile from "@/app/components/StudentProfile";
import ParentProfile from "./components/ParentProfile";

export default function ParentPage() {
  return (
    <div className="flex-col relative mb-[410px] overflow-auto">
      <div className="ml-[750px]">
        <ParentProfile />
      </div>
      <div className="">
        <StudentProfile width={80} height={80} />
      </div>
    </div>
  );
}
