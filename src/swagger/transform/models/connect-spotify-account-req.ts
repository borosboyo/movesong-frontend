/* tslint:disable */
/* eslint-disable */
/**
 * REST API SPEC FOR MOVESONG FRONTEND
 * REST API SPEC FOR MOVESONG FRONTEND
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface ConnectSpotifyAccountReq
 */
export interface ConnectSpotifyAccountReq {
    /**
     * 
     * @type {string}
     * @memberof ConnectSpotifyAccountReq
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectSpotifyAccountReq
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectSpotifyAccountReq
     */
    movesongEmail?: string;
}
