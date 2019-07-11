///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { RestServiceConfig } from '../../core/data/rest-service-config';
import { DataProvider2ODataDataSource } from './o-data-data-source.model';

export function getODataDataSourceConfig(): RestServiceConfig {
  return {
    dataProviderName: 'DataProvider2',
    serverOperations: false,
    createModel: () => new DataProvider2ODataDataSource(),
    idField: 'ProductID',
    dataProperty: 'value',
    totalProperty: '',
    actions: {
      read: {
        method: 'GET',
        url: 'Products?$count=true&'
      }
    }
  };
}
