/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Deliverable model module.
 * @module model/Deliverable
 * @version 1.0.0
 */
class Deliverable {
    /**
     * Constructs a new <code>Deliverable</code>.
     * @alias module:model/Deliverable
     * @param dName {String} 
     * @param dStatus {String} 
     * @param dDate {String} 
     */
    constructor(dName, dStatus, dDate) { 
        
        Deliverable.initialize(this, dName, dStatus, dDate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, dName, dStatus, dDate) { 
        obj['dName'] = dName;
        obj['dStatus'] = dStatus;
        obj['dDate'] = dDate;
    }

    /**
     * Constructs a <code>Deliverable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Deliverable} obj Optional instance to populate.
     * @return {module:model/Deliverable} The populated <code>Deliverable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Deliverable();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('dName')) {
                obj['dName'] = ApiClient.convertToType(data['dName'], 'String');
            }
            if (data.hasOwnProperty('dStatus')) {
                obj['dStatus'] = ApiClient.convertToType(data['dStatus'], 'String');
            }
            if (data.hasOwnProperty('dDate')) {
                obj['dDate'] = ApiClient.convertToType(data['dDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Deliverable.prototype['_id'] = undefined;

/**
 * @member {String} dName
 */
Deliverable.prototype['dName'] = undefined;

/**
 * @member {String} dStatus
 */
Deliverable.prototype['dStatus'] = undefined;

/**
 * @member {String} dDate
 */
Deliverable.prototype['dDate'] = undefined;






export default Deliverable;

