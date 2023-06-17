<script lang="ts">
	import type { Question, QuestionCategory } from './types/question.type';
	export let question: Question;
</script>

<h3 class="text-xl">Question {question.number}</h3>
<section>{question.body}</section>

<div>
	<label>
		<input type="radio" group={question.number} value={0} />
		Strongly Disagree
	</label>
</div>
<div>
	<label>
		<input type="radio" group={question.number} value={1} />
		Somewhat Disagree
	</label>
</div>
<div>
	<label>
		<input type="radio" group={question.number} value={2} />
		Undecided
	</label>
</div>
<div>
	<label>
		<input type="radio" group={question.number} value={3} />
		Somewhat Agree
	</label>
</div>
<div>
	<label>
		<input type="radio" group={question.number} value={4} />
		Strongly Agree
	</label>
</div>
