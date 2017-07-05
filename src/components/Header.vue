<template>
    <div>
        <header>
            <ul>
                <router-link to="/a" tag="li">
                    <a>1111</a>
                </router-link>
                <router-link to="/b" tag="li">
                    <a>2222</a>
                </router-link>
                <router-link to="/c" tag="li">
                    <a>3333</a>
                </router-link>
            </ul>
        </header>
    </div>
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
    text-align: center;
}

header li {
    list-style: none;
    display: inline-block;
    line-height: 2.8rem;
    box-sizing: border-box;
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

