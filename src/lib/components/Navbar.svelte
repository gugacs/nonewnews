<script lang="ts">
  import { Search } from '@lucide/svelte';
</script>

<div class="header">
  <nav class="navbar">
    <div class="nav-left">
      <a href="/" class="logo">N</a>
    </div>

    <div class="links">
      <a href="/properties">Properties</a>
      <a href="/selectors">Selectors</a>
      <a href="/combinators">Combinators</a>
      <a href="/pseudo-classes">Pseudo-classes</a>
      <a href="/pseudo-elements">Pseudo-elements</a>
      <a href="/at-rules">At-rules</a>
      <a href="/values">Values</a>
      <a href="/types">Types</a>
      <a href="/functions">Functions</a>
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

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: clamp(0.5rem, 2vw, 0.75rem) clamp(0.5rem, 2vw, 1rem);
    border-bottom: 1px solid #000;
    background-color: #fff;
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
      color: #333;
      text-transform: uppercase;
      text-decoration: none;
      padding-right: 0.5rem;
      border-right: 1px solid #000;
      text-wrap: nowrap;
      transition: color 0.2s;

      &:hover {
        color: #888;
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
        color: #888;
      }
    }

    .subscribe-button {
      font-family: 'Arial', sans-serif;
      font-size: clamp(0.6rem, 1.2vw + 0.2rem, 0.75rem);
      padding: clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.75rem, 3vw, 2rem);
      border-radius: 5rem 0 0 5rem;
      border: 1px solid rgb(38, 92, 192);
      background-color: rgb(38, 92, 192);
      color: #fff;
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
    padding: clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.5rem, 2vw, 1rem);
    gap: clamp(0.5rem, 2vw, 1rem);

    h2 {
      font-family: 'Arial', sans-serif;
      font-size: clamp(0.65rem, 1.2vw + 0.3rem, 0.75rem);
      font-weight: bold;
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

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
