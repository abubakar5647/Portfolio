import { useEffect, useState } from "react";
import { WifiOff, RefreshCw } from "lucide-react";

export const OfflineModal = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative mx-4 w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f1a] p-8 shadow-2xl">
        <div className="absolute -top-12 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 ring-1 ring-white/10">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-500 shadow-lg shadow-purple-500/25">
            <WifiOff className="h-7 w-7 text-white" strokeWidth={2.5} />
          </div>
        </div>

        <h2 className="relative mb-2 text-center text-2xl font-bold text-white">
          You're Offline
        </h2>
        <p className="mb-6 text-center text-sm leading-relaxed text-gray-400">
          It looks like your device has lost its internet connection. Please
          check your Wi-Fi or mobile data and try again.
        </p>

        <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mb-6 space-y-3 text-sm text-gray-500">
          <div className="flex items-start gap-2">
            <span className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
            <span>Check your Wi-Fi or Ethernet connection</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
            <span>Try restarting your router or modem</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
            <span>Move closer to your Wi-Fi access point</span>
          </div>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:brightness-110 active:scale-[0.98] cursor-pointer"
        >
          <RefreshCw className="h-4 w-4 transition-transform duration-500 group-hover:rotate-180" />
          Retry Connection
        </button>

        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full border border-purple-500/10 animate-pulse" />
        <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full border border-blue-500/10 animate-pulse" />
      </div>
    </div>
  );
};
