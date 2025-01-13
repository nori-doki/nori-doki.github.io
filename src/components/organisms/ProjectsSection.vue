<template>
    <section class="projects" id="projects">
        <h2 class="projects-title">projects</h2>
        <div class="projects-container">
            <div v-for="item in projects" :key="item.id" class="projects-container-item" >
                <img :src="`src/assets/img/${item.img}`" alt="Project image" 
                class="projects-gif" />
                <h4>{{ item.label }}</h4>
                <p>{{ item.description }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>

const projects = [
    {
        id: 1,
        label: 'Coming soon...',
        description: 'This project is still in development. Stay tuned!',
        img: "noridoki_construction.gif",
    },
    {
        id: 2,
        label: 'Coming soon...',
        description: 'This project is still in development. Stay tuned!',
        img: "noridoki_construction.gif",
    },
];
</script>

<style lang="scss">
.projects {
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

    &-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        &-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            max-width: 250px;
            border: 2px solid rgb(196, 211, 176);
            border-radius: 20px;
            padding: 1rem;

            h4 {
                font-size: 1.5rem;
                color: rgb(196, 211, 176);
                font-weight: 500;
            }
        }
    }

    &-gif {
        width: 100px;
        margin-top: 4rem;
    }
}

</style>