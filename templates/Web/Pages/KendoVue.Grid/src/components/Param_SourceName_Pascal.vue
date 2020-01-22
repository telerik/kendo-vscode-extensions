<template>
        <div class="container-fluid">
            <div class='row my-4'>
                <div class='col-12 col-lg-9 border-right'>
                     <Grid ref="grid"
                        :style="{height: '770px'}"
                        :data-items="gridData"
                        :edit-field="'inEdit'"
                        :take="take"
                        :skip="skip"
                        :total="total"
                        @edit="edit"
                        @remove="remove"
                        @save="save"
                        @cancel="cancel"
                        @itemchange="itemChange"
                        @dataStateChange="dataStateChange"
                        :columns="columns">
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
                    <h3>KendoVue Grid</h3>
                    <p>The KendoVue Data Grid (Table) provides 100+ ready-to-use features covering everything from paging, sorting, filtering, editing, and grouping to row and column virtualization, export to PDF and Excel and accessibility.</p>
                    <p>For documentation and demos of all available Grid features (filtering, sorting, paging, editing etc), please visit the <a href="https://www.telerik.com/kendo-vue-ui/components/grid/?utm_medium=cpm&utm_source=vscode-app&utm_campaign=kendo-ui-Vue-trial-grid">KendoVue Grid documentation page.</a> </p>
                </div>
            </div>
        </div>
</template>
<script>
import Vue from 'vue';
import { Grid, GridToolbar, GridNoRecords } from '@progress/kendo-vue-grid';
import { process } from '@progress/kendo-data-query';
import myCommandCell from './myCommandCell';
import { sampleProducts } from '../common/sample-products';


Vue.component('Grid', Grid);
Vue.component('grid-toolbar', GridToolbar);
Vue.component('grid-norecords', GridNoRecords);

export default {
     data: function () {
        return {
            gridData: [],
            skip: 0,
            take: 10,
            total: 4,
            updatedData: [],
            editID: null,
            columns: [
                { field: 'ProductID', editable: false, title: 'ID', width: '50px' },
                { field: 'ProductName', title: 'Name' },
                { field: 'FirstOrderedOn', editor: 'date', title: 'First Ordered', format: '{0:d}' },
                { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
                { field: 'UnitsInStock', title: 'Units', filter: 'numeric', width: '150px', editor: 'numeric' },
                { cell: myCommandCell, width: '180px' }
            ]
        };
    },
    computed: {
        hasItemsInEdit() {
            return this.gridData.filter(p => p.inEdit).length > 0;
        }
    },
    created: function() {
        this.updatedData = sampleProducts;
        this.getData();
    },
    methods: {
        itemChange: function (e) {
            if (e.dataItem.ProductID) {
              let index = this.gridData.findIndex(p => p.ProductID === e.dataItem.ProductID);
              let updated = Object.assign({},this.gridData[index], {[e.field]:e.value});
              this.gridData.splice(index, 1, updated);
            } else {
              Vue.set(e.dataItem, e.field, e.value);
            }
        },
        insert() {
            const dataItem = { inEdit: true };
            this.gridData.splice(0, 0, dataItem)
        },
        edit: function (e) {
            let index = this.gridData.findIndex(p => p.ProductID === e.dataItem.ProductID);
            let updated = Object.assign({},this.gridData[index], {inEdit:true});
            this.gridData.splice(index, 1, updated);
        },
        save: function(e) {
            let index = this.gridData.findIndex(p => p.ProductID === e.dataItem.ProductID);
            let item = this.gridData[index];
            let updated = Object.assign(this.update(this.gridData.slice(), item), {inEdit:undefined});
            this.gridData.splice(index, 1, updated);
            let updateDataIndex = this.updatedData.findIndex(p => p.ProductID === e.dataItem.ProductID);
            this.updatedData.splice(updateDataIndex, 1, updated);
        },
        update(data, item, remove) {
            let updated;
            let index = data.findIndex(p => item.ProductID && p.ProductID === item.ProductID);
            if (index >= 0) {
                updated = Object.assign({}, item);
                data[index] = updated;
            } else {
                let id = 1;
                this.updatedData.forEach(p => { if (p.ProductID) { id = Math.max(p.ProductID + 1, id); } });
                updated = Object.assign({}, item, { ProductID: id });
                data.unshift(updated);
                index = 0;
            }

            if (remove) {
                data = data.splice(index, 1);
            }
            return data[index];
        },
        cancel(e) {
            if (e.dataItem.ProductID) {
                let index = this.gridData.findIndex(p => p.ProductID === e.dataItem.ProductID);
                let updateDataIndex = this.updatedData.findIndex(p => p.ProductID === e.dataItem.ProductID);
                let updated = Object.assign(this.updatedData[updateDataIndex], {'inEdit': undefined});
                this.gridData.splice(index, 1, updated);
            } else {
              let index = this.gridData.findIndex(p => JSON.stringify(e.dataItem) === JSON.stringify(p));
               
              this.gridData.splice(index, 1);
            }
        },
        remove(e) {
            e.dataItem.inEdit = undefined;
            this.update(this.gridData, e.dataItem, true);
            this.update(this.updatedData, e.dataItem, true);
            this.gridData = this.gridData.slice();
        },
        cancelChanges () {
             let editedItems = this.updatedData.filter(p => p.inEdit === true);
             if(editedItems.length){
                editedItems.forEach(
                    item => {
                       Vue.set(item, 'inEdit', undefined);
                     });
             }
            this.getData();
        },
         getData: function () {
            this.gridData = process( 
              this.updatedData,
             {
               take: this.take,
               skip: this.skip, 
               sort: this.sort, 
               filter: this.filter
            }).data;
        },
        createAppState: function(dataState) {
            this.take = dataState.take;
            this.skip = dataState.skip;
            this.filter = dataState.filter;
            this.sort = dataState.sort;
            this.getData();
        },
        dataStateChange: function (event) {
            this.createAppState(event.data);
        }
    }
}
</script>
