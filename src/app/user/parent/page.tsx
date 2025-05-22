import StudentProfile from "@/app/components/StudentProfile";
import ParentProfile from "./components/ParentProfile";
import StudentLevel from "@/app/components/StudentLevel";

export default function ParentPage() {
  return (
    <div className="relative w-full h-screen overflow-auto p-13">
      <div className="pl-180">
        <ParentProfile />
      </div>
      <div className="flex items-start">
        <div className="flex flex-col items-center">
          <StudentProfile width={100} height={100} />
          <div className="-mt-4">
            <StudentLevel />
          </div>
        </div>
      </div>
    </div>
  );
}
