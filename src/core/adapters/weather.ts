import { selector } from "recoil";
import { cityIdState } from "@/core/domains/models/cityId";

export const weatherState = selector<any>({
  key: "Weather",
  get: async ({ get }) => {
    const cityId = get(cityIdState);
    if (!cityId) {
      return;
    }

    const res = await fetch(`https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json?__time__=202102240506`);
    const json = await res.json();

    return json;
  },
});