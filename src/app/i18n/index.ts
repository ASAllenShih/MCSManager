// Copyright (C) 2022 MCSManager <mcsmanager-dev@outlook.com>

import i18next from "i18next";

import zh_cn from "./language/zh_cn.json";
import zh_Hant_TW from "./language/zh_Hant_TW.json";
import en_us from "./language/en_us.json";

i18next.init({
  lng: "zh_Hant_TW",
  fallbackLng: "en_us",
  resources: {
    zh_Hant_TW: {
      translation: zh_Hant_TW
    },
    zh_cn: {
      translation: zh_cn
    },
    en_us: {
      translation: en_us
    }
  }
});

// alias
const $t = i18next.t;

export { $t, i18next };
