<template>
    <Navbar v-model:activeLink="onScreenSect" />

    <RouterView :getSectionOnScreen="passActiveLink" />
    <!-- <Footer /> -->
</template>
<script>
import {
    computed,
    onBeforeMount,
    reactive,
    ref,
    toRef,
    watch,
    watchEffect,
    onMounted,
    onUnmounted,
} from "@vue/runtime-core";
import Navbar from "./components/Navbar.vue";
//  import Footer from '@/career/components/Footer.vue'

export default {
    name: "App",
    components: {
        Navbar,
        //  Footer
    },
    setup() {
        const onScreenSect = ref("");
        const passActiveLink = (section) => {
            onScreenSect.value = section;
        };
        return {
            passActiveLink,
            onScreenSect,
        };
    },
};
</script>

<style lang="scss">
@import "@/GlobalStyle.scss";
</style>
