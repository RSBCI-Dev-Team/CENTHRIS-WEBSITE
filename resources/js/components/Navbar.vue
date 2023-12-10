<template>
    <div class="nav-bar" :class="{ 'nav-bg': isScrolled }" ref="stickyTopNav">
        <div class="desktop-logo">
            <img src="/svg/desktop-logo.svg" alt="centhris-logo" />
        </div>

        <div class="nav">
            <div class="nav-wrapper">
                <ul>
                    <li @click="scrollToSection('about-us', 200)">
                        <RouterLink
                            :class="{ 'active-link': activeLink === 'aboutUs' }"
                            class="link"
                            :to="{ name: 'Landing' }"
                        >
                            About Us
                        </RouterLink>
                    </li>

                    <li @click="scrollToSection('why-centhris')">
                        <RouterLink
                            :class="{
                                'active-link': activeLink === 'whyCenthris',
                            }"
                            class="link"
                            :to="{ name: 'Landing' }"
                        >
                            Why Centhris?
                        </RouterLink>
                    </li>

                    <li @click="scrollToSection('testimonials')">
                        <RouterLink
                            :class="{
                                'active-link': activeLink === 'testimonials',
                            }"
                            class="link"
                            :to="{ name: 'Landing' }"
                        >
                            Testimonials
                        </RouterLink>
                    </li>
                    <li      @click="scrollToSection('get-a-quote')">
                        <RouterLink
                            :class="{
                                'active-link': activeLink === 'getAQuote',
                            }"
                            class="link"
                            :to="{ name: 'Landing' }"
                        >
                        Get a Quote
                        </RouterLink>
                    </li>


                </ul>

                <div class="nav-button">
                    <RouterLink :to="{ name: 'BookADemo' }">
                        <button>Book a Demo</button>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
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
export default {
    props: {
        activeLink: {
            type: String,
            default: "",
        },
    },
    emits: ["update:activeLink"],
    components: {},
    setup(props) {
        const isScrolled = ref(false);

        const handleScroll = () => {
            isScrolled.value = window.scrollY > 250;
        };

        onMounted(() => {
            window.addEventListener("scroll", handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener("scroll", handleScroll);
        });

        const scrollToSection = (link, offset = 0) => {
            // setTimeout(() => {
            //     const targetElement = document.getElementById(link);
            //     targetElement.scrollIntoView({
            //         behavior: 'smooth',
            //         block: 'start'
            //     });
            // }, 500);

            setTimeout(() => {
                const targetElement = document.getElementById(link);
                if (targetElement) {
                    const targetPosition = targetElement.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth",
                    });
                }
            }, 500);
        };

        return {
            isScrolled,
            scrollToSection,
        };
    },
};
</script>

<style lang="scss" scoped>
@import "@/GlobalVariables.scss";

.nav-bg {
    background-color: rgb(114 98 116 / 66%);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
}

.active-link {
    color: $secondary-color !important;
}

.nav-bar {
    transition: 0.5s ease-out;
    display: grid;
    grid-template-columns: 1fr 85%;
    padding: 30px 0;
    padding-left: 40px;
    position: sticky;
    top: 0;

    z-index: 2;
    .desktop-logo {
        display: flex;
        align-items: center;
        img {
            width: 153px;
            height: 32px;
        }
    }

    .nav {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        ul {
            display: flex;
            align-items: center;
            gap: 32px;

            .link {
                padding: 8px 5px;
                font-size: 0.875rem;
                font-weight: $weight-400;
                color: $text-dark-bg;
                cursor: pointer;
                text-decoration: none;
            }
        }

        .nav-wrapper {
            justify-content: flex-end;
            display: flex;
            width: 100%;

            .nav-button {
                margin: 0 75px;
                padding: 0;
            }
        }
    }
}
</style>
