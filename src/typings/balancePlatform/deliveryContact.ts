/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Address2 } from './address2';
import { Name } from './name';
import { PhoneNumber } from './phoneNumber';

export class DeliveryContact {
    'address'?: Address2;
    /**
    * The email address of the contact.
    */
    'email'?: string;
    /**
    * The full phone number of the contact provided as a single string. It will be handled as a landline phone. **Examples:** \"0031 6 11 22 33 44\", \"+316/1122-3344\", \"(0031) 611223344\"
    */
    'fullPhoneNumber'?: string;
    'name'?: Name;
    'phoneNumber'?: PhoneNumber;
    /**
    * The URL of the contact\'s website.
    */
    'webAddress'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "Address2"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "fullPhoneNumber",
            "baseName": "fullPhoneNumber",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "Name"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "PhoneNumber"
        },
        {
            "name": "webAddress",
            "baseName": "webAddress",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DeliveryContact.attributeTypeMap;
    }
}

