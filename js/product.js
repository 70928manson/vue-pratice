import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js";

const app = createApp({
    data() {
        return {
            url: 'https://vue3-course-api.hexschool.io/v2',
            api_Path: 'manson972',
            products: [],
            itemTemp: {},
        }
    },
    methods: {
        checkLogin() {
            //確認用戶是否登入成功
            axios.post(`${this.url}/api/user/check`)
                .then((res) => {
                    console.log('resp ', res);
                    this.getProductsData();
                })
                .catch((err) => {
                    alert(err.data.message);
                    //登入失敗 導回原本登入畫面
                    window.location = 'index.html';
                })
        },
        getProductsData() {
            axios.get(`${this.url}/api/${this.api_Path}/admin/products`)
                .then((res) => {
                    const { products } = res.data;
                    this.products = products;
                })
                .catch((err) => {
                    alert(err.data.message);
                    console.log(err);
                })
        }
    },
    created() {
        // 取得 Token
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        console.log('get Cookie token', token);
        axios.defaults.headers.common['Authorization'] = token;

        this.checkLogin();
    }
});

app.mount('#app');
