import vFooter from '../../components/footer/footer.js' 

import Vue from 'vue'
import _ejs from './index.ejs'
import './index.less'

export default Vue.extend({
    template: _ejs(),
    data () {
        return {

        }
    },
    components: {
        vFooter
    },
    methods: {
        linkTo (path){
            this.$route.router.go(path)
        }
    }
})