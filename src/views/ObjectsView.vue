<template>
  <div class="objects">
    <div class="objects--title">
      Objects
    </div>
    <div class="objects--desk">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad delectus dicta doloribus dolorum, ea expedita facilis, illo inventore ipsam laudantium libero nihil, nulla obcaecati officia pariatur quas ratione reiciendis sapiente sed sint ut veritatis vitae. Accusantium amet asperiores culpa debitis dolores impedit iusto, minus nam odit quo repellat repellendus, velit voluptate. Aliquam aperiam architecto hic, iste quibusdam sit tenetur. A ad at autem dolores ea eligendi facere id, in itaque iure laboriosam nam, nulla quo quod reprehenderit ullam voluptatum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis distinctio maxime veniam? Accusantium aut beatae blanditiis delectus deleniti doloribus ea eaque ex facere hic, laborum magnam molestias non officia optio placeat quae quam quia quos repellat rerum similique sint veniam veritatis vero vitae voluptatem! Assumenda cum cumque dicta dignissimos error, fuga hic maiores minima neque nihil placeat recusandae repellendus rerum sint vero vitae voluptas. Aliquid debitis eos magni modi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque placeat sed! Aperiam blanditiis culpa ducimus eligendi, est et facere, iste minima nihil non obcaecati omnis optio perspiciatis possimus quidem quisquam rem unde veniam vitae voluptatem? Accusantium assumenda deserunt dicta ducimus est ipsum iusto libero molestiae nisi odit praesentium provident quaerat repellat soluta totam, ullam velit! Aspernatur, aut consequuntur distinctio itaque qui quos reprehenderit saepe tempora? Aliquam aspernatur beatae culpa cum deserunt dolor doloremque dolores eum ex expedita, inventore ipsa libero magni nam nisi nulla numquam perferendis quaerat quod ratione saepe sed similique ut veniam voluptate? Ab ad autem consequatur cupiditate dolorem ea, eius eveniet expedita facere fugiat molestiae nostrum odio possimus praesentium ratione saepe soluta sunt temporibus vel voluptatibus.
      </p>
    </div>
    <div class="objects--btn">
      <button @click="counter--">-</button>
      <span>{{ counter }}</span>
      <button @click="counter++">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ObjectsView",
  data() {
    return {
      counter: 1,
    }
  }
};
</script>

<style lang="scss" scoped>
.objects {
    max-width: 800px;
    background: #fff6e2;
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
