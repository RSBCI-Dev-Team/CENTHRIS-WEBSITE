<template>
    <div class="landing">
        <section class="feature-container">
            <div class="background-container">
                <div class="background-image"></div>
            </div>

            <div class="content-container">
                <div class="header-wrapper">
                    <h1>Book a demo now!</h1>

                    <p>
                        Witness how Centhris can level up <br />
                        your HR management.
                    </p>
                    <div class="button-container">
                        <RouterLink class="link" :to="{ name: 'Landing' }">
                            <button class="tertiary-button-bg-dark icon-button">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="10"
                                    viewBox="0 0 12 10"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M4.81704 0.14771L0 4.97536L4.81704 9.80302C4.86055 9.85998 4.91582 9.90695 4.97911 9.94076C5.04241 9.97457 5.11225 9.99443 5.18392 9.99899C5.25558 10.0035 5.32739 9.9927 5.39448 9.96718C5.46157 9.94167 5.52238 9.90208 5.57279 9.85109C5.62321 9.80011 5.66204 9.73892 5.68667 9.67167C5.71131 9.60442 5.72116 9.53268 5.71556 9.4613C5.70997 9.38992 5.68905 9.32058 5.65424 9.25796C5.61943 9.19534 5.57153 9.14092 5.51378 9.09836L1.90977 5.47512L11.4987 5.47512C11.6317 5.47512 11.7592 5.42247 11.8532 5.32874C11.9472 5.23502 12 5.10791 12 4.97536C12 4.84282 11.9472 4.7157 11.8532 4.62198C11.7592 4.52826 11.6317 4.47561 11.4987 4.47561L1.90977 4.47561L5.51378 0.852366C5.60751 0.758261 5.6599 0.630888 5.65943 0.498271C5.65896 0.365653 5.60567 0.238653 5.51128 0.14521C5.41689 0.0517664 5.28914 -0.000466347 5.15612 2.86102e-06C5.02311 0.000471115 4.89573 0.0536032 4.802 0.14771H4.81704Z"
                                    />
                                </svg>
                                Back to Home
                            </button>
                        </RouterLink>

                        <div @click="scrollToSection('get-a-quote')">
                            <RouterLink class="link" :to="{ name: 'Landing' }">
                                <button>Get a Quote</button>
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div class="feature-image">
                    <div class="book-demo-container">
                        <div class="demo-form">
                            <p>Book a Demo</p>

                            <div class="form-column">
                                <div>
                                    <InputText
                                        :label="'First Name'"
                                        placeholder="Enter First Name"
                                    />
                                    <InputText
                                        :label="'Last Name'"
                                        placeholder="Enter Last Name"
                                    />
                                    <InputText
                                        :label="'Work Email'"
                                        placeholder="Enter Work Email"
                                    />
                                    <InputText
                                        :label="'Mobile Number'"
                                        placeholder="Enter Mobile Number"
                                    />
                                    <InputText
                                        :label="'Company Name'"
                                        placeholder="Enter Company Name"
                                    />
                                </div>
                                <div>
                                    <InputText
                                        :label="'Industry/Sector'"
                                        placeholder="Select Industry/Sector"
                                    />
                                    <InputText
                                        :label="'Company Size'"
                                        placeholder="Select Company Size"
                                    />
                                    <InputText
                                        :label="'Country'"
                                        placeholder="Philippines"
                                    />
                                    <InputText
                                        :label="'Preferred Domain'"
                                        placeholder="company.centhris.com"
                                    />
                                </div>
                            </div>
                            <div class="button-form-container">
                                <button @click="bookedSubmitted=true" class="secondary-button">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div class="image-wrapper">
                        <img class="top-image" src="/img/banner-1.png" alt="" />

                        <div class="bottom-image">
                            <img src="/img/banner-3.png" alt="" />
                            <img src="/img/banner-2.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="footer-container">
            <div class="company-info">
                <img src="/svg/footer-logo.svg " alt="" />

                <div class="item-container">
                    <div class="item-wrapper">
                        <img src="/svg/map-pin-icon.svg " alt="" />
                        <a href="https://maps.app.goo.gl/i6fA7gB4n9cNukwH7">
                            18/F Cityland Condominium 10 Tower 1, 156 H.V. dela
                            Costa Street, Ayala North, Makati City, Philippines
                            1226
                        </a>
                    </div>
                    <div class="item-wrapper">
                        <img src="/svg/envelope-icon.svg " alt="" />
                        <span> +63 (2) 8839 2223 </span>
                    </div>
                    <div class="item-wrapper">
                        <img src="/svg/phone-icon.svg " alt="" />
                        <span> centhris@rsb-consulting.com </span>
                    </div>
                </div>
                <span>All Rights Reserved © Centhris</span>
            </div>

            <div class="sitemap">
                <span> Useful Links: </span>
                <div class="item-container">
                    <span @click="scrollToSection('about-us', 200)">
                        <RouterLink class="link" :to="{ name: 'Landing' }">
                            About Us
                        </RouterLink>
                    </span>

                    <span @click="scrollToSection('why-centhris')">
                        <RouterLink class="link" :to="{ name: 'Landing' }">
                            Why Centhris?
                        </RouterLink>
                    </span>

                    <span @click="scrollToSection('testimonials')">
                        <RouterLink class="link" :to="{ name: 'Landing' }">
                            Testimonials
                        </RouterLink>
                    </span>
                    <span @click="scrollToSection('get-a-quote')">
                        <RouterLink class="link" :to="{ name: 'Landing' }">
                            Get a Quote
                        </RouterLink>
                    </span>

                    <span>
                        <RouterLink class="link" :to="{ name: 'BookADemo' }">
                            Book a Demo
                        </RouterLink>
                    </span>
                </div>
            </div>
        </div>
    </div>

    <ConfirmationModal
        :type="'success'"
        v-show="bookedSubmitted"
        message="Success!"
        id="You have successfully booked a demo for Centhris. We can't wait to have you on board!"
        yesButtonLabel="Okay"
        @confirm="bookedSubmitted = !bookedSubmitted"
    />
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
import ConfirmationModal from "@/components/ConfirmationModal.vue";
import InputText from "@/components/Forms/InputText.vue";
export default {
    props: {
        getSectionOnScreen: {
            type: Function,
            required: true,
        },
    },

    components: {
        InputText,
        ConfirmationModal,
    },

    setup(props) {
        const previousOnScreenSect = ref("");
        const isOnScreen = () => {
            return null;
        };

        const addClassOnScroll = () => {

            const currentOnScreenSect = isOnScreen();
            if (currentOnScreenSect != previousOnScreenSect.value) {
                previousOnScreenSect.value = currentOnScreenSect;

                props.getSectionOnScreen(currentOnScreenSect);
            }
        };

        onMounted(() => {
            addClassOnScroll();
            window.addEventListener("scroll", addClassOnScroll);
        });

        onUnmounted(() => {
            window.removeEventListener("scroll", addClassOnScroll);
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
        const bookedSubmitted = ref(false);
        return {
            scrollToSection,
            bookedSubmitted
        };
    },
};
</script>

<style lang="scss" scoped>
@import "@/GlobalVariables.scss";
@import "@/Styles/PagesStyle/BookADemo.scss";

button {
    width: fit-content;
}
:deep(.input-container) {
    max-width: unset;
}
</style>
