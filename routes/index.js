'use strict';

// Deps
var activity = require('./activity');

/*
 * GET home page.
 */
exports.index = function(req, res){
    if( !req.session.token ) {
        res.render( 'index', {
            title: 'Unauthenticated',
            errorMessage: 'This app may only be loaded via Salesforce Marketing Cloud',
        });
    } else {
        res.render( 'index', {
            title: 'Journey Builder Activity',
            results: activity.logExecuteData,
        });
    }
};

// exports.test = function(req, res){
//     var request = require('request');
//     var url = "https://enfv9ennjfrf59v.m.pipedream.net"

//     var bodyValue = {
//         "phoneNumberValue": "081218878964",
//         "messageValue": "Ini hardcode test dari npm"
//     }
//     request({
//         uri: url, 
//         method: 'POST',
//         json: bodyValue
//     }, function(error, response, body){
//         if(!error){
//             console.log(body);
//         }
//     })

//     res.send(200, 'Test Material');
// }

exports.login = function( req, res ) {
    // console.log( 'req.body: ', req.body );
    res.send(req.session)
    // res.redirect( '/' );
};

exports.logout = function( req, res ) {
    req.session.token = '';
};