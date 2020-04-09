<template>
  <main class="main-page">
    <div class="main-page__left">
      <div class="main-page__left__box">
        <section class="profile__left">
          <div class="heading__wrapper heading__wrapper--white">
            <h1 class="heading heading--name">{{ name }}</h1>
            <h2 class="heading">{{ position }}</h2>
          </div>
          <div class="flex flex-wrap py-2">
            <p class="button-icon">
              <font-awesome-icon :icon="['fas','map-marker-alt']" class="button-icon__icon" />
              <span class="button-icon__text">{{ location }}</span>
            </p>

            <a class="button-icon button-icon--link" :href="'mailto: ' + email">
              <font-awesome-icon :icon="['fas','envelope']" class="button-icon__icon" />
              <span class="button-icon__text">{{ email }}</span>
            </a>

            <a class="button-icon button-icon--link" :href="github_link" target="_blank">
              <font-awesome-icon :icon="['fab','github']" class="button-icon__icon" />
              <span class="button-icon__text">{{ github }}</span>
            </a>

            <a class="button-icon button-icon--link" :href="linkedin_link" target="_blank">
              <font-awesome-icon :icon="['fab','linkedin']" class="button-icon__icon" />
              <span class="button-icon__text">{{ linkedin }}</span>
            </a>
          </div>
        </section>

        <div
          v-if="name"
          class="mx-auto w-48 h-48 sm:w-40 sm:h-40 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64"
        >
          <avatar
            :name="name"
            :src="this.photo ? this.photo : ''"
            :style="{
          'width': 'inherit',
          'height': 'inherit'
        }"
          ></avatar>
        </div>

        <p class="text-justify esm:p-3 md:p-3 text-porcelain">{{ aboutme }}</p>

        <section>
          <div class="heading__wrapper heading__wrapper--white">
            <h2 class="heading heading--white">Skills</h2>
          </div>
          <div class="mt-4">
            <template v-for="(skill, index) in skills">
              <div class="skill-set" :key="index">
                <span class="skill-set__name">{{ skill.name }}</span>
                <div class="skill-set__value">
                  <progress-bar :val="skill.value" size="large" bar-color="#79bac1"></progress-bar>
                </div>
              </div>
            </template>
          </div>
        </section>
      </div>
    </div>

    <div class="main-page__right">
      <div class="main-page__right__box">
        <section class="profile__right">
          <div class="heading__wrapper">
            <h1 class="heading heading--name">{{ name }}</h1>
            <h2 class="heading">{{ position }}</h2>
          </div>
          <div class="flex flex-wrap py-2">
            <p class="button-icon">
              <font-awesome-icon :icon="['fas','map-marker-alt']" class="button-icon__icon" />
              <span class="button-icon__text">{{ location }}</span>
            </p>

            <a class="button-icon button-icon--link" :href="'mailto: ' + email">
              <font-awesome-icon :icon="['fas','envelope']" class="button-icon__icon" />
              <span class="button-icon__text">{{ email }}</span>
            </a>

            <a class="button-icon button-icon--link" :href="github_link" target="_blank">
              <font-awesome-icon :icon="['fab','github']" class="button-icon__icon" />
              <span class="button-icon__text">{{ github }}</span>
            </a>

            <a class="button-icon button-icon--link" :href="linkedin_link" target="_blank">
              <font-awesome-icon :icon="['fab','linkedin']" class="button-icon__icon" />
              <span class="button-icon__text">{{ linkedin }}</span>
            </a>
          </div>
        </section>

        <section>
          <div class="heading__wrapper">
            <h2 class="heading">Experience</h2>
          </div>
          <timeline>
            <template v-for="(experience,index) in experiences">
              <timeline-content :from="experience.from" :to="experience.to" :key="index">
                <p>{{ experience.position}} @ {{ experience.location }}</p>
                <p>{{ experience.description}}</p>
              </timeline-content>
            </template>
          </timeline>
        </section>

        <section>
          <div class="heading__wrapper">
            <h2 class="heading">Education</h2>
          </div>
          <timeline>
            <template v-for="(education, index) in educations">
              <timeline-content :from="education.from" :to="education.to" :key="index">
                <p>{{ education.location }}, {{ education.description}}</p>
              </timeline-content>
            </template>
          </timeline>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import Avatar from "./../components/Avatar";
