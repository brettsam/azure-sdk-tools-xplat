// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg8479/providers/Microsoft.Network/networkSecurityGroups?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplatTestNsg499\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg8479/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg499\",\r\n      \"etag\": \"W/\\\"f28e5186-604f-4322-afb3-88df2789050b\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"defaultSecurityRules\": [\r\n          {\r\n            \"name\": \"AllowVnetInBound\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg8479/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg499/defaultSecurityRules/AllowVnetInBound\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n              \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n              \"access\": \"Allow\",\r\n              \"priority\": 65000,\r\n              \"direction\": \"Inbound\"\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"AllowAzureLoadBalancerInBound\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg8479/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg499/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Allow inbound traffic from azure load balancer\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n              \"destinationAddressPrefix\": \"*\",\r\n              \"access\": \"Allow\",\r\n              \"priority\": 65001,\r\n              \"direction\": \"Inbound\"\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"DenyAllInBound\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg8479/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg499/defaultSecurityRules/DenyAllInBound\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Deny all inbound traffic\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"*\",\r\n              \"destinationAddressPrefix\": \"*\",\r\n              \"access\": \"Deny\",\r\n              \"priority\": 65500,\r\n              \"direction\": \"Inbound\"\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"AllowVnetOutBound\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg8479/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg499/defaultSecurityRules/AllowVnetOutBound\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n              \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n              \"access\": \"Allow\",\r\n              \"priority\": 65000,\r\n              \"direction\": \"Outbound\"\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"AllowInternetOutBound\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg8479/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg499/defaultSecurityRules/AllowInternetOutBound\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"*\",\r\n              \"destinationAddressPrefix\": \"Internet\",\r\n              \"access\": \"Allow\",\r\n              \"priority\": 65001,\r\n              \"direction\": \"Outbound\"\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"DenyAllOutBound\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg8479/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg499/defaultSecurityRules/DenyAllOutBound\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Deny all outbound traffic\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"*\",\r\n              \"destinationAddressPrefix\": \"*\",\r\n              \"access\": \"Deny\",\r\n              \"priority\": 65500,\r\n              \"direction\": \"Outbound\"\r\n            }\r\n          }\r\n        ]\r\n      },\r\n      \"location\": \"westus\"\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5163',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2988e8cd-064e-4807-bd38-539f7b08878a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31939',
  'x-ms-correlation-request-id': '0e099738-c815-43fc-94a5-17f22ead9871',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090644Z:0e099738-c815-43fc-94a5-17f22ead9871',
  date: 'Mon, 27 Apr 2015 09:06:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg8479/providers/Microsoft.Network/networkSecurityGroups?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplatTestNsg499\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg8479/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg499\",\r\n      \"etag\": \"W/\\\"f28e5186-604f-4322-afb3-88df2789050b\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"defaultSecurityRules\": [\r\n          {\r\n            \"name\": \"AllowVnetInBound\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg8479/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg499/defaultSecurityRules/AllowVnetInBound\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n              \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n              \"access\": \"Allow\",\r\n              \"priority\": 65000,\r\n              \"direction\": \"Inbound\"\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"AllowAzureLoadBalancerInBound\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg8479/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg499/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Allow inbound traffic from azure load balancer\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n              \"destinationAddressPrefix\": \"*\",\r\n              \"access\": \"Allow\",\r\n              \"priority\": 65001,\r\n              \"direction\": \"Inbound\"\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"DenyAllInBound\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg8479/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg499/defaultSecurityRules/DenyAllInBound\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Deny all inbound traffic\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"*\",\r\n              \"destinationAddressPrefix\": \"*\",\r\n              \"access\": \"Deny\",\r\n              \"priority\": 65500,\r\n              \"direction\": \"Inbound\"\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"AllowVnetOutBound\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg8479/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg499/defaultSecurityRules/AllowVnetOutBound\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n              \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n              \"access\": \"Allow\",\r\n              \"priority\": 65000,\r\n              \"direction\": \"Outbound\"\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"AllowInternetOutBound\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg8479/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg499/defaultSecurityRules/AllowInternetOutBound\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"*\",\r\n              \"destinationAddressPrefix\": \"Internet\",\r\n              \"access\": \"Allow\",\r\n              \"priority\": 65001,\r\n              \"direction\": \"Outbound\"\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"DenyAllOutBound\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg8479/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg499/defaultSecurityRules/DenyAllOutBound\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Deny all outbound traffic\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"*\",\r\n              \"destinationAddressPrefix\": \"*\",\r\n              \"access\": \"Deny\",\r\n              \"priority\": 65500,\r\n              \"direction\": \"Outbound\"\r\n            }\r\n          }\r\n        ]\r\n      },\r\n      \"location\": \"westus\"\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5163',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2988e8cd-064e-4807-bd38-539f7b08878a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31939',
  'x-ms-correlation-request-id': '0e099738-c815-43fc-94a5-17f22ead9871',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090644Z:0e099738-c815-43fc-94a5-17f22ead9871',
  date: 'Mon, 27 Apr 2015 09:06:43 GMT',
  connection: 'close' });
 return result; }]];