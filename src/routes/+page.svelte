<script lang="ts">
  /// import
  import { onMount } from "svelte";

  /// util
  import { getAgentSystem } from "../utility/get-system";

  /// const
  const appVersionTag = "2023.12.01";

  const appLinks = {
    linux: `https://github.com/neuenet/dolo-desktop/releases/download/${appVersionTag}/Dolo-amd64.deb`,
    macos: `https://github.com/neuenet/dolo-desktop/releases/download/${appVersionTag}/Dolo-x64.dmg`,
    windows: [
      `https://github.com/neuenet/dolo-desktop/releases/download/${appVersionTag}/Dolo-x64-setup.exe`,
      `https://github.com/neuenet/dolo-desktop/releases/download/${appVersionTag}/Dolo-x64_en-US.msi`
    ]
  };

  let downloadLink = appLinks.linux;
  let downloadText = "Download for Linux";
  let osPlatform = "linux";

  /// function
  function processSystem() {
    const platform = getAgentSystem();

    switch(platform) {
      case "macos": {
        downloadLink = appLinks.macos;
        downloadText = "Download for macOS";
        osPlatform = "macos";
        break;
      }

      case "windows": {
        downloadLink = appLinks.windows[0];
        downloadText = "Download for Windows";
        osPlatform = "windows";
        break;
      }

      default:
      case "linux": {
        downloadLink = appLinks.linux;
        downloadText = "Download for Linux";
        osPlatform = "linux";
        break;
      }
    }

    return osPlatform;
  }

  onMount(() => processSystem());
</script>

<style lang="scss">
  @import "src/scss/component/mixin";
  @import "src/scss/component/color";

  @keyframes animateGlow {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  header {
    @media (min-width: 601px) {
      height: 100vh;
    }

    @media (max-width: 600px) {
      padding: 13rem 0 5rem;
    }

    h1 {
      &::before,
      &::after {
        width: 7rem; height: 7rem;

        content: "";
        left: calc(50% - 3.5rem);
        position: absolute;

        @media (min-width: 601px) {
          top: -9rem;
        }

        @media (max-width: 600px) {
          top: -8rem;
        }
      }

      &::before {
        background-image: url("/media/dolo-icon.png");
        background-size: cover;
        z-index: 1;
      }

      &::after {
        animation: animateGlow 10s ease infinite;
        background-image: linear-gradient(270deg, $uchu-gray-9, $uchu-blue-7);
        background-size: 200% 200%;
        filter: blur(5vw);
      }
    }

    p {
      @media (max-width: 600px) {
        text-shadow: 1px 2px 5px $uchu-gray-6;
      }
    }
  }

  .cta {
    padding-bottom: 2rem;

    @media (min-width: 601px) {
      padding-top: 4rem;
    }

    @media (max-width: 600px) {
      align-items: center;
      display: flex;
      flex-direction: column;
      padding-top: 3rem;
    }

    .cta--button {
      background-color: $uchu-blue-7;
      color: $uchu-yin;
      padding: 1rem 1.5rem;
      text-decoration: none;
      transition: background-color 0.2s;

      &:hover {
        background-color: $uchu-blue;
      }
    }

    .cta--link {
      padding: 1rem 1.5rem;
    }
  }

  .blurb:first-of-type {
    background-color: $uchu-yang-8;

    @media (min-width: 1601px) {
      margin-bottom: 50vh;
    }
  }

  :root {
    --peekaboo-height: 400px;

    @media (max-width: 900px) {
      --peekaboo-height: 200px;
    }
  }

  .peekaboo-wrap {
    background-color: $uchu-orange-1;
    background-image: url("/media/background/100.png");
    background-size: cover;
    overflow: hidden;
    position: fixed;
    width: 100%;


    @media (min-width: 1601px) {
      bottom: 0; left: 0;

      flex: 1;
      height: 100vh;
      z-index: -1;
    }

    @media (max-width: 1600px) {
      min-height: var(--peekaboo-height);
      position: relative;
    }
  }

  .peekaboo {
    position: sticky;

    @media (min-width: 1601px) {
      top: 100vh; left: calc(50% - 800px);
      max-width: 1600px;
    }

    @media (max-width: 1600px) {
      width: 100%; height: var(--peekaboo-height);
      top: 0; left: 0;
    }
  }

  .peekaboo-item {
    @media (min-width: 1601px) {
      padding: 5rem;
      position: absolute;
    }

    &:nth-child(1) {
      z-index: 3;

      @media (min-width: 1601px) {
        bottom: -3rem; left: -3rem;
      }

      @media (max-width: 1600px) {
        object-fit: cover;
        position: absolute;
        right: 0;
      }

      @media (min-width: 601px) and (max-width: 1600px) {
        top: 0;
      }

      @media (max-width: 600px) {
        width: 600px; height: 400px;
        object-position: top left;
      }
    }

    &:nth-child(2),
    &:nth-child(3) {
      @media (max-width: 1600px) {
        display: none;
      }
    }

    &:nth-child(2) {
      left: 0;
      z-index: 2;

      @media (min-width: 1601px) {
        bottom: 0;
      }
    }

    &:nth-child(3) {
      right: -3rem;
      z-index: 1;

      @media (min-width: 1601px) {
        bottom: 3rem;
      }
    }
  }
</style>

<svelte:head>
  <title>Dolo by Neuenet</title>

  <meta name="description" content="Secure your TLD with Dolo! It provides effortless TLS, DNS, &amp; zone management"/>
  <meta property="og:description" content="Secure your TLD with Dolo! It provides effortless TLS, DNS, &amp; zone management"/>
  <meta property="og:title" content="Dolo by Neuenet"/>

  <link rel="preload" href="/media/dolo-icon.png" as="image"/>
  <link rel="preload" href="/media/background/101.png" as="image"/>
  <link rel="preload" href="/media/background/100.png" as="image"/>
</svelte:head>

<header>
  <div class="inner-wrap">
    <h1>Secure your&nbsp;TLD</h1>
    <h3>Effortless TLS, DNS, &amp; zone&nbsp;management</h3>

    <div class="cta">
      <a class="cta--button" href={downloadLink} rel="noopener noreferrer">{downloadText}</a>
      <a class="cta--link" href="/features">Learn more</a>
    </div>

    <p>Don’t see your platform?<br/>Visit our <a href="https://github.com/neuenet/dolo-desktop/releases/latest" rel="noopener noreferrer" target="_blank">our repo</a> for more binaries</p>
  </div>
</header>

<section class="blurb">
  <p class="inner-wrap">Dolo is a convenience tool for advanced users; generate certificates, keys, DNS records, and a zone&nbsp;file for your TLDs — with ease.</p>
</section>

<section class="peekaboo-wrap">
  <figure class="peekaboo">
    <img class="peekaboo-item" alt="Dolo export screen showing the 'examplename' TLD with shakestation theme" src="/media/dolo-shakestation.png"/>
    <img class="peekaboo-item" alt="Dolo export screen showing the 'examplename' TLD with the shake theme" src="/media/dolo-theshake.png"/>
    <img class="peekaboo-item" alt="Dolo export screen showing the 'examplename' TLD" src="/media/dolo.png"/>
  </figure>
</section>

<section class="blurb">
  <p class="inner-wrap">Uncover all <a href="/features">the features</a>, get your questions answered in <a href="/faq">the&nbsp;FAQ</a>, and learn how to get your TLD online with our <a href="/guides">helpful&nbsp;guides</a>.</p>
</section>
