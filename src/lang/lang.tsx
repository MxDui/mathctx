import { useEffect, useState } from "react";

const dictionaries: Record<string, () => Promise<Record<string, string>>> = {
  en: () => import("./en.json").then((module) => module.default),
  es: () => import("./es.json").then((module) => module.default),
};

export const useDictionary = (locale: string | number) => {
  const [dictionary, setDictionary] = useState<Record<string, string>>();

  useEffect(() => {
    if (locale in dictionaries) {
      dictionaries[locale]().then((dictionary: Record<string, string>) => {
        setDictionary(dictionary);
      });
    }
  }, [locale]);

  return dictionary;
};
