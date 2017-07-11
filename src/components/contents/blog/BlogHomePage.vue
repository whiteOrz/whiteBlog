<template>
    <div class="bloghomepage">
        <Wblog :key="index" :blog="item" v-for="(item,index) in $store.state.homePage"></Wblog>
    </div>
</template>

<script>
import axios from "axios";
import Wblog from "./Blog";

export default {
    name: "bloghomepage",
    mounted() {
        this.$nextTick(function () {
            axios.get("/blog/sitehome/recent").then(res => {
                this.$store.state.homePage = res.data;
            });
        });
    },
    components: {
        Wblog
    }
}
</script>

<style>

</style>


