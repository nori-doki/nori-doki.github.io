<template>
    <div class="home">
        <section class="home-container" id="home">
            <Typed :options="options" class="home-container-typing">
                <h1 class="typing"></h1>
            </Typed>
            <div class="home-container-description">
                <div class="home-container-description-text">
                    <p>I'm a front-end web developer based in <span>Paris, France</span>.</p>
                    <p>I'm passionate about creating beautiful 💅 and user friendly web applications ✨ </p>
                </div>
                <img class="home-container-description-image"src="@/assets/img/noridoki.gif" alt="Pixel art tuxedo cat gif" title="This is Nori, my son. "/>
            </div>
        </section>
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { Typed } from "@duskmoon/vue3-typed-js";
import SkillsSection from '@/components/organisms/SkillsSection.vue';
import ProjectsSection from '@/components/organisms/ProjectsSection.vue';
import ContactSection from '@/components/organisms/ContactSection.vue';

onMounted(() => {
    // getUserCountry();
});

const options = {
  strings: [
        "‎Hello! I'm Ines.",
        "‎Welcome to my portfolio!",
    ],
  loop: true,
  typeSpeed: 20,
  backSpeed: 20,
  backDelay: 4000,
  smartBackspace:true,
  showCursor:false
};

const userData = ref('');

async function getUserCountry() {
    try {
        const response = await axios.get('https://ipapi.co/json/');
        console.log('response:', response.data);
        userData.value = {};
        userData.value.countryName = response.data.country_name;
        userData.value.countryCode = response.data.country_code;
        userData.value.city = response.data.city;
        console.log('userData.value:', userData.value)
    } catch (error) {
        console.error('error:', error);
    }
}
</script>

<style lang="scss">
.home {
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;

    &-container {
        display: flex;
        flex-direction: column;

        &-typing {
            height: 3.1rem;
        }

        .typing {
            width: 100%;
            font-size: 3rem;
            color: rgb(196, 211, 176);
            font-weight: 500;
        }
        &-description {
            background-color: rgb(255, 255, 255, 0.5);
            backdrop-filter: blur(10px);
            padding:  5px 25px;
            border-radius: 25px;
            display: flex;
            flex-direction: row;
            align-items: flex-end;

            &-text {
                font-size: 1.2rem;
                line-height: 1.5rem;
                height: fit-content;
                span {
                    font-family: "Fleur De Leah", serif;
                    font-size: 2rem;
                }
            }

            &-image {
                width: 110px;
                height: 110px;
            }
        }
    }
}

section {
    border: 1px solid orange;
    width: 80%;
    max-width: 700px;
    height: 85vh;
    padding-top: 50px;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>