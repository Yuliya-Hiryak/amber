import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: 'Bearer bu3DLYIKOAowM1pHkMOLPc7MqcElSzDhZ19bfHFFgIiIqDuvSsAxXZ3-pJQ9xNC6TufYtpD0xHRcfYPdhBQRVaTAm0qum1PsG5nJUn-vYWdH4gxS3MidLZwtbXusY3Yx'
  }
})
