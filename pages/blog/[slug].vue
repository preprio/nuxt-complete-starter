<template>
  <div class="container mx-auto md:px-0">
    <Banner 
      title="Blog pattern"
      copy="A typical pattern for blog articles and news sections. It also incorporates a setup to show related authors and categories. This pattern shows a summary of articles and a specific article in detail. In this pattern we also showcase the recommendations feature in Prepr."
      url1="https://docs.prepr.io/create-schema/blog-pattern/"
    />
    <main class="pb-16 mt-20 bg-white lg:pb-24 dark:bg-gray-900">
      <div
        class="relative z-20 flex justify-between max-w-screen-xl mx-auto bg-white rounded dark:bg-gray-900"
      >
        <article
          class="
            xl:w-[928px]
            w-full
            max-w-none
            format format-sm
            sm:format-base
            lg:format-lg
            format-blue
            dark:format-invert
          "
        >
          <h1 class="mb-10 text-6xl font-bold leading-none text-gray-900">
            {{ article.title }}
          </h1>
          <div
            class="flex flex-col justify-between py-6 mb-10 border-t border-b border-gray-200 lg:flex-row lg:items-center dark:border-gray-700"
          >
            <span
              class="mb-4 text-base font-normal text-gray-500 lg:mb-0 dark:text-gray-400"
              >By
              <a
                href="#"
                rel="author"
                class="font-medium text-gray-900 no-underline dark:text-white hover:underline"
                >{{ article.authors[0].full_name }}</a
              >
              in
              <a
                :key="category.title"
                v-for="(category, index) in article.categories"
                href="#"
                class="font-medium text-gray-900 no-underline dark:text-gray-400 hover:underline"
                >{{ category.title
                }}<span v-if="index + 1 < article.categories.length"
                  >,
                </span></a
              ></span
            >
          </div>
          <div :key="contentType._id" v-for="contentType in article.content">
            <div v-if="contentType.__typename === 'Assets'" class="my-10">
              <img
                v-if="contentType.items.length"
                class="rounded-lg"
                :src="contentType.items[0]?.url"
              />
              <p
                v-if="contentType.items.length"
                class="mt-4 text-center text-gray-500"
              >
                {{ contentType.items[0]?.caption }}
              </p>
            </div>
            <div
              v-if="contentType.__typename === 'Text'"
              class="mb-2 article"
              v-html="contentType.body"
            ></div>
          </div>
        </article>
        <aside class="hidden xl:block" aria-labelledby="sidebar-label">
          <div class="xl:w-[304px] sticky top-6">
            <h3 id="sidebar-label" class="sr-only">Sidebar</h3>
            <NewsletterSubscribe />
            <ArticleAuthor :data="article.authors" />
          </div>
        </aside>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import NewsletterSubscribe from "@/components/NewsletterSubscribe.vue";
import ArticleAuthor from "@/components/ArticleAuthor.vue";
import { GetArticleBySlug } from "@/queries/getArticleBySlug";

const route = useRoute();
const { data, error } = await useAsyncQuery(GetArticleBySlug, {
  slug: route.params.slug,
});

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: error.value });
}

const article = data.value.Article;

</script>
