"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type SpecialOfferModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function SpecialOfferModal({
  open,
  onClose,
}: SpecialOfferModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6">
      <button
        type="button"
        aria-label="Close offer modal"
        onClick={onClose}
        className="absolute inset-0 cursor-default"
      />

      <div className="relative z-10 w-full max-w-[min(92vw,32rem)]">
        <button
          type="button"
          onClick={onClose}
          className="cursor-pointer absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white transition hover:text-amber-500 hover:bg-gray-800/50"
          aria-label="Close offer modal"
        >
          {/* hover:bg-amber-400 */}
          {/* hover:bg-black/55 */}
          <X size={18} />
        </button>

        <div className="relative aspect-[4/5] max-h-[85vh] overflow-hidden  bg-[#111111] shadow-2xl">
          <Image
            src="/poster.heic"
            alt="Special Offer"
            fill
            priority
            sizes="(min-width: 1024px) 32rem, (min-width: 768px) 28rem, 92vw"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