import Timeline from "./../components/Timeline/Timeline";
import TimelineContent from "./../components/Timeline/TimelineContent";
import ProgressBar from "vue-simple-progress";

export default {
  name: "main-page",
  components: {
    Avatar,
    Timeline,
    TimelineContent,
    ProgressBar
  },
  mounted: function() {
    this.loadJsonFile();
  },
  data: function() {
    return {
      name: "",
      position: "",
      location: "",
      photo: "",
      email: "",
      github: "",
      github_link: "",
      linkedin: "",
      linkedin_link: "",
      aboutme: "",
      skills: [],
      experiences: [],
      educations: []
    };
  },
  methods: {
    loadJsonFile() {
      let jsonFile = require("./../../public/me.json");
      this.name = jsonFile.name;
      this.position = jsonFile.position;
      this.location = jsonFile.location;
      this.email = jsonFile.email;
      this.photo = jsonFile.photo;
      this.github = jsonFile.github;
      this.github_link = jsonFile.github_link;
      this.linkedin = jsonFile.linkedin;
      this.linkedin_link = jsonFile.linkedin_link;
      this.aboutme = jsonFile.about_me;
      this.skills = jsonFile.skills;
      this.experiences = jsonFile.experiences;
      this.educations = jsonFile.educations;
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  @apply text-sm;
  @apply font-inria;
}

section {
  @apply my-3;
  @apply mx-1;
}

.heading {
  @apply text-2xl;
  @apply font-bold;

  &--name {
    @apply text-4xl;
  }

  &--white {
    @apply text-porcelain;
  }

  &__wrapper {
    @apply pb-2;
    @apply border-b-4;
    @apply border-calypso;

    &--white {
      @apply border-porcelain;
    }
  }
}

.profile {
  &__left {
    @apply text-porcelain;
  }

  &__right {
    @apply text-gray-700;
  }
}

.button-icon {
  @apply flex;
  @apply py-2;
  @apply px-1;
  @apply w-1/2;

  &--link {
    @apply cursor-pointer;
    &:hover {
      @apply text-gray-800;
    }
  }

  &__icon {
    @apply text-lg;
  }

  &__text {
    @apply ml-2;
    @apply text-xs;
  }
}

.skill-set {
  @apply w-full;
  @apply text-porcelain;
  @apply py-2;
  @apply my-1;
  @apply flex;
  @apply items-center;

  &__name {
    @apply text-sm;
    @apply w-1/3;
  }

  &__value {
    @apply w-2/3;
  }
}

.main-page {
  @apply text-gray-700;
  @apply flex;
  @apply flex-col;

  &__left {
    @apply w-full;
    @apply h-auto;
    @apply bg-calypso;
  }

  &__right {
    @apply w-full;
  }
}

.main-page__left__box {
  @apply w-full;
  @apply ml-0;
  @apply p-5;
}

.main-page__right__box {
  @apply w-full;
  @apply mr-0;
  @apply p-5;
}

@screen esm {
  .profile {
    &__left {
      @apply block;
    }

    &__right {
      @apply hidden;
    }
  }
}

@screen sm {
  p {
    @apply text-base;
  }

  .heading {
    @apply text-3xl;

    &--name {
      @apply text-5xl;
    }
  }

  .button-icon {
    &__icon {
      @apply text-2xl;
    }

    &__text {
      @apply ml-3;
      @apply text-base;
    }
  }
}

@screen md {
  section {
    @apply my-5;
  }

  .profile {
    &__left {
      @apply hidden;
    }

    &__right {
      @apply block;
    }
  }

  .main-page {
    @apply flex-row;

    &__left {
      @apply w-1/3;
      @apply min-h-screen;
    }

    &__right {
      @apply w-2/3;
      @apply min-h-screen;
    }
  }

  .main-page__left__box {
    @apply ml-auto;
    @apply p-8;
  }

  .main-page__right__box {
    @apply mr-auto;
    @apply p-8;
  }
}

@screen lg {
  .main-page__left__box,
  .main-page__right__box {
    @apply w-3/4;
  }
}
</style>