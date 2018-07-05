<template>
<div class="Slider">
  <div class="swiper-container gallery-top">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in list"><img :src='item.src' /></div>
    </div>
    <!-- Add Arrows -->
  </div>
  <div class="swiper-container gallery-thumbs">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in list2"><img :src='item.src' /></div>
    </div>
  </div>
</div>
</template>

<script>
import Swiper from 'swiper';
export default {
  data() {
    return {
      imgsrc: '../../static/b1.jpg',
      list: [{
          src: '../../static/b1.jpg'
        }, {
          src: '../../static/b2.jpg'
        },
        {
          src: '../../static/b3.jpg'
        },
        {
          src: '../../static/b4.jpg'
        },
      ],
      list2: [{
          src: '../../static/b1s.png'
        },
        {
          src: '../../static/b2s.png'
        },
        {
          src: '../../static/b3s.png'
        },
        {
          src: '../../static/b4s.png'
        },
      ],
    }
  },
  computed: {

  },
  methods: {

  },
  mounted() {
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
      loop : true,
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;

  },
}
</script>

<style lang="scss" >
.swiper-container {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
}
.swiper-slide {
    background-size: cover;
    background-position: center;
}
.gallery-top {
    height: 80%;
    width: 100%;
}
.gallery-thumbs {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
}
.gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
    opacity: 1;
}
</style>
