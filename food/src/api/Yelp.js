import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer FyM4IMagS4L_2T1ej1GDEhBLNONiQS86BFHa8Pgd33lL5y_pUzBImuin_OE7Z4eshRIpwQ_nenkEq-qCkS0VCvdyIT2O-rd7aEmB59LByH9UucGN9_cEMJZiEh9lZHYx'
    }
});