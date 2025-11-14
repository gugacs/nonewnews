<script lang="ts">
	import image from '../lib/assets/favicon.svg'

	interface Article {
		title: string;
		content: string;
		img?: string;
		flag?: string;
	}

	const articles: Article[] = [
		{
			title: 'Title1',
			content: 'This is an example text. This is an example text. This is an example text. This is an example text. This is an example text.',
			img: image,
			flag: 'main-article',
		},
		{
			title: 'Title2',
			content: 'This is an example text. This is an example text. This is an example text. This is an example text. This is an example text.',
			img: image,
		},
		{
			title: 'Title3',
			content: 'This is an example text. This is an example text. This is an example text. This is an example text. This is an example text.',
		},
		{
			title: 'Titel4',
			content: 'This is an example text. This is an example text. This is an example text. This is an example text. This is an example text.',
		},
		{
			title: 'Titel5',
			content: 'This is an example text. This is an example text. This is an example text. This is an example text. This is an example text.',
		},
		{
			title: 'Titel6',
			content: 'This is an example text. This is an example text. This is an example text. This is an example text. This is an example text.' +
				'This is an example text. This is an example text. This is an example text. This is an example text. This is an example text.' +
				'This is an example text. This is an example text. This is an example text. This is an example text. This is an example text.',
		}
		,
		{
			title: 'Titel7',
			content: 'This is an example text. This is an example text. This is an example text. This is an example text. This is an example text.',
		}
		,
		{
			title: 'Titel8',
			content: 'This is an example text. This is an example text. This is an example text. This is an example text. This is an example text.',
		}
	];

</script>


<div class="news-page">
	{#each articles as article (article.title)}
		<div class="article-card"
				 class:main-article={article.flag === 'main-article'}>
			{#if article.img}
				<img class="article-img" src={article.img} alt={article.title} />
			{/if}
			<h1>{article.title}</h1>
			<p>{article.content}</p>
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

						.article-img {
								border: solid 1px dimgrey;
								align-self: center;
						}
        }
		}

</style>