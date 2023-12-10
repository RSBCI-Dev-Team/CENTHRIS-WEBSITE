<template>
    <div class="error-container" v-if="message.length > 0">
        <div class="error-content">
            <div class="error-text" v-for="item in message" :key="item">
                {{ item }}
            </div>
        </div>
    </div>
    <div class="error-container" v-else>
        <div class="error-content">
            <div class="text-space" >
                Error Space
            </div>
        </div>
    </div>

</template>
<script>
import { toRef } from 'vue';
export default {
    props: {
        message: {
            default: '',
            type: [Array, Object, String]
        }
    },
    setup(props) {
        const title = toRef(props, 'title');
    }
};
</script>
<style lang="scss" scoped>
@import '@/GlobalVariables.scss';

.error-container {
    width: 100%;

    .error-content {
        margin-top: 3.84px;
        .error-text {
            color: #d05337;
            font-size: 0.7rem;
            font-weight: $weight-500;
            text-align: right;
        }

        .text-space {
            visibility: hidden;
            font-size: 0.7rem;
            font-weight: $weight-500;
        }
    }

}





</style>
