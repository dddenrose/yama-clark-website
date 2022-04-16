// src/plugins/vuetify.js
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    theme: {
		disable: true,
        style: 'none'
	}
}

// const vuetify = new Vuetify({
//     theme: { disable: true },
//   })

// export default vuetify

// export default new Vuetify({
//     theme: {
// 		disable: 'true',
// 	}
// })

export default new Vuetify(opts)