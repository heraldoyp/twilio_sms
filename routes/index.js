'use strict';

// Deps
var activity = require('./activity');

/*
 * GET home page.
 */
exports.index = function(req, res){
    // var inputPhoneNumberValue = document.querySelector("input");
    // var inputMessageValue = document.querySelector("textarea");
    // var logPhone = document.getElementById("logPhone");
    // var logMessage = document.getElementById("logMessage");
    // inputPhoneNumberValue.addEventListener('change', updatePhoneValue);
    // inputMessageValue.addEventListener('change', updateMessageValue);

    // function updatePhoneValue(e){
    //     logPhone.textContext = e.target.value;
    // }

    // function updateMessageValue(e){
    //     logMessage.textContext = e.target.value;
    // }

    // $(window).ready(onRender);
    // var bodyData = {
    //     "phoneNumberValue": document.getElementsById("form-element-01").value(),
    //     "messageValue": document.getElementsById("textarea-id-01").value()
    // }

    // var bodyData = {
    //     "phoneNumberValue": $('#form-element-01').val(),
    //     "messageValue": $('#textarea-id-01').val()
    // }

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