<template>
  <div class="chat">
    <div class="chat--title">
      Chat
    </div>
    <div class="chat--desk">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolor dolore excepturi explicabo, illum impedit iure nisi officia quos sequi. Debitis dolores ipsam molestiae obcaecati quam quis voluptas. Accusamus adipisci excepturi expedita laborum optio quibusdam, saepe? A earum ipsum quibusdam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at dolorum ipsa obcaecati quod. Amet commodi quidem quod. Ad aspernatur corporis cupiditate debitis et itaque libero magni nam perspiciatis quod reprehenderit, similique unde ut vitae voluptatum? Ad aliquid aperiam architecto commodi consectetur culpa ea error ex, illo ipsa iure libero mollitia necessitatibus nesciunt nihil omnis porro provident quaerat quidem soluta tenetur velit, vitae! Accusantium ad, alias error eveniet facere harum impedit labore magnam, nihil non provident, quaerat rerum tenetur. Animi aut enim molestiae mollitia quod ratione totam! Cum dignissimos eius eveniet, ipsam minus neque perferendis provident quam qui repudiandae. Aliquid.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deserunt dolorum hic quasi voluptates. Deserunt error hic labore necessitatibus nobis nostrum praesentium rem voluptas. Aperiam at atque commodi doloremque in minima quas quasi vero voluptas voluptatem. Officiis ratione rerum unde.
      </p>
    </div>
    <div class="chat--btn">
      <button @click="counter--">-</button>
      <span>{{ counter }}</span>
      <button @click="counter++">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarView",
  data() {
    return {
      counter: 1,
    }
  }
};
</script>

<style lang="scss" scoped>
.chat {
    max-width: 800px;
    background: #e2ffec;
    padding: 20px;
    margin: 0 auto;
    &--title {
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    &--desk {
        font-size: 14px;
    }
    &--btn {
        button {
            font-weight: bold;
            font-size: 20px;
        }
        span {
            padding: 0 10px;
            font-weight: bold;
            font-size: 18px;
        }
    }
}
</style>
