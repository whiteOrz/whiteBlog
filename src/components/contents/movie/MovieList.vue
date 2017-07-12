<template>
    <div class="movielist">
        <Wmovie :key="index" :movie="item" v-for="(item,index) in $store.state.movieList"></Wmovie>
    </div>
</template>

<script>
import axios from "axios";
import Wmovie from "./Movie";
export default {
    name: "movielist",
    mounted() {
        this.$nextTick(function () {
            axios.get("/movie/in_theaters").then(res => {
                console.log(res.data.subjects[0]);
                this.$store.state.movieList = res.data.subjects;
            });
        });
    },
    components: {
        Wmovie
    }
}
</script>

<style>

</style>


