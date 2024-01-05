type TProps = {};

export default function Blobs({}: TProps) {
  return (
    <div className="fixed flex items-center justify-center gap-6 w-full h-full -z-10 pointer-events-none overflow-hidden">
      <div className="blob top-16 bg-orange-600 " />
      <div className="blob !w-[25rem] !h-[25rem] " />
      <div className="blob -top-14 bg-pink-600 " />
    </div>
  );
}
