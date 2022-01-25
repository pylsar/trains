<template>
    <div>
        <h1>WikiPage</h1>
        <wiki-trains />
    </div>
</template>

<script>
    import WikiTrains from '../components/WikiTrains.vue'

    export default{
        name: 'Wiki',
        components: {
            WikiTrains
        }
    }
</script>