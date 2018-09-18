<template>
    <div class="col-sm-4" @click="switchCharacter">
        <div class="character-card">
            <div class="card-block">
                <img class="card-img" :src="character.image" :alt="character.name"/>
                <h4 class="card-title">{{character.name}}</h4>
                <p class="card-text">Status: {{character.status}}</p>
                <p class="card-text">Species: {{character.species}}</p>
                <p class="card-text">Gender: {{character.gender}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['id'],

        data() {
            return {
                character: {}
            }
        },

        methods: {
            fetchCharacter(id) {
                fetch(`https://rickandmortyapi.com/api/character/${id}`, {
                    method: 'GET'
                }).then(response => response.json()).then(json => this.character = json);
            },

            switchCharacter() {
                let randomId = Math.floor(Math.random() * 83) + 1;
                this.fetchCharacter(randomId);
            }
        },

        created() {
            this.fetchCharacter(this.id);
        }
    }
</script>