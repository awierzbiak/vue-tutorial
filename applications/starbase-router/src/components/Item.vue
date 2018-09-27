<template>
    <div class="col-md-4" @click="switchItem">
        <div class="item-card">
            <div class="card-block">
                <h4 class="card-title">{{item.name}}</h4>
                <div v-for="(value, key, index) in item" v-if="index < 4">
                    <div>
                        <strong>{{key}}</strong>: {{value}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['passedItem', 'type'],
        data() {
            return {
                item: {

                }
            }
        },
        methods: {
            switchItem() {
                let randomId = Math.floor(Math.random() * 60) + 1;

                fetch(`https://rickandmortyapi.com/api/${this.type}/${randomId}`, {
                    method: 'GET'
                })
                    .then(response => response.json())
                    .then(json => this.item = json);


            }
        },
        created() {
            this.item = this.passedItem;
        }
    }
</script>