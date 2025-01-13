<template>
    <header>
        <div class="navigation">
            <div v-for="item in items" :key="item.label" class="navigation-item" :id="`nav-${item.label}`" @click="scrollTo(item.label, item)"
            >
                <div class="navigation-item-active"
                    :class="{ active: item.label === 'home' }" 
                ></div>
                <i :class="item.icon"></i>
                <span>{{ item.label }}</span>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const items = ref([
    {
        label: 'home',
        icon: 'pi pi-home',
        route: '/',
        isActive: true
    },
    {
        label: 'skills',
        icon: 'pi pi-user',
        route: '/skills',
        isActive: false
    },
    {
        label: 'projects',
        icon: 'pi pi-search',
        route: '/projects',
        isActive: false
    },
    {
        label: 'contact',
        icon: 'pi pi-envelope',
        route: '/contact',
        isActive: false
    }
]);

function scrollTo(to, item) {
    console.log('scrollTo:', to);
    if (to === 'home') {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    } else {
        document.getElementById(to).scrollIntoView({ behavior: 'smooth' });
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        if(window.scrollY >= section.offsetTop - 100 && window.scrollY < section.offsetTop + section.offsetHeight) {
            const navLinks = document.querySelectorAll('.navigation-item');
            navLinks.forEach((navLink) => {
                const div = document.querySelector(`#${navLink.id} > .navigation-item-active`);
                if(navLink.id === `nav-${section.id}`) {
                    div.classList.add('active');
                } else {
                    div.classList.remove('active');
                }
            })
        }
    })

}
</script>

<style lang="scss">
header {
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    z-index: 100;
    top: 0;

    .navigation {
        display: flex;
        margin: 20px auto;
        width: fit-content;
        padding: 5px 15px;
        font-size: 20px;
        background-color: white;
        border-radius: 25px;
        &-item {
            padding: 0.5rem;
            width: fit-content;
            height: fit-content;
            position: relative;
            cursor: pointer;
            display: flex;
            justify-content: center;
            i, span {
                padding: 0.3rem;
            }
            &-active {
                // background-color: rgb(196, 211, 176);
                position: absolute;
                bottom: 0;
                left: 50;
                width: 75%;
                height: 0.3rem;
                border-radius: 10px;

                &.active {
                    background-color: rgb(196, 211, 176);
                }
            }
        }
    }
}

@media (max-width: 768px) {
    header {
        width: fit-content;
        margin-left: 10px;
    }
}
</style>