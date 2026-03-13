import { useEffect, useState } from "react";
import { WifiOff, X, Wifi } from "lucide-react";

export const OfflineModal = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [isVisible, setIsVisible] = useState(!navigator.onLine);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleOffline = () => {
      setIsOffline(true);
      setIsVisible(true);
      setIsDismissed(false);
    };
    const handleOnline = () => {
      setIsOffline(false);
      // Show "back online" briefly
      setIsVisible(true);
      setIsDismissed(false);
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  // Auto-hide offline banner after 5 seconds
  useEffect(() => {
    if (isOffline && isVisible && !isDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOffline, isVisible, isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div
        className={`flex items-center justify-center gap-3 px-4 py-2.5 text-sm font-medium text-white shadow-lg ${
          isOffline
            ? "bg-gradient-to-r from-purple-700 via-violet-600 to-blue-600"
            : "bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500"
        }`}
      >
        <div className="flex items-center gap-2">
          {isOffline ? (
            <>
              <WifiOff className="h-4 w-4 animate-pulse" />
              <span>You're offline — Don't worry, portfolio is still available!</span>
            </>
          ) : (
            <>
              <Wifi className="h-4 w-4" />
              <span>Back online ✓</span>
            </>
          )}
        </div>
        <button
          onClick={() => setIsDismissed(true)}
          className="ml-2 rounded-full p-0.5 transition-colors hover:bg-white/20 cursor-pointer"
          aria-label="Dismiss"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};

