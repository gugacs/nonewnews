<script lang="ts">
	import { onMount } from 'svelte';
	import { articles } from '$lib/placeholder/articles';
	import Article from '$lib/components/Article.svelte';
	import { SunMoon } from '@lucide/svelte';

	let isDarkTheme = false;

	onMount(() => {
		isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
		document.documentElement.classList.toggle('dark', isDarkTheme);
		document.documentElement.classList.toggle('light', !isDarkTheme);
	});

	const toggleTheme = () => {
		isDarkTheme = !isDarkTheme;
		document.documentElement.classList.toggle('dark', isDarkTheme);
		document.documentElement.classList.toggle('light', !isDarkTheme);
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
		color-scheme: light dark;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;

		--page-background: light-dark(#ffffff, #000000);
		--card-background: light-dark(#f0f0f0, #383838);
		--text-color: light-dark(#0f172a, #f1f5f9);
		--border-color: light-dark(#000000, #f5f5f5);

		--navbar-background: light-dark(#ffffff, #000000);
		--trending-bar-background: light-dark(#ffffff, #000000);

		--primary-button-background: light-dark(#2563eb, #3b82f6);
		--primary-button-text: light-dark(#ffffff, #ffffff);

		--popover-border-color: light-dark(#c8c8c8, #383838);

		--accent-color: light-dark(#dc2626, #f87171);
	}

	:root.dark {
		color-scheme: dark;
	}

	:root.light {
		color-scheme: light;
	}

	:global(body) {
		background-color: var(--page-background);
		transition: background-color 0.2s ease-in-out;
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
		color: var(--text-color);

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
				color: var(--text-color);
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
			background: var(--card-background);
			border-radius: 1rem;
			border: 0.1rem solid var(--popover-border-color);
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
			}
		}

		@supports (grid-template-rows: masonry) {
			.article-layout {
				display: grid;
				grid-template-rows: masonry;
			}
		}

		@container (max-width: 70rem) {
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

		@container (max-width: 32rem) {
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
