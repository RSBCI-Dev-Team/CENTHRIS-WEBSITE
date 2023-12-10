<template>
    <div class="input-container">
        <label :for="name" v-if="label">
            {{ label }}
            <span class="required" v-show="required">(required)</span>
            <span class="required" v-show="optional">(optional)</span>
        </label>
        <div class="field-container">
            <input
                v-bind="$attrs"
                :type="type"
                :value="value"
                @input="$emit('update:value', $event.target.value)"

                :maxlength="maxlength"
                :class="{
                    'error-input': errorMessage || additionalErrorMessage
                }"
                :name="name"
                :id="name"
                :disabled="disable"
            />
            <div class="show-icon-container" v-show="props.type === 'password'">
                <div
                    class="icon-container"
                    @click="isShowPassword = !isShowPassword"
                >
                    <img class="hide-password-icon" v-show="isShowPassword" src="/assets/images/ind-hide.svg" />
                    <img class="show-password-icon" v-show="!isShowPassword" src="/assets/images/ind-view.svg" />
                </div>
            </div>
            <div class="show-icon-container "
                v-show="props.type !='password'"
            >
                <div
                    class="icon-container"
                    v-show="errorMessage || additionalErrorMessage"
                >
                    <img class="icon" src="/assets/images/warning-icon-1.svg" />
                </div>
            </div>
        </div>

        <ErrorInputField
            v-if="!additionalErrorMessage"
            :message="errorMessage"
        />
        <ErrorInputField
            v-show="props.type === 'password'"
            v-else
            :message="additionalErrorMessage"
        />
    </div>

</template>

<script>
import { onBeforeMount, ref, watch } from 'vue';
import ErrorInputField from '@/components/Forms/ErrorInputField.vue';

export default {
    components: { ErrorInputField },

    props: {
        // name:{
        //     default: '',
        //     type: String
        // },

        label: {
            default: '',
            type: String
        },

        type: {
            default: 'text',
            type: String
        },

        required: {
            default: false,
            type: Boolean
        },
        optional: {
            default: false,
            type: Boolean
        },


        value: {
            default: '',
            type: [String, Number]
        },

        disable: {
            default: false,
            type: Boolean
        },

        maxlength: {
            default: 255,
            type: Number
        },
        isNumber: {
            default: false,
            type: Boolean
        },
        isDouble: {
            default: false,
            type: Boolean
        },

        errorMessage: {
            default: '',
            type: [String, Array, Object]
        },
        additionalErrorMessage: {
            default: '',
            type: [String, Array, Object]
        }
    },
    emits: ['update:value'],
    setup(props, { emit }) {
        const isShowPassword = ref(false);
        const type = ref('');
        const name = ref('');

        onBeforeMount(async () => {
            type.value = props.type;
            name.value = randomString(9);

        });


        const randomString = (length) => {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let randomString = '';

            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                randomString += characters.charAt(randomIndex);
            }

            return randomString;
        };


        watch(isShowPassword, () => {
            type.value = isShowPassword.value ? 'text' : 'password';

        });

        return {
            isShowPassword,
            type,
            props,
            name
        };
    }
};
</script>

<style lang="scss" scoped>
@import '@/Styles/Forms.scss';
</style>
