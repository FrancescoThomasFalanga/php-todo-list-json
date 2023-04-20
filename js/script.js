const { createApp } = Vue;

createApp({
    data() {
        return {

            todos: ["Server","HTML","CSS","Responsive","Bootstrap","JS","Vue","php","Database"],

            newTodo: "",

        }
    },

    methods: {
        
        getInfo() {

            axios.get("./server.php").then(response => {

                console.log(response.data);
                this.todos = response.data;

            });

        },

        addTodo() {
                
                this.todos.push(this.newTodo);
                this.newTodo = "";
    
        },

    },

    mounted() {
        
        this.getInfo();

    },


}).mount('#app')