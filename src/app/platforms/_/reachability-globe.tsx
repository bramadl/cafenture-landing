import Globe from "@cafenture/components/ui/globe";

export const ReachabilityGlobe = () => {
  return (
    <div className="relative w-full h-16 sm:h-[100px]">
      <div className="absolute inset-x-0 h-32 sm:h-[200px] translate-y-16 sm:translate-y-[100px] bottom-0 overflow-hidden">
        <Globe className="top-0" />
      </div>
    </div>
  );
};
