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
          >portfolio.</span
        >
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />

      <div>
        <br />
        <div class="row">
          <div
            class="col-xl-4 col-bg-4 col-md-6 col-sm-12"
            v-for="(portfolio, idx) in portfolio_info"
            :key="portfolio.name"
          >
            <Card
              :style="{ 'transition-delay': (idx % 3) / 4.2 + 's' }"
              :portfolio="portfolio"
              @show="showModalFn"
              data-aos="fade-up"
              :nightMode="nightMode"
              data-aos-offset="100"
              data-aos-delay="10"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            />
          </div>
        </div>
        <div class="text-center py-3" v-if="showBtn !== 'show less'">
          <button class="btn" @click.prevent="showMore">{{ $t('sections.portfolio.button_show_more') }}</button>
        </div>
      </div>

    </div>
    <transition name="modal">
      <Modal
        :showModal="showModal"
        @close="closeModal"
        v-if="showModal"
        :portfolio="modal_info"
        :nightMode="nightMode"
      />
    </transition>
  </div>
</template>

<script>
import Card from "./helpers/Card";
import Modal from "./helpers/Modal";
import Carousel from "./helpers/Carousel";
import info from "../../info";

import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";

import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "Portfolio",
  components: {
    Card,
    Modal,
    VueTabs,
    VTab,
    VueperSlides,
    VueperSlide
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  computed: {
    all_info() {
      return  [
        {
          name: "Smart Meter",
          videoID: '818427347',
          pictures: [
            {
              img: require("../assets/portfolio/smi.png")
            }
          ],
          technologies: ["Vue.js", "Typescript", "Node.js", "Express.js", "PostgreSQL", "Sequelize", "amCharts", "Quasar", "Vite", "Axios", "HTML/CSS"],
          category: this.$t('sections.portfolio.smart_meter.category'),
          date: this.$t('sections.portfolio.smart_meter.date'),
          description: this.$t('sections.portfolio.smart_meter.description'),
          gitlab: "https://gitlab.com/cnrs-smi/front/-/tree/develop?ref_type=heads"
        },
        {
          name: "Personal Dashboard",
          videoID: '773098729',
          pictures: [
            {
              img: require("../assets/portfolio/personal_dashboard.png")
            }
          ],
          technologies: ["MongoDB", "Express", "Angular", "Node", "OAuth2", "REST API"],
          category: this.$t('sections.portfolio.personal_dashboard.category'),
          date: this.$t('sections.portfolio.personal_dashboard.date'),
          github: "https://github.com/gabriel-pironneau/Personal_Dashboard",
          description: this.$t('sections.portfolio.personal_dashboard.description')
        },
        {
          name: "BECONBE",
          videoID: '823293979',
          pictures: [
            {
              img: require("../assets/portfolio/beconbe.png")
            }
          ],
          technologies: ["Wordpress", "Webdesign", "UI", "UX", "Testing", this.$t('sections.about.experiences.beconbe.deployment')],
          category: this.$t('sections.portfolio.beconbe.category'),
          date: this.$t('sections.portfolio.beconbe.date'),
          visit: "https://beconbe.wordpress.com",
          description: this.$t('sections.portfolio.beconbe.description')
        },
        {
          name: "Well'up",
          videoID: '821603674',
          pictures: [
            {
              img: require("../assets/portfolio/wellup.png")
            }
          ],
          technologies: ["Wordpress", "PHP", "FileZilla", "Elementor"],
          category: this.$t('sections.portfolio.wellup.category'),
          date: this.$t('sections.portfolio.wellup.date'),
          visit: "https://www.wellup.fr",
          description: this.$t('sections.portfolio.wellup.description')
        },
      ]
    }
  },
  data() {
    return {
      portfolio_info: [],
      showModal: false,
      modal_info: {},
      number: 3,
      showBtn: "show more",
      shower: 0,
      data: [
        '<div class="example-slide">Slide 1</div>',
        '<div class="example-slide">Slide 2</div>',
        '<div class="example-slide">Slide 3</div>',
      ],
    };
  },
  created() {
    for (var i = 0; i < this.number; i++) {
      this.portfolio_info.push(this.all_info[i]);
    }
  },
  watch: {
    number() {
      this.portfolio_info = [];
      for (var i = 0; i < this.number; i++) {
        this.portfolio_info.push(this.all_info[i]);
      }
    },
    '$i18n.locale': function(newVal, oldVal) {
      this.portfolio_info = [];

      for (var i = 0; i < this.number; i++) {
        this.portfolio_info.push(this.all_info[i]);
      }
    }
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    },
    closeModal() {
      this.showModal = false;
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
    },
    showModalFn(portfolio) {
      this.modal_info = portfolio;
      this.showModal = true;
    },
    showMore() {
      if (this.number != this.all_info.length) {
        this.number += 3;

        window.scrollBy({
          top: document.getElementsByClassName("smcard")[0].clientHeight,
          behavior: "smooth",
        });

        if (this.number > this.all_info.length)
          this.number = this.all_info.length;
      }

      if (this.number == this.all_info.length && this.shower == 0) {
        this.shower = 1;
        this.showBtn = "show less";
      } else if (this.number == this.all_info.length && this.shower == 1) {
        var elementPosition = document.getElementById("portfolio").offsetTop;
        window.scrollTo({ top: elementPosition + 5, behavior: "smooth" });
        this.shower = 0;
        this.number = 3;
        this.showBtn = "show more";
      }
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 20px;
  font-weight: 400;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.btn {
  border-color: rgb(212, 149, 97);
  color: rgb(212, 149, 97);
}

.btn:hover {
  background-color: rgb(212, 149, 97);
  border-color: rgb(212, 149, 97);
  color: white;
}

.btn:focus {
  background-color: rgb(212, 149, 97);
  border-color: rgb(212, 149, 97);
  color: white;
}

/deep/ .vue-tabs .nav-tabs {
  border: none;
  font-size: 20px;
  font-weight: 500;
  display: flex;

  justify-content: center;
}

/deep/ .vue-tabs .tabs__link {
  color: #a0a0a0;
}

/deep/ .vue-tabs .nav-tabs > li.active > a {
  background: transparent;
  border: none;
  transition: all 0.5s;
  padding-right: 0;
  padding-left: 0;
  margin-right: 15px;
  margin-left: 15px;
}

/deep/ .vue-tabs .nav-tabs > li > a:hover {
  background: transparent;
  color: #cbcbcb;
  transition: all 0.5s;
}

/deep/ .vue-tabs .nav-tabs > li > a {
  background: transparent;
  border: none;
  transition: all 0.5s;
}

/deep/ .vue-tabs .nav-tabs > li > a:after {
  content: "";
  width: 20%;
  position: absolute;
  bottom: 3px;
  border-width: 0 0 2px;
  border-style: solid;
  transition: all 0.5s;
}

/deep/ .vue-tabs .nav-tabs > li.active > a:after {
  width: 100%;
  transition: all 0.5s;
}

.dimg {
  position: relative;
  border-radius: 15px;
}
.middle {
  transition: all 0.5s;
  opacity: 0;
  position: absolute;
  bottom: 0px;
  left: 70px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
}

.dimg:hover {
  position: relative;
  border-radius: 15px;
  opacity: 0.1;
  cursor: pointer;
}

.dimg:hover .middle {
  opacity: 1;
}

/deep/.vueperslide {
  border-radius: 10px !important;
}
/deep/.vueperslides__parallax-wrapper {
  border-radius: 10px !important;
}

.btn {
  border-color: #669db3ff;
  color: #669db3ff;
}

.btn:hover {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}

.btn:focus {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}
/deep/ .vueperslides__arrow {
  outline: none !important;
  border: none;
  color: grey;
}

.badge {
  background-color: rgb(211, 227, 233);
  transition: all 0.5s;
  font-weight: 500;
  font-size: 13px;
}

.bg-dark4 {
  background-color: #494e55 !important;
}

.date {
  font-size: 14px;
  font-weight: 400;
  opacity: 0.75
}
</style>
