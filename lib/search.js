'use strict';

const request = require('./request');
const querystring = require('querystring');

module.exports = {
    channels: (data, callback) => {
        // Authentication: none
        // Required Parameters: query
        // Optional Parameters: limit, offset

        if(!data.query) return callback('query is required');

        let params = {};
        params.query = data.query;
        if(data.limit) params.limit = data.limit;
        if(data.offset) params.offset = data.offset;

        let options = {};
        options.url = `https://api.twitch.tv/kraken/search/channels?${querystring.stringify(params)}`;

        request('GET', options, callback);
    },

    games: (data, callback) => {
        // Authentication: none
        // Required Parameters: query
        // Optional Parameters: live

        if(!data.query) return callback('query is required');

        let params = {};
        params.query = data.query;
        if(data.live) params.live = data.live;

        let options = {};
        options.url = `https://api.twitch.tv/kraken/search/games?${querystring.stringify(params)}`;

        request('GET', options, callback);
    },

    streams: (data, callback) => {
        // Authentication: none
        // Required Parameters: query
        // Optional Parameters: limit, offset, hls

        if(!data.query) return callback('query is required');

        let params = {};
        params.query = data.query;
        if(data.limit) params.limit = data.limit;
        if(data.offset) params.offset = data.offset;
        if(data.hls) params.hls = data.hls;

        let options = {};
        options.url = `https://api.twitch.tv/kraken/search/streams?${querystring.stringify(params)}`;

        request('GET', options, callback);
    },
};