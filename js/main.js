Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
    	newElement: '',
		idForElement: 3,
		search: '',
		beforeEditCache: '',
		elements: [ 
			{
				title: "Сделать что-то",
				editing: false,
				completed: true,
				id: 1,
			},
			{
				title: "Сделать то-то",
				editing: false,
				completed: false,
				id: 2,
			},
			{
				title: "Сделать совсем другое",
				editing: false,
				completed: false,
				id: 3,
			},
		],

		filter: 'all',
    },
    actions: {},
    mutations: {
    	
    },
    getters: {},  
    modules: {}
})


var app = new Vue ({
	el: '#app',
	store,
	data: {
		newElement: '',
		idForElement: 4,
		search: '',
		beforeEditCache: '',
		elements: [ 
			{
				title: "сделать что-то",
				editing: false,
				completed: true,
				id: 1,
			},
			{
				title: "выгулять кого-то",
				editing: false,
				completed: false,
				id: 2,
			},
			{
				title: "купить то-то",
				editing: false,
				completed: false,
				id: 3,
			},
		],

		filter: 'all',

	},
	directives: {
	  focus: {
	    inserted (el) {
	      el.focus()
	    }
	  }
	},
	methods: {
		addElement () {

			if (this.newElement.trim() == 0) {
				return
			}
		
			this.elements.push ({
				editing: false,
				completed: false,
				id: this.idForElement,
				title: this.newElement,
			})

			this.newElement = ''
			this.idForElement++
		},


		

		delElement (index) {
			this.elements.splice(index, 1)
		},

		editEl (element) {
			this.beforeEditCache = element.title
			element.editing = true
		},

		doneEditEl (element) {
			if (element.title.trim() == 0) {
				element.title = this.beforeEditCache
			}
			element.editing = false
		},

		cancelEditEl (element) {
			element.title = this.beforeEditCache
			element.editing = false
		},

		
	},
	computed: {
		elementsFiltered () {
			if (this.filter == 'all') {
				return this.elements
			} else if (this.filter == 'completed') {
				return this.elements.filter(element => element.completed)
			} else if (this.filter == 'active') {
				return this.elements.filter(element => !element.completed)
			} else if (this.filter == 'search') {
				return this.elements.filter((element) => {
					return element.title.match(this.search)
				})
			}

		},

		elementsSearch () {
			if (element.charAt(0).toLowerCase()) {
				return this.element.charAt(0).toUpperCase()
			} 
		},

	},

	filters: {
		capitalize (element) {
		    return element.charAt(0).toUpperCase() + element.slice(1)
		}
	}
})
