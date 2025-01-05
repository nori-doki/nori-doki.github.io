<template>
    <div>
        <vue-typed-js
            :strings="[
                'Hello, World!',
                'Welcome to my portfolio!',
                'I am a full-stack developer.',
                'I am a software engineer.',
                'I am a problem solver.',
                'I am a lifelong learner.',
                'I am a team player.',
                'I am a leader.',
                'I am a mentor.',
                'I am a teacher.',
                'I am a student.']"
            startDelay=1000
            typeSpeed=50
            backSpeed=50
            backDelay=1000
            :smartBackspace="true"
            loop
        ></vue-typed-js>
    </div>
</template>

<script setup>

</script>