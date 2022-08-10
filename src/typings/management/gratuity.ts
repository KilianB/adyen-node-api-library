/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class Gratuity {
    /**
    * Indicates whether one of the predefined tipping options is to let the shopper enter a custom tip. If **true**, only three of the other options defined in `predefinedTipEntries` are shown.
    */
    'allowCustomAmount'?: boolean;
    /**
    * The currency that the tipping settings apply to.
    */
    'currency'?: string;
    /**
    * Tipping options the shopper can choose from if `usePredefinedTipEntries` is **true**. The maximum number of predefined options is four, or three plus the option to enter a custom tip. The options can be a mix of:  - A percentage of the transaction amount. Example: **5%** - A tip amount in minor units. Example: **500** for a EUR 5 tip.
    */
    'predefinedTipEntries'?: Array<string>;
    /**
    * Indicates whether the terminal shows a prompt to enter a tip (**false**), or predefined tipping options to choose from (**true**).
    */
    'usePredefinedTipEntries'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowCustomAmount",
            "baseName": "allowCustomAmount",
            "type": "boolean"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "predefinedTipEntries",
            "baseName": "predefinedTipEntries",
            "type": "Array<string>"
        },
        {
            "name": "usePredefinedTipEntries",
            "baseName": "usePredefinedTipEntries",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Gratuity.attributeTypeMap;
    }
}
