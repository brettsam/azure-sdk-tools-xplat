// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'c9cbd920-c00c-427c-852b-8aaf38badaeb',
    name: 'Azure SDK Powershell Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_SQL_TEST_LOCATION'] = 'West US';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'a94e2f6f1b697ccea7cae8dc338eea89',
  date: 'Fri, 13 Mar 2015 03:47:54 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers')
  .reply(200, "<Servers xmlns=\"http://schemas.microsoft.com/sqlazure/2010/12/\"/>", { 'cache-control': 'no-cache',
  'content-length': '65',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'd6ec5074648371eb94e7dd499b34741a',
  date: 'Fri, 13 Mar 2015 03:47:54 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '4d5ed58b72317254bfd5ff1dc6e60286',
  date: 'Fri, 13 Mar 2015 03:47:55 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers', '*')
  .reply(201, "<ServerName FullyQualifiedDomainName=\"tj2gjq67jt.database.windows.net\" xmlns=\"http://schemas.microsoft.com/sqlazure/2010/12/\">tj2gjq67jt</ServerName>", { 'cache-control': 'no-cache',
  'content-length': '149',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'a53cf9d2723c77c0aa4c2c6196c1b1e1',
  date: 'Fri, 13 Mar 2015 03:48:02 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '9a65fd2d06307676ae29bbd01015b904',
  date: 'Fri, 13 Mar 2015 03:48:02 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/tj2gjq67jt/firewallrules', '*')
  .reply(201, "<ServiceResource xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>AllowAllWindowsAzureIps</Name><Type>Microsoft.SqlAzure.FirewallRule</Type><State>Normal</State><SelfLink>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/tj2gjq67jt/firewallrules/AllowAllWindowsAzureIps</SelfLink><ParentLink>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/tj2gjq67jt</ParentLink><StartIPAddress>0.0.0.0</StartIPAddress><EndIPAddress>0.0.0.0</EndIPAddress></ServiceResource>", { 'cache-control': 'no-store,no-cache',
  'content-length': '620',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '35912ae2d5177d958a35483377c00928',
  date: 'Fri, 13 Mar 2015 03:48:04 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '0319132a53a77826ac171b06001cef32',
  date: 'Fri, 13 Mar 2015 03:48:04 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/tj2gjq67jt/firewallrules')
  .reply(200, "<ServiceResources xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ServiceResource><Name>AllowAllWindowsAzureIps</Name><Type>Microsoft.SqlAzure.FirewallRule</Type><State>Normal</State><SelfLink>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/tj2gjq67jt/firewallrules/AllowAllWindowsAzureIps</SelfLink><ParentLink>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/tj2gjq67jt</ParentLink><StartIPAddress>0.0.0.0</StartIPAddress><EndIPAddress>0.0.0.0</EndIPAddress></ServiceResource></ServiceResources>", { 'cache-control': 'no-store,no-cache',
  'content-length': '657',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '7ee16673407c7e1aa8f367d985394ad9',
  date: 'Fri, 13 Mar 2015 03:48:05 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'b8b0ebb403c5740ab008841a15732afd',
  date: 'Fri, 13 Mar 2015 03:48:06 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers')
  .reply(200, "<Servers xmlns=\"http://schemas.microsoft.com/sqlazure/2010/12/\">\n  <Server>\n    <Name>tj2gjq67jt</Name>\n    <AdministratorLogin>azuresdk</AdministratorLogin>\n    <Location>West US</Location>\n    <FullyQualifiedDomainName>tj2gjq67jt.database.windows.net</FullyQualifiedDomainName>\n    <Version>2.0</Version>\n    <State>Ready</State>\n  </Server>\n</Servers>", { 'cache-control': 'no-cache',
  'content-length': '354',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '5a854c10811e7b87960c97aeb1726c53',
  date: 'Fri, 13 Mar 2015 03:48:07 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'efd49b21fb7d7ef19ffaca85fb6ccf6f',
  date: 'Fri, 13 Mar 2015 03:48:07 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .delete('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/tj2gjq67jt')
  .reply(200, "", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '9fbcc126c6147d9db01ba9b72defd951',
  date: 'Fri, 13 Mar 2015 03:48:07 GMT' });
 return result; }]];