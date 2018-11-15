<template>
    <div class="news">
        我是新闻页面是home页面的儿子页面
        <v-header></v-header>
    </div>

</template>
<script>
import header from './header.vue';
export default {
    data() {
        return {

        }
    },
    methods:{

    },
   components:{
       "v-header":header
   }
}
</script>
<style lang="scss" scoped>
    .news {
        font-size: 20px;
        color: #000;
    }
</style>

