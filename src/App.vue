<template>
    <div id="app">
        <Wheader></Wheader>
        <Wcontent></Wcontent>
        <Wfooter></Wfooter>
    </div>
</template>

<script>
import Wheader from "./components/Header";
import Wcontent from "./components/Content";
import Wfooter from "./components/Footer";
export default {
    components: {
        Wheader,
        Wcontent,
        Wfooter
    }
}
</script>


