<template>



    <div class="modal-backdrop" >
        <div class="confirmation-container">

            <img
                v-if="type=='success'"
                alt="check-icon"
                src="svg/check-modal-icon.svg"
            />
            <img
                v-else-if="type=='alert'"
                alt="alert-icon"
                src="svg/alert-modal-icon.svg"
            />
            <img
                v-else-if="type=='warning'"
                alt="check-icon"
                src="svg/warning-modal-icon.svg"
            />
            <img
                v-else-if="type=='error'"
                alt="error-icon"
                src="svg/error-modal-icon.svg"
            />


            <h2>{{ message }}</h2>
            <p>
                {{ id }}
            </p>
            <div class=" button-container">
                <button v-if="hasCancelButton" class="neutral-button" @click="$emit('closeModal')">
                    No
                </button>
                <button class="confirmation-button" @click="$emit('confirm')">
                    {{ yesButtonLabel }}
                </button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: ''
        },
        message: {
            type: String,
            default: 'Are you sure you want to delete?'
        },
        yesButtonLabel: {
            type: String,
            default: 'Yes'
        },

        type: {
            default: 'alert',
            type: String
        },
        hasCancelButton: {
            default: false,
            type: Boolean
        },

    },
    setup(props) {
    }
};
</script>

<style lang="scss" scoped>
@import "@/GlobalStyle.scss";




.confirmation-container{
    width: 543px;
    height: fit-content;
    border-radius: 9px;
    background: $text-dark-bg;
    padding: 62px 32px;

    display: flex;
    flex-direction: column;
    row-gap: 22px;
    justify-content: center;
    align-items: center;

    h2{
        color: $text-heading;
        font-size: 1.25rem;
        font-weight: $weight-700;
        margin: 0;
        text-align: center;
    }

    img{
        width: 86px;
        height: 86px;
    }

    p{
        color: $text-input-label;
        text-align: center;
        font-size: 1rem;
        font-weight: $weight-500;
        margin: 0;

        width: 375px;
    }

    .button-container{

        display: flex;
        justify-content: center;
        column-gap: 15px;

        button{
            margin-top: 33px;
            width: 193px;
            height: 31px;
        }

    }


}











.modal-backdrop,
.modal-bg {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: #3d3b3bc2;

    .modal-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 543px;
        height: 273px;
        background-color: $text-dark-bg;
        border-radius: 9px;

        position: relative;

        .close-button-container {
            position: absolute;
            right: 30.08px;
            top: 31.04px;
            cursor: pointer;
            user-select: none;

            .close-modal-icon {
                width: 16px;
                height: 15px;
                flex-shrink: 0;
            }
        }

        .modal-content {
            width: 100%;
            padding: 0 72px;
        }
    }
}


@media (max-width: 780px) {



    .confirmation-container{




        .button-container{

            button{
                width: 122px;
                height: 31px;
            }

        }


    }
}

</style>
