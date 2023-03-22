<template>
  <div class="container mx-auto md:px-0">
    <section class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-14 lg:px-6">
        <div class="max-w-screen-sm mx-auto mb-8 text-center lg:mb-10">
          <h2
            class="mb-4 text-xl font-extrabold tracking-tight text-gray-900  md:text-4xl dark:text-white"
          >
            {{ data.heading }}
          </h2>
          <p
            class="text-sm font-light text-gray-500  sm:text-xl dark:text-gray-400"
          >
            {{ data.description }}
          </p>
          <p
            class="mt-6 text-sm font-medium text-center  md:text-lg text-violet-600"
          >
            <a v-if="data.cta_label" :href="data.cta_url"
              >{{ data.cta_label }}
              <svg
                class="inline ml-2"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.293 0.350129C8.48053 0.162658 8.73484 0.0573425 9 0.0573425C9.26516 0.0573425 9.51947 0.162658 9.707 0.350129L15.707 6.35013C15.8945 6.53766 15.9998 6.79196 15.9998 7.05713C15.9998 7.32229 15.8945 7.5766 15.707 7.76413L9.707 13.7641C9.5184 13.9463 9.2658 14.0471 9.0036 14.0448C8.7414 14.0425 8.49059 13.9374 8.30518 13.7519C8.11977 13.5665 8.0146 13.3157 8.01233 13.0535C8.01005 12.7913 8.11084 12.5387 8.293 12.3501L12.586 8.05713H1C0.734784 8.05713 0.48043 7.95177 0.292893 7.76424C0.105357 7.5767 0 7.32235 0 7.05713C0 6.79191 0.105357 6.53756 0.292893 6.35002C0.48043 6.16249 0.734784 6.05713 1 6.05713H12.586L8.293 1.76413C8.10553 1.5766 8.00021 1.32229 8.00021 1.05713C8.00021 0.791965 8.10553 0.537657 8.293 0.350129Z"
                  fill="#4338CA"
                />
              </svg>
            </a>
          </p>
        </div>
        <div class="hidden gap-8 md:grid sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="article in data.articles"
            :key="article._id"
            class="p-4 bg-white border border-gray-200 rounded-lg shadow-md  dark:bg-gray-800 dark:border-gray-700"
          >
            <nuxt-link :to="`/blog/${article._slug}`">
              <img
                class="object-cover w-full h-48 mb-5 rounded-lg"
                :src="article.seo.social_media_image[0].url"
                alt="office laptop working"
              />
              <span
                class="
                  bg-purple-100
                  text-purple-800 text-xs
                  font-semibold
                  mr-2
                  px-2.5
                  py-0.5
                  rounded
                  dark:bg-purple-200 dark:text-purple-900
                "
                >Article</span
              >
              <h2
                class="my-2 text-2xl font-bold tracking-tight text-gray-900  dark:text-white"
              >
                <a href="#">{{ article.title }}</a>
              </h2>
              <p
                class="mb-4 font-light text-gray-500  dark:text-gray-400 line-clamp-4"
                v-html="getExcerpt(article)"
              ></p>
              <div class="flex items-center space-x-4">
                <img
                  class="object-cover w-8 h-8 rounded-full"
                  :src="
                    article.authors[0].profile_pic
                      ? article.authors[0].profile_pic[0].url
                      : defaultProfilePic
                  "
                  :alt="article.authors[0].full_name"
                />
                <div class="font-medium dark:text-white">
                  <div>{{ article.authors[0].full_name }}</div>
                  <div
                    class="text-sm font-normal text-gray-500 dark:text-gray-400"
                  >
                    {{ getPublishDate(article._publish_on) }} ·
                    {{ article.authors[0]._read_time }} min read
                  </div>
                </div>
              </div>
            </nuxt-link>
          </article>
        </div>

        <div class="grid gap-8 md:hidden sm:grid-cols-2 lg:grid-cols-3">
          <Carousel :items="data.articles">
            <div class="rounded-lg h-[364px]">
              <div
                v-for="(article, index) in data.articles"
                :key="article._id"
                :data-carousel-item="index == 0"
                class="absolute duration-700 bg-white h-[364px]"
              >
                <article
                  class="bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700"
                >
                  <nuxt-link :to="`/blog/${article._slug}`">
                    <img
                      class="object-cover w-full h-40 mb-4 rounded-t-lg md:h-48"
                      :src="article.seo.social_media_image[0].url"
                      alt="office laptop working"
                    />
                  </nuxt-link>
                  <div class="px-4 pb-4">
                    <div class="flex justify-between">
                      <span
                        class="
                          bg-purple-100
                          text-purple-800 text-xs
                          font-semibold
                          mr-2
                          px-2.5
                          py-0.5
                          rounded
                          dark:bg-purple-200 dark:text-purple-900
                        "
                        >Article</span
                      >
                      <span
                        class="inline text-xs font-normal text-gray-500  md:hidden md:block dark:text-gray-400"
                      >
                        {{ getPublishDate(article._publish_on) }}
                      </span>
                    </div>
                    <h2
                      class="mt-3 mb-2 text-lg font-bold tracking-tight text-gray-900  md:my-2 md:text-2xl dark:text-white"
                    >
                      <a href="#">{{ article.title }}</a>
                    </h2>
                    <p
                      class="mb-4 text-sm font-light text-gray-500  md:text-base dark:text-gray-400 line-clamp-3 md:line-clamp-4"
                      v-html="getExcerpt(article)"
                    ></p>
                    <div class="flex items-center space-x-3">
                      <img
                        class="object-cover w-6 h-6 rounded-full md:w-8 md:h-8"
                        :src="
                          article.authors[0].profile_pic
                            ? article.authors[0].profile_pic[0].url
                            : defaultProfilePic
                        "
                        :alt="article.authors[0].full_name"
                      />
                      <div class="text-sm font-medium dark:text-white">
                        <div>{{ article.authors[0].full_name }}</div>
                        <div
                          class="hidden text-sm font-normal text-gray-500  md:block dark:text-gray-400"
                        >
                          {{ getPublishDate(article._publish_on) }} ·
                          {{ article.authors[0]._read_time }} min read
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Carousel from "@/components/Carousel.vue";
import { reactive, computed } from "vue";
import { useDateFormatter } from "@/composables/useDateFormatter";
const props = defineProps(["data"]);
const data = computed(() => props.data);
const defaultProfilePic = "https://demo-site-patterns.stream.prepr.io/w_2617/1mweulmemf78-pexels-tim-douglas-6205509.jpg"; // TO BE FIXED

const getPublishDate = (date) => {
  return useDateFormatter(date);
};

const getExcerpt = (article) => {
  return article.content[0].body;
};
</script>
