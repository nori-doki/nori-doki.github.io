<template>
    <header>
        <div class="navigation">
            <div v-for="item in items" :key="item.label" class="navigation-item" @click="navigateTo(item.route, item)">
                <div v-show="item.isActive" class="navigation-item-active"></div>
                <i :class="item.icon"></i>
                <span>{{ item.label }}</span>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
    {
        label: 'home',
        icon: 'pi pi-home',
        route: '/',
        isActive: true
    },
    {
        label: 'resume',
        icon: 'pi pi-user',
        route: '/resume',
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

function navigateTo(to, item) {
    router.push(to);
    updateActiveItem(item);
}

function updateActiveItem(item) {
    items.value.forEach(i => {
        i.isActive = i.label === item.label;
    });
}
</script>

<style lang="scss">
header {
    display: flex;
    justify-content: center;
    width: 100%;

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