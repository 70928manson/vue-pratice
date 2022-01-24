import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js';

const url = 'https://vue3-course-api.hexschool.io/v2'; // API平台
const path = 'manson972'; //個人 API Path

const app = createApp({
    data(){
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login(){
            axios.post(`${url}/admin/signin`, this.user)
                .then((res) => {
                    const { token, expired } = res.data;
                    document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
                    window.location = `products.html`;
                })
                .catch((err) => {
                    alert(err.data.message);
                });
        }
    },
    mounted() {
        ;
    }
});

app.mount('#app');