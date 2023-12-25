<script lang="ts"></script>

<style lang="scss">
  @import "src/scss/component/mixin";
  @import "src/scss/component/color";

  header {
    padding-bottom: 5rem;
    padding-top: 5rem;

    @media (max-width: 600px) {
      margin-top: 70px;
    }
  }

  details svg {
    display: inline-block;
    inline-size: 1rem;
  }
</style>

<svelte:head>
  <title>Dolo by Neuenet &middot; FAQ</title>

  <meta name="description" content="Answers to some frequently asked questions about Dolo."/>
  <meta property="og:description" content="Answers to some frequently asked questions about Dolo."/>
  <meta property="og:title" content="Dolo by Neuenet &middot; FAQ"/>

  <link rel="preload" href="/media/background/101.png" as="image"/>
</svelte:head>

<header>
  <div class="inner-wrap">
    <h1>FAQ</h1>
    <h3>Answers to your questions&hellip;probably</h3>
  </div>
</header>

<section class="ancillary">
  <div class="inner-wrap">
    <details open>
      <summary>What does “dolo” mean?</summary>
      <p>From <a href="https://en.wikipedia.org/wiki/Dolos" rel="noopener noreferrer" target="_blank">Wikipedia</a>:</p>
      <blockquote>A <em>dolos</em> is a wave‑dissipating concrete block used in great numbers as a form of coastal management.</blockquote>
      <p>In short, a collection of these protects a shore&hellip;seemed like a great name for a security app for the internet, sometimes referred to as a “sea of information.”</p>
    </details>

    <details>
      <summary>I downloaded Dolo, great. Now what?</summary>
      <p>At a minimum, you’ll need a TLD and the IPv4 address of your nameserver. Visit our <a href="/guides">Guides page</a> for step‑by‑step instructions on how to securely get your TLD online. New guides with Dolo and other nameservers will be added periodically.</p>
    </details>

    <details>
      <summary>What is this “Wallet Records” section in the Export view?</summary>
      <p>The “Wallet Records” section lists the DNS records your TLD needs on the Handshake blockchain. Every operating system on the planet is preloaded with a kind of digital phonebook for ICANN TLDs like <code>.com</code>, <code>.org</code>, &amp;c. You gotta fill out your phonebook entry. 😉</p>
    </details>

    <details>
      <summary>What is the “regenerate certs” button for?</summary>
      <p>The TLS certificate and key for your TLD will expire a year from the day you generated files and records for your TLD. Your nameserver IP probably won’t change so it’d be annoying to regenerate everything and have to update wallet records on the blockchain.</p>
      <p>Instead, when you regenerate certs you will update the TLS certificate and key <strong>and</strong> get updated DNS records (TLSA and RRSIG). These will be the last three records in your TLD’s export section (all share the domain <code>_443._tcp.&lt;YOUR‑TLD&gt;</code>).</p>
      <p class="img-wrap"><img alt="Dolo's settings window" src="/media/faq/dolo-regen-certs.png"/></p>
    </details>

    <details>
      <summary>Why can’t I select text in any field? I need to copy its contents!</summary>
      <p>The top right of every input field has an icon of two stacked squares <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 8h-2c-.552 0-1 .447-1 1s.448 1 1 1h2c.551 0 1 .448 1 1v10c0 .552-.449 1-1 1h-10c-.551 0-1-.448-1-1v-2c0-.553-.448-1-1-1s-1 .447-1 1v2c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-10c0-1.654-1.346-3-3-3zm-5 5v-10c0-1.654-1.346-3-3-3h-10c-1.654 0-3 1.346-3 3v10c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3zm-14 0v-10c0-.552.449-1 1-1h10c.551 0 1 .448 1 1v10c0 .552-.449 1-1 1h-10c-.551 0-1-.448-1-1z"/></svg>. Clicking it will copy that field’s&nbsp;contents.</p>
    </details>

    <details>
      <summary>How do I change the theme?</summary>
      <p>On macOS, <code>Command + ,</code> opens the Settings window (you can also access Settings from the File&nbsp;menu).</p>
      <p>In addition to changing the theme, you can choose which view you’d like to land on when opening Dolo; the “New” entry view or the “Export” view.</p>
      <p class="img-wrap"><img alt="Dolo's settings window" src="/media/faq/dolo-settings.png"/></p>
    </details>
  </div>
</section>

<section class="blurb">
  <p class="inner-wrap">That’s it for the FAQ, so, check out all <a href="/features">the features</a>, and learn how to get your TLD online with our <a href="/guides">helpful&nbsp;guides</a>.</p>
</section>
