import { GridBackground } from "@cafenture/components/svg/grid-background";
import { ThreeDevicesMockup } from "@cafenture/components/svg/app-mockups";

export const ProductMockups = () => {
  return (
    <div className="relative">
      <GridBackground className="absolute inset-0 scale-[1.75] md:scale-125 z-[-1]" />
      <figure className="flex items-center justify-center">
        <ThreeDevicesMockup className="w-full xl:max-w-[640px] 2xl:max-w-[960px]" usePNG />
      </figure>
      <div className="absolute left-0 right-0 bottom-0 w-full h-[100px] bg-gradient-to-b from-white/0 to-white" />
    </div>
  );
};
