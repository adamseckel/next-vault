// import axios from 'axios'

import DestinyStatDefinition from '../manifest/DestinyStatDefinition.json'
import DestinySandboxPerkDefinition from '../manifest/DestinySandboxPerkDefinition.json'
import DestinyInventoryItemDefinition from '../manifest/DestinyInventoryItemDefinition.json'
import DestinyItemTierTypeDefinition from '../manifest/DestinyItemTierTypeDefinition.json'
import DestinyStatGroupDefinition from '../manifest/DestinyStatGroupDefinition.json'
import DestinyInventoryBucketDefinition from '../manifest/DestinyInventoryBucketDefinition.json'
import DestinyTalentGridDefinition from '../manifest/DestinyTalentGridDefinition.json'

const manifest = {
  DestinyStatDefinition: handleManifestResponse(DestinyStatDefinition),
  DestinySandboxPerkDefinition: handleManifestResponse(
    DestinySandboxPerkDefinition
  ),
  DestinyInventoryItemDefinition: handleManifestResponse(
    DestinyInventoryItemDefinition
  ),
  DestinyItemTierTypeDefinition: handleManifestResponse(
    DestinyItemTierTypeDefinition
  ),
  DestinyStatGroupDefinition: handleManifestResponse(
    DestinyStatGroupDefinition
  ),
  DestinyInventoryBucketDefinition: handleManifestResponse(
    DestinyInventoryBucketDefinition
  ),
  DestinyTalentGridDefinition: handleManifestResponse(
    DestinyTalentGridDefinition
  ),
}

export default manifest

function handleManifestResponse(data) {
  return data
    .map(entry => {
      const data = JSON.parse(entry.json)
      return [data.hash, data]
    })
    .reduce((o, [k, v]) => {
      o[k] = v
      return o
    }, {})
}

// export default function(manifestVersion) {
//   const manifestRequest = axios.create({
//     baseURL: `${process.env.PUBLIC_URL}/manifest/${manifestVersion}/`,
//   });

//   const service = {
//     getStatsDefinitions() {
//       return manifestRequest.get('DestinyStatDefinition.json').then(handleManifestResponse);
//     },

//     getPerksDefinitions() {
//       return manifestRequest.get('DestinySandboxPerkDefinition.json').then(handleManifestResponse);
//     },

//     getInventoryItemDefinitions() {
//       return manifestRequest
//         .get('DestinyInventoryItemDefinition.json')
//         .then(handleManifestResponse);
//     },

//     getDestinyItemTierTypeDefinitions() {
//       return manifestRequest.get('DestinyItemTierTypeDefinition.json').then(handleManifestResponse);
//     },

//     getDestinyStatGroupDefinition() {
//       return manifestRequest.get('DestinyStatGroupDefinition.json').then(handleManifestResponse);
//     },

//     getDestinyInventoryBucketDefinitions() {
//       return manifestRequest
//         .get('DestinyInventoryBucketDefinition.json')
//         .then(handleManifestResponse);
//     },

//     getDestinyTalentGridDefinition() {
//       return manifestRequest.get('DestinyTalentGridDefinition.json').then(handleManifestResponse);
//     },
//   };

//   return service;
// }
