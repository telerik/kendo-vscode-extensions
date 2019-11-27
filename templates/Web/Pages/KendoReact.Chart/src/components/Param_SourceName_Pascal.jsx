import React from 'react';
import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts'

const series = [
    { category: 'EUROPE', value: 0.3 },
    { category: 'NORTH AMERIKA', value: 0.23 },
    { category: 'AUSTRALIA', value: 0.18 },
    { category: 'ASIA', value: 0.15 },
    { category: 'SOUTH AMERIKA', value: 0.09 },
    { category: 'AFRIC', value: 0.05 }
];

const Param_SourceName_Pascal = (props) => {
    return (
        <div className='container-fluid'>
            <div className='row my-4'>
                <div className='col-12 col-lg-9 border-right'>
                    <Chart>
                        <ChartLegend position="bottom" />
                        <ChartSeries>
                            <ChartSeriesItem type="pie" data={series} field="value" categoryField="category" labels={{ visible: true, format: 'p0', position: 'auto', distance: 30 }} />
                        </ChartSeries>
                    </Chart>
                </div>
                <div className='col-12 col-lg-3 mt-3 mt-lg-0'>
                    <h3>KendoReact Chart</h3>
                    <p>The KendoReact Charts provide high quality graphical data visualization options.</p>
                    <p>They include a variety of chart types and styles that have extensive configuration options. This flexibility allows you to quickly and easily create the exact chart you need to fit your specific requirements for functionality and appearance.</p>
                    <p>The KendoReact Chart Components are built from the ground up, specifically for React, so that you get high performance chart components that integrate with your React app and with the rest of your React UI components.</p>
                </div>
            </div>
        </div>
    )
}

export default Param_SourceName_Pascal;