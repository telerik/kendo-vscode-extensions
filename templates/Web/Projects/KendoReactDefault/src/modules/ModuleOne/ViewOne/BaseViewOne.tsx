///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import React from 'react';
import TopSection from './TopSection';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import './ViewOne.scss';

const BaseViewOne: React.FC = (props: any) => {
  return (
    <div className="">
      <div className="row">
        <div className="col-12">
          <TopSection/>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
            <Grid  
                {...props.grid524d465702174e8fadf0a553d2853698}
                {...props.localStateProps.grid524d465702174e8fadf0a553d2853698} 
              //  onRowClick={(e: any) => props.customEvent(e, 'test-key')}
            >
                <Column field="ProductID" title="ID" filterable={false} editable={false}/>
                <Column field="ProductName" title="Name" />
                <Column field="UnitPrice" title="Price" filter="numeric" editor="numeric" />
                <Column field="UnitsInStock" title="In stock" filter="numeric"  editor="numeric" />
            </Grid>
        </div>
        <div className="col-sm-6">
            {props.children}
        </div>
      </div>
    </div>
  );
};

export default BaseViewOne;
