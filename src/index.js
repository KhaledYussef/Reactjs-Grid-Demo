import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerLicense } from '@syncfusion/ej2-base';
import Fileupload from './fileupload/Fileupload';
registerLicense('Mgo+DSMBaFt/QHRqVVhkVFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jS35Sd0BnW3pWcnFVQg==;Mgo+DSMBPh8sVXJ0S0J+XE9AflRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TdEViWHpacnFdRGZaVQ==;ORg4AjUWIQA/Gnt2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdjWH5bdHZQTmJUU00=;MTA0OTU3N0AzMjMwMmUzNDJlMzBqZ3I3M0FqUWgxTExZeFB3bm9NOXBIL1p1YWhlWXp4L09Yai9QN2gwUGprPQ==;MTA0OTU3OEAzMjMwMmUzNDJlMzBTRnduU3lLdm9RRWpoTEFQTFAxUXJPK2NxRWdBbGFtNUR1RlU0dmdPelFBPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUVhWX5fdXBXQ2hfVkF3;MTA0OTU4MEAzMjMwMmUzNDJlMzBWMnZoMDU0NVhPb3grYTNILzdXRjlpVHhaVUJSekdLelByL0xraDJvd3VVPQ==;MTA0OTU4MUAzMjMwMmUzNDJlMzBleVdyT0dCNFNmUnkyZ0FUWWVDWjZPVFZCRlJNdzB3OHVSMlBqRXRUWGRnPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdjWH5bdHZQTmRZV0Y=;MTA0OTU4M0AzMjMwMmUzNDJlMzBUbXJ2ZjZ4TE5ReHpGOTlXWFNVbGk3UXdCWVh3R0NrYTljK01DbGNvVFpVPQ==;MTA0OTU4NEAzMjMwMmUzNDJlMzBvNm53ZWVtOVhadERiV1pndkwwcDF5aUlPYW1Rb2tVUG5KcFRqZzFBa29RPQ==;MTA0OTU4NUAzMjMwMmUzNDJlMzBWMnZoMDU0NVhPb3grYTNILzdXRjlpVHhaVUJSekdLelByL0xraDJvd3VVPQ==');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Fileupload />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
