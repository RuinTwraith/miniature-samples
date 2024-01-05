import "./style.css";

export default function Loader(props) {
  return (
    <div className="loader-container flex flex-col gap-16 ml-10">
      <button className="flex gap-4 w-40 h-12 items-center border rounded-lg px-3 hover:scale-105 transition-transform">
        {/* loader starts */}
        <div
          className="loader w-8 h-8 bg-transparent rounded-full border-8 border-y-purple-600 border-r-purple-600
        animate-spin"
        />
        {/* loader ends */}
        Processing
      </button>

      {/* loader - 2 - start */}
      <div className="loader loader-2 flex">
        <div className="loader-2__left w-20 h-20 bg-teal-700 rounded-full" />
        <div className="loader-2__right w-20 h-20 rounded-full backdrop-blur-md" />
      </div>
      {/* loader - 2 - end */}

      {/* loader - 3 - start */}
      <div className="loader loader-3 flex flex-col">
        <div className="block block-1 w-20 h-3 bg-rose-300 relative rounded" />
        <div className="block block-2 w-20 h-3 bg-rose-400 relative rounded" />
        <div className="block block-3 w-20 h-3 bg-rose-500 relative rounded" />
        {/* <div className="block block-4 w-20 h-4 bg-rose-600 relative rounded" />
        <div className="block block-5 w-20 h-4 bg-rose-700 relative rounded" /> */}
      </div>
      {/* loader - 3 - end */}

      {/* loader - 4 - start */}
      <div className="loader loader-4 flex gap-1">
        <div className="block block-1 w-10 h-4 bg-orange-300 relative rounded" />
        <div className="block block-2 w-10 h-4 bg-orange-400 relative rounded" />
        <div className="block block-3 w-10 h-4 bg-orange-500 relative rounded" />
        <div className="block block-4 w-10 h-4 bg-orange-600 relative rounded" />
        <div className="block block-5 w-10 h-4 bg-orange-700 relative rounded" />
      </div>
      {/* loader - 4 - end */}

      {/* loader - 5 - start */}
      <div className="loader loader-5 flex gap-1 items-center border rounded-lg py-2 px-4 w-min">
        <div className="block block-1 w-2 h-2 bg-slate-600 relative rounded-full" />
        <div className="block block-2 w-2 h-2 bg-slate-500 relative rounded-full" />
        <div className="block block-3 w-2 h-2 bg-slate-400 relative rounded-full" />
        <p className="font-bold text-xl ml-4">Typing</p>
      </div>
      {/* loader - 5 - end */}
    </div>
  );
}
