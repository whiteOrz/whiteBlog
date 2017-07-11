<template>
    <div class="singleBlog">
        <div v-html="$store.state.blogContext">{{$store.state.blogContext}}</div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: "singleBlog"
}
</script>

<style>
.singleBlog {
    width: 100%;
    background: #fff;
    padding: 1rem;
    overflow: auto;
    word-wrap: break-word;
    word-break: break-all;
}
</style>


