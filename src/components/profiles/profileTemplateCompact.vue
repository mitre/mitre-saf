<template>
  <v-row justify="center">
    <v-col
      v-for="cat in categoryOrder"
      :key="cat"
      outlined
      class="ma-0 pa-1 d-flex"
      :style="{'max-width': `${maxWidth}rem`, 'flex-basis': 'auto'}"
    >
      <v-card
        class="ma-0 pa-1"
        outlined
        :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-3'"
        style="flex-grow: 1"
      >
        <h2
          class="font-weight-bold justify-center text-center google-font ma-1"
        >
          {{ cat }}
        </h2>

        <v-card
          v-for="(entry, i) in getByCategory(profiles, cat)"
          :key="entry.category + entry.longName + i"
          :href="entry.link"
          target="_blank"
          class="google-font break-word ma-1"
          :class="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
          label
          outlined
        >
          <v-list class="pa-0">
            <v-list-item class="ma-0 pa-0">
              <v-tooltip top>
                <template v-slot:activator="{on}">
                  <v-list-item-avatar
                    style="min-width: 28px; width: 28px"
                    class="mr-0 ml-2"
                    v-on="on"
                  >
                    <v-img
                      id="platform"
                      :src="require('@/assets/img/svg/' + entry.platform_img)"
                      style="max-width: 28px; max-height: 28px"
                    />
                  </v-list-item-avatar>
                </template>
                <span>{{ entry.platform_name }}</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{on}">
                  <a :href="entry.sponsor_link" target="_blank"
                    ><v-list-item-avatar
                      style="min-width: 28px; width: 28px"
                      class="ml-2 mr-0"
                      v-if="entry.sponsor_img"
                      v-on="on"
                    >
                      <v-img
                        id="sponsor"
                        :src="
                          require('@/assets/img/partners/' + entry.sponsor_img)
                        "
                        style="max-width: 28px; max-height: 28px"
                      /> </v-list-item-avatar></a></template
                ><span>{{ entry.sponsor_name }}</span></v-tooltip
              >
              <v-list-item-content>
                <v-list-item-title
                  class="pr-4 ml-2"
                  style="font-size: 0.9rem"
                  >{{ entry.shortName }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    props: {
      profiles: Array,
      categoryOrder: Array,
      maxWidth: Number,
    },
    methods: {
      getByCategory(profiles, category) {
        const filteredProfiles = profiles.filter((profile) =>
          profile.category.some((pCategory) => pCategory === category)
        );

        return filteredProfiles.sort((a, b) => {
          if (a["shortName"] > b["shortName"]) {
            return 1;
          } else if (a["shortName"] < b["shortName"]) {
            return -1;
          }
          return 0;
        });
      },
    },
  };
</script>

<style scoped></style>
