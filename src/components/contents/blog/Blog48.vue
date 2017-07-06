<template>
    <div>
        <div>48小时阅读排行</div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "top48",
    mounted() {
        this.$nextTick(function () {
            axios.get("/48HoursTopViewPosts").then(res => {
                console.log(res);
            });
        });
    }
}
</script>

<style>

</style>


