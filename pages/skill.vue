<template>
    <div>
        <h1>skill</h1>
        <p v-if="error">{{ error }}</p>
        <p v-if="pending">Loading...</p>
        <ul v-for="item in notionDatas.results" :key="item.id" class="">
            <li>{{ item.properties.Text.rich_text[0].text.content }}</li>
            <li>{{ item.properties.title.title[0].text.content }}</li>
            <li>{{ item.properties.create_date.created_time }}</li>
            <div>---------------</div>
        </ul>
    </div>
</template>

<script setup>
const {
    data: notionDatas,
    error,
    pending,
} = await useFetch('/api/notion');
// const { data: notionDatas } = await useFetch('/api/notion');

</script>

<style>

</style>