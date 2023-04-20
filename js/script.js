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

            if (this.newTodo != "") {

                let data = {
                    newTodo: "",
                    status: true,
                }
        
                data.newTodo = this.newTodo;
                    
                axios.post("./server.php", data, {headers: {"Content-Type": "multipart/form-data"}}).then(response => {

                    const singleTodo = {
                        name: this.newTodo,
                        status: true
                    };
                    
                    this.todos.push(singleTodo);
                    this.newTodo = "";
        
                });

            };

    
        },

    },

    mounted() {
        
        this.getInfo();

    },


}).mount('#app')