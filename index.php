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
		<p v-if='isTrue'>It's should hidden</p>
	</div>

	<script type="text/partytown">
		PetiteVue.createApp({
			isTrue: false
		}).mount('.app')
	</script>

</body>
</html>