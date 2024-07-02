"use client";

import { GA_MEASUREMENT_ID, GA_ID } from "/lib/gtag";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import { usePathSendGtm } from "@/hooks/usePathSendGtm";

export const GoogleTag = () => {
  usePathSendGtm();

  console.log("GTM & GA Tag Init");

  return (
    <>
      <GoogleTagManager gtmId={GA_MEASUREMENT_ID} />
      <GoogleAnalytics gaId={GA_ID} />
    </>
  );
};
