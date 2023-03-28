<template>
  <div class="container mx-auto md:px-0">
    <Banner 
      title="Blog pattern"
      copy="A typical pattern for blog articles and news sections. It also incorporates a setup to show related authors and categories. This pattern shows a summary of articles and a specific article in detail. In this pattern we also showcase the recommendations feature in Prepr."
      url1="https://docs.prepr.io/create-schema/blog-patteradn/"
    />
    <Hero
      title="Our blog"
      description="Fun recipes, tips-and-tricks and more from our in-house chefs."
    >
    </Hero>
    <div class="grid grid-cols-4 gap-1 md:gap-12">
      <div class="col-span-4 md:hidden">
        <Search />
      </div>
      <div class="hidden col-span-1 md:block">
        <SidebarList
          @set-category="setCategory"
          :currentCategory="state.categorySlug"
        />
      </div>
      <div class="col-span-4 md:col-span-2">
        <ArticleCard
          :data="article"
          v-for="article in state.articlesFiltered"
          :key="article._id"
        />
      </div>
      <div class="hidden col-span-1 md:block">
        <Search />
        <Authors :data="authors" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import Banner from "@/components/Banner.vue";
import Hero from "@/components/Hero.vue";
import SidebarList from "@/components/SidebarList.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import Search from "@/components/Search.vue";
import Authors from "@/components/Authors.vue";
import { GetArticles } from "@/queries/preprQueries";

const state = reactive({
  categorySlug: "",
  articles: [],
  articlesFiltered: [],
});

const { data, error, refresh } = await useAsyncQuery(GetArticles);
state.articles = data.value.Articles.items;
state.articlesFiltered = data.value.Articles.items;

const setCategory = async (cat) => {
  state.categorySlug = cat;
  const { data, error, refresh } = await useAsyncQuery(GetArticles, {
    where: {
      categories: {
        _slug_any: state.categorySlug,
      },
    },
  });

  state.articles = data.value.Articles.items;
  state.articlesFiltered = data.value.Articles.items;
  refresh();
};

const authors = []
  .concat(...state.articles.map((article) => article.authors)) // Flatten the authors array and remove duplicates.
  .filter(
    (author, index, self) =>
      self.findIndex((a) => a.full_name === author.full_name) === index
  );
</script>
