import firebase from 'firebase/app'
import 'firebase/firestore'


// Initialize Firebase
const config = {
    apiKey: "AIzaSyD5i6GMDNAi0tgYGj6Ec3U2GVXHaLSx_78",
    authDomain: "deploy-7003e.firebaseapp.com",
    databaseURL: "https://deploy-7003e.firebaseio.com",
    projectId: "deploy-7003e",
    storageBucket: "deploy-7003e.appspot.com",
    messagingSenderId: "1048716810899"
};

firebase.initializeApp(config);


const db = firebase.firestore()
// firebase collections
const scheduleCollection = db.collection('schedule')
const schedule2Collection = db.collection('schedule2')
const customers = db.collection('customers')
const currentOrders = db.collection('currentOrders')
const pastOrders = db.collection('pastOrders')
const newsUpdates = db.collection('newsUpdates')
const localPromos = db.collection('localPromos')
const dailyPromos = db.collection('dailyPromos')
const nationalPromos = db.collection('nationalPromos')
const employees = db.collection('employees')
const pastEmployees = db.collection('pastEmployees')
const buildingOrder = db.collection('buildingOrder')
const scheduleDates = db.collection('scheduleDates')
const thisWeeksScheduleDates = db.collection('thisWeeksScheduleDates')
const nextWeeksScheduleDates = db.collection('nextWeeksScheduleDates')
const scheduleRequests = db.collection('scheduleRequests')
const oldScheduleRequests = db.collection('oldScheduleRequests')

export {
    db,
    scheduleCollection,
    schedule2Collection,
    customers,
    currentOrders,
    newsUpdates,
    localPromos,
    dailyPromos,
    nationalPromos,
    employees,
    pastEmployees,
    buildingOrder,
    scheduleDates,
    pastOrders,
    thisWeeksScheduleDates,
    nextWeeksScheduleDates,
    scheduleRequests,
    oldScheduleRequests
}