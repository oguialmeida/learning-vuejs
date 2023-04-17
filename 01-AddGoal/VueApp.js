// Adding item to a list with vue
Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ""
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue)
        }
    }
}).mount("#app")
