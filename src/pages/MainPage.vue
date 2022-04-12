<template>
  <main class="main-page">
    <div class="main-page__left">
      <div class="main-page__left__box">
        <section>
          <div class="heading__wrapper heading__wrapper--white">
            <h1 class="heading heading--white heading--name">{{ name }}</h1>
            <h2 class="heading heading--white">{{ position }}</h2>
          </div>

          <div
            v-if="name"
            class="float-left m-4 w-32 h-32 sm:w-28 sm:h-28 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44"
            style="shape-outside: circle();"
          >
            <avatar
              :name="name"
              :src="this.photo ? this.photo : ''"
              :style="{
                width: 'inherit',
                height: 'inherit',
              }"
            ></avatar>
          </div>

          <p class="text-justify esm:p-2 md:p-2 text-porcelain">
            {{ summary }}
          </p>
        </section>

        <section>
          <div class="heading__wrapper heading__wrapper--white">
            <h2 class="heading heading--white">Contacts</h2>
          </div>
          <div class="contacts">
            <p class="contacts__item">
              <font-awesome-icon
                :icon="['fas', 'map-marker-alt']"
                class="contacts__icon"
              />
              <span class="contacts__text">{{ location }}</span>
            </p>

            <a
              class="contacts__item contacts__item--link"
              :href="'mailto: ' + email"
            >
              <font-awesome-icon
                :icon="['fas', 'envelope']"
                class="contacts__icon"
              />
              <span class="contacts__text">{{ email }}</span>
            </a>

            <a
              class="contacts__item contacts__item--link"
              :href="github_link"
              target="_blank"
            >
              <font-awesome-icon
                :icon="['fab', 'github']"
                class="contacts__icon"
              />
              <span class="contacts__text">{{ github }}</span>
            </a>

            <a
              class="contacts__item contacts__item--link"
              :href="linkedin_link"
              target="_blank"
            >
              <font-awesome-icon
                :icon="['fab', 'linkedin']"
                class="contacts__icon"
              />
              <span class="contacts__text">{{ linkedin }}</span>
            </a>
          </div>
        </section>

        <section>
          <div class="heading__wrapper heading__wrapper--white">
            <h2 class="heading heading--white">Skills</h2>
          </div>
          <div class="mt-4 flex flex-wrap">
            <template v-for="(skill, index) in skills">
              <span class="skill-pill" :key="index">
                {{ skill }}
              </span>
            </template>
          </div>
        </section>

        <section>
          <div class="heading__wrapper heading__wrapper--white">
            <h2 class="heading heading--white">Education</h2>
          </div>
          <timeline class="timeline--white">
            <template v-for="(education, index) in educations">
              <timeline-content
                class="timeline-content--white"
                :from="education.from"
                :to="education.to"
                :key="index"
              >
                <p>{{ education.location }}, {{ education.description }}</p>
              </timeline-content>
            </template>
          </timeline>
        </section>

        <section>
          <div class="heading__wrapper heading__wrapper--white">
            <h2 class="heading heading--white">Certificates</h2>
          </div>
          <div class="flex m-1 p-1 flex-wrap">
            <certificate-card
              class="certificate-card--white"
              v-for="(certificate, index) in certificates"
              :key="index"
              v-bind="certificate"
            />
          </div>
        </section>
      </div>
    </div>

    <div class="main-page__right">
      <div class="main-page__right__box">
        <section>
          <div class="heading__wrapper">
            <h2 class="heading">Experience</h2>
          </div>
          <timeline>
            <template v-for="(experience, index) in experiences">
              <timeline-content
                :from="experience.from"
                :to="experience.to"
                :key="index"
              >
                <p>{{ experience.position }} @ {{ experience.location }}</p>
                <div v-html="experience.description"></div>
              </timeline-content>
            </template>
          </timeline>
        </section>

        <section>
          <div class="heading__wrapper">
            <h2 class="heading">Projects</h2>
          </div>
          <div class="flex m-1 p-1 flex-wrap">
            <project-card
              v-for="(project, index) in projects"
              :key="index"
              v-bind="project"
            />
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import Avatar from './../components/Avatar';
import Timeline from './../components/Timeline/Timeline';
import TimelineContent from './../components/Timeline/TimelineContent';
import ProjectCard from './../components/ProjectCard';
import CertificateCard from './../components/CertificateCard.vue';

export default {
  name: 'main-page',
  components: {
    Avatar,
    Timeline,
    TimelineContent,
    ProjectCard,
    CertificateCard,
  },
  mounted: function () {
    this.loadJsonFile();
  },
  data: function () {
    return {
      name: '',
      position: '',
      location: '',
      summary: '',
      photo: '',
      email: '',
      github: '',
      github_link: '',
      linkedin: '',
      linkedin_link: '',
      skills: [],
      experiences: [],
      educations: [],
      projects: [],
      certificates: [],
    };
  },
  methods: {
    loadJsonFile() {
      let jsonFile = require('./../../public/me.json');
      this.name = jsonFile.name;
      this.position = jsonFile.position;
      this.location = jsonFile.location;
      this.email = jsonFile.email;
      this.photo = jsonFile.photo;
      this.github = jsonFile.github;
      this.github_link = jsonFile.github_link;
      this.linkedin = jsonFile.linkedin;
      this.linkedin_link = jsonFile.linkedin_link;
      this.summary = jsonFile.summary;
      this.skills = jsonFile.skills;
      this.experiences = jsonFile.experiences;
      this.educations = jsonFile.educations;
      this.projects = jsonFile.projects;
      this.certificates = jsonFile.certificates;
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  @apply text-sm;
  @apply font-inria;
}

section {
  @apply my-2.5;
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
    @apply mb-2;
    @apply pb-2;
    @apply border-b-4;
    @apply border-calypso;

    &--white {
      @apply border-porcelain;
    }
  }
}

.contacts {
  @apply flex;
  @apply flex-row;
  @apply flex-wrap;
  @apply py-2;

  &__item {
    @apply flex;
    @apply py-2;
    @apply px-1;
    @apply w-1/2;
    @apply text-porcelain;

    &--link {
      @apply cursor-pointer;
      &:hover {
        @apply text-glacier;
      }
    }
  }

  &__icon {
    @apply text-lg;
  }

  &__text {
    @apply ml-2;
    @apply text-sm;
    @apply break-all;
  }
}

.skill-pill {
  @apply rounded-full;
  @apply py-1.5;
  @apply px-3;
  @apply bg-white;
  @apply text-calypso;
  @apply inline-block;
  @apply text-sm;
  @apply font-semibold;
  @apply mr-2;
  @apply mb-2;

  &:last-child {
    @apply mr-0;
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
  @apply p-4;
}

.main-page__right__box {
  @apply w-full;
  @apply mr-0;
  @apply p-4;
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
}

@screen md {
  section {
    @apply my-3;
  }

  .main-page {
    @apply flex-row;

    &__left {
      @apply w-2/5;
      @apply min-h-screen;
    }

    &__right {
      @apply w-3/5;
      @apply min-h-screen;
    }
  }

  .main-page__left__box {
    @apply ml-auto;
    @apply p-4;
  }

  .main-page__right__box {
    @apply mr-auto;
    @apply p-4;
  }

  .contacts {
    @apply flex-col;
    @apply flex-nowrap;

    &__item {
      @apply w-full;
    }

    &__icon {
      @apply text-2xl;
    }

    &__text {
      @apply ml-3;
      @apply text-base;
    }
  }
}

@screen lg {
  .main-page__left__box,
  .main-page__right__box {
    @apply w-3/4;
  }
}
</style>
