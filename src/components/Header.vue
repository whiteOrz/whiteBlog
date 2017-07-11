<template>
    <header>
        <ul>
            <router-link to="/a" tag="li">
                <a>首页</a>
            </router-link>
            <router-link to="/b" tag="li">
                <a>48小时阅读排行</a>
            </router-link>
            <router-link to="/d" tag="li">
                <a>正在热映</a>
            </router-link>
        </ul>
    </header>
</template>

<script>
export default {
    name: "header"
}
</script>

<style>
header {
    background: #fff;
    margin-bottom: 1.8rem;
}

header ul {
    margin: 0;
    padding: 0;
}

header li {
    list-style: none;
    display: inline-block;
    line-height: 2.8rem;
    box-sizing: border-box;
}

.active {
    border-bottom: 2px solid #f60;
    margin-bottom: -2px;
}

header li a {
    font-size: 0.7rem;
    color: #505050;
    text-decoration: none;
    line-height: 2.8rem;
    padding: 0 1rem;
    display: block;
}
</style>

