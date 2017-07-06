<template>
    <section>
        <div class="container">
            <main>
                <Wmain></Wmain>
            </main>
            <aside>
                <Wlogin></Wlogin>
            </aside>
        </div>
    </section>
</template>

<script>
import Wlogin from "./contents/Login";
import Wmain from "./contents/Main";

export default {
    name: "content",
    components: {
        Wlogin,
        Wmain
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

.container aside {
    -webkit-box-flex: 1;
}
</style>
