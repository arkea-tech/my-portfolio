<template>
  <div
    class="py-4 p-st"
    :class="{
      'bg-light': !nightMode,
      'bg-dark2': nightMode,
      'text-light': nightMode,
    }"
  >
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >{{ $t('sections.about.title') }}</span
        >
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />
      <div class="row">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <Timeline :data="education" :nightMode="nightMode" />
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <Timeline :data="experience" :nightMode="nightMode" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from "./helpers/Timeline";
import info from "../../info";

export default {
  name: "About",
  components: {
    Timeline,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  computed: {
    education() {
      return {
        title: this.$t('sections.about.education.title'),
        data: [
          {
            name: "Epitech",
            place: "Paris, France",
            date: this.$t('sections.about.education.university.date'),
            degree: this.$t('sections.about.education.university.degree'),
            gpa: "2.9/4.0",
            description: this.$t('sections.about.education.university.description'),
            skills: [
              this.$t('sections.about.education.university.skills.algorithms'),
              this.$t('sections.about.education.university.skills.web_mobile_development'),
            ]
          }
        ],
      }
    },
    experience() {
      return {
        title: "experiences",
        data: [
          {
            name: "Well'up",
            place: "Paris, France",
            date: this.$t('sections.about.experiences.wellup.date'),
            position: this.$t('sections.about.experiences.wellup.position'),
            description: this.$t('sections.about.experiences.wellup.description'),
            skills: ["Wordpress", "PHP", "FileZilla", "Elementor"]
          },
          {
            name: "CNRS",
            place: "Nancy, France",
            date: this.$t('sections.about.experiences.cnrs.date'),
            position: this.$t('sections.about.experiences.cnrs.position'),
            description: this.$t('sections.about.experiences.cnrs.description'),
            skills: ["Vue.js", "Typescript", "Node.js", "Express.js", "PostgreSQL", "Sequelize", "amCharts", "Quasar", "Vite", "Axios"]
          },
          {
            name: "Capgemini Technology Services - France",
            place: "Issy-les-Moulineaux, France",
            date: this.$t('sections.about.experiences.capgemini.date'),
            position: this.$t('sections.about.experiences.capgemini.position'),
            description: this.$t('sections.about.experiences.capgemini.description'),
            skills: ["React.js", "Typescript", "Redux", "Material UI", "Java",
                     "Spring Boot", "GraphQL", "DQL", "Ratel",
                     "OpenSearch", "Git", "Gitlab", "Gitlab CI/CD", "Docker", "Kubernetes", "AWS"]
          },
          {
            name: "AFD Tech",
            place: "Paris, France",
            date: this.$t('sections.about.experiences.afd_tech.date'),
            position: this.$t('sections.about.experiences.afd_tech.position'),
            description: this.$t('sections.about.experiences.afd_tech.description'),
            skills: ["React Native", "Node.js", "Express.js", "PostgreSQL", "Sequelize", "Visual Studio Code", "Github", "Git"]
          },
          {
            name: "BECONBE",
            place: this.$t('sections.about.experiences.beconbe.place'),
            date: this.$t('sections.about.experiences.beconbe.date'),
            position: this.$t('sections.about.experiences.beconbe.position'),
            description: this.$t('sections.about.experiences.beconbe.description'),
            skills: ["Wordpress", "Webdesign", "User Interface Design", "User Experience Design", "Testing", this.$t('sections.about.experiences.beconbe.deployment')]
          },
          {
            name: "Radisson Blu",
            place: "Marne-la-Vallée, Île-de-France, France",
            date: this.$t('sections.about.experiences.radisson_blu.date'),
            position: this.$t('sections.about.experiences.radisson_blu.position'),
            description: this.$t('sections.about.experiences.radisson_blu.description'),
            skills: ["Active Directory", "TCP/FTP/IPV4 & IPV6", "GPO", "Windows Server", "IT Support"]
          }
        ]
      }
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}
</style>
