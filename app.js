
var app = new Vue({

    el: '#root',
    data: {

        message: 'Hello World!',
        name: '',
        names: [ 'Joe', 'Mary', 'Jane', 'Jack'],
        buttonTitle: 'Title to demonstrate attribute binding',
        isDisabled: false,
        searchText: ''
    },
    methods: {
        addName: function() {
            this.names.push(this.name)
            this.name = ''
        },
        disableButton() {
            this.isDisabled = true
        }
    },
    computed: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('');
        }
    }
    
})
