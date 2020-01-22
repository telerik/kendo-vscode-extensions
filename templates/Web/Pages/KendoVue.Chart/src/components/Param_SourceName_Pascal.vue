<template>
<div class='container-fluid'>
           <div class='row my-4'>
                <div class='col-12 col-lg-9 border-right' >
                    <div v-if="loading" class="k-loading-mask">
                        <span class="k-loading-text">Loading</span>
                        <div class="k-loading-image"></div>
                        <div class="k-loading-color"></div>
                    </div>
                     <Chart :title-text="'Production'" 
                                :title-font="'19pt sans-serif'" 
                                :title-margin-bottom="50" 
                                :legend-position="'bottom'"
                                :series="series"
                                :theme="'sass'">
                    </Chart>
                </div>
                <div class='col-12 col-lg-3 mt-3 mt-lg-0'>
                    <h3>KendoVue Chart</h3>
                    <p>The KendoVue Charts provide high quality graphical data visualization options.</p>
                    <p>They include a variety of chart types and styles that have extensive configuration options. This flexibility allows you to quickly and easily create the exact chart you need to fit your specific requirements for functionality and appearance.</p>
                    <p>The KendoVue Chart Components are built from the ground up, specifically for Vue, so that you get high performance chart components that integrate with your Vue app and with the rest of your Vue UI components.</p>
                    <p>For documentation and demos of all available Chart types (Bar, Line, Donut, Sparkline, StockChart etc), please visit the <a href="https://www.telerik.com/kendo-vue-ui/components/charts/?utm_medium=cpm&utm_source=stackblitz-app&utm_campaign=kendo-ui-vue-trial-charts">KendoVue Chart documentation page.</a> </p>
                </div>
            </div>
        </div>
</template>

<script>
import '@progress/kendo-ui/js/kendo.dataviz.chart'
import { Chart } from '@progress/kendo-charts-vue-wrapper';

export default {
     mounted: function(){
        setTimeout(() => {
            this.loading = false;
        }, 100);
     },
     components: {
        Chart
     },
     data: function() {
        return {
            loading: true,
            series: [{
                    type: "pie",
                    labels: {
                        visible: true,
                        format: "p0"
                    },
                    connectors: {
                      width: 0
                    },
                    data: [
                      { category: 'EUROPE', value: 0.3 },
                      { category: 'NORTH AMERICA', value: 0.23 },
                      { category: 'AUSTRALIA', value: 0.18 },
                      { category: 'ASIA', value: 0.15 },
                      { category: 'SOUTH AMERICA', value: 0.09 },
                      { category: 'AFRICA', value: 0.05 }
                    ]
            }]
        }
    }
}
</script>
