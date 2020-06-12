/*
  phase 0 mvp:
  vuex - dynamic data, totals underneath column, columns
  click on header - as part of filter for true/false
  filters - control names, header names
  default filters
  styling
  */

/*
  ~~text search on first column
  ~~columns = select
  ~~click column = on/off/all
  cosmetics:
    zebra stripe for shading for columns
    wrapping for column headers (no ...s)
    pinstriping/borders on all cells
    swap out the true for inspec/list of 3 things
    ~~checkbox and blank for all
    light + dark mode
*/
<template>
  <div class="wrapper">
    <v-container>
      <v-row>
        <v-col>
          <v-combobox
            v-model="controlFilters"
            clearable
            deletable-chips
            dense
            :filter="caselessFilter"
            hide-selected
            :hint="'If you can see this hint, it probably means you\'re typing a filter that won\'t work'"
            :items="[{ header: 'Select an option or type one and hit enter' }].concat(controls)"
            :label="'Control Row Filter'"
            eager
            :menu-props="'auto'"
            multiple
            small-chips
          />
        </v-col>
        <v-spacer />
        <v-col>
          <v-combobox
            v-model="profileFilters"
            clearable
            deletable-chips
            dense
            :filter="caselessFilter"
            hide-selected
            :hint="'If you can see this hint, it probably means you\'re typing a filter that won\'t work'"
            :items="[{ header: 'Select an option or type one and hit enter' }].concat(profiles)"
            :label="'Assessment Column Filter'"
            eager
            :menu-props="'auto'"
            multiple
            small-chips
          />
        </v-col>
      </v-row>
    </v-container>
    <c-grid
      class="table ma-0"
      :data="data"
      :frozen-col-count="2"
      :theme="this.$vuetify.theme.dark ? darkTheme : lightTheme"
      :underlay-background-color="this.$vuetify.theme.dark ? 'black' : 'white'"
      :headerRowHeight="[70,15,20]"
      :defaultRowHeight="20"
      :defaultColWidth="130"
    >
      <template slot="layout-header">
        <c-grid-layout-row>
          <c-grid-header
            v-for="col of columns"
            :key="col.value"
            :width="col.width ? col.width : undefined"
            :header-field="col.value"
            :header-type="'multilinetext'"
            :header-style="{ autoWrapText: true, textAlign: 'center' }"
            :header-action="'check'"
            @changed-header-value="onChangeHeaderValue"
          >
            {{col.text}}
          </c-grid-header>
        </c-grid-layout-row>
        <c-grid-layout-row>
          <c-grid-header
            v-for="col of columns"
            :key="col.value"
            :width="col.width ? col.width : undefined"
            :header-field="col.value"
            :header-style="{ textAlign: 'center' }"
            :header-action="'check'"
            @changed-header-value="onChangeHeaderValue"
          >
            {{col.checkmark}}
          </c-grid-header>
        </c-grid-layout-row>
        <c-grid-layout-row>
          <c-grid-header
            v-for="col of columns"
            :key="col.value"
            :width="col.width ? col.width : undefined"
            :header-field="col.value"
            :header-style="{ textAlign: 'center' }"
            :header-action="'check'"
            @changed-header-value="onChangeHeaderValue"
          >
            {{data.filter(control => control[col.value]).length.toString()}}
          </c-grid-header>
        </c-grid-layout-row>
      </template>
      <template slot="layout-body">
        <c-grid-layout-row>
          <c-grid-column
            v-for="col of columns"
            :key="col.value"
            :field="col.field"
            :column-type="col.type"
            :column-style="{ textAlign: col.align }"
          />
        </c-grid-layout-row>
      </template>
    </c-grid>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import * as cGridAll from "vue-cheetah-grid";

const { mapGetters, mapMutations } = createNamespacedHelpers("controlTable");

const materialDesignTheme = cGridAll.cheetahGrid.themes.MATERIAL_DESIGN;

export default {
  components: {
    ...cGridAll,
  },
  data() {
    return {
      lightTheme: materialDesignTheme.extends({
        color: "black",
        defaultBgColor({ row }) {
          // change the color of the checked row.
          if ((row + 1) % 2) {
            return "white";
          } else {
            return "#BDBDBD";
          }
        },
        borderColor: "#35495e",
        frozenRowsColor: "black",
        frozenRowsBgColor: "#BDBDBD",
        frozenRowsBorderColor: "#35495e"
      }),
      darkTheme: {
        color: "white",
        defaultBgColor({ row }) {
          // change the color of the checked row.
          if ((row + 1) % 2) {
            return "#424242";
          } else {
            return "#212121";
          }
        },
        frozenRowsColor: "white",
        frozenRowsBgColor: "#212121",
        borderColor: "#35495e",
        frozenRowsBorderColor: "#35495e",
        checkbox: {
          checkBgColor: "#35495e",
          borderColor: "#35495e"
        },
        button: {
          color: "#FFF",
          bgColor: "#2c3e50"
        }
      }
    };
  },
  computed: {
    ...mapGetters({
      data: "getData",
      columns: "getColumns",
      controls: "getControls",
      profiles: "getProfiles",
      getControlFilters: "getControlFilters",
      getProfileFilters: "getProfileFilters"
    }),
    controlFilters: {
      get() {
        return this.getControlFilters;
      },
      set(val) {
        this.setControlFilters(val);
      }
    },
    profileFilters: {
      get() {
        return this.getProfileFilters;
      },
      set(val) {
        this.setProfileFilters(val);
      }
    }
  },
  watch: {},
  methods: {
    ...mapMutations({
      setControlFilters: "setControlFilters",
      setProfileFilters: "setProfileFilters",
      updateColumnFilters: "updateColumnFilters"
    }),
    caselessFilter(item, queryText, itemText) {
      if (item.header) {
        return false;
      }
      return itemText.toLowerCase().includes(queryText.toLowerCase());
    },
    onChangeHeaderValue({ field }) {
      this.updateColumnFilters(field);
    }
  }
};
</script>

<style lang='scss'>
body {
  background: white;
  height: 100%;
  width: 100%;
  margin: 0;

  .wrapper {
    width: 100%;
    height: 98vh;

    .table {
      height: 90%;
      color: white;
    }
  }
}
</style>