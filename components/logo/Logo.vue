<template>
    <div>
        <n-link :to="logLink">
            <img src="/images/logo/logo.png" alt="Logo">
        </n-link>
    </div>
</template>
<script>
    export default {
        props: {
            logLink: String,
        }
    }
</script>