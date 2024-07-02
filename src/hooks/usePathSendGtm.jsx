"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";

export const usePathSendGtm = () => {
  const pathname = usePathname();

  useEffect(() => {
    sendGTMEvent({ event: "page_view", value: "hoge" });
  }, [pathname]);
};
