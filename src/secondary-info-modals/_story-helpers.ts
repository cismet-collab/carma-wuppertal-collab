import { useEffect, useCallback } from "react";
import { useArgs } from "@storybook/core/preview-api";

type SimArgs = { Beispiele: string; Feature?: any };

export function useFeatureNavigation(
  dataKeys: string[],
  currentKey: string
): void {
  const [, updateArgs] = useArgs<SimArgs>();
  const currentIndex = dataKeys.indexOf(currentKey);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.shiftKey && e.ctrlKey) {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          const next = (currentIndex + 1) % dataKeys.length;
          updateArgs({ Beispiele: dataKeys[next] });
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          const prev = (currentIndex - 1 + dataKeys.length) % dataKeys.length;
          updateArgs({ Beispiele: dataKeys[prev] });
        }
      }
    },
    [currentIndex, dataKeys, updateArgs]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
}

export function simArgTypes(dataKeys: string[]) {
  return {
    Beispiele: {
      control: { type: "select" as const },
      options: dataKeys,
    },
    Feature: {
      control: { type: "object" as const },
      description: "Paste your JSON here",
    },
    "\u2139\uFE0F Ctrl+Shift+\u2190 \u2192 zum Bl\u00E4ttern": {
      control: { disable: true },
    },
  };
}
