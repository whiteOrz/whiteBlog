<template>
    <div class="blog48">
        <Wblog :key="index" :blog="item" v-for="(item,index) in $store.state.top48"></Wblog>
    </div>
</template>

<script>
import axios from "axios";
import Wblog from "./Blog";

export default {
    name: "top48",
    mounted() {
        console.log("top48");
        this.$nextTick(function () {
            axios.get("/blog/48HoursTopViewPosts").then(res => {
                this.$store.state.top48 = res.data;
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


