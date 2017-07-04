<template>
    <div>
        <h1>header</h1>
        <ul>
            <router-link to="/a" tag="li">111</router-link>
            <router-link to="/b" tag="li">222</router-link>
            <router-link to="/c" tag="li">333</router-link>
        </ul>
        <div style="clear:both"></div>
    </div>
</template>

<style>
li{
    list-style: none;
    float: left;
}

</style>

