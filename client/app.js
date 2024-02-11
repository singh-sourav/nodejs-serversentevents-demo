/* Client Code */

const EventSource = require('eventsource'); // Available on Browsers
const eventSource = new EventSource("http://localhost:8080/stream")
eventSource.onmessage =  console.log