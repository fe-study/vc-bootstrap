<template>
	<div class="title">
		<div class="header-content">
			<h2>vc-bootstrap</h2>
			<p>Support by bootstrap@3.x and vue@1.x!</p>
		</div>
		<ul style="">
			<li>
				<a class="button default" 
					href="https://github.com/iwaimai-bi-fe/vc-bootstrap"
					target="_blank">github</a>
			</li>
			<li>
				<a class="button disabled" href="javascript:void(0)">download</a>
			</li>
	
		</ul>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				title: ''
			}
		}
	}
</script>
<style scoped>
	.title{
		padding-top: 100px;
		text-align: center;
		h2{
			font-size: 48px;
		}
	}
	ul{
		padding: 0;
		margin: 20px 0;
		li{
			list-style: none;
			margin: 0;
			padding: 5;
			font-size: 18px;
		}
	}
</style>