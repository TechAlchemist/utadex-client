const BASE_URL = 'http://localhost:3000/api/location';

function getAllLocations() {
    const options = {
        method: 'GET',
      };
      return fetch(BASE_URL + '/getAllLocations', options).then(res => res.json());
}

function getSpecificLocation() {

}

function createLocation() {

}

function updateLocation() {

}

function deleteLocation() {

}

export {
    getAllLocations,
    getSpecificLocation,
    createLocation,
    updateLocation,
    deleteLocation
};