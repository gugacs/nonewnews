<script lang="ts">
	import {onMount} from 'svelte';

	export let title: string;
	export let content: string;
	export let image: string | undefined = undefined;

	let popoverId: string;

	onMount(() => {
		popoverId = crypto.randomUUID(); //creation of a unique id for each article
	});
</script>

<div class="main-container">

	{#if image}
		<img class="article-picture" src={image} alt="article picture" />
	{/if}

	<button popovertarget={popoverId} class="article-header-button">
		<h1 class="article-header">
			{title}
		</h1>
	</button>

	<p class="article-paragraph">
		{content}
	</p>


	<div popover id={popoverId} class="popover-container">
		<div class="progress-bar"></div>

		{#if image}
			<img class="article-picture" src={image} alt="article picture" />
		{/if}

		<h1 class="popover-header">
			{title}
		</h1>
		<p class="popover-paragraph">
			{content}
		</p>
	</div>
</div>

<style>
    .main-container {
        display: flex;
				width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        scroll-timeline: --main-timeline;

				.article-header-button {
            all: unset;
            cursor: pointer;
            display: block;
            width: 100%;
            text-align: center;
				}

        .article-header {
            font-family: Arial, sans-serif;
        }
				.article-header:hover {
						color: #646464;
				}

        .article-paragraph {
            font-family: Arial, sans-serif;
						text-overflow: ellipsis;
						margin: 0 1rem 0 1rem;
            white-space: pre-wrap;

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
        }

        .article-picture, .popover-picture {
            width: 100%;
            height: 10rem;
            object-fit: cover;
        }
    }

		.popover-container {
				width: 75%;
				height: 40rem;
				flex-direction: column;
				justify-content: center;
        border: 0.25rem solid black;
				border-radius: 1rem;
        animation: background-animation linear;
        overflow-y: auto;
        scroll-timeline: --popover-scroll-timeline block;

				.popover-header {
						font-family: Arial, sans-serif;
						font-size: 2rem;
						margin: 1rem;
				}

				.popover-paragraph {
						font-family: Arial, sans-serif;
						font-size: 1.5rem;
            white-space: pre-wrap;
						margin: 0 1rem 0 1rem;
				}
    }
    .popover-container::backdrop {
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
    }

    .progress-bar {
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        height: 0.5rem;
        background-color: #4f4f4f;
        transform-origin: left;

        animation: grow-progress linear;
        animation-timeline: --popover-scroll-timeline;
    }

    @keyframes grow-progress {
        from { transform: scaleX(0); }
        to   { transform: scaleX(1); }
    }

</style>