<template>
        <div class="container-fluid">
            <div class='row my-4'>
                <div class='col-12 col-lg-9 border-right'>
                     <Grid ref="grid"
                        :style="{height: '770px'}"
                        :data-items="initData.gridData"
                        :edit-field="'inEdit'"
                        :take="initData.take"
                        :skip="initData.skip"
                        :total="initData.total"
                        @itemchange="itemChange"
                        @dataStateChange="dataStateChange"
                        :columns="initData.columns">
                          <template v-slot:myTemplate="{props}">
                            <custom :data-item="props.dataItem" 
                                    @edit="edit"
                                    @save="save" 
                                    @remove="remove"
                                    @cancel="cancel"/>
                        </template>
                        <grid-toolbar>
                            <button title="Add new"
                                    class="k-button k-primary"
                                    @click='insert' >
                                Add new
                            </button>
                            <button v-if="hasItemsInEdit"
                                    title="Cancel current changes"
                                    class="k-button"
                                    @click="cancelChanges">
                                    Cancel current changes
                            </button>
                        </grid-toolbar>
                        <grid-norecords>
                            There is no data available custom
                        </grid-norecords>
                    </Grid>
                </div>
                <div class='col-12 col-lg-3 mt-3 mt-lg-0'>
                    <h3>Kendo UI for Vue Grid</h3>
                    <p>The Kendo UI for Vue Data Grid (Table) provides 100+ ready-to-use features covering everything from paging, sorting, filtering, editing, and grouping to row and column virtualization, export to PDF and Excel and accessibility.</p>
                    <p>For documentation and demos of all available Grid features (filtering, sorting, paging, editing etc), please visit the <a href="https://www.telerik.com/kendo-vue-ui/components/grid/?utm_medium=cpm&utm_source=vscode-app&utm_campaign=kendo-ui-Vue-trial-grid">Kendo UI for Vue Grid documentation page.</a> </p>
                </div>
            </div>
        </div>
</template>
<script>
import { Grid, GridToolbar, GridNoRecords } from '@progress/kendo-vue-grid';
import { useInlineEditGrid } from '../functions/useEditGrid';
import { sampleProducts } from '../common/sample-products';
import myCommandCell from '../components/myCommandCell';

export default {
    components: {
        'Grid': Grid,
        'grid-toolbar': GridToolbar,
        'grid-norecords': GridNoRecords,
        custom: myCommandCell
    },
    setup () {

        return {
           ...useInlineEditGrid(sampleProducts)
        };
    }
}
</script>
