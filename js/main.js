var app = new Vue ({
	el: '#app',
	data: {
		newElement: '',
		idForElement: 3,
		beforeEditCache: '',
		elements: [ 
			{
				text: "Сделать что-то",
				editing: false,
				completed: true,
				id: 1,
			},
			{
				text: "Сделать то-то",
				editing: false,
				completed: false,
				id: 2,
			},
			{
				text: "Сделать совсем другое",
				editing: false,
				completed: false,
				id: 3,
			},
		],

		filter: 'all',

	},
	directives: {
	  focus: {
	    inserted: function (el) {
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
					text: this.newElement,
				})

				this.newElement = ''
				this.idForElement++
			},


		

		delElement: function (index) {
			this.elements.splice(index, 1);
		},

		editEl: function (element) {
			this.beforeEditCache = element.text
			element.editing = true
		},

		doneEditEl: function (element) {
			if (element.text.trim() == 0) {
				element.text = this.beforeEditCache
			}
			element.editing = false
		},

		cancelEditEl: function (element) {
			element.text = this.beforeEditCache
			element.editing = false
		}

		
	},
	computed: {
		elementsFiltered () {
			if (this.filter == 'all') {
				return this.elements
			}
			else if (this.filter == 'completed') {
				return this.elements.filter(element => element.completed)
			} else if (this.filter == 'active') {
				return this.elements.filter(element => !element.completed)
			}
		}
	}
})