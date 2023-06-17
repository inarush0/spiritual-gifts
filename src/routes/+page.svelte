<script lang="ts">
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import SurveyQuestion from '$lib/SurveyQuestion.svelte';
	import { questions } from '$lib/questions';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<main>
	<h1 class="text-3xl">Spiritual Gifts Inventory</h1>
	<section>
		The Spiritual Gifts Inventory can help you determine which spiritual gifts you have been blessed
		with and are challenged to use in living out your baptismal call to build up the Kingdom of God.
		It will take approximately 15-20 minutes to take the inventory but a whole lifetime to use your
		spiritual gifts. There are 115 questions that assess your gifts in twenty-three different areas.
	</section>
	<section>
		You'll see your top three spiritual gifts and the List of Spiritual Gifts to deepen your
		understanding of these gifts and how they might be used. We've provided a list of some of our
		parish ministries and activities that need each of the 23 gifts and encourage you to explore the
		possibilities of using your gifts in one of these ministries.
	</section>
	<h2 class="text-2xl">Instructions for use:</h2>
	<section>
		Select only one answer per question: Strongly Agree, Shomwhat Agree, Undecided, Somewhat
		Disagree, Strongly Disagree
		<br />
		Don't be modest. Answer spontaneously and honestly.
	</section>
	{#each questions as question}
		<SurveyQuestion {question} />
	{/each}
</main>
