<template>
	<div class="title">
		<h2>{{title}}</h2>
		<ul>
			<li>
				<a href="javascript:void(0)">vcTab</a>
			</li>
			<li>
				<a href="javascript:void(0)">vcPagination</a>
			</li>
			<li>
				<a href="javascript:void(0)">vcModal</a>
			</li>
			<li>
				<a href="javascript:void(0)">vcDateRangePicker</a>
			</li>
			<li>
				<a href="javascript:void(0)">vcEchart</a>
			</li>
			<li>
				<a href="javascript:void(0)">vcTable</a>
			</li>
		</ul>
		<div>
			<button class="btn btn-success">
				<span class="icon">
			        <i class="glyphicon glyphicon-github">github</i>
			      </span>
			</button>
			<button class="btn btn-success">
				下载
			</button>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				title: 'vc-bootstrap!'
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