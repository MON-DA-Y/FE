import Image from "next/image";

export default function SignUpPage() {
  return (
    <div>
      <Image
        src="/images/logo.svg"
        width={318}
        height={95}
        alt="logo"
        priority
      />
    </div>
  );
}
