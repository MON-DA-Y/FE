import Image from "next/image";

interface StudentProfileProps {
  width: number;
  height: number;
}

export default function StudentProfile({ width, height }: StudentProfileProps) {
  return (
    <div>
      <Image
        src="/images/student.png"
        alt="student"
        width={width}
        height={height}
        className="rounded-[50px]"
      />
    </div>
  );
}
