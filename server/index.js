const express = require('express');

const app = express();
const port = 3000;

app.get('/preferences', (_req, res) => {
    const responsePayload = {
        emailAddress: 'test@test.com',
        preferences: [
            {
                context: 'car',
                namespace: 'marketing',
                key: 'indicative-quotes',
                value: true,
                updatedAt: '2022-09-08T08:35:14.234Z',
                updatedBy: 'direct'
             },
             {
                context: 'home',
                namespace: 'marketing',
                key: 'indicative-quotes',
                value: false,
                updatedAt: '2022-09-08T08:35:14.234Z',
                updatedBy: 'direct'
             },
             {
                context: 'van',
                namespace: 'marketing',
                key: 'indicative-quotes',
                value: false,
                updatedAt: '2022-09-08T08:35:14.234Z',
                updatedBy: 'direct'
             },
             {
                context: 'email',
                namespace: 'marketing',
                key: 'renewals-cross-sell',
                value: false,
                updatedAt: '2022-09-08T08:35:14.234Z',
                updatedBy: 'direct'
             },
             {
                context: 'email',
                namespace: 'marketing',
                key: 'rewards',
                value: false,
                updatedAt: '2022-09-08T08:35:14.234Z',
                updatedBy: 'direct'
             },
             {   
                context: 'email',
                namespace: 'marketing',
                key: 'news',
                value: true,
                updatedAt: '2022-09-08T08:35:14.234Z',
                updatedBy: 'direct'
             }
        ]
    };
    res.set({'Access-Control-Allow-Origin': '*'});
    res.json(responsePayload);
});

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})