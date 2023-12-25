


/// import

import { browser } from "$app/environment";

/// util

let osPlatform = "linux";



/// export

export function getAgentSystem() {
  if (browser && !("navigator" in window))
    return osPlatform;

  const platform = browser ?
    // @ts-ignore | old browsers do not recognize `navigator.userAgentData` as valid
    navigator?.userAgentData?.platform.toLowerCase() || "linux" :
    osPlatform;

  switch (true) {
    case platform.startsWith("mac"): {
      osPlatform = "macos";
      break;
    }

    case platform.startsWith("win"): {
      osPlatform = "windows";
      break;
    }

    default:
    case platform.startsWith("linux"): {
      osPlatform = "linux";
      break;
    }
  }

  return osPlatform;
}
