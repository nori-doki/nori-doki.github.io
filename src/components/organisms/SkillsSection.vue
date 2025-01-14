<template>
    <section class="skills" id="skills">
        <h2 class="skills-title">Skills</h2>
        <div class="skills-stack">
            <div v-for="item in stack" :key="item.label" class="skills-stack-item" >
                <component :is="item.component" class="icon"/>
                <p>{{ item.label }}</p>
            </div>
        </div>
        <img class="skills-gif" src="@/assets/img/noridoki_skills.gif" alt="Pixel art tuxedo cat behind computer screen gif" />
    </section>
</template>

<script setup>
import html from '@/assets/icons/html.vue';
import css from '@/assets/icons/css.vue';
import vue from '@/assets/icons/vue.vue';
import javascript from '@/assets/icons/javascript.vue';
import vite from '@/assets/icons/vite.vue';
import vitest from '@/assets/icons/vitest.vue';
import sass from '@/assets/icons/sass.vue';
import canva from '@/assets/icons/canva.vue';
import photoshop from '@/assets/icons/photoshop.vue';
import cypress from '@/assets/icons/cypress.vue';

const stack = [
    {
        component: html,
        label: 'html'
    },
    {
        component: css,
        label: 'css'
    },
    {
        component: sass,
        label: 'sass'
    },
    {
        component: javascript,
        label: 'javascript'
    },
    {
        component: vue,
        label: 'vue'
    },
    {
        component: vite,
        label: 'vite'
    },
    {
        component: vitest,
        label: 'vitest'
    },
    {
        component: cypress,
        label: 'cypress'
    },
    {
        component: canva,
        label: 'canva'
    },
    {
        component: photoshop,
        label: 'photoshop'
    }
]

</script>

<style lang="scss">
.skills {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &-title {
        font-size: 2rem;
        color: rgb(196, 211, 176);
        font-weight: 500;
        margin-bottom: 4rem;
    }

    &-stack {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        max-width: 400px;

        &-item {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            margin: 10px;
            width: 75px;
            height: 75px;
        }
    }

    .icon {
        display: block;
        margin-bottom: 0.5rem;
    }

    &-gif {
        width: 90px;
        margin-top: 4rem;
    }
}

@media (max-width: 500px) {
    .skills {
        &-stack {
            max-width: 300px;

            &-item {
                width: 50px;
            }
        }

        &-title {
            margin-bottom: 1rem;
        }

        &-gif {
            width: 70px;
            margin-top: 2.5rem;
        }
    }
}
</style>