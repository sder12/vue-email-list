// https://flynn.boolean.careers/exercises/api/random/mail
const { createApp } = Vue;

createApp({

    //DATA-------------
    data() {
        return {
            arrayEmails: [],           
        }
    },


    //CREATED-----------
    created() {
        this.createEmail()
    },

    //METHODS------------l
    methods: {
        createEmail() {
            for (let i = 0; i < 10; i++) {
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((resp) => {
                        // console.log(resp)
                        this.arrayEmails.push(resp.data.response);
                    })
            }
        
        }
    }

}).mount("#app")


