<template>
    <div>
        <div class="accordion-item" v-for="(item, index) in options" :key="index">
            <div class="accordion-item-top">
                <div class="accordion-item-icon" :style="{backgroundColor: item.icon}"></div>
                <div class="accordion-item-header">
                    {{item.name}}
                </div>
                <div class="accordion-item-chevron" @click="item.toggle()">
                    <span class="chevron bottom"></span>
                </div>
            </div>

            <div class="accordion-item-content" v-html="item.content" v-if="item.isOpen">
                
            </div>

        </div>

        <button class="accordion-item-add" @click="addNewAccordion">
            Добавить еще одну плашку
        </button>

        <form action="" v-for="(item, index) in formOptions" :key="`B-${index}`">
            <input type="text" placeholder="Цвет плашки" v-model="item.icon">
            <input type="text" placeholder="Заголовок плашки" v-model="item.name">
            <textarea cols="30" rows="10" placeholder="Текст плашки" resize="none" v-model="item.content"></textarea>
            <button type="button" class="accordion-item-add" @click="options.push(item)">Добавить</button>
        </form>
    </div>
</template>

<script>

import {Accordion} from '../controllers/accordion/AccordionItem.ts';
// import {AddAccordion} from '../controllers/accordion/AddAccordion.ts';

const itemsOptions = [
    {
        icon: 'red',
        name: 'Первая плашка',
        content: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo veritatis laborum cum inventore consequatur facilis velit molestiae quia minima, obcaecati quae nobis. Eligendi quia distinctio obcaecati maxime, facilis excepturi harum itaque corrupti suscipit sint libero! Tenetur, eius. Culpa, dolorem!</p>'
    },
    {
        icon: 'green',
        name: 'Вторая плашка',
        content: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo veritatis laborum cum inventore consequatur facilis velit molestiae quia minima, obcaecati quae nobis. Eligendi quia distinctio obcaecati maxime, facilis excepturi harum itaque corrupti suscipit sint libero! Tenetur, eius. Culpa, dolorem!</p>'
    },
    {
        icon: 'yellow',
        name: 'Третья плашка',
        content: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo veritatis laborum cum inventore consequatur facilis velit molestiae quia minima, obcaecati quae nobis. Eligendi quia distinctio obcaecati maxime, facilis excepturi harum itaque corrupti suscipit sint libero! Tenetur, eius. Culpa, dolorem!</p>'
    }

];

export default {
    name: 'AccordionItem',
    data() {
        return {
            options: [],
            formOptions: [],
            formHide: true
        }
    },
    methods: {
        addNewAccordion() {
            this.formOptions.push(new Accordion({
                icon: '',
                name: '',
                content: ''
            }));
        }
    },
    mounted() {
        itemsOptions.forEach((item) => {
            this.options.push(new Accordion(item));
        });
    }
}
</script>

<style lang="scss">
input {
    display: block;
    margin-bottom: 20px;
    padding: 10px 15px;
    color: #000;
    border: 1px solid gray;
}
.chevron::before {
	border-style: solid;
	border-width: 0.15em 0.15em 0 0;
	content: '';
	display: inline-block;
	height: 0.45em;
	left: 0.15em;
	position: relative;
	top: 0.15em;
	transform: rotate(-45deg);
	vertical-align: top;
	width: 0.45em;
}

.chevron.bottom:before {
	top: 0;
	transform: rotate(135deg);
}


.accordion-item {
    width: 300px;
    margin-bottom: 30px;

    &-add {
        margin-bottom: 20px;
        background-color: yellow;
        padding: 10px;
        font-weight: bold;
        color: #000;
        border: 0;
        display: block;
    }

    &-top {
    display: flex;
    }

    &-content {
        background-color: rgb(211, 194, 194);
        padding: 15px 10px;

        p {
            margin: 0;
        }
    }
    

    &-header {
        padding: 10px 15px;
        color: #333;
        flex-grow: 1;
    }

    &-chevron {
        width: 20px;
        display: flex;
        padding: 0 10px;
        align-items: center;
        justify-content: center;
    }

    &-header, &-chevron {
        background-color: rgb(175, 161, 161);
    }

    &-icon {
        width: 30px;
        background-color: rgb(25, 25, 177);
    }
}

</style>

