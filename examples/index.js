import Vue from 'vue'
import {
		vcHello,
		vcPagination,
		vcTabs,
		vcTable,
		vcModal,
		vcEasyclearinput,
		vcAutocomplete

	} from '../dist/build.js'

new Vue({
	el: '#app',
	data () {
		return {
			total: 180,
			perPage: 12,
			currentPage: 3
		}
	},
	components: {
		vcHello,
		vcPagination
	},
	methods: {
		onPageChange (page) {

		}
	},
	ready () {
		console.log({
		vcHello,
		vcPagination,
		vcTabs,
		vcTable,
		vcModal,
		vcEasyclearinput,
		vcAutocomplete

	})		
	}
})