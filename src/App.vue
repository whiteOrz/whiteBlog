<template>
    <div id="app">
        <Wheader></Wheader>
        <section>
            <div class="container">
                <main>
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </main>
                <aside>
                    <div class="login">登录部分</div>
                    <div></div>
                    <div></div>
                </aside>
            </div>
        </section>
    </div>
</template>

<script>
import Wheader from "./components/Header";

export default {
    components: {
        Wheader
    }
}
</script>

<style>
.container {
    margin: 0 5rem;
    display: -webkit-box;
}

.container main {
    -webkit-box-flex: 2;
    margin-right: 2rem;
}

.container main div {
    padding: 2rem;
    background: #fff;
}

.container aside {
    -webkit-box-flex: 1;
}

.login {
    background: #fff;
    margin-bottom: 2rem;
    padding: 2rem;
}
</style>
