export function SharePanelBackgrounds({ selectedBackgroundId }: { selectedBackgroundId: number }) {
  return (
    <>
      {selectedBackgroundId === 0 && <WhiteAndPurpleBackground />}
      {selectedBackgroundId === 1 && <WhiteGridBackground />}
      {selectedBackgroundId === 2 && <PinkBackground />}
      {selectedBackgroundId === 3 && <BlackGridBackground />}
      {selectedBackgroundId === 4 && <BlueDottedBackground />}
      {selectedBackgroundId === 5 && <BlackAndBlueBackground />}
    </>
  );
}

export function WhiteAndPurpleBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
  )
}

export function WhiteGridBackground() {
  return (
    <div
      className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
  );
}

export function PinkBackground() {
  return (
    <div
      className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
    </div>
  );
}

export function BlackGridBackground() {
  return (
    <div className="absolute h-full w-full bg-black">
      <div
        className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute bottom-0 left-0 right-0 top-0top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
    </div>
  );
}

export function BlueDottedBackground() {
  return (
    <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
  );
}

export function BlackAndBlueBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
  );
}
