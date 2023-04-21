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
                    status: false
                }
        
                data.newTodo = this.newTodo;
                    
                axios.post("./server.php", data, {headers: {"Content-Type": "multipart/form-data"}}).then(response => {

                    this.getInfo();
                    
                    this.newTodo = "";
        
                });

            };

    
        },

        doneProperty(position) {

            let data = {
                toggleTodo: position,
            };
      
            axios.post('./server.php', data, { headers: { 'Content-Type': 'multipart/form-data' } }).then(response => {

              this.getInfo();

            });

        },

        deleteTask(position) {
            let data = {
                deleteTask: position,
            };
      
            axios.post('./server.php', data, { headers: { 'Content-Type': 'multipart/form-data' } }).then(response => {

              this.getInfo();

            });
      
        }

    },

    mounted() {
        
        this.getInfo();

    },


}).mount('#app')