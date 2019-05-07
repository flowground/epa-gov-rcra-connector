/**
 * Auto-generated action file for "U.S. EPA Enforcement and Compliance History Online (ECHO) - Resource Conservation and Recovery Act " API.
 *
 * Generated at: 2019-05-07T14:40:25.218Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / epa-gov-rcra-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: undefined
 * Endpoint Path: '/rcra_rest_services.get_facilities'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "output",
    "p_fn",
    "p_sa",
    "p_sa1",
    "p_ct",
    "p_co",
    "p_fips",
    "p_st",
    "p_stdist",
    "p_zip",
    "p_frs",
    "p_reg",
    "p_sic",
    "p_ncs",
    "p_pen",
    "p_c1lat",
    "p_c1lon",
    "p_c2lat",
    "p_c2lon",
    "p_usmex",
    "p_sic2",
    "p_sic4",
    "p_fa",
    "p_act",
    "p_fea",
    "p_feay",
    "p_feaa",
    "p_iea",
    "p_ieay",
    "p_ieaa",
    "p_cmps",
    "p_law",
    "p_section",
    "p_lsdate",
    "p_qiv",
    "p_impw",
    "p_trep",
    "p_olr",
    "p_oct",
    "p_pm",
    "p_pd",
    "p_ico",
    "p_huc",
    "p_wbd",
    "p_pid",
    "p_med",
    "p_ysl",
    "p_ysly",
    "p_ysla",
    "p_qs",
    "p_sfs",
    "p_tribeid",
    "p_tribename",
    "p_tribedist",
    "p_owop",
    "p_agoo",
    "p_idt1",
    "p_idt2",
    "p_pityp",
    "p_cifdi",
    "p_pfead1",
    "p_pfead2",
    "p_pfeat",
    "p_psncq",
    "p_dwd",
    "p_violy",
    "p_ncv",
    "p_fcv",
    "p_violt",
    "p_des",
    "p_fntype",
    "p_pidall",
    "p_fac_ico",
    "p_icoo",
    "p_fac_icos",
    "p_ejscreen",
    "p_limit_addr",
    "p_lat",
    "p_long",
    "p_radius",
    "p_decouple",
    "p_ejscreen_over80cnt",
    "queryset",
    "responseset",
    "tablelist",
    "maplist",
    "summarylist",
    "callback",
    "qcolumns"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "output": "output",
    "p_fn": "p_fn",
    "p_sa": "p_sa",
    "p_sa1": "p_sa1",
    "p_ct": "p_ct",
    "p_co": "p_co",
    "p_fips": "p_fips",
    "p_st": "p_st",
    "p_stdist": "p_stdist",
    "p_zip": "p_zip",
    "p_frs": "p_frs",
    "p_reg": "p_reg",
    "p_sic": "p_sic",
    "p_ncs": "p_ncs",
    "p_pen": "p_pen",
    "p_c1lat": "p_c1lat",
    "p_c1lon": "p_c1lon",
    "p_c2lat": "p_c2lat",
    "p_c2lon": "p_c2lon",
    "p_usmex": "p_usmex",
    "p_sic2": "p_sic2",
    "p_sic4": "p_sic4",
    "p_fa": "p_fa",
    "p_act": "p_act",
    "p_fea": "p_fea",
    "p_feay": "p_feay",
    "p_feaa": "p_feaa",
    "p_iea": "p_iea",
    "p_ieay": "p_ieay",
    "p_ieaa": "p_ieaa",
    "p_cmps": "p_cmps",
    "p_law": "p_law",
    "p_section": "p_section",
    "p_lsdate": "p_lsdate",
    "p_qiv": "p_qiv",
    "p_impw": "p_impw",
    "p_trep": "p_trep",
    "p_olr": "p_olr",
    "p_oct": "p_oct",
    "p_pm": "p_pm",
    "p_pd": "p_pd",
    "p_ico": "p_ico",
    "p_huc": "p_huc",
    "p_wbd": "p_wbd",
    "p_pid": "p_pid",
    "p_med": "p_med",
    "p_ysl": "p_ysl",
    "p_ysly": "p_ysly",
    "p_ysla": "p_ysla",
    "p_qs": "p_qs",
    "p_sfs": "p_sfs",
    "p_tribeid": "p_tribeid",
    "p_tribename": "p_tribename",
    "p_tribedist": "p_tribedist",
    "p_owop": "p_owop",
    "p_agoo": "p_agoo",
    "p_idt1": "p_idt1",
    "p_idt2": "p_idt2",
    "p_pityp": "p_pityp",
    "p_cifdi": "p_cifdi",
    "p_pfead1": "p_pfead1",
    "p_pfead2": "p_pfead2",
    "p_pfeat": "p_pfeat",
    "p_psncq": "p_psncq",
    "p_dwd": "p_dwd",
    "p_violy": "p_violy",
    "p_ncv": "p_ncv",
    "p_fcv": "p_fcv",
    "p_violt": "p_violt",
    "p_des": "p_des",
    "p_fntype": "p_fntype",
    "p_pidall": "p_pidall",
    "p_fac_ico": "p_fac_ico",
    "p_icoo": "p_icoo",
    "p_fac_icos": "p_fac_icos",
    "p_ejscreen": "p_ejscreen",
    "p_limit_addr": "p_limit_addr",
    "p_lat": "p_lat",
    "p_long": "p_long",
    "p_radius": "p_radius",
    "p_decouple": "p_decouple",
    "p_ejscreen_over80cnt": "p_ejscreen_over80cnt",
    "queryset": "queryset",
    "responseset": "responseset",
    "tablelist": "tablelist",
    "maplist": "maplist",
    "summarylist": "summarylist",
    "callback": "callback",
    "qcolumns": "qcolumns"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: undefined,
        pathName: '/rcra_rest_services.get_facilities',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}