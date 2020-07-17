export const API_URL = "https://8f462d07-eef9-44bf-8290-2b2d9a3dd6f5.mock.pstmn.io/";

export const API_HEADER = {
    method: 'post',
    mode: 'cors',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
};

export const VALIDATION_REGEX = {
    // eslint-disable-next-line
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    // eslint-disable-next-line
    phone: /^\+[1-9]\d{10,14}$/,
    // eslint-disable-next-line
    password: /^[a-zA-Z0-9!@#$%^&*()]{8,15}$/,
    // eslint-disable-next-line
    name: /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/, // supports name O’Donnell or Jones-Smith or Michael James Peter
    // eslint-disable-next-line
    uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
};

export const QUIZCATEGORY = [
    {
        "key": "0",
        "value": "Select",
    },
    {
        "key": "1",
        "value": "English",
    },
    {
        "key": "2",
        "value": "History",
    },
    {
        "key": "3",
        "value": "General Knowledge",
    },
    {
        "key": "4",
        "value": "Plitics",
    },
    {
        "key": "5",
        "value": "Physics",
    },
    {
        "key": "6",
        "value": "Science",
    }
];

export const TIMER_VAL = 1;
