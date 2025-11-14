<script lang="ts">
	import { articles } from '$lib/placeholder/articles';
	import Article from '$lib/components/Article.svelte';
</script>

<div class="news-page">
	{#each articles as article (article.title)}
		<div class="article-card"
				 class:main-article={article.flag === 'main'}
				 class:medium-article={article.flag === 'medium'}>
			<Article
				title={article.title}
				content={article.content}
				image={article.img}
			/>
		</div>
	{/each}
</div>

<style>
    .news-page {
				padding: 1rem;
				max-width: 80rem;
        display: masonry;
				margin: 0 auto;
        grid-template-columns: repeat(4, 1fr);
				grid-template-rows: masonry;
    }

		.article-card {
				cursor: pointer;
				padding: 1rem;
        border-bottom: 0.1em solid black;

				&:hover {
            color: dimgrey;
        }

				&.main-article {
            grid-column: span 3;
        }

        &.medium-article {
            grid-column: span 2;
        }
		}

</style>