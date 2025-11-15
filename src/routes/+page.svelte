<script lang="ts">
	import { articles } from '$lib/placeholder/articles';
	import Article from '$lib/components/Article.svelte';
	import { SunMoon } from '@lucide/svelte';

	let lightTheme = true;

	const toggleTheme = () => {
		lightTheme = !lightTheme;
	};
</script>

<div class="main-content">
	<div class="theme-settings">
		<button class="theme-settings__button" on:click={toggleTheme} aria-label="Toggle theme">
			<SunMoon />
		</button>
	</div>

	<div class="article-layout">
		{#each articles as article (article.title)}
			<div
				class="article-card"
				class:main-article={article.flag === 'main'}
				class:medium-article={article.flag === 'medium'}
			>
				<Article title={article.title} content={article.content} image={article.img} />
			</div>
		{/each}
	</div>
</div>

<style>
	:root {
		color-scheme: light;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
	}

  :global(body:has([popover]:popover-open)) {
    overflow: hidden;
    pointer-events: none;
  }

	.main-content {
		display: flex;
		flex-direction: column;
		container-type: inline-size;
		width: 90%;
		margin: auto;

		.theme-settings {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			justify-content: center;

			.theme-settings__button {
				display: flex;
				margin: auto 0;
				background: none;
				border: none;
				cursor: pointer;
			}
		}

    .article-layout {
      padding: 1rem;
      margin: 0 auto;

      /* fallback for masonry */
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }

    .article-card {
      padding: 1rem;
      margin: 1rem;
      background: #fafafa;
      border-radius: 1rem;
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(1.01);
      }

      &.main-article {
        grid-column: span 3;
      }

      &.medium-article {
        grid-column: span 2;
      }
    }

		@supports (display: masonry) {
			.article-layout {
        display: masonry;
				grid-template-rows: masonry;
			}
		}

    @container (max-width: 1104px) {
      .article-layout {
        grid-template-columns: repeat(2, 1fr);
      }

      .article-layout .article-card {
        &.main-article {
          grid-column: span 2;
        }

        &.medium-article {
          grid-column: span 1;
        }
      }
    }

    @container (max-width: 512px) {
      .article-layout {
        grid-template-columns: repeat(1, 1fr);
      }

      .article-layout .article-card {
        &.main-article {
          grid-column: span 1;
        }

        &.medium-article {
          grid-column: span 1;
        }
      }
    }
	}
</style>