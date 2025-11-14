<script lang="ts">
  import { Search, Menu, X } from '@lucide/svelte';
  let menuOpen = false;
  const closeMenu = () => {
    menuOpen = false;
  };
  const toggleMenu = () => {
    menuOpen = !menuOpen;
  };
</script>

<div class="header">
  <nav class="navbar">
    <div class="nav-left">
      <a href="/" class="logo">N</a>
      <button class="burger-button" on:click={toggleMenu} aria-label="Toggle menu">
        {#if menuOpen}<X size="24" />{:else}<Menu size="24" />{/if}
      </button>
    </div>

    <div class="links" class:open={menuOpen}>
      <a href="/properties" on:click={closeMenu}>Properties</a>
      <a href="/selectors" on:click={closeMenu}>Selectors</a>
      <a href="/combinators" on:click={closeMenu}>Combinators</a>
      <a href="/pseudo-classes" on:click={closeMenu}>Pseudo-classes</a>
      <a href="/pseudo-elements" on:click={closeMenu}>Pseudo-elements</a>
      <a href="/at-rules" on:click={closeMenu}>At-rules</a>
      <a href="/values" on:click={closeMenu}>Values</a>
      <a href="/types" on:click={closeMenu}>Types</a>
      <a href="/functions" on:click={closeMenu}>Functions</a>
    </div>

    <div class="ctas">
      <a href="/" class="search-button"><Search size="20"/></a>
      <a href="/" class="subscribe-button">
        Subscribe Now<br/><span>Starting at $1</span>
      </a>
    </div>
  </nav>

  <div class="title"><h1>NoNewNews</h1></div>

  <div class="trending">
    <h2>Trending:</h2>
    <div class="topics">
      <a href="/">Trending Topic 1</a>
      <a href="/">Trending Topic 2</a>
      <a href="/">Trending Topic 3</a>
    </div>
  </div>
</div>

<style>
.header {
  display: flex;
  flex-direction: column;
  container-type: inline-size;
  width: 100%;

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: clamp(0.5rem, 2vw, 0.75rem) clamp(0.5rem, 2vw, 1rem);
    border-bottom: 1px solid #000;
    background-color: #FFF;
    gap: clamp(0.5rem, 2vw, 1rem);
    position: relative;
  }

  .nav-left {
    display: flex;
    align-items: center;
    gap: clamp(0.5rem, 2vw, 1rem);

    .logo {
      font-family: 'Times New Roman', serif;
      font-weight: bold;
      font-size: clamp(1.25rem, 4vw + 0.5rem, 2rem);
      color: #000;
      text-decoration: none;
      padding-right: 1.25rem;
      border-right: 1px solid #000;
    }

    .burger-button {
       display: none;
       background: none;
       border: none;
       color: #000;
       cursor: pointer;
       padding: 0.25rem;
       transition: color 0.2s;

       &:hover {
         color: #000000CC;
       }
     }
  }

  .links {
    display: flex;
    align-items: center;
    gap: clamp(0.25rem, 1vw, 0.5rem);
    flex: 1;
    min-width: 0;

    a {
      font-family: 'Arial', sans-serif;
      font-size: clamp(0.6rem, 1.2vw + 0.3rem, 0.75rem);
      font-weight: 900;
      color: #000;
      text-transform: uppercase;
      text-decoration: none;
      padding-right: 0.5rem;
      border-right: 1px solid #000;
      text-wrap: nowrap;
      transition: color 0.2s;

      &:hover {
        color: #00000099;
      }

      &:last-child {
        border-right: none;
      }
    }
  }


  .ctas {
    display: flex;
    gap: clamp(0.25rem, 1vw, 0.5rem);
    align-items: center;

    .search-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: clamp(28px, 6vw, 32px);
      height: clamp(28px, 6vw, 32px);
      color: #000;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: #00000099;
      }
    }

    .subscribe-button {
      font-family: 'Arial', sans-serif;
      font-size: clamp(0.6rem, 1.2vw + 0.2rem, 0.75rem);
      padding: clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.75rem, 3vw, 2rem);
      border-radius: 5rem 0 0 5rem;
      border: 1px solid rgb(38, 92, 192);
      background-color: rgb(38, 92, 192);
      color: #FFF;
      text-decoration: none;
      text-align: center;
      font-weight: bold;
      text-transform: uppercase;
      text-wrap: nowrap;
      line-height: 1.2;

      span {
        font-size: clamp(0.55rem, 1vw + 0.2rem, 0.65rem);
        font-weight: normal;
        opacity: 0.9;
        letter-spacing: 0.5px;
      }
    }
  }

  .title {
    padding: clamp(0.75rem, 2vw, 1rem);
    border-bottom: 1px solid #000;

    h1 {
      margin: 0;
      font-family: 'Times New Roman', serif;
      font-size: clamp(1.5rem, 5vw + 0.5rem, 2.5rem);
      font-weight: bold;
      text-align: center;
    }
  }

  .trending {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: 1px solid #000;
    margin: 0 0.5rem;
    padding: clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.5rem, 2vw, 1rem);
    gap: clamp(0.5rem, 2vw, 1rem);

    h2 {
      font-family: 'Arial', sans-serif;
      font-size: clamp(0.65rem, 1.2vw + 0.3rem, 0.75rem);
      font-weight: 900;
      text-transform: uppercase;
      color: rgba(145, 37, 28);
      text-wrap: nowrap;
      margin: 0;
    }

    .topics {
      display: flex;
      gap: clamp(0.5rem, 1.5vw, 1rem);
      flex-wrap: wrap;
      flex: 1;
      min-width: 0;

      a {
        font-family: 'Arial', sans-serif;
        font-size: clamp(0.6rem, 1.1vw + 0.25rem, 0.7rem);
        color: #000;
        text-decoration: none;
        text-transform: uppercase;
        text-wrap: nowrap;
        font-weight: 600;

        &:hover {
          color: #00000099
        }
      }
    }
  }

  @container (max-width: 1104px) {
    .navbar {
      flex-wrap: wrap;

      .burger-button {
        display: flex;
      }

      .links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: #FFF;
        border: 1px solid #00000050;
        overflow: hidden;
        z-index: 100;
        flex-direction: column;
        gap: 0;
        max-height: 0;
        opacity: 0;
        text-align: center;

        &.open {
          max-height: 32rem;
          opacity: 1;
        }

        a {
          padding: 0.75rem 1rem;
          border-right: none;
          border-bottom: 1px solid #000;
          width: 100%;

          &:hover {
            color: #00000099;
          }
        }
      }
    }
  }

  @container (max-width: 512px) {
    .subscribe-button {
      br, span {
        display: none;
      }
    }
  }
}
</style>
