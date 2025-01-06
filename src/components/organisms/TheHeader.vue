<template>
    <header>
        <div class="navigation">
            <div v-for="item in items" :key="item.label" class="navigation-item" @click="scrollTo(item.label, item)"
            >
                <div v-show="item.isActive" class="navigation-item-active"></div>
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
    if (to === 'home') {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    } else {
        document.getElementById(to).scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
        updateActiveItem(item);
    }, 200);
};

function updateActiveItem(item) {
    items.value.forEach(i => {
        i.isActive = i.label === item.label;
    });
};

function updateActiveOnScroll(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const activeItem = items.value.find(item => item.label === entry.target.id);
            if (activeItem) {
                updateActiveItem(activeItem);
            }
        }
    });
}

onMounted(() => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver(updateActiveOnScroll, observerOptions);

    items.value.forEach(item => {
        const section = document.getElementById(item.label);
        if (section) {
            observer.observe(section);
        }
    });

    onBeforeUnmount(() => {
        observer.disconnect();
    });
});

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
                background-color: rgb(196, 211, 176);
                position: absolute;
                bottom: 0;
                left: 50;
                width: 75%;
                height: 0.3rem;
                border-radius: 10px;
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