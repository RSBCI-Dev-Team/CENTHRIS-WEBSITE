<template>
    <div class="landing">
        <section class="feature-container">
            <div class="background-container">
                <div class="background-image"></div>
            </div>
            <!-- VER 1. -->
            <div class="content-container">
                <div class="header-wrapper">
                    <h1>
                        Simplify
                        <span style="color: #ffb800">HR Management</span> <br />
                        with Our Powerful, Intuitive <br />
                        Solution.
                    </h1>
                    <ul>
                        <li>
                            <span
                                ><img
                                    src="/svg/yellow-check.svg"
                                    alt="check-icon"
                            /></span>
                            Compliant with industry standards
                        </li>
                        <li>
                            <span
                                ><img
                                    src="/svg/yellow-check.svg"
                                    alt="check-icon"
                            /></span>
                            Elevating HR Productivity
                        </li>
                        <li>
                            <span
                                ><img
                                    src="/svg/yellow-check.svg"
                                    alt="check-icon"
                            /></span>
                            Easier workflow and management
                        </li>
                    </ul>
                    <RouterLink :to="{ name: 'BookADemo' }">
                        <button class="secondary-outline">Book a Demo</button>
                    </RouterLink>
                </div>
                <div class="feature-image">
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

        <section class="media-container">
            <div class="wrapper">
                <div></div>
                <div class="media-content">
                    <h2>AVP: Lorem ipsum</h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                    </p>
                </div>
            </div>
        </section>

        <section id="about-us" ref="aboutUsSect">
            <section class="about-us">
                <div class="title"><h2>ABOUT US</h2></div>

                <div class="content-container">
                    <div class="about-us-image">
                        <img src="/svg/about-us-image.svg" alt="" />
                    </div>
                    <div class="about-us-detail">
                        <h3>Who We Are</h3>
                        <p>
                            Our team consists of a wide range of experts with
                            specialized knowledge in software development, human
                            resource management, auditing, and accounting among
                            other areas. Our collective expertise spans a wide
                            range of skills and knowledge that enables us to
                            solve difficulties and tasks in the establishment,
                            implementation and continuous improvement of
                            Centhris.
                        </p>
                    </div>
                </div>
            </section>

            <section class="vision">
                <div class="title">
                    <h2>The Centhris Vision</h2>
                    <h3>Redefining HR Excellence</h3>
                </div>

                <div class="item-wrapper">
                    <div class="item">
                        <img src="/svg/vision-image-1.svg" alt="" />

                        <div class="detail-container">
                            <h4>Transforming HR Dynamics</h4>
                            <p>
                                To transform HR dynamics by providing a
                                comprehensive suite of tools that streamline
                                every aspect of human resource management.
                            </p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="/svg/vision-image-2.svg" alt="" />

                        <div class="detail-container">
                            <h4>Building Bridges, Connecting People</h4>
                            <p>
                                Our vision extends beyond software; it's about
                                building bridges and connecting people.
                            </p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="/svg/vision-image-3.svg" alt="" />

                        <div class="detail-container">
                            <h4>Empowering Businesses</h4>
                            <p>
                                We aspire to empower businesses of all sizes,
                                from startups to enterprises, by offering a
                                centralized hub for employee management, project
                                collaboration, and payroll administration.
                            </p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="/svg/vision-image-4.svg" alt="" />

                        <div class="detail-container">
                            <h4>Pioneering Innovation</h4>
                            <p>
                                We understand that businesses evolve, and so
                                should their HR systems.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- <div class="bg-container"
            style="
                        width: 125px;
                        height: 125px;
                        top: 35px;
                        left: calc(100vw - 104%);
                    "
            >
                <div
                    class="bg-yellow-floater"
                    style="
                        width: 125px;
                        height: 125px;
                        top: 35px;
                        left: calc(100vw - 104%);
                    "
                ></div>
            </div> -->

                <div
                    class="bg-container"
                    style="top: 35px; justify-content: center; width: 35%"
                >
                    <div class="relative-container">
                        <div
                            class="bg-yellow-floater"
                            style="width: 125px; height: 125px"
                        ></div>
                    </div>
                </div>

                <div
                    class="bg-container"
                    style="top: 540px; justify-content: center; width: 40%"
                >
                    <div class="relative-container">
                        <div
                            class="bg-yellow-floater"
                            style="width: 281px; height: 281px"
                        ></div>
                    </div>
                </div>

                <div
                    class="bg-container"
                    style="top: 145px; justify-content: center; width: 100%"
                >
                    <div class="relative-container">
                        <div
                            class="bg-yellow-floater"
                            style="width: 218px; height: 218px"
                        ></div>
                    </div>
                </div>

                <div
                    class="bg-container"
                    style="top: 490px; justify-content: flex-end; width: 77%"
                >
                    <div class="relative-container">
                        <div
                            class="bg-yellow-floater"
                            style="width: 168px; height: 204px"
                        ></div>
                    </div>
                </div>

                <div
                    class="bg-container"
                    style="top: 55px; justify-content: flex-end; width: 77%"
                >
                    <div class="relative-container">
                        <div
                            class="bg-yellow-floater"
                            style="width: 108px; height: 108px"
                        ></div>
                    </div>
                </div>

                <div
                    class="bg-container"
                    style="top: 170px; justify-content: flex-end; width: 100%"
                >
                    <div class="relative-container">
                        <div
                            class="bg-yellow-floater"
                            style="width: 281px; height: 281px"
                        ></div>
                    </div>
                </div>

                <!-- <div
                class="bg-yellow-floater"
                style="width: 281px; height: 281px;top: 540px; left: calc(100vw - 101%);"
            ></div>
            <div
                class="bg-yellow-floater"
                style="width: 218px; height: 218px; top: 145px; left: calc(100vw - 71%);"
            ></div>
            <div
                class="bg-yellow-floater"
                style="width: 168px; height: 204px; top: 435px; left: calc(100vw - 46%);"
            ></div>
            <div
                class="bg-yellow-floater"
                style="width: 108px; height: 108px; top: 55px; left: calc(100vw - 20%);"
            ></div>
            <div
                class="bg-yellow-floater"
                style="width: 281px; height: 281px; top: 170px;left: calc(100vw - 50%);"
            ></div> -->
            </section>

            <section class="offer" id="features">
                <h2>What We Offer</h2>

                <div class="heading">
                    <p>
                        Discover the advantages that Centhris can bring to your
                        organization, enhancing experiences of employees,
                        supervisors, managers, and executives alike.
                    </p>
                    <img src="/svg/offer-image.svg" alt="" />
                </div>

                <div class="detail">
                    <div class="item-wrapper">
                        <div class="item-container">
                            <div class="item">
                                1
                                <div class="detail-wrapper">
                                    <h3>Workforce and Company Management</h3>
                                    <p>
                                        With our flexible workforce and company
                                        management solutions, you can lead your
                                        staff with ease and quickly adjust to
                                        changes in the organization.
                                    </p>
                                </div>
                            </div>
                            <div class="item">
                                2
                                <div class="detail-wrapper">
                                    <h3>
                                        Efficient Time Tracking and Schedule
                                        Handling
                                    </h3>
                                    <p>
                                        Make sure that time tracking is
                                        accurate, and easily adjust schedules to
                                        encourage maximum productivity
                                        throughout your company.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="item-container">
                            <div class="item">
                                3
                                <div class="detail-wrapper">
                                    <h3>
                                        Project Management with Time Charging
                                    </h3>
                                    <p>
                                        With our robust project management
                                        solution, which offers transparent
                                        financial insights for well-informed
                                        decision-making and effective execution,
                                        you can increase productivity.
                                    </p>
                                </div>
                            </div>
                            <div class="item">
                                4
                                <div class="detail-wrapper">
                                    <h3>Full-fledged Payroll Management</h3>
                                    <p>
                                        Provides your company with accurate
                                        calculations compliant with government
                                        laws, rules, and regulations of the
                                        country.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="centered-container">
                    <RouterLink :to="{ name: 'BookADemo' }">
                        <button class="tertiary-button">Book a Demo</button>
                    </RouterLink>
                </div>
            </section>
        </section>

        <section class="why" id="why-centhris" ref="whyCenthrisSect">
            <div class="header">
                <h2>Why Centhris?</h2>
            </div>

            <div class="reason reason-violet-bg">
                <div class="reason-wrapper">
                    <div class="reason-images">
                        <div>
                            <img src="/img/overtime-2.png " alt="" />
                        </div>

                        <div>
                            <img src="/img/leave-3.png " alt="" />
                        </div>
                        <!-- <img src="/svg/offer-image.svg" alt="" /> -->
                    </div>
                    <div class="detail">
                        <h3>
                            Overtime and leave <br />
                            processes made easy!
                        </h3>
                        <p>
                            Experience the effortless leave and overtime
                            management with Centhris. Requests are immediately
                            received and reviewed by the approvers leaving no
                            paper trail and significantly reduces processing
                            time.
                        </p>
                        <RouterLink :to="{ name: 'BookADemo' }">
                            <button class="secondary-outline">
                                Book a Demo
                            </button>
                        </RouterLink>
                    </div>
                </div>
            </div>
            <div class="reason reason-yellow-bg">
                <div class="reason-wrapper">
                    <div class="detail">
                        <h3>
                            Increase productivity with the help of simple and
                            intuitive modules available
                        </h3>
                        <p>
                            Centhris empowers you to manage multiple HR
                            processes on one single platform. Navigate with ease
                            through our organized menu system, ensuring
                            hassle-free management of diverse tasks. We offer
                            carefully curated modules aligned with your
                            company's needs.
                        </p>
                        <div @click="scrollToSection('get-a-quote')">
                            <RouterLink class="link" :to="{ name: 'Landing' }">
                                <button class="tertiary-button">
                                    Get a Quote
                                </button>
                            </RouterLink>
                        </div>
                    </div>
                    <div class="reason-images">
                        <div>
                            <img src="/img/dashboard-1.png " alt="" />
                        </div>

                        <div>
                            <img src="/img/mobile-nav-2.png " alt="" />
                        </div>
                        <!-- <img src="/svg/offer-image.svg" alt="" /> -->
                    </div>
                </div>
            </div>
            <div class="reason reason-white-bg">
                <div class="reason-wrapper">
                    <div class="reason-images">
                        <div>
                            <img src="/img/timesheet-2.png " alt="" />
                        </div>

                        <div>
                            <img src="/img/schedule-2.png " alt="" />
                        </div>
                        <!-- <img src="/svg/offer-image.svg" alt="" /> -->
                    </div>
                    <div class="detail">
                        <h3>
                            Break free from the chaos of traditional
                            record-keeping
                        </h3>
                        <p>
                            Centhris offers a more convenient way of storing and
                            processing data that revolutionizes your approach to
                            information management, transcending the limitations
                            of traditional record-keeping.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="testimonials" id="testimonials" ref="testimonialsSect">
            <div class="header">
                <h2>Testimonials</h2>
                <p>
                    Have a look at what our existing users are saying about
                    Centhris!
                </p>
            </div>

            <div class="item-wrapper">
                <div class="item">
                    <div class="profile-container">
                        <img src="/img/people-1.png " alt="" />
                    </div>
                    <div class="item-detail">
                        <div class="item-info">
                            <h3>Rogielyn Legazpi</h3>
                            <span>Position, Company</span>
                        </div>
                        <p>
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore ipsum
                            dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore ipsum dolor sit
                            <br /><br />
                            amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore
                        </p>
                        <div class="item-rate">
                            <img src="/svg/stars.svg " alt="" />
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="profile-container">
                        <img src="/img/people-2.png " alt="" />
                    </div>
                    <div class="item-detail">
                        <div class="item-info">
                            <h3>Rogielyn Legazpi</h3>
                            <span>Position, Company</span>
                        </div>
                        <p>
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore ipsum
                            dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore”
                        </p>
                        <div class="item-rate">
                            <img src="/svg/stars.svg " alt="" />
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="profile-container">
                        <img src="/img/people-3.png " alt="" />
                    </div>
                    <div class="item-detail">
                        <div class="item-info">
                            <h3>Rogielyn Legazpi</h3>
                            <span>Position, Company</span>
                        </div>
                        <p>
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore”
                        </p>
                        <div class="item-rate">
                            <img src="/svg/stars.svg " alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="quote" ref="getAQuoteSect" id="get-a-quote">
            <div class="violet-container">
                <div class="quote-relative">
                    <div class="quote-container">
                        <div class="detail-container">
                            <h2>Get a Quote</h2>
                            <p>
                                Whether you're a growing startup or an
                                established enterprise, our team is more than
                                willing to assist you in customizing Centhris to
                                meet the needs of your business.
                            </p>
                            <div class="form-container">
                                <div class="column-form">
                                    <InputText
                                        :label="'What should we call you?'"
                                        placeholder="Your name here"
                                    />
                                    <InputText
                                        :label="'Email'"
                                        placeholder="Your email"
                                    />
                                </div>
                                <div class="column-form">
                                    <InputText
                                        :label="'Mobile Number'"
                                        placeholder="Your mobile number"
                                    />
                                    <InputText
                                        :label="'Message'"
                                        placeholder="Write a message"
                                    />
                                </div>
                            </div>
                            <div class="quote-button-container">
                                <button
                                    @click="quoteSubmitted = true"
                                    class="secondary-button"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                        <p>
                            Want to speed up the process of getting to know
                            Centhris?
                            <span>
                                <RouterLink
                                    class="link"
                                    :to="{ name: 'BookADemo' }"
                                >
                                    Book a demo now!
                                </RouterLink>
                            </span>
                        </p>
                    </div>
                </div>
                <div class="footer">
                    <div class="footer-container">
                        <div class="company-info">
                            <img src="/svg/desktop-logo.svg " alt="" />

                            <div class="item-container">
                                <div class="item-wrapper">
                                    <img src="/svg/map-pin-icon.svg " alt="" />
                                    <a
                                        href="https://maps.app.goo.gl/i6fA7gB4n9cNukwH7"
                                    >
                                        18/F Cityland Condominium 10 Tower 1,
                                        156 H.V. dela Costa Street, Ayala North,
                                        Makati City, Philippines 1226
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
                                    <RouterLink
                                        class="link"
                                        :to="{ name: 'Landing' }"
                                    >
                                        About Us
                                    </RouterLink>
                                </span>

                                <span @click="scrollToSection('why-centhris')">
                                    <RouterLink
                                        class="link"
                                        :to="{ name: 'Landing' }"
                                    >
                                        Why Centhris?
                                    </RouterLink>
                                </span>

                                <span @click="scrollToSection('testimonials')">
                                    <RouterLink
                                        class="link"
                                        :to="{ name: 'Landing' }"
                                    >
                                        Testimonials
                                    </RouterLink>
                                </span>
                                <span @click="scrollToSection('get-a-quote')">
                                    <RouterLink
                                        class="link"
                                        :to="{ name: 'Landing' }"
                                    >
                                        Get a Quote
                                    </RouterLink>
                                </span>

                                <span>
                                    <RouterLink
                                        class="link"
                                        :to="{ name: 'BookADemo' }"
                                    >
                                        Book a Demo
                                    </RouterLink>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <ConfirmationModal
        :type="'success'"
        v-show="quoteSubmitted"
        message="Success!"
        id="You have successfully submitted your quotation details. We can't wait to have you on board!"
        yesButtonLabel="Okay"
        @confirm="quoteSubmitted = !quoteSubmitted"
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
import InputText from "@/components/Forms/InputText.vue";
import ConfirmationModal from "@/components/ConfirmationModal.vue";
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
        // Create a ref to hold the div element
        const aboutUsSect = ref(null);
        const whyCenthrisSect = ref(null);

        const testimonialsSect = ref(null);
        const getAQuoteSect = ref(null);

        const previousOnScreenSect = ref("");
        // Function to check if the div is on the screen
        const isOnScreen = () => {
            const whyCenthrisRect =
                whyCenthrisSect.value.getBoundingClientRect();
            const aboutUsRect = aboutUsSect.value.getBoundingClientRect();
            const testimonialsRect =
                testimonialsSect.value.getBoundingClientRect();
            const getAQuoteRect = getAQuoteSect.value.getBoundingClientRect();

            if (
                aboutUsRect.top < window.innerHeight &&
                aboutUsRect.bottom >= 0
            ) {
                return "aboutUs";
            } else if (
                whyCenthrisRect.top < window.innerHeight &&
                whyCenthrisRect.bottom >= 0
            ) {
                return "whyCenthris";
            } else if (
                testimonialsRect.top < window.innerHeight &&
                testimonialsRect.bottom >= 0
            ) {
                return "testimonials";
            } else if (
                getAQuoteRect.top < window.innerHeight &&
                getAQuoteRect.bottom >= 0
            ) {
                return "getAQuote";
            } else {
                return null;
            }

            return;
        };

        const addClassOnScroll = () => {
            const currentOnScreenSect = isOnScreen();
            if (currentOnScreenSect != previousOnScreenSect.value) {
                previousOnScreenSect.value = currentOnScreenSect;

                props.getSectionOnScreen(currentOnScreenSect);
            }

            // if (isOnScreen()) {
            //     whyCenthrisSect.value.classList.add("on-screen");

            //     props.getSectionOnScreen(isOnScreen())
            // } else {
            //     whyCenthrisSect.value.classList.remove("on-screen");
            // }
        };
        const scrollToSection = (link, offset = 0) => {
            setTimeout(() => {
                const targetElement = document.getElementById(link);
                if (targetElement) {
                    const targetPosition = targetElement.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth",
                    });
                }
            }, 50);
        };
        onMounted(() => {
            addClassOnScroll();
            window.addEventListener("scroll", addClassOnScroll);
        });

        onUnmounted(() => {
            window.removeEventListener("scroll", addClassOnScroll);
        });

        const quoteSubmitted = ref(false);

        return {
            whyCenthrisSect,
            aboutUsSect,
            testimonialsSect,
            getAQuoteSect,

            scrollToSection,

            quoteSubmitted,
        };
    },
};
</script>

<style lang="scss" scoped>
@import "@/GlobalVariables.scss";
@import "@/Styles/PagesStyle/Landing.scss";

button {
    width: fit-content;
}
</style>
