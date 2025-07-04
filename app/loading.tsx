import Image from "next/image";
import loader from "@/assets/loader.gif";

const LoadingPage = () => {
  return (
    <div className="flex flex-col h-screen flex-center w-full">
      <Image src={loader} height={150} width={150} priority alt="loading..." />
    </div>
  );
};

export default LoadingPage;
