<script lang="ts">
	import { articles } from '$lib/placeholder/articles';
	import Article from '$lib/components/Article.svelte';
</script>

<div class="news-page">
	{#each articles as article (article.title)}
		<div class="article-card"
				 class:main-article={article.flag === 'main-article'}>
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
        display: grid;
        gap: 1rem;
        padding: 1rem;
				margin-left: 10rem;
        margin-right: 10rem;

        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: masonry;
    }

    .masonry-item img {
        width: 100%;
        height: auto;
        display: block;
    }

		.article-card {
				cursor: pointer;
				overflow: hidden;
        border-bottom: solid black;
				inline-size: auto;


				&:hover {
            color: dimgrey;
        }

				&.main-article {
            grid-column: span 2;
            grid-row: span 2;
            padding: 2rem;
            border-right: solid black;
        }
		}

</style>