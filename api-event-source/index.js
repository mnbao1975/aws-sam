'use strict';

exports.handler = (event, context, callback) => {
    callback(null, {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json'
        },
        body: {"hello": "shit"}
        //body: JSON.stringify({hello: 'there is a shit'})
    })
}