const { createApp } = Vue;

createApp({
    data() {
        return {

            todos: [],

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

            let data = {
                newTodo: "",
            }
    
            data.newTodo = this.newTodo;
                
            axios.post("./server.php", data, {headers: {"Content-Type": "multipart/form-data"}}).then(response => {
                
                this.todos.push(this.newTodo);
                this.newTodo = "";
    
            });
    
        },

    },

    mounted() {
        
        this.getInfo();

    },


}).mount('#app')