<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs6>
        <v-card>
          <h1>{{ title }} (from global state)</h1>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card>
          <v-data-table :headers="headers" :items="links" class="elevation-1">
            <template slot="items" slot-scope="props">
              <td>{{ props.item.title }}</td>
              <td>{{ props.item.url }}</td>
              <td>
                <v-btn color="primary" dark @click="visit(props.item.url)">Visit</v-btn>
              </td>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import Vuetify from 'vuetify';

Vue.use(Vuetify, {
    customProperties: true,
    iconfont: 'md',
});

@Component({
    computed: mapState(['title', 'links']),
})
export default class HelloWorld extends Vue {
    public headers = [
        {
            text: 'Site',
            align: 'left',
            value: 'title',
        },
        { text: 'Url', value: 'url' },
        {},
    ];
    public constructor() {
        super();
        // setInterval(() => (this.$store.replaceState({ title: new Date().toLocaleTimeString() })), 1000);
    }

    public visit(url: string) {
        window.open(url);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
