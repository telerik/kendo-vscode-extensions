export class TelemetryReporterMock {

    constructor(extensionName?: string, extensionVersion?: any, aiKey?: string){        
    }

    updateUserOptIn = function (key?: string) {
    };

    createAppInsightsClient = function (key?: string) {
    };

    getCommonProperties = function () {
    };

    sendTelemetryEvent = function (eventName?: string, properties?: any, measurements?: any) {
    };

    dispose = function () {      
    };

    TELEMETRY_CONFIG_ID = 'telemetry';
    TELEMETRY_CONFIG_ENABLED_ID = 'enableTelemetry';  
};
