<template>
    <div class="sk-pulse"></div>
</template>

<style lang="scss">
.sk-pulse {
    width:25px;
    height:25px;
    background-color:white;
    border-radius:100%;
    animation:sk-pulse 1.2s infinite cubic-bezier(0.455,0.03,0.515,0.955);
    margin: auto;
}
@keyframes sk-pulse{
    0%{
        transform:scale(0)
    }
    100%{
        transform:scale(1);opacity:0
    }
}
</style>