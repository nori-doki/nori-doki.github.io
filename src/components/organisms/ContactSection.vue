<template>
    <section class="contact" id="contact">
            <h2 class="contact-title">Contact</h2>
            <div class="contact-content">
                <div class="contact-content-container">
                    <img class="contact-gif" src="@/assets/img/noridoki_contact.gif" alt="Pixel art tuxedo cat behind computer screen gif" />
                </div>
                <div class="contact-content-container">
                    <form @submit.prevent="submitForm" class="contact-content-form">
                        <input 
                            type="mail" 
                            placeholder="Your email" 
                            required
                            v-model="email"
                        >
                        <div style="height: 1.5rem; padding: 0.5rem 1rem;margin: 0.5rem 1rem 0;width: 300px;">
                            <p v-show="!emailIsValid">This email is not valid.</p>
                        </div>
                        <textarea 
                            name="message" 
                            v-model="message" 
                            id="message" 
                            cols="20" 
                            rows="10" placeholder="Your message" 
                            required
                        ></textarea>
                        <button 
                            type="submit"
                            class="contact-content-button"
                            :disabled="disableSubmitButton"
                        >
                            <SpinningLoader v-if="loading" />
                            <span v-else>submit</span>
                        </button>
                        <div style="height: 1.5rem; padding: 0.5rem 1rem;margin: 0.5rem 1rem 0;width: 300px;">
                            <p v-show="sendingError">An error happened. Try again or reach me <a href="mailto:inesdai59@gmail.com">here</a>.
                            </p>
                            <p v-show="sendingSuccess" class="success">Your message has been successfully sent 🫰
                            </p>
                        </div>
                    </form>
                </div>
            </div>
    </section>
</template>

<script setup>
import { computed, ref } from 'vue';
import axios from 'axios';
import SpinningLoader from '../../assets/icons/spinningLoader.vue';

const email = ref('');
const message = ref('');
const accessKey=ref(import.meta.env.VITE_WEB3FORM_KEY);
const loading = ref(false);
const sendingError = ref(false);
const sendingSuccess = ref(false);

async function submitForm(){
    loading.value = true;
    const formData = new FormData();
    formData.append('email', email.value.toLowerCase());
    formData.append('message', message.value);
    formData.append('access_key', accessKey.value);
    sendingError.value = false;
    sendingSuccess.value = false;
    try {
        const response = await axios.post('https://api.web3forms.com/submit', formData);
        sendingSuccess.value = true;
        loading.value = false;
        email.value = '';
        message.value = '';
    } catch (error) {
        console.error(error)
        loading.value = false;
        sendingError.value = true;
    }

};

const emailIsValid = computed(() => {
    if (email.value === '') return true;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.value);
});

const disableSubmitButton = computed(() => {
    return email.value === '' || message.value === '' || !emailIsValid.value;
});

</script>

<style lang="scss">
.contact {
    &-title {
        font-size: 2rem;
        color: rgb(196, 211, 176);
        font-weight: 500;
        margin-bottom: 2rem;
    }
    &-content {
        display: flex;
        flex-direction: row;
        width: 100%;

        &-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 50%;
            max-width: 350px;
            min-height: 400px;

            form {
                height: 100%;
            }

            input, textarea {
                margin: 1rem 1rem 0;
                min-height: 1.5rem;
                border: 1px solid rgb(196, 211, 176);
                border-radius: 5px;
                width: 300px;
                padding: 0.5rem;
            }

            p {
                color: rgba(255, 0, 0, 0.5);
                font-family: "DM Serif Text", serif;

                &.success {
                    color: rgb(134, 154, 108);
                }
            }

        }
        &-button {
            margin: 1rem 1rem 0;
            padding: 0.5rem;
            border: 1px solid rgb(196, 211, 176);
            border-radius: 5px;
            background-color: rgb(196, 211, 176);
            color: white;
            width: 300px;
            font-size: 1.2rem;
            cursor: pointer;

            &:disabled {
                cursor: not-allowed;
            }

            &:input {
                border: 2px solid rgb(196, 211, 176);
            }
        }
    }
    &-gif {
        width: 120px;
    }
}
</style>