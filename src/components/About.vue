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
          >about me.</span
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
            name: "Cyberinfrastructure for Network Science Center",
            place: "Bloomington, Indiana",
            date: "Jun, 2020 - Present",
            position: "Research Assistant; Full Stack Developer",
            description:
        "Worked as a Software Developer for the Human BioMolecular Atlas Program (funded by the NIH), building innovative visualization tools to envision large biomedical datasets.",
            skills: ["Angular", "Node.js", "Vega", "Shell", "Typescript"]
          },
          {
            name: "Skylark Drones",
            place: "Bangalore, India",
            date: "Jan, 2019 - Jun, 2021",
            position: "Full Stack Web Developer",
            description:
        "Worked as a full stack web developer, implementing various features and fixing bugs for Skylark Drones’ central management system called Operations Portal and Data Mining Server.",
            skills: ["MongoDB", "Flask", "VueJS", "NGINX"]
          },
          {
            name: "Hridayam Soft Solutions",
            place: "Mumbai, India",
            date: "May, 2018 - Jun, 2018",
            position: "Computer Vision Engineer",
            description:
        "Scripted an algorithm for extracting information (such as date, invoice number etc.) from scanned images of invoices, built a web interface for using the former mentioned machine.",
            skills: ["Python", "OpenCV", "PyTesseract", "AngularJS", "NodeJS"]
          },
          {
            name: "Elementail Labs",
            place: "Mumbai, India",
            date: "May, 2017 - July, 2017",
            position: "Full Stack Web Developer",
            description:
        "Implemented various contracts and deployed them on the upcoming blockchain technology - Ethereum, while also working as a MEAN stack web developer for Elemential Labs’ website.",
            skills: ["MongoDB", "AngularJS", "NodeJS", "ExpressJS"]
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
