<template>
  <div>
    <div class="book-card-detail-wrapper">
      <div class="card">
        <div class="circle" style="--clr:#fd7015;">
          <img :src="books?.items?.[0]?.volumeInfo?.imageLinks?.smallThumbnail" class="logo" alt="img">
        </div>
        <div class="content">
          <h2>{{books?.items?.[0]?.volumeInfo?.title}}</h2>
          <p>Saleability: {{ books?.items?.[0]?.saleInfo?.saleability}}
          </p>
          <a :href="books?.items?.[0]?.saleInfo?.buyLink" target="_blank">BUY LINK</a>
        </div>
      </div>
    </div>
    <div v-html="books?.items?.[0]?.volumeInfo?.description"></div>
  </div>


</template>

<script setup>
import {useRoute} from "vue-router";
import {onMounted, watch} from "vue";
import {useBooksStore} from "../stores/index.js";

const {fetchBooksOrBook, books} = useBooksStore();
const route = useRoute()

onMounted(() => {
  console.log("books?.items?.[0]?.volumeInfo?.imageLinks?.smallThumbnail",books?.items?.[0]?.volumeInfo?.imageLinks?.smallThumbnail)
});

watch(() => route.params.id, (newQuery) => {
  if (newQuery) {
    fetchBooksOrBook({q: `isbn:${newQuery}`});
  }
}, {immediate: true});


</script>

<style scoped>
.book-card-detail-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
}

.card {
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  transition-delay: 0.5s;
}

.card:hover {
  width: 600px;
  transition-delay: 0.5s;
}

.card .circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card .circle::before {
  content: "";
  position: absolute;
  top: 30;
  left: 2;
  right: 2;
  width: 470px;
  height: 470px;
  border-radius: 50%;
  background: #191919;
  border: 8px solid var(--clr);
  filter: drop-shadow(0 0 10px var(--clr)) drop-shadow(0 0 60px var(--clr));
  transition: 0.5s, background 0.5s;
  transition-delay: 0.75s, 1s;
}

.card:hover .circle::before {
  transition-delay: 0.5s;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: var(--clr);
}

.card .circle .logo {
  position: relative;
  width: 250px;
  transition: 0.5s;
  transition-delay: 0.5s;
}

.card:hover .circle .logo {
  transform: scale(0);
  transition-delay: 0s;
}

.card .content {
  position: absolute;
  left: 10%;
  width: 100%;
  opacity: 0;
  transition: 0.5s;
  visibility: hidden;
}

.card:hover .content {
  transition-delay: 0.75s;
  opacity: 1;
  visibility: visible;
  left: 3px;
  margin-top: 15px;
}

.card .content h2 {
  color: #fff;
  text-transform: uppercase;
  font-size: 2em;
  line-height: 1.3em;
}

.card .content p {
  color: #fff;
}

.card .content a {
  position: relative;
  color: #fff;
  background: #222222;
  padding: 10px 20px;
  border-radius: 10px;
  display: inline-block;
  text-decoration: none;
  font-weight: 600;
  margin-top: 15px;
}

</style>
