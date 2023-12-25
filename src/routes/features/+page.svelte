<script lang="ts">
  /// util
  import { getAgentSystem } from "../../utility/get-system";

  /// const
  const separator = getAgentSystem() === "windows" ? "\\" : "/";
</script>

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

  ul {
    align-items: stretch;
    display: grid;
    gap: 13px 13px;
    grid-auto-flow: row dense;
    grid-auto-rows: 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    justify-items: stretch;
    list-style-type: none;

    @media (min-width: 1201px) {
      grid-auto-columns: 1fr 1fr 1fr;
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1200px) {
      grid-auto-columns: 1fr 1fr;
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 700px) {
      grid-auto-columns: 1fr;
      grid-template-columns: 1fr;
    }

    li {
      align-items: center;
      display: flex;
      margin-bottom: 1rem;

      svg {
        width: 5rem; height: 5rem;
      }

      p {
        margin-left: 1rem;
        padding-right: 2rem;
        width: 100%;
      }
    }
  }
</style>

<svelte:head>
  <title>Dolo by Neuenet &middot; Features</title>

  <meta name="description" content="Dolo's features are designed with you in mind."/>
  <meta property="og:description" content="Dolo's features are designed with you in mind."/>
  <meta property="og:title" content="Dolo by Neuenet &middot; Features"/>

  <link rel="preload" href="/media/background/101.png" as="image"/>
</svelte:head>

<header>
  <div class="inner-wrap">
    <h1>Features</h1>
    <h3>Designed with you in&nbsp;mind</h3>
  </div>
</header>

