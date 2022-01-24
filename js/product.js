import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js";

const app = createApp({
    data() {
        return {
            url: 'https://vue3-course-api.hexschool.io/v2',
            api_path: 'manson972',
            products: [],
            itemTemp: {},
        }
    },
    methods: {
        checkLogin() {
            //確認用戶是否登入成功
            axios.post(`${this.url}/api/user/check`)
              .then((res) => {
                  this.getProductsData();
              })
              .catch((err) => {
                  alert(err.data.message);
                  //登入失敗 導回原本登入畫面
                  window.location = 'index.html';
              })
        }
    },
    created() {
        //取得Token
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        axios.defaults.headers.common['Authoriazation'] = token;

        this.checkLogin();
    }
});

app.mount('#app');