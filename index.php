<!DOCTYPE html>
<html lang="en">
<head>
	<script>
		<?php include "partytown/partytown.js" ?>
	</script>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Document</title>
</head>
<body>

	<script type="text/partytown" src="https://unpkg.com/petite-vue@0.4.0/dist/petite-vue.iife.js"></script>

	<div class="app">
		<ol>
			<li v-for='x in numbers'>{{ x }}</li>
		</ol>
	</div>

	<script type="text/partytown">
		PetiteVue.createApp({
			numbers: ['one', 'two', 'three', 'four']
		}).mount('.app')
	</script>

</body>
</html>