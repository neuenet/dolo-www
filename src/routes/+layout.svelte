<script lang="ts">
  /// util
  import Navigation from "$lib/component/nav.svelte";
</script>

<style lang="scss">
  @import "src/scss/component/color";
  @import "src/scss/component/mixin";

  @include font(400, "/type/getai", "dolo headline");
  @include font(400, "/type/necto-mono", "dolo mono");
  @include font(400, "/type/violet-sans", "dolo sans");

  :global(html) {
    font-size: 16px;
  }

  :global(body) {
    color: $uchu-yang;
    display: flex;
    flex-direction: column;
    font-family: "dolo sans", system-ui, sans-serif;
    font-size: 1.5rem;
  }

  :global(.inner-wrap) {
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    padding-left: 2rem;
    padding-right: 2rem;
    width: 100%;
  }

  main {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  :global(header) {
    align-items: center;
    background-color: $uchu-yang;
    background-image: url("/media/background/101.png");
    background-size: cover;
    color: $uchu-yin;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    :global(h1),
    :global(h3) {
      font-family: "dolo headline";
    }

    :global(h1) {
      letter-spacing: -0.075rem;
      position: relative;
      text-transform: uppercase;

      @media (min-width: 601px) {
        font-size: 5rem;
      }

      @media (max-width: 600px) {
        font-size: 3rem;
        margin-bottom: 0.5rem;
        text-shadow: 1px 2px 0 $uchu-yang-9;
      }
    }

    :global(h3) {
      letter-spacing: -0.05rem;

      @media (min-width: 601px) {
        font-size: 2rem;
      }

      @media (max-width: 600px) {
        font-size: 1.75rem;
        text-shadow: 1px 2px 0 $uchu-yang-9;
      }
    }
  }

  :global(.ancillary) {
    align-items: center;
    display: flex;
    flex: 1;
    padding-bottom: 2rem;
    padding-top: 2rem;
  }

  :global(a) {
    transition: color 0.2s;

    &:hover {
      color: $uchu-blue;
    }
  }

  :global(blockquote),
  :global(p),
  :global(ul) {
    font-size: 1.15rem;
  }

  :global(h3) {
    font-size: 1.75rem;
  }

  :global(blockquote) {
    background-color: $uchu-yellow-1;
    padding: 0.5rem 1rem 0.5rem 3rem;
    position: relative;

    &::before {
      width: 3rem; height: 100%;
      top: 0; left: 0;

      color: $uchu-yellow-7;
      content: "”";
      font-size: 4rem;
      line-height: 1.13;
      position: absolute;
      text-align: center;
    }
  }

  :global(p code),
  :global(pre) {
    font-size: 1.05rem;
  }

  :global(p code) {
    background-color: $uchu-gray-1;
    font-style: normal;
  }

  :global(code) {
    font-family: "Berkeley Mono", "dolo mono", monospace;
  }

  :global(details) {
    &:not(:last-of-type) {
      margin-bottom: 2rem;
    }

    > :global(*:not(summary)) {
      margin: 1rem 0 0 1.75rem;
    }

    :global(hr) {
      border-color: $uchu-gray-3;
      border-width: 1px;
      margin-top: 2rem;
    }

    :global(summary) {
      user-select: none;

      @media (min-width: 601px) {
        font-size: 2rem;
      }

      @media (max-width: 600px) {
        font-size: 1.5rem;
      }

      &::marker {
        font-size: inherit;
      }
    }
  }

  :global(.img-wrap) {
    @media (max-width: 600px) {
      left: -2rem;
      margin: 1rem 0 0 0 !important;
      position: relative;
      width: calc(100% + 4rem);
    }
  }

  :global(.blurb) {
    background-color: $uchu-pink-8;
    color: $uchu-yin;

    @media (min-width: 1201px) {
      padding: 4rem 0;
    }

    @media (max-width: 1200px) {
      padding: 2rem 0;
    }

    :global(p) {
      @media (min-width: 1201px) {
        font-size: 3rem;
      }

      @media (min-width: 601px) and (max-width: 1200px) {
        font-size: 1.75rem;
      }

      @media (max-width: 600px) {
        font-size: 1.5rem;
      }
    }

    :global(a:hover) {
      color: $uchu-pink;
    }
  }

  footer {
    background-color: $uchu-yin;
    font-size: 1rem;
    padding: 2rem 0;
    position: relative;

    .inner-wrap {
      display: flex;
      justify-content: space-between;

      @media (min-width: 801px) {
        flex-direction: row;
      }

      @media (max-width: 800px) {
        flex-direction: column;
      }
    }

    p {
      font-size: inherit;

      @media (max-width: 800px) {
        margin-bottom: 1rem;
      }
    }

    ul {
      display: flex;
      font-size: inherit;
      list-style-type: none;
      text-transform: lowercase;

      @media (min-width: 801px) {
        flex-direction: row;
      }

      @media (max-width: 800px) {
        flex-direction: column;
      }

      li {
        &:not(:first-child) {
          @media (min-width: 801px) {
            margin-left: 1rem;
          }
        }
      }
    }
  }
</style>

<main>
  <Navigation/>
  <slot></slot>
</main>

<footer>
  <div class="inner-wrap">
    <p>Built by <a href="https://neuenet.com" rel="noopener noreferrer" target="_blank">Neuenet</a> for the <a href="https://handshake.org" rel="noopener noreferrer" target="_blank">Handshake</a> community</p>

    <ul role="list">
      <li role="listitem">
        <a
          href="https://github.com/neuenet/dolo-www"
          rel="noopener noreferrer"
          target="_blank">View site source</a>
      </li>
      <li role="listitem">
        <a
          href="https://github.com/neuenet/dolo-desktop"
          rel="noopener noreferrer"
          target="_blank">View app source</a>
      </li>
    </ul>
  </div>
</footer>
