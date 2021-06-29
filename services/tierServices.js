import axios from "axios";


const instance = axios.create({
    baseURL: 'https://platform.tier-services.io/v2/',
    headers: { 'x-api-key': 'bpEUTJEBTf74oGRWxaIcW7aeZMzDDODe1yBoSxi2' }
});



export function getTierVehiclesInZone(zoneId) {
    return instance.get('/vehicle', {
        params: {
            zoneId: zoneId
        }
    })
}


export function getTierVehiclesInRange(lat,lng,radius) {
    return instance.get('/vehicle', {
        params: {
            lat: lat,
            lng: lng,
            radius: radius
        }
    })
}

