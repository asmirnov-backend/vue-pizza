<template>
  <div class="ingredients__filling">
    <p>Начинка:</p>

    <ul class="ingredients__list">
      <li
        v-for="ingredient in ingredients"
        :key="ingredient.id"
        class="ingredients__item"
      >
        <span class="filling" :class="`filling--${ingredient.enName}`">{{
          ingredient.name
        }}</span>

        <div class="counter counter--orange ingredients__counter">
          <button
            type="button"
            class="counter__button counter__button--minus"
            :disabled="modelValue[ingredient.enName] < 1"
            @click="decrement(ingredient.enName)"
          >
            <span class="visually-hidden">Меньше</span>
          </button>
          <input
            type="text"
            name="counter"
            class="counter__input"
            :value="modelValue[ingredient.enName]"
            @input="set($event, ingredient.enName)"
          />
          <button
            type="button"
            class="counter__button counter__button--plus"
            @click="increment(ingredient.enName)"
          >
            <span class="visually-hidden">Больше</span>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import ingredients from "../../mocks/ingredients.json";
import { Ingredients } from "./Ingredients";

const props = defineProps({
  modelValue: {
    type: Ingredients,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const set = (event: any, ingredientName: string) => {
  const newValue = new Ingredients({
    ...props.modelValue,
    [ingredientName]: Number(event.target.value) || 0,
  });
  emit("update:modelValue", newValue);
};

const increment = (ingredientName: string) => {
  const newValue = new Ingredients({
    ...props.modelValue,
    [ingredientName]: (props.modelValue[ingredientName] || 0) + 1,
  });
  emit("update:modelValue", newValue);
};

const decrement = (ingredientName: string) => {
  const newValue = new Ingredients({
    ...props.modelValue,
    [ingredientName]: (props.modelValue[ingredientName] || 0) - 1,
  });
  emit("update:modelValue", newValue);
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

// ingredients
.ingredients__input {
  margin-right: 24px;
  margin-bottom: 10px;
}

.ingredients__filling {
  width: 100%;

  p {
    @include r-s16-h19;

    margin-top: 0;
    margin-bottom: 16px;
  }
}

.ingredients__list {
  @include clear-list;

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}

.ingredients__item {
  width: 100px;
  min-height: 40px;
  margin-right: 17px;
  margin-bottom: 35px;
}

.ingredients__counter {
  width: 54px;
  margin-top: 10px;
  margin-left: 36px;
}

// filling
.filling {
  @include r-s14-h16;

  position: relative;

  display: block;

  padding-left: 36px;

  &::before {
    @include p_center-v;

    display: block;

    width: 32px;
    height: 32px;

    content: "";

    border-radius: 50%;
    background-color: $white;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80% 80%;
  }

  &--tomatoes::before {
    background-image: url("@/assets/img/filling/tomatoes.svg");
  }

  &--ananas::before {
    background-image: url("@/assets/img/filling/ananas.svg");
  }

  &--bacon::before {
    background-image: url("@/assets/img/filling/bacon.svg");
  }

  &--blue_cheese::before {
    background-image: url("@/assets/img/filling/blue_cheese.svg");
  }

  &--cheddar::before {
    background-image: url("@/assets/img/filling/cheddar.svg");
  }

  &--chile::before {
    background-image: url("@/assets/img/filling/chile.svg");
  }

  &--ham::before {
    background-image: url("@/assets/img/filling/ham.svg");
  }

  &--jalapeno::before {
    background-image: url("@/assets/img/filling/jalapeno.svg");
  }

  &--mozzarella::before {
    background-image: url("@/assets/img/filling/mozzarella.svg");
  }

  &--mushrooms::before {
    background-image: url("@/assets/img/filling/mushrooms.svg");
  }

  &--olives::before {
    background-image: url("@/assets/img/filling/olives.svg");
  }

  &--onion::before {
    background-image: url("@/assets/img/filling/onion.svg");
  }

  &--parmesan::before {
    background-image: url("@/assets/img/filling/parmesan.svg");
  }

  &--salami::before {
    background-image: url("@/assets/img/filling/salami.svg");
  }

  &--salmon::before {
    background-image: url("@/assets/img/filling/salmon.svg");
  }
}
</style>
