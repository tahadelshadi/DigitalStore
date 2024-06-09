"use client";
import { Provider } from "react-redux";
import { useRef } from "react";
import { AppStore, Store } from "./store";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = Store();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
