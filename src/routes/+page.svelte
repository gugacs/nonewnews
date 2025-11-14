<script lang="ts">
	import image from '../lib/assets/favicon.svg'
	import Article from '$lib/components/Article.svelte';

	interface Article {
		title: string;
		content: string;
		img?: string;
		flag?: string;
	}

	const articles: Article[] = [
		{
			title: 'Title1',
			content: 'LLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n' +
				'\n' +
				'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\n' +
				'\n' +
				'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.\n' +
				'\n' +
				'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n' +
				'\n' +
				'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. ',
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
			content: 'LLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n' +
				'\n' +
				'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\n' +
				'\n' +
				'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.\n' +
				'\n' +
				'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n' +
				'\n' +
				'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. ',
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