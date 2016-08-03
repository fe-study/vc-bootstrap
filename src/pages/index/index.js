import vHello from '../../components/helloworld/helloworld.vue'
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
        vHello
    }
})