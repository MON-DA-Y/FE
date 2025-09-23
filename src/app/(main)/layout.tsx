import MyInfo from "@components/shared/MyInfo";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full relative flex justify-center items-center bg-white">
      <div className="relative w-[1050px] h-[575px] rounded-[40px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] bg-white p-8">
        <div className="absolute top-[-60] right-5">
          <MyInfo />
        </div>
        {children}
      </div>
    </div>
  );
}
