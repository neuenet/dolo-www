<script lang="ts">
  /// import
  import { page } from "$app/stores";
</script>

<style lang="scss">
  @import "src/scss/component/color";

  .section-error {
    width: 100vw; height: 100vh;

    align-items: center;
    background-attachment: fixed;
    background-image: url("/media/background/101.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: $uchu-yin;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    h1 {
      font-family: "dolo headline";

      @media (min-width: 601px) {
        font-size: 5rem;
      }

      @media (max-width: 600px) {
        font-size: 3rem;
      }
    }

    p {
      margin-top: 1.5rem;

      @media (min-width: 601px) {
        font-size: 2.5rem;
      }

      @media (max-width: 600px) {
        font-size: 1.15rem;
      }
    }
  }
</style>

<svelte:head>
  <title>Dolo by Neuenet &middot; {$page.status}</title>

  <meta name="description" content="Whatever you're looking for is not here."/>
  <meta property="og:description" content="Whatever you're looking for is not here."/>
  <meta property="og:title" content="Dolo by Neuenet &middot; {$page.status}"/>

  <link rel="preload" href="/media/background/101.png" as="image"/>
</svelte:head>

<section class="section-error">
  <div class="undershirt">
    <div class="section-content">
      <h1>{$page.status} &middot; {$page.error && $page.error.message}</h1>
      <p><a aria-label="go back home" href="/">Go back home</a></p>
    </div>
  </div>
</section>
