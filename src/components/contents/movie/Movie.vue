<template>
    <div class="movie">
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "movie",
    mounted() {
        this.$nextTick(function () {
            axios.get("/movie/in_theaters").then(res => {
                console.log(res.data);
            });
        });
    }
}
</script>

<style>

</style>


