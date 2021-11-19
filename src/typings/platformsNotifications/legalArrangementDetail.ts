/**
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 *
 * Adyen for Platforms: Notifications
 * The Notification API sends notifications to the endpoints specified in a given subscription. Subscriptions are managed through the Notification Configuration API. The API specifications listed here detail the format of each notification.  For more information, refer to our [documentation](https://docs.adyen.com/platforms/notifications).
 *
 * The version of the OpenAPI document: 6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LegalArrangementEntityDetail } from './legalArrangementEntityDetail';
import { ViasAddress } from './viasAddress';

export class LegalArrangementDetail {
    'address': ViasAddress;
    /**
    * Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response when you create a legal arrangement. Required when updating an existing legal arrangement entry in an `/updateAccountHolder` request.
    */
    'legalArrangementCode'?: string;
    /**
    * An array containing information about other entities that are part of the legal arrangement.
    */
    'legalArrangementEntities'?: Array<LegalArrangementEntityDetail>;
    /**
    * Your reference for the legal arrangement. Must be between 3 to 128 characters.
    */
    'legalArrangementReference'?: string;
    /**
    * The form of legal arrangement. Required if `type` is **Trust** or **Partnership**.  The possible values depend on the `type`.  - For `type` **Trust**:  **CashManagementTrust**, **CorporateUnitTrust**, **DeceasedEstate**, **DiscretionaryInvestmentTrust**, **DiscretionaryServicesManagementTrust**, **DiscretionaryTradingTrust**, **FirstHomeSaverAccountsTrust**, **FixedTrust**, **FixedUnitTrust**, **HybridTrust**, **ListedPublicUnitTrust**, **OtherTrust**, **PooledSuperannuationTrust**, **PublicTradingTrust**, or **UnlistedPublicUnitTrust**.  - For `type` **Partnership**: **LimitedPartnership**, **FamilyPartnership**, or **OtherPartnership**
    */
    'legalForm'?: LegalArrangementDetail.LegalFormEnum;
    /**
    * The legal name of the legal arrangement. Minimum length: 3 characters.
    */
    'name': string;
    /**
    * The registration number of the legal arrangement.
    */
    'registrationNumber'?: string;
    /**
    * The tax identification number of the legal arrangement.
    */
    'taxNumber'?: string;
    /**
    * The [type of legal arrangement](https://docs.adyen.com/platforms/verification-checks/legal-arrangements#types-of-legal-arrangements).  Possible values:  - **Association**   - **Partnership**   - **SoleProprietorship**   - **Trust**   
    */
    'type': LegalArrangementDetail.TypeEnum;
}

export namespace LegalArrangementDetail {
    export enum LegalFormEnum {
        CashManagementTrust = <any> 'CashManagementTrust',
        CorporateUnitTrust = <any> 'CorporateUnitTrust',
        DeceasedEstate = <any> 'DeceasedEstate',
        DiscretionaryInvestmentTrust = <any> 'DiscretionaryInvestmentTrust',
        DiscretionaryServicesManagementTrust = <any> 'DiscretionaryServicesManagementTrust',
        DiscretionaryTradingTrust = <any> 'DiscretionaryTradingTrust',
        FirstHomeSaverAccountsTrust = <any> 'FirstHomeSaverAccountsTrust',
        FixedTrust = <any> 'FixedTrust',
        FixedUnitTrust = <any> 'FixedUnitTrust',
        HybridTrust = <any> 'HybridTrust',
        ListedPublicUnitTrust = <any> 'ListedPublicUnitTrust',
        OtherTrust = <any> 'OtherTrust',
        PooledSuperannuationTrust = <any> 'PooledSuperannuationTrust',
        PublicTradingTrust = <any> 'PublicTradingTrust',
        UnlistedPublicUnitTrust = <any> 'UnlistedPublicUnitTrust',
        LimitedPartnership = <any> 'LimitedPartnership',
        FamilyPartnership = <any> 'FamilyPartnership',
        OtherPartnership = <any> 'OtherPartnership'
    }
    export enum TypeEnum {
        Association = <any> 'Association',
        Partnership = <any> 'Partnership',
        SoleProprietorship = <any> 'SoleProprietorship',
        Trust = <any> 'Trust'
    }
}