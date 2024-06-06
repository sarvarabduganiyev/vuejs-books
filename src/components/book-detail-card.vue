<template>
  <div class="main-container">
    <div>
      <div>
        <h2>TITLE: {{ book?.items?.[0]?.volumeInfo?.title }}</h2>
        <img :src="book?.items?.[0]?.volumeInfo?.imageLinks?.smallThumbnail" class="logo" alt="img">
        <div>
          <h2>AUTHORS: </h2>
          <p v-for="author in book?.items?.[0]?.volumeInfo?.authors" class="author">{{ author }}</p>
        </div>
        <h2>DESCRIPTION:</h2>
        <p class="description" v-html="book?.items?.[0]?.volumeInfo?.description"></p>
      </div>
    </div>
  </div>
</template>


<script setup>
import {useRoute} from "vue-router";
import {ref, watch} from "vue";
import {BookService} from "../services/index.js";

const route = useRoute();
const book = ref("")

watch(() => route.params.id, (newQuery) => {
  if (newQuery) {
    BookService.getBook({q: `isbn:${newQuery}`}).then(res => {
      book.value = res;
    });
  }
}, {immediate: true});
</script>

<style scoped>

.logo {
  max-width: 200px;
  height: auto;
  margin-bottom: 20px;
}

.author {
  font-style: italic;
  margin-bottom: 10px;
}

.description {
  line-height: 1.6;
}
</style>
