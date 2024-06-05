<template>
  <div>
    <SearchForm/>
  </div>
  <div class="book-cards-wrapper">
    <div v-for="item in booksStore.books?.items" :key="item.id">
      <BookCard
          :img="item.volumeInfo?.imageLinks?.smallThumbnail"
          :title="item?.volumeInfo?.title"
          :saleability="item?.saleInfo?.saleability"
          :param="item?.volumeInfo?.industryIdentifiers[0]?.identifier"
      />
    </div>
  </div>
</template>

<script setup>
import BookCard from "../components/BookCard.vue";
import SearchForm from "../components/SearchForm.vue";
import {useBooksStore} from "../stores/index.js";
import {onMounted} from "vue";

const booksStore = useBooksStore();

onMounted(() => {
  console.log("ASAA", booksStore.books);
})
</script>

<style scoped>
.book-cards-wrapper {
  display: grid;
  align-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>