<section class="ancillary">
  <div class="inner-wrap">
    <ul>
      <li>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="currentColor">
            <path d="M14.4 8.9c-0.2 0-0.4.2-0.4.4 0 0.2.2.4.4.4 0.2 0 0.4-0.2.4-0.4 0-0.2-0.2-0.4-0.4-0.4"></path>
            <path d="M9.5 11.3l-0.9-2c-0.3-0.8-0.1-1.7.5-2.3l2.9-2.9c.6-0.6 1.4-0.7 2.2-0.4l3.5 1.5c.5.2.9.6 1.1 1.1l1.5 3.5c.3.8.1 1.6-0.4 2.2l-2.9 2.9c-0.6.6-1.4.7-2.2.4l-2.1-0.9c0 0-6 6-6 6h-3.2v-3.2l6-5.9Z"></path>
          </g>
        </svg>

        <p>creates key‑signing keys/zone‑signing keys (KSK/ZSK)</p>
      </li>

      <li>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="currentColor">
            <path d="M10, 14c-3.866, 0-7-1.119-7-2.5"/>
            <path d="M17, 6.5C17, 7.881, 13.866, 9, 10, 9S3, 7.881, 3, 6.5"/>
            <circle cx="17" cy="17" r="4"/>
            <path d="M17, 10V4.5C17, 3.119, 13.866, 2, 10,2S3, 3.119, 3, 4.5v12C3, 17.881, 6.134, 19, 10, 19"/>
            <path d="M18.345, 16.208l-1.68, 1.679-1.01-1.007"/>
          </g>
        </svg>

        <p>generates DNS records and automatically signs them</p>
      </li>

      <li>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="currentColor">
            <path d="M3, 9H21"/>
            <path d="M11, 5.995, 10.995, 6, 11, 6.005, 11.005, 6, 11, 5.995"/>
            <path d="M8.5, 5.995, 8.495, 6l.005.005L8.505, 6, 8.5, 5.995"/>
            <path d="M6, 5.995, 5.995, 6, 6, 6.005, 6.005, 6, 6, 5.995"/>
            <path d="M11, 5.995, 10.995, 6, 11, 6.005, 11.005, 6, 11, 5.995"/>
            <path d="M8.5, 5.995, 8.495, 6l.005.005L8.505, 6, 8.5, 5.995"/>
            <path d="M6, 5.995, 5.995, 6, 6, 6.005, 6.005, 6, 6, 5.995"/>
            <path d="M14.61987, 17.07837l-1.327, 1.3269A1, 1, 0, 0, 0, 13, 19.1124V20a1, 1, 0, 0, 0, 1, 1h.88754a1, 1, 0, 0, 0, 0.70711-0.29289l1.327-1.327"/>
            <path d="M14.61987, 17.07837a3.30593, 3.30593, 0, 1, 1, 2.30176, 2.30176"/>
            <path d="M17.75, 16.245l.005.005-0.005.005-0.005-0.005.005-0.005"/>
            <path d="M10, 21H6a3, 3, 0, 0, 1-3-3V6A3, 3, 0, 0, 1, 6, 3H18a3, 3, 0, 0, 1, 3, 3v5"/>
          </g>
        </svg>

        <p>creates TLS certs for your TLD’s root&nbsp;website</p>
      </li>

      <li>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="currentColor">
            <line x1="13.5" y1="10" x2="13.5" y2="7"/>
            <line x1="15" y1="8.5" x2="12" y2="8.5"/>
            <line x1="19" y1="6" x2="19" y2="3"/>
            <line x1="17.5" y1="4.5" x2="20.5" y2="4.5"/>
            <path d="M21, 10v7a4, 4, 0, 0, 1-4, 4H7a4, 4, 0, 0, 1-4-4V7A4, 4, 0, 0, 1, 7, 3h6"/>
          </g>
        </svg>

        <p>two dark mode themes based on popular community&nbsp;projects</p>
      </li>

      <li>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="currentColor">
            <path d="M4.5 4H16l-0.01 0c1.1-0.01 2 .89 2 1.99v10"/>
            <path d="M9 8.02l6 0"/>
            <path d="M9 12l6 0"/>
            <path d="M7.5 20H19l-0.01-0.001c1.1 0 2-.9 2-2v-1.01 0c0-0.56-0.45-1-1-1h-10 -0.01c-0.56 0-1 .44-1 1 0 0 0 0 0 0v1.5 -0.01c0 0.82-0.68 1.5-1.5 1.5v0l0-0.001c-0.83 0-1.5-0.68-1.51-1.5 -0.001-0.01-0.001-0.01-0.001-0.01v-13 0c0-0.83-0.68-1.5-1.5-1.5 0 0-0.001 0-0.001 0v0l-0.01 0c-0.83 0-1.5.67-1.5 1.5 0 0 0 0 0 0v2.5l0 0c0 0.55.44.99 1 .99h1.99"/>
          </g>
        </svg>

        <p>AGPL-licensed, to benefit the Handshake community</p>
      </li>

      <li>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="currentColor">
            <rect x="7" y="7" width="14" height="14" rx="2"/>
            <path d="M17, 15a2, 2, 0, 0, 1-2, 2"/>
            <line x1="17" y1="10" x2="17" y2="12"/>
            <line x1="12" y1="17" x2="10" y2="17"/>
            <path d="M7, 17H5a2, 2, 0, 0, 1-2-2V5A2, 2, 0, 0, 1, 5, 3H15a2, 2, 0, 0, 1, 2, 2V7"/>
          </g>
        </svg>

        <p>easily copy/paste individual resource record values</p>
      </li>

      <li>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="currentColor">
            <path d="M20, 8V5a2, 2, 0, 0, 0-2-2H5A2, 2, 0, 0, 0, 3, 5V19a2, 2, 0, 0, 0, 2, 2H8"/>
            <line x1="7" y1="8" x2="16" y2="8"/>
            <line x1="7" y1="12" x2="9" y2="12"/>
            <line x1="7" y1="16" x2="8" y2="16"/>
            <rect x="12" y="16" width="10" height="5" rx="2.5" transform="translate(34 37) rotate(180)"/>
            <path d="M12.00893, 18.347l.3486-4.50143A2, 2, 0, 0, 1, 14.35156, 12h5.2978a2, 2, 0, 0, 1, 1.994, 1.84558L21.992, 18.347"/>
            <path d="M14.58549, 18.46421a.05143.05143, 0, 0, 0-0.071, 0, 0.05014.05014, 0, 1, 0, 0.071, 0"/>
          </g>
        </svg>

        <p>bind9‑style zone file, supported by most nameservers</p>
      </li>

      <li>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="currentColor">
            <path d="M11.5185, 13.633H8.54709a1, 1, 0, 0, 1-0.82685-0.43757l-0.51549-0.75785A1, 1, 0, 0, 0, 6.3779, 12H4.5185a1.5, 1.5, 0, 0, 0-1.5, 1.5v6a1.5, 1.5, 0, 0, 0, 1.5, 1.5h7a1.5, 1.5, 0, 0, 0, 1.5-1.5V15.133A1.5, 1.5, 0, 0, 0, 11.5185, 13.633Z"/>
            <path d="M16, 21h1.5A2.5, 2.5, 0, 0, 0, 20, 18.5V8.37167a3, 3, 0, 0, 0-0.87868-2.12132L16.74965, 3.87868A3, 3, 0, 0, 0, 14.62833, 3H7.5A2.5, 2.5, 0, 0, 0, 5, 5.5V9" fill-rule="evenodd"/>
            <path d="M19.97643, 8H16.5A1.5, 1.5, 0, 0, 1, 15, 6.5V3.02362" fill-rule="evenodd"/>
          </g>
        </svg>

        <p>data portability; generated files live in your <code>Documents{separator}Dolo</code> directory</p>
      </li>
    </ul>
  </div>
</section>

<section class="blurb">
  <p class="inner-wrap">You’ve seen the features now, so, get your questions answered in <a href="/faq">the&nbsp;FAQ</a>, and learn how to get your TLD online with our <a href="/guides">helpful&nbsp;guides</a>.</p>
</section>
