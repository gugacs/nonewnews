<script lang="ts">
  import { Search } from '@lucide/svelte';
</script>

<div class="header">
  <nav class="navbar">
    <div class="links">
      <a href="/" class="logo">N</a>
      <a href="/properties" class="link">Properties</a>
      <a href="/selectors" class="link">Selectors</a>
      <a href="/combinators" class="link">Combinators</a>
      <a href="/pseudo-classes" class="link">Pseudo-classes</a>
      <a href="/pseudo-elements" class="link">Pseudo-elements</a>
      <a href="/at-rules" class="link">At-rules</a>
      <a href="/values" class="link">Values</a>
      <a href="/types" class="link">Types</a>
      <a href="/functions" class="link">Functions</a>
    </div>
    <div class="ctas">
      <a href="/" class="search-button">
        <Search size="20" />
      </a>
      <a href="/" class="subscribe-button">
        Subscribe Now
        <br />
        <span class="price">Starting at $1</span>
      </a>
    </div>
  </nav>
  <div class="title">
    <h1>NoNewNews</h1>
  </div>
  <div class="trending">
    <h2 class="caption">Trending:</h2>
    <div class="topics">
      <a href="/" class="topic">Trending Topic 1</a>
      <a href="/" class="topic">Trending Topic 2</a>
      <a href="/" class="topic">Trending Topic 3</a>
    </div>
  </div>
</div>

<style>
.header {
  display: flex;
  flex-direction: column;
  width: 100%;

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 0 0 1rem;
    border-bottom: 1px solid #000;
    font-family: 'Times New Roman', serif;
    background-color: #fff;

    .logo {
      font-family: 'Times New Roman', serif;
      font-weight: bold;
      font-size: 2rem;
      color: #000;
      padding-right: 0.75rem;
    }

    .link {
      font-family: 'Arial', sans-serif;
      font-size: 0.75rem;
      padding: 0.125rem 0.5rem 0.125rem 0;
    }

    .links {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      overflow-x: auto;
      white-space: nowrap;

      a {
        color: #333;
        font-weight: 900;
        text-transform: uppercase;
        text-decoration: none;
        border-right: 1px solid #222;
        border-bottom: 2px solid transparent;
        transition: color 0.2s;
      }

      a:hover {
        color: #888;
      }
    }

    .ctas {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .search-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      color: #000;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: #888;
      }
    }

    .subscribe-button {
      font-family: 'Arial', sans-serif;
      font-size: 0.75rem;
      padding: 0.75rem 2rem;
      border-radius: 5rem 0 0 5rem;
      border: 1px solid rgb(38, 92, 192);
      background-color: rgb(38, 92, 192);
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      text-transform: uppercase;
      text-align: center;

      .price {
        font-size: 0.65rem;
        font-weight: normal;
        opacity: 0.9;
        letter-spacing: 0.5px;
      }
    }
  }

  .title {
    padding: 1rem;
    font-family: 'Times New Roman', serif;
    border-bottom: 1px solid #000;

    h1 {
      margin: 0;
      font-size: 2.5rem;
      font-weight: bold;
      text-align: center;
    }
  }

  .trending {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #000;
    padding-left: 1rem;
    gap: 1rem;

    .caption {
      font-family: 'Arial', sans-serif;
      font-size: 0.75rem;
      font-weight: bold;
      text-transform: uppercase;
      color: rgba(145, 37, 28);
    }

    .topics {
      display: flex;
      gap: 1rem;
      align-items: center;

      .topic {
        font-family: 'Arial', sans-serif;
        font-size: 0.7rem;
        color: #000;
        text-decoration: none;
        font-weight: normal;
        text-transform: uppercase;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
