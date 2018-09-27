<template>
    <div id="app">
        <h3>Starbase Router</h3>
        <h4>
            <router-link class="link" to="/data/character">Meet the Characters</router-link> |
            <router-link class="link" to="/data/location">Explore the Locations</router-link>
        </h4>
        <router-view></router-view>
    </div>
</template>