<template>
    <div id="app">
        <Wheader></Wheader>
        <div>
            <transition name="fade">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
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

</style>
