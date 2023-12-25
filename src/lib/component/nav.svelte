<script lang="ts">
  /// import
  import { navigating, page } from "$app/stores";

  /// var
  let isToggled = false;

  /// dynavar
  $: activeRoute = $page.route.id;

  $: if ($navigating) {
    isToggled = false;
  }

  /// function
  function triggerMenu(event: any) {
    event.preventDefault();

    if (isToggled === false)
      isToggled = true;
    else
      isToggled = false;
  }
</script>

<style lang="scss">
  @import "src/scss/component/color";

  nav {
    font-size: 1.25rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
    text-transform: lowercase;

    @media (max-width: 600px) {
      width: 100%; height: 72px;
      top: 0; left: 0;

      background-color: $uchu-yin;
      border-bottom: 1px solid $uchu-gray-3;
      position: fixed;
      z-index: 10;
    }

    .inner-wrap {
      align-items: center;
      display: flex;

      @media (max-width: 600px) {
        flex-direction: column;
      }

      > div:not(.nav-links) {
        flex: 1;

        @media (max-width: 600px) {
          align-items: center;
          display: flex;
          justify-content: space-between;
          width: 100%;
        }

        a {
          display: block;
          width: fit-content;
        }
      }
    }

    .nav-links {
      @media (min-width: 601px) {
        display: contents;
      }

      @media (max-width: 600px) {
        flex-direction: column;
        left: 0;
        position: relative;
        width: calc(100% + 4rem);

        &:not(.active) {
          display: none;
        }

        &.active {
          display: flex;
        }
      }

      a {
        @media (max-width: 600px) {
          background-color: $uchu-yin;
          display: block;
          padding: 0.5rem 2rem 1rem;
          text-align: right;
          width: 100%;

          &:first-of-type {
            margin-top: 1rem; padding-top: 1rem;
          }

          &:last-of-type {
            border-bottom: 1px solid $uchu-gray-3;
            padding-bottom: 1rem;
          }
        }
      }
    }

    .menu {
      width: fit-content; height: fit-content;
      background-color: transparent;

      @media (min-width: 601px) {
        display: none;
      }

      svg {
        inline-size: 2rem;
      }
    }

    a {
      position: relative;

      &:not(:first-of-type) {
        @media (min-width: 601px) {
          margin-left: 1rem;
        }
      }

      svg {
        inline-size: 10rem;
      }
    }

    :global(a.active) {
      &::after {
        width: 0; height: 0;

        content: "";
        position: absolute;

        @media (min-width: 601px) {
          bottom: -1.5rem; left: calc(50% - 0.75rem);

          border-left: 0.75rem solid transparent;
          border-right: 0.75rem solid transparent;
          border-bottom: 1rem solid $uchu-yang;
        }

        @media (max-width: 600px) {
          bottom: 1rem; right: 0;

          border-bottom: 0.75rem solid transparent;
          border-right: 1rem solid $uchu-yang;
          border-top: 0.75rem solid transparent;
        }
      }
    }
  }
</style>

{#if activeRoute !== "/"}
  <nav>
    <div class="inner-wrap">
      <div>
        <a href="/" title="">
          <svg fill="currentColor" viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg">
            <path d="M274.56, 210.48l0, 40.32l-218.88, -0l0, -161.28l40.32, -0l0, 120.96l178.56, -0Zm-178.56, -120.96l0, -40.32l158.4, -0c33.408, -0 60.48, 27.072 60.48, 60.48l0, 100.8l-40.32, -0l0, -100.8c0, -11.232 -8.928, -20.16 -20.16, -20.16l-158.4, -0Zm460.8, 120.96l0, 40.32l-158.4, -0c-33.408, -0 -60.48, -27.072 -60.48, -60.48l0, -100.8l40.32, -0l0, 100.8c0, 11.232 8.928, 20.16 20.16, 20.16l158.4, -0Zm-178.56, -120.96l0, -40.32l158.4, -0c33.12, -0 60.48, 27.072 60.48, 60.48l0, 100.8l-40.32, -0l0, -100.8c0, -11.232 -9.216, -20.16 -20.16, -20.16l-158.4, 0Zm725.76, 120.96l0, 40.32l-158.4, 0c-33.408, 0 -60.48, -27.072 -60.48, -60.48l0, -100.8l40.32, 0l0, 100.8c0, 11.232 8.928, 20.16 20.16, 20.16l158.4, -0Zm-178.56, -120.96l0, -40.32l158.4, 0c33.12, 0 60.48, 27.072 60.48, 60.48l0, 100.8l-40.32, 0l-0, -100.8c-0, -11.232 -9.216, -20.16 -20.16, -20.16l-158.4, 0Zm-244.8, 161.28c-33.408, 0 -60.48, -27.072 -60.48, -60.48l0, -141.12l40.32, 0l-0, 141.12c-0, 11.232 8.928, 20.16 20.16, 20.16l181.44, 0l0, 40.32l-181.44, 0Z"/>
          </svg>
        </a>

        <button class="menu" on:click={triggerMenu} type="button">
          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m3 6h18c.552 0 1-.447 1-1s-.448-1-1-1h-18c-.552 0-1 .447-1 1s.448 1 1 1zm18 5h-18c-.552 0-1 .447-1 1s.448 1 1 1h18c.552 0 1-.447 1-1s-.448-1-1-1zm0 7h-18c-.552 0-1 .447-1 1s.448 1 1 1h18c.552 0 1-.447 1-1s-.448-1-1-1z"/>
          </svg>
        </button>
      </div>
      <div class="nav-links" class:active={isToggled}>
        <a class:active={activeRoute === "/features"} href="/features" title="">Features</a>
        <a class:active={activeRoute === "/faq"} href="/faq" title="">FAQ</a>
        <a class:active={activeRoute === "/guides"} href="/guides" title="">Guides</a>
      </div>
    </div>
  </nav>
{/if}
