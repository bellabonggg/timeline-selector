<template>
    <div class="swiper-container">
        <p class="swiper-control">
          <button type="button" class="btn btn-default btn-sm prev-slide">Prev</button>
          <button type="button" class="btn btn-default btn-sm next-slide">Next</button>
        </p>
        <div class="swiper-wrapper timeline">
          <div class="swiper-slide" v-for="item in steps">
            <div class="timestamp">
              <span class="date">{{item.dateLabel}}<span>
            </div>
            <div class="status">
              <span>{{item.title}}</span>
            </div>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
</template>
