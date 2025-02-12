/*
* Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file
* except in compliance with the License. A copy of the License is located at
*
* http://aws.amazon.com/apache2.0/
*
* or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for
* the specific language governing permissions and limitations under the License.
*/

/* tslint:disable */
import * as runtime from 'ask-sdk-model-runtime';
export { runtime }

import ApiConfiguration = runtime.ApiConfiguration;
import ApiResponse = runtime.ApiResponse;
import AuthenticationConfiguration = runtime.AuthenticationConfiguration;
import BaseServiceClient = runtime.BaseServiceClient;
import LwaServiceClient = runtime.LwaServiceClient;
import createUserAgent = runtime.createUserAgent;

export namespace v0 {
    /**
     *
     * @interface
     */
    export interface BadRequestError {
        /**
         * Human readable description of error.
         */
        'message'?: string;
        /**
         * An array of violation messages.
         */
        'violations'?: Array<v0.Error>;
    }
}

export namespace v0 {
    /**
     *
     * @interface
     */
    export interface Error {
        /**
         * Error code that maps to an error message. Developers with different locales should be able to lookup the error description based on this code. 
         */
        'code'?: string;
        /**
         * Readable description of error.
         */
        'message': string;
    }
}

export namespace v0.catalog {
    /**
     *
     * @interface
     */
    export interface CatalogDetails {
        /**
         * Unique identifier of the added catalog object.
         */
        'id'?: string;
        /**
         * Title of the catalog.
         */
        'title'?: string;
        'type'?: v0.catalog.CatalogType;
        'usage'?: v0.catalog.CatalogUsage;
        /**
         * The date time when the catalog was last updated.
         */
        'lastUpdatedDate'?: string;
        /**
         * The date time when the catalog was created.
         */
        'createdDate'?: string;
        /**
         * The list of skill Ids associated with the catalog.
         */
        'associatedSkillIds'?: Array<string>;
    }
}

export namespace v0.catalog {
    /**
     *
     * @interface
     */
    export interface CatalogSummary {
        /**
         * Unique identifier of the added catalog object.
         */
        'id'?: string;
        /**
         * Title of the catalog.
         */
        'title'?: string;
        'type'?: v0.catalog.CatalogType;
        'usage'?: v0.catalog.CatalogUsage;
        /**
         * The date time when the catalog was last updated.
         */
        'lastUpdatedDate'?: string;
        /**
         * The date time when the catalog was created.
         */
        'createdDate'?: string;
        /**
         * The list of skill Ids associated with the catalog.
         */
        'associatedSkillIds'?: Array<string>;
    }
}

export namespace v0.catalog {
    /**
     * Type of catalog.
     * @enum
     */
    export type CatalogType = 'AMAZON.BroadcastChannel' | 'AMAZON.Genre' | 'AMAZON.MusicAlbum' | 'AMAZON.MusicGroup' | 'AMAZON.MusicPlaylist' | 'AMAZON.MusicRecording' | 'AMAZON.TerrestrialRadioChannel' | 'AMAZON.AudioRecording';
}

export namespace v0.catalog {
    /**
     * Usage of the catalog.
     * @enum
     */
    export type CatalogUsage = 'AlexaMusic.Catalog.BroadcastChannel' | 'AlexaMusic.Catalog.Genre' | 'AlexaMusic.Catalog.MusicAlbum' | 'AlexaMusic.Catalog.MusicGroup' | 'AlexaMusic.Catalog.MusicPlaylist' | 'AlexaMusic.Catalog.MusicRecording' | 'AlexaMusic.Catalog.TerrestrialRadioChannel' | 'AlexaTest.Catalog.AudioRecording';
}

export namespace v0.catalog {
    /**
     *
     * @interface
     */
    export interface CreateCatalogRequest {
        /**
         * Title of the catalog.
         */
        'title': string;
        'type': v0.catalog.CatalogType;
        'usage': v0.catalog.CatalogUsage;
        /**
         * ID of the vendor owning the catalog.
         */
        'vendorId': string;
    }
}

export namespace v0.catalog {
    /**
     * Information about catalogs.
     * @interface
     */
    export interface ListCatalogsResponse {
        '_links'?: v1.Links;
        /**
         * List of catalog summaries. 
         */
        'catalogs'?: Array<v0.catalog.CatalogSummary>;
        'isTruncated'?: boolean;
        'nextToken'?: string;
    }
}

export namespace v0.catalog.upload {
    /**
     *
     * @interface
     */
    export interface CompleteUploadRequest {
        /**
         * List of (eTag, part number) pairs for each part of the file uploaded.
         */
        'partETags'?: Array<v0.catalog.upload.PreSignedUrlItem>;
    }
}

export namespace v0.catalog.upload {
    /**
     *
     * @interface
     */
    export interface ContentUploadFileSummary {
        /**
         * If the file is available for download, presigned download URL can be used to download the file.
         */
        'presignedDownloadUrl'?: string;
        'status'?: v0.catalog.upload.FileUploadStatus;
    }
}

export namespace v0.catalog.upload {
    /**
     *
     * @interface
     */
    export interface ContentUploadSummary {
        /**
         * Unique identifier of the upload.
         */
        'id'?: string;
        /**
         * Provides a unique identifier of the catalog.
         */
        'catalogId'?: string;
        'status'?: v0.catalog.upload.UploadStatus;
        'createdDate'?: string;
        'lastUpdatedDate'?: string;
    }
}

export namespace v0.catalog.upload {
    /**
     *
     * @interface
     */
    export interface CreateContentUploadRequest {
        /**
         * Provides the number of parts the file will be split into. An equal number of presigned upload urls are generated in response to facilitate each part's upload.
         */
        'numberOfUploadParts'?: number;
    }
}

export namespace v0.catalog.upload {
    /**
     * Value of status depends on if file is available for download or not.
     * @enum
     */
    export type FileUploadStatus = 'PENDING' | 'AVAILABLE' | 'PURGED' | 'UNAVAILABLE';
}

export namespace v0.catalog.upload {
    /**
     *
     * @enum
     */
    export type IngestionStatus = 'PENDING' | 'IN_PROGRESS' | 'FAILED' | 'SUCCEEDED' | 'CANCELLED';
}

export namespace v0.catalog.upload {
    /**
     *
     * @enum
     */
    export type IngestionStepName = 'UPLOAD' | 'SCHEMA_VALIDATION';
}

export namespace v0.catalog.upload {
    /**
     *
     * @interface
     */
    export interface ListUploadsResponse {
        '_links'?: v1.Links;
        'isTruncated'?: boolean;
        'nextToken'?: string;
        /**
         * List of upload summaries.
         */
        'uploads'?: Array<v0.catalog.upload.ContentUploadSummary>;
    }
}

export namespace v0.catalog.upload {
    /**
     *
     * @interface
     */
    export interface PreSignedUrlItem {
        'eTag': string;
        'partNumber': number;
    }
}

export namespace v0.catalog.upload {
    /**
     * Single upload part to perform a partitioned (multipart) file upload.
     * @interface
     */
    export interface PresignedUploadPart {
        'url'?: string;
        'partNumber'?: number;
    }
}

export namespace v0.catalog.upload {
    /**
     * Represents a single step in the ingestion process of a new upload.
     * @interface
     */
    export interface UploadIngestionStep {
        'name': v0.catalog.upload.IngestionStepName;
        'status': v0.catalog.upload.IngestionStatus;
        /**
         * Represents the url for the file containing logs of ingestion step.
         */
        'logUrl'?: string;
        /**
         * This array will contain the errors occurred during the execution of step. Will be empty, if execution succeeded.
         */
        'errors': Array<v0.Error>;
    }
}

export namespace v0.catalog.upload {
    /**
     * Status of the entire upload.
     * @enum
     */
    export type UploadStatus = 'PENDING' | 'PROCESSING' | 'FAILED' | 'SUCCEEDED';
}

export namespace v0.developmentEvents.subscriber {
    /**
     *
     * @interface
     */
    export interface CreateSubscriberRequest {
        /**
         * Name of the subscriber.
         */
        'name'?: string;
        /**
         * The Vendor ID.
         */
        'vendorId'?: string;
        'endpoint'?: v0.developmentEvents.subscriber.Endpoint;
    }
}

export namespace v0.developmentEvents.subscriber {
    /**
     *
     * @interface
     */
    export interface Endpoint {
        /**
         * Uri of the endpoint that receives the notification.
         */
        'uri'?: string;
        'authorization'?: v0.developmentEvents.subscriber.EndpointAuthorization;
    }
}

export namespace v0.developmentEvents.subscriber {
   /**
    * Authorization information to be able to publish notification to specified endpoint.
    * @interface
    */
    export type EndpointAuthorization = v0.developmentEvents.subscriber.EndpointAwsAuthorization;
}

export namespace v0.developmentEvents.subscriber {
    /**
     * Type of authorization (e.g. AWS IAM, OAuth).
     * @enum
     */
    export type EndpointAuthorizationType = 'AWS_IAM';
}

export namespace v0.developmentEvents.subscriber {
    /**
     *
     * @interface
     */
    export interface ListSubscribersResponse {
        '_links'?: v1.Links;
        'nextToken'?: string;
        /**
         * List containing subscriber summary.
         */
        'subscribers'?: Array<v0.developmentEvents.subscriber.SubscriberSummary>;
    }
}

export namespace v0.developmentEvents.subscriber {
    /**
     * Information about the subscriber.
     * @interface
     */
    export interface SubscriberInfo {
        /**
         * Unique identifier of the subscriber resource.
         */
        'subscriberId'?: string;
        /**
         * Name of the subscriber.
         */
        'name'?: string;
        'endpoint'?: v0.developmentEvents.subscriber.Endpoint;
    }
}

export namespace v0.developmentEvents.subscriber {
    /**
     * Status of the subscriber. This enum may get extended with new values in future. Clients are expected to gracefully handle any unknown values.
     * @enum
     */
    export type SubscriberStatus = 'ACTIVE' | 'INACTIVE';
}

export namespace v0.developmentEvents.subscriber {
    /**
     *
     * @interface
     */
    export interface SubscriberSummary {
        /**
         * Unique identifier of the subscriber resource.
         */
        'subscriberId'?: string;
        /**
         * Name of the subscriber.
         */
        'name'?: string;
        'status'?: v0.developmentEvents.subscriber.SubscriberStatus;
        /**
         * Client Id of the subscriber resource.
         */
        'clientId'?: string;
        'endpoint'?: v0.developmentEvents.subscriber.Endpoint;
    }
}

export namespace v0.developmentEvents.subscriber {
    /**
     *
     * @interface
     */
    export interface UpdateSubscriberRequest {
        /**
         * Name of the subscriber.
         */
        'name'?: string;
        'endpoint'?: v0.developmentEvents.subscriber.Endpoint;
    }
}

export namespace v0.developmentEvents.subscription {
    /**
     *
     * @interface
     */
    export interface CreateSubscriptionRequest {
        /**
         * Name of the subscription.
         */
        'name': string;
        /**
         * The list of events that the subscriber should be notified for.
         */
        'events': Array<v0.developmentEvents.subscription.Event>;
        /**
         * The vendorId of the event publisher.
         */
        'vendorId': string;
        /**
         * The id of the subscriber that would receive the events.
         */
        'subscriberId': string;
    }
}

export namespace v0.developmentEvents.subscription {
    /**
     * Represents an event that the subscriber is interested in. The event is of the format EventCategory.OPERATION. You can use wildcard event 'AlexaDevelopmentEvent.All' for recieving all AlexaDevelopmentEvent notifications listed below. We do not support 'AlexaCustomerFeedbackEvent.All' at this point as we only have one event in this category.   * 'AlexaDevelopmentEvent.ManifestUpdate' - The event representing the status of the update request on the Manifest.   * 'AlexaDevelopmentEvent.SkillPublish' -   The event representing the status of the skill publish process.   * 'AlexaDevelopmentEvent.SkillCertification' -   The event represents if a skill has been certified or not.   * 'AlexaDevelopmentEvent.InteractionModelUpdate' -   The event represents the status of an Interaction Model build for a particular locale.   * 'AlexaDevelopmentEvent.All' - A wildcard event name that allows subscription to all the existing events. While using this, you must not specify any other event name. AlexaDevelopmentEvent.All avoids the need of specifying every development event name in order to receive all events pertaining to a vendor account. Similarly, it avoids the need of updating an existing subscription to be able to receive new events, whenever supproted by notification service. Test Subscriber API cannot use this wildcard. Please make sure that your code can gracefully handle new/previously unknown events, if you are using this wildcard.   * 'AlexaCustomerFeedbackEvent.SkillReviewPublish' - The event represents the publishing of a new/updated customer review for a skill on the skill store. 
     * @enum
     */
    export type Event = 'AlexaDevelopmentEvent.ManifestUpdate' | 'AlexaDevelopmentEvent.SkillPublish' | 'AlexaDevelopmentEvent.SkillCertification' | 'AlexaDevelopmentEvent.InteractionModelUpdate' | 'AlexaDevelopmentEvent.All' | 'AlexaCustomerFeedbackEvent.SkillReviewPublish';
}

export namespace v0.developmentEvents.subscription {
    /**
     *
     * @interface
     */
    export interface ListSubscriptionsResponse {
        '_links'?: v1.Links;
        'nextToken'?: string;
        /**
         * List of subscription summaries.
         */
        'subscriptions'?: Array<v0.developmentEvents.subscription.SubscriptionSummary>;
    }
}

export namespace v0.developmentEvents.subscription {
    /**
     *
     * @interface
     */
    export interface SubscriptionInfo {
        /**
         * Name of the subscription.
         */
        'name'?: string;
        /**
         * Unique identifier of the subscription resource.
         */
        'subscriptionId'?: string;
        /**
         * Subscriber Id of the event-receiver.
         */
        'subscriberId'?: string;
        /**
         * Vendor Id of the event-publisher.
         */
        'vendorId'?: string;
        /**
         * The list of events that the subscriber should be notified for.
         */
        'events'?: Array<v0.developmentEvents.subscription.Event>;
    }
}

export namespace v0.developmentEvents.subscription {
    /**
     *
     * @interface
     */
    export interface SubscriptionSummary {
        /**
         * Name of the subscription.
         */
        'name'?: string;
        /**
         * Unique identifier of the subscription resource.
         */
        'subscriptionId'?: string;
        /**
         * Subscriber Id of the event-reciever.
         */
        'subscriberId'?: string;
        /**
         * VendorId of the event-publisher.
         */
        'vendorId'?: string;
        /**
         * The list of events that the subscriber should be notified for.
         */
        'events'?: Array<v0.developmentEvents.subscription.Event>;
    }
}

export namespace v0.developmentEvents.subscription {
    /**
     *
     * @interface
     */
    export interface UpdateSubscriptionRequest {
        /**
         * Name of the subscription.
         */
        'name': string;
        /**
         * The list of events that the subscriber should be notified for.
         */
        'events': Array<v0.developmentEvents.subscription.Event>;
    }
}

export namespace v0.eventSchema {
    /**
     * Represents an actor that submitted a request causing development notification event. 
     * @interface
     */
    export interface ActorAttributes {
        /**
         * Identifies an Amazon Customer who submitted a request corresponding to the generated event. 
         */
        'customerId'?: string;
    }
}

export namespace v0.eventSchema {
   /**
    * Represents attributes common to all development notifications. 
    * @interface
    */
    export type BaseSchema = v0.eventSchema.AlexaDevelopmentEvent.InteractionModelUpdate | v0.eventSchema.AlexaCustomerFeedbackEvent.SkillReviewPublish | v0.eventSchema.AlexaDevelopmentEvent.SkillPublish | v0.eventSchema.AlexaDevelopmentEvent.ManifestUpdate | v0.eventSchema.AlexaDevelopmentEvent.SkillCertification;
}

export namespace v0.eventSchema {
    /**
     * Interaction model event specific attributes. 
     * @interface
     */
    export interface InteractionModelEventAttributes {
        'status'?: v0.eventSchema.RequestStatus;
        'actor'?: v0.eventSchema.ActorAttributes;
        'interactionModel'?: v0.eventSchema.InteractionModelAttributes;
        'subscription'?: v0.eventSchema.SubscriptionAttributes;
    }
}

export namespace v0.eventSchema {
    /**
     * Represents the completion status of the request. 
     * @enum
     */
    export type RequestStatus = 'SUCCEEDED' | 'FAILED';
}

export namespace v0.eventSchema {
    /**
     * Represents a set of attributes specific to an Alexa Skill. 
     * @interface
     */
    export interface SkillAttributes {
        /**
         * Unique identifier of an Alexa skill. 
         */
        'skillId'?: string;
        /**
         * Unique identifier of vendor account to which this skill belongs. 
         */
        'vendorId'?: string;
    }
}

export namespace v0.eventSchema {
    /**
     * Skill event specific attributes. 
     * @interface
     */
    export interface SkillEventAttributes {
        'status'?: v0.eventSchema.RequestStatus;
        'actor'?: v0.eventSchema.ActorAttributes;
        'skill'?: v0.eventSchema.SkillAttributes;
        'subscription'?: v0.eventSchema.SubscriptionAttributes;
    }
}

export namespace v0.eventSchema {
    /**
     * Represents attributes of a customer review for a skill. 
     * @interface
     */
    export interface SkillReviewAttributes {
        /**
         * Unique review id associated with a customer review for a skill. 
         */
        'reviewId'?: string;
        /**
         * Link to the customer review on Amazon retail website. 
         */
        'url'?: string;
        /**
         * StarRating provided by the customer in the review. It is always a natural number from 1 to 5 (inclusive of 1 and 5). 
         */
        'starRating'?: string;
    }
}

export namespace v0.eventSchema {
    /**
     * Skill Review by customer event specific attributes. 
     * @interface
     */
    export interface SkillReviewEventAttributes {
        'skill'?: v0.eventSchema.SkillAttributes;
        'subscription'?: v0.eventSchema.SubscriptionAttributes;
        'review'?: v0.eventSchema.SkillReviewAttributes;
    }
}

export namespace v0.eventSchema {
    /**
     * Represents attributes of a subscription for development notification. 
     * @interface
     */
    export interface SubscriptionAttributes {
        /**
         * Unique subscription id that triggered the development notification event. 
         */
        'subscriptionId'?: string;
    }
}

export namespace v1 {
    /**
     *
     * @interface
     */
    export interface BadRequestError {
        /**
         * Human readable description of error.
         */
        'message'?: string;
        /**
         * An array of violation messages.
         */
        'violations'?: Array<v1.Error>;
    }
}

export namespace v1 {
   /**
    *
    * @interface
    */
    export type Error = v1.skill.StandardizedError;
}

export namespace v1 {
    /**
     *
     * @interface
     */
    export interface Link {
        'href'?: string;
    }
}

export namespace v1 {
    /**
     * Links for the API navigation.
     * @interface
     */
    export interface Links {
        'self'?: v1.Link;
        'next'?: v1.Link;
    }
}

export namespace v1 {
    /**
     *
     * @enum
     */
    export type StageType = 'development' | 'live';
}

export namespace v1 {
    /**
     *
     * @enum
     */
    export type StageV2Type = 'live' | 'certified' | 'development';
}

export namespace v1.auditLogs {
    /**
     *
     * @interface
     */
    export interface AuditLog {
        /**
         * UUID that identifies a specific request.
         */
        'xAmznRequestId'?: string;
        /**
         * Date-Time when the request was made.
         */
        'timestamp'?: string;
        'client'?: v1.auditLogs.Client;
        'operation'?: v1.auditLogs.Operation;
        /**
         * Contains information about the resources affected in this request.
         */
        'resources'?: Array<v1.auditLogs.Resource>;
        'requester'?: v1.auditLogs.Requester;
        /**
         * HTTP Status Code returned by this request.
         */
        'httpResponseCode'?: number;
    }
}

export namespace v1.auditLogs {
    /**
     *
     * @interface
     */
    export interface AuditLogsRequest {
        /**
         * Vendor Id. See developer.amazon.com/mycid.html.
         */
        'vendorId': string;
        'requestFilters'?: v1.auditLogs.RequestFilters;
        'sortDirection'?: v1.auditLogs.SortDirection;
        'sortField'?: v1.auditLogs.SortField;
        'paginationContext'?: v1.auditLogs.RequestPaginationContext;
    }
}

export namespace v1.auditLogs {
    /**
     * Response to the Query Audit Logs API. It contains the collection of audit logs for the vendor, nextToken and other metadata related to the search query.
     * @interface
     */
    export interface AuditLogsResponse {
        'paginationContext'?: v1.auditLogs.ResponsePaginationContext;
        '_links'?: v1.Links;
        /**
         * List of audit logs for the vendor.
         */
        'auditLogs'?: Array<v1.auditLogs.AuditLog>;
    }
}

export namespace v1.auditLogs {
    /**
     * Contains information about the Client that this request was performed by.
     * @interface
     */
    export interface Client {
        'id'?: string;
        'name'?: string;
    }
}

export namespace v1.auditLogs {
    /**
     * Identifier for the application the developer used to manage their skills and skill-related resources. For OAuth applications, this is the OAuth Client Id.
     * @interface
     */
    export interface ClientFilter {
        'id'?: string;
    }
}

export namespace v1.auditLogs {
    /**
     * Object containing name and version.
     * @interface
     */
    export interface Operation {
        'name'?: string;
        'version'?: string;
    }
}

export namespace v1.auditLogs {
    /**
     * Name and version of the operation that the developer performed. For example, 'deleteSkill' and 'v1'. This is the same name used in the SMAPI SDK.
     * @interface
     */
    export interface OperationFilter {
        'name'?: string;
        'version'?: string;
    }
}

export namespace v1.auditLogs {
    /**
     * Request Filters for filtering audit logs.
     * @interface
     */
    export interface RequestFilters {
        /**
         * List of Client IDs for filtering.
         */
        'clients'?: Array<v1.auditLogs.ClientFilter>;
        /**
         * Filters for a list of operation names and versions.
         */
        'operations'?: Array<v1.auditLogs.OperationFilter>;
        /**
         * Filters for a list of resources and/or their types. See documentation for allowed types.
         */
        'resources'?: Array<v1.auditLogs.ResourceFilter>;
        'requesters'?: Array<v1.auditLogs.RequesterFilter>;
        /**
         * Sets the start time for this search. Any audit logs with timestamps after this time (inclusive) will be included in the response.
         */
        'startTime'?: string;
        /**
         * Sets the end time for this search. Any audit logs with timestamps before this time (exclusive) will be included in the result.
         */
        'endTime'?: string;
        /**
         * Filters for HTTP response codes. For example, '200' or '503'
         */
        'httpResponseCodes'?: Array<string>;
    }
}

export namespace v1.auditLogs {
    /**
     * This object includes nextToken and maxResults.
     * @interface
     */
    export interface RequestPaginationContext {
        /**
         * When the response to this API call is truncated, the response includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that this API understands. Token has expiry of 1 hour.
         */
        'nextToken'?: string;
        /**
         * Sets the maximum number of results returned in the response body. If you want to retrieve more or less than the default of 50 results, you can add this parameter to your request. maxResults can exceed the upper limit of 250 but we will not return more items than that. The response might contain fewer results than maxResults for purpose of keeping SLA or because there are not enough items, but it will never contain more.
         */
        'maxResults'?: number;
    }
}

export namespace v1.auditLogs {
    /**
     * The user that performed the operation.
     * @interface
     */
    export interface Requester {
        /**
         * LWA User ID. https://developer.amazon.com/docs/login-with-amazon/obtain-customer-profile.html
         */
        'userId'?: string;
    }
}

export namespace v1.auditLogs {
    /**
     * Filter for the requester of the operation.
     * @interface
     */
    export interface RequesterFilter {
        /**
         * LoginWithAmazon User ID.
         */
        'userId'?: string;
    }
}

export namespace v1.auditLogs {
    /**
     * Resource that the developer operated on. This includes both the type and ID of the resource.
     * @interface
     */
    export interface Resource {
        'id'?: string;
        'type'?: string;
    }
}

export namespace v1.auditLogs {
    /**
     * Resource that the developer operated on. Both do not need to be provided.
     * @interface
     */
    export interface ResourceFilter {
        'id'?: string;
        'type'?: v1.auditLogs.ResourceTypeEnum;
    }
}

export namespace v1.auditLogs {
    /**
     *
     * @enum
     */
    export type ResourceTypeEnum = 'Skill' | 'SkillCatalog' | 'InSkillProduct' | 'Import' | 'Export';
}

export namespace v1.auditLogs {
    /**
     * This object contains the next token used to load the next page of the result.
     * @interface
     */
    export interface ResponsePaginationContext {
        /**
         * This token can be used to load the next page of the result.
         */
        'nextToken'?: string;
    }
}

export namespace v1.auditLogs {
    /**
     * Sets the sorting direction of the result items. When set to 'ASC' these items are returned in ascending order of sortField value and when set to 'DESC' these items are returned in descending order of sortField value.
     * @enum
     */
    export type SortDirection = 'ASC' | 'DESC';
}

export namespace v1.auditLogs {
    /**
     * Sets the field on which the sorting would be applied.
     * @enum
     */
    export type SortField = 'timestamp' | 'operation' | 'resource.id' | 'resource.type' | 'requester.userId' | 'client.id' | 'httpResponseCode';
}

export namespace v1.catalog {
    /**
     *
     * @interface
     */
    export interface CreateContentUploadUrlRequest {
        /**
         * Provides the number of parts the file will be split into. An equal number of presigned upload urls are generated in response to facilitate each part's upload.
         */
        'numberOfUploadParts': number;
    }
}

export namespace v1.catalog {
    /**
     *
     * @interface
     */
    export interface CreateContentUploadUrlResponse {
        /**
         * Unique identifier for collection of generated urls.
         */
        'urlId': string;
        /**
         * Ordered list of presigned upload parts to perform a partitioned (multipart) file upload
         */
        'presignedUploadParts'?: Array<v1.catalog.PresignedUploadPartItems>;
    }
}

export namespace v1.catalog {
    /**
     *
     * @interface
     */
    export interface PresignedUploadPartItems {
        'url': string;
        'partNumber': number;
        'expiresAt': string;
    }
}

export namespace v1.catalog.upload {
   /**
    *
    * @interface
    */
    export type CatalogUploadBase = v1.catalog.upload.Location | v1.catalog.upload.PreSignedUrl;
}

export namespace v1.catalog.upload {
    /**
     *
     * @interface
     */
    export interface ContentUploadFileSummary {
        /**
         * If the file is available for download, downloadUrl can be used to download the file.
         */
        'downloadUrl': string;
        'expiresAt': string;
        'status': v1.catalog.upload.FileUploadStatus;
    }
}

export namespace v1.catalog.upload {
    /**
     * Value of status depends on if file is available for download or not.
     * @enum
     */
    export type FileUploadStatus = 'PENDING' | 'AVAILABLE' | 'PURGED' | 'UNAVAILABLE';
}

export namespace v1.catalog.upload {
    /**
     *
     * @interface
     */
    export interface GetContentUploadResponse {
        /**
         * Unique identifier of the upload
         */
        'id': string;
        /**
         * Unique identifier of the added catalog object
         */
        'catalogId': string;
        'status': v1.catalog.upload.UploadStatus;
        'createdDate': string;
        'lastUpdatedDate': string;
        'file': v1.catalog.upload.ContentUploadFileSummary;
        /**
         * List of different steps performed on the upload.
         */
        'ingestionSteps': Array<v1.catalog.upload.UploadIngestionStep>;
    }
}

export namespace v1.catalog.upload {
    /**
     *
     * @enum
     */
    export type IngestionStatus = 'PENDING' | 'IN_PROGRESS' | 'FAILED' | 'SUCCEEDED' | 'CANCELLED';
}

export namespace v1.catalog.upload {
    /**
     *
     * @enum
     */
    export type IngestionStepName = 'UPLOAD' | 'SCHEMA_VALIDATION';
}

export namespace v1.catalog.upload {
    /**
     *
     * @interface
     */
    export interface PreSignedUrlItem {
        'eTag'?: string;
        'partNumber'?: number;
    }
}

export namespace v1.catalog.upload {
    /**
     * Represents a single step in the multi-step ingestion process of a new upload.
     * @interface
     */
    export interface UploadIngestionStep {
        'name': v1.catalog.upload.IngestionStepName;
        'status': v1.catalog.upload.IngestionStatus;
        /**
         * Url for the file containing logs of ingestion step.
         */
        'logUrl'?: string;
        /**
         * This array will contain the violations occurred during the execution of step. Will be empty, if execution succeeded.
         */
        'violations': Array<v1.Error>;
    }
}

export namespace v1.catalog.upload {
    /**
     * Status of the entire upload.
     * @enum
     */
    export type UploadStatus = 'PENDING' | 'IN_PROGRESS' | 'FAILED' | 'SUCCEEDED';
}

export namespace v1.isp {
    /**
     * In-skill product skill association details.
     * @interface
     */
    export interface AssociatedSkillResponse {
        /**
         * List of skill IDs that correspond to the skills associated with the in-skill product. The associations are stage specific. A live association is created through successful skill certification.
         */
        'associatedSkillIds'?: Array<string>;
        '_links'?: v1.Links;
        'isTruncated'?: boolean;
        'nextToken'?: string;
    }
}

export namespace v1.isp {
    /**
     * Currency to use for in-skill product.
     * @enum
     */
    export type Currency = 'USD' | 'GBP' | 'EUR' | 'JPY';
}

export namespace v1.isp {
    /**
     * Custom prompts used for in-skill product purchasing options. Supports Speech Synthesis Markup Language (SSML), which can be used to control pronunciation, intonation, timing, and emotion.
     * @interface
     */
    export interface CustomProductPrompts {
        /**
         * Description of in-skill product heard before customer is prompted for purchase.
         */
        'purchasePromptDescription'?: string;
        /**
         * A description of the product that displays on the skill card in the Alexa app.
         */
        'boughtCardDescription'?: string;
    }
}

export namespace v1.isp {
    /**
     *
     * @enum
     */
    export type DistributionCountries = 'AF' | 'AX' | 'AL' | 'DZ' | 'AS' | 'AD' | 'AO' | 'AI' | 'AQ' | 'AG' | 'AR' | 'AM' | 'AW' | 'AU' | 'AT' | 'AZ' | 'BS' | 'BH' | 'BD' | 'BB' | 'BY' | 'BE' | 'BZ' | 'BJ' | 'BM' | 'BT' | 'BO' | 'BA' | 'BW' | 'BV' | 'BR' | 'IO' | 'BN' | 'BG' | 'BF' | 'BI' | 'KH' | 'CM' | 'CA' | 'CV' | 'KY' | 'CF' | 'TD' | 'CL' | 'CN' | 'CX' | 'CC' | 'CO' | 'KM' | 'CG' | 'CD' | 'CK' | 'CR' | 'HR' | 'CY' | 'CZ' | 'DK' | 'DJ' | 'DM' | 'DO' | 'EC' | 'EG' | 'SV' | 'GQ' | 'ER' | 'EE' | 'ET' | 'FK' | 'FO' | 'FJ' | 'FI' | 'FR' | 'GF' | 'PF' | 'TF' | 'GA' | 'GM' | 'GE' | 'DE' | 'GH' | 'GI' | 'GR' | 'GL' | 'GD' | 'GP' | 'GU' | 'GT' | 'GG' | 'GN' | 'GW' | 'GY' | 'HT' | 'HM' | 'VA' | 'HN' | 'HK' | 'HU' | 'IS' | 'IN' | 'ID' | 'IQ' | 'IE' | 'IM' | 'IL' | 'IT' | 'CI' | 'JM' | 'JP' | 'JE' | 'JO' | 'KZ' | 'KE' | 'KI' | 'KR' | 'KW' | 'KG' | 'LA' | 'LV' | 'LB' | 'LS' | 'LR' | 'LY' | 'LI' | 'LT' | 'LU' | 'MO' | 'MK' | 'MG' | 'MW' | 'MY' | 'MV' | 'ML' | 'MT' | 'MH' | 'MQ' | 'MR' | 'MU' | 'YT' | 'MX' | 'FM' | 'MD' | 'MC' | 'MN' | 'ME' | 'MS' | 'MA' | 'MZ' | 'MM' | 'NA' | 'NR' | 'NP' | 'NL' | 'AN' | 'NC' | 'NZ' | 'NI' | 'NE' | 'NG' | 'NU' | 'NF' | 'MP' | 'NO' | 'OM' | 'PK' | 'PW' | 'PS' | 'PA' | 'PG' | 'PY' | 'PE' | 'PH' | 'PN' | 'PL' | 'PT' | 'PR' | 'QA' | 'RE' | 'RO' | 'RU' | 'RW' | 'BL' | 'SH' | 'KN' | 'LC' | 'MF' | 'PM' | 'VC' | 'WS' | 'SM' | 'ST' | 'SA' | 'SN' | 'RS' | 'SC' | 'SL' | 'SG' | 'SK' | 'SI' | 'SB' | 'SO' | 'ZA' | 'GS' | 'ES' | 'LK' | 'SR' | 'SJ' | 'SZ' | 'SE' | 'CH' | 'TW' | 'TJ' | 'TZ' | 'TH' | 'TL' | 'TG' | 'TK' | 'TO' | 'TT' | 'TN' | 'TR' | 'TM' | 'TC' | 'TV' | 'UG' | 'UA' | 'AE' | 'GB' | 'US' | 'UM' | 'UY' | 'UZ' | 'VU' | 'VE' | 'VN' | 'VG' | 'VI' | 'WF' | 'EH' | 'YE' | 'ZM' | 'ZW';
}

export namespace v1.isp {
    /**
     * Whether or not the in-skill product is editable.
     * @enum
     */
    export type EditableState = 'EDITABLE' | 'NOT_EDITABLE';
}

export namespace v1.isp {
    /**
     * Defines the structure for an in-skill product.
     * @interface
     */
    export interface InSkillProductDefinition {
        /**
         * Version of in-skill product definition.
         */
        'version'?: string;
        'type'?: v1.isp.ProductType;
        /**
         * Developer selected in-skill product name. This is for developer reference only, it can be used to filter query results to identify a matching in-skill product.
         */
        'referenceName'?: string;
        'purchasableState'?: v1.isp.PurchasableState;
        'promotableState'?: v1.isp.PromotableState;
        'subscriptionInformation'?: v1.isp.SubscriptionInformation;
        'publishingInformation'?: v1.isp.PublishingInformation;
        'privacyAndCompliance'?: v1.isp.PrivacyAndCompliance;
        /**
         * Special instructions provided by the developer to test the in-skill product.
         */
        'testingInstructions'?: string;
    }
}

export namespace v1.isp {
    /**
     * Defines In-skill product response.
     * @interface
     */
    export interface InSkillProductDefinitionResponse {
        'inSkillProductDefinition'?: v1.isp.InSkillProductDefinition;
    }
}

export namespace v1.isp {
    /**
     * Information about the in-skill product that is not editable.
     * @interface
     */
    export interface InSkillProductSummary {
        'type'?: v1.isp.ProductType;
        /**
         * primary identifier of in-skill product.
         */
        'productId'?: string;
        /**
         * Developer selected in-skill product name. This is for developer reference only, it can be used to filter query results to identify a matching in-skill product.
         */
        'referenceName'?: string;
        /**
         * Date of last update.
         */
        'lastUpdated'?: string;
        'nameByLocale'?: { [key: string]: string; };
        'status'?: v1.isp.Status;
        'stage'?: v1.StageType;
        'editableState'?: v1.isp.EditableState;
        'purchasableState'?: v1.isp.PurchasableState;
        'promotableState'?: v1.isp.PromotableState;
        '_links'?: v1.isp.IspSummaryLinks;
        /**
         * In-skill product pricing information.
         */
        'pricing'?: { [key: string]: v1.isp.SummaryMarketplacePricing; };
    }
}

export namespace v1.isp {
    /**
     * In-skill product summary response.
     * @interface
     */
    export interface InSkillProductSummaryResponse {
        'inSkillProductSummary'?: v1.isp.InSkillProductSummary;
    }
}

export namespace v1.isp {
    /**
     *
     * @interface
     */
    export interface IspSummaryLinks {
        'self'?: v1.Link;
    }
}

export namespace v1.isp {
    /**
     * List of in-skill products.
     * @interface
     */
    export interface ListInSkillProduct {
        '_links'?: v1.Links;
        /**
         * Information for each in-skill product.
         */
        'inSkillProducts'?: Array<v1.isp.InSkillProductSummary>;
        'isTruncated'?: boolean;
        'nextToken'?: string;
    }
}

export namespace v1.isp {
    /**
     * List of in-skill product response.
     * @interface
     */
    export interface ListInSkillProductResponse {
        'inSkillProductSummaryList'?: v1.isp.ListInSkillProduct;
    }
}

export namespace v1.isp {
    /**
     * Defines the structure for localized privacy and compliance.
     * @interface
     */
    export interface LocalizedPrivacyAndCompliance {
        /**
         * Link to the privacy policy that applies to this in-skill product.
         */
        'privacyPolicyUrl'?: string;
    }
}

export namespace v1.isp {
    /**
     * Defines the structure for locale specific publishing information in the in-skill product definition.
     * @interface
     */
    export interface LocalizedPublishingInformation {
        /**
         * Name of the in-skill product that is heard by customers and displayed in the Alexa app.
         */
        'name'?: string;
        /**
         * Uri for the small icon image of the in-skill product.
         */
        'smallIconUri'?: string;
        /**
         * Uri for the large icon image of the in-skill product.
         */
        'largeIconUri'?: string;
        /**
         * Short description of the in-skill product that displays on the in-skill product list page in the Alexa App.
         */
        'summary'?: string;
        /**
         * Description of the in-skill product's purpose and features, and how it works. Should describe any prerequisites like hardware or account requirements and detailed steps for the customer to get started. This description displays to customers on the in-skill product detail card in the Alexa app.
         */
        'description'?: string;
        /**
         * Example phrases appear on the in-skill product detail page and are the key utterances that customers can say to interact directly with the in-skill product.
         */
        'examplePhrases'?: Array<string>;
        /**
         * Search terms that can be used to describe the in-skill product. This helps customers find an in-skill product.
         */
        'keywords'?: Array<string>;
        'customProductPrompts'?: v1.isp.CustomProductPrompts;
    }
}

export namespace v1.isp {
    /**
     * In-skill product pricing information for a marketplace.
     * @interface
     */
    export interface MarketplacePricing {
        /**
         * Date when in-skill product is available to customers for both purchase and use. Prior to this date the in-skill product will appear unavailable to customers and will not be purchasable.
         */
        'releaseDate'?: string;
        'defaultPriceListing'?: v1.isp.PriceListing;
    }
}

export namespace v1.isp {
    /**
     * Price listing information for in-skill product.
     * @interface
     */
    export interface PriceListing {
        /**
         * Defines the price of an in-skill product. The list price should be your suggested price, not including any VAT or similar taxes. Taxes are included in the final price to end users.
         */
        'price'?: number;
        'currency'?: v1.isp.Currency;
    }
}

export namespace v1.isp {
    /**
     * Defines the structure for privacy and compliance.
     * @interface
     */
    export interface PrivacyAndCompliance {
        /**
         * Defines the structure for locale specific privacy and compliance.
         */
        'locales'?: { [key: string]: v1.isp.LocalizedPrivacyAndCompliance; };
    }
}

export namespace v1.isp {
    /**
     * Product ID information.
     * @interface
     */
    export interface ProductResponse {
        /**
         * ID of the in-skill product created.
         */
        'productId'?: string;
    }
}

export namespace v1.isp {
    /**
     * Type of in-skill product.
     * @enum
     */
    export type ProductType = 'SUBSCRIPTION' | 'ENTITLEMENT' | 'CONSUMABLE';
}

export namespace v1.isp {
    /**
     * Promote this ISP on Amazon channels such as Amazon.com. Enabling this setting will allow customers to view ISP detail pages and purchase the ISP on Amazon.com.
     * @enum
     */
    export type PromotableState = 'IN_SKILL_ONLY' | 'ALL_AMAZON_CHANNELS';
}

export namespace v1.isp {
    /**
     * Defines the structure for in-skill product publishing information.
     * @interface
     */
    export interface PublishingInformation {
        /**
         * Defines the structure for locale specific publishing information for an in-skill product.
         */
        'locales'?: { [key: string]: v1.isp.LocalizedPublishingInformation; };
        /**
         * List of countries where the in-skill product is available.
         */
        'distributionCountries'?: Array<v1.isp.DistributionCountries>;
        /**
         * Defines the structure for in-skill product pricing.
         */
        'pricing'?: { [key: string]: v1.isp.MarketplacePricing; };
        'taxInformation'?: v1.isp.TaxInformation;
    }
}

export namespace v1.isp {
    /**
     * Whether or not the in-skill product is purchasable by customers. A product that is not purchasable will prevent new customers from being prompted to purchase the product. Customers who already own the product will see no effect and continue to have access to the product features.
     * @enum
     */
    export type PurchasableState = 'PURCHASABLE' | 'NOT_PURCHASABLE';
}

export namespace v1.isp {
    /**
     * Current status of in-skill product.
     * @enum
     */
    export type Status = 'INCOMPLETE' | 'COMPLETE' | 'CERTIFICATION' | 'PUBLISHED' | 'SUPPRESSED';
}

export namespace v1.isp {
    /**
     * Defines the structure for in-skill product subscription information.
     * @interface
     */
    export interface SubscriptionInformation {
        'subscriptionPaymentFrequency'?: v1.isp.SubscriptionPaymentFrequency;
        /**
         * Days of free trial period for subscription. Max allowed is 365 days.
         */
        'subscriptionTrialPeriodDays'?: number;
    }
}

export namespace v1.isp {
    /**
     * Localized in-skill product pricing information.
     * @interface
     */
    export interface SummaryMarketplacePricing {
        /**
         * Date when in-skill product is available to customers for both purchase and use. Prior to this date the in-skill product will appear unavailable to customers and will not be purchasable.
         */
        'releaseDate'?: string;
        'defaultPriceListing'?: v1.isp.SummaryPriceListing;
    }
}

export namespace v1.isp {
    /**
     * Price listing information for in-skill product.
     * @interface
     */
    export interface SummaryPriceListing {
        /**
         * The price of an in-skill product.
         */
        'price'?: number;
        /**
         * The prime price of an in-skill product.
         */
        'primeMemberPrice'?: number;
        'currency'?: v1.isp.Currency;
    }
}

export namespace v1.isp {
    /**
     * Defines the structure for in-skill product tax information.
     * @interface
     */
    export interface TaxInformation {
        'category'?: v1.isp.TaxInformationCategory;
    }
}

export namespace v1.isp {
    /**
     * Select tax category that best describes in-skill product. Choice will be validated during certification process.
     * @enum
     */
    export type TaxInformationCategory = 'SOFTWARE' | 'STREAMING_AUDIO' | 'STREAMING_RADIO' | 'INFORMATION_SERVICES' | 'VIDEO' | 'PERIODICALS' | 'NEWSPAPERS';
}

export namespace v1.isp {
    /**
     *
     * @interface
     */
    export interface CreateInSkillProductRequest {
        /**
         * ID of the vendor owning the in-skill product.
         */
        'vendorId'?: string;
        'inSkillProductDefinition'?: v1.isp.InSkillProductDefinition;
    }
}

export namespace v1.isp {
    /**
     * The frequency in which payments are collected for the subscription.
     * @enum
     */
    export type SubscriptionPaymentFrequency = 'MONTHLY' | 'YEARLY';
}

export namespace v1.isp {
    /**
     *
     * @interface
     */
    export interface UpdateInSkillProductRequest {
        'inSkillProductDefinition'?: v1.isp.InSkillProductDefinition;
    }
}

export namespace v1.skill {
    /**
     * Action of a resource.
     * @enum
     */
    export type Action = 'CREATE' | 'UPDATE' | 'ASSOCIATE' | 'DISASSOCIATE';
}

export namespace v1.skill {
    /**
     * Type of the agreement that the customer must be compliant to.
     * @enum
     */
    export type AgreementType = 'EXPORT_COMPLIANCE';
}

export namespace v1.skill.AlexaHosted {
    /**
     * Alexa hosted skill create configuration
     * @interface
     */
    export interface AlexaHostedConfig {
        'runtime'?: v1.skill.AlexaHosted.HostedSkillRuntime;
        'region'?: v1.skill.AlexaHosted.HostedSkillRegion;
    }
}

export namespace v1.skill.AlexaHosted {
    /**
     *
     * @interface
     */
    export interface HostedSkillInfo {
        'repository'?: v1.skill.AlexaHosted.HostedSkillRepositoryInfo;
        'runtime'?: v1.skill.AlexaHosted.HostedSkillRuntime;
    }
}

export namespace v1.skill.AlexaHosted {
    /**
     * Alexa Hosted skill's metadata
     * @interface
     */
    export interface HostedSkillMetadata {
        'alexaHosted'?: v1.skill.AlexaHosted.HostedSkillInfo;
    }
}

export namespace v1.skill.AlexaHosted {
    /**
     * Customer's permission about Hosted skill features.
     * @interface
     */
    export interface HostedSkillPermission {
        'permission'?: v1.skill.AlexaHosted.HostedSkillPermissionType;
        'status'?: v1.skill.AlexaHosted.HostedSkillPermissionStatus;
        'actionUrl'?: string;
    }
}

export namespace v1.skill.AlexaHosted {
    /**
     *
     * @enum
     */
    export type HostedSkillPermissionStatus = 'ALLOWED' | 'NEW_USER_REGISTRATION_REQUIRED' | 'RESOURCE_LIMIT_EXCEEDED' | 'RATE_EXCEEDED';
}

export namespace v1.skill.AlexaHosted {
    /**
     *
     * @enum
     */
    export type HostedSkillPermissionType = 'NEW_SKILL';
}

export namespace v1.skill.AlexaHosted {
    /**
     * Hosted skill AWS region
     * @enum
     */
    export type HostedSkillRegion = 'US_EAST_1' | 'US_WEST_2' | 'EU_WEST_1';
}

export namespace v1.skill.AlexaHosted {
    /**
     *
     * @enum
     */
    export type HostedSkillRepository = 'GIT';
}

export namespace v1.skill.AlexaHosted {
    /**
     *
     * @interface
     */
    export interface HostedSkillRepositoryCredentials {
        /**
         * AWS Access Key ID used to access hosted skill repository
         */
        'username'?: string;
        /**
         * signed AWS Credentials used to access hosted skill repository
         */
        'password'?: string;
        /**
         * expiration time for the credentials
         */
        'expiresAt'?: string;
    }
}

export namespace v1.skill.AlexaHosted {
    /**
     * defines the structure for the hosted skill repository credentials response
     * @interface
     */
    export interface HostedSkillRepositoryCredentialsList {
        'repositoryCredentials'?: v1.skill.AlexaHosted.HostedSkillRepositoryCredentials;
    }
}

export namespace v1.skill.AlexaHosted {
    /**
     *
     * @interface
     */
    export interface HostedSkillRepositoryCredentialsRequest {
        'repository': v1.skill.AlexaHosted.HostedSkillRepositoryInfo;
    }
}

export namespace v1.skill.AlexaHosted {
    /**
     * Alexa Hosted Skill's Repository Information
     * @interface
     */
    export interface HostedSkillRepositoryInfo {
        'url': string;
        'type': v1.skill.AlexaHosted.HostedSkillRepository;
    }
}

export namespace v1.skill.AlexaHosted {
    /**
     * Hosted skill lambda runtime; Node.js 10.x is deprecated by Hosted Skill service as of July 30, 2021.
     * @enum
     */
    export type HostedSkillRuntime = 'NODE_10_X' | 'PYTHON_3_7' | 'NODE_12_X';
}

export namespace v1.skill.AlexaHosted {
    /**
     * Configurations for creating new hosted skill
     * @interface
     */
    export interface HostingConfiguration {
        'alexaHosted'?: v1.skill.AlexaHosted.AlexaHostedConfig;
    }
}

export namespace v1.skill {
    /**
     * Contains array which describes steps involved in a build. Elements (or build steps) are added to this array as they become IN_PROGRESS. 
     * @interface
     */
    export interface BuildDetails {
        /**
         * An array where each element represents a build step.
         */
        'steps'?: Array<v1.skill.BuildStep>;
    }
}

export namespace v1.skill {
    /**
     * Describes the status of a build step.
     * @interface
     */
    export interface BuildStep {
        'name'?: v1.skill.BuildStepName;
        'status'?: v1.skill.Status;
        'errors'?: Array<v1.skill.StandardizedError>;
    }
}

export namespace v1.skill {
    /**
     * Name of the build step. Possible values - * `DIALOG_MODEL_BUILD` - Build status for dialog model. * `LANGUAGE_MODEL_QUICK_BUILD` - Build status for FST model. * `LANGUAGE_MODEL_FULL_BUILD` - Build status for statistical model. 
     * @enum
     */
    export type BuildStepName = 'DIALOG_MODEL_BUILD' | 'LANGUAGE_MODEL_QUICK_BUILD' | 'LANGUAGE_MODEL_FULL_BUILD';
}

export namespace v1.skill {
    /**
     * Defines the request body for the cloneLocale API.
     * @interface
     */
    export interface CloneLocaleRequest {
        /**
         * Locale with the assets that will be cloned.
         */
        'sourceLocale': string;
        /**
         * A list of locale(s) where the assets will be copied to.
         */
        'targetLocales': Array<string>;
        /**
         * Can locale of skill be overwritten. Default value is DO_NOT_OVERWRITE.
         */
        'overwriteMode'?: v1.skill.OverwriteMode;
    }
}

export namespace v1.skill {
    /**
     * Status for a locale clone request CloneLocale API initiates cloning from a source locale to all target locales.   * `IN_PROGRESS` status would indicate the clone is still in progress.   * `SUCCEEDED` status would indicate the source locale was cloned successfully to all target locales.   * `INELIGIBLE` status would indicate the source locale was ineligible to be cloned to all target locales.   * `MIXED` status would indicate the different status of clone on different locales, and individual target locale statues should be checked.   * `FAILED` status would indicate the source locale was not cloned all target locales successfully despite the request being eligible due to internal service issues.   * `ROLLBACK_SUCCEEDED` status would indicate the skill was rolled back to the previous state in case any failure.   * `ROLLBACK_FAILED` status would indicate that in case of failure, the rollback to the previous state of the skill was attempted, but it failed. 
     * @enum
     */
    export type CloneLocaleRequestStatus = 'FAILED' | 'INELIGIBLE' | 'IN_PROGRESS' | 'MIXED' | 'ROLLBACK_FAILED' | 'ROLLBACK_SUCCEEDED' | 'SUCCEEDED';
}

export namespace v1.skill {
    /**
     * an object detailing the status of a locale clone request and if applicable the errors occurred when saving/building resources during clone process.
     * @interface
     */
    export interface CloneLocaleResourceStatus {
        'status'?: v1.skill.CloneLocaleStatus;
        'errors'?: Array<v1.skill.StandardizedError>;
    }
}

export namespace v1.skill {
    /**
     *
     * @enum
     */
    export type CloneLocaleStageType = 'development';
}

export namespace v1.skill {
    /**
     * Status for a locale clone on a particular target locale   * `IN_PROGRESS` status would indicate the clone is still in progress to the target locale.   * `SUCCEEDED` status would indicate the source locale was cloned successfully to the target locale.   * `INELIGIBLE` status would indicate the source locale was ineligible to be cloned the target locale.   * `FAILED` status would indicate the source locale was not cloned the target locale successfully.   * `ROLLBACK_SUCCEEDED` status would indicate the locale was rolled back to the previous state in case any failure.   * `ROLLBACK_FAILED` status would indicate that in case of failure, the rollback to the previous state of the locale was attempted, but it failed. 
     * @enum
     */
    export type CloneLocaleStatus = 'FAILED' | 'INELIGIBLE' | 'IN_PROGRESS' | 'ROLLBACK_FAILED' | 'ROLLBACK_SUCCEEDED' | 'SUCCEEDED';
}

export namespace v1.skill {
    /**
     * A mapping of statuses per locale detailing progress of resource or error if encountered.
     * @interface
     */
    export interface CloneLocaleStatusResponse {
        'status'?: v1.skill.CloneLocaleRequestStatus;
        'errors'?: Array<v1.skill.StandardizedError>;
        /**
         * Source locale which is cloned to target locales.
         */
        'sourceLocale'?: string;
        /**
         * Mapping of statuses per locale.
         */
        'targetLocales'?: { [key: string]: v1.skill.CloneLocaleResourceStatus; };
    }
}

export namespace v1.skill {
    /**
     * Defines the request body to create a rollback request
     * @interface
     */
    export interface CreateRollbackRequest {
        /**
         * The target skill version to rollback to.
         */
        'targetVersion': string;
    }
}

export namespace v1.skill {
    /**
     * Defines the response body when a rollback request is created
     * @interface
     */
    export interface CreateRollbackResponse {
        /**
         * Defines the identifier for a rollback request.
         */
        'rollbackRequestId'?: string;
    }
}

export namespace v1.skill {
    /**
     * SkillId information.
     * @interface
     */
    export interface CreateSkillResponse {
        /**
         * ID of the skill created.
         */
        'skillId'?: string;
    }
}

export namespace v1.skill {
    /**
     *
     * @interface
     */
    export interface ExportResponse {
        'status'?: v1.skill.ResponseStatus;
        'skill'?: v1.skill.ExportResponseSkill;
    }
}

export namespace v1.skill {
    /**
     * Defines the structure of the GetExport response.
     * @interface
     */
    export interface ExportResponseSkill {
        'eTag'?: string;
        'location'?: string;
        /**
         * ExpiresAt timestamp in milliseconds.
         */
        'expiresAt'?: string;
    }
}

export namespace v1.skill {
    /**
     * Format in which instance value is expected in.
     * @enum
     */
    export type Format = 'URI';
}

export namespace v1.skill {
    /**
     * Details about hosted skill deployment.
     * @interface
     */
    export interface HostedSkillDeploymentDetails {
        'commitId'?: string;
        'logUrl'?: string;
    }
}

export namespace v1.skill {
    /**
     * Defines the most recent deployment status for the Alexa hosted skill.
     * @interface
     */
    export interface HostedSkillDeploymentStatus {
        'lastUpdateRequest'?: v1.skill.HostedSkillDeploymentStatusLastUpdateRequest;
    }
}

export namespace v1.skill {
    /**
     * Contains attributes related to last modification request of a hosted skill deployment resource.
     * @interface
     */
    export interface HostedSkillDeploymentStatusLastUpdateRequest {
        'status'?: v1.skill.Status;
        'errors'?: Array<v1.skill.StandardizedError>;
        'warnings'?: Array<v1.skill.StandardizedError>;
        'deploymentDetails'?: v1.skill.HostedSkillDeploymentDetails;
    }
}

export namespace v1.skill {
    /**
     * Contains attributes related to last modification request of a hosted skill provisioning resource.
     * @interface
     */
    export interface HostedSkillProvisioningLastUpdateRequest {
        'status'?: v1.skill.Status;
        'errors'?: Array<v1.skill.StandardizedError>;
        'warnings'?: Array<v1.skill.StandardizedError>;
    }
}

export namespace v1.skill {
    /**
     * Defines the provisioning status for hosted skill.
     * @interface
     */
    export interface HostedSkillProvisioningStatus {
        'lastUpdateRequest'?: v1.skill.HostedSkillProvisioningLastUpdateRequest;
    }
}

export namespace v1.skill {
    /**
     * Dimensions of an image.
     * @interface
     */
    export interface ImageDimension {
        /**
         * Width of the image in pixels.
         */
        'widthInPixels'?: number;
        /**
         * Height of the image in pixels.
         */
        'heightInPixels'?: number;
    }
}

export namespace v1.skill {
    /**
     * On disk storage size of image.
     * @interface
     */
    export interface ImageSize {
        /**
         * Value measuring the size of the image.
         */
        'value'?: number;
        'unit'?: v1.skill.ImageSizeUnit;
    }
}

export namespace v1.skill {
    /**
     * Unit of measurement for size of image.
     * @enum
     */
    export type ImageSizeUnit = 'MB';
}

export namespace v1.skill {
    /**
     *
     * @interface
     */
    export interface ImportResponse {
        'status'?: v1.skill.ResponseStatus;
        'errors'?: Array<v1.skill.StandardizedError>;
        'warnings'?: Array<v1.skill.StandardizedError>;
        'skill'?: v1.skill.ImportResponseSkill;
    }
}

export namespace v1.skill {
    /**
     *
     * @interface
     */
    export interface ImportResponseSkill {
        'skillId'?: string;
        'eTag'?: string;
        'resources': Array<v1.skill.ResourceImportStatus>;
    }
}

export namespace v1.skill {
    /**
     * Structure representing properties of an instance of data. Definition will be either one of a booleanInstance, stringInstance, integerInstance, or compoundInstance.
     * @interface
     */
    export interface Instance {
        /**
         * Path that uniquely identifies the instance in the resource.
         */
        'propertyPath'?: string;
        'dataType'?: v1.skill.ValidationDataTypes;
        /**
         * String value of the instance. Incase of null, object or array the value field would be null or not present. Incase of string, boolean or integer dataType it will be the corresponding String value.
         */
        'value'?: string;
    }
}

export namespace v1.skill {
    /**
     * Contains attributes related to last modification (create/update) request of a resource.
     * @interface
     */
    export interface InteractionModelLastUpdateRequest {
        'status'?: v1.skill.Status;
        'errors'?: Array<v1.skill.StandardizedError>;
        'warnings'?: Array<v1.skill.StandardizedError>;
        'buildDetails'?: v1.skill.BuildDetails;
    }
}

export namespace v1.skill {
    /**
     * List of skills for the vendor.
     * @interface
     */
    export interface ListSkillResponse {
        '_links'?: v1.Links;
        /**
         * List of skill summaries. List might contain either one, two or three entries for a given skillId depending on the skill's publication history and the publication method. `Skill containing certified stage` * If a skill was never published to live, this list will contain two entries `:` one with stage 'development' and another with stage 'certified'. Both of these summaries will have same skillId. * For any skill that has been published to 'live', this list will contain three entries `:` one with stage 'development', one with stage `certified` and one with stage 'live'. All of these summaries will have same skillId. `Skill without certified stage` * If a skill was never published to live, this list will contain only one entry for the skill with stage as 'development'. * For any skill that has been published to 'live', this list will contain two entries `:` one with stage 'development' and another with stage 'live'. Both of these summaries will have same skillId. 
         */
        'skills'?: Array<v1.skill.SkillSummary>;
        'isTruncated'?: boolean;
        'nextToken'?: string;
    }
}

export namespace v1.skill {
    /**
     * List of all skill versions
     * @interface
     */
    export interface ListSkillVersionsResponse {
        '_links'?: v1.Links;
        /**
         * Skill version metadata
         */
        'skillVersions'?: Array<v1.skill.SkillVersion>;
        'isTruncated'?: boolean;
        'nextToken'?: string;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure of alexaForBusiness api in the skill manifest.
     * @interface
     */
    export interface AlexaForBusinessApis {
        /**
         * Contains an array of the supported <region> Objects.
         */
        'regions'?: { [key: string]: v1.skill.Manifest.Region; };
        'endpoint'?: v1.skill.Manifest.SkillManifestEndpoint;
        /**
         * Contains the list of supported interfaces.
         */
        'interfaces'?: Array<v1.skill.Manifest.AlexaForBusinessInterface>;
    }
}

export namespace v1.skill.Manifest {
    /**
     *
     * @interface
     */
    export interface AlexaForBusinessInterface {
        /**
         * Name of the interface.
         */
        'namespace': string;
        'version': v1.skill.Manifest.Version;
        /**
         * Contains a list of requests/messages that skill can handle.
         */
        'requests': Array<v1.skill.Manifest.AlexaForBusinessInterfaceRequest>;
    }
}

export namespace v1.skill.Manifest {
    /**
     *
     * @interface
     */
    export interface AlexaForBusinessInterfaceRequest {
        'name': v1.skill.Manifest.AlexaForBusinessInterfaceRequestName;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Name of the request.
     * @enum
     */
    export type AlexaForBusinessInterfaceRequestName = 'Search' | 'Create' | 'Update';
}

export namespace v1.skill.Manifest {
    /**
     * Details required for app linking use cases.
     * @interface
     */
    export interface AppLink {
        /**
         * Allows developers to declare their Skill will use Alexa App Links, and list relevant apps. This field is required when using the APP_LINK interface.
         */
        'linkedApplications'?: Array<v1.skill.Manifest.LinkedApplication>;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines a client authorized for a skill.
     * @interface
     */
    export interface AuthorizedClient {
        'authenticationProvider': string;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines an application for LWA security profile.
     * @interface
     */
    export interface AuthorizedClientLwaApplication {
        'type': string;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure for Sync Locales in the skill manifest. This is an optional property and Sync Locales will be disabled if not set.
     * @interface
     */
    export interface AutomaticClonedLocale {
        /**
         * List of language specific source locale to target locales mapping.
         */
        'locales': Array<v1.skill.Manifest.LocalesByAutomaticClonedLocale>;
    }
}

export namespace v1.skill.Manifest {
    /**
     * optional. Used by developer to opt in to Automatic Skill Distribution, a feature where a skill will automatically be published in new eligible locales from the same language (e.g. from \"en-US\" to \"en-CA\" and \"en-GB\"). Locales that the developer has already created will not be overwritten.
     * @interface
     */
    export interface AutomaticDistribution {
        /**
         * set to true to opt in to Automatic Skill Distribution. If false, then the skill will not be considered for Automatic Skill Distribution. Note that once a skill has gone through the automatic distribution process and this value is later set to false, any locales that were published through this feature will not be reverted. Any published locales will need to be suppressed manually via contacting DAG.
         */
        'isActive': boolean;
        /**
         * list of items pairing a language with a source locale. Required if isActive is set to true. For each language there must be exactly one source locale.
         */
        'sourceLocaleForLanguages'?: Array<v1.skill.Manifest.SourceLanguageForLocales>;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Details about how the app is listed on app store catalogs.
     * @interface
     */
    export interface CatalogInfo {
        'type': v1.skill.Manifest.CatalogType;
        /**
         * Identifier when accessing app in store.
         */
        'identifier': string;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Supported catalog
     * @enum
     */
    export type CatalogType = 'IOS_APP_STORE' | 'GOOGLE_PLAY_STORE';
}

export namespace v1.skill.Manifest {
    /**
     * Payload of the connection.
     * @interface
     */
    export interface ConnectionsPayload {
        /**
         * Type of the payload.
         */
        'type': string;
        /**
         * Version of the payload.
         */
        'version': string;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Currency to use for paid skill product.
     * @enum
     */
    export type Currency = 'USD';
}

export namespace v1.skill.Manifest.Custom {
    /**
     * Skill connection object.
     * @interface
     */
    export interface Connection {
        /**
         * Name of the connection.
         */
        'name': string;
        'payload': v1.skill.Manifest.ConnectionsPayload;
    }
}

export namespace v1.skill.Manifest.Custom {
    /**
     *
     * @enum
     */
    export type SuppressedInterface = 'AudioPlayer' | 'PlaybackController' | 'Display' | 'VideoPlayer' | 'GameEngine' | 'GadgetController' | 'CanHandleIntentRequest' | 'CanFulfillIntentRequest' | 'AlexaPresentationApl' | 'AlexaPresentationHtml' | 'AlexaDataStore' | 'AlexaDataStorePackageManager' | 'PhotoCaptureController' | 'VideoCaptureController' | 'UploadController' | 'CustomInterface' | 'AlexaAugmentationEffectsController';
}

export namespace v1.skill.Manifest.Custom {
   /**
    * Discriminator for target runtime objects.
    * @interface
    */
    export type TargetRuntime = v1.skill.Manifest.Custom.TargetRuntimeDevice;
}

export namespace v1.skill.Manifest.Custom {
    /**
     *
     * @enum
     */
    export type TargetRuntimeType = 'DEVICE';
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure for custom api of the skill.
     * @interface
     */
    export interface CustomApis {
        /**
         * Defines the set of target runtimes for this skill.
         */
        '_targetRuntimes'?: Array<v1.skill.Manifest.Custom.TargetRuntime>;
        /**
         * Object that contains <locale> Objects for each supported locale.
         */
        'locales'?: { [key: string]: v1.skill.Manifest.CustomLocalizedInformation; };
        /**
         * Contains an array of the supported <region> Objects.
         */
        'regions'?: { [key: string]: v1.skill.Manifest.Region; };
        'endpoint'?: v1.skill.Manifest.SkillManifestEndpoint;
        /**
         * Defines the structure for interfaces supported by the custom api of the skill.
         */
        'interfaces'?: Array<v1.skill.Manifest.Interface>;
        /**
         * List of provided tasks.
         */
        'tasks'?: Array<v1.skill.Manifest.CustomTask>;
        'connections'?: v1.skill.Manifest.CustomConnections;
        'dialogManagement'?: v1.skill.Manifest.DialogManagement;
        'appLink'?: v1.skill.Manifest.AppLink;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Supported connections.
     * @interface
     */
    export interface CustomConnections {
        /**
         * List of required connections.
         */
        'requires'?: Array<v1.skill.Manifest.Custom.Connection>;
        /**
         * List of provided connections.
         */
        'provides'?: Array<v1.skill.Manifest.Custom.Connection>;
    }
}

export namespace v1.skill.Manifest.CustomDialogManagement {
    /**
     * Specifies the initial dialog manager to field requests when a new skill session starts. If absent, this is assumed to be the default \"skill\" target
     * @interface
     */
    export interface SessionStartDelegationStrategy {
        'target': string;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the localized custom api information.
     * @interface
     */
    export interface CustomLocalizedInformation {
        'dialogManagement'?: v1.skill.Manifest.CustomLocalizedInformationDialogManagement;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines locale-specific dialog-management configuration for a skill.
     * @interface
     */
    export interface CustomLocalizedInformationDialogManagement {
        'sessionStartDelegationStrategy'?: v1.skill.Manifest.CustomDialogManagement.SessionStartDelegationStrategy;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Custom prompts used for paid skill product purchasing options. Supports Speech Synthesis Markup Language (SSML), which can be used to control pronunciation, intonation, timing, and emotion.
     * @interface
     */
    export interface CustomProductPrompts {
        /**
         * Description of the paid skill product heard before customer is prompted for purchase.
         */
        'purchasePromptDescription': string;
        /**
         * Description of the paid skill product that displays when the paid skill is purchased.
         */
        'purchaseConfirmationDescription': string;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the name and version of the task that the skill wants to handle.
     * @interface
     */
    export interface CustomTask {
        /**
         * Name of the task.
         */
        'name': string;
        /**
         * Version of the task.
         */
        'version': string;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure for demand response api of the skill.
     * @interface
     */
    export interface DemandResponseApis {
        /**
         * Contains an array of the supported <region> Objects.
         */
        'regions'?: { [key: string]: v1.skill.Manifest.LambdaRegion; };
        'endpoint'?: v1.skill.Manifest.LambdaEndpoint;
        /**
         * Defines the url for enrolling into a demand response program.
         */
        'enrollmentUrl'?: string;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Specifies the initial dialog manager to field requests when a new skill session starts. If absent this is assumed to be the default \\\"skill\\\" target.
     * @interface
     */
    export interface DialogDelegationStrategy {
        'target': string;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the dialog management configuration for the skill.
     * @interface
     */
    export interface DialogManagement {
        /**
         * List of dialog managers configured by the skill
         */
        'dialogManagers': Array<v1.skill.Manifest.DialogManager>;
        'sessionStartDelegationStrategy'?: v1.skill.Manifest.DialogDelegationStrategy;
    }
}

export namespace v1.skill.Manifest {
   /**
    * Individual dialog manager defined for the skill.
    * @interface
    */
    export type DialogManager = v1.skill.Manifest.AMAZONConversationsDialogManager;
}

export namespace v1.skill.Manifest {
    /**
     * The minimum version of the APML specification supported by the skill. If a device does not support a version greater than or equal to the version specified her then apmlVersion will not be passed inside the Display interface in the ASK request.
     * @enum
     */
    export type DisplayInterfaceApmlVersion = '0.2';
}

export namespace v1.skill.Manifest {
    /**
     * The minimum version of pre-defined templates supported by the skill. If a device does not support a version greater than or equal to the version specified her then templateVersion will not be passed inside the Display interface in the ASK request.
     * @enum
     */
    export type DisplayInterfaceTemplateVersion = '1';
}

export namespace v1.skill.Manifest {
    /**
     *
     * @enum
     */
    export type DistributionCountries = 'AF' | 'AX' | 'AL' | 'DZ' | 'AS' | 'AD' | 'AO' | 'AI' | 'AQ' | 'AG' | 'AR' | 'AM' | 'AW' | 'AU' | 'AT' | 'AZ' | 'BS' | 'BH' | 'BD' | 'BB' | 'BY' | 'BE' | 'BZ' | 'BJ' | 'BM' | 'BT' | 'BO' | 'BA' | 'BW' | 'BV' | 'BR' | 'IO' | 'BN' | 'BG' | 'BF' | 'BI' | 'KH' | 'CM' | 'CA' | 'CV' | 'KY' | 'CF' | 'TD' | 'CL' | 'CN' | 'CX' | 'CC' | 'CO' | 'KM' | 'CG' | 'CD' | 'CK' | 'CR' | 'HR' | 'CY' | 'CZ' | 'DK' | 'DJ' | 'DM' | 'DO' | 'EC' | 'EG' | 'SV' | 'GQ' | 'ER' | 'EE' | 'ET' | 'FK' | 'FO' | 'FJ' | 'FI' | 'FR' | 'GF' | 'PF' | 'TF' | 'GA' | 'GM' | 'GE' | 'DE' | 'GH' | 'GI' | 'GR' | 'GL' | 'GD' | 'GP' | 'GU' | 'GT' | 'GG' | 'GN' | 'GW' | 'GY' | 'HT' | 'HM' | 'VA' | 'HN' | 'HK' | 'HU' | 'IS' | 'IN' | 'ID' | 'IQ' | 'IE' | 'IM' | 'IL' | 'IT' | 'CI' | 'JM' | 'JP' | 'JE' | 'JO' | 'KZ' | 'KE' | 'KI' | 'KR' | 'KW' | 'KG' | 'LA' | 'LV' | 'LB' | 'LS' | 'LR' | 'LY' | 'LI' | 'LT' | 'LU' | 'MO' | 'MK' | 'MG' | 'MW' | 'MY' | 'MV' | 'ML' | 'MT' | 'MH' | 'MQ' | 'MR' | 'MU' | 'YT' | 'MX' | 'FM' | 'MD' | 'MC' | 'MN' | 'ME' | 'MS' | 'MA' | 'MZ' | 'MM' | 'NA' | 'NR' | 'NP' | 'NL' | 'AN' | 'NC' | 'NZ' | 'NI' | 'NE' | 'NG' | 'NU' | 'NF' | 'MP' | 'NO' | 'OM' | 'PK' | 'PW' | 'PS' | 'PA' | 'PG' | 'PY' | 'PE' | 'PH' | 'PN' | 'PL' | 'PT' | 'PR' | 'QA' | 'RE' | 'RO' | 'RU' | 'RW' | 'BL' | 'SH' | 'KN' | 'LC' | 'MF' | 'PM' | 'VC' | 'WS' | 'SM' | 'ST' | 'SA' | 'SN' | 'RS' | 'SC' | 'SL' | 'SG' | 'SK' | 'SI' | 'SB' | 'SO' | 'ZA' | 'GS' | 'ES' | 'LK' | 'SR' | 'SJ' | 'SZ' | 'SE' | 'CH' | 'TW' | 'TJ' | 'TZ' | 'TH' | 'TL' | 'TG' | 'TK' | 'TO' | 'TT' | 'TN' | 'TR' | 'TM' | 'TC' | 'TV' | 'UG' | 'UA' | 'AE' | 'GB' | 'US' | 'UM' | 'UY' | 'UZ' | 'VU' | 'VE' | 'VN' | 'VG' | 'VI' | 'WF' | 'EH' | 'YE' | 'ZM' | 'ZW';
}

export namespace v1.skill.Manifest {
    /**
     * What audience the skill should be distributed to. \"PUBLIC\" - available to all users. Has ASIN and can be enabled. \"PRIVATE\" - available to entitled users. Has ASIN and can be enabled. \"INTERNAL\" - has no ASIN and cannot be enabled by users. Internally managed skills. 
     * @enum
     */
    export type DistributionMode = 'PRIVATE' | 'PUBLIC';
}

export namespace v1.skill.Manifest {
    /**
     *
     * @interface
     */
    export interface EventName {
        'eventName'?: v1.skill.Manifest.EventNameType;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Name of the event to be subscribed to.
     * @enum
     */
    export type EventNameType = 'Legacy.AudioPlayerGui.LyricsViewedEvent' | 'Legacy.ListModel.DeleteItemRequest' | 'Legacy.MediaPlayer.SequenceModified' | 'Legacy.PlaybackController.ButtonCommand' | 'EffectsController.RequestEffectChangeRequest' | 'Legacy.ExternalMediaPlayer.RequestToken' | 'ITEMS_UPDATED' | 'Alexa.Video.Xray.ShowDetailsSuccessful' | 'PlaybackController.NextCommandIssued' | 'Legacy.MediaPlayer.PlaybackFinished' | 'Alexa.Camera.VideoCaptureController.CaptureFailed' | 'SKILL_DISABLED' | 'Alexa.Camera.VideoCaptureController.CancelCaptureFailed' | 'CustomInterfaceController.EventsReceived' | 'Legacy.DeviceNotification.NotificationStarted' | 'REMINDER_UPDATED' | 'AUDIO_ITEM_PLAYBACK_STOPPED' | 'Legacy.AuxController.InputActivityStateChanged' | 'LocalApplication.MShopPurchasing.Event' | 'Legacy.ExternalMediaPlayer.AuthorizationComplete' | 'LocalApplication.HHOPhotos.Event' | 'Alexa.Presentation.APL.UserEvent' | 'Legacy.AudioPlayer.PlaybackInterrupted' | 'Legacy.BluetoothNetwork.DeviceUnpairFailure' | 'IN_SKILL_PRODUCT_SUBSCRIPTION_ENDED' | 'Alexa.FileManager.UploadController.UploadFailed' | 'Legacy.BluetoothNetwork.DeviceConnectedFailure' | 'Legacy.AudioPlayer.AudioStutter' | 'Alexa.Camera.VideoCaptureController.CaptureStarted' | 'Legacy.Speaker.MuteChanged' | 'CardRenderer.DisplayContentFinished' | 'Legacy.SpeechSynthesizer.SpeechStarted' | 'AudioPlayer.PlaybackStopped' | 'Legacy.SoftwareUpdate.CheckSoftwareUpdateReport' | 'CardRenderer.DisplayContentStarted' | 'LocalApplication.NotificationsApp.Event' | 'AudioPlayer.PlaybackStarted' | 'Legacy.DeviceNotification.NotificationEnteredForground' | 'Legacy.DeviceNotification.SetNotificationFailed' | 'Legacy.AudioPlayer.PeriodicPlaybackProgressReport' | 'Legacy.HomeAutoWifiController.HttpNotified' | 'Alexa.Camera.PhotoCaptureController.CancelCaptureFailed' | 'SKILL_ACCOUNT_LINKED' | 'LIST_UPDATED' | 'Legacy.DeviceNotification.NotificationSync' | 'Legacy.SconeRemoteControl.VolumeDown' | 'Legacy.MediaPlayer.PlaybackPaused' | 'Legacy.Presentation.PresentationUserEvent' | 'PlaybackController.PlayCommandIssued' | 'Legacy.ListModel.UpdateItemRequest' | 'Messaging.MessageReceived' | 'Legacy.SoftwareUpdate.InitiateSoftwareUpdateReport' | 'AUDIO_ITEM_PLAYBACK_FAILED' | 'LocalApplication.DeviceMessaging.Event' | 'Alexa.Camera.PhotoCaptureController.CaptureFailed' | 'Legacy.AudioPlayer.PlaybackIdle' | 'Legacy.BluetoothNetwork.EnterPairingModeSuccess' | 'Legacy.AudioPlayer.PlaybackError' | 'Legacy.ListModel.GetPageByOrdinalRequest' | 'Legacy.MediaGrouping.GroupChangeResponseEvent' | 'Legacy.BluetoothNetwork.DeviceDisconnectedFailure' | 'Legacy.BluetoothNetwork.EnterPairingModeFailure' | 'Legacy.SpeechSynthesizer.SpeechInterrupted' | 'PlaybackController.PreviousCommandIssued' | 'Legacy.AudioPlayer.PlaybackFinished' | 'Legacy.System.UserInactivity' | 'Display.UserEvent' | 'Legacy.PhoneCallController.Event' | 'Legacy.DeviceNotification.SetNotificationSucceeded' | 'LocalApplication.Photos.Event' | 'LocalApplication.VideoExperienceService.Event' | 'Legacy.ContentManager.ContentPlaybackTerminated' | 'Legacy.PlaybackController.PlayCommand' | 'Legacy.PlaylistController.ErrorResponse' | 'Legacy.SconeRemoteControl.VolumeUp' | 'MessagingController.UpdateConversationsStatus' | 'Legacy.BluetoothNetwork.DeviceDisconnectedSuccess' | 'LocalApplication.Communications.Event' | 'AUDIO_ITEM_PLAYBACK_STARTED' | 'Legacy.BluetoothNetwork.DevicePairFailure' | 'LIST_DELETED' | 'Legacy.PlaybackController.ToggleCommand' | 'Legacy.BluetoothNetwork.DevicePairSuccess' | 'Legacy.MediaPlayer.PlaybackError' | 'AudioPlayer.PlaybackFinished' | 'Legacy.DeviceNotification.NotificationStopped' | 'Legacy.SipClient.Event' | 'Display.ElementSelected' | 'LocalApplication.MShop.Event' | 'Legacy.ListModel.AddItemRequest' | 'Legacy.BluetoothNetwork.ScanDevicesReport' | 'Legacy.MediaPlayer.PlaybackStopped' | 'Legacy.AudioPlayerGui.ButtonClickedEvent' | 'LocalApplication.AlexaVoiceLayer.Event' | 'Legacy.PlaybackController.PreviousCommand' | 'Legacy.AudioPlayer.InitialPlaybackProgressReport' | 'Legacy.BluetoothNetwork.DeviceConnectedSuccess' | 'LIST_CREATED' | 'Legacy.ActivityManager.ActivityContextRemovedEvent' | 'ALL_LISTS_CHANGED' | 'Legacy.AudioPlayer.PlaybackNearlyFinished' | 'Legacy.MediaGrouping.GroupChangeNotificationEvent' | 'LocalApplication.Sentry.Event' | 'SKILL_PROACTIVE_SUBSCRIPTION_CHANGED' | 'REMINDER_CREATED' | 'Alexa.Presentation.HTML.Event' | 'FitnessSessionController.FitnessSessionError' | 'Legacy.SconeRemoteControl.Next' | 'Alexa.Camera.VideoCaptureController.CaptureFinished' | 'Legacy.MediaPlayer.SequenceItemsRequested' | 'Legacy.PlaybackController.PauseCommand' | 'LocalApplication.AlexaVision.Event' | 'LocalApplication.Closet.Event' | 'Alexa.FileManager.UploadController.CancelUploadFailed' | 'Legacy.MediaPlayer.PlaybackResumed' | 'SKILL_PERMISSION_ACCEPTED' | 'FitnessSessionController.FitnessSessionPaused' | 'Legacy.AudioPlayer.PlaybackPaused' | 'Alexa.Presentation.HTML.LifecycleStateChanged' | 'LocalApplication.SipUserAgent.Event' | 'Legacy.MediaPlayer.PlaybackStarted' | 'REMINDER_STATUS_CHANGED' | 'MessagingController.UploadConversations' | 'ITEMS_DELETED' | 'Legacy.AuxController.PluggedStateChanged' | 'Legacy.AudioPlayer.PlaybackStarted' | 'Alexa.FileManager.UploadController.UploadStarted' | 'ITEMS_CREATED' | 'Legacy.ExternalMediaPlayer.Event' | 'LocalApplication.LocalMediaPlayer.Event' | 'LocalApplication.KnightContacts.Event' | 'LocalApplication.Calendar.Event' | 'Legacy.AlertsController.DismissCommand' | 'Legacy.AudioPlayer.PlaybackStutterFinished' | 'Legacy.SpeechSynthesizer.SpeechFinished' | 'Legacy.ExternalMediaPlayer.ReportDiscoveredPlayers' | 'LocalApplication.SipClient.Event' | 'Legacy.BluetoothNetwork.DeviceUnpairSuccess' | 'Legacy.Speaker.VolumeChanged' | 'CardRenderer.ReadContentFinished' | 'LocalApplication.HomeAutomationMedia.Event' | 'Legacy.BluetoothNetwork.CancelPairingMode' | 'LocalApplication.DigitalDash.Event' | 'CardRenderer.ReadContentStarted' | 'Legacy.GameEngine.GameInputEvent' | 'LocalApplication.LocalVoiceUI.Event' | 'Legacy.Microphone.AudioRecording' | 'LocalApplication.AlexaPlatformTestSpeechlet.Event' | 'Legacy.HomeAutoWifiController.SsdpServiceDiscovered' | 'Alexa.Camera.PhotoCaptureController.CancelCaptureFinished' | 'Legacy.HomeAutoWifiController.DeviceReconnected' | 'SKILL_ENABLED' | 'Alexa.Camera.VideoCaptureController.CancelCaptureFinished' | 'MessagingController.UpdateMessagesStatusRequest' | 'REMINDER_STARTED' | 'CustomInterfaceController.Expired' | 'LocalApplication.AvaPhysicalShopping.Event' | 'LocalApplication.WebVideoPlayer.Event' | 'Legacy.HomeAutoWifiController.SsdpServiceTerminated' | 'LocalApplication.FireflyShopping.Event' | 'Legacy.PlaybackController.NextCommand' | 'LocalApplication.Gallery.Event' | 'Alexa.Presentation.PresentationDismissed' | 'EffectsController.StateReceiptChangeRequest' | 'LocalApplication.Alexa.Translation.LiveTranslation.Event' | 'LocalApplication.AlexaNotifications.Event' | 'REMINDER_DELETED' | 'GameEngine.InputHandlerEvent' | 'Legacy.PlaylistController.Response' | 'LocalApplication.KnightHome.Event' | 'Legacy.ListRenderer.ListItemEvent' | 'AudioPlayer.PlaybackFailed' | 'LocalApplication.KnightHomeThingsToTry.Event' | 'Legacy.BluetoothNetwork.SetDeviceCategoriesFailed' | 'Legacy.ExternalMediaPlayer.Logout' | 'Alexa.FileManager.UploadController.UploadFinished' | 'Legacy.ActivityManager.FocusChanged' | 'Legacy.AlertsController.SnoozeCommand' | 'Legacy.SpeechRecognizer.WakeWordChanged' | 'Legacy.ListRenderer.GetListPageByToken' | 'MessagingController.UpdateSendMessageStatusRequest' | 'FitnessSessionController.FitnessSessionEnded' | 'Alexa.Presentation.APL.RuntimeError' | 'Legacy.ListRenderer.GetListPageByOrdinal' | 'FitnessSessionController.FitnessSessionResumed' | 'IN_SKILL_PRODUCT_SUBSCRIPTION_STARTED' | 'Legacy.DeviceNotification.DeleteNotificationSucceeded' | 'Legacy.SpeechSynthesizer.SpeechSynthesizerError' | 'Alexa.Video.Xray.ShowDetailsFailed' | 'Alexa.FileManager.UploadController.CancelUploadFinished' | 'Legacy.SconeRemoteControl.PlayPause' | 'Legacy.DeviceNotification.NotificationEnteredBackground' | 'SKILL_PERMISSION_CHANGED' | 'Legacy.AudioPlayer.Metadata' | 'Legacy.AudioPlayer.PlaybackStutterStarted' | 'AUDIO_ITEM_PLAYBACK_FINISHED' | 'EffectsController.RequestGuiChangeRequest' | 'FitnessSessionController.FitnessSessionStarted' | 'Legacy.PlaybackController.LyricsViewedEvent' | 'Legacy.ExternalMediaPlayer.Login' | 'PlaybackController.PauseCommandIssued' | 'Legacy.MediaPlayer.PlaybackIdle' | 'Legacy.SconeRemoteControl.Previous' | 'DeviceSetup.SetupCompleted' | 'Legacy.MediaPlayer.PlaybackNearlyFinished' | 'LocalApplication.todoRenderer.Event' | 'Legacy.BluetoothNetwork.SetDeviceCategoriesSucceeded' | 'Legacy.BluetoothNetwork.MediaControlSuccess' | 'Legacy.HomeAutoWifiController.SsdpDiscoveryFinished' | 'Alexa.Presentation.APL.LoadIndexListData' | 'IN_SKILL_PRODUCT_SUBSCRIPTION_RENEWED' | 'Legacy.BluetoothNetwork.MediaControlFailure' | 'Legacy.AuxController.EnabledStateChanged' | 'Legacy.FavoritesController.Response' | 'Legacy.ListModel.ListStateUpdateRequest' | 'Legacy.EqualizerController.EqualizerChanged' | 'Legacy.MediaGrouping.GroupSyncEvent' | 'Legacy.FavoritesController.Error' | 'Legacy.ListModel.GetPageByTokenRequest' | 'Legacy.ActivityManager.ActivityInterrupted' | 'Legacy.MeetingClientController.Event' | 'Legacy.Presentation.PresentationDismissedEvent' | 'Legacy.Spotify.Event' | 'Legacy.ExternalMediaPlayer.Error' | 'Legacy.AuxController.DirectionChanged' | 'AudioPlayer.PlaybackNearlyFinished' | 'Alexa.Camera.PhotoCaptureController.CaptureFinished' | 'Legacy.UDPController.BroadcastResponse' | 'Legacy.AudioPlayer.PlaybackResumed' | 'Legacy.DeviceNotification.DeleteNotificationFailed';
}

export namespace v1.skill.Manifest {
    /**
     *
     * @interface
     */
    export interface EventPublications {
        /**
         * Name of the event to publish.
         */
        'eventName'?: string;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Represents a request to automatically initialize an extension by a runtime.
     * @interface
     */
    export interface ExtensionInitializationRequest {
        /**
         * The extension's URI.
         */
        'uri': string;
        /**
         * Default initialization extension settings.
         */
        'settings'?: any;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Represents a request for a runtime extension. Extensions are optional enhancements to a runtime that provide additional sources of data, commands, and event handlers.
     * @interface
     */
    export interface ExtensionRequest {
        /**
         * The extension's URI.
         */
        'uri': string;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure of flash briefing api in the skill manifest.
     * @interface
     */
    export interface FlashBriefingApis {
        /**
         * Object that contains <locale> objects for each supported locale.
         */
        'locales': { [key: string]: v1.skill.Manifest.LocalizedFlashBriefingInfo; };
    }
}

export namespace v1.skill.Manifest {
    /**
     * Format of the feed content.
     * @enum
     */
    export type FlashBriefingContentType = 'TEXT' | 'AUDIO';
}

export namespace v1.skill.Manifest {
    /**
     * Type or subject of the content in the feed.
     * @enum
     */
    export type FlashBriefingGenre = 'HEADLINE_NEWS' | 'BUSINESS' | 'POLITICS' | 'ENTERTAINMENT' | 'TECHNOLOGY' | 'HUMOR' | 'LIFESTYLE' | 'SPORTS' | 'SCIENCE' | 'HEALTH_AND_FITNESS' | 'ARTS_AND_CULTURE' | 'PRODUCTIVITY_AND_UTILITIES' | 'OTHER';
}

export namespace v1.skill.Manifest {
    /**
     * Tells how often the feed has new content.
     * @enum
     */
    export type FlashBriefingUpdateFrequency = 'HOURLY' | 'DAILY' | 'WEEKLY';
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure for paid skill product free trial information.
     * @interface
     */
    export interface FreeTrialInformation {
        /**
         * Defines the free trial period for the paid skill product, in ISO_8601#Durations format.
         */
        'freeTrialDuration': string;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Localized App name
     * @interface
     */
    export interface FriendlyName {
        /**
         * Default app name
         */
        'default': string;
        /**
         * Localized app names.
         */
        'localizedNames'?: Array<v1.skill.Manifest.LocalizedName>;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Specifies if gadget support is required/optional for this skill to work.
     * @enum
     */
    export type GadgetSupportRequirement = 'REQUIRED' | 'OPTIONAL';
}

export namespace v1.skill.Manifest {
    /**
     *
     * @interface
     */
    export interface HealthInterface {
        /**
         * Name of the interface.
         */
        'namespace': string;
        /**
         * defines the version of skill interface.
         */
        'version'?: string;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure of household list api in the skill manifest.
     * @interface
     */
    export interface HouseHoldList {
    }
}

export namespace v1.skill.Manifest {
   /**
    *
    * @interface
    */
    export type Interface = v1.skill.Manifest.AlexaPresentationAplInterface | v1.skill.Manifest.AppLinkInterface | v1.skill.Manifest.AlexaPresentationHtmlInterface | v1.skill.Manifest.AudioInterface | v1.skill.Manifest.GameEngineInterface | v1.skill.Manifest.AppLinkV2Interface | v1.skill.Manifest.DisplayInterface | v1.skill.Manifest.GadgetControllerInterface | v1.skill.Manifest.VideoAppInterface;
}

export namespace v1.skill.Manifest {
    /**
     * Name of the interface.
     * @enum
     */
    export type InterfaceType = 'AUDIO_PLAYER' | 'VIDEO_APP' | 'RENDER_TEMPLATE' | 'GAME_ENGINE' | 'GADGET_CONTROLLER' | 'CAN_FULFILL_INTENT_REQUEST' | 'ALEXA_PRESENTATION_APL' | 'ALEXA_CAMERA_PHOTO_CAPTURE_CONTROLLER' | 'ALEXA_CAMERA_VIDEO_CAPTURE_CONTROLLER' | 'ALEXA_FILE_MANAGER_UPLOAD_CONTROLLER' | 'CUSTOM_INTERFACE' | 'ALEXA_AUGMENTATION_EFFECTS_CONTROLLER' | 'APP_LINKS' | 'ALEXA_EXTENSION' | 'APP_LINKS_V2';
}

export namespace v1.skill.Manifest {
    /**
     * defines the structure for the knowledge api of the skill.
     * @interface
     */
    export interface KnowledgeApis {
        /**
         * Defines the structure of locale specific knowledge information in the skill manifest.
         */
        'locales'?: { [key: string]: v1.skill.Manifest.LocalizedKnowledgeInformation; };
    }
}

export namespace v1.skill.Manifest {
    /**
     * Contains the uri field. This sets the global default endpoint.
     * @interface
     */
    export interface LambdaEndpoint {
        /**
         * Amazon Resource Name (ARN) of the Lambda function.
         */
        'uri': string;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure of a regional information.
     * @interface
     */
    export interface LambdaRegion {
        'endpoint': v1.skill.Manifest.LambdaEndpoint;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Applications associated with the skill.
     * @interface
     */
    export interface LinkedApplication {
        'catalogInfo': v1.skill.Manifest.CatalogInfo;
        /**
         * Supported schemes
         */
        'customSchemes'?: Array<string>;
        /**
         * Supported domains
         */
        'domains'?: Array<string>;
        'friendlyName': v1.skill.Manifest.FriendlyName;
    }
}

export namespace v1.skill.Manifest {
    /**
     * maps source locale to list of target locales. Source and target locales should be with the same language.
     * @interface
     */
    export interface LocalesByAutomaticClonedLocale {
        /**
         * Locale where the metadata and model will be copied from. For example: en-US. This locale must already exist in the skill.
         */
        'source': string;
        /**
         * Optional. List of locales where the metadata and model will be copied to. All configuration of source locale will be copied, so target locales do not have to exist before. Defaults to all locales with the same language as the sourceLocale.
         */
        'targets'?: Array<string>;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure of a localized flash briefing information.
     * @interface
     */
    export interface LocalizedFlashBriefingInfo {
        /**
         * Defines the structure for a feed information in the skill manifest.
         */
        'feeds'?: Array<v1.skill.Manifest.LocalizedFlashBriefingInfoItems>;
        /**
         * Alexa says this to the customer if the skill fails to render the content.
         */
        'customErrorMessage'?: string;
    }
}

export namespace v1.skill.Manifest {
    /**
     *
     * @interface
     */
    export interface LocalizedFlashBriefingInfoItems {
        /**
         * Logical name of the feed. This is used to signify relation among feeds across different locales. Example If you have \"weather\" feed in multiple locale then consider naming it \"weather_update\" and we will make sure to play the right feed if customer changes the language on device.
         */
        'logicalName'?: string;
        /**
         * Name that identifies this feed.
         */
        'name'?: string;
        /**
         * Url for the feed
         */
        'url': string;
        /**
         * Uri for the feed image
         */
        'imageUri'?: string;
        'contentType': v1.skill.Manifest.FlashBriefingContentType;
        'genre': v1.skill.Manifest.FlashBriefingGenre;
        'updateFrequency': v1.skill.Manifest.FlashBriefingUpdateFrequency;
        /**
         * A short introduction for the feed that Alexa reads to the customer before the feed contents. Should start with \"In\" or \"From\".
         */
        'vuiPreamble'?: string;
        /**
         * True if this should be the default feed to be enabled when customer enables the skill false otherwise.
         */
        'isDefault': boolean;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure of localized knowledge information in the skill manifest.
     * @interface
     */
    export interface LocalizedKnowledgeInformation {
        /**
         * enables skill developers to prepend a custom message to all of their knowledge skill's answers, which can help inform end-users of the skill and data source answering their question.
         */
        'answerAttribution'?: string;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure of localized music information in the skill manifest.
     * @interface
     */
    export interface LocalizedMusicInfo {
        /**
         * Name to be used when Alexa renders the music skill name.
         */
        'promptName'?: string;
        /**
         * Defines the structure of the music prompt name information in the skill manifest.
         */
        'aliases'?: Array<v1.skill.Manifest.MusicAlias>;
        'features'?: Array<v1.skill.Manifest.MusicFeature>;
        'wordmarkLogos'?: Array<v1.skill.Manifest.MusicWordmark>;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Localized app name
     * @interface
     */
    export interface LocalizedName {
        /**
         * locale
         */
        'locale': string;
        /**
         * app name
         */
        'name': string;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure for gadget buttons support in the skill manifest.
     * @interface
     */
    export interface ManifestGadgetSupport {
        'requirement': v1.skill.Manifest.GadgetSupportRequirement;
        /**
         * Minimum number of gadget buttons required.
         */
        'minGadgetButtons'?: number;
        /**
         * Maximum number of gadget buttons required.
         */
        'maxGadgetButtons'?: number;
        /**
         * Maximum number of players in the game.
         */
        'numPlayersMax'?: number;
        /**
         * Minimum number of players in the game.
         */
        'numPlayersMin'?: number;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Version of the skill manifest.
     * @enum
     */
    export type ManifestVersion = '1.0';
}

export namespace v1.skill.Manifest {
    /**
     * Paid skill product pricing information.
     * @interface
     */
    export interface MarketplacePricing {
        'offerType': v1.skill.Manifest.OfferType;
        /**
         * Defines the price of a paid skill product. The price should be your suggested price, not including any VAT or similar taxes. Taxes are included in the final price to end users.
         */
        'price': number;
        'currency': v1.skill.Manifest.Currency;
        'freeTrialInformation'?: v1.skill.Manifest.FreeTrialInformation;
        'subscriptionInformation'?: v1.skill.Manifest.SubscriptionInformation;
    }
}

export namespace v1.skill.Manifest {
    /**
     *
     * @interface
     */
    export interface MusicAlias {
        /**
         * Alias name to be associated with the music skill.
         */
        'name'?: string;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure of music api in the skill manifest.
     * @interface
     */
    export interface MusicApis {
        /**
         * Contains an array of the supported <region> Objects.
         */
        'regions'?: { [key: string]: v1.skill.Manifest.LambdaRegion; };
        'endpoint'?: v1.skill.Manifest.LambdaEndpoint;
        /**
         * Defines the structure of music capabilities information in the skill manifest.
         */
        'capabilities'?: Array<v1.skill.Manifest.MusicCapability>;
        /**
         * A list of music skill interfaces that your skill supports.
         */
        'interfaces'?: Array<v1.skill.Manifest.MusicInterfaces>;
        /**
         * Defines the structure of locale specific music information in the skill manifest.
         */
        'locales'?: { [key: string]: v1.skill.Manifest.LocalizedMusicInfo; };
        /**
         * List of the type of content to be provided by the music skill.
         */
        'contentTypes'?: Array<v1.skill.Manifest.MusicContentType>;
    }
}

export namespace v1.skill.Manifest {
    /**
     *
     * @interface
     */
    export interface MusicCapability {
        /**
         * Namespace of music skill api.
         */
        'namespace'?: string;
        /**
         * Name of music skill api.
         */
        'name'?: string;
        /**
         * Version of music skill api.
         */
        'version'?: string;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Name of the content type that's supported for the music skill.
     * @enum
     */
    export type MusicContentName = 'ON_DEMAND' | 'RADIO' | 'PODCAST';
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure for content that can be provided by a music skill.
     * @interface
     */
    export interface MusicContentType {
        'name'?: v1.skill.Manifest.MusicContentName;
    }
}

export namespace v1.skill.Manifest {
    /**
     *
     * @interface
     */
    export interface MusicFeature {
        /**
         * Feature name to be associated with the music skill.
         */
        'name'?: string;
    }
}

export namespace v1.skill.Manifest {
    /**
     *
     * @interface
     */
    export interface MusicInterfaces {
        /**
         * Name of the interface.
         */
        'namespace': string;
        /**
         * Version of the interface.
         */
        'version'?: string;
        /**
         * Contains a list of requests/messages that skill can handle.
         */
        'requests'?: Array<v1.skill.Manifest.MusicRequest>;
    }
}

export namespace v1.skill.Manifest {
    /**
     *
     * @interface
     */
    export interface MusicRequest {
        /**
         * Name of the request.
         */
        'name'?: string;
    }
}

export namespace v1.skill.Manifest {
    /**
     *
     * @interface
     */
    export interface MusicWordmark {
        /**
         * Wordmark logo to be used by devices with displays.
         */
        'uri'?: string;
    }
}

export namespace v1.skill.Manifest {
    /**
     * The type of the offer.
     * @enum
     */
    export type OfferType = 'SUBSCRIPTION' | 'ENTITLEMENT';
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure of the paid skill information of the skill.
     * @interface
     */
    export interface PaidSkillInformation {
        /**
         * Defines the structure for marketplace specific pricing information in the skill manifest
         */
        'pricing': { [key: string]: Array<v1.skill.Manifest.MarketplacePricing>; };
        'taxInformation': v1.skill.Manifest.TaxInformation;
    }
}

export namespace v1.skill.Manifest {
    /**
     *
     * @interface
     */
    export interface PermissionItems {
        'name': v1.skill.Manifest.PermissionName;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Name of the required permission.
     * @enum
     */
    export type PermissionName = 'alexa::device_id:read' | 'alexa::personality:explicit:read' | 'alexa::authenticate:2:mandatory' | 'alexa:devices:all:address:country_and_postal_code:read' | 'alexa::profile:mobile_number:read' | 'alexa::async_event:write' | 'alexa::device_type:read' | 'alexa::skill:proactive_enablement' | 'alexa::personality:explicit:write' | 'alexa::household:lists:read' | 'alexa::utterance_id:read' | 'alexa::user_experience_guidance:read' | 'alexa::devices:all:notifications:write' | 'avs::distributed_audio' | 'alexa::devices:all:address:full:read' | 'alexa::devices:all:notifications:urgent:write' | 'payments:autopay_consent' | 'alexa::alerts:timers:skill:readwrite' | 'alexa::customer_id:read' | 'alexa::skill:cds:monetization' | 'alexa::music:cast' | 'alexa::profile:given_name:read' | 'alexa::alerts:reminders:skill:readwrite' | 'alexa::household:lists:write' | 'alexa::profile:email:read' | 'alexa::profile:name:read' | 'alexa::devices:all:geolocation:read' | 'alexa::raw_person_id:read' | 'alexa::authenticate:2:optional' | 'alexa::health:profile:write' | 'alexa::person_id:read' | 'alexa::skill:products:entitlements' | 'alexa::energy:devices:state:read' | 'alexa::origin_ip_address:read';
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure for regional information.
     * @interface
     */
    export interface Region {
        'endpoint': v1.skill.Manifest.SkillManifestEndpoint;
    }
}

export namespace v1.skill.Manifest {
    /**
     * The SSL certificate type of the skill's HTTPS endpoint. Only valid for HTTPS endpoint not for AWS Lambda ARN.
     * @enum
     */
    export type SSLCertificateType = 'SelfSigned' | 'Wildcard' | 'Trusted';
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure for a skill's metadata.
     * @interface
     */
    export interface SkillManifest {
        'manifestVersion'?: v1.skill.Manifest.ManifestVersion;
        'publishingInformation'?: v1.skill.Manifest.SkillManifestPublishingInformation;
        'privacyAndCompliance'?: v1.skill.Manifest.SkillManifestPrivacyAndCompliance;
        'events'?: v1.skill.Manifest.SkillManifestEvents;
        /**
         * Defines the structure for required permissions information in the skill manifest.
         */
        'permissions'?: Array<v1.skill.Manifest.PermissionItems>;
        /**
         * Defines a list of clients authorized for a skill.
         */
        'authorizedClients'?: Array<v1.skill.Manifest.AuthorizedClient>;
        'apis'?: v1.skill.Manifest.SkillManifestApis;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure for implemented apis information in the skill manifest.
     * @interface
     */
    export interface SkillManifestApis {
        'flashBriefing'?: v1.skill.Manifest.FlashBriefingApis;
        'custom'?: v1.skill.Manifest.CustomApis;
        'knowledge'?: v1.skill.Manifest.KnowledgeApis;
        'smartHome'?: v1.skill.Manifest.SmartHomeApis;
        'video'?: v1.skill.Manifest.VideoApis;
        'alexaForBusiness'?: v1.skill.Manifest.AlexaForBusinessApis;
        'householdList'?: v1.skill.Manifest.HouseHoldList;
        'music'?: v1.skill.Manifest.MusicApis;
        'demandResponse'?: v1.skill.Manifest.DemandResponseApis;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure for endpoint information in the skill manifest.
     * @interface
     */
    export interface SkillManifestEndpoint {
        /**
         * Amazon Resource Name (ARN) of the skill's Lambda function or HTTPS URL.
         */
        'uri': string;
        'sslCertificateType'?: v1.skill.Manifest.SSLCertificateType;
    }
}

export namespace v1.skill.Manifest {
    /**
     *
     * @interface
     */
    export interface SkillManifestEnvelope {
        'manifest'?: v1.skill.Manifest.SkillManifest;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure for subscribed events information in the skill manifest.
     * @interface
     */
    export interface SkillManifestEvents {
        /**
         * Contains an array of eventName object each of which contains the name of a skill event.
         */
        'subscriptions'?: Array<v1.skill.Manifest.EventName>;
        'publications'?: Array<v1.skill.Manifest.EventPublications>;
        /**
         * Contains an array of the supported <region> Objects.
         */
        'regions'?: { [key: string]: v1.skill.Manifest.Region; };
        'endpoint': v1.skill.Manifest.SkillManifestEndpoint;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure for locale specific privacy & compliance information in the skill manifest.
     * @interface
     */
    export interface SkillManifestLocalizedPrivacyAndCompliance {
        /**
         * Link to the privacy policy that applies to this skill.
         */
        'privacyPolicyUrl'?: string;
        /**
         * link to the terms of use document for this skill
         */
        'termsOfUseUrl'?: string;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure for locale specific publishing information in the skill manifest.
     * @interface
     */
    export interface SkillManifestLocalizedPublishingInformation {
        /**
         * Name of the skill that is displayed to customers in the Alexa app.
         */
        'name': string;
        /**
         * URL to a small icon for the skill, which is shown in the list of skills (108x108px).
         */
        'smallIconUri'?: string;
        /**
         * URL to a large icon that represents this skill (512x512px).
         */
        'largeIconUri'?: string;
        /**
         * Summary description of the skill, which is shown when viewing the list of skills.
         */
        'summary'?: string;
        /**
         * A full description explaining the skill’s core functionality and any prerequisites to using it (such as additional hardware, software, or accounts). For a Flash Briefing skill, you must list the feeds for the skill.
         */
        'description'?: string;
        /**
         * Updates description of the skill's new features and fixes in the version. Should describe changes in the revisions of the skill.
         */
        'updatesDescription'?: string;
        /**
         * Three example phrases that illustrate how users can invoke your skill. For accuracy, these phrases must come directly from your sample utterances.
         */
        'examplePhrases'?: Array<string>;
        /**
         * Sample keyword phrases that describe the skill.
         */
        'keywords'?: Array<string>;
        'customProductPrompts'?: v1.skill.Manifest.CustomProductPrompts;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure for privacy & compliance information in the skill manifest.
     * @interface
     */
    export interface SkillManifestPrivacyAndCompliance {
        /**
         * Object that contains <locale> objects for each supported locale.
         */
        'locales'?: { [key: string]: v1.skill.Manifest.SkillManifestLocalizedPrivacyAndCompliance; };
        /**
         * True if the skill allows users to make purchases or spend real money false otherwise.
         */
        'allowsPurchases'?: boolean;
        /**
         * True if the skill collects users' personal information false otherwise.
         */
        'usesPersonalInfo'?: boolean;
        /**
         * True if the skill is directed to or targets children under the age of 13/16 false otherwise.
         */
        'isChildDirected'?: boolean;
        /**
         * True if it is certified that the skill may be imported to and exported from the United States and all other countries and regions in which Amazon operate its program or in which skill owner have authorized sales to end users (without the need for Amazon to obtain any license or clearance or take any other action) and is in full compliance with all applicable laws and regulations governing imports and export including those applicable to software that makes use of encryption technology.
         */
        'isExportCompliant'?: boolean;
        /**
         * True if the skill contains advertising false otherwise.
         */
        'containsAds'?: boolean;
        /**
         * True if the skill developer is a Covered Entity (CE) or Business Associate (BA) as defined by the Health Insurance Portability And Accountability Act (HIPAA) and the skill requires Amazon to process PHI on their behalf, false otherwise. This is an optional property and treated as false if not set.
         */
        'usesHealthInfo'?: boolean;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure for publishing information in the skill manifest.
     * @interface
     */
    export interface SkillManifestPublishingInformation {
        /**
         * Name of the skill that is displayed to customers in the Alexa app.
         */
        'name'?: string;
        /**
         * Description of the skill's purpose and feature and how it works. Should describe any prerequisites like hardware or account requirements and detailed steps for the customer to get started. For Flash Briefing skill list the feeds offered within the skill. Use a conversational tone and correct grammar and punctuation. This description displays to customers on the skill detail card in the Alexa app.
         */
        'description'?: string;
        /**
         * Defines the structure for locale specific publishing information in the skill manifest.
         */
        'locales'?: { [key: string]: v1.skill.Manifest.SkillManifestLocalizedPublishingInformation; };
        /**
         * True if the skill should be distributed in all countries where Amazon distributes skill false otherwise.
         */
        'isAvailableWorldwide'?: boolean;
        'distributionMode'?: v1.skill.Manifest.DistributionMode;
        'gadgetSupport'?: v1.skill.Manifest.ManifestGadgetSupport;
        /**
         * Special instructions provided by the developer to test the skill.
         */
        'testingInstructions'?: string;
        /**
         * Category that best describes a skill. Indicates the filter category for the skill in the Alexa App.
         */
        'category'?: string;
        /**
         * Selected list of countries provided by the skill owner where Amazon can distribute the skill.
         */
        'distributionCountries'?: Array<v1.skill.Manifest.DistributionCountries>;
        'automaticDistribution'?: v1.skill.Manifest.AutomaticDistribution;
        'automaticClonedLocale'?: v1.skill.Manifest.AutomaticClonedLocale;
        'paidSkillInformation'?: v1.skill.Manifest.PaidSkillInformation;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure of smart home api of the skill.
     * @interface
     */
    export interface SmartHomeApis {
        /**
         * Contains an array of the supported <region> Objects.
         */
        'regions'?: { [key: string]: v1.skill.Manifest.LambdaRegion; };
        'endpoint'?: v1.skill.Manifest.LambdaEndpoint;
        'protocolVersion': v1.skill.Manifest.SmartHomeProtocol;
        'supportedControls'?: v1.skill.Manifest.SupportedControls;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Version of the Smart Home API. Default and recommended value is '3'. You may create a skill with version '2' for testing migration to version '3', but a skill submission using version '2' will not be certified.
     * @enum
     */
    export type SmartHomeProtocol = '2' | '2.0' | '3' | '3.0';
}

export namespace v1.skill.Manifest {
    /**
     * maps a language to a locale. During Automatic Skill Distribution, skill metadata and model of the source locale will be copied to other eligible locales of the same language. Eligible destination locales will be determined by the system.
     * @interface
     */
    export interface SourceLanguageForLocales {
        /**
         * two-letter string representing the language to distribute to. There must be at least one locale in publishingInformation.locales which has this language as the prefix.
         */
        'language': string;
        /**
         * locale where the metadata and model will be copied from. This locale must already exist in the skill.
         */
        'sourceLocale': string;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure for paid skill product subscription information.
     * @interface
     */
    export interface SubscriptionInformation {
        'subscriptionPaymentFrequency': v1.skill.Manifest.SubscriptionPaymentFrequency;
    }
}

export namespace v1.skill.Manifest {
    /**
     * The frequency in which payments are collected for the subscription.
     * @enum
     */
    export type SubscriptionPaymentFrequency = 'MONTHLY' | 'YEARLY';
}

export namespace v1.skill.Manifest {
    /**
     * (Optional) Contains the attributes specifying additional functionalities supported by the skill.
     * @interface
     */
    export interface SupportedControls {
        'type'?: v1.skill.Manifest.SupportedControlsType;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Type of the supported functionality.
     * @enum
     */
    export type SupportedControlsType = 'REMOTE_VEHICLE_CONTROL';
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure for paid skill product tax information.
     * @interface
     */
    export interface TaxInformation {
        'category': v1.skill.Manifest.TaxInformationCategory;
    }
}

export namespace v1.skill.Manifest {
    /**
     * The tax category that best describes the paid skill product.
     * @enum
     */
    export type TaxInformationCategory = 'SOFTWARE' | 'STREAMING_AUDIO' | 'STREAMING_RADIO' | 'INFORMATION_SERVICES' | 'VIDEO' | 'PERIODICALS' | 'NEWSPAPERS';
}

export namespace v1.skill.Manifest {
    /**
     *
     * @interface
     */
    export interface UpChannelItems {
        /**
         * Use \\\"SNS\\\" for this field.
         */
        'type'?: string;
        /**
         * SNS Amazon Resource Name (ARN) for video skill through which video partner can send events to Alexa.
         */
        'uri'?: string;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Version of the interface.
     * @enum
     */
    export type Version = '1.0';
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure for video api of the skill.
     * @interface
     */
    export interface VideoApis {
        /**
         * Defines the structure for region information.
         */
        'regions'?: { [key: string]: v1.skill.Manifest.VideoRegion; };
        /**
         * Defines the structure for the locale specific video api information.
         */
        'locales'?: { [key: string]: v1.skill.Manifest.VideoApisLocale; };
        'endpoint'?: v1.skill.Manifest.LambdaEndpoint;
        /**
         * Object that contains <country> Objects for each supported country.
         */
        'countries'?: { [key: string]: v1.skill.Manifest.VideoCountryInfo; };
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure for localized video api information.
     * @interface
     */
    export interface VideoApisLocale {
        /**
         * Defines the video provider's targeting name.
         */
        'videoProviderTargetingNames': Array<string>;
        'videoProviderLogoUri'?: string;
        'fireTvCatalogIngestion'?: v1.skill.Manifest.VideoFireTvCatalogIngestion;
        /**
         * Defines the array of video features for this skill.
         */
        'features'?: Array<v1.skill.Manifest.VideoFeature>;
        /**
         * Name to use when Alexa renders the video skill name in a prompt to the user
         */
        'promptNames'?: Array<v1.skill.Manifest.VideoPromptName>;
    }
}

export namespace v1.skill.Manifest {
    /**
     *
     * @interface
     */
    export interface VideoCatalogInfo {
        'sourceId': string;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure of per-country video info in the skill manifest.
     * @interface
     */
    export interface VideoCountryInfo {
        'catalogInformation'?: Array<v1.skill.Manifest.VideoCatalogInfo>;
    }
}

export namespace v1.skill.Manifest {
   /**
    * A feature of an Alexa skill.
    * @interface
    */
    export type VideoFeature = v1.skill.Manifest.VoiceProfileFeature;
}

export namespace v1.skill.Manifest {
    /**
     *
     * @interface
     */
    export interface VideoFireTvCatalogIngestion {
        'fireTvCatalogIngestionSourceId'?: string;
        'isFireTvCatalogIngestionEnabled'?: boolean;
    }
}

export namespace v1.skill.Manifest {
    /**
     *
     * @interface
     */
    export interface VideoPromptName {
        'type': v1.skill.Manifest.VideoPromptNameType;
        'name': string;
    }
}

export namespace v1.skill.Manifest {
    /**
     *
     * @enum
     */
    export type VideoPromptNameType = 'Default';
}

export namespace v1.skill.Manifest {
    /**
     * Defines the structure for endpoint information.
     * @interface
     */
    export interface VideoRegion {
        'endpoint': v1.skill.Manifest.SkillManifestEndpoint;
        /**
         * The channel through which the partner skill can communicate to Alexa.
         */
        'upchannel'?: Array<v1.skill.Manifest.UpChannelItems>;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines the mode of viewport that comply with this specification. E.g. HUB TV.
     * @enum
     */
    export type ViewportMode = 'HUB' | 'TV' | 'MOBILE' | 'PC' | 'AUTO';
}

export namespace v1.skill.Manifest {
    /**
     * Defines the shape of the device's viewport.
     * @enum
     */
    export type ViewportShape = 'RECTANGLE' | 'ROUND';
}

export namespace v1.skill.Manifest {
    /**
     * Defines a viewport specification.
     * @interface
     */
    export interface ViewportSpecification {
        'mode': v1.skill.Manifest.ViewportMode;
        'shape': v1.skill.Manifest.ViewportShape;
        /**
         * Defines the minimum width of viewport that comply with this specification.
         */
        'minWidth'?: number;
        /**
         * Defines the maximum width of viewport that comply with this specification.
         */
        'maxWidth'?: number;
        /**
         * Defines the minimum height of viewport that comply with this specification.
         */
        'minHeight'?: number;
        /**
         * Defines the maximum height of viewport that comply with this specification.
         */
        'maxHeight'?: number;
    }
}

export namespace v1.skill {
    /**
     * Contains attributes related to last modification (create/update) request of a resource.
     * @interface
     */
    export interface ManifestLastUpdateRequest {
        'status'?: v1.skill.Status;
        'errors'?: Array<v1.skill.StandardizedError>;
        'warnings'?: Array<v1.skill.StandardizedError>;
        /**
         * on success, this field indicates the created version.
         */
        'version'?: string;
    }
}

export namespace v1.skill {
    /**
     * Defines the structure for a resource status.
     * @interface
     */
    export interface ManifestStatus {
        'lastUpdateRequest'?: v1.skill.ManifestLastUpdateRequest;
        /**
         * An opaque identifier for last successfully updated resource.
         */
        'eTag'?: string;
    }
}

export namespace v1.skill {
    /**
     * Can locale of skill be overwritten. Default value is DO_NOT_OVERWRITE.
     * @enum
     */
    export type OverwriteMode = 'DO_NOT_OVERWRITE' | 'OVERWRITE';
}

export namespace v1.skill.Private {
    /**
     * Enterprise IT administrators' action on the private distribution.
     * @enum
     */
    export type AcceptStatus = 'ACCEPTED' | 'PENDING';
}

export namespace v1.skill.Private {
    /**
     * Response of ListPrivateDistributionAccounts.
     * @interface
     */
    export interface ListPrivateDistributionAccountsResponse {
        '_links'?: v1.Links;
        /**
         * List of PrivateDistributionAccounts.
         */
        'privateDistributionAccounts'?: Array<v1.skill.Private.PrivateDistributionAccount>;
        'nextToken'?: string;
    }
}

export namespace v1.skill.Private {
    /**
     * Contains information of the private distribution account with given id.
     * @interface
     */
    export interface PrivateDistributionAccount {
        /**
         * 12-digit numerical account ID for AWS account holders.
         */
        'principal'?: string;
        'acceptStatus'?: v1.skill.Private.AcceptStatus;
    }
}

export namespace v1.skill {
    /**
     * Determines if the skill should be submitted only for certification and manually publish later or publish immediately after the skill is certified. Omitting the publication method will default to auto publishing.
     * @enum
     */
    export type PublicationMethod = 'MANUAL_PUBLISHING' | 'AUTO_PUBLISHING';
}

export namespace v1.skill {
    /**
     * Publication status of the skill. It is associated with the skill's stage. Skill in 'development' stage can have publication status as 'DEVELOPMENT' or 'CERTIFICATION'. Skill in 'certified' stage can have publication status as 'CERTIFIED'. 'Skill in 'live' stage can have publication status as 'PUBLISHED', 'HIDDEN' or 'REMOVED'. * `DEVELOPMENT` - The skill is available only to you. If you have enabled it for testing, you can test it on devices registered to your developer account. * `CERTIFICATION` - Amazon is currently reviewing the skill for publication. During this time, you cannot edit the configuration. * `CERTIFIED` - The skill has been certified and ready to be published. Skill can be either published immediately or an future release date can be set for the skill. You cannot edit the configuration for the certified skills. To start development, make your changes on the development version. * `PUBLISHED` - The skill has been published and is available to users. You cannot edit the configuration for live skills. To start development on an updated version, make your changes on the development version instead. * `HIDDEN` - The skill has been published but is no longer available to new users for activation. Existing users can still invoke this skill. * `REMOVED` - The skill has been published but removed for use, due to Amazon's policy violation. You can update your skill and publish a new version to live to address the policy violation. 
     * @enum
     */
    export type PublicationStatus = 'DEVELOPMENT' | 'CERTIFICATION' | 'CERTIFIED' | 'PUBLISHED' | 'HIDDEN' | 'REMOVED';
}

export namespace v1.skill {
    /**
     * The reason to withdraw.
     * @enum
     */
    export type Reason = 'TEST_SKILL' | 'MORE_FEATURES' | 'DISCOVERED_ISSUE' | 'NOT_RECEIVED_CERTIFICATION_FEEDBACK' | 'NOT_INTEND_TO_PUBLISH' | 'OTHER';
}

export namespace v1.skill {
    /**
     *
     * @interface
     */
    export interface RegionalSSLCertificate {
        'sslCertificate'?: string;
    }
}

export namespace v1.skill {
    /**
     * Defines the structure for a resource deployment status.
     * @interface
     */
    export interface ResourceImportStatus {
        /**
         * Resource name. eg. manifest, interactionModels.en_US and so on.
         */
        'name'?: string;
        'status': v1.skill.ResponseStatus;
        'action'?: v1.skill.Action;
        'errors'?: Array<v1.skill.StandardizedError>;
        'warnings'?: Array<v1.skill.StandardizedError>;
    }
}

export namespace v1.skill {
    /**
     * Status for a Response resource.
     * @enum
     */
    export type ResponseStatus = 'FAILED' | 'IN_PROGRESS' | 'SUCCEEDED' | 'ROLLBACK_SUCCEEDED' | 'ROLLBACK_FAILED' | 'SKIPPED';
}

export namespace v1.skill {
    /**
     * Rollback request for a skill
     * @interface
     */
    export interface RollbackRequestStatus {
        /**
         * rollback request id
         */
        'id'?: string;
        /**
         * The target skill version to rollback to.
         */
        'targetVersion'?: string;
        'submissionTime'?: string;
        'status'?: v1.skill.RollbackRequestStatusTypes;
        'errors'?: Array<v1.skill.StandardizedError>;
    }
}

export namespace v1.skill {
    /**
     * The rollback status of the rollback request. * `FAILED` - The rollback has failed. Please retry the rollback. * `INELIGIBLE` - The target version is ineligible for rollback. * `IN_PROGRESS` - The rollback is in progress. * `SUCCEEDED` - The rollback has succeeded. 
     * @enum
     */
    export type RollbackRequestStatusTypes = 'FAILED' | 'INELIGIBLE' | 'IN_PROGRESS' | 'SUCCEEDED';
}

export namespace v1.skill {
    /**
     *
     * @interface
     */
    export interface SSLCertificatePayload {
        /**
         * The default ssl certificate for the skill. If a request is made for a region without an explicit ssl certificate, this certificate will be used.
         */
        'sslCertificate'?: string;
        /**
         * A map of region to ssl certificate. Keys are string region codes (https://developer.amazon.com/docs/smapi/skill-manifest.html#regions), values are regional ssl certificate objects which contain the ssl certificate blobs as strings.
         */
        'regions'?: { [key: string]: v1.skill.RegionalSSLCertificate; };
    }
}

export namespace v1.skill {
    /**
     * Structure for skill credentials response.
     * @interface
     */
    export interface SkillCredentials {
        'skillMessagingCredentials'?: v1.skill.SkillMessagingCredentials;
    }
}

export namespace v1.skill {
    /**
     * Defines the structure for interaction model build status.
     * @interface
     */
    export interface SkillInteractionModelStatus {
        'lastUpdateRequest'?: v1.skill.InteractionModelLastUpdateRequest;
        /**
         * An opaque identifier for last successfully updated resource.
         */
        'eTag'?: string;
        /**
         * Version for last successfully built model.
         */
        'version'?: string;
    }
}

export namespace v1.skill {
    /**
     * Defines the structure for skill messaging credentials.
     * @interface
     */
    export interface SkillMessagingCredentials {
        /**
         * The client id for the security profile.
         */
        'clientId'?: string;
        /**
         * The client secret for the security profile.
         */
        'clientSecret'?: string;
    }
}

export namespace v1.skill {
    /**
     * Defines the structure for skill status response.
     * @interface
     */
    export interface SkillStatus {
        'manifest'?: v1.skill.ManifestStatus;
        /**
         * Status for available interaction models, keyed by locale.
         */
        'interactionModel'?: { [key: string]: v1.skill.SkillInteractionModelStatus; };
        'hostedSkillDeployment'?: v1.skill.HostedSkillDeploymentStatus;
        'hostedSkillProvisioning'?: v1.skill.HostedSkillProvisioningStatus;
    }
}

export namespace v1.skill {
    /**
     * Information about the skills.
     * @interface
     */
    export interface SkillSummary {
        'skillId'?: string;
        'stage'?: v1.StageV2Type;
        /**
         * List of APIs currently implemented by the skill.
         */
        'apis'?: Array<v1.skill.SkillSummaryApis>;
        'publicationStatus'?: v1.skill.PublicationStatus;
        'lastUpdated'?: string;
        /**
         * Name of the skill in skill locales (keys are locale names (e.g. 'en-US') whereas values are name of the skill in that locale. 
         */
        'nameByLocale'?: { [key: string]: string; };
        /**
         * Amazon Standard Identification Number (ASIN) is unique blocks of 10 letters and/or numbers that identify items. More info about ASIN can be found here: https://www.amazon.com/gp/seller/asin-upc-isbn-info.html ASIN is available for those skills only, that have been published, at least once. 
         */
        'asin'?: string;
        '_links'?: v1.Links;
    }
}

export namespace v1.skill {
    /**
     *
     * @enum
     */
    export type SkillSummaryApis = 'custom' | 'smartHome' | 'flashBriefing' | 'video' | 'music' | 'householdList' | 'health' | 'alexaForBusiness' | 'demandResponse';
}

export namespace v1.skill {
    /**
     * Information about the skill version
     * @interface
     */
    export interface SkillVersion {
        'version'?: string;
        /**
         * Description of the version (limited to 300 characters). 
         */
        'message'?: string;
        'creationTime'?: string;
        /**
         * List of submissions for the skill version 
         */
        'submissions'?: Array<v1.skill.VersionSubmission>;
    }
}

export namespace v1.skill {
    /**
     * Standardized structure which wraps machine parsable and human readable information about an error.
     * @interface
     */
    export interface StandardizedError {
        /**
         * Standardized, machine readable structure that wraps all the information about a specific occurrence of an error of the type specified by the code.
         */
        'validationDetails'?: v1.skill.ValidationDetails;
        /**
         * Error code that maps to an error message. Developers with different locales should be able to lookup the error description based on this code. 
         */
        'code'?: string;
        /**
         * Readable description of error. If standardized, this is generated from the error code and validation details.
         */
        'message': string;
    }
}

export namespace v1.skill {
    /**
     * Status of a resource.
     * @enum
     */
    export type Status = 'FAILED' | 'IN_PROGRESS' | 'SUCCEEDED';
}

export namespace v1.skill {
    /**
     *
     * @interface
     */
    export interface SubmitSkillForCertificationRequest {
        'publicationMethod'?: v1.skill.PublicationMethod;
        /**
         * Description of the version (limited to 300 characters).
         */
        'versionMessage'?: string;
    }
}

export namespace v1.skill {
    /**
     * Defines the structure for skill upload response.
     * @interface
     */
    export interface UploadResponse {
        /**
         * The upload URL to upload a skill package.
         */
        'uploadUrl'?: string;
        /**
         * The expiration time of the URL
         */
        'expiresAt'?: string;
    }
}

export namespace v1.skill {
    /**
     *
     * @enum
     */
    export type ValidationDataTypes = 'object' | 'boolean' | 'integer' | 'array' | 'string' | 'null';
}

export namespace v1.skill {
    /**
     * Structure representing an endpoint.
     * @interface
     */
    export interface ValidationEndpoint {
        /**
         * Path to the endpoint URI in the resource.
         */
        'propertyPath'?: string;
        /**
         * Type of the endpoint (https, http, arn etc).
         */
        'type'?: string;
        /**
         * Full URI of the endpoint.
         */
        'value'?: string;
    }
}

export namespace v1.skill {
    /**
     * Object representing what is wrong in the request.
     * @interface
     */
    export interface ValidationFailureReason {
        /**
         * Enum for type of validation failure in the request.
         */
        'type'?: v1.skill.ValidationFailureType;
    }
}

export namespace v1.skill {
    /**
     * Enum for type of validation failure in the request.
     * @enum
     */
    export type ValidationFailureType = 'RESOURCE_DOES_NOT_EXIST' | 'RESOURCE_VERSION_DOES_NOT_MATCH' | 'MALFORMED_INPUT' | 'EXPECTED_NOT_EMPTY_VALUE' | 'INVALID_NUMBER_OF_OCCURENCES' | 'INVALID_NUMBER_OF_PROPERTIES' | 'EXPECTED_ATLEAST_ONE_RELATED_INSTANCE' | 'EXPECTED_EXACTLY_ONE_RELATED_INSTANCE' | 'RESOURCE_LOCKED' | 'UNEXPECTED_RESOURCE_STAGE' | 'UNEXPECTED_RESOURCE_PROPERTY' | 'MISSING_RESOURCE_PROPERTY';
}

export namespace v1.skill {
    /**
     * Structure representing a public feature.
     * @interface
     */
    export interface ValidationFeature {
        /**
         * Name of the feature.
         */
        'name'?: string;
        /**
         * Contact URL or email for the feature.
         */
        'contact'?: string;
    }
}

export namespace v1.skill {
    /**
     * Submission for a skill version 
     * @interface
     */
    export interface VersionSubmission {
        'status'?: v1.skill.VersionSubmissionStatus;
        'submissionTime'?: string;
    }
}

export namespace v1.skill {
    /**
     * The lifecycle status of the skill version submission. * `LIVE` - The skill version is in the live stage * `CERTIFIED` - The skill version has gone through the certification review process and has been certified. * `IN_REVIEW` - The skill version is currently under review for certification and publication. During this time, you cannot edit the configuration. * `FAILED_CERTIFICATION` - The skill version has been submitted for certification, however it has failed certification review. Please submit a new version for certification. * `HIDDEN` - The skill version has been published but is no longer available to new users for activation. Existing users can still invoke this skill if it is the most recent version. * `REMOVED` - The skill version has been published but removed for use, due to Amazon's policy violation. You can update your skill and publish a new version to live to address the policy violation. * `WITHDRAWN_FROM_CERTIFICATION` - The skill version was submitted for certification but was withdrawn from review. 
     * @enum
     */
    export type VersionSubmissionStatus = 'LIVE' | 'CERTIFIED' | 'IN_REVIEW' | 'FAILED_CERTIFICATION' | 'HIDDEN' | 'REMOVED' | 'WITHDRAWN_FROM_CERTIFICATION';
}

export namespace v1.skill {
    /**
     * The payload for the withdraw operation.
     * @interface
     */
    export interface WithdrawRequest {
        'reason': v1.skill.Reason;
        /**
         * The message only in case the reason in OTHER.
         */
        'message'?: string;
    }
}

export namespace v1.skill.accountLinking {
    /**
     * The type of client authentication scheme.
     * @enum
     */
    export type AccessTokenSchemeType = 'HTTP_BASIC' | 'REQUEST_BODY_CREDENTIALS';
}

export namespace v1.skill.accountLinking {
    /**
     * A key-value pair object that contains the OAuth2 authorization url to initiate the skill account linking process.
     * @interface
     */
    export interface AccountLinkingPlatformAuthorizationUrl {
        'platformType': v1.skill.accountLinking.PlatformType;
        /**
         * Defines the OAuth2 Authorization URL that will be used in this platform to authenticate the customer / person.
         */
        'platformAuthorizationUrl': string;
    }
}

export namespace v1.skill.accountLinking {
    /**
     * The request body of AccountLinkingRequest.
     * @interface
     */
    export interface AccountLinkingRequest {
        'accountLinkingRequest'?: v1.skill.accountLinking.AccountLinkingRequestPayload;
    }
}

export namespace v1.skill.accountLinking {
    /**
     * The payload for creating the account linking partner.
     * @interface
     */
    export interface AccountLinkingRequestPayload {
        'type'?: v1.skill.accountLinking.AccountLinkingType;
        /**
         * The url where customers will be redirected in the companion app to enter login credentials.
         */
        'authorizationUrl'?: string;
        /**
         * The list of domains that the authorization URL will fetch content from.
         */
        'domains'?: Array<string>;
        /**
         * The unique public string used to identify the client requesting for authentication.
         */
        'clientId'?: string;
        /**
         * The list of permissions which will be requested from the skill user.
         */
        'scopes'?: Array<string>;
        /**
         * The url used for access token and token refresh requests.
         */
        'accessTokenUrl'?: string;
        /**
         * The client secret provided by developer.
         */
        'clientSecret'?: string;
        'accessTokenScheme'?: v1.skill.accountLinking.AccessTokenSchemeType;
        /**
         * The time in seconds for which access token is valid. If OAuth client returns \"expires_in\", it will be overwrite this parameter. 
         */
        'defaultTokenExpirationInSeconds'?: number;
        /**
         * Optional, if your skill requires reciprocal authorization, provide this additional access token url to handle reciprocal (Alexa) authorization codes that can be exchanged for Alexa access tokens.
         */
        'reciprocalAccessTokenUrl'?: string;
        /**
         * The list of valid urls to redirect back to, when the linking process is initiated from a third party system.
         */
        'redirectUrls'?: Array<string>;
        /**
         * The list of valid authorization urls for allowed platforms to initiate account linking.
         */
        'authorizationUrlsByPlatform'?: Array<v1.skill.accountLinking.AccountLinkingPlatformAuthorizationUrl>;
        /**
         * Set to true to let users enable the skill without starting the account linking flow. Set to false to require the normal account linking flow when users enable the skill.
         */
        'skipOnEnablement'?: boolean;
    }
}

export namespace v1.skill.accountLinking {
    /**
     * The account linking information of a skill.
     * @interface
     */
    export interface AccountLinkingResponse {
        'type'?: v1.skill.accountLinking.AccountLinkingType;
        /**
         * The url where customers will be redirected in the companion app to enter login credentials.
         */
        'authorizationUrl'?: string;
        /**
         * The list of domains that the authorization URL will fetch content from.
         */
        'domains'?: Array<string>;
        /**
         * The unique public string used to identify the client requesting for authentication.
         */
        'clientId'?: string;
        /**
         * The list of permissions which will be requested from the skill user.
         */
        'scopes'?: Array<string>;
        /**
         * The url used for access token and token refresh requests.
         */
        'accessTokenUrl'?: string;
        'accessTokenScheme'?: v1.skill.accountLinking.AccessTokenSchemeType;
        /**
         * The time in seconds for which access token is valid. If OAuth client returns \"expires_in\", it will be overwrite this parameter. 
         */
        'defaultTokenExpirationInSeconds'?: number;
        /**
         * The list of valid urls to redirect back to, when the linking process is initiated from a third party system.
         */
        'redirectUrls'?: Array<string>;
        /**
         * The list of valid authorization urls for allowed platforms to initiate account linking.
         */
        'authorizationUrlsByPlatform'?: Array<v1.skill.accountLinking.AccountLinkingPlatformAuthorizationUrl>;
    }
}

export namespace v1.skill.accountLinking {
    /**
     * The type of account linking.
     * @enum
     */
    export type AccountLinkingType = 'AUTH_CODE' | 'IMPLICIT';
}

export namespace v1.skill.accountLinking {
    /**
     * Defines the type of platform that will be used by the customer to perform account linking.
     * @enum
     */
    export type PlatformType = 'iOS' | 'Android';
}

export namespace v1.skill.asr.annotationSets {
    /**
     * A single test case that describes the audio reference, expected transcriptions, test case weight etc. Each annotation object must have at least expectedTranscription or, uploadId and filePathInUpload in pair. In any case, filePathInUpload and uploadId must be present or missing in pair.
     * @interface
     */
    export interface Annotation {
        /**
         * Upload id obtained when developer creates an upload using catalog API. Required to be present when expectedTranscription is missing. When uploadId is present, filePathInUpload must also be present.
         */
        'uploadId'?: string;
        /**
         * File path in the uploaded zip file. For example, a zip containing a folder named 'a' and there is an audio b.mp3 in that folder. The file path is a/b.mp3. Notice that forward slash ('/') should be used to concatenate directories. Required to be present when expectedTranscription is missing. When filePathInUpload is present, uploadId must also be present.
         */
        'filePathInUpload'?: string;
        /**
         * Weight of the test case in an evaluation, the value would be used for calculating metrics such as overall error rate.  The acceptable values are from 1 - 1000. 1 means least significant, 1000 means mot significant. Here is how weight  impact the `OVERALL_ERROR_RATE` calculation: For example, an annotation set consists of 3 annotations and they have weight of 8, 1, 1. The evaluation results  show that only the first annotation test case passed while the rest of the test cases failed. In this case,  the overall error rate is (8 / (8 + 1 + 1)) = 0.8 
         */
        'evaluationWeight'?: number;
        /**
         * Expected transcription text for the input audio. The acceptable length of the string is between 1 and 500 Unicode characters. Required to be present when uploadId and filePathInUpload are missing.
         */
        'expectedTranscription'?: string;
    }
}

export namespace v1.skill.asr.annotationSets {
    /**
     *
     * @interface
     */
    export interface AnnotationSetMetadata {
        /**
         * Name of the ASR annotation set
         */
        'name': string;
        /**
         * Number of annotations within an annotation set
         */
        'annotationCount': number;
        /**
         * The timestamp for the most recent update of ASR annotation set
         */
        'lastUpdatedTimestamp': string;
        /**
         * Indicates if the annotation set is eligible for evaluation. A set is not eligible for evaluation if any annotation within the set has a missing uploadId, filePathInUpload, expectedTranscription, or evaluationWeight.
         */
        'eligibleForEvaluation'?: boolean;
    }
}

export namespace v1.skill.asr.annotationSets {
    /**
     * Object containing information about downloading audio file
     * @interface
     */
    export interface AudioAsset {
        /**
         * S3 presigned download url for downloading the audio file
         */
        'downloadUrl': string;
        /**
         * Timestamp when the audio download url expire in ISO 8601 format
         */
        'expiryTime': string;
    }
}

export namespace v1.skill.asr.annotationSets {
    /**
     *
     * @interface
     */
    export interface CreateAsrAnnotationSetRequestObject {
        /**
         * The name of ASR annotation set. The length of the name cannot exceed 170 chars. Only alphanumeric characters are accepted.
         */
        'name': string;
    }
}

export namespace v1.skill.asr.annotationSets {
    /**
     *
     * @interface
     */
    export interface CreateAsrAnnotationSetResponse {
        /**
         * ID used to retrieve the ASR annotation set.
         */
        'id': string;
    }
}

export namespace v1.skill.asr.annotationSets {
    /**
     * This is the payload schema for annotation set contents. Note that when uploadId and filePathInUpload is present, and the payload content type is 'application/json', audioAsset is included in the returned annotation set content payload. For 'text/csv' annotation set content type, audioAssetDownloadUrl and audioAssetDownloadUrlExpiryTime are included in the csv headers for representing the audio download url and the expiry time of the presigned audio download. 
     * @interface
     */
    export interface GetAsrAnnotationSetAnnotationsResponse {
        'annotations': Array<v1.skill.asr.annotationSets.AnnotationWithAudioAsset>;
        'paginationContext'?: v1.skill.asr.annotationSets.PaginationContext;
    }
}

export namespace v1.skill.asr.annotationSets {
    /**
     *
     * @interface
     */
    export interface ListASRAnnotationSetsResponse {
        'annotationSets': Array<v1.skill.asr.annotationSets.AnnotationSetItems>;
        'paginationContext'?: v1.skill.asr.annotationSets.PaginationContext;
    }
}

export namespace v1.skill.asr.annotationSets {
    /**
     * This holds all data needed to control pagination from the user. 
     * @interface
     */
    export interface PaginationContext {
        /**
         * The page token, this should be passed as a `nextToken` query parameter to the API to retrieve more items. If this field is not present the end of all of the items was reached. If a `maxResults` query parameter was specified then no more than `maxResults` items are returned. 
         */
        'nextToken': string;
    }
}

export namespace v1.skill.asr.annotationSets {
    /**
     * This is the payload shema for updating asr annotation set contents. Note for text/csv content type, the  csv header definitions need to follow the properties of '#/definitions/Annotaion' 
     * @interface
     */
    export interface UpdateAsrAnnotationSetContentsPayload {
        'annotations': Array<v1.skill.asr.annotationSets.Annotation>;
    }
}

export namespace v1.skill.asr.annotationSets {
    /**
     *
     * @interface
     */
    export interface UpdateAsrAnnotationSetPropertiesRequestObject {
        /**
         * The name of ASR annotation set. The length of the name cannot exceed 170 chars. Only alphanumeric characters are accepted.
         */
        'name': string;
    }
}

export namespace v1.skill.asr.evaluations {
    /**
     *
     * @interface
     */
    export interface Annotation {
        /**
         * upload id obtained when developer creates an upload using catalog API
         */
        'uploadId': string;
        /**
         * file path in the uploaded zip file. For example, a zip containing a folder named 'a' and there is an audio b.mp3 in that folder. The file path is a/b.mp3. Notice that forward slash ('/') should be used to concatenate directories.
         */
        'filePathInUpload': string;
        /**
         * weight of the test case in an evaluation, the value would be used for calculating metrics such as overall error rate.  The acceptable values are from 1 - 1000. 1 means least significant, 1000 means mot significant. Here is how weight  impact the `OVERALL_ERROR_RATE` calculation: For example, an annotation set consists of 3 annotations and they have weight of 8, 1, 1. The evaluation results  show that only the first annotation test case passed while the rest of the test cases failed. In this case,  the overall error rate is (8 / (8 + 1 + 1)) = 0.8 
         */
        'evaluationWeight': number;
        /**
         * expected transcription text for the input audio. The acceptable length of the string is between 1 and 500 Unicode characters
         */
        'expectedTranscription': string;
    }
}

export namespace v1.skill.asr.evaluations {
    /**
     * Object containing information about downloading audio file
     * @interface
     */
    export interface AudioAsset {
        /**
         * S3 presigned download url for downloading the audio file
         */
        'downloadUrl': string;
        /**
         * timestamp when the audio download url expire in ISO 8601 format
         */
        'expiryTime': string;
    }
}

export namespace v1.skill.asr.evaluations {
    /**
     * Object containing information about the error occurred during an evaluation run. This filed would present if an unexpected error occurred during an evaluatin run. 
     * @interface
     */
    export interface ErrorObject {
        /**
         * human-readable error message
         */
        'message': string;
        /**
         * machine-readable error code
         */
        'code': string;
    }
}

export namespace v1.skill.asr.evaluations {
    /**
     * response body for GetAsrEvaluationsStatus API
     * @interface
     */
    export interface EvaluationMetadata {
        'status': v1.skill.asr.evaluations.EvaluationStatus;
        /**
         * indicate the total number of evaluations that are supposed to be run in the evaluation request
         */
        'totalEvaluationCount': number;
        /**
         * indicate the number of completed evaluations
         */
        'completedEvaluationCount': number;
        /**
         * indicate the start time stamp of the ASR evaluation job. ISO-8601 Format.
         */
        'startTimestamp': string;
        'request': v1.skill.asr.evaluations.PostAsrEvaluationsRequestObject;
        'error'?: v1.skill.asr.evaluations.ErrorObject;
        'result'?: v1.skill.asr.evaluations.EvaluationMetadataResult;
    }
}

export namespace v1.skill.asr.evaluations {
    /**
     * indicate the result of the evaluation. This field would be present if the evaluation status is `COMPLETED`
     * @interface
     */
    export interface EvaluationMetadataResult {
        'status': v1.skill.asr.evaluations.EvaluationResultStatus;
        'metrics': v1.skill.asr.evaluations.Metrics;
    }
}

export namespace v1.skill.asr.evaluations {
    /**
     * evaluation detailed result
     * @interface
     */
    export interface EvaluationResult {
        'status': v1.skill.asr.evaluations.EvaluationResultStatus;
        'annotation': v1.skill.asr.evaluations.AnnotationWithAudioAsset;
        'output'?: v1.skill.asr.evaluations.EvaluationResultOutput;
        'error'?: v1.skill.asr.evaluations.ErrorObject;
    }
}

export namespace v1.skill.asr.evaluations {
    /**
     *
     * @interface
     */
    export interface EvaluationResultOutput {
        /**
         * actual transcription returned from ASR for the audio
         */
        'transcription': string;
    }
}

export namespace v1.skill.asr.evaluations {
    /**
     * enum indicating the evaluation result status.   * `PASSED` - evaluation result is considered passed   * `FAILED` - evaluation result is considered failed 
     * @enum
     */
    export type EvaluationResultStatus = 'PASSED' | 'FAILED';
}

export namespace v1.skill.asr.evaluations {
    /**
     * Evaluation status:   * `IN_PROGRESS` - indicate the evaluation is in progress.   * `COMPLETED` - indicate the evaluation has been completed.   * `FAILED` - indicate the evaluation has run into an error. 
     * @enum
     */
    export type EvaluationStatus = 'IN_PROGRESS' | 'COMPLETED' | 'FAILED';
}

export namespace v1.skill.asr.evaluations {
    /**
     * response for GetAsrEvaluationsResults
     * @interface
     */
    export interface GetAsrEvaluationsResultsResponse {
        /**
         * array containing all evaluation results.
         */
        'results': Array<v1.skill.asr.evaluations.EvaluationResult>;
        'paginationContext'?: v1.skill.asr.evaluations.PaginationContext;
    }
}

export namespace v1.skill.asr.evaluations {
    /**
     * response body for a list evaluation API
     * @interface
     */
    export interface ListAsrEvaluationsResponse {
        /**
         * an array containing all evaluations that have ever run by developers based on the filter criteria defined in the request
         */
        'evaluations': Array<v1.skill.asr.evaluations.EvaluationItems>;
        'paginationContext'?: v1.skill.asr.evaluations.PaginationContext;
    }
}

export namespace v1.skill.asr.evaluations {
    /**
     *
     * @interface
     */
    export interface Metrics {
        /**
         * overall error rate for the ASR evaluation run
         */
        'overallErrorRate': number;
    }
}

export namespace v1.skill.asr.evaluations {
    /**
     * This holds all data needed to control pagination from the user. 
     * @interface
     */
    export interface PaginationContext {
        /**
         * The page token, this should be passed as a `nextToken` query parameter to the API to retrieve more items. If this field is not present the end of all of the items was reached. If a `maxResults` query parameter was specified then no more than `maxResults` items are returned. 
         */
        'nextToken': string;
    }
}

export namespace v1.skill.asr.evaluations {
    /**
     *
     * @interface
     */
    export interface PostAsrEvaluationsRequestObject {
        'skill': v1.skill.asr.evaluations.Skill;
        /**
         * ID for annotation set
         */
        'annotationSetId': string;
    }
}

export namespace v1.skill.asr.evaluations {
    /**
     *
     * @interface
     */
    export interface PostAsrEvaluationsResponseObject {
        /**
         * ID used to retrieve the evaluation status/results later.
         */
        'id': string;
    }
}

export namespace v1.skill.asr.evaluations {
    /**
     *
     * @interface
     */
    export interface Skill {
        'stage': v1.StageType;
        /**
         * skill locale in bcp 47 format
         */
        'locale': string;
    }
}

export namespace v1.skill.betaTest {
    /**
     * Beta test for an Alexa skill.
     * @interface
     */
    export interface BetaTest {
        /**
         * Expiry date of the beta test.
         */
        'expiryDate'?: string;
        'status'?: v1.skill.betaTest.Status;
        /**
         * Email address for providing feedback
         */
        'feedbackEmail'?: string;
        /**
         * Deeplinking for getting authorized to the beta test.
         */
        'invitationUrl'?: string;
        /**
         * Remaining invite count for the beta test.
         */
        'invitesRemaining'?: number;
    }
}

export namespace v1.skill.betaTest {
    /**
     * Status of the beta test.
     * @enum
     */
    export type Status = 'IN_DRAFT' | 'STARTING' | 'RUNNING' | 'STOPPING' | 'ENDED';
}

export namespace v1.skill.betaTest {
    /**
     * Beta test meta-data.
     * @interface
     */
    export interface TestBody {
        /**
         * Email address for providing feedback.
         */
        'feedbackEmail'?: string;
    }
}

export namespace v1.skill.betaTest {
    /**
     *
     * @interface
     */
    export interface UpdateBetaTestResponse {
    }
}

export namespace v1.skill.betaTest.testers {
    /**
     * Indicates whether the tester has accepted the invitation.
     * @enum
     */
    export type InvitationStatus = 'ACCEPTED' | 'NOT_ACCEPTED';
}

export namespace v1.skill.betaTest.testers {
    /**
     *
     * @interface
     */
    export interface ListTestersResponse {
        'testers'?: Array<v1.skill.betaTest.testers.TesterWithDetails>;
        'isTruncated'?: boolean;
        'nextToken'?: string;
    }
}

export namespace v1.skill.betaTest.testers {
    /**
     *
     * @interface
     */
    export interface Tester {
        /**
         * Email address of the tester.
         */
        'emailId'?: string;
    }
}

export namespace v1.skill.betaTest.testers {
    /**
     * Tester information.
     * @interface
     */
    export interface TesterWithDetails {
        /**
         * Email address of the tester.
         */
        'emailId'?: string;
        /**
         * Date and time when the tester is added to the beta test.
         */
        'associationDate'?: string;
        /**
         * Indicates whether the tester is allowed to be sent reminder.
         */
        'isReminderAllowed'?: boolean;
        'invitationStatus'?: v1.skill.betaTest.testers.InvitationStatus;
    }
}

export namespace v1.skill.betaTest.testers {
    /**
     * List of testers.
     * @interface
     */
    export interface TestersList {
        /**
         * List of the email address of testers.
         */
        'testers'?: Array<v1.skill.betaTest.testers.Tester>;
    }
}

export namespace v1.skill.certification {
    /**
     *
     * @interface
     */
    export interface CertificationResponse {
        /**
         * Certification Id for the skill
         */
        'id'?: string;
        'status'?: v1.skill.certification.CertificationStatus;
        /**
         * Timestamp for when the skill was submitted for certification.
         */
        'skillSubmissionTimestamp'?: string;
        'reviewTrackingInfo'?: v1.skill.certification.ReviewTrackingInfo;
        'result'?: v1.skill.certification.CertificationResult;
    }
}

export namespace v1.skill.certification {
    /**
     * Structure for the result for the outcomes of certification review for the skill. Currently provides the distribution information of a skill if the certification SUCCEEDED. 
     * @interface
     */
    export interface CertificationResult {
        'distributionInfo'?: v1.skill.certification.DistributionInfo;
    }
}

export namespace v1.skill.certification {
    /**
     * String that specifies the current status of skill's certification Possible values are \"IN_PROGRESS\", \"SUCCEEDED\", \"FAILED\" and \"CANCELLED\" 
     * @enum
     */
    export type CertificationStatus = 'IN_PROGRESS' | 'SUCCEEDED' | 'FAILED' | 'CANCELLED';
}

export namespace v1.skill.certification {
    /**
     * Summary of the certification resource. This is a leaner view of the certification resource for the collections API.
     * @interface
     */
    export interface CertificationSummary {
        /**
         * Certification Id for the skill.
         */
        'id'?: string;
        'status'?: v1.skill.certification.CertificationStatus;
        /**
         * Timestamp for when the skill was submitted for certification.
         */
        'skillSubmissionTimestamp'?: string;
        'reviewTrackingInfo'?: v1.skill.certification.ReviewTrackingInfoSummary;
    }
}

export namespace v1.skill.certification {
    /**
     * The distribution information for skill where Amazon distributed the skill
     * @interface
     */
    export interface DistributionInfo {
        /**
         * All countries where the skill was published in by Amazon.
         */
        'publishedCountries'?: Array<string>;
        'publicationFailures'?: Array<v1.skill.certification.PublicationFailure>;
    }
}

export namespace v1.skill.certification {
    /**
     * Structure for any updates to estimation completion time for certification review for the skill.
     * @interface
     */
    export interface EstimationUpdate {
        /**
         * Timestamp for originally estimated completion of certification review for the skill.
         */
        'originalEstimatedCompletionTimestamp'?: string;
        /**
         * Timestamp for originally estimated completion of certification review for the skill.
         */
        'revisedEstimatedCompletionTimestamp'?: string;
        /**
         * Reason for updates to estimates for certification review
         */
        'reason'?: string;
    }
}

export namespace v1.skill.certification {
    /**
     * List of certification summary for a skill.
     * @interface
     */
    export interface ListCertificationsResponse {
        '_links'?: v1.Links;
        /**
         * boolean value for if the response is truncated. isTruncated = true if more than the assigned maxResults parameter value certification items are available for the skill. The results are then paginated and the remaining results can be retrieved in a similar paginated manner by using 'next' link in the _links or using the nextToken in a following request. 
         */
        'isTruncated'?: boolean;
        /**
         * Encrypted token present when isTruncated is true.
         */
        'nextToken'?: string;
        /**
         * Total number of certification results available for the skill.
         */
        'totalCount'?: number;
        /**
         * List of certifications available for a skill. The list of certifications is sorted in a default descending sort order on id field. 
         */
        'items'?: Array<v1.skill.certification.CertificationSummary>;
    }
}

export namespace v1.skill.certification {
    /**
     * Information about why the skill was not published in certain countries.
     * @interface
     */
    export interface PublicationFailure {
        /**
         * Reason why Amazon did not publish the skill in certain countries.
         */
        'reason'?: string;
        /**
         * List of countries where Amazon did not publish the skill for a specific reason
         */
        'countries'?: Array<string>;
    }
}

export namespace v1.skill.certification {
    /**
     * Structure for review tracking information of the skill.
     * @interface
     */
    export interface ReviewTrackingInfo {
        /**
         * Timestamp for estimated completion of certification review for the skill.
         */
        'estimatedCompletionTimestamp'?: string;
        /**
         * Timestamp for actual completion of certification review for the skill.
         */
        'actualCompletionTimestamp'?: string;
        /**
         * Timestamp for when the last update was made to review tracking info.
         */
        'lastUpdated'?: string;
        /**
         * List of updates to estimation completion time for certification review for the skill.
         */
        'estimationUpdates'?: Array<v1.skill.certification.EstimationUpdate>;
    }
}

export namespace v1.skill.certification {
    /**
     * Structure for summarised view of review tracking information of the skill. This does not have the estimationUpdates array field.
     * @interface
     */
    export interface ReviewTrackingInfoSummary {
        /**
         * Timestamp for estimated completion of certification review for the skill.
         */
        'estimatedCompletionTimestamp'?: string;
        /**
         * Timestamp for actual completion of certification review workflow for the skill.
         */
        'actualCompletionTimestamp'?: string;
        /**
         * Timestamp for when the last update was made to review tracking info.
         */
        'lastUpdated'?: string;
    }
}

export namespace v1.skill {
    /**
     *
     * @interface
     */
    export interface CreateSkillRequest {
        /**
         * ID of the vendor owning the skill.
         */
        'vendorId'?: string;
        'manifest'?: v1.skill.Manifest.SkillManifest;
        'hosting'?: v1.skill.AlexaHosted.HostingConfiguration;
    }
}

export namespace v1.skill {
    /**
     *
     * @interface
     */
    export interface CreateSkillWithPackageRequest {
        /**
         * ID of the vendor owning the skill.
         */
        'vendorId'?: string;
        /**
         * The URL for the skill package.
         */
        'location': string;
    }
}

export namespace v1.skill.evaluations {
    /**
     * An enumeration indicating whether the user has explicitly confirmed or denied the entire intent. Possible values: \"NONE\", \"CONFIRMED\", \"DENIED\". 
     * @enum
     */
    export type ConfirmationStatusType = 'NONE' | 'CONFIRMED' | 'DENIED';
}

export namespace v1.skill.evaluations {
    /**
     * A representation of question prompts to the user for multi-turn, which requires user to fill a slot value, or confirm a slot value, or confirm an intent. 
     * @interface
     */
    export interface DialogAct {
        'type'?: v1.skill.evaluations.DialogActType;
        /**
         * The name of the target slot that needs to be filled or confirmed for a dialogAct
         */
        'targetSlot'?: string;
    }
}

export namespace v1.skill.evaluations {
    /**
     *
     * @enum
     */
    export type DialogActType = 'Dialog.ElicitSlot' | 'Dialog.ConfirmSlot' | 'Dialog.ConfirmIntent';
}

export namespace v1.skill.evaluations {
    /**
     *
     * @interface
     */
    export interface Intent {
        'name'?: string;
        'confirmationStatus'?: v1.skill.evaluations.ConfirmationStatusType;
        /**
         * A map of key-value pairs that further describes what the user meant based on a predefined intent schema. The map can be empty. 
         */
        'slots'?: { [key: string]: v1.skill.evaluations.Slot; };
    }
}

export namespace v1.skill.evaluations {
    /**
     * Included when the selected intent has dialog defined and the dialog is not completed.  To continue the dialog, provide the value of the token in the multiTurnToken field in the next request. 
     * @interface
     */
    export interface MultiTurn {
        'dialogAct'?: v1.skill.evaluations.DialogAct;
        /**
         * Opaque string which contains multi-turn related context.
         */
        'token'?: string;
        /**
         * A sample prompt defined in the dialog model for each DialogAct.
         */
        'prompt'?: string;
    }
}

export namespace v1.skill.evaluations {
    /**
     *
     * @interface
     */
    export interface ProfileNluRequest {
        /**
         * Actual representation of user input to Alexa.
         */
        'utterance': string;
        /**
         * Opaque string which contains multi-turn related context.
         */
        'multiTurnToken'?: string;
    }
}

export namespace v1.skill.evaluations {
    /**
     *
     * @interface
     */
    export interface ProfileNluResponse {
        /**
         * Represents when an utterance results in the skill exiting. It would be true when NLU selects 1P ExitAppIntent or GoHomeIntent, and false otherwise. 
         */
        'sessionEnded'?: boolean;
        'selectedIntent'?: v1.skill.evaluations.ProfileNluSelectedIntent;
        /**
         * All intents that Alexa considered for the utterance in the request, but did not select.
         */
        'consideredIntents'?: Array<v1.skill.evaluations.Intent>;
        'multiTurn'?: v1.skill.evaluations.MultiTurn;
    }
}

export namespace v1.skill.evaluations {
    /**
     *
     * @interface
     */
    export interface ResolutionsPerAuthorityItems {
        /**
         * The name of the authority for the slot values. For custom slot types, this authority label incorporates your skill ID and the slot type name. 
         */
        'authority'?: string;
        'status'?: v1.skill.evaluations.ResolutionsPerAuthorityStatus;
        /**
         * An array of resolved values for the slot.
         */
        'values'?: Array<v1.skill.evaluations.ResolutionsPerAuthorityValueItems>;
    }
}

export namespace v1.skill.evaluations {
    /**
     * An object representing the status of entity resolution for the slot.
     * @interface
     */
    export interface ResolutionsPerAuthorityStatus {
        'code'?: v1.skill.evaluations.ResolutionsPerAuthorityStatusCode;
    }
}

export namespace v1.skill.evaluations {
    /**
     * A code indicating the results of attempting to resolve the user utterance against the defined slot types. This can be one of the following: ER_SUCCESS_MATCH: The spoken value matched a value or synonym explicitly defined in your custom slot type. ER_SUCCESS_NO_MATCH: The spoken value did not match any values or synonyms explicitly defined in your custom slot type. ER_ERROR_TIMEOUT: An error occurred due to a timeout. ER_ERROR_EXCEPTION: An error occurred due to an exception during processing. 
     * @enum
     */
    export type ResolutionsPerAuthorityStatusCode = 'ER_SUCCESS_MATCH' | 'ER_SUCCESS_NO_MATCH' | 'ER_ERROR_TIMEOUT' | 'ER_ERROR_EXCEPTION';
}

export namespace v1.skill.evaluations {
    /**
     * An object representing the resolved value for the slot, based on the user's utterance and the slot type definition. 
     * @interface
     */
    export interface ResolutionsPerAuthorityValueItems {
        /**
         * The string for the resolved slot value.
         */
        'name'?: string;
        /**
         * The unique ID defined for the resolved slot value. This is based on the IDs defined in the slot type definition. 
         */
        'id'?: string;
    }
}

export namespace v1.skill.evaluations {
    /**
     *
     * @interface
     */
    export interface Slot {
        'name'?: string;
        'value'?: string;
        'confirmationStatus'?: v1.skill.evaluations.ConfirmationStatusType;
        'resolutions'?: v1.skill.evaluations.SlotResolutions;
    }
}

export namespace v1.skill.evaluations {
    /**
     * A resolutions object representing the results of resolving the words captured from the user's utterance. 
     * @interface
     */
    export interface SlotResolutions {
        /**
         * An array of objects representing each possible authority for entity resolution. An authority represents the source for the data provided for the slot. For a custom slot type, the authority is the slot type you defined. 
         */
        'resolutionsPerAuthority'?: Array<v1.skill.evaluations.ResolutionsPerAuthorityItems>;
    }
}

export namespace v1.skill.history {
    /**
     * The hypothesized confidence for this interaction.
     * @interface
     */
    export interface Confidence {
        'bin'?: v1.skill.history.ConfidenceBin;
    }
}

export namespace v1.skill.history {
    /**
     * Intent confidence bin for this utterance. * `HIGH`: Intent was recognized with high confidence. * `MEDIUM`: Intent was recognized with medium confidence. * `LOW`: Intent was recognized with low confidence. Note: Low confidence intents are not sent to the skill. 
     * @enum
     */
    export type ConfidenceBin = 'HIGH' | 'MEDIUM' | 'LOW';
}

export namespace v1.skill.history {
    /**
     * The dialog act used in the interaction.
     * @interface
     */
    export interface DialogAct {
        'name'?: v1.skill.history.DialogActName;
    }
}

export namespace v1.skill.history {
    /**
     * Dialog act directive name. * `Dialog.ElicitSlot`: Alexa asked the user for the value of a specific slot. (https://developer.amazon.com/docs/custom-skills/dialog-interface-reference.html#elicitslot) * `Dialog.ConfirmSlot`: Alexa confirmed the value of a specific slot before continuing with the dialog. (https://developer.amazon.com/docs/custom-skills/dialog-interface-reference.html#confirmslot) * `Dialog.ConfirmIntent`: Alexa confirmed the all the information the user has provided for the intent before the skill took action. (https://developer.amazon.com/docs/custom-skills/dialog-interface-reference.html#confirmintent) 
     * @enum
     */
    export type DialogActName = 'Dialog.ElicitSlot' | 'Dialog.ConfirmSlot' | 'Dialog.ConfirmIntent';
}

export namespace v1.skill.history {
    /**
     * Provides the intent name, slots and confidence of the intent used in this interaction.
     * @interface
     */
    export interface Intent {
        /**
         * The hypothesized intent for this utterance.
         */
        'name'?: string;
        'confidence'?: v1.skill.history.Confidence;
        /**
         * The hypothesized slot(s) for this interaction.
         */
        'slots'?: { [key: string]: v1.skill.history.Slot; };
    }
}

export namespace v1.skill.history {
    /**
     * A filter used to retrieve items where the intent confidence bin is equal to the given value. * `HIGH`: Intent was recognized with high confidence. * `MEDIUM`: Intent was recognized with medium confidence. * `LOW`: Intent was recognized with low confidence. Note: Low confidence intents are not sent to the skill. 
     * @enum
     */
    export type IntentConfidenceBin = 'HIGH' | 'MEDIUM' | 'LOW';
}

export namespace v1.skill.history {
    /**
     *
     * @interface
     */
    export interface IntentRequest {
        'dialogAct'?: v1.skill.history.DialogAct;
        'intent'?: v1.skill.history.Intent;
        'interactionType'?: v1.skill.history.InteractionType;
        'locale'?: v1.skill.history.IntentRequestLocales;
        'publicationStatus'?: v1.skill.history.PublicationStatus;
        'stage'?: v1.StageType;
        /**
         * The transcribed user speech.
         */
        'utteranceText'?: string;
    }
}

export namespace v1.skill.history {
    /**
     * Skill locale in which this interaction occurred.
     * @enum
     */
    export type IntentRequestLocales = 'en-US' | 'en-GB' | 'en-IN' | 'en-CA' | 'en-AU' | 'de-DE' | 'ja-JP';
}

export namespace v1.skill.history {
    /**
     * Response to the GET Intent Request History API. It contains the collection of utterances for the skill, nextToken and other metadata related to the search query.
     * @interface
     */
    export interface IntentRequests {
        '_links'?: v1.Links;
        /**
         * This token can be used to load the next page of the result.
         */
        'nextToken'?: string;
        /**
         * This property is true when all the results matching the search request haven't been returned, false otherwise.
         */
        'isTruncated'?: boolean;
        /**
         * Total number of records that matched the given search query.
         */
        'totalCount'?: number;
        /**
         * Position of the current page in the result set.
         */
        'startIndex'?: number;
        /**
         * The Skill Id.
         */
        'skillId'?: string;
        /**
         * List of intent requests for the skill
         */
        'items'?: Array<v1.skill.history.IntentRequest>;
    }
}

export namespace v1.skill.history {
    /**
     * Indicates if the utterance was executed as a \"ONE_SHOT\" interaction or \"MODAL\" interaction. * `ONE_SHOT`: The user invokes the skill and states their intent in a single phrase. * `MODAL`: The user first invokes the skill and then states their intent. 
     * @enum
     */
    export type InteractionType = 'ONE_SHOT' | 'MODAL';
}

export namespace v1.skill.history {
    /**
     * The publication status of the skill when this interaction occurred
     * @enum
     */
    export type PublicationStatus = 'Development' | 'Certification';
}

export namespace v1.skill.history {
    /**
     *
     * @interface
     */
    export interface Slot {
        /**
         * Name of the slot that was used in this interaction.
         */
        'name'?: string;
    }
}

export namespace v1.skill.history {
    /**
     * A filter used to retrieve items where the locale is equal to the given value.
     * @enum
     */
    export type LocaleInQuery = 'en-US' | 'en-GB' | 'en-IN' | 'en-CA' | 'en-AU' | 'de-DE' | 'ja-JP';
}

export namespace v1.skill.history {
    /**
     *
     * @enum
     */
    export type SortFieldForIntentRequestType = 'recordCount' | 'intent.name' | 'intent.confidence.bin' | 'stage' | 'dialogAct.name' | 'locale' | 'utteranceText' | 'publicationStatus' | 'interactionType';
}

export namespace v1.skill {
    /**
     * Set of properties of the image provided by the customer.
     * @interface
     */
    export interface ImageAttributes {
        'dimension'?: v1.skill.ImageDimension;
        'size'?: v1.skill.ImageSize;
        'maximumSize'?: v1.skill.ImageSize;
    }
}

export namespace v1.skill.interactionModel {
    /**
     * Enumerates delegation strategies used to control automatic dialog management through the defined dialog model. When no delegation strategies are defined, the value SKILL_RESPONSE is assumed. 
     * @enum
     */
    export type DelegationStrategyType = 'ALWAYS' | 'SKILL_RESPONSE';
}

export namespace v1.skill.interactionModel {
    /**
     * Defines dialog rules e.g. slot elicitation and validation, intent chaining etc.
     * @interface
     */
    export interface Dialog {
        /**
         * Defines a delegation strategy for the dialogs in this dialog model.
         */
        'delegationStrategy'?: v1.skill.interactionModel.DelegationStrategyType;
        /**
         * List of intents that have dialog rules associated with them. Dialogs can also span multiple intents.
         */
        'intents': Array<v1.skill.interactionModel.DialogIntents>;
    }
}

export namespace v1.skill.interactionModel {
    /**
     *
     * @interface
     */
    export interface DialogIntents {
        /**
         * Name of the intent that has a dialog specification.
         */
        'name': string;
        /**
         * Defines an intent-specific delegation strategy for this dialog intent. Overrides dialog-level setting.
         */
        'delegationStrategy'?: v1.skill.interactionModel.DelegationStrategyType;
        /**
         * List of slots that have dialog rules.
         */
        'slots'?: Array<v1.skill.interactionModel.DialogSlotItems>;
        /**
         * Describes whether confirmation of the intent is required.
         */
        'confirmationRequired'?: boolean;
        'prompts'?: v1.skill.interactionModel.DialogIntentsPrompts;
    }
}

export namespace v1.skill.interactionModel {
    /**
     * Collection of prompts for this intent.
     * @interface
     */
    export interface DialogIntentsPrompts {
        /**
         * Enum value in the dialog_slots map to reference the elicitation prompt id.
         */
        'elicitation'?: string;
        /**
         * Enum value in the dialog_slots map to reference the confirmation prompt id.
         */
        'confirmation'?: string;
    }
}

export namespace v1.skill.interactionModel {
    /**
     * Dialog prompts associated with this slot i.e. for elicitation and/or confirmation.
     * @interface
     */
    export interface DialogPrompts {
        /**
         * Reference to a prompt-id to use If this slot value is missing.
         */
        'elicitation'?: string;
        /**
         * Reference to a prompt-id to use to confirm the slots value.
         */
        'confirmation'?: string;
    }
}

export namespace v1.skill.interactionModel {
    /**
     *
     * @interface
     */
    export interface DialogSlotItems {
        /**
         * The name of the slot that has dialog rules associated with it.
         */
        'name': string;
        /**
         * Type of the slot in the dialog intent.
         */
        'type': string;
        /**
         * Describes whether elicitation of the slot is required.
         */
        'elicitationRequired'?: boolean;
        /**
         * Describes whether confirmation of the slot is required.
         */
        'confirmationRequired'?: boolean;
        'prompts': v1.skill.interactionModel.DialogPrompts;
        /**
         * List of validations for the slot. if validation fails, user will be prompted with the provided prompt.
         */
        'validations'?: Array<v1.skill.interactionModel.SlotValidation>;
    }
}

export namespace v1.skill.interactionModel {
    /**
     * Denotes skill's sensitivity for out-of-domain utterances.
     * @interface
     */
    export interface FallbackIntentSensitivity {
        'level': v1.skill.interactionModel.FallbackIntentSensitivityLevel;
    }
}

export namespace v1.skill.interactionModel {
    /**
     * Skill's sensitivity level for out-of-domain utterances. By default, the sensitivity level of the skill is set to ‘LOW’. As the sensitivity level for a skill is increased, more customer utterances that are not supported by the skill will be captured by AMAZON.FallbackIntent. 
     * @enum
     */
    export type FallbackIntentSensitivityLevel = 'HIGH' | 'MEDIUM' | 'LOW';
}

export namespace v1.skill.interactionModel {
    /**
     * The set of intents your service can accept and process.
     * @interface
     */
    export interface Intent {
        /**
         * Name to identify the intent.
         */
        'name': string;
        /**
         * List of slots within the intent.
         */
        'slots'?: Array<v1.skill.interactionModel.SlotDefinition>;
        /**
         * Phrases the user can speak e.g. to trigger an intent or provide value for a slot elicitation.
         */
        'samples'?: Array<string>;
    }
}

export namespace v1.skill.interactionModel {
    /**
     *
     * @interface
     */
    export interface InteractionModelData {
        'version'?: string;
        'description'?: string;
        'interactionModel': v1.skill.interactionModel.InteractionModelSchema;
    }
}

export namespace v1.skill.interactionModel {
    /**
     *
     * @interface
     */
    export interface InteractionModelSchema {
        'languageModel': v1.skill.interactionModel.LanguageModel;
        'dialog'?: v1.skill.interactionModel.Dialog;
        /**
         * List of prompts.
         */
        'prompts'?: Array<v1.skill.interactionModel.Prompt>;
    }
}

export namespace v1.skill.interactionModel {
    /**
     * Global configurations applicable to a skill's model.
     * @interface
     */
    export interface ModelConfiguration {
        'fallbackIntentSensitivity'?: v1.skill.interactionModel.FallbackIntentSensitivity;
    }
}

export namespace v1.skill.interactionModel {
    /**
     * Configuration object for multiple values capturing behavior for this slot.
     * @interface
     */
    export interface MultipleValuesConfig {
        /**
         * Boolean that indicates whether this slot can capture multiple values.
         */
        'enabled': boolean;
    }
}

export namespace v1.skill.interactionModel {
    /**
     *
     * @interface
     */
    export interface Prompt {
        /**
         * The prompt id, this id can be used from dialog definitions.
         */
        'id': string;
        /**
         * List of variations of the prompt, each variation can be either a text string or a well defined ssml string depending on the type defined.
         */
        'variations': Array<v1.skill.interactionModel.PromptItems>;
    }
}

export namespace v1.skill.interactionModel {
    /**
     *
     * @interface
     */
    export interface PromptItems {
        'type'?: v1.skill.interactionModel.PromptItemsType;
        /**
         * Specifies the prompt.
         */
        'value': string;
    }
}

export namespace v1.skill.interactionModel {
    /**
     * Prompt can be specified in different formats e.g. text, ssml.
     * @enum
     */
    export type PromptItemsType = 'SSML' | 'PlainText';
}

export namespace v1.skill.interactionModel {
    /**
     * Slot definition.
     * @interface
     */
    export interface SlotDefinition {
        /**
         * The name of the slot.
         */
        'name': string;
        /**
         * The type of the slot. It can be a built-in or custom type.
         */
        'type'?: string;
        /**
         * Configuration object for multiple values capturing behavior for this slot.
         */
        'multipleValues'?: v1.skill.interactionModel.MultipleValuesConfig;
        /**
         * Phrases the user can speak e.g. to trigger an intent or provide value for a slot elicitation.
         */
        'samples'?: Array<string>;
    }
}

export namespace v1.skill.interactionModel {
    /**
     * Custom slot type to define a list of possible values for a slot. Used for items that are not covered by Amazon's built-in slot types.
     * @interface
     */
    export interface SlotType {
        /**
         * The name of the custom slot type.
         */
        'name': string;
        /**
         * List of expected values. Values outside the list are still returned.
         */
        'values'?: Array<v1.skill.interactionModel.TypeValue>;
        'valueSupplier'?: v1.skill.interactionModel.ValueSupplier;
    }
}

export namespace v1.skill.interactionModel {
   /**
    * Validation on a slot with support for prompt and confirmation.
    * @interface
    */
    export type SlotValidation = v1.skill.interactionModel.HasEntityResolutionMatch | v1.skill.interactionModel.IsLessThanOrEqualTo | v1.skill.interactionModel.IsGreaterThan | v1.skill.interactionModel.IsNotInSet | v1.skill.interactionModel.IsInDuration | v1.skill.interactionModel.IsLessThan | v1.skill.interactionModel.IsNotInDuration | v1.skill.interactionModel.IsGreaterThanOrEqualTo | v1.skill.interactionModel.IsInSet;
}

export namespace v1.skill.interactionModel {
    /**
     * The value schema in type object of interaction model.
     * @interface
     */
    export interface TypeValue {
        'id'?: string;
        'name': v1.skill.interactionModel.TypeValueObject;
    }
}

export namespace v1.skill.interactionModel {
    /**
     * The object that contains individual type values.
     * @interface
     */
    export interface TypeValueObject {
        'value': string;
        'synonyms': Array<string>;
    }
}

export namespace v1.skill.interactionModel {
    /**
     * Catalog reference to provide values.
     * @interface
     */
    export interface ValueCatalog {
        /**
         * CatalogId.
         */
        'catalogId': string;
        /**
         * Catalog version.
         */
        'version': string;
    }
}

export namespace v1.skill.interactionModel {
   /**
    * Supplier object to provide slot values.
    * @interface
    */
    export type ValueSupplier = v1.skill.interactionModel.CatalogValueSupplier | v1.skill.interactionModel.InlineValueSupplier;
}

export namespace v1.skill.interactionModel.catalog {
    /**
     * Catalog request definitions.
     * @interface
     */
    export interface CatalogDefinitionOutput {
        'catalog'?: v1.skill.interactionModel.catalog.CatalogEntity;
        /**
         * Time of the catalog definition creation.
         */
        'creationTime'?: string;
        /**
         * Total number of versions.
         */
        'totalVersions'?: string;
    }
}

export namespace v1.skill.interactionModel.catalog {
    /**
     * Definition for catalog entity.
     * @interface
     */
    export interface CatalogEntity {
        /**
         * Name of the catalog.
         */
        'name'?: string;
        /**
         * Description string about the catalog.
         */
        'description'?: string;
    }
}

export namespace v1.skill.interactionModel.catalog {
    /**
     * Definition for catalog input.
     * @interface
     */
    export interface CatalogInput {
        /**
         * Name of the catalog.
         */
        'name': string;
        /**
         * Description string about the catalog.
         */
        'description'?: string;
    }
}

export namespace v1.skill.interactionModel.catalog {
    /**
     * Definition for catalog entity.
     * @interface
     */
    export interface CatalogItem {
        /**
         * Name of the catalog.
         */
        'name'?: string;
        /**
         * Description string about the catalog.
         */
        'description'?: string;
        /**
         * Identifier of the catalog, optional in get response as the request already has catalogId.
         */
        'catalogId'?: string;
        '_links'?: v1.Links;
    }
}

export namespace v1.skill.interactionModel.catalog {
    /**
     * CatalogId information.
     * @interface
     */
    export interface CatalogResponse {
        /**
         * ID of the catalog created.
         */
        'catalogId'?: string;
    }
}

export namespace v1.skill.interactionModel.catalog {
    /**
     * Defines the structure for catalog status response.
     * @interface
     */
    export interface CatalogStatus {
        'lastUpdateRequest'?: v1.skill.interactionModel.catalog.LastUpdateRequest;
    }
}

export namespace v1.skill.interactionModel.catalog {
    /**
     * Status of last modification request for a resource.
     * @enum
     */
    export type CatalogStatusType = 'FAILED' | 'IN_PROGRESS' | 'SUCCEEDED';
}

export namespace v1.skill.interactionModel.catalog {
    /**
     * Catalog request definitions.
     * @interface
     */
    export interface DefinitionData {
        'catalog': v1.skill.interactionModel.catalog.CatalogInput;
        /**
         * The vendorId that the catalog should belong to.
         */
        'vendorId': string;
    }
}

export namespace v1.skill.interactionModel.catalog {
    /**
     * Contains attributes related to last modification request of a resource.
     * @interface
     */
    export interface LastUpdateRequest {
        'status'?: v1.skill.interactionModel.catalog.CatalogStatusType;
        /**
         * The version id of the entity returned.
         */
        'version'?: string;
        'errors'?: Array<v1.skill.StandardizedError>;
    }
}

export namespace v1.skill.interactionModel.catalog {
    /**
     * List of catalog versions of a skill for the vendor.
     * @interface
     */
    export interface ListCatalogResponse {
        '_links'?: v1.Links;
        /**
         * List of catalogs. 
         */
        'catalogs'?: Array<v1.skill.interactionModel.catalog.CatalogItem>;
        'isTruncated'?: boolean;
        'nextToken'?: string;
        'totalCount'?: number;
    }
}

export namespace v1.skill.interactionModel.catalog {
    /**
     * Catalog update request object.
     * @interface
     */
    export interface UpdateRequest {
        /**
         * The catalog name.
         */
        'name': string;
        /**
         * The catalog description with a 255 character maximum.
         */
        'description': string;
    }
}

export namespace v1.skill.interactionModel.conflictDetection {
    /**
     * The status of conflict detection job.
     * @enum
     */
    export type ConflictDetectionJobStatus = 'IN_PROGRESS' | 'COMPLETED' | 'FAILED';
}

export namespace v1.skill.interactionModel.conflictDetection {
    /**
     *
     * @interface
     */
    export interface ConflictIntent {
        /**
         * Conflict intent name
         */
        'name': string;
        /**
         * List of conflict intent slots
         */
        'slots'?: { [key: string]: v1.skill.interactionModel.conflictDetection.ConflictIntentSlot; };
    }
}

export namespace v1.skill.interactionModel.conflictDetection {
    /**
     *
     * @interface
     */
    export interface ConflictIntentSlot {
        'value'?: string;
        'type': string;
    }
}

export namespace v1.skill.interactionModel.conflictDetection {
    /**
     *
     * @interface
     */
    export interface ConflictResult {
        /**
         * Sample utterance provided by 3P developers for intents.
         */
        'sampleUtterance': string;
        'intent': v1.skill.interactionModel.conflictDetection.ConflictIntent;
    }
}

export namespace v1.skill.interactionModel.conflictDetection {
    /**
     *
     * @interface
     */
    export interface GetConflictDetectionJobStatusResponse {
        'status': v1.skill.interactionModel.conflictDetection.ConflictDetectionJobStatus;
        /**
         * The total number of conflicts within skill model.
         */
        'totalConflicts'?: number;
    }
}

export namespace v1.skill.interactionModel.conflictDetection {
    /**
     *
     * @interface
     */
    export interface GetConflictsResponseResult {
        /**
         * Utterance resolved from sample utterance that causes conflicts among different intents.
         */
        'conflictingUtterance': string;
        'conflicts': Array<v1.skill.interactionModel.conflictDetection.ConflictResult>;
    }
}

export namespace v1.skill.interactionModel.conflictDetection {
    /**
     *
     * @interface
     */
    export interface PagedResponse {
        'paginationContext'?: v1.skill.interactionModel.conflictDetection.PaginationContext;
        '_links'?: v1.Links;
    }
}

export namespace v1.skill.interactionModel.conflictDetection {
    /**
     *
     * @interface
     */
    export interface PaginationContext {
        /**
         * A token returned if there are more results for the given inputs than `maxResults` from the request. It should also be used in the next request to retrieve more results.
         */
        'nextToken'?: string;
        /**
         * Total avaliable results for the given query.
         */
        'totalCount'?: number;
    }
}

export namespace v1.skill.interactionModel.jobs {
    /**
     * Request to create job definitions.
     * @interface
     */
    export interface CreateJobDefinitionRequest {
        /**
         * ID of the vendor owning the skill.
         */
        'vendorId'?: string;
        'jobDefinition'?: v1.skill.interactionModel.jobs.JobDefinition;
    }
}

export namespace v1.skill.interactionModel.jobs {
    /**
     * The response of create job definition.
     * @interface
     */
    export interface CreateJobDefinitionResponse {
        /**
         * Idenitifier of the job definition.
         */
        'jobId'?: string;
    }
}

export namespace v1.skill.interactionModel.jobs {
    /**
     * Error schema for dynamic update.
     * @interface
     */
    export interface DynamicUpdateError {
        /**
         * Dynamic update error code.
         */
        'code'?: string;
        /**
         * Readable description of error.
         */
        'message'?: string;
    }
}

export namespace v1.skill.interactionModel.jobs {
    /**
     * Execution data.
     * @interface
     */
    export interface Execution {
        /**
         * Identifier of the execution.
         */
        'executionId'?: string;
        /**
         * ISO date-time timestamp when the execution starts.
         */
        'timestamp'?: string;
        /**
         * ErrorCode to explain what went wrong in case of FAILUREs.
         */
        'errorCode'?: string;
        /**
         * Current status of the job execution.
         */
        'status'?: string;
        'errorDetails'?: v1.skill.interactionModel.jobs.JobErrorDetails;
    }
}

export namespace v1.skill.interactionModel.jobs {
    /**
     * ExecutionMetadata for executions.
     * @interface
     */
    export interface ExecutionMetadata {
        /**
         * Identifier of the job.
         */
        'jobId'?: string;
        /**
         * ErrorCode to explain what went wrong in case of FAILUREs.
         */
        'errorCode'?: string;
        /**
         * Current status of the job execution.
         */
        'status'?: string;
    }
}

export namespace v1.skill.interactionModel.jobs {
    /**
     * The response of get execution history.
     * @interface
     */
    export interface GetExecutionsResponse {
        'paginationContext'?: v1.skill.interactionModel.jobs.JobAPIPaginationContext;
        '_links'?: v1.Links;
        'executions'?: Array<v1.skill.interactionModel.jobs.Execution>;
    }
}

export namespace v1.skill.interactionModel.jobs {
    /**
     *
     * @interface
     */
    export interface JobAPIPaginationContext {
        'nextToken'?: string;
    }
}

export namespace v1.skill.interactionModel.jobs {
   /**
    * Definition for dynamic job.
    * @interface
    */
    export type JobDefinition = v1.skill.interactionModel.jobs.ReferenceVersionUpdate | v1.skill.interactionModel.jobs.CatalogAutoRefresh;
}

export namespace v1.skill.interactionModel.jobs {
    /**
     * Metadata of the job definition.
     * @interface
     */
    export interface JobDefinitionMetadata {
        /**
         * Job identifier.
         */
        'id'?: string;
        /**
         * Polymorphic type of the job.
         */
        'type'?: string;
        'status'?: v1.skill.interactionModel.jobs.JobDefinitionStatus;
    }
}

export namespace v1.skill.interactionModel.jobs {
    /**
     * Current status of the job definition.
     * @enum
     */
    export type JobDefinitionStatus = 'DISABLED' | 'ENALBED';
}

export namespace v1.skill.interactionModel.jobs {
    /**
     * Optional details if the execution is depending on other executions.
     * @interface
     */
    export interface JobErrorDetails {
        'executionMetadata'?: Array<v1.skill.interactionModel.jobs.ExecutionMetadata>;
    }
}

export namespace v1.skill.interactionModel.jobs {
    /**
     * The response of list job definitions.
     * @interface
     */
    export interface ListJobDefinitionsResponse {
        'paginationContext'?: v1.skill.interactionModel.jobs.JobAPIPaginationContext;
        '_links'?: v1.Links;
        'jobs'?: Array<v1.skill.interactionModel.jobs.JobDefinitionMetadata>;
    }
}

export namespace v1.skill.interactionModel.jobs {
   /**
    * Resource object where the job is applied on.
    * @interface
    */
    export type ResourceObject = v1.skill.interactionModel.jobs.InteractionModel | v1.skill.interactionModel.jobs.Catalog | v1.skill.interactionModel.jobs.SlotTypeReference;
}

export namespace v1.skill.interactionModel.jobs {
   /**
    * Condition when jobs will be executed.
    * @interface
    */
    export type Trigger = v1.skill.interactionModel.jobs.ReferencedResourceJobsComplete | v1.skill.interactionModel.jobs.Scheduled;
}

export namespace v1.skill.interactionModel.jobs {
    /**
     * Update job status.
     * @interface
     */
    export interface UpdateJobStatusRequest {
        'status': v1.skill.interactionModel.jobs.JobDefinitionStatus;
    }
}

export namespace v1.skill.interactionModel.jobs {
    /**
     * The list of errors.
     * @interface
     */
    export interface ValidationErrors {
        /**
         * The list of errors.
         */
        'errors'?: Array<v1.skill.interactionModel.jobs.DynamicUpdateError>;
    }
}

export namespace v1.skill.interactionModel {
    /**
     * Define the language model.
     * @interface
     */
    export interface LanguageModel {
        /**
         * Invocation name of the skill.
         */
        'invocationName': string;
        'types'?: Array<v1.skill.interactionModel.SlotType>;
        'intents': Array<v1.skill.interactionModel.Intent>;
        'modelConfiguration'?: v1.skill.interactionModel.ModelConfiguration;
    }
}

export namespace v1.skill.interactionModel.type {
    /**
     * Slot type request definitions.
     * @interface
     */
    export interface DefinitionData {
        'slotType'?: v1.skill.interactionModel.type.SlotTypeInput;
        /**
         * The vendorId that the slot type should belong to.
         */
        'vendorId'?: string;
    }
}

export namespace v1.skill.interactionModel.type {
    /**
     * The error which would fail requests.
     * @interface
     */
    export interface Error {
        /**
         * The error code.
         */
        'code'?: string;
        /**
         * The error message.
         */
        'message'?: string;
    }
}

export namespace v1.skill.interactionModel.type {
    /**
     * Contains attributes related to last modification request of a resource.
     * @interface
     */
    export interface LastUpdateRequest {
        'status'?: v1.skill.interactionModel.type.SlotTypeStatusType;
        /**
         * The version id of the entity returned.
         */
        'version'?: string;
        'errors'?: Array<v1.skill.interactionModel.type.Error>;
        'warnings'?: Array<v1.skill.interactionModel.type.Warning>;
    }
}

export namespace v1.skill.interactionModel.type {
    /**
     * List of slot types of a skill for the vendor.
     * @interface
     */
    export interface ListSlotTypeResponse {
        '_links'?: v1.Links;
        /**
         * List of slot types. 
         */
        'slotTypes'?: Array<v1.skill.interactionModel.type.SlotTypeItem>;
        'nextToken'?: string;
    }
}

export namespace v1.skill.interactionModel.type {
    /**
     * Slot Type request definitions.
     * @interface
     */
    export interface SlotTypeDefinitionOutput {
        'slotType'?: v1.skill.interactionModel.type.SlotTypeInput;
        /**
         * Total number of versions.
         */
        'totalVersions'?: string;
    }
}

export namespace v1.skill.interactionModel.type {
    /**
     * Definition for slot type input.
     * @interface
     */
    export interface SlotTypeInput {
        /**
         * Name of the slot type.
         */
        'name'?: string;
        /**
         * Description string about the slot type.
         */
        'description'?: string;
    }
}

export namespace v1.skill.interactionModel.type {
    /**
     * Definition for slot type entity.
     * @interface
     */
    export interface SlotTypeItem {
        /**
         * Name of the slot type.
         */
        'name'?: string;
        /**
         * Description string about the slot type.
         */
        'description'?: string;
        /**
         * Identifier of the slot type, optional in get response as the request already has slotTypeId.
         */
        'id'?: string;
        '_links'?: v1.Links;
    }
}

export namespace v1.skill.interactionModel.type {
    /**
     * Slot Type information.
     * @interface
     */
    export interface SlotTypeResponse {
        'slotType'?: v1.skill.interactionModel.type.SlotTypeResponseEntity;
    }
}

export namespace v1.skill.interactionModel.type {
    /**
     * SlotTypeId information.
     * @interface
     */
    export interface SlotTypeResponseEntity {
        /**
         * ID of the slot type created.
         */
        'id'?: string;
    }
}

export namespace v1.skill.interactionModel.type {
    /**
     * Defines the structure for slot type status response.
     * @interface
     */
    export interface SlotTypeStatus {
        'updateRequest'?: v1.skill.interactionModel.type.LastUpdateRequest;
    }
}

export namespace v1.skill.interactionModel.type {
    /**
     * Status of last modification request for a resource.
     * @enum
     */
    export type SlotTypeStatusType = 'FAILED' | 'IN_PROGRESS' | 'SUCCEEDED';
}

export namespace v1.skill.interactionModel.type {
    /**
     * Slot type update definition object.
     * @interface
     */
    export interface SlotTypeUpdateDefinition {
        /**
         * The slot type description with a 255 character maximum.
         */
        'description': string;
    }
}

export namespace v1.skill.interactionModel.type {
    /**
     * Slot type update request object.
     * @interface
     */
    export interface UpdateRequest {
        'slotType'?: v1.skill.interactionModel.type.SlotTypeUpdateDefinition;
    }
}

export namespace v1.skill.interactionModel.type {
    /**
     * The warning which would not fail requests.
     * @interface
     */
    export interface Warning {
        /**
         * The warning code.
         */
        'code'?: string;
        /**
         * The warning message.
         */
        'message'?: string;
    }
}

export namespace v1.skill.interactionModel.typeVersion {
    /**
     * List of slot type versions of a skill for the vendor.
     * @interface
     */
    export interface ListSlotTypeVersionResponse {
        '_links'?: v1.Links;
        /**
         * List of slot types. 
         */
        'slotTypeVersions'?: Array<v1.skill.interactionModel.typeVersion.SlotTypeVersionItem>;
        'nextToken'?: string;
    }
}

export namespace v1.skill.interactionModel.typeVersion {
    /**
     * Slot Type version data with metadata.
     * @interface
     */
    export interface SlotTypeVersionData {
        'slotType'?: v1.skill.interactionModel.typeVersion.SlotTypeVersionDataObject;
    }
}

export namespace v1.skill.interactionModel.typeVersion {
    /**
     * Slot Type version fields with metadata.
     * @interface
     */
    export interface SlotTypeVersionDataObject {
        /**
         * Slot type id associated with the slot type version.
         */
        'id'?: string;
        'definition'?: v1.skill.interactionModel.typeVersion.ValueSupplierObject;
        /**
         * Description string for specific slot type version.
         */
        'description'?: string;
        /**
         * Specific slot type version.
         */
        'version'?: string;
    }
}

export namespace v1.skill.interactionModel.typeVersion {
    /**
     * Definition for slot type entity.
     * @interface
     */
    export interface SlotTypeVersionItem {
        /**
         * Version number of slot type.
         */
        'version'?: string;
        /**
         * Description string about the slot type version.
         */
        'description'?: string;
        '_links'?: v1.Links;
    }
}

export namespace v1.skill.interactionModel.typeVersion {
    /**
     * Value supplier object for slot definition.
     * @interface
     */
    export interface ValueSupplierObject {
        'valueSupplier'?: v1.skill.interactionModel.ValueSupplier;
    }
}

export namespace v1.skill.interactionModel.typeVersion {
    /**
     * Slot Type version specific data.
     * @interface
     */
    export interface VersionData {
        'slotType'?: v1.skill.interactionModel.typeVersion.VersionDataObject;
    }
}

export namespace v1.skill.interactionModel.typeVersion {
    /**
     * Slot Type version fields with specific data.
     * @interface
     */
    export interface VersionDataObject {
        'definition'?: v1.skill.interactionModel.typeVersion.ValueSupplierObject;
        /**
         * Description string for specific slot type version.
         */
        'description'?: string;
    }
}

export namespace v1.skill.interactionModel.typeVersion {
    /**
     * Slot Type update description wrapper.
     * @interface
     */
    export interface SlotTypeUpdate {
        'slotType'?: v1.skill.interactionModel.typeVersion.SlotTypeUpdateObject;
    }
}

export namespace v1.skill.interactionModel.typeVersion {
    /**
     * Slot Type update description object.
     * @interface
     */
    export interface SlotTypeUpdateObject {
        /**
         * The slot type description with a 255 character maximum.
         */
        'description'?: string;
    }
}

export namespace v1.skill.interactionModel.version {
    /**
     * Version metadata about the catalog entity version.
     * @interface
     */
    export interface CatalogEntityVersion {
        'version'?: string;
        'creationTime'?: string;
        'description'?: string;
        '_links'?: v1.skill.interactionModel.version.Links;
    }
}

export namespace v1.skill.interactionModel.version {
    /**
     * List of catalog values.
     * @interface
     */
    export interface CatalogValues {
        'isTruncated'?: boolean;
        'nextToken'?: string;
        /**
         * Total number of catalog values.
         */
        'totalCount'?: number;
        '_links'?: v1.Links;
        'values'?: Array<v1.skill.interactionModel.version.ValueSchema>;
    }
}

export namespace v1.skill.interactionModel.version {
    /**
     * Catalog version data with metadata.
     * @interface
     */
    export interface CatalogVersionData {
        'source'?: v1.skill.interactionModel.version.InputSource;
        /**
         * Description string for specific catalog version.
         */
        'description'?: string;
        /**
         * Specific catalog version.
         */
        'version'?: string;
    }
}

export namespace v1.skill.interactionModel.version {
    /**
     * Definition for catalog version input data.
     * @interface
     */
    export interface InputSource {
        /**
         * Type of catalog.
         */
        'type'?: string;
        /**
         * Url to the catalog reference.
         */
        'url'?: string;
    }
}

export namespace v1.skill.interactionModel.version {
    /**
     *
     * @interface
     */
    export interface Links {
        'self'?: v1.Link;
    }
}

export namespace v1.skill.interactionModel.version {
    /**
     * List of catalog versions of a catalog for the vendor in sortDirection order, descending as default.
     * @interface
     */
    export interface ListCatalogEntityVersionsResponse {
        '_links'?: v1.skill.interactionModel.version.Links;
        /**
         * List of catalog entity versions. 
         */
        'catalogVersions'?: Array<v1.skill.interactionModel.version.CatalogEntityVersion>;
        'isTruncated'?: boolean;
        'nextToken'?: string;
        'totalCount'?: number;
    }
}

export namespace v1.skill.interactionModel.version {
    /**
     * List of interactionModel versions of a skill for the vendor
     * @interface
     */
    export interface ListResponse {
        '_links'?: v1.Links;
        /**
         * List of interaction model versions. 
         */
        'skillModelVersions'?: Array<v1.skill.interactionModel.version.VersionItems>;
        'isTruncated'?: boolean;
        'nextToken'?: string;
    }
}

export namespace v1.skill.interactionModel.version {
    /**
     * The value schema in type object of interaction model.
     * @interface
     */
    export interface ValueSchema {
        'id'?: string;
        'name'?: v1.skill.interactionModel.version.ValueSchemaName;
    }
}

export namespace v1.skill.interactionModel.version {
    /**
     *
     * @interface
     */
    export interface ValueSchemaName {
        'value'?: string;
        'synonyms'?: Array<string>;
    }
}

export namespace v1.skill.interactionModel.version {
    /**
     * Catalog version specific data.
     * @interface
     */
    export interface VersionData {
        'source': v1.skill.interactionModel.version.InputSource;
        /**
         * Description string for specific catalog version.
         */
        'description'?: string;
    }
}

export namespace v1.skill.interactionModel.version {
    /**
     * Version metadata about the entity.
     * @interface
     */
    export interface VersionItems {
        'version'?: string;
        'creationTime'?: string;
        'description'?: string;
        '_links'?: v1.skill.interactionModel.version.Links;
    }
}

export namespace v1.skill.interactionModel.version {
    /**
     * Catalog update description object.
     * @interface
     */
    export interface CatalogUpdate {
        /**
         * The catalog description with a 255 character maximum.
         */
        'description'?: string;
    }
}

export namespace v1.skill.invocations {
    /**
     * Region of endpoint to be called.
     * @enum
     */
    export type EndPointRegions = 'NA' | 'EU' | 'FE';
}

export namespace v1.skill.invocations {
    /**
     *
     * @interface
     */
    export interface InvocationResponseResult {
        'skillExecutionInfo'?: v1.skill.invocations.SkillExecutionInfo;
        'error'?: v1.skill.StandardizedError;
    }
}

export namespace v1.skill.invocations {
    /**
     * String that specifies the status of skill invocation. Possible values are \"SUCCEEDED\", and \"FAILED\". 
     * @enum
     */
    export type InvocationResponseStatus = 'SUCCEEDED' | 'FAILED';
}

export namespace v1.skill.invocations {
    /**
     *
     * @interface
     */
    export interface InvokeSkillRequest {
        'endpointRegion': v1.skill.invocations.EndPointRegions;
        'skillRequest': v1.skill.invocations.SkillRequest;
    }
}

export namespace v1.skill.invocations {
    /**
     *
     * @interface
     */
    export interface InvokeSkillResponse {
        'status'?: v1.skill.invocations.InvocationResponseStatus;
        'result'?: v1.skill.invocations.InvocationResponseResult;
    }
}

export namespace v1.skill.invocations {
    /**
     *
     * @interface
     */
    export interface Metrics {
        /**
         * How long, in milliseconds, it took the skill's Lambda or HTTPS endpoint to process the request. 
         */
        'skillExecutionTimeInMilliseconds'?: number;
    }
}

export namespace v1.skill.invocations {
    /**
     *
     * @interface
     */
    export interface Request {
        /**
         * Skill's Lambda or HTTPS endpoint.
         */
        'endpoint'?: string;
        /**
         * JSON payload that was sent to the skill's Lambda or HTTPS endpoint. 
         */
        'body'?: any;
    }
}

export namespace v1.skill.invocations {
    /**
     *
     * @interface
     */
    export interface Response {
        /**
         * Payload that was returned by the skill's Lambda or HTTPS endpoint. 
         */
        'body'?: any;
    }
}

export namespace v1.skill.invocations {
    /**
     *
     * @interface
     */
    export interface SkillExecutionInfo {
        'invocationRequest'?: { [key: string]: v1.skill.invocations.Request; };
        'invocationResponse'?: { [key: string]: v1.skill.invocations.Response; };
        'metrics'?: { [key: string]: v1.skill.invocations.Metrics; };
    }
}

export namespace v1.skill.invocations {
    /**
     *
     * @interface
     */
    export interface SkillRequest {
        /**
         * ASK request body schema as defined in the public facing documentation (https://developer.amazon.com/en-US/docs/alexa/custom-skills/request-and-response-json-reference.html#request-body-syntax) 
         */
        'body': any;
    }
}

export namespace v1.skill.metrics {
    /**
     * Response object for the API call which contains metrics data.
     * @interface
     */
    export interface GetMetricDataResponse {
        /**
         * The name of metric which customer requested.
         */
        'metric': string;
        /**
         * The timestamps for the data points.
         */
        'timestamps': Array<string>;
        /**
         * The data points for the metric corresponding to Timestamps.
         */
        'values': Array<number>;
        /**
         * A token that marks the next batch of returned results.
         */
        'nextToken'?: string;
    }
}

export namespace v1.skill.metrics {
    /**
     * A distinct set of logic which predictably returns a set of data.
     * @enum
     */
    export type Metric = 'uniqueCustomers' | 'totalEnablements' | 'totalUtterances' | 'successfulUtterances' | 'failedUtterances' | 'totalSessions' | 'successfulSessions' | 'incompleteSessions' | 'userEndedSessions' | 'skillEndedSessions';
}

export namespace v1.skill.metrics {
    /**
     * The aggregation period to use when retrieving the metric, follows ISO_8601#Durations format.
     * @enum
     */
    export type Period = 'SINGLE' | 'PT15M' | 'PT1H' | 'P1D';
}

export namespace v1.skill.metrics {
    /**
     * The type of the skill (custom, smartHome and flashBriefing).
     * @enum
     */
    export type SkillType = 'custom' | 'smartHome' | 'flashBriefing';
}

export namespace v1.skill.metrics {
    /**
     * The stage of the skill (live, development).
     * @enum
     */
    export type StageForMetric = 'live' | 'development';
}

export namespace v1.skill.nlu.annotationSets {
    /**
     *
     * @interface
     */
    export interface AnnotationSetEntity {
        'locale'?: string;
        /**
         * Name of the NLU annotation set
         */
        'name'?: string;
        /**
         * Number of entries which represents number of utterances in each NLU annotation set content
         */
        'numberOfEntries'?: number;
        /**
         * The lastest updated timestamp for the NLU annotation set
         */
        'updatedTimestamp'?: string;
    }
}

export namespace v1.skill.nlu.annotationSets {
    /**
     *
     * @interface
     */
    export interface CreateNLUAnnotationSetRequest {
        /**
         * The locale of the NLU annotation set
         */
        'locale': string;
        /**
         * The name of NLU annotation set provided by customer
         */
        'name': string;
    }
}

export namespace v1.skill.nlu.annotationSets {
    /**
     *
     * @interface
     */
    export interface CreateNLUAnnotationSetResponse {
        /**
         * Id used to retrieve the NLU annotation set.
         */
        'id'?: string;
    }
}

export namespace v1.skill.nlu.annotationSets {
    /**
     * Links for the API navigation.
     * @interface
     */
    export interface Links {
        'self'?: v1.Link;
        'next'?: v1.Link;
    }
}

export namespace v1.skill.nlu.annotationSets {
    /**
     *
     * @interface
     */
    export interface ListNLUAnnotationSetsResponse {
        'annotationSets'?: Array<v1.skill.nlu.annotationSets.AnnotationSet>;
        'paginationContext'?: v1.skill.nlu.annotationSets.PaginationContext;
        '_links'?: v1.skill.nlu.annotationSets.Links;
    }
}

export namespace v1.skill.nlu.annotationSets {
    /**
     *
     * @interface
     */
    export interface PaginationContext {
        /**
         * Opaque token returned if there are more results for the given inputs than `maxResults` from the request.
         */
        'nextToken'?: string;
    }
}

export namespace v1.skill.nlu.annotationSets {
    /**
     *
     * @interface
     */
    export interface UpdateNLUAnnotationSetAnnotationsRequest {
    }
}

export namespace v1.skill.nlu.annotationSets {
    /**
     *
     * @interface
     */
    export interface UpdateNLUAnnotationSetPropertiesRequest {
        /**
         * The name of NLU annotation set provided by customer
         */
        'name': string;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @interface
     */
    export interface Actual {
        'domain'?: string;
        'intent'?: v1.skill.nlu.evaluations.Intent;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     * An enumeration indicating whether the user has explicitly confirmed or denied the entire intent/slot. Possible values: 'NONE', 'CONFIRMED', 'DENIED'. 
     * @enum
     */
    export type ConfirmationStatus = 'NONE' | 'CONFIRMED' | 'DENIED';
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @interface
     */
    export interface EvaluateNLURequest {
        'stage': any;
        'locale': string;
        'source': v1.skill.nlu.evaluations.Source;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @interface
     */
    export interface EvaluateResponse {
        /**
         * Id used to retrieve the evaluation later.
         */
        'id'?: string;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @interface
     */
    export interface EvaluationEntity {
        'startTimestamp'?: string;
        'endTimestamp'?: string;
        'status'?: v1.skill.nlu.evaluations.Status;
        /**
         * Error message when evaluation job fails
         */
        'errorMessage'?: string;
        'inputs'?: v1.skill.nlu.evaluations.EvaluationInputs;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @interface
     */
    export interface EvaluationInputs {
        'locale'?: string;
        'stage'?: any;
        'source'?: v1.skill.nlu.evaluations.Source;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @interface
     */
    export interface Expected {
        'domain'?: string;
        'intent'?: v1.skill.nlu.evaluations.ExpectedIntent;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @interface
     */
    export interface ExpectedIntent {
        'name'?: string;
        'slots'?: { [key: string]: v1.skill.nlu.evaluations.ExpectedIntentSlotsProps; };
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @interface
     */
    export interface ExpectedIntentSlotsProps {
        'value'?: string;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @interface
     */
    export interface GetNLUEvaluationResponseLinks {
        'results'?: v1.skill.nlu.evaluations.Results;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @interface
     */
    export interface Inputs {
        'utterance'?: string;
        /**
         * Datetime to use to base date operations on.
         */
        'referenceTimestamp'?: string;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @interface
     */
    export interface Intent {
        'name'?: string;
        'confirmationStatus'?: v1.skill.nlu.evaluations.ConfirmationStatus;
        'slots'?: { [key: string]: v1.skill.nlu.evaluations.SlotsProps; };
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     * Links for the API navigation.
     * @interface
     */
    export interface Links {
        'self'?: v1.Link;
        'next'?: v1.Link;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @interface
     */
    export interface PagedResponse {
        'paginationContext'?: v1.skill.nlu.evaluations.PaginationContext;
        '_links'?: v1.skill.nlu.evaluations.Links;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @interface
     */
    export interface PagedResultsResponse {
        'paginationContext'?: v1.skill.nlu.evaluations.PagedResultsResponsePaginationContext;
        '_links'?: v1.skill.nlu.evaluations.Links;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @interface
     */
    export interface PagedResultsResponsePaginationContext {
        /**
         * opaque token returned if there are more results for the given inputs than `maxResults` from the request.
         */
        'nextToken'?: string;
        /**
         * Total available results for the given query.
         */
        'totalCount'?: string;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @interface
     */
    export interface PaginationContext {
        /**
         * opaque token returned if there are more results for the given inputs than `maxResults` from the request.
         */
        'nextToken'?: string;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     * A resolutions object representing the results of resolving the words captured from the user's utterance. 
     * @interface
     */
    export interface Resolutions {
        /**
         * An array of objects representing each possible authority for entity resolution. An authority represents the source for the data provided for the slot. For a custom slot type, the authority is the slot type you defined. 
         */
        'resolutionsPerAuthority'?: Array<{ [key: string]: v1.skill.nlu.evaluations.ResolutionsPerAuthority; }>;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @interface
     */
    export interface ResolutionsPerAuthority {
        /**
         * The name of the authority for the slot values. For custom slot types, this authority label incorporates your skill ID and the slot type name. 
         */
        'authority'?: string;
        'status'?: v1.skill.nlu.evaluations.ResolutionsPerAuthorityStatus;
        /**
         * An array of resolved values for the slot.
         */
        'values'?: Array<v1.skill.nlu.evaluations.ResolutionsPerAuthorityValue>;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @interface
     */
    export interface ResolutionsPerAuthorityStatus {
        /**
         * A code indicating the results of attempting to resolve the user utterance against the defined slot types. This can be one of the following: ER_SUCCESS_MATCH: The spoken value matched a value or synonym explicitly defined in your custom slot type. ER_SUCCESS_NO_MATCH: The spoken value did not match any values or synonyms explicitly defined in your custom slot type. ER_ERROR_TIMEOUT: An error occurred due to a timeout. ER_ERROR_EXCEPTION: An error occurred due to an exception during processing. 
         */
        'code'?: v1.skill.nlu.evaluations.ResolutionsPerAuthorityStatusCode;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     * A code indicating the results of attempting to resolve the user utterance against the defined slot types. This can be one of the following: ER_SUCCESS_MATCH: The spoken value matched a value or synonym explicitly defined in your custom slot type. ER_SUCCESS_NO_MATCH: The spoken value did not match any values or synonyms explicitly defined in your custom slot type. ER_ERROR_TIMEOUT: An error occurred due to a timeout. ER_ERROR_EXCEPTION: An error occurred due to an exception during processing. 
     * @enum
     */
    export type ResolutionsPerAuthorityStatusCode = 'ER_SUCCESS_MATCH' | 'ER_SUCCESS_NO_MATCH' | 'ER_ERROR_TIMEOUT' | 'ER_ERROR_EXCEPTION';
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @interface
     */
    export interface ResolutionsPerAuthorityValue {
        /**
         * The string for the resolved slot value.
         */
        'name'?: string;
        /**
         * The unique ID defined for the resolved slot value. This is based on the IDs defined in the slot type definition. 
         */
        'id'?: string;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @interface
     */
    export interface Results {
        /**
         * url to get the test case result details Example: /v1/skills/{skillId}/nluEvaluations/{evaluationId}/results 
         */
        'href'?: string;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @enum
     */
    export type ResultsStatus = 'PASSED' | 'FAILED';
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @interface
     */
    export interface SlotsProps {
        'name'?: string;
        'value'?: string;
        'confirmationStatus'?: v1.skill.nlu.evaluations.ConfirmationStatus;
        'resolutions'?: v1.skill.nlu.evaluations.Resolutions;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     * Use Annotation Set as evaluation source 
     * @interface
     */
    export interface Source {
        /**
         * ID of the annotation set
         */
        'annotationId'?: string;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @enum
     */
    export type Status = 'PASSED' | 'FAILED' | 'IN_PROGRESS' | 'ERROR';
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @interface
     */
    export interface TestCase {
        'status'?: v1.skill.nlu.evaluations.ResultsStatus;
        'inputs'?: v1.skill.nlu.evaluations.Inputs;
        'actual'?: v1.skill.nlu.evaluations.Actual;
        'expected'?: Array<v1.skill.nlu.evaluations.Expected>;
    }
}

export namespace v1.skill.publication {
    /**
     *
     * @interface
     */
    export interface PublishSkillRequest {
        /**
         * Used to determine when the skill Publishing should start. It takes the request timestamp as default value. The date range can be a maximum of upto 6 months from the current time stamp. The format should be the  RFC 3399 variant of ISO 8601. e.g 2019-04-12T23:20:50.52Z
         */
        'publishesAtDate'?: string;
    }
}

export namespace v1.skill.publication {
    /**
     *
     * @interface
     */
    export interface SkillPublicationResponse {
        /**
         * Used to determine when the skill Publishing should start.
         */
        'publishesAtDate'?: string;
        'status'?: v1.skill.publication.SkillPublicationStatus;
    }
}

export namespace v1.skill.publication {
    /**
     * Status of publishing
     * @enum
     */
    export type SkillPublicationStatus = 'IN_PROGRESS' | 'SUCCEEDED' | 'FAILED' | 'CANCELLED' | 'SCHEDULED';
}

export namespace v1.skill.resourceSchema {
    /**
     *
     * @interface
     */
    export interface GetResourceSchemaResponse {
        /**
         * S3 presigned URL to schema location.
         */
        'schemaLocationUrl'?: string;
        /**
         * Timestamp when the schema location url expires in ISO 8601 format.
         */
        'expiryTime'?: string;
    }
}

export namespace v1.skill.simulations {
    /**
     *
     * @interface
     */
    export interface AlexaExecutionInfo {
        'alexaResponses'?: Array<v1.skill.simulations.AlexaResponse>;
    }
}

export namespace v1.skill.simulations {
    /**
     *
     * @interface
     */
    export interface AlexaResponse {
        /**
         * The type of Alexa response
         */
        'type'?: string;
        /**
         * The detail information needs to exposed in this type of Alexa response. 
         */
        'content'?: v1.skill.simulations.AlexaResponseContent;
    }
}

export namespace v1.skill.simulations {
    /**
     *
     * @interface
     */
    export interface AlexaResponseContent {
        /**
         * The plain text get from Alexa speech response
         */
        'caption'?: string;
    }
}

export namespace v1.skill.simulations {
    /**
     * Model of a virtual device used for simulation. This device object emulates attributes associated with a real Alexa enabled device. 
     * @interface
     */
    export interface Device {
        /**
         * A valid locale (e.g \"en-US\") for the virtual device used in simulation. 
         */
        'locale': string;
    }
}

export namespace v1.skill.simulations {
    /**
     *
     * @interface
     */
    export interface Input {
        /**
         * A string corresponding to the utterance text of what a customer would say to Alexa. 
         */
        'content': string;
    }
}

export namespace v1.skill.simulations {
    /**
     *
     * @interface
     */
    export interface Invocation {
        'invocationRequest'?: v1.skill.simulations.InvocationRequest;
        'invocationResponse'?: v1.skill.simulations.InvocationResponse;
        'metrics'?: v1.skill.simulations.Metrics;
    }
}

export namespace v1.skill.simulations {
    /**
     *
     * @interface
     */
    export interface InvocationRequest {
        /**
         * Skill's Lambda or HTTPS endpoint.
         */
        'endpoint'?: string;
        /**
         * JSON payload that was sent to the skill's Lambda or HTTPS endpoint. 
         */
        'body'?: { [key: string]: any; };
    }
}

export namespace v1.skill.simulations {
    /**
     *
     * @interface
     */
    export interface InvocationResponse {
        /**
         * Payload that was returned by the skill's Lambda or HTTPS endpoint. 
         */
        'body'?: { [key: string]: any; };
    }
}

export namespace v1.skill.simulations {
    /**
     *
     * @interface
     */
    export interface Metrics {
        /**
         * How long, in milliseconds, it took the skill's Lambda or HTTPS endpoint to process the request. 
         */
        'skillExecutionTimeInMilliseconds'?: number;
    }
}

export namespace v1.skill.simulations {
    /**
     * Session settings for running current simulation. 
     * @interface
     */
    export interface Session {
        'mode'?: v1.skill.simulations.SessionMode;
    }
}

export namespace v1.skill.simulations {
    /**
     * Indicate the session mode of the current simulation is using. 
     * @enum
     */
    export type SessionMode = 'DEFAULT' | 'FORCE_NEW_SESSION';
}

export namespace v1.skill.simulations {
    /**
     * Simulation settings for the current simulation request. 
     * @interface
     */
    export interface Simulation {
        'type'?: v1.skill.simulations.SimulationType;
    }
}

export namespace v1.skill.simulations {
    /**
     *
     * @interface
     */
    export interface SimulationResult {
        'alexaExecutionInfo'?: v1.skill.simulations.AlexaExecutionInfo;
        'skillExecutionInfo'?: v1.skill.simulations.Invocation;
        'error'?: v1.Error;
    }
}

export namespace v1.skill.simulations {
    /**
     * String indicating the type of simulation request. Possible values are \"DEFAULT\" and \"NFI_ISOLATED_SIMULATION\". \"NFI_ISOLATED_SIMULATION\" is used to test the NFI(Name Free Interaction) enabled skills in isolation. This field is reserved for testing Name Free Interactions(NFI). Skills that are eligible to add NFI can only use this field. To learn more, visit https://developer.amazon.com/en-US/docs/alexa/custom-skills/understand-name-free-interaction-for-custom-skills.html 
     * @enum
     */
    export type SimulationType = 'DEFAULT' | 'NFI_ISOLATED_SIMULATION';
}

export namespace v1.skill.simulations {
    /**
     *
     * @interface
     */
    export interface SimulationsApiRequest {
        'input': v1.skill.simulations.Input;
        'device': v1.skill.simulations.Device;
        'session'?: v1.skill.simulations.Session;
        'simulation'?: v1.skill.simulations.Simulation;
    }
}

export namespace v1.skill.simulations {
    /**
     *
     * @interface
     */
    export interface SimulationsApiResponse {
        /**
         * Id of the simulation resource.
         */
        'id'?: string;
        'status'?: v1.skill.simulations.SimulationsApiResponseStatus;
        'result'?: v1.skill.simulations.SimulationResult;
    }
}

export namespace v1.skill.simulations {
    /**
     * String that specifies the current status of the simulation. Possible values are \"IN_PROGRESS\", \"SUCCESSFUL\", and \"FAILED\". 
     * @enum
     */
    export type SimulationsApiResponseStatus = 'IN_PROGRESS' | 'SUCCESSFUL' | 'FAILED';
}

export namespace v1.skill {
    /**
     *
     * @enum
     */
    export type SkillResourcesEnum = 'manifest' | 'interactionModel' | 'hostedSkillDeployment' | 'hostedSkillProvisioning';
}

export namespace v1.skill {
    /**
     *
     * @interface
     */
    export interface UpdateSkillWithPackageRequest {
        /**
         * The URL for the skill package.
         */
        'location': string;
    }
}

export namespace v1.skill {
    /**
     * Standardized, machine readable structure that wraps all the information about a specific occurrence of an error of the type specified by the code.
     * @interface
     */
    export interface ValidationDetails {
        /**
         * Set of properties of the image provided by the customer.
         */
        'actualImageAttributes'?: v1.skill.ImageAttributes;
        /**
         * Number of items in an array provided by the customer.
         */
        'actualNumberOfItems'?: number;
        /**
         * Number of characters in a string provided by the customer.
         */
        'actualStringLength'?: number;
        /**
         * List of allowed content types for a resource.
         */
        'allowedContentTypes'?: Array<string>;
        /**
         * List of allowed data types for an instance.
         */
        'allowedDataTypes'?: Array<v1.skill.ValidationDataTypes>;
        /**
         * List of set of properties representing all possible allowed images.
         */
        'allowedImageAttributes'?: Array<v1.skill.ImageAttributes>;
        /**
         * Instance conflicting with another instance.
         */
        'conflictingInstance'?: v1.skill.Instance;
        /**
         * Format in which instance value is expected in.
         */
        'expectedFormat'?: v1.skill.Format;
        /**
         * Instance that is expected by a related instance.
         */
        'expectedInstance'?: v1.skill.Instance;
        /**
         * Regular expression that a string instance is expected to match.
         */
        'expectedRegexPattern'?: string;
        /**
         * Type of the agreement that the customer must be compliant to.
         */
        'agreementType'?: v1.skill.AgreementType;
        /**
         * Properties of a publicly known feature that has restricted access.
         */
        'feature'?: v1.skill.ValidationFeature;
        /**
         * Endpoint which has a different value for property named type when compared to original endpoint.
         */
        'inconsistentEndpoint'?: v1.skill.ValidationEndpoint;
        /**
         * Minimum allowed value of an integer instance.
         */
        'minimumIntegerValue'?: number;
        /**
         * Minimum allowed number of items in an array.
         */
        'minimumNumberOfItems'?: number;
        /**
         * Minimum allowed number of characters in a string.
         */
        'minimumStringLength'?: number;
        /**
         * Maximum allowed value of an integer instance.
         */
        'maximumIntegerValue'?: number;
        /**
         * Maximum allowed number of items in an array.
         */
        'maximumNumberOfItems'?: number;
        /**
         * Maximum allowed number of characters in a string.
         */
        'maximumStringLength'?: number;
        /**
         * An Endpoint instance
         */
        'originalEndpoint'?: v1.skill.ValidationEndpoint;
        /**
         * An Instance
         */
        'originalInstance'?: v1.skill.Instance;
        /**
         * Represents what is wrong in the request.
         */
        'reason'?: v1.skill.ValidationFailureReason;
        /**
         * Property required but missing in the object.
         */
        'requiredProperty'?: string;
        /**
         * Property not expected but present in the object.
         */
        'unexpectedProperty'?: string;
    }
}

export namespace v1.skill.validations {
    /**
     *
     * @interface
     */
    export interface ResponseValidation {
        /**
         * Short, human readable title of the validation performed. 
         */
        'title'?: string;
        /**
         * Human readable description of the validation performed. May include instructions to address validation failure. 
         */
        'description'?: string;
        /**
         * Dot-delimited category. 
         */
        'category'?: string;
        /**
         * Locale of the validation. 
         */
        'locale'?: string;
        'importance'?: v1.skill.validations.ResponseValidationImportance;
        'status'?: v1.skill.validations.ResponseValidationStatus;
    }
}

export namespace v1.skill.validations {
    /**
     * String that specifies importance of the validation. Possible values are \"REQUIRED\" and \"RECOMMENDED\" 
     * @enum
     */
    export type ResponseValidationImportance = 'REQUIRED' | 'RECOMMENDED';
}

export namespace v1.skill.validations {
    /**
     * String that specifies status of the validation. Possible values are \"SUCCESSFUL\" and \"FAILED\" 
     * @enum
     */
    export type ResponseValidationStatus = 'SUCCESSFUL' | 'FAILED';
}

export namespace v1.skill.validations {
    /**
     *
     * @interface
     */
    export interface ValidationsApiRequest {
        'locales': Array<string>;
    }
}

export namespace v1.skill.validations {
    /**
     *
     * @interface
     */
    export interface ValidationsApiResponse {
        /**
         * Id of the validation resource.
         */
        'id'?: string;
        'status'?: v1.skill.validations.ValidationsApiResponseStatus;
        'result'?: v1.skill.validations.ValidationsApiResponseResult;
    }
}

export namespace v1.skill.validations {
    /**
     *
     * @interface
     */
    export interface ValidationsApiResponseResult {
        'validations'?: Array<v1.skill.validations.ResponseValidation>;
        'error'?: v1.Error;
    }
}

export namespace v1.skill.validations {
    /**
     * String that specifies the current status of validation execution. Possible values are \"IN_PROGRESS\", \"SUCCESSFUL\", and \"FAILED\". 
     * @enum
     */
    export type ValidationsApiResponseStatus = 'IN_PROGRESS' | 'SUCCESSFUL' | 'FAILED';
}

export namespace v1.smartHomeEvaluation {
    /**
     *
     * @interface
     */
    export interface CapabilityTestPlan {
        'id'?: string;
    }
}

export namespace v1.smartHomeEvaluation {
    /**
     *
     * @interface
     */
    export interface Endpoint {
        'endpointId'?: string;
    }
}

export namespace v1.smartHomeEvaluation {
    /**
     *
     * @interface
     */
    export interface EvaluateSHCapabilityRequest {
        'capabilityTestPlan': v1.smartHomeEvaluation.CapabilityTestPlan;
        'endpoint': v1.smartHomeEvaluation.Endpoint;
        'stage': v1.smartHomeEvaluation.Stage;
    }
}

export namespace v1.smartHomeEvaluation {
    /**
     *
     * @enum
     */
    export type EvaluationEntityStatus = 'PASSED' | 'FAILED' | 'IN_PROGRESS' | 'ERROR';
}

export namespace v1.smartHomeEvaluation {
    /**
     *
     * @interface
     */
    export interface EvaluationObject {
        'endTimestamp'?: string;
        'startTimestamp'?: string;
        'status'?: v1.smartHomeEvaluation.EvaluationEntityStatus;
        'endpointId'?: string;
        'id'?: string;
        'sourceTestPlanIds'?: Array<string>;
        'testPlanId'?: string;
    }
}

export namespace v1.smartHomeEvaluation {
    /**
     *
     * @interface
     */
    export interface GetSHCapabilityEvaluationResponse {
        'endTimestamp'?: string;
        'startTimestamp'?: string;
        'status'?: v1.smartHomeEvaluation.EvaluationEntityStatus;
        'error'?: v1.smartHomeEvaluation.SHCapabilityError;
        'input'?: v1.smartHomeEvaluation.EvaluateSHCapabilityRequest;
        'metrics'?: { [key: string]: v1.smartHomeEvaluation.SHEvaluationResultsMetric; };
    }
}

export namespace v1.smartHomeEvaluation {
    /**
     *
     * @interface
     */
    export interface ListSHCapabilityEvaluationsResponse {
        'paginationContextToken'?: v1.smartHomeEvaluation.PaginationContextToken;
        'evaluations'?: Array<v1.smartHomeEvaluation.EvaluationObject>;
    }
}

export namespace v1.smartHomeEvaluation {
    /**
     *
     * @interface
     */
    export interface ListSHTestPlanItem {
        'id'?: string;
        'name'?: string;
    }
}

export namespace v1.smartHomeEvaluation {
    /**
     *
     * @interface
     */
    export interface PagedResponse {
        'paginationContext'?: v1.smartHomeEvaluation.PaginationContext;
    }
}

export namespace v1.smartHomeEvaluation {
    /**
     *
     * @interface
     */
    export interface SHCapabilityDirective {
    }
}

export namespace v1.smartHomeEvaluation {
    /**
     *
     * @interface
     */
    export interface SHCapabilityError {
        'code'?: v1.smartHomeEvaluation.SHCapabilityErrorCode;
        'message'?: string;
    }
}

export namespace v1.smartHomeEvaluation {
    /**
     *
     * @enum
     */
    export type SHCapabilityErrorCode = 'NO_SUCH_ENDPOINT' | 'NO_SUCH_SKILL_STAGE' | 'NO_SUCH_TEST_PLAN' | 'MULTIPLE_MATCHED_ENDPOINTS' | 'MULTIPLE_MATCHED_TEST_PLANS' | 'CAPABILITY_NOT_SUPPORTED' | 'DISCOVERY_FAILED' | 'TEST_CASE_TIME_OUT';
}

export namespace v1.smartHomeEvaluation {
    /**
     *
     * @interface
     */
    export interface SHCapabilityResponse {
    }
}

export namespace v1.smartHomeEvaluation {
    /**
     *
     * @interface
     */
    export interface SHCapabilityState {
    }
}

export namespace v1.smartHomeEvaluation {
    /**
     *
     * @interface
     */
    export interface SHEvaluationResultsMetric {
        'errorTestCases'?: number;
        'failedTestCases'?: number;
        'passedTestCases'?: number;
        'totalTestCases'?: number;
    }
}

export namespace v1.smartHomeEvaluation {
    /**
     *
     * @enum
     */
    export type Stage = 'development' | 'live';
}

export namespace v1.smartHomeEvaluation {
    /**
     *
     * @interface
     */
    export interface TestCaseResult {
        'actualCapabilityStates'?: Array<v1.smartHomeEvaluation.SHCapabilityState>;
        'actualResponse'?: v1.smartHomeEvaluation.SHCapabilityResponse;
        'directive'?: v1.smartHomeEvaluation.SHCapabilityDirective;
        'error'?: v1.smartHomeEvaluation.SHCapabilityError;
        'expectedCapabilityStates'?: Array<v1.smartHomeEvaluation.SHCapabilityState>;
        'expectedResponse'?: v1.smartHomeEvaluation.SHCapabilityResponse;
        'name'?: string;
        'status'?: v1.smartHomeEvaluation.TestCaseResultStatus;
    }
}

export namespace v1.smartHomeEvaluation {
    /**
     *
     * @enum
     */
    export type TestCaseResultStatus = 'PASSED' | 'FAILED' | 'ERROR';
}

export namespace v1.smartHomeEvaluation {
    /**
     *
     * @interface
     */
    export interface PaginationContext {
        'nextToken'?: string;
        'totalCount'?: number;
    }
}

export namespace v1.smartHomeEvaluation {
    /**
     *
     * @interface
     */
    export interface PaginationContextToken {
        'nextToken'?: string;
    }
}

export namespace v1.vendorManagement {
    /**
     * Vendor Response Object.
     * @interface
     */
    export interface Vendor {
        /**
         * Name of vendor.
         */
        'name'?: string;
        /**
         * Unique identifier of vendor associated with the API caller account.
         */
        'id'?: string;
        /**
         * Roles that user has for this vendor.
         */
        'roles'?: Array<string>;
    }
}

export namespace v1.vendorManagement {
    /**
     * List of Vendors.
     * @interface
     */
    export interface Vendors {
        'vendors'?: Array<v1.vendorManagement.Vendor>;
    }
}

export namespace v2 {
    /**
     *
     * @interface
     */
    export interface BadRequestError {
        /**
         * Human readable description of error.
         */
        'message'?: string;
        /**
         * An array of violation messages.
         */
        'violations'?: Array<v2.Error>;
    }
}

export namespace v2 {
    /**
     *
     * @interface
     */
    export interface Error {
        /**
         * Error code that maps to an error message. Developers with different locales should be able to lookup the error description based on this code. 
         */
        'code'?: string;
        /**
         * Readable description of error.
         */
        'message': string;
    }
}

export namespace v2.skill {
    /**
     *
     * @interface
     */
    export interface Invocation {
        'invocationRequest'?: v2.skill.InvocationRequest;
        'invocationResponse'?: v2.skill.InvocationResponse;
        'metrics'?: v2.skill.Metrics;
    }
}

export namespace v2.skill {
    /**
     *
     * @interface
     */
    export interface InvocationRequest {
        /**
         * Skill's Lambda or HTTPS endpoint.
         */
        'endpoint'?: string;
        /**
         * JSON payload that was sent to the skill's Lambda or HTTPS endpoint. 
         */
        'body'?: { [key: string]: any; };
    }
}

export namespace v2.skill {
    /**
     *
     * @interface
     */
    export interface InvocationResponse {
        /**
         * Payload that was returned by the skill's Lambda or HTTPS endpoint. 
         */
        'body'?: { [key: string]: any; };
    }
}

export namespace v2.skill {
    /**
     *
     * @interface
     */
    export interface Metrics {
        /**
         * How long, in milliseconds, it took the skill's Lambda or HTTPS endpoint to process the request. 
         */
        'skillExecutionTimeInMilliseconds'?: number;
    }
}

export namespace v2.skill.invocations {
    /**
     * Region of endpoint to be called.
     * @enum
     */
    export type EndPointRegions = 'NA' | 'EU' | 'FE' | 'default';
}

export namespace v2.skill.invocations {
    /**
     *
     * @interface
     */
    export interface InvocationResponseResult {
        'skillExecutionInfo'?: v2.skill.Invocation;
        'error'?: v2.Error;
    }
}

export namespace v2.skill.invocations {
    /**
     * String that specifies the status of skill invocation. Possible values are \"SUCCESSFUL\", and \"FAILED\". 
     * @enum
     */
    export type InvocationResponseStatus = 'SUCCESSFUL' | 'FAILED';
}

export namespace v2.skill.invocations {
    /**
     *
     * @interface
     */
    export interface InvocationsApiResponse {
        'status'?: v2.skill.invocations.InvocationResponseStatus;
        'result'?: v2.skill.invocations.InvocationResponseResult;
    }
}

export namespace v2.skill.invocations {
    /**
     *
     * @interface
     */
    export interface SkillRequest {
        /**
         * ASK request body schema as defined in the public facing documentation (https://developer.amazon.com/en-US/docs/alexa/custom-skills/request-and-response-json-reference.html#request-body-syntax) 
         */
        'body': any;
    }
}

export namespace v2.skill.invocations {
    /**
     *
     * @interface
     */
    export interface InvocationsApiRequest {
        'endpointRegion': v2.skill.invocations.EndPointRegions;
        'skillRequest': v2.skill.invocations.SkillRequest;
    }
}

export namespace v2.skill.simulations {
    /**
     *
     * @interface
     */
    export interface AlexaExecutionInfo {
        'alexaResponses'?: Array<v2.skill.simulations.AlexaResponse>;
        'consideredIntents'?: Array<v2.skill.simulations.Intent>;
    }
}

export namespace v2.skill.simulations {
    /**
     *
     * @interface
     */
    export interface AlexaResponse {
        /**
         * The type of Alexa response
         */
        'type'?: string;
        /**
         * The detail information needs to exposed in this type of Alexa response. 
         */
        'content'?: v2.skill.simulations.AlexaResponseContent;
    }
}

export namespace v2.skill.simulations {
    /**
     *
     * @interface
     */
    export interface AlexaResponseContent {
        /**
         * The plain text from Alexa speech response.
         */
        'caption'?: string;
    }
}

export namespace v2.skill.simulations {
    /**
     * An enumeration indicating whether the user has explicitly confirmed or denied the entire intent. Possible values: \"NONE\", \"CONFIRMED\", \"DENIED\". 
     * @enum
     */
    export type ConfirmationStatusType = 'NONE' | 'CONFIRMED' | 'DENIED';
}

export namespace v2.skill.simulations {
    /**
     * Model of a virtual device used for simulation. This device object emulates attributes associated with a real Alexa enabled device. 
     * @interface
     */
    export interface Device {
        /**
         * A valid locale (e.g \"en-US\") for the virtual device used in simulation. 
         */
        'locale': string;
    }
}

export namespace v2.skill.simulations {
    /**
     *
     * @interface
     */
    export interface Input {
        /**
         * A string corresponding to the utterance text of what a customer would say to Alexa. 
         */
        'content': string;
    }
}

export namespace v2.skill.simulations {
    /**
     *
     * @interface
     */
    export interface Intent {
        'name'?: string;
        'confirmationStatus'?: v2.skill.simulations.ConfirmationStatusType;
        /**
         * A map of key-value pairs that further describes what the user meant based on a predefined intent schema. The map can be empty. 
         */
        'slots'?: { [key: string]: v2.skill.simulations.Slot; };
    }
}

export namespace v2.skill.simulations {
    /**
     *
     * @interface
     */
    export interface ResolutionsPerAuthorityItems {
        /**
         * The name of the authority for the slot values. For custom slot types, this authority label incorporates your skill ID and the slot type name. 
         */
        'authority'?: string;
        'status'?: v2.skill.simulations.ResolutionsPerAuthorityStatus;
        /**
         * An array of resolved values for the slot.
         */
        'values'?: Array<v2.skill.simulations.ResolutionsPerAuthorityValueItems>;
    }
}

export namespace v2.skill.simulations {
    /**
     * An object representing the status of entity resolution for the slot.
     * @interface
     */
    export interface ResolutionsPerAuthorityStatus {
        'code'?: v2.skill.simulations.ResolutionsPerAuthorityStatusCode;
    }
}

export namespace v2.skill.simulations {
    /**
     * A code indicating the results of attempting to resolve the user utterance against the defined slot types. This can be one of the following: ER_SUCCESS_MATCH: The spoken value matched a value or synonym explicitly defined in your custom slot type. ER_SUCCESS_NO_MATCH: The spoken value did not match any values or synonyms explicitly defined in your custom slot type. ER_ERROR_TIMEOUT: An error occurred due to a timeout. ER_ERROR_EXCEPTION: An error occurred due to an exception during processing. 
     * @enum
     */
    export type ResolutionsPerAuthorityStatusCode = 'ER_SUCCESS_MATCH' | 'ER_SUCCESS_NO_MATCH' | 'ER_ERROR_TIMEOUT' | 'ER_ERROR_EXCEPTION';
}

export namespace v2.skill.simulations {
    /**
     * An object representing the resolved value for the slot, based on the user's utterance and the slot type definition. 
     * @interface
     */
    export interface ResolutionsPerAuthorityValueItems {
        /**
         * The string for the resolved slot value.
         */
        'name'?: string;
        /**
         * The unique ID defined for the resolved slot value. This is based on the IDs defined in the slot type definition. 
         */
        'id'?: string;
    }
}

export namespace v2.skill.simulations {
    /**
     * Session settings for running current simulation. 
     * @interface
     */
    export interface Session {
        'mode'?: v2.skill.simulations.SessionMode;
    }
}

export namespace v2.skill.simulations {
    /**
     * Indicate the session mode of the current simulation is using. 
     * @enum
     */
    export type SessionMode = 'DEFAULT' | 'FORCE_NEW_SESSION';
}

export namespace v2.skill.simulations {
    /**
     * Simulation settings for the current simulation request. 
     * @interface
     */
    export interface Simulation {
        'type'?: v2.skill.simulations.SimulationType;
    }
}

export namespace v2.skill.simulations {
    /**
     *
     * @interface
     */
    export interface SimulationResult {
        'alexaExecutionInfo'?: v2.skill.simulations.AlexaExecutionInfo;
        'skillExecutionInfo'?: v2.skill.simulations.SkillExecutionInfo;
        'error'?: v2.Error;
    }
}

export namespace v2.skill.simulations {
    /**
     * String indicating the type of simulation request. Possible values are \"DEFAULT\" and \"NFI_ISOLATED_SIMULATION\". \"NFI_ISOLATED_SIMULATION\" is used to test the NFI(Name Free Interaction) enabled skills in isolation. This field is reserved for testing Name Free Interactions(NFI). Skills that are eligible to add NFI can only use this field. To learn more, visit https://developer.amazon.com/en-US/docs/alexa/custom-skills/understand-name-free-interaction-for-custom-skills.html 
     * @enum
     */
    export type SimulationType = 'DEFAULT' | 'NFI_ISOLATED_SIMULATION';
}

export namespace v2.skill.simulations {
    /**
     *
     * @interface
     */
    export interface SimulationsApiRequest {
        'input': v2.skill.simulations.Input;
        'device': v2.skill.simulations.Device;
        'session'?: v2.skill.simulations.Session;
        'simulation'?: v2.skill.simulations.Simulation;
    }
}

export namespace v2.skill.simulations {
    /**
     *
     * @interface
     */
    export interface SimulationsApiResponse {
        /**
         * Id of the simulation resource.
         */
        'id'?: string;
        'status'?: v2.skill.simulations.SimulationsApiResponseStatus;
        'result'?: v2.skill.simulations.SimulationResult;
    }
}

export namespace v2.skill.simulations {
    /**
     * String that specifies the current status of the simulation. Possible values are \"IN_PROGRESS\", \"SUCCESSFUL\", and \"FAILED\". 
     * @enum
     */
    export type SimulationsApiResponseStatus = 'IN_PROGRESS' | 'SUCCESSFUL' | 'FAILED';
}

export namespace v2.skill.simulations {
    /**
     *
     * @interface
     */
    export interface SkillExecutionInfo {
        'invocations'?: Array<v2.skill.Invocation>;
    }
}

export namespace v2.skill.simulations {
    /**
     *
     * @interface
     */
    export interface Slot {
        'name'?: string;
        'value'?: string;
        'confirmationStatus'?: v2.skill.simulations.ConfirmationStatusType;
        'resolutions'?: v2.skill.simulations.SlotResolutions;
    }
}

export namespace v2.skill.simulations {
    /**
     * A resolutions object representing the results of resolving the words captured from the user's utterance. 
     * @interface
     */
    export interface SlotResolutions {
        /**
         * An array of objects representing each possible authority for entity resolution. An authority represents the source for the data provided for the slot. For a custom slot type, the authority is the slot type you defined. 
         */
        'resolutionsPerAuthority'?: Array<v2.skill.simulations.ResolutionsPerAuthorityItems>;
    }
}

export namespace v0.catalog.upload {
    /**
     * Request body for self-hosted catalog uploads.
     * @interface
     */
    export interface CreateContentUploadResponse {
        /**
         * Unique identifier of the upload.
         */
        'id'?: string;
        /**
         * Provides a unique identifier of the catalog.
         */
        'catalogId'?: string;
        'status'?: v0.catalog.upload.UploadStatus;
        'createdDate'?: string;
        'lastUpdatedDate'?: string;
        'ingestionSteps'?: Array<v0.catalog.upload.UploadIngestionStep>;
        /**
         * Ordered list of presigned upload parts to perform a partitioned (multipart) file upload.
         */
        'presignedUploadParts'?: Array<v0.catalog.upload.PresignedUploadPart>;
    }
}

export namespace v0.catalog.upload {
    /**
     * Response object for get content upload request.
     * @interface
     */
    export interface GetContentUploadResponse {
        /**
         * Unique identifier of the upload.
         */
        'id'?: string;
        /**
         * Provides a unique identifier of the catalog.
         */
        'catalogId'?: string;
        'status'?: v0.catalog.upload.UploadStatus;
        'createdDate'?: string;
        'lastUpdatedDate'?: string;
        'file'?: v0.catalog.upload.ContentUploadFileSummary;
        'ingestionSteps'?: Array<v0.catalog.upload.UploadIngestionStep>;
    }
}

export namespace v0.developmentEvents.subscriber {
    /**
     * Authorization for accessing AWS SNS endpoint.
     * @interface
     */
    export interface EndpointAwsAuthorization {
        'type' : 'AWS_IAM';
        /**
         * IAM Role arn to use/assumeRole for authorization.
         */
        'arn'?: string;
    }
}

export namespace v0.eventSchema.AlexaCustomerFeedbackEvent {
    /**
     * 'AlexaCustomerFeedbackEvent.SkillReviewPublish' event represents the publishing of a new/updated customer review for a skill. 
     * @interface
     */
    export interface SkillReviewPublish {
        'eventName' : 'AlexaCustomerFeedbackEvent.SkillReviewPublish';
        /**
         * ISO 8601 timestamp for the instant when event was created. 
         */
        'timestamp'?: string;
        'payload'?: v0.eventSchema.SkillReviewEventAttributes;
    }
}

export namespace v0.eventSchema.AlexaDevelopmentEvent {
    /**
     * 'AlexaDevelopmentEvent.InteractionModelUpdate' event represents the status of set/update interaction model request. The update request may complete either with `SUCCEEDED` or `FAILED` status. 
     * @interface
     */
    export interface InteractionModelUpdate {
        'eventName' : 'AlexaDevelopmentEvent.InteractionModelUpdate';
        /**
         * ISO 8601 timestamp for the instant when event was created. 
         */
        'timestamp'?: string;
        /**
         * A development notification includes a unique identifier that identifies the original request that resulted in the development notification. The requestId for original request is returned by Amazon APIs in response's 'X-Amzn-RequestId' header. 
         */
        'requestId'?: string;
        'payload'?: v0.eventSchema.InteractionModelEventAttributes;
    }
}

export namespace v0.eventSchema.AlexaDevelopmentEvent {
    /**
     * 'AlexaDevelopmentEvent.ManifestUpdate' event represents the status of the update request on the Manifest. This event is generated when request to create a skill or update an existing skill is completed. The request may complete either with `SUCCEEDED` or `FAILED` status.
     * @interface
     */
    export interface ManifestUpdate {
        'eventName' : 'AlexaDevelopmentEvent.ManifestUpdate';
        /**
         * ISO 8601 timestamp for the instant when event was created. 
         */
        'timestamp'?: string;
        /**
         * A development notification includes a unique identifier that identifies the original request that resulted in the development notification. The requestId for original request is returned by Amazon APIs in response's 'X-Amzn-RequestId' header. 
         */
        'requestId'?: string;
        'payload'?: v0.eventSchema.SkillEventAttributes;
    }
}

export namespace v0.eventSchema.AlexaDevelopmentEvent {
    /**
     * 'AlexaDevelopmentEvent.SkillCertification' event represents the status of various validations of `certification workflow`. This step may complete either with `SUCCEEDED` or `FAILED` status. 
     * @interface
     */
    export interface SkillCertification {
        'eventName' : 'AlexaDevelopmentEvent.SkillCertification';
        /**
         * ISO 8601 timestamp for the instant when event was created. 
         */
        'timestamp'?: string;
        /**
         * A development notification includes a unique identifier that identifies the original request that resulted in the development notification. The requestId for original request is returned by Amazon APIs in response's 'X-Amzn-RequestId' header. 
         */
        'requestId'?: string;
        'payload'?: v0.eventSchema.SkillEventAttributes;
    }
}

export namespace v0.eventSchema.AlexaDevelopmentEvent {
    /**
     * 'AlexaDevelopmentEvent.SkillPublish' event represents the status of publish to live operation. When a developer submits a skill for certification, it goes through `certification workflow` followed by publish to live workflow. This event is generated in publish workflow and may complete either with `SUCCEEDED` or `FAILED` status. If 'SUCCEEDED', users can see and enable latest version of the skill via Alexa Skill Store.
     * @interface
     */
    export interface SkillPublish {
        'eventName' : 'AlexaDevelopmentEvent.SkillPublish';
        /**
         * ISO 8601 timestamp for the instant when event was created. 
         */
        'timestamp'?: string;
        /**
         * A development notification includes a unique identifier that identifies the original request that resulted in the development notification. The requestId for original request is returned by Amazon APIs in response's 'X-Amzn-RequestId' header. 
         */
        'requestId'?: string;
        'payload'?: v0.eventSchema.SkillEventAttributes;
    }
}

export namespace v0.eventSchema {
    /**
     * Represents a set of attributes specific to interaction model of an Alexa Skill. 
     * @interface
     */
    export interface InteractionModelAttributes {
        /**
         * Unique identifier of an Alexa skill. 
         */
        'skillId'?: string;
        /**
         * Unique identifier of vendor account to which this skill belongs. 
         */
        'vendorId'?: string;
        /**
         * Locale of interaction model. 
         */
        'locale'?: string;
    }
}

export namespace v1.catalog.upload {
    /**
     * Request body for self-hosted catalog uploads
     * @interface
     */
    export interface Location {
        /**
         * self hosted url location.
         */
        'location'?: string;
    }
}

export namespace v1.catalog.upload {
    /**
     * Request body for self-hosted catalog uploads
     * @interface
     */
    export interface PreSignedUrl {
        /**
         * Unique identifier for urls
         */
        'urlId': string;
        /**
         * List of (eTag, part number) pairs for each part of the file uploaded
         */
        'partETags'?: Array<v1.catalog.upload.PreSignedUrlItem>;
    }
}

export namespace v1.skill.Manifest {
    /**
     * The type of dialog manager:  * AMAZON.Conversations - The Alexa Conversations (Coltrane) model for this skill.
     * @interface
     */
    export interface AMAZONConversationsDialogManager {
        'type' : 'AMAZON.Conversations';
    }
}

export namespace v1.skill.Manifest {
    /**
     * Used to declare that the skill uses the Alexa.Presentation.APL interface.
     * @interface
     */
    export interface AlexaPresentationAplInterface {
        'type' : 'ALEXA_PRESENTATION_APL';
        /**
         * List of supported viewports.
         */
        'supportedViewports'?: Array<v1.skill.Manifest.ViewportSpecification>;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Used to declare that the skill uses the Alexa.Presentation.HTML interface.
     * @interface
     */
    export interface AlexaPresentationHtmlInterface {
        'type' : 'ALEXA_PRESENTATION_HTML';
    }
}

export namespace v1.skill.Manifest {
    /**
     *
     * @interface
     */
    export interface AppLinkInterface {
        'type' : 'APP_LINKS';
    }
}

export namespace v1.skill.Manifest {
    /**
     *
     * @interface
     */
    export interface AppLinkV2Interface {
        'type' : 'APP_LINKS_V2';
    }
}

export namespace v1.skill.Manifest {
    /**
     *
     * @interface
     */
    export interface AudioInterface {
        'type' : 'AUDIO_PLAYER';
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines client using Login With Amazon authentication provider, corresponds to LWA Security Profile.
     * @interface
     */
    export interface AuthorizedClientLwa {
        'authenticationProvider': string;
        'applications'?: Array<v1.skill.Manifest.AuthorizedClientLwaApplication>;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Defines an android application for LWA authentication provider.
     * @interface
     */
    export interface AuthorizedClientLwaApplicationAndroid {
        'type': string;
        'appStoreAppId'?: string;
        'clientId'?: string;
    }
}

export namespace v1.skill.Manifest.Custom {
    /**
     * The type of target runtime.
     * @interface
     */
    export interface TargetRuntimeDevice {
        'type' : 'DEVICE';
    }
}

export namespace v1.skill.Manifest {
    /**
     * Used to declare that the skill uses the Display interface. When a skill declares that it uses the Display interface the Display interface will be passed in the supportedInterfaces section of devices which meet any of the required minimum version attributes specified in the manifest. If the device does not meet any of the minimum versions specified in the manifest the Display interface will not be present in the supportedInterfaces section. If neither the minimumTemplateVersion nor the minimumApmlVersion attributes are specified in the manifes then the minimumTemplateVersion is defaulted to 1.0 and apmlVersion is omitted.
     * @interface
     */
    export interface DisplayInterface {
        'type' : 'RENDER_TEMPLATE';
        'minimumTemplateVersion'?: v1.skill.Manifest.DisplayInterfaceTemplateVersion;
        'minimumApmlVersion'?: v1.skill.Manifest.DisplayInterfaceApmlVersion;
    }
}

export namespace v1.skill.Manifest {
    /**
     * Skills using Gadget Controller can send directives to Echo Buttons. This is a legacy interface specific to Echo Buttons.
     * @interface
     */
    export interface GadgetControllerInterface {
        'type' : 'GADGET_CONTROLLER';
    }
}

export namespace v1.skill.Manifest {
    /**
     *
     * @interface
     */
    export interface GameEngineInterface {
        'type' : 'GAME_ENGINE';
    }
}

export namespace v1.skill.Manifest {
    /**
     *
     * @interface
     */
    export interface VideoAppInterface {
        'type' : 'VIDEO_APP';
    }
}

export namespace v1.skill.Manifest {
    /**
     * Feature for allowing for querying for available partner voice profiles, linking Alexa Speaker ID profiles to partner speaker profiles, and sending partner speaker profiles in directives.
     * @interface
     */
    export interface VoiceProfileFeature {
        'name' : 'VIDEO_VOICE_PROFILE';
        'version': string;
    }
}

export namespace v1.skill.asr.annotationSets {
    /**
     *
     * @interface
     */
    export interface AnnotationSetItems {
        /**
         * Name of the ASR annotation set
         */
        'name': string;
        /**
         * Number of annotations within an annotation set
         */
        'annotationCount': number;
        /**
         * The timestamp for the most recent update of ASR annotation set
         */
        'lastUpdatedTimestamp': string;
        /**
         * Indicates if the annotation set is eligible for evaluation. A set is not eligible for evaluation if any annotation within the set has a missing uploadId, filePathInUpload, expectedTranscription, or evaluationWeight.
         */
        'eligibleForEvaluation'?: boolean;
        /**
         * The Annotation set id
         */
        'id': string;
    }
}

export namespace v1.skill.asr.annotationSets {
    /**
     * Object containing annotation content and audio file download information.
     * @interface
     */
    export interface AnnotationWithAudioAsset {
        /**
         * Upload id obtained when developer creates an upload using catalog API. Required to be present when expectedTranscription is missing. When uploadId is present, filePathInUpload must also be present.
         */
        'uploadId'?: string;
        /**
         * File path in the uploaded zip file. For example, a zip containing a folder named 'a' and there is an audio b.mp3 in that folder. The file path is a/b.mp3. Notice that forward slash ('/') should be used to concatenate directories. Required to be present when expectedTranscription is missing. When filePathInUpload is present, uploadId must also be present.
         */
        'filePathInUpload'?: string;
        /**
         * Weight of the test case in an evaluation, the value would be used for calculating metrics such as overall error rate.  The acceptable values are from 1 - 1000. 1 means least significant, 1000 means mot significant. Here is how weight  impact the `OVERALL_ERROR_RATE` calculation: For example, an annotation set consists of 3 annotations and they have weight of 8, 1, 1. The evaluation results  show that only the first annotation test case passed while the rest of the test cases failed. In this case,  the overall error rate is (8 / (8 + 1 + 1)) = 0.8 
         */
        'evaluationWeight'?: number;
        /**
         * Expected transcription text for the input audio. The acceptable length of the string is between 1 and 500 Unicode characters. Required to be present when uploadId and filePathInUpload are missing.
         */
        'expectedTranscription'?: string;
        'audioAsset'?: v1.skill.asr.annotationSets.AudioAsset;
    }
}

export namespace v1.skill.asr.annotationSets {
    /**
     *
     * @interface
     */
    export interface GetASRAnnotationSetsPropertiesResponse {
        /**
         * Name of the ASR annotation set
         */
        'name': string;
        /**
         * Number of annotations within an annotation set
         */
        'annotationCount': number;
        /**
         * The timestamp for the most recent update of ASR annotation set
         */
        'lastUpdatedTimestamp': string;
        /**
         * Indicates if the annotation set is eligible for evaluation. A set is not eligible for evaluation if any annotation within the set has a missing uploadId, filePathInUpload, expectedTranscription, or evaluationWeight.
         */
        'eligibleForEvaluation'?: boolean;
    }
}

export namespace v1.skill.asr.evaluations {
    /**
     * object containing annotation content and audio file download information.
     * @interface
     */
    export interface AnnotationWithAudioAsset {
        /**
         * upload id obtained when developer creates an upload using catalog API
         */
        'uploadId': string;
        /**
         * file path in the uploaded zip file. For example, a zip containing a folder named 'a' and there is an audio b.mp3 in that folder. The file path is a/b.mp3. Notice that forward slash ('/') should be used to concatenate directories.
         */
        'filePathInUpload': string;
        /**
         * weight of the test case in an evaluation, the value would be used for calculating metrics such as overall error rate.  The acceptable values are from 1 - 1000. 1 means least significant, 1000 means mot significant. Here is how weight  impact the `OVERALL_ERROR_RATE` calculation: For example, an annotation set consists of 3 annotations and they have weight of 8, 1, 1. The evaluation results  show that only the first annotation test case passed while the rest of the test cases failed. In this case,  the overall error rate is (8 / (8 + 1 + 1)) = 0.8 
         */
        'evaluationWeight': number;
        /**
         * expected transcription text for the input audio. The acceptable length of the string is between 1 and 500 Unicode characters
         */
        'expectedTranscription': string;
        'audioAsset': v1.skill.asr.evaluations.AudioAsset;
    }
}

export namespace v1.skill.asr.evaluations {
    /**
     *
     * @interface
     */
    export interface EvaluationItems {
        'status': v1.skill.asr.evaluations.EvaluationStatus;
        /**
         * indicate the total number of evaluations that are supposed to be run in the evaluation request
         */
        'totalEvaluationCount': number;
        /**
         * indicate the number of completed evaluations
         */
        'completedEvaluationCount': number;
        /**
         * indicate the start time stamp of the ASR evaluation job. ISO-8601 Format.
         */
        'startTimestamp': string;
        'request': v1.skill.asr.evaluations.PostAsrEvaluationsRequestObject;
        'error'?: v1.skill.asr.evaluations.ErrorObject;
        'result'?: v1.skill.asr.evaluations.EvaluationMetadataResult;
        /**
         * evaluation id
         */
        'id': string;
    }
}

export namespace v1.skill.asr.evaluations {
    /**
     *
     * @interface
     */
    export interface GetAsrEvaluationStatusResponseObject {
        'status': v1.skill.asr.evaluations.EvaluationStatus;
        /**
         * indicate the total number of evaluations that are supposed to be run in the evaluation request
         */
        'totalEvaluationCount': number;
        /**
         * indicate the number of completed evaluations
         */
        'completedEvaluationCount': number;
        /**
         * indicate the start time stamp of the ASR evaluation job. ISO-8601 Format.
         */
        'startTimestamp': string;
        'request': v1.skill.asr.evaluations.PostAsrEvaluationsRequestObject;
        'error'?: v1.skill.asr.evaluations.ErrorObject;
        'result'?: v1.skill.asr.evaluations.EvaluationMetadataResult;
    }
}

export namespace v1.skill.evaluations {
    /**
     * The intent that Alexa selected for the utterance in the request.
     * @interface
     */
    export interface ProfileNluSelectedIntent {
        'name'?: string;
        'confirmationStatus'?: v1.skill.evaluations.ConfirmationStatusType;
        /**
         * A map of key-value pairs that further describes what the user meant based on a predefined intent schema. The map can be empty. 
         */
        'slots'?: { [key: string]: v1.skill.evaluations.Slot; };
    }
}

export namespace v1.skill.interactionModel {
    /**
     * Supply slot values from catalog(s).
     * @interface
     */
    export interface CatalogValueSupplier {
        'type' : 'CatalogValueSupplier';
        'valueCatalog'?: v1.skill.interactionModel.ValueCatalog;
    }
}

export namespace v1.skill.interactionModel {
    /**
     * The hasEntityResolutionMatch would allow Alexa to trigger a re-prompt when the status produced by ER is \"ER_SUCCESS_NO_MATCH\".
     * @interface
     */
    export interface HasEntityResolutionMatch {
        'type' : 'hasEntityResolutionMatch';
        /**
         * The prompt id that should be used if validation fails.
         */
        'prompt': string;
    }
}

export namespace v1.skill.interactionModel {
    /**
     * Supplies inline slot type values.
     * @interface
     */
    export interface InlineValueSupplier {
        'type' : 'InlineValueSupplier';
        /**
         * The list of slot type values.
         */
        'values'?: Array<v1.skill.interactionModel.TypeValue>;
    }
}

export namespace v1.skill.interactionModel {
    /**
     * Validates that slot value is greater than the specified value.
     * @interface
     */
    export interface IsGreaterThan {
        'type' : 'isGreaterThan';
        /**
         * The prompt id that should be used if validation fails.
         */
        'prompt': string;
        /**
         * Value to compare to.
         */
        'value': string;
    }
}

export namespace v1.skill.interactionModel {
    /**
     * Validates that slot value is greater than or equals to the specified value.
     * @interface
     */
    export interface IsGreaterThanOrEqualTo {
        'type' : 'isGreaterThanOrEqualTo';
        /**
         * The prompt id that should be used if validation fails.
         */
        'prompt': string;
        /**
         * Value to compare to.
         */
        'value': string;
    }
}

export namespace v1.skill.interactionModel {
    /**
     * Validates that the given date or time (as a slot value) is in a given interval. Unlike other range validations, duration based validations lets the developer define a dynamic range of date or time using ISO_8601 Duration Format. Based on the given 'start' and 'end' parameters an interval is created. The slot value given by the skill's user at runtime is then validated inside this interval. Both 'start' and 'end' parameters are in reference to the current date/time. Here the current date/time refers to the date/time when the skill's user made the request. 
     * @interface
     */
    export interface IsInDuration {
        'type' : 'isInDuration';
        /**
         * The prompt id that should be used if validation fails.
         */
        'prompt': string;
        /**
         * * `AMAZON.DATE`: ISO 8601 Duration using Y, M or D components or ISO 8601 Calendar Date in YYYY-MM-DD format. * `AMAZON.TIME`: ISO 8601 Duration using H or M component or ISO 8601 24-Hour Clock Time in hh:mm format. 
         */
        'start'?: string;
        /**
         * * `AMAZON.DATE`: ISO 8601 Duration using Y, M or D components or ISO 8601 Calendar Date in YYYY-MM-DD format. * `AMAZON.TIME`: ISO 8601 Duration using H or M component or ISO 8601 24-Hour Clock Time in hh:mm format. 
         */
        'end'?: string;
    }
}

export namespace v1.skill.interactionModel {
    /**
     * Validates if the slot is in the specified set of values.
     * @interface
     */
    export interface IsInSet {
        'type' : 'isInSet';
        /**
         * The prompt id that should be used if validation fails.
         */
        'prompt': string;
        /**
         * List of values to check.
         */
        'values': Array<string>;
    }
}

export namespace v1.skill.interactionModel {
    /**
     * Validates that slot value is less than or equals to the specified value.
     * @interface
     */
    export interface IsLessThan {
        'type' : 'isLessThan';
        /**
         * The prompt id that should be used if validation fails.
         */
        'prompt': string;
        /**
         * Value to compare to.
         */
        'value': string;
    }
}

export namespace v1.skill.interactionModel {
    /**
     * Validates that slot value is less than or equals to the specified value.
     * @interface
     */
    export interface IsLessThanOrEqualTo {
        'type' : 'isLessThanOrEqualTo';
        /**
         * The prompt id that should be used if validation fails.
         */
        'prompt': string;
        /**
         * Value to compare to.
         */
        'value': string;
    }
}

export namespace v1.skill.interactionModel {
    /**
     * Validates that the given date or time (as a slot value) is not in a given interval. Unlike other range validations, duration based validations lets the developer define a dynamic range of date or time using ISO_8601 Duration Format. Based on the given 'start' and 'end' parameters an interval is created. The slot value given by the skill's user at runtime is then validated inside this interval. Both 'start' and 'end' parameters are in reference to the current date/time. Here the current date/time refers to the date/time when the skill's user made the request. 
     * @interface
     */
    export interface IsNotInDuration {
        'type' : 'isNotInDuration';
        /**
         * The prompt id that should be used if validation fails.
         */
        'prompt': string;
        /**
         * * `AMAZON.DATE`: ISO 8601 Duration using Y, M or D components or ISO 8601 Calendar Date in YYYY-MM-DD format. * `AMAZON.TIME`: ISO 8601 Duration using H or M component or ISO 8601 24-Hour Clock Time in hh:mm format. 
         */
        'start'?: string;
        /**
         * * `AMAZON.DATE`: ISO 8601 Duration using Y, M or D components or ISO 8601 Calendar Date in YYYY-MM-DD format. * `AMAZON.TIME`: ISO 8601 Duration using H or M component or ISO 8601 24-Hour Clock Time in hh:mm format. 
         */
        'end'?: string;
    }
}

export namespace v1.skill.interactionModel {
    /**
     * Validates if the slot is not in the specified set of values.
     * @interface
     */
    export interface IsNotInSet {
        'type' : 'isNotInSet';
        /**
         * The prompt id that should be used if validation fails.
         */
        'prompt': string;
        /**
         * List of values to check.
         */
        'values': Array<string>;
    }
}

export namespace v1.skill.interactionModel.conflictDetection {
    /**
     *
     * @interface
     */
    export interface GetConflictsResponse {
        'paginationContext'?: v1.skill.interactionModel.conflictDetection.PaginationContext;
        '_links'?: v1.Links;
        'results': Array<v1.skill.interactionModel.conflictDetection.GetConflictsResponseResult>;
    }
}

export namespace v1.skill.interactionModel.jobs {
    /**
     * Catalog the job is applied on.
     * @interface
     */
    export interface Catalog {
        'type' : 'Catalog';
        /**
         * Catalog identifier.
         */
        'id'?: string;
    }
}

export namespace v1.skill.interactionModel.jobs {
    /**
     * Definition for CatalogAutoRefresh job.
     * @interface
     */
    export interface CatalogAutoRefresh {
        'type' : 'CatalogAutoRefresh';
        /**
         * CatalogAutoRefresh can only have CatalogAutoRefresh trigger.
         */
        'trigger'?: v1.skill.interactionModel.jobs.Scheduled;
        /**
         * Current status of the job definition.
         */
        'status'?: string;
        /**
         * The resource that the job is act on. Only catalog is allowed.
         */
        'resource'?: v1.skill.interactionModel.jobs.Catalog;
    }
}

export namespace v1.skill.interactionModel.jobs {
    /**
     * Interaction model the job is applied on.
     * @interface
     */
    export interface InteractionModel {
        'type' : 'InteractionModel';
        /**
         * Skill identifier.
         */
        'id': string;
        /**
         * Locale identifier and default is empty list which means all available locales.
         */
        'locales': Array<string>;
    }
}

export namespace v1.skill.interactionModel.jobs {
    /**
     * Definition for ReferenceVersionUpdate job.
     * @interface
     */
    export interface ReferenceVersionUpdate {
        'type' : 'ReferenceVersionUpdate';
        /**
         * Can only have ReferencedResourceJobsComplete trigger.
         */
        'trigger'?: v1.skill.interactionModel.jobs.ReferencedResourceJobsComplete;
        /**
         * Current status of the job definition.
         */
        'status'?: string;
        /**
         * The resource that the job is act on. Only slot and interactionModel are allowed.
         */
        'resource'?: v1.skill.interactionModel.jobs.ResourceObject;
        /**
         * Referenced resources working with ReferencedResourceJobsComplete trigger.
         */
        'references'?: Array<v1.skill.interactionModel.jobs.ResourceObject>;
        /**
         * Whether publish development stage to live after the updates.
         */
        'publishToLive'?: boolean;
    }
}

export namespace v1.skill.interactionModel.jobs {
    /**
     * Dependent job condition when jobs will be executed.
     * @interface
     */
    export interface ReferencedResourceJobsComplete {
        'type' : 'ReferencedResourceJobsComplete';
    }
}

export namespace v1.skill.interactionModel.jobs {
    /**
     * Time-based condition when jobs will be executed.
     * @interface
     */
    export interface Scheduled {
        'type' : 'Scheduled';
        /**
         * The cron-like attribute in UTC time to describe the hour of the day and currently can only be 0,4,8,12,16,20.
         */
        'hour': number;
        /**
         * If not null, this means the scheudule is weekly. the cron-like attribute in UTC time to describe the day of the week (0-6).
         */
        'dayOfWeek'?: number;
    }
}

export namespace v1.skill.interactionModel.jobs {
    /**
     * Slot type reference the job is applied on.
     * @interface
     */
    export interface SlotTypeReference {
        'type' : 'SlotTypeReference';
        /**
         * SlotTypeReference identifier.
         */
        'id'?: string;
    }
}

export namespace v1.skill.nlu.annotationSets {
    /**
     *
     * @interface
     */
    export interface AnnotationSet {
        'locale'?: string;
        /**
         * Name of the NLU annotation set
         */
        'name'?: string;
        /**
         * Number of entries which represents number of utterances in each NLU annotation set content
         */
        'numberOfEntries'?: number;
        /**
         * The lastest updated timestamp for the NLU annotation set
         */
        'updatedTimestamp'?: string;
        /**
         * Identifier of the NLU annotation set.
         */
        'annotationId'?: string;
    }
}

export namespace v1.skill.nlu.annotationSets {
    /**
     *
     * @interface
     */
    export interface GetNLUAnnotationSetPropertiesResponse {
        'locale'?: string;
        /**
         * Name of the NLU annotation set
         */
        'name'?: string;
        /**
         * Number of entries which represents number of utterances in each NLU annotation set content
         */
        'numberOfEntries'?: number;
        /**
         * The lastest updated timestamp for the NLU annotation set
         */
        'updatedTimestamp'?: string;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @interface
     */
    export interface Evaluation {
        'startTimestamp'?: string;
        'endTimestamp'?: string;
        'status'?: v1.skill.nlu.evaluations.Status;
        /**
         * Error message when evaluation job fails
         */
        'errorMessage'?: string;
        'inputs'?: v1.skill.nlu.evaluations.EvaluationInputs;
        /**
         * id of the job
         */
        'id'?: string;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @interface
     */
    export interface GetNLUEvaluationResponse {
        'startTimestamp'?: string;
        'endTimestamp'?: string;
        'status'?: v1.skill.nlu.evaluations.Status;
        /**
         * Error message when evaluation job fails
         */
        'errorMessage'?: string;
        'inputs'?: v1.skill.nlu.evaluations.EvaluationInputs;
        '_links'?: v1.skill.nlu.evaluations.GetNLUEvaluationResponseLinks;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     *
     * @interface
     */
    export interface GetNLUEvaluationResultsResponse {
        'paginationContext'?: v1.skill.nlu.evaluations.PagedResultsResponsePaginationContext;
        '_links'?: v1.skill.nlu.evaluations.Links;
        /**
         * count of tests failed. A test fails when the expected intent and expected slots are not identical. 
         */
        'totalFailed'?: number;
        'testCases'?: Array<v1.skill.nlu.evaluations.TestCase>;
    }
}

export namespace v1.skill.nlu.evaluations {
    /**
     * response body for a list evaluation API
     * @interface
     */
    export interface ListNLUEvaluationsResponse {
        'paginationContext'?: v1.skill.nlu.evaluations.PaginationContext;
        '_links'?: v1.skill.nlu.evaluations.Links;
        'evaluations'?: Array<v1.skill.nlu.evaluations.Evaluation>;
    }
}

export namespace v1.smartHomeEvaluation {
    /**
     *
     * @interface
     */
    export interface EvaluateSHCapabilityResponse {
        'capabilityTestPlan': v1.smartHomeEvaluation.CapabilityTestPlan;
        'endpoint': v1.smartHomeEvaluation.Endpoint;
        'stage': v1.smartHomeEvaluation.Stage;
        'id'?: string;
    }
}

export namespace v1.smartHomeEvaluation {
    /**
     *
     * @interface
     */
    export interface GetSHCapabilityEvaluationResultsResponse {
        'paginationContext'?: v1.smartHomeEvaluation.PaginationContext;
        'testCaseResults'?: Array<v1.smartHomeEvaluation.TestCaseResult>;
    }
}

export namespace v1.smartHomeEvaluation {
    /**
     *
     * @interface
     */
    export interface ListSHCapabilityTestPlansResponse {
        'paginationContext'?: v1.smartHomeEvaluation.PaginationContext;
        'testPlans'?: Array<v1.smartHomeEvaluation.ListSHTestPlanItem>;
    }
}


export namespace services.skillManagement {

    /**
     * 
    */
    export class SkillManagementServiceClient extends BaseServiceClient {

        private lwaServiceClient : LwaServiceClient;
        private userAgent : string;

        constructor(apiConfiguration : ApiConfiguration, authenticationConfiguration : AuthenticationConfiguration, customUserAgent : string = null) {
            super(apiConfiguration);
            this.lwaServiceClient = new LwaServiceClient({
                apiConfiguration,
                authenticationConfiguration,
                grantType: 'refresh_token',
            });
            this.userAgent = createUserAgent(`${require('./package.json').version}`, customUserAgent);
        }

        /**
         * Returns information about a particular catalog.
         * @param {string} catalogId Provides a unique identifier of the catalog.
         */
        async callGetCatalogV0(catalogId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetCatalogV0';
            // verify required parameter 'catalogId' is not null or undefined
            if (catalogId == null) {
                throw new Error(`Required parameter catalogId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('catalogId', catalogId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v0/catalogs/{catalogId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Successful operation.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Returns information about a particular catalog.
         * @param {string} catalogId Provides a unique identifier of the catalog.
         */
        async getCatalogV0(catalogId : string) : Promise<v0.catalog.CatalogDetails> {
                const apiResponse: ApiResponse = await this.callGetCatalogV0(catalogId);
                return apiResponse.body as v0.catalog.CatalogDetails;
        }
        /**
         * Lists all the uploads for a particular catalog.
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         */
        async callListUploadsForCatalogV0(catalogId : string, nextToken? : string, maxResults? : number) : Promise<ApiResponse> {
            const __operationId__ = 'callListUploadsForCatalogV0';
            // verify required parameter 'catalogId' is not null or undefined
            if (catalogId == null) {
                throw new Error(`Required parameter catalogId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('catalogId', catalogId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v0/catalogs/{catalogId}/uploads";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Successful operation.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Lists all the uploads for a particular catalog.
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         */
        async listUploadsForCatalogV0(catalogId : string, nextToken? : string, maxResults? : number) : Promise<v0.catalog.upload.ListUploadsResponse> {
                const apiResponse: ApiResponse = await this.callListUploadsForCatalogV0(catalogId, nextToken, maxResults);
                return apiResponse.body as v0.catalog.upload.ListUploadsResponse;
        }
        /**
         * Creates a new upload for a catalog and returns presigned upload parts for uploading the file.
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {v0.catalog.upload.CreateContentUploadRequest} createContentUploadRequest Defines the request body for updateCatalog API.
         */
        async callCreateContentUploadV0(catalogId : string, createContentUploadRequest : v0.catalog.upload.CreateContentUploadRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callCreateContentUploadV0';
            // verify required parameter 'catalogId' is not null or undefined
            if (catalogId == null) {
                throw new Error(`Required parameter catalogId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'createContentUploadRequest' is not null or undefined
            if (createContentUploadRequest == null) {
                throw new Error(`Required parameter createContentUploadRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('catalogId', catalogId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v0/catalogs/{catalogId}/uploads";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(201, "Content upload created.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, createContentUploadRequest, errorDefinitions);
        }
        
        /**
         * Creates a new upload for a catalog and returns presigned upload parts for uploading the file.
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {v0.catalog.upload.CreateContentUploadRequest} createContentUploadRequest Defines the request body for updateCatalog API.
         */
        async createContentUploadV0(catalogId : string, createContentUploadRequest : v0.catalog.upload.CreateContentUploadRequest) : Promise<v0.catalog.upload.CreateContentUploadResponse> {
                const apiResponse: ApiResponse = await this.callCreateContentUploadV0(catalogId, createContentUploadRequest);
                return apiResponse.body as v0.catalog.upload.CreateContentUploadResponse;
        }
        /**
         * Gets detailed information about an upload which was created for a specific catalog. Includes the upload's ingestion steps and a presigned url for downloading the file.
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {string} uploadId Unique identifier of the upload.
         */
        async callGetContentUploadByIdV0(catalogId : string, uploadId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetContentUploadByIdV0';
            // verify required parameter 'catalogId' is not null or undefined
            if (catalogId == null) {
                throw new Error(`Required parameter catalogId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'uploadId' is not null or undefined
            if (uploadId == null) {
                throw new Error(`Required parameter uploadId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('catalogId', catalogId);
            pathParams.set('uploadId', uploadId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v0/catalogs/{catalogId}/uploads/{uploadId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Successful operation.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Gets detailed information about an upload which was created for a specific catalog. Includes the upload's ingestion steps and a presigned url for downloading the file.
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {string} uploadId Unique identifier of the upload.
         */
        async getContentUploadByIdV0(catalogId : string, uploadId : string) : Promise<v0.catalog.upload.GetContentUploadResponse> {
                const apiResponse: ApiResponse = await this.callGetContentUploadByIdV0(catalogId, uploadId);
                return apiResponse.body as v0.catalog.upload.GetContentUploadResponse;
        }
        /**
         * Completes an upload. To be called after the file is uploaded to the backend data store using presigned url(s).
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {string} uploadId Unique identifier of the upload.
         * @param {v0.catalog.upload.CompleteUploadRequest} completeUploadRequestPayload Request payload to complete an upload.
         */
        async callCompleteCatalogUploadV0(catalogId : string, uploadId : string, completeUploadRequestPayload : v0.catalog.upload.CompleteUploadRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callCompleteCatalogUploadV0';
            // verify required parameter 'catalogId' is not null or undefined
            if (catalogId == null) {
                throw new Error(`Required parameter catalogId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'uploadId' is not null or undefined
            if (uploadId == null) {
                throw new Error(`Required parameter uploadId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'completeUploadRequestPayload' is not null or undefined
            if (completeUploadRequestPayload == null) {
                throw new Error(`Required parameter completeUploadRequestPayload was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('catalogId', catalogId);
            pathParams.set('uploadId', uploadId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v0/catalogs/{catalogId}/uploads/{uploadId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(202, "Accepted.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(409, "The request could not be completed due to a conflict with the current state of the target resource.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, completeUploadRequestPayload, errorDefinitions);
        }
        
        /**
         * Completes an upload. To be called after the file is uploaded to the backend data store using presigned url(s).
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {string} uploadId Unique identifier of the upload.
         * @param {v0.catalog.upload.CompleteUploadRequest} completeUploadRequestPayload Request payload to complete an upload.
         */
        async completeCatalogUploadV0(catalogId : string, uploadId : string, completeUploadRequestPayload : v0.catalog.upload.CompleteUploadRequest) : Promise<void> {
                await this.callCompleteCatalogUploadV0(catalogId, uploadId, completeUploadRequestPayload);
        }
        /**
         * Lists catalogs associated with a vendor.
         * @param {string} vendorId The vendor ID.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults 
         */
        async callListCatalogsForVendorV0(vendorId : string, nextToken? : string, maxResults? : number) : Promise<ApiResponse> {
            const __operationId__ = 'callListCatalogsForVendorV0';
            // verify required parameter 'vendorId' is not null or undefined
            if (vendorId == null) {
                throw new Error(`Required parameter vendorId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }
            const vendorIdValues: any[] = Array.isArray(vendorId) ? vendorId : [vendorId];
            vendorIdValues.forEach(val => queryParams.push({ key: 'vendorId', value: val }));

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v0/catalogs";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Successful operation.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Lists catalogs associated with a vendor.
         * @param {string} vendorId The vendor ID.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults 
         */
        async listCatalogsForVendorV0(vendorId : string, nextToken? : string, maxResults? : number) : Promise<v0.catalog.ListCatalogsResponse> {
                const apiResponse: ApiResponse = await this.callListCatalogsForVendorV0(vendorId, nextToken, maxResults);
                return apiResponse.body as v0.catalog.ListCatalogsResponse;
        }
        /**
         * Creates a new catalog based on information provided in the request.
         * @param {v0.catalog.CreateCatalogRequest} createCatalogRequest Defines the request body for createCatalog API.
         */
        async callCreateCatalogV0(createCatalogRequest : v0.catalog.CreateCatalogRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callCreateCatalogV0';
            // verify required parameter 'createCatalogRequest' is not null or undefined
            if (createCatalogRequest == null) {
                throw new Error(`Required parameter createCatalogRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v0/catalogs";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(201, "Catalog created.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, createCatalogRequest, errorDefinitions);
        }
        
        /**
         * Creates a new catalog based on information provided in the request.
         * @param {v0.catalog.CreateCatalogRequest} createCatalogRequest Defines the request body for createCatalog API.
         */
        async createCatalogV0(createCatalogRequest : v0.catalog.CreateCatalogRequest) : Promise<v0.catalog.CatalogDetails> {
                const apiResponse: ApiResponse = await this.callCreateCatalogV0(createCatalogRequest);
                return apiResponse.body as v0.catalog.CatalogDetails;
        }
        /**
         * Lists the subscribers for a particular vendor.
         * @param {string} vendorId The vendor ID.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         */
        async callListSubscribersForDevelopmentEventsV0(vendorId : string, nextToken? : string, maxResults? : number) : Promise<ApiResponse> {
            const __operationId__ = 'callListSubscribersForDevelopmentEventsV0';
            // verify required parameter 'vendorId' is not null or undefined
            if (vendorId == null) {
                throw new Error(`Required parameter vendorId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            const vendorIdValues: any[] = Array.isArray(vendorId) ? vendorId : [vendorId];
            vendorIdValues.forEach(val => queryParams.push({ key: 'vendorId', value: val }));
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v0/developmentEvents/subscribers";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Successful operation.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Lists the subscribers for a particular vendor.
         * @param {string} vendorId The vendor ID.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         */
        async listSubscribersForDevelopmentEventsV0(vendorId : string, nextToken? : string, maxResults? : number) : Promise<v0.developmentEvents.subscriber.ListSubscribersResponse> {
                const apiResponse: ApiResponse = await this.callListSubscribersForDevelopmentEventsV0(vendorId, nextToken, maxResults);
                return apiResponse.body as v0.developmentEvents.subscriber.ListSubscribersResponse;
        }
        /**
         * Creates a new subscriber resource for a vendor.
         * @param {v0.developmentEvents.subscriber.CreateSubscriberRequest} createSubscriberRequest Defines the request body for createSubscriber API.
         */
        async callCreateSubscriberForDevelopmentEventsV0(createSubscriberRequest : v0.developmentEvents.subscriber.CreateSubscriberRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callCreateSubscriberForDevelopmentEventsV0';
            // verify required parameter 'createSubscriberRequest' is not null or undefined
            if (createSubscriberRequest == null) {
                throw new Error(`Required parameter createSubscriberRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v0/developmentEvents/subscribers";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(201, "Created. Returns a URL to retrieve the subscriber in &#39;Location&#39; header.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, createSubscriberRequest, errorDefinitions);
        }
        
        /**
         * Creates a new subscriber resource for a vendor.
         * @param {v0.developmentEvents.subscriber.CreateSubscriberRequest} createSubscriberRequest Defines the request body for createSubscriber API.
         */
        async createSubscriberForDevelopmentEventsV0(createSubscriberRequest : v0.developmentEvents.subscriber.CreateSubscriberRequest) : Promise<void> {
                await this.callCreateSubscriberForDevelopmentEventsV0(createSubscriberRequest);
        }
        /**
         * Deletes a specified subscriber.
         * @param {string} subscriberId Unique identifier of the subscriber.
         */
        async callDeleteSubscriberForDevelopmentEventsV0(subscriberId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callDeleteSubscriberForDevelopmentEventsV0';
            // verify required parameter 'subscriberId' is not null or undefined
            if (subscriberId == null) {
                throw new Error(`Required parameter subscriberId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('subscriberId', subscriberId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v0/developmentEvents/subscribers/{subscriberId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "Successful operation.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("DELETE", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Deletes a specified subscriber.
         * @param {string} subscriberId Unique identifier of the subscriber.
         */
        async deleteSubscriberForDevelopmentEventsV0(subscriberId : string) : Promise<void> {
                await this.callDeleteSubscriberForDevelopmentEventsV0(subscriberId);
        }
        /**
         * Returns information about specified subscriber.
         * @param {string} subscriberId Unique identifier of the subscriber.
         */
        async callGetSubscriberForDevelopmentEventsV0(subscriberId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetSubscriberForDevelopmentEventsV0';
            // verify required parameter 'subscriberId' is not null or undefined
            if (subscriberId == null) {
                throw new Error(`Required parameter subscriberId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('subscriberId', subscriberId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v0/developmentEvents/subscribers/{subscriberId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Successful operation.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Returns information about specified subscriber.
         * @param {string} subscriberId Unique identifier of the subscriber.
         */
        async getSubscriberForDevelopmentEventsV0(subscriberId : string) : Promise<v0.developmentEvents.subscriber.SubscriberInfo> {
                const apiResponse: ApiResponse = await this.callGetSubscriberForDevelopmentEventsV0(subscriberId);
                return apiResponse.body as v0.developmentEvents.subscriber.SubscriberInfo;
        }
        /**
         * Updates the properties of a subscriber.
         * @param {string} subscriberId Unique identifier of the subscriber.
         * @param {v0.developmentEvents.subscriber.UpdateSubscriberRequest} updateSubscriberRequest Defines the request body for updateSubscriber API.
         */
        async callSetSubscriberForDevelopmentEventsV0(subscriberId : string, updateSubscriberRequest : v0.developmentEvents.subscriber.UpdateSubscriberRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callSetSubscriberForDevelopmentEventsV0';
            // verify required parameter 'subscriberId' is not null or undefined
            if (subscriberId == null) {
                throw new Error(`Required parameter subscriberId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'updateSubscriberRequest' is not null or undefined
            if (updateSubscriberRequest == null) {
                throw new Error(`Required parameter updateSubscriberRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('subscriberId', subscriberId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v0/developmentEvents/subscribers/{subscriberId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "Success.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("PUT", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, updateSubscriberRequest, errorDefinitions);
        }
        
        /**
         * Updates the properties of a subscriber.
         * @param {string} subscriberId Unique identifier of the subscriber.
         * @param {v0.developmentEvents.subscriber.UpdateSubscriberRequest} updateSubscriberRequest Defines the request body for updateSubscriber API.
         */
        async setSubscriberForDevelopmentEventsV0(subscriberId : string, updateSubscriberRequest : v0.developmentEvents.subscriber.UpdateSubscriberRequest) : Promise<void> {
                await this.callSetSubscriberForDevelopmentEventsV0(subscriberId, updateSubscriberRequest);
        }
        /**
         * Lists all the subscriptions for a vendor/subscriber depending on the query parameter.
         * @param {string} vendorId The vendor ID.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} subscriberId Unique identifier of the subscriber. If this query parameter is provided, the list would be filtered by the owning subscriberId.
         */
        async callListSubscriptionsForDevelopmentEventsV0(vendorId : string, nextToken? : string, maxResults? : number, subscriberId? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callListSubscriptionsForDevelopmentEventsV0';
            // verify required parameter 'vendorId' is not null or undefined
            if (vendorId == null) {
                throw new Error(`Required parameter vendorId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            const vendorIdValues: any[] = Array.isArray(vendorId) ? vendorId : [vendorId];
            vendorIdValues.forEach(val => queryParams.push({ key: 'vendorId', value: val }));
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }
            if(subscriberId != null) {
                const subscriberIdValues: any[] = Array.isArray(subscriberId) ? subscriberId : [subscriberId];
                subscriberIdValues.forEach(val => queryParams.push({ key: 'subscriberId', value: val }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v0/developmentEvents/subscriptions";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Successful operation.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Lists all the subscriptions for a vendor/subscriber depending on the query parameter.
         * @param {string} vendorId The vendor ID.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} subscriberId Unique identifier of the subscriber. If this query parameter is provided, the list would be filtered by the owning subscriberId.
         */
        async listSubscriptionsForDevelopmentEventsV0(vendorId : string, nextToken? : string, maxResults? : number, subscriberId? : string) : Promise<v0.developmentEvents.subscription.ListSubscriptionsResponse> {
                const apiResponse: ApiResponse = await this.callListSubscriptionsForDevelopmentEventsV0(vendorId, nextToken, maxResults, subscriberId);
                return apiResponse.body as v0.developmentEvents.subscription.ListSubscriptionsResponse;
        }
        /**
         * Creates a new subscription for a subscriber. This needs to be authorized by the client/vendor who created the subscriber and the vendor who publishes the event.
         * @param {v0.developmentEvents.subscription.CreateSubscriptionRequest} createSubscriptionRequest Request body for createSubscription API.
         */
        async callCreateSubscriptionForDevelopmentEventsV0(createSubscriptionRequest? : v0.developmentEvents.subscription.CreateSubscriptionRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callCreateSubscriptionForDevelopmentEventsV0';

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v0/developmentEvents/subscriptions";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(201, "Created; Returns a URL to retrieve the subscription in &#39;Location&#39; header.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, createSubscriptionRequest, errorDefinitions);
        }
        
        /**
         * Creates a new subscription for a subscriber. This needs to be authorized by the client/vendor who created the subscriber and the vendor who publishes the event.
         * @param {v0.developmentEvents.subscription.CreateSubscriptionRequest} createSubscriptionRequest Request body for createSubscription API.
         */
        async createSubscriptionForDevelopmentEventsV0(createSubscriptionRequest? : v0.developmentEvents.subscription.CreateSubscriptionRequest) : Promise<void> {
                await this.callCreateSubscriptionForDevelopmentEventsV0(createSubscriptionRequest);
        }
        /**
         * Deletes a particular subscription. Both, the vendor who created the subscriber and the vendor who publishes the event can delete this resource with appropriate authorization.
         * @param {string} subscriptionId Unique identifier of the subscription.
         */
        async callDeleteSubscriptionForDevelopmentEventsV0(subscriptionId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callDeleteSubscriptionForDevelopmentEventsV0';
            // verify required parameter 'subscriptionId' is not null or undefined
            if (subscriptionId == null) {
                throw new Error(`Required parameter subscriptionId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('subscriptionId', subscriptionId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v0/developmentEvents/subscriptions/{subscriptionId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "Successful operation.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("DELETE", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Deletes a particular subscription. Both, the vendor who created the subscriber and the vendor who publishes the event can delete this resource with appropriate authorization.
         * @param {string} subscriptionId Unique identifier of the subscription.
         */
        async deleteSubscriptionForDevelopmentEventsV0(subscriptionId : string) : Promise<void> {
                await this.callDeleteSubscriptionForDevelopmentEventsV0(subscriptionId);
        }
        /**
         * Returns information about a particular subscription. Both, the vendor who created the subscriber and the vendor who publishes the event can retrieve this resource with appropriate authorization.
         * @param {string} subscriptionId Unique identifier of the subscription.
         */
        async callGetSubscriptionForDevelopmentEventsV0(subscriptionId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetSubscriptionForDevelopmentEventsV0';
            // verify required parameter 'subscriptionId' is not null or undefined
            if (subscriptionId == null) {
                throw new Error(`Required parameter subscriptionId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('subscriptionId', subscriptionId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v0/developmentEvents/subscriptions/{subscriptionId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Successful operation.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Returns information about a particular subscription. Both, the vendor who created the subscriber and the vendor who publishes the event can retrieve this resource with appropriate authorization.
         * @param {string} subscriptionId Unique identifier of the subscription.
         */
        async getSubscriptionForDevelopmentEventsV0(subscriptionId : string) : Promise<v0.developmentEvents.subscription.SubscriptionInfo> {
                const apiResponse: ApiResponse = await this.callGetSubscriptionForDevelopmentEventsV0(subscriptionId);
                return apiResponse.body as v0.developmentEvents.subscription.SubscriptionInfo;
        }
        /**
         * Updates the mutable properties of a subscription. This needs to be authorized by the client/vendor who created the subscriber and the vendor who publishes the event. The subscriberId cannot be updated.
         * @param {string} subscriptionId Unique identifier of the subscription.
         * @param {v0.developmentEvents.subscription.UpdateSubscriptionRequest} updateSubscriptionRequest Request body for updateSubscription API.
         */
        async callSetSubscriptionForDevelopmentEventsV0(subscriptionId : string, updateSubscriptionRequest? : v0.developmentEvents.subscription.UpdateSubscriptionRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callSetSubscriptionForDevelopmentEventsV0';
            // verify required parameter 'subscriptionId' is not null or undefined
            if (subscriptionId == null) {
                throw new Error(`Required parameter subscriptionId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('subscriptionId', subscriptionId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v0/developmentEvents/subscriptions/{subscriptionId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "No content.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("PUT", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, updateSubscriptionRequest, errorDefinitions);
        }
        
        /**
         * Updates the mutable properties of a subscription. This needs to be authorized by the client/vendor who created the subscriber and the vendor who publishes the event. The subscriberId cannot be updated.
         * @param {string} subscriptionId Unique identifier of the subscription.
         * @param {v0.developmentEvents.subscription.UpdateSubscriptionRequest} updateSubscriptionRequest Request body for updateSubscription API.
         */
        async setSubscriptionForDevelopmentEventsV0(subscriptionId : string, updateSubscriptionRequest? : v0.developmentEvents.subscription.UpdateSubscriptionRequest) : Promise<void> {
                await this.callSetSubscriptionForDevelopmentEventsV0(subscriptionId, updateSubscriptionRequest);
        }
        /**
         * Associate skill with catalog.
         * @param {string} skillId The skill ID.
         * @param {string} catalogId Provides a unique identifier of the catalog.
         */
        async callAssociateCatalogWithSkillV0(skillId : string, catalogId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callAssociateCatalogWithSkillV0';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'catalogId' is not null or undefined
            if (catalogId == null) {
                throw new Error(`Required parameter catalogId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('catalogId', catalogId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v0/skills/{skillId}/catalogs/{catalogId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(201, "Successful operation.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("PUT", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Associate skill with catalog.
         * @param {string} skillId The skill ID.
         * @param {string} catalogId Provides a unique identifier of the catalog.
         */
        async associateCatalogWithSkillV0(skillId : string, catalogId : string) : Promise<void> {
                await this.callAssociateCatalogWithSkillV0(skillId, catalogId);
        }
        /**
         * Lists all the catalogs associated with a skill.
         * @param {string} skillId The skill ID.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults 
         */
        async callListCatalogsForSkillV0(skillId : string, nextToken? : string, maxResults? : number) : Promise<ApiResponse> {
            const __operationId__ = 'callListCatalogsForSkillV0';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v0/skills/{skillId}/catalogs";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Successful operation.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Lists all the catalogs associated with a skill.
         * @param {string} skillId The skill ID.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults 
         */
        async listCatalogsForSkillV0(skillId : string, nextToken? : string, maxResults? : number) : Promise<v0.catalog.ListCatalogsResponse> {
                const apiResponse: ApiResponse = await this.callListCatalogsForSkillV0(skillId, nextToken, maxResults);
                return apiResponse.body as v0.catalog.ListCatalogsResponse;
        }
        /**
         * Creates a new upload for a catalog and returns location to track the upload process.
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {v1.catalog.upload.CatalogUploadBase} catalogUploadRequestBody Provides the request body for create content upload
         */
        async callCreateCatalogUploadV1(catalogId : string, catalogUploadRequestBody : v1.catalog.upload.CatalogUploadBase) : Promise<ApiResponse> {
            const __operationId__ = 'callCreateCatalogUploadV1';
            // verify required parameter 'catalogId' is not null or undefined
            if (catalogId == null) {
                throw new Error(`Required parameter catalogId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'catalogUploadRequestBody' is not null or undefined
            if (catalogUploadRequestBody == null) {
                throw new Error(`Required parameter catalogUploadRequestBody was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('catalogId', catalogId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/catalogs/{catalogId}/uploads";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(202, "Accepted");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId. ");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, catalogUploadRequestBody, errorDefinitions);
        }
        
        /**
         * Creates a new upload for a catalog and returns location to track the upload process.
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {v1.catalog.upload.CatalogUploadBase} catalogUploadRequestBody Provides the request body for create content upload
         */
        async createCatalogUploadV1(catalogId : string, catalogUploadRequestBody : v1.catalog.upload.CatalogUploadBase) : Promise<void> {
                await this.callCreateCatalogUploadV1(catalogId, catalogUploadRequestBody);
        }
        /**
         * Gets detailed information about an upload which was created for a specific catalog. Includes the upload's ingestion steps and a url for downloading the file.
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {string} uploadId Unique identifier of the upload.
         */
        async callGetContentUploadByIdV1(catalogId : string, uploadId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetContentUploadByIdV1';
            // verify required parameter 'catalogId' is not null or undefined
            if (catalogId == null) {
                throw new Error(`Required parameter catalogId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'uploadId' is not null or undefined
            if (uploadId == null) {
                throw new Error(`Required parameter uploadId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('catalogId', catalogId);
            pathParams.set('uploadId', uploadId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/catalogs/{catalogId}/uploads/{uploadId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Successful operation.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId. ");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Gets detailed information about an upload which was created for a specific catalog. Includes the upload's ingestion steps and a url for downloading the file.
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {string} uploadId Unique identifier of the upload.
         */
        async getContentUploadByIdV1(catalogId : string, uploadId : string) : Promise<v1.catalog.upload.GetContentUploadResponse> {
                const apiResponse: ApiResponse = await this.callGetContentUploadByIdV1(catalogId, uploadId);
                return apiResponse.body as v1.catalog.upload.GetContentUploadResponse;
        }
        /**
         * Generates preSigned urls to upload data
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {v1.catalog.CreateContentUploadUrlRequest} generateCatalogUploadUrlRequestBody Request body to generate catalog upload url
         */
        async callGenerateCatalogUploadUrlV1(catalogId : string, generateCatalogUploadUrlRequestBody : v1.catalog.CreateContentUploadUrlRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callGenerateCatalogUploadUrlV1';
            // verify required parameter 'catalogId' is not null or undefined
            if (catalogId == null) {
                throw new Error(`Required parameter catalogId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'generateCatalogUploadUrlRequestBody' is not null or undefined
            if (generateCatalogUploadUrlRequestBody == null) {
                throw new Error(`Required parameter generateCatalogUploadUrlRequestBody was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('catalogId', catalogId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/catalogs/{catalogId}/urls";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(201, "Successful operation.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, generateCatalogUploadUrlRequestBody, errorDefinitions);
        }
        
        /**
         * Generates preSigned urls to upload data
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {v1.catalog.CreateContentUploadUrlRequest} generateCatalogUploadUrlRequestBody Request body to generate catalog upload url
         */
        async generateCatalogUploadUrlV1(catalogId : string, generateCatalogUploadUrlRequestBody : v1.catalog.CreateContentUploadUrlRequest) : Promise<v1.catalog.CreateContentUploadUrlResponse> {
                const apiResponse: ApiResponse = await this.callGenerateCatalogUploadUrlV1(catalogId, generateCatalogUploadUrlRequestBody);
                return apiResponse.body as v1.catalog.CreateContentUploadUrlResponse;
        }
        /**
         * The SMAPI Audit Logs API provides customers with an audit history of all SMAPI calls made by a developer or developers with permissions on that account.
         * @param {v1.auditLogs.AuditLogsRequest} getAuditLogsRequest Request object encompassing vendorId, optional request filters and optional pagination context.
         */
        async callQueryDevelopmentAuditLogsV1(getAuditLogsRequest : v1.auditLogs.AuditLogsRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callQueryDevelopmentAuditLogsV1';
            // verify required parameter 'getAuditLogsRequest' is not null or undefined
            if (getAuditLogsRequest == null) {
                throw new Error(`Required parameter getAuditLogsRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/developmentAuditLogs/query";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns a list of audit logs for the given vendor.");
            errorDefinitions.set(400, "Invalid request");
            errorDefinitions.set(401, "Unauthorized");
            errorDefinitions.set(403, "Forbidden");
            errorDefinitions.set(404, "Not Found");
            errorDefinitions.set(429, "Too Many Requests");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, getAuditLogsRequest, errorDefinitions);
        }
        
        /**
         * The SMAPI Audit Logs API provides customers with an audit history of all SMAPI calls made by a developer or developers with permissions on that account.
         * @param {v1.auditLogs.AuditLogsRequest} getAuditLogsRequest Request object encompassing vendorId, optional request filters and optional pagination context.
         */
        async queryDevelopmentAuditLogsV1(getAuditLogsRequest : v1.auditLogs.AuditLogsRequest) : Promise<v1.auditLogs.AuditLogsResponse> {
                const apiResponse: ApiResponse = await this.callQueryDevelopmentAuditLogsV1(getAuditLogsRequest);
                return apiResponse.body as v1.auditLogs.AuditLogsResponse;
        }
        /**
         * Get the list of in-skill products for the vendor.
         * @param {string} vendorId The vendor ID.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {Array<string>} productId The list of in-skill product IDs that you wish to get the summary for. A maximum of 50 in-skill product IDs can be specified in a single listInSkillProducts call. Please note that this parameter must not be used with &#39;nextToken&#39; and/or &#39;maxResults&#39; parameter.
         * @param {string} stage Filter in-skill products by specified stage.
         * @param {string} type Type of in-skill product to filter on.
         * @param {string} referenceName Filter in-skill products by reference name.
         * @param {string} status Status of in-skill product.
         * @param {string} isAssociatedWithSkill Filter in-skill products by whether or not they are associated to a skill.
         */
        async callGetIspListForVendorV1(vendorId : string, nextToken? : string, maxResults? : number, productId? : Array<string>, stage? : string, type? : string, referenceName? : string, status? : string, isAssociatedWithSkill? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetIspListForVendorV1';
            // verify required parameter 'vendorId' is not null or undefined
            if (vendorId == null) {
                throw new Error(`Required parameter vendorId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            const vendorIdValues: any[] = Array.isArray(vendorId) ? vendorId : [vendorId];
            vendorIdValues.forEach(val => queryParams.push({ key: 'vendorId', value: val }));
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }
            if(productId != null) {
                const productIdValues: any[] = Array.isArray(productId) ? productId : [productId];
                productIdValues.forEach(val => queryParams.push({ key: 'productId', value: val!.toString() }));
            }
            if(stage != null) {
                const stageValues: any[] = Array.isArray(stage) ? stage : [stage];
                stageValues.forEach(val => queryParams.push({ key: 'stage', value: val }));
            }
            if(type != null) {
                const typeValues: any[] = Array.isArray(type) ? type : [type];
                typeValues.forEach(val => queryParams.push({ key: 'type', value: val }));
            }
            if(referenceName != null) {
                const referenceNameValues: any[] = Array.isArray(referenceName) ? referenceName : [referenceName];
                referenceNameValues.forEach(val => queryParams.push({ key: 'referenceName', value: val }));
            }
            if(status != null) {
                const statusValues: any[] = Array.isArray(status) ? status : [status];
                statusValues.forEach(val => queryParams.push({ key: 'status', value: val }));
            }
            if(isAssociatedWithSkill != null) {
                const isAssociatedWithSkillValues: any[] = Array.isArray(isAssociatedWithSkill) ? isAssociatedWithSkill : [isAssociatedWithSkill];
                isAssociatedWithSkillValues.forEach(val => queryParams.push({ key: 'isAssociatedWithSkill', value: val }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/inSkillProducts";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Response contains list of in-skill products for the specified vendor and stage.");
            errorDefinitions.set(400, "Bad request. Returned when a required parameter is not present, badly formatted. ");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(429, "Too many requests received.");
            errorDefinitions.set(500, "Internal Server Error");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get the list of in-skill products for the vendor.
         * @param {string} vendorId The vendor ID.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {Array<string>} productId The list of in-skill product IDs that you wish to get the summary for. A maximum of 50 in-skill product IDs can be specified in a single listInSkillProducts call. Please note that this parameter must not be used with &#39;nextToken&#39; and/or &#39;maxResults&#39; parameter.
         * @param {string} stage Filter in-skill products by specified stage.
         * @param {string} type Type of in-skill product to filter on.
         * @param {string} referenceName Filter in-skill products by reference name.
         * @param {string} status Status of in-skill product.
         * @param {string} isAssociatedWithSkill Filter in-skill products by whether or not they are associated to a skill.
         */
        async getIspListForVendorV1(vendorId : string, nextToken? : string, maxResults? : number, productId? : Array<string>, stage? : string, type? : string, referenceName? : string, status? : string, isAssociatedWithSkill? : string) : Promise<v1.isp.ListInSkillProductResponse> {
                const apiResponse: ApiResponse = await this.callGetIspListForVendorV1(vendorId, nextToken, maxResults, productId, stage, type, referenceName, status, isAssociatedWithSkill);
                return apiResponse.body as v1.isp.ListInSkillProductResponse;
        }
        /**
         * Creates a new in-skill product for given vendorId.
         * @param {v1.isp.CreateInSkillProductRequest} createInSkillProductRequest defines the request body for createInSkillProduct API.
         */
        async callCreateIspForVendorV1(createInSkillProductRequest : v1.isp.CreateInSkillProductRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callCreateIspForVendorV1';
            // verify required parameter 'createInSkillProductRequest' is not null or undefined
            if (createInSkillProductRequest == null) {
                throw new Error(`Required parameter createInSkillProductRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/inSkillProducts";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(201, "Success.");
            errorDefinitions.set(400, "Bad request. Returned when a required parameter is not present, badly formatted. ");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(429, "Too many requests received.");
            errorDefinitions.set(500, "Internal Server Error");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, createInSkillProductRequest, errorDefinitions);
        }
        
        /**
         * Creates a new in-skill product for given vendorId.
         * @param {v1.isp.CreateInSkillProductRequest} createInSkillProductRequest defines the request body for createInSkillProduct API.
         */
        async createIspForVendorV1(createInSkillProductRequest : v1.isp.CreateInSkillProductRequest) : Promise<v1.isp.ProductResponse> {
                const apiResponse: ApiResponse = await this.callCreateIspForVendorV1(createInSkillProductRequest);
                return apiResponse.body as v1.isp.ProductResponse;
        }
        /**
         * Disassociates an in-skill product from a skill.
         * @param {string} productId The in-skill product ID.
         * @param {string} skillId The skill ID.
         */
        async callDisassociateIspWithSkillV1(productId : string, skillId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callDisassociateIspWithSkillV1';
            // verify required parameter 'productId' is not null or undefined
            if (productId == null) {
                throw new Error(`Required parameter productId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('productId', productId);
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/inSkillProducts/{productId}/skills/{skillId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "Success. No content.");
            errorDefinitions.set(400, "Bad request. Returned when a required parameter is not present, badly formatted. ");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "Request is forbidden.");
            errorDefinitions.set(404, "Requested resource not found.");
            errorDefinitions.set(429, "Too many requests received.");
            errorDefinitions.set(500, "Internal Server Error");

            return this.invoke("DELETE", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Disassociates an in-skill product from a skill.
         * @param {string} productId The in-skill product ID.
         * @param {string} skillId The skill ID.
         */
        async disassociateIspWithSkillV1(productId : string, skillId : string) : Promise<void> {
                await this.callDisassociateIspWithSkillV1(productId, skillId);
        }
        /**
         * Associates an in-skill product with a skill.
         * @param {string} productId The in-skill product ID.
         * @param {string} skillId The skill ID.
         */
        async callAssociateIspWithSkillV1(productId : string, skillId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callAssociateIspWithSkillV1';
            // verify required parameter 'productId' is not null or undefined
            if (productId == null) {
                throw new Error(`Required parameter productId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('productId', productId);
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/inSkillProducts/{productId}/skills/{skillId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "Success. No content.");
            errorDefinitions.set(400, "Bad request. Returned when a required parameter is not present, badly formatted. ");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "Request is forbidden.");
            errorDefinitions.set(404, "Requested resource not found.");
            errorDefinitions.set(429, "Too many requests received.");
            errorDefinitions.set(500, "Internal Server Error");

            return this.invoke("PUT", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Associates an in-skill product with a skill.
         * @param {string} productId The in-skill product ID.
         * @param {string} skillId The skill ID.
         */
        async associateIspWithSkillV1(productId : string, skillId : string) : Promise<void> {
                await this.callAssociateIspWithSkillV1(productId, skillId);
        }
        /**
         * Deletes the in-skill product for given productId. Only development stage supported. Live in-skill products or in-skill products associated with a skill cannot be deleted by this API.
         * @param {string} productId The in-skill product ID.
         * @param {string} stage Stage for skill.
         * @param {string} ifMatch Request header that specified an entity tag. The server will update the resource only if the eTag matches with the resource&#39;s current eTag.
         */
        async callDeleteIspForProductV1(productId : string, stage : string, ifMatch? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callDeleteIspForProductV1';
            // verify required parameter 'productId' is not null or undefined
            if (productId == null) {
                throw new Error(`Required parameter productId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });
            if(ifMatch != null) {
                headerParams.push({ key : 'If-Match', value : ifMatch });
            }


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('productId', productId);
            pathParams.set('stage', stage);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/inSkillProducts/{productId}/stages/{stage}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "Success. No content.");
            errorDefinitions.set(400, "Bad request. Returned when a required parameter is not present, badly formatted. ");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "Request is forbidden.");
            errorDefinitions.set(404, "Requested resource not found.");
            errorDefinitions.set(412, "Precondition failed.");
            errorDefinitions.set(429, "Too many requests received.");
            errorDefinitions.set(500, "Internal Server Error");

            return this.invoke("DELETE", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Deletes the in-skill product for given productId. Only development stage supported. Live in-skill products or in-skill products associated with a skill cannot be deleted by this API.
         * @param {string} productId The in-skill product ID.
         * @param {string} stage Stage for skill.
         * @param {string} ifMatch Request header that specified an entity tag. The server will update the resource only if the eTag matches with the resource&#39;s current eTag.
         */
        async deleteIspForProductV1(productId : string, stage : string, ifMatch? : string) : Promise<void> {
                await this.callDeleteIspForProductV1(productId, stage, ifMatch);
        }
        /**
         * Resets the entitlement(s) of the Product for the current user.
         * @param {string} productId The in-skill product ID.
         * @param {string} stage Stage for skill.
         */
        async callResetEntitlementForProductV1(productId : string, stage : string) : Promise<ApiResponse> {
            const __operationId__ = 'callResetEntitlementForProductV1';
            // verify required parameter 'productId' is not null or undefined
            if (productId == null) {
                throw new Error(`Required parameter productId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('productId', productId);
            pathParams.set('stage', stage);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/inSkillProducts/{productId}/stages/{stage}/entitlement";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "Success. No content.");
            errorDefinitions.set(400, "Bad request. Returned when a required parameter is not present, badly formatted. ");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "Request is forbidden.");
            errorDefinitions.set(404, "Requested resource not found.");
            errorDefinitions.set(412, "Precondition failed.");
            errorDefinitions.set(429, "Too many requests received.");
            errorDefinitions.set(500, "Internal Server Error");

            return this.invoke("DELETE", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Resets the entitlement(s) of the Product for the current user.
         * @param {string} productId The in-skill product ID.
         * @param {string} stage Stage for skill.
         */
        async resetEntitlementForProductV1(productId : string, stage : string) : Promise<void> {
                await this.callResetEntitlementForProductV1(productId, stage);
        }
        /**
         * Returns the in-skill product definition for given productId.
         * @param {string} productId The in-skill product ID.
         * @param {string} stage Stage for skill.
         */
        async callGetIspDefinitionV1(productId : string, stage : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetIspDefinitionV1';
            // verify required parameter 'productId' is not null or undefined
            if (productId == null) {
                throw new Error(`Required parameter productId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('productId', productId);
            pathParams.set('stage', stage);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/inSkillProducts/{productId}/stages/{stage}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Response contains the latest version of an in-skill product for the specified stage.");
            errorDefinitions.set(400, "Bad request. Returned when a required parameter is not present, badly formatted. ");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "Requested resource not found.");
            errorDefinitions.set(429, "Too many requests received.");
            errorDefinitions.set(500, "Internal Server Error");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Returns the in-skill product definition for given productId.
         * @param {string} productId The in-skill product ID.
         * @param {string} stage Stage for skill.
         */
        async getIspDefinitionV1(productId : string, stage : string) : Promise<v1.isp.InSkillProductDefinitionResponse> {
                const apiResponse: ApiResponse = await this.callGetIspDefinitionV1(productId, stage);
                return apiResponse.body as v1.isp.InSkillProductDefinitionResponse;
        }
        /**
         * Updates in-skill product definition for given productId. Only development stage supported.
         * @param {string} productId The in-skill product ID.
         * @param {string} stage Stage for skill.
         * @param {v1.isp.UpdateInSkillProductRequest} updateInSkillProductRequest defines the request body for updateInSkillProduct API.
         * @param {string} ifMatch Request header that specified an entity tag. The server will update the resource only if the eTag matches with the resource&#39;s current eTag.
         */
        async callUpdateIspForProductV1(productId : string, stage : string, updateInSkillProductRequest : v1.isp.UpdateInSkillProductRequest, ifMatch? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callUpdateIspForProductV1';
            // verify required parameter 'productId' is not null or undefined
            if (productId == null) {
                throw new Error(`Required parameter productId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'updateInSkillProductRequest' is not null or undefined
            if (updateInSkillProductRequest == null) {
                throw new Error(`Required parameter updateInSkillProductRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });
            if(ifMatch != null) {
                headerParams.push({ key : 'If-Match', value : ifMatch });
            }

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('productId', productId);
            pathParams.set('stage', stage);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/inSkillProducts/{productId}/stages/{stage}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "Success.");
            errorDefinitions.set(400, "Bad request. Returned when a required parameter is not present, badly formatted. ");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "Request is forbidden.");
            errorDefinitions.set(404, "Requested resource not found.");
            errorDefinitions.set(412, "Precondition failed.");
            errorDefinitions.set(429, "Too many requests received.");
            errorDefinitions.set(500, "Internal Server Error");

            return this.invoke("PUT", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, updateInSkillProductRequest, errorDefinitions);
        }
        
        /**
         * Updates in-skill product definition for given productId. Only development stage supported.
         * @param {string} productId The in-skill product ID.
         * @param {string} stage Stage for skill.
         * @param {v1.isp.UpdateInSkillProductRequest} updateInSkillProductRequest defines the request body for updateInSkillProduct API.
         * @param {string} ifMatch Request header that specified an entity tag. The server will update the resource only if the eTag matches with the resource&#39;s current eTag.
         */
        async updateIspForProductV1(productId : string, stage : string, updateInSkillProductRequest : v1.isp.UpdateInSkillProductRequest, ifMatch? : string) : Promise<void> {
                await this.callUpdateIspForProductV1(productId, stage, updateInSkillProductRequest, ifMatch);
        }
        /**
         * Get the associated skills for the in-skill product.
         * @param {string} productId The in-skill product ID.
         * @param {string} stage Stage for skill.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         */
        async callGetIspAssociatedSkillsV1(productId : string, stage : string, nextToken? : string, maxResults? : number) : Promise<ApiResponse> {
            const __operationId__ = 'callGetIspAssociatedSkillsV1';
            // verify required parameter 'productId' is not null or undefined
            if (productId == null) {
                throw new Error(`Required parameter productId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('productId', productId);
            pathParams.set('stage', stage);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/inSkillProducts/{productId}/stages/{stage}/skills";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns skills associated with the in-skill product.");
            errorDefinitions.set(400, "Bad request. Returned when a required parameter is not present, badly formatted. ");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "Requested resource not found.");
            errorDefinitions.set(429, "Too many requests received.");
            errorDefinitions.set(500, "Internal Server Error");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get the associated skills for the in-skill product.
         * @param {string} productId The in-skill product ID.
         * @param {string} stage Stage for skill.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         */
        async getIspAssociatedSkillsV1(productId : string, stage : string, nextToken? : string, maxResults? : number) : Promise<v1.isp.AssociatedSkillResponse> {
                const apiResponse: ApiResponse = await this.callGetIspAssociatedSkillsV1(productId, stage, nextToken, maxResults);
                return apiResponse.body as v1.isp.AssociatedSkillResponse;
        }
        /**
         * Get the summary information for an in-skill product.
         * @param {string} productId The in-skill product ID.
         * @param {string} stage Stage for skill.
         */
        async callGetIspSummaryV1(productId : string, stage : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetIspSummaryV1';
            // verify required parameter 'productId' is not null or undefined
            if (productId == null) {
                throw new Error(`Required parameter productId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('productId', productId);
            pathParams.set('stage', stage);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/inSkillProducts/{productId}/stages/{stage}/summary";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns current in-skill product summary for productId.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "Requested resource not found.");
            errorDefinitions.set(429, "Too many requests received.");
            errorDefinitions.set(500, "Internal Server Error");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get the summary information for an in-skill product.
         * @param {string} productId The in-skill product ID.
         * @param {string} stage Stage for skill.
         */
        async getIspSummaryV1(productId : string, stage : string) : Promise<v1.isp.InSkillProductSummaryResponse> {
                const apiResponse: ApiResponse = await this.callGetIspSummaryV1(productId, stage);
                return apiResponse.body as v1.isp.InSkillProductSummaryResponse;
        }
        /**
         * Delete the catalog. 
         * @param {string} catalogId Provides a unique identifier of the catalog.
         */
        async callDeleteInteractionModelCatalogV1(catalogId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callDeleteInteractionModelCatalogV1';
            // verify required parameter 'catalogId' is not null or undefined
            if (catalogId == null) {
                throw new Error(`Required parameter catalogId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('catalogId', catalogId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/catalogs/{catalogId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "No content; just confirm the catalog is deleted.");
            errorDefinitions.set(400, "The catalog cannot be deleted from reasons due to in-use by other entities.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "There is no catalog defined for the catalogId.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("DELETE", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Delete the catalog. 
         * @param {string} catalogId Provides a unique identifier of the catalog.
         */
        async deleteInteractionModelCatalogV1(catalogId : string) : Promise<void> {
                await this.callDeleteInteractionModelCatalogV1(catalogId);
        }
        /**
         * get the catalog definition 
         * @param {string} catalogId Provides a unique identifier of the catalog.
         */
        async callGetInteractionModelCatalogDefinitionV1(catalogId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetInteractionModelCatalogDefinitionV1';
            // verify required parameter 'catalogId' is not null or undefined
            if (catalogId == null) {
                throw new Error(`Required parameter catalogId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('catalogId', catalogId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/catalogs/{catalogId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "the catalog definition");
            errorDefinitions.set(400, "The catalog cannot be retrieved due to errors listed.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "There is no catalog defined for the catalogId.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * get the catalog definition 
         * @param {string} catalogId Provides a unique identifier of the catalog.
         */
        async getInteractionModelCatalogDefinitionV1(catalogId : string) : Promise<v1.skill.interactionModel.catalog.CatalogDefinitionOutput> {
                const apiResponse: ApiResponse = await this.callGetInteractionModelCatalogDefinitionV1(catalogId);
                return apiResponse.body as v1.skill.interactionModel.catalog.CatalogDefinitionOutput;
        }
        /**
         * update description and vendorGuidance string for certain version of a catalog. 
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {v1.skill.interactionModel.catalog.UpdateRequest} updateRequest 
         */
        async callUpdateInteractionModelCatalogV1(catalogId : string, updateRequest : v1.skill.interactionModel.catalog.UpdateRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callUpdateInteractionModelCatalogV1';
            // verify required parameter 'catalogId' is not null or undefined
            if (catalogId == null) {
                throw new Error(`Required parameter catalogId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'updateRequest' is not null or undefined
            if (updateRequest == null) {
                throw new Error(`Required parameter updateRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('catalogId', catalogId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/catalogs/{catalogId}/update";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "No content, indicates the fields were successfully updated.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "There is no catalog defined for the catalogId.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, updateRequest, errorDefinitions);
        }
        
        /**
         * update description and vendorGuidance string for certain version of a catalog. 
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {v1.skill.interactionModel.catalog.UpdateRequest} updateRequest 
         */
        async updateInteractionModelCatalogV1(catalogId : string, updateRequest : v1.skill.interactionModel.catalog.UpdateRequest) : Promise<void> {
                await this.callUpdateInteractionModelCatalogV1(catalogId, updateRequest);
        }
        /**
         * Get the status of catalog resource and its sub-resources for a given catalogId. 
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {string} updateRequestId The identifier for slotType version creation process
         */
        async callGetInteractionModelCatalogUpdateStatusV1(catalogId : string, updateRequestId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetInteractionModelCatalogUpdateStatusV1';
            // verify required parameter 'catalogId' is not null or undefined
            if (catalogId == null) {
                throw new Error(`Required parameter catalogId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'updateRequestId' is not null or undefined
            if (updateRequestId == null) {
                throw new Error(`Required parameter updateRequestId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('catalogId', catalogId);
            pathParams.set('updateRequestId', updateRequestId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/catalogs/{catalogId}/updateRequest/{updateRequestId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns the build status and error codes for the given catalogId");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "There is no catalog defined for the catalogId.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get the status of catalog resource and its sub-resources for a given catalogId. 
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {string} updateRequestId The identifier for slotType version creation process
         */
        async getInteractionModelCatalogUpdateStatusV1(catalogId : string, updateRequestId : string) : Promise<v1.skill.interactionModel.catalog.CatalogStatus> {
                const apiResponse: ApiResponse = await this.callGetInteractionModelCatalogUpdateStatusV1(catalogId, updateRequestId);
                return apiResponse.body as v1.skill.interactionModel.catalog.CatalogStatus;
        }
        /**
         * List all the historical versions of the given catalogId.
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {string} sortDirection Sets the sorting direction of the result items. When set to &#39;asc&#39; these items are returned in ascending order of sortField value and when set to &#39;desc&#39; these items are returned in descending order of sortField value.
         * @param {string} sortField Sets the field on which the sorting would be applied.
         */
        async callListInteractionModelCatalogVersionsV1(catalogId : string, maxResults? : number, nextToken? : string, sortDirection? : string, sortField? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callListInteractionModelCatalogVersionsV1';
            // verify required parameter 'catalogId' is not null or undefined
            if (catalogId == null) {
                throw new Error(`Required parameter catalogId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(sortDirection != null) {
                const sortDirectionValues: any[] = Array.isArray(sortDirection) ? sortDirection : [sortDirection];
                sortDirectionValues.forEach(val => queryParams.push({ key: 'sortDirection', value: val }));
            }
            if(sortField != null) {
                const sortFieldValues: any[] = Array.isArray(sortField) ? sortField : [sortField];
                sortFieldValues.forEach(val => queryParams.push({ key: 'sortField', value: val }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('catalogId', catalogId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/catalogs/{catalogId}/versions";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns list of catalogs for the vendor.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error e.g. the catalog definition is invalid.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The specified catalog does not exist.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * List all the historical versions of the given catalogId.
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {string} sortDirection Sets the sorting direction of the result items. When set to &#39;asc&#39; these items are returned in ascending order of sortField value and when set to &#39;desc&#39; these items are returned in descending order of sortField value.
         * @param {string} sortField Sets the field on which the sorting would be applied.
         */
        async listInteractionModelCatalogVersionsV1(catalogId : string, maxResults? : number, nextToken? : string, sortDirection? : string, sortField? : string) : Promise<v1.skill.interactionModel.version.ListCatalogEntityVersionsResponse> {
                const apiResponse: ApiResponse = await this.callListInteractionModelCatalogVersionsV1(catalogId, maxResults, nextToken, sortDirection, sortField);
                return apiResponse.body as v1.skill.interactionModel.version.ListCatalogEntityVersionsResponse;
        }
        /**
         * Create a new version of catalog entity for the given catalogId. 
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {v1.skill.interactionModel.version.VersionData} catalog 
         */
        async callCreateInteractionModelCatalogVersionV1(catalogId : string, catalog : v1.skill.interactionModel.version.VersionData) : Promise<ApiResponse> {
            const __operationId__ = 'callCreateInteractionModelCatalogVersionV1';
            // verify required parameter 'catalogId' is not null or undefined
            if (catalogId == null) {
                throw new Error(`Required parameter catalogId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'catalog' is not null or undefined
            if (catalog == null) {
                throw new Error(`Required parameter catalog was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('catalogId', catalogId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/catalogs/{catalogId}/versions";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(202, "Returns update status location link on success.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error e.g. the catalog definition is invalid.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The specified catalog does not exist.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, catalog, errorDefinitions);
        }
        
        /**
         * Create a new version of catalog entity for the given catalogId. 
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {v1.skill.interactionModel.version.VersionData} catalog 
         */
        async createInteractionModelCatalogVersionV1(catalogId : string, catalog : v1.skill.interactionModel.version.VersionData) : Promise<void> {
                await this.callCreateInteractionModelCatalogVersionV1(catalogId, catalog);
        }
        /**
         * Delete catalog version. 
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {string} version Version for interaction model.
         */
        async callDeleteInteractionModelCatalogVersionV1(catalogId : string, version : string) : Promise<ApiResponse> {
            const __operationId__ = 'callDeleteInteractionModelCatalogVersionV1';
            // verify required parameter 'catalogId' is not null or undefined
            if (catalogId == null) {
                throw new Error(`Required parameter catalogId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'version' is not null or undefined
            if (version == null) {
                throw new Error(`Required parameter version was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('catalogId', catalogId);
            pathParams.set('version', version);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/catalogs/{catalogId}/versions/{version}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "No Content; Confirms that version is successfully deleted.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "There is no catalog version for this catalogId.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("DELETE", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Delete catalog version. 
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {string} version Version for interaction model.
         */
        async deleteInteractionModelCatalogVersionV1(catalogId : string, version : string) : Promise<void> {
                await this.callDeleteInteractionModelCatalogVersionV1(catalogId, version);
        }
        /**
         * Get catalog version data of given catalog version. 
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {string} version Version for interaction model.
         */
        async callGetInteractionModelCatalogVersionV1(catalogId : string, version : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetInteractionModelCatalogVersionV1';
            // verify required parameter 'catalogId' is not null or undefined
            if (catalogId == null) {
                throw new Error(`Required parameter catalogId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'version' is not null or undefined
            if (version == null) {
                throw new Error(`Required parameter version was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('catalogId', catalogId);
            pathParams.set('version', version);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/catalogs/{catalogId}/versions/{version}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns the catalog version metadata for the given catalogId and version.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "There is no catalog defined for the catalogId.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get catalog version data of given catalog version. 
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {string} version Version for interaction model.
         */
        async getInteractionModelCatalogVersionV1(catalogId : string, version : string) : Promise<v1.skill.interactionModel.version.CatalogVersionData> {
                const apiResponse: ApiResponse = await this.callGetInteractionModelCatalogVersionV1(catalogId, version);
                return apiResponse.body as v1.skill.interactionModel.version.CatalogVersionData;
        }
        /**
         * Update description and vendorGuidance string for certain version of a catalog. 
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {string} version Version for interaction model.
         * @param {v1.skill.interactionModel.version.CatalogUpdate} catalogUpdate 
         */
        async callUpdateInteractionModelCatalogVersionV1(catalogId : string, version : string, catalogUpdate? : v1.skill.interactionModel.version.CatalogUpdate) : Promise<ApiResponse> {
            const __operationId__ = 'callUpdateInteractionModelCatalogVersionV1';
            // verify required parameter 'catalogId' is not null or undefined
            if (catalogId == null) {
                throw new Error(`Required parameter catalogId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'version' is not null or undefined
            if (version == null) {
                throw new Error(`Required parameter version was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('catalogId', catalogId);
            pathParams.set('version', version);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/catalogs/{catalogId}/versions/{version}/update";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "No Content; Confirms that version is successfully updated.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "There is no catalog defined for the catalogId");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, catalogUpdate, errorDefinitions);
        }
        
        /**
         * Update description and vendorGuidance string for certain version of a catalog. 
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {string} version Version for interaction model.
         * @param {v1.skill.interactionModel.version.CatalogUpdate} catalogUpdate 
         */
        async updateInteractionModelCatalogVersionV1(catalogId : string, version : string, catalogUpdate? : v1.skill.interactionModel.version.CatalogUpdate) : Promise<void> {
                await this.callUpdateInteractionModelCatalogVersionV1(catalogId, version, catalogUpdate);
        }
        /**
         * Get catalog values from the given catalogId & version. 
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {string} version Version for interaction model.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         */
        async callGetInteractionModelCatalogValuesV1(catalogId : string, version : string, maxResults? : number, nextToken? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetInteractionModelCatalogValuesV1';
            // verify required parameter 'catalogId' is not null or undefined
            if (catalogId == null) {
                throw new Error(`Required parameter catalogId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'version' is not null or undefined
            if (version == null) {
                throw new Error(`Required parameter version was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('catalogId', catalogId);
            pathParams.set('version', version);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/catalogs/{catalogId}/versions/{version}/values";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns list of catalog values for the given catalogId and version.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "There is no catalog defined for the catalogId");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get catalog values from the given catalogId & version. 
         * @param {string} catalogId Provides a unique identifier of the catalog.
         * @param {string} version Version for interaction model.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         */
        async getInteractionModelCatalogValuesV1(catalogId : string, version : string, maxResults? : number, nextToken? : string) : Promise<v1.skill.interactionModel.version.CatalogValues> {
                const apiResponse: ApiResponse = await this.callGetInteractionModelCatalogValuesV1(catalogId, version, maxResults, nextToken);
                return apiResponse.body as v1.skill.interactionModel.version.CatalogValues;
        }
        /**
         * List all catalogs for the vendor. 
         * @param {string} vendorId The vendor ID.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {string} sortDirection Sets the sorting direction of the result items. When set to &#39;asc&#39; these items are returned in ascending order of sortField value and when set to &#39;desc&#39; these items are returned in descending order of sortField value.
         */
        async callListInteractionModelCatalogsV1(vendorId : string, maxResults? : number, nextToken? : string, sortDirection? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callListInteractionModelCatalogsV1';
            // verify required parameter 'vendorId' is not null or undefined
            if (vendorId == null) {
                throw new Error(`Required parameter vendorId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            const vendorIdValues: any[] = Array.isArray(vendorId) ? vendorId : [vendorId];
            vendorIdValues.forEach(val => queryParams.push({ key: 'vendorId', value: val }));
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(sortDirection != null) {
                const sortDirectionValues: any[] = Array.isArray(sortDirection) ? sortDirection : [sortDirection];
                sortDirectionValues.forEach(val => queryParams.push({ key: 'sortDirection', value: val }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/catalogs";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns list of catalogs for the vendor.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "There is no catalog defined for the catalogId.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * List all catalogs for the vendor. 
         * @param {string} vendorId The vendor ID.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {string} sortDirection Sets the sorting direction of the result items. When set to &#39;asc&#39; these items are returned in ascending order of sortField value and when set to &#39;desc&#39; these items are returned in descending order of sortField value.
         */
        async listInteractionModelCatalogsV1(vendorId : string, maxResults? : number, nextToken? : string, sortDirection? : string) : Promise<v1.skill.interactionModel.catalog.ListCatalogResponse> {
                const apiResponse: ApiResponse = await this.callListInteractionModelCatalogsV1(vendorId, maxResults, nextToken, sortDirection);
                return apiResponse.body as v1.skill.interactionModel.catalog.ListCatalogResponse;
        }
        /**
         * Create a new version of catalog within the given catalogId. 
         * @param {v1.skill.interactionModel.catalog.DefinitionData} catalog 
         */
        async callCreateInteractionModelCatalogV1(catalog : v1.skill.interactionModel.catalog.DefinitionData) : Promise<ApiResponse> {
            const __operationId__ = 'callCreateInteractionModelCatalogV1';
            // verify required parameter 'catalog' is not null or undefined
            if (catalog == null) {
                throw new Error(`Required parameter catalog was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/catalogs";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns the generated catalogId.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error e.g. the catalog definition is invalid.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(412, "Precondition failed.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, catalog, errorDefinitions);
        }
        
        /**
         * Create a new version of catalog within the given catalogId. 
         * @param {v1.skill.interactionModel.catalog.DefinitionData} catalog 
         */
        async createInteractionModelCatalogV1(catalog : v1.skill.interactionModel.catalog.DefinitionData) : Promise<v1.skill.interactionModel.catalog.CatalogResponse> {
                const apiResponse: ApiResponse = await this.callCreateInteractionModelCatalogV1(catalog);
                return apiResponse.body as v1.skill.interactionModel.catalog.CatalogResponse;
        }
        /**
         * Retrieve a list of jobs associated with the vendor.
         * @param {string} vendorId The vendor ID.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         */
        async callListJobDefinitionsForInteractionModelV1(vendorId : string, maxResults? : number, nextToken? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callListJobDefinitionsForInteractionModelV1';
            // verify required parameter 'vendorId' is not null or undefined
            if (vendorId == null) {
                throw new Error(`Required parameter vendorId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            const vendorIdValues: any[] = Array.isArray(vendorId) ? vendorId : [vendorId];
            vendorIdValues.forEach(val => queryParams.push({ key: 'vendorId', value: val }));
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/jobs";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "List of all jobs associated with the vendor.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Retrieve a list of jobs associated with the vendor.
         * @param {string} vendorId The vendor ID.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         */
        async listJobDefinitionsForInteractionModelV1(vendorId : string, maxResults? : number, nextToken? : string) : Promise<v1.skill.interactionModel.jobs.ListJobDefinitionsResponse> {
                const apiResponse: ApiResponse = await this.callListJobDefinitionsForInteractionModelV1(vendorId, maxResults, nextToken);
                return apiResponse.body as v1.skill.interactionModel.jobs.ListJobDefinitionsResponse;
        }
        /**
         * Delete the job definition for a given jobId.
         * @param {string} jobId The identifier for dynamic jobs.
         */
        async callDeleteJobDefinitionForInteractionModelV1(jobId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callDeleteJobDefinitionForInteractionModelV1';
            // verify required parameter 'jobId' is not null or undefined
            if (jobId == null) {
                throw new Error(`Required parameter jobId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('jobId', jobId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/jobs/{jobId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "No content, confirms the resource is updated.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("DELETE", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Delete the job definition for a given jobId.
         * @param {string} jobId The identifier for dynamic jobs.
         */
        async deleteJobDefinitionForInteractionModelV1(jobId : string) : Promise<void> {
                await this.callDeleteJobDefinitionForInteractionModelV1(jobId);
        }
        /**
         * Cancel the next execution for the given job.
         * @param {string} jobId The identifier for dynamic jobs.
         * @param {string} executionId The identifier for dynamic job executions. Currently only allowed for scheduled executions.
         */
        async callCancelNextJobExecutionForInteractionModelV1(jobId : string, executionId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callCancelNextJobExecutionForInteractionModelV1';
            // verify required parameter 'jobId' is not null or undefined
            if (jobId == null) {
                throw new Error(`Required parameter jobId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'executionId' is not null or undefined
            if (executionId == null) {
                throw new Error(`Required parameter executionId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('jobId', jobId);
            pathParams.set('executionId', executionId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/jobs/{jobId}/executions/{executionId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "No Content; Confirms that the next execution is canceled.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("DELETE", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Cancel the next execution for the given job.
         * @param {string} jobId The identifier for dynamic jobs.
         * @param {string} executionId The identifier for dynamic job executions. Currently only allowed for scheduled executions.
         */
        async cancelNextJobExecutionForInteractionModelV1(jobId : string, executionId : string) : Promise<void> {
                await this.callCancelNextJobExecutionForInteractionModelV1(jobId, executionId);
        }
        /**
         * List the execution history associated with the job definition, with default sortField to be the executions' timestamp.
         * @param {string} jobId The identifier for dynamic jobs.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {string} sortDirection Sets the sorting direction of the result items. When set to &#39;asc&#39; these items are returned in ascending order of sortField value and when set to &#39;desc&#39; these items are returned in descending order of sortField value.
         */
        async callListJobExecutionsForInteractionModelV1(jobId : string, maxResults? : number, nextToken? : string, sortDirection? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callListJobExecutionsForInteractionModelV1';
            // verify required parameter 'jobId' is not null or undefined
            if (jobId == null) {
                throw new Error(`Required parameter jobId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(sortDirection != null) {
                const sortDirectionValues: any[] = Array.isArray(sortDirection) ? sortDirection : [sortDirection];
                sortDirectionValues.forEach(val => queryParams.push({ key: 'sortDirection', value: val }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('jobId', jobId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/jobs/{jobId}/executions";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Retrun list of executions associated with the job definition.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * List the execution history associated with the job definition, with default sortField to be the executions' timestamp.
         * @param {string} jobId The identifier for dynamic jobs.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {string} sortDirection Sets the sorting direction of the result items. When set to &#39;asc&#39; these items are returned in ascending order of sortField value and when set to &#39;desc&#39; these items are returned in descending order of sortField value.
         */
        async listJobExecutionsForInteractionModelV1(jobId : string, maxResults? : number, nextToken? : string, sortDirection? : string) : Promise<v1.skill.interactionModel.jobs.GetExecutionsResponse> {
                const apiResponse: ApiResponse = await this.callListJobExecutionsForInteractionModelV1(jobId, maxResults, nextToken, sortDirection);
                return apiResponse.body as v1.skill.interactionModel.jobs.GetExecutionsResponse;
        }
        /**
         * Get the job definition for a given jobId. 
         * @param {string} jobId The identifier for dynamic jobs.
         */
        async callGetJobDefinitionForInteractionModelV1(jobId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetJobDefinitionForInteractionModelV1';
            // verify required parameter 'jobId' is not null or undefined
            if (jobId == null) {
                throw new Error(`Required parameter jobId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('jobId', jobId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/jobs/{jobId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "The job definition for a given jobId.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get the job definition for a given jobId. 
         * @param {string} jobId The identifier for dynamic jobs.
         */
        async getJobDefinitionForInteractionModelV1(jobId : string) : Promise<v1.skill.interactionModel.jobs.JobDefinition> {
                const apiResponse: ApiResponse = await this.callGetJobDefinitionForInteractionModelV1(jobId);
                return apiResponse.body as v1.skill.interactionModel.jobs.JobDefinition;
        }
        /**
         * Update the JobStatus to Enable or Disable a job.
         * @param {string} jobId The identifier for dynamic jobs.
         * @param {v1.skill.interactionModel.jobs.UpdateJobStatusRequest} updateJobStatusRequest Request to update Job Definition status.
         */
        async callSetJobStatusForInteractionModelV1(jobId : string, updateJobStatusRequest : v1.skill.interactionModel.jobs.UpdateJobStatusRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callSetJobStatusForInteractionModelV1';
            // verify required parameter 'jobId' is not null or undefined
            if (jobId == null) {
                throw new Error(`Required parameter jobId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'updateJobStatusRequest' is not null or undefined
            if (updateJobStatusRequest == null) {
                throw new Error(`Required parameter updateJobStatusRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('jobId', jobId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/jobs/{jobId}/status";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "No content; Confirms that the fields are updated.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("PUT", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, updateJobStatusRequest, errorDefinitions);
        }
        
        /**
         * Update the JobStatus to Enable or Disable a job.
         * @param {string} jobId The identifier for dynamic jobs.
         * @param {v1.skill.interactionModel.jobs.UpdateJobStatusRequest} updateJobStatusRequest Request to update Job Definition status.
         */
        async setJobStatusForInteractionModelV1(jobId : string, updateJobStatusRequest : v1.skill.interactionModel.jobs.UpdateJobStatusRequest) : Promise<void> {
                await this.callSetJobStatusForInteractionModelV1(jobId, updateJobStatusRequest);
        }
        /**
         * Creates a new Job Definition from the Job Definition request provided. This can be either a CatalogAutoRefresh, which supports time-based configurations for catalogs, or a ReferencedResourceVersionUpdate, which is used for slotTypes and Interaction models to be automatically updated on the dynamic update of their referenced catalog. 
         * @param {v1.skill.interactionModel.jobs.CreateJobDefinitionRequest} createJobDefinitionRequest Request to create a new Job Definition.
         */
        async callCreateJobDefinitionForInteractionModelV1(createJobDefinitionRequest : v1.skill.interactionModel.jobs.CreateJobDefinitionRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callCreateJobDefinitionForInteractionModelV1';
            // verify required parameter 'createJobDefinitionRequest' is not null or undefined
            if (createJobDefinitionRequest == null) {
                throw new Error(`Required parameter createJobDefinitionRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/jobs";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(201, "Returns the generated jobId.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, createJobDefinitionRequest, errorDefinitions);
        }
        
        /**
         * Creates a new Job Definition from the Job Definition request provided. This can be either a CatalogAutoRefresh, which supports time-based configurations for catalogs, or a ReferencedResourceVersionUpdate, which is used for slotTypes and Interaction models to be automatically updated on the dynamic update of their referenced catalog. 
         * @param {v1.skill.interactionModel.jobs.CreateJobDefinitionRequest} createJobDefinitionRequest Request to create a new Job Definition.
         */
        async createJobDefinitionForInteractionModelV1(createJobDefinitionRequest : v1.skill.interactionModel.jobs.CreateJobDefinitionRequest) : Promise<v1.skill.interactionModel.jobs.CreateJobDefinitionResponse> {
                const apiResponse: ApiResponse = await this.callCreateJobDefinitionForInteractionModelV1(createJobDefinitionRequest);
                return apiResponse.body as v1.skill.interactionModel.jobs.CreateJobDefinitionResponse;
        }
        /**
         * List all slot types for the vendor. 
         * @param {string} vendorId The vendor ID.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {string} sortDirection Sets the sorting direction of the result items. When set to &#39;asc&#39; these items are returned in ascending order of sortField value and when set to &#39;desc&#39; these items are returned in descending order of sortField value.
         */
        async callListInteractionModelSlotTypesV1(vendorId : string, maxResults? : number, nextToken? : string, sortDirection? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callListInteractionModelSlotTypesV1';
            // verify required parameter 'vendorId' is not null or undefined
            if (vendorId == null) {
                throw new Error(`Required parameter vendorId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            const vendorIdValues: any[] = Array.isArray(vendorId) ? vendorId : [vendorId];
            vendorIdValues.forEach(val => queryParams.push({ key: 'vendorId', value: val }));
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(sortDirection != null) {
                const sortDirectionValues: any[] = Array.isArray(sortDirection) ? sortDirection : [sortDirection];
                sortDirectionValues.forEach(val => queryParams.push({ key: 'sortDirection', value: val }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/slotTypes";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns list of slot types for the vendor.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * List all slot types for the vendor. 
         * @param {string} vendorId The vendor ID.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {string} sortDirection Sets the sorting direction of the result items. When set to &#39;asc&#39; these items are returned in ascending order of sortField value and when set to &#39;desc&#39; these items are returned in descending order of sortField value.
         */
        async listInteractionModelSlotTypesV1(vendorId : string, maxResults? : number, nextToken? : string, sortDirection? : string) : Promise<v1.skill.interactionModel.type.ListSlotTypeResponse> {
                const apiResponse: ApiResponse = await this.callListInteractionModelSlotTypesV1(vendorId, maxResults, nextToken, sortDirection);
                return apiResponse.body as v1.skill.interactionModel.type.ListSlotTypeResponse;
        }
        /**
         * Create a new version of slot type within the given slotTypeId. 
         * @param {v1.skill.interactionModel.type.DefinitionData} slotType 
         */
        async callCreateInteractionModelSlotTypeV1(slotType : v1.skill.interactionModel.type.DefinitionData) : Promise<ApiResponse> {
            const __operationId__ = 'callCreateInteractionModelSlotTypeV1';
            // verify required parameter 'slotType' is not null or undefined
            if (slotType == null) {
                throw new Error(`Required parameter slotType was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/slotTypes";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns the generated slotTypeId.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error e.g. the slot type definition is invalid.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, slotType, errorDefinitions);
        }
        
        /**
         * Create a new version of slot type within the given slotTypeId. 
         * @param {v1.skill.interactionModel.type.DefinitionData} slotType 
         */
        async createInteractionModelSlotTypeV1(slotType : v1.skill.interactionModel.type.DefinitionData) : Promise<v1.skill.interactionModel.type.SlotTypeResponse> {
                const apiResponse: ApiResponse = await this.callCreateInteractionModelSlotTypeV1(slotType);
                return apiResponse.body as v1.skill.interactionModel.type.SlotTypeResponse;
        }
        /**
         * Delete the slot type. 
         * @param {string} slotTypeId The identifier for a slot type.
         */
        async callDeleteInteractionModelSlotTypeV1(slotTypeId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callDeleteInteractionModelSlotTypeV1';
            // verify required parameter 'slotTypeId' is not null or undefined
            if (slotTypeId == null) {
                throw new Error(`Required parameter slotTypeId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('slotTypeId', slotTypeId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/slotTypes/{slotTypeId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "No content; just confirm the slot type is deleted.");
            errorDefinitions.set(400, "The slot type cannot be deleted from reasons due to in-use by other entities.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "There is no slot type defined for the slotTypeId.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("DELETE", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Delete the slot type. 
         * @param {string} slotTypeId The identifier for a slot type.
         */
        async deleteInteractionModelSlotTypeV1(slotTypeId : string) : Promise<void> {
                await this.callDeleteInteractionModelSlotTypeV1(slotTypeId);
        }
        /**
         * Get the slot type definition. 
         * @param {string} slotTypeId The identifier for a slot type.
         */
        async callGetInteractionModelSlotTypeDefinitionV1(slotTypeId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetInteractionModelSlotTypeDefinitionV1';
            // verify required parameter 'slotTypeId' is not null or undefined
            if (slotTypeId == null) {
                throw new Error(`Required parameter slotTypeId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('slotTypeId', slotTypeId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/slotTypes/{slotTypeId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "The slot type definition.");
            errorDefinitions.set(400, "The slot type cannot be retrieved due to errors listed.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "There is no slot type defined for the slotTypeId.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get the slot type definition. 
         * @param {string} slotTypeId The identifier for a slot type.
         */
        async getInteractionModelSlotTypeDefinitionV1(slotTypeId : string) : Promise<v1.skill.interactionModel.type.SlotTypeDefinitionOutput> {
                const apiResponse: ApiResponse = await this.callGetInteractionModelSlotTypeDefinitionV1(slotTypeId);
                return apiResponse.body as v1.skill.interactionModel.type.SlotTypeDefinitionOutput;
        }
        /**
         * Update description and vendorGuidance string for certain version of a slot type. 
         * @param {string} slotTypeId The identifier for a slot type.
         * @param {v1.skill.interactionModel.type.UpdateRequest} updateRequest 
         */
        async callUpdateInteractionModelSlotTypeV1(slotTypeId : string, updateRequest : v1.skill.interactionModel.type.UpdateRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callUpdateInteractionModelSlotTypeV1';
            // verify required parameter 'slotTypeId' is not null or undefined
            if (slotTypeId == null) {
                throw new Error(`Required parameter slotTypeId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'updateRequest' is not null or undefined
            if (updateRequest == null) {
                throw new Error(`Required parameter updateRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('slotTypeId', slotTypeId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/slotTypes/{slotTypeId}/update";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "No content, indicates the fields were successfully updated.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "There is no slot type defined for the slotTypeId.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, updateRequest, errorDefinitions);
        }
        
        /**
         * Update description and vendorGuidance string for certain version of a slot type. 
         * @param {string} slotTypeId The identifier for a slot type.
         * @param {v1.skill.interactionModel.type.UpdateRequest} updateRequest 
         */
        async updateInteractionModelSlotTypeV1(slotTypeId : string, updateRequest : v1.skill.interactionModel.type.UpdateRequest) : Promise<void> {
                await this.callUpdateInteractionModelSlotTypeV1(slotTypeId, updateRequest);
        }
        /**
         * Get the status of slot type resource and its sub-resources for a given slotTypeId. 
         * @param {string} slotTypeId The identifier for a slot type.
         * @param {string} updateRequestId The identifier for slotType version creation process
         */
        async callGetInteractionModelSlotTypeBuildStatusV1(slotTypeId : string, updateRequestId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetInteractionModelSlotTypeBuildStatusV1';
            // verify required parameter 'slotTypeId' is not null or undefined
            if (slotTypeId == null) {
                throw new Error(`Required parameter slotTypeId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'updateRequestId' is not null or undefined
            if (updateRequestId == null) {
                throw new Error(`Required parameter updateRequestId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('slotTypeId', slotTypeId);
            pathParams.set('updateRequestId', updateRequestId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/slotTypes/{slotTypeId}/updateRequest/{updateRequestId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns the build status and error codes for the given slotTypeId.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "There is no slot type defined for the slotTypeId.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get the status of slot type resource and its sub-resources for a given slotTypeId. 
         * @param {string} slotTypeId The identifier for a slot type.
         * @param {string} updateRequestId The identifier for slotType version creation process
         */
        async getInteractionModelSlotTypeBuildStatusV1(slotTypeId : string, updateRequestId : string) : Promise<v1.skill.interactionModel.type.SlotTypeStatus> {
                const apiResponse: ApiResponse = await this.callGetInteractionModelSlotTypeBuildStatusV1(slotTypeId, updateRequestId);
                return apiResponse.body as v1.skill.interactionModel.type.SlotTypeStatus;
        }
        /**
         * List all slot type versions for the slot type id. 
         * @param {string} slotTypeId The identifier for a slot type.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {string} sortDirection Sets the sorting direction of the result items. When set to &#39;asc&#39; these items are returned in ascending order of sortField value and when set to &#39;desc&#39; these items are returned in descending order of sortField value.
         */
        async callListInteractionModelSlotTypeVersionsV1(slotTypeId : string, maxResults? : number, nextToken? : string, sortDirection? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callListInteractionModelSlotTypeVersionsV1';
            // verify required parameter 'slotTypeId' is not null or undefined
            if (slotTypeId == null) {
                throw new Error(`Required parameter slotTypeId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(sortDirection != null) {
                const sortDirectionValues: any[] = Array.isArray(sortDirection) ? sortDirection : [sortDirection];
                sortDirectionValues.forEach(val => queryParams.push({ key: 'sortDirection', value: val }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('slotTypeId', slotTypeId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/slotTypes/{slotTypeId}/versions";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns list of slot type version for the slot type id.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * List all slot type versions for the slot type id. 
         * @param {string} slotTypeId The identifier for a slot type.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {string} sortDirection Sets the sorting direction of the result items. When set to &#39;asc&#39; these items are returned in ascending order of sortField value and when set to &#39;desc&#39; these items are returned in descending order of sortField value.
         */
        async listInteractionModelSlotTypeVersionsV1(slotTypeId : string, maxResults? : number, nextToken? : string, sortDirection? : string) : Promise<v1.skill.interactionModel.typeVersion.ListSlotTypeVersionResponse> {
                const apiResponse: ApiResponse = await this.callListInteractionModelSlotTypeVersionsV1(slotTypeId, maxResults, nextToken, sortDirection);
                return apiResponse.body as v1.skill.interactionModel.typeVersion.ListSlotTypeVersionResponse;
        }
        /**
         * Create a new version of slot type entity for the given slotTypeId. 
         * @param {string} slotTypeId The identifier for a slot type.
         * @param {v1.skill.interactionModel.typeVersion.VersionData} slotType 
         */
        async callCreateInteractionModelSlotTypeVersionV1(slotTypeId : string, slotType : v1.skill.interactionModel.typeVersion.VersionData) : Promise<ApiResponse> {
            const __operationId__ = 'callCreateInteractionModelSlotTypeVersionV1';
            // verify required parameter 'slotTypeId' is not null or undefined
            if (slotTypeId == null) {
                throw new Error(`Required parameter slotTypeId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'slotType' is not null or undefined
            if (slotType == null) {
                throw new Error(`Required parameter slotType was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('slotTypeId', slotTypeId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/slotTypes/{slotTypeId}/versions";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(202, "Returns update status location link on success.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error e.g. the slot type definition is invalid.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The specified slot type does not exist.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, slotType, errorDefinitions);
        }
        
        /**
         * Create a new version of slot type entity for the given slotTypeId. 
         * @param {string} slotTypeId The identifier for a slot type.
         * @param {v1.skill.interactionModel.typeVersion.VersionData} slotType 
         */
        async createInteractionModelSlotTypeVersionV1(slotTypeId : string, slotType : v1.skill.interactionModel.typeVersion.VersionData) : Promise<void> {
                await this.callCreateInteractionModelSlotTypeVersionV1(slotTypeId, slotType);
        }
        /**
         * Delete slot type version. 
         * @param {string} slotTypeId The identifier for a slot type.
         * @param {string} version Version for interaction model.
         */
        async callDeleteInteractionModelSlotTypeVersionV1(slotTypeId : string, version : string) : Promise<ApiResponse> {
            const __operationId__ = 'callDeleteInteractionModelSlotTypeVersionV1';
            // verify required parameter 'slotTypeId' is not null or undefined
            if (slotTypeId == null) {
                throw new Error(`Required parameter slotTypeId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'version' is not null or undefined
            if (version == null) {
                throw new Error(`Required parameter version was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('slotTypeId', slotTypeId);
            pathParams.set('version', version);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/slotTypes/{slotTypeId}/versions/{version}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "No Content; Confirms that version is successfully deleted.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "There is no slot type version for this slotTypeId.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("DELETE", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Delete slot type version. 
         * @param {string} slotTypeId The identifier for a slot type.
         * @param {string} version Version for interaction model.
         */
        async deleteInteractionModelSlotTypeVersionV1(slotTypeId : string, version : string) : Promise<void> {
                await this.callDeleteInteractionModelSlotTypeVersionV1(slotTypeId, version);
        }
        /**
         * Get slot type version data of given slot type version. 
         * @param {string} slotTypeId The identifier for a slot type.
         * @param {string} version Version for interaction model.
         */
        async callGetInteractionModelSlotTypeVersionV1(slotTypeId : string, version : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetInteractionModelSlotTypeVersionV1';
            // verify required parameter 'slotTypeId' is not null or undefined
            if (slotTypeId == null) {
                throw new Error(`Required parameter slotTypeId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'version' is not null or undefined
            if (version == null) {
                throw new Error(`Required parameter version was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('slotTypeId', slotTypeId);
            pathParams.set('version', version);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/slotTypes/{slotTypeId}/versions/{version}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns the slot type version metadata for the given slotTypeId and version.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "There is no slot type defined for the slotTypeId.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get slot type version data of given slot type version. 
         * @param {string} slotTypeId The identifier for a slot type.
         * @param {string} version Version for interaction model.
         */
        async getInteractionModelSlotTypeVersionV1(slotTypeId : string, version : string) : Promise<v1.skill.interactionModel.typeVersion.SlotTypeVersionData> {
                const apiResponse: ApiResponse = await this.callGetInteractionModelSlotTypeVersionV1(slotTypeId, version);
                return apiResponse.body as v1.skill.interactionModel.typeVersion.SlotTypeVersionData;
        }
        /**
         * Update description and vendorGuidance string for certain version of a slot type. 
         * @param {string} slotTypeId The identifier for a slot type.
         * @param {string} version Version for interaction model.
         * @param {v1.skill.interactionModel.typeVersion.SlotTypeUpdate} slotTypeUpdate 
         */
        async callUpdateInteractionModelSlotTypeVersionV1(slotTypeId : string, version : string, slotTypeUpdate : v1.skill.interactionModel.typeVersion.SlotTypeUpdate) : Promise<ApiResponse> {
            const __operationId__ = 'callUpdateInteractionModelSlotTypeVersionV1';
            // verify required parameter 'slotTypeId' is not null or undefined
            if (slotTypeId == null) {
                throw new Error(`Required parameter slotTypeId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'version' is not null or undefined
            if (version == null) {
                throw new Error(`Required parameter version was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'slotTypeUpdate' is not null or undefined
            if (slotTypeUpdate == null) {
                throw new Error(`Required parameter slotTypeUpdate was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('slotTypeId', slotTypeId);
            pathParams.set('version', version);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/api/custom/interactionModel/slotTypes/{slotTypeId}/versions/{version}/update";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "No Content; Confirms that version is successfully updated.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "There is no slot type defined for the slotTypeId.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, slotTypeUpdate, errorDefinitions);
        }
        
        /**
         * Update description and vendorGuidance string for certain version of a slot type. 
         * @param {string} slotTypeId The identifier for a slot type.
         * @param {string} version Version for interaction model.
         * @param {v1.skill.interactionModel.typeVersion.SlotTypeUpdate} slotTypeUpdate 
         */
        async updateInteractionModelSlotTypeVersionV1(slotTypeId : string, version : string, slotTypeUpdate : v1.skill.interactionModel.typeVersion.SlotTypeUpdate) : Promise<void> {
                await this.callUpdateInteractionModelSlotTypeVersionV1(slotTypeId, version, slotTypeUpdate);
        }
        /**
         * Get status for given exportId 
         * @param {string} exportId The Export ID.
         */
        async callGetStatusOfExportRequestV1(exportId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetStatusOfExportRequestV1';
            // verify required parameter 'exportId' is not null or undefined
            if (exportId == null) {
                throw new Error(`Required parameter exportId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('exportId', exportId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/exports/{exportId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "OK.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get status for given exportId 
         * @param {string} exportId The Export ID.
         */
        async getStatusOfExportRequestV1(exportId : string) : Promise<v1.skill.ExportResponse> {
                const apiResponse: ApiResponse = await this.callGetStatusOfExportRequestV1(exportId);
                return apiResponse.body as v1.skill.ExportResponse;
        }
        /**
         * Get the list of skills for the vendor.
         * @param {string} vendorId The vendor ID.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {Array<string>} skillId The list of skillIds that you wish to get the summary for. A maximum of 10 skillIds can be specified to get the skill summary in single listSkills call. Please note that this parameter must not be used with &#39;nextToken&#39; or/and &#39;maxResults&#39; parameter.
         */
        async callListSkillsForVendorV1(vendorId : string, nextToken? : string, maxResults? : number, skillId? : Array<string>) : Promise<ApiResponse> {
            const __operationId__ = 'callListSkillsForVendorV1';
            // verify required parameter 'vendorId' is not null or undefined
            if (vendorId == null) {
                throw new Error(`Required parameter vendorId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            const vendorIdValues: any[] = Array.isArray(vendorId) ? vendorId : [vendorId];
            vendorIdValues.forEach(val => queryParams.push({ key: 'vendorId', value: val }));
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }
            if(skillId != null) {
                const skillIdValues: any[] = Array.isArray(skillId) ? skillId : [skillId];
                skillIdValues.forEach(val => queryParams.push({ key: 'skillId', value: val!.toString() }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns list of skills for the vendor.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get the list of skills for the vendor.
         * @param {string} vendorId The vendor ID.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {Array<string>} skillId The list of skillIds that you wish to get the summary for. A maximum of 10 skillIds can be specified to get the skill summary in single listSkills call. Please note that this parameter must not be used with &#39;nextToken&#39; or/and &#39;maxResults&#39; parameter.
         */
        async listSkillsForVendorV1(vendorId : string, nextToken? : string, maxResults? : number, skillId? : Array<string>) : Promise<v1.skill.ListSkillResponse> {
                const apiResponse: ApiResponse = await this.callListSkillsForVendorV1(vendorId, nextToken, maxResults, skillId);
                return apiResponse.body as v1.skill.ListSkillResponse;
        }
        /**
         * Get status for given importId. 
         * @param {string} importId The Import ID.
         */
        async callGetImportStatusV1(importId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetImportStatusV1';
            // verify required parameter 'importId' is not null or undefined
            if (importId == null) {
                throw new Error(`Required parameter importId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('importId', importId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/imports/{importId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "OK.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get status for given importId. 
         * @param {string} importId The Import ID.
         */
        async getImportStatusV1(importId : string) : Promise<v1.skill.ImportResponse> {
                const apiResponse: ApiResponse = await this.callGetImportStatusV1(importId);
                return apiResponse.body as v1.skill.ImportResponse;
        }
        /**
         * Creates a new import for a skill. 
         * @param {v1.skill.CreateSkillWithPackageRequest} createSkillWithPackageRequest Defines the request body for createPackage API.
         */
        async callCreateSkillPackageV1(createSkillWithPackageRequest : v1.skill.CreateSkillWithPackageRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callCreateSkillPackageV1';
            // verify required parameter 'createSkillWithPackageRequest' is not null or undefined
            if (createSkillWithPackageRequest == null) {
                throw new Error(`Required parameter createSkillWithPackageRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/imports";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(202, "Accepted.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(409, "The request could not be completed due to a conflict with the current state of the target resource.");
            errorDefinitions.set(413, "Payload too large.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, createSkillWithPackageRequest, errorDefinitions);
        }
        
        /**
         * Creates a new import for a skill. 
         * @param {v1.skill.CreateSkillWithPackageRequest} createSkillWithPackageRequest Defines the request body for createPackage API.
         */
        async createSkillPackageV1(createSkillWithPackageRequest : v1.skill.CreateSkillWithPackageRequest) : Promise<void> {
                await this.callCreateSkillPackageV1(createSkillWithPackageRequest);
        }
        /**
         * Creates a new skill for given vendorId.
         * @param {v1.skill.CreateSkillRequest} createSkillRequest Defines the request body for createSkill API.
         */
        async callCreateSkillForVendorV1(createSkillRequest : v1.skill.CreateSkillRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callCreateSkillForVendorV1';
            // verify required parameter 'createSkillRequest' is not null or undefined
            if (createSkillRequest == null) {
                throw new Error(`Required parameter createSkillRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(202, "Accepted; Returns a URL to track the status in &#39;Location&#39; header.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, createSkillRequest, errorDefinitions);
        }
        
        /**
         * Creates a new skill for given vendorId.
         * @param {v1.skill.CreateSkillRequest} createSkillRequest Defines the request body for createSkill API.
         */
        async createSkillForVendorV1(createSkillRequest : v1.skill.CreateSkillRequest) : Promise<v1.skill.CreateSkillResponse> {
                const apiResponse: ApiResponse = await this.callCreateSkillForVendorV1(createSkillRequest);
                return apiResponse.body as v1.skill.CreateSkillResponse;
        }
        /**
         * GetResourceSchema API provides schema for skill related resources. The schema returned by this API will be specific to vendor because it considers public beta features allowed for the vendor.
         * @param {string} resource Name of the ASK resource for which schema is requested.
         * @param {string} vendorId The vendor ID.
         * @param {string} operation This parameter is required when resource is manifest because skill manifest schema differs based on operation. For example, submit for certification schema has more validations than create skill schema.
         */
        async callGetResourceSchemaV1(resource : string, vendorId : string, operation? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetResourceSchemaV1';
            // verify required parameter 'resource' is not null or undefined
            if (resource == null) {
                throw new Error(`Required parameter resource was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'vendorId' is not null or undefined
            if (vendorId == null) {
                throw new Error(`Required parameter vendorId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            const vendorIdValues: any[] = Array.isArray(vendorId) ? vendorId : [vendorId];
            vendorIdValues.forEach(val => queryParams.push({ key: 'vendorId', value: val }));
            if(operation != null) {
                const operationValues: any[] = Array.isArray(operation) ? operation : [operation];
                operationValues.forEach(val => queryParams.push({ key: 'operation', value: val }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('resource', resource);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/resourceSchema/{resource}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns a S3 presigned URL to location of schema");
            errorDefinitions.set(400, "Invalid request");
            errorDefinitions.set(401, "Unauthorized");
            errorDefinitions.set(403, "Forbidden");
            errorDefinitions.set(429, "Too Many Requests");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * GetResourceSchema API provides schema for skill related resources. The schema returned by this API will be specific to vendor because it considers public beta features allowed for the vendor.
         * @param {string} resource Name of the ASK resource for which schema is requested.
         * @param {string} vendorId The vendor ID.
         * @param {string} operation This parameter is required when resource is manifest because skill manifest schema differs based on operation. For example, submit for certification schema has more validations than create skill schema.
         */
        async getResourceSchemaV1(resource : string, vendorId : string, operation? : string) : Promise<v1.skill.resourceSchema.GetResourceSchemaResponse> {
                const apiResponse: ApiResponse = await this.callGetResourceSchemaV1(resource, vendorId, operation);
                return apiResponse.body as v1.skill.resourceSchema.GetResourceSchemaResponse;
        }
        /**
         * Get Alexa hosted skill's metadata
         * @param {string} skillId The skill ID.
         */
        async callGetAlexaHostedSkillMetadataV1(skillId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetAlexaHostedSkillMetadataV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/alexaHosted";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "response contains the Alexa hosted skill&#39;s metadata");
            errorDefinitions.set(400, "Server cannot process the request due to a client error e.g. Authorization Url is invalid");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get Alexa hosted skill's metadata
         * @param {string} skillId The skill ID.
         */
        async getAlexaHostedSkillMetadataV1(skillId : string) : Promise<v1.skill.AlexaHosted.HostedSkillMetadata> {
                const apiResponse: ApiResponse = await this.callGetAlexaHostedSkillMetadataV1(skillId);
                return apiResponse.body as v1.skill.AlexaHosted.HostedSkillMetadata;
        }
        /**
         * Generates hosted skill repository credentials to access the hosted skill repository.
         * @param {string} skillId The skill ID.
         * @param {v1.skill.AlexaHosted.HostedSkillRepositoryCredentialsRequest} hostedSkillRepositoryCredentialsRequest defines the request body for hosted skill repository credentials
         */
        async callGenerateCredentialsForAlexaHostedSkillV1(skillId : string, hostedSkillRepositoryCredentialsRequest : v1.skill.AlexaHosted.HostedSkillRepositoryCredentialsRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callGenerateCredentialsForAlexaHostedSkillV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'hostedSkillRepositoryCredentialsRequest' is not null or undefined
            if (hostedSkillRepositoryCredentialsRequest == null) {
                throw new Error(`Required parameter hostedSkillRepositoryCredentialsRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/alexaHosted/repository/credentials/generate";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Response contains the hosted skill repository credentials");
            errorDefinitions.set(400, "Server cannot process the request due to a client error e.g. Authorization Url is invalid");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, hostedSkillRepositoryCredentialsRequest, errorDefinitions);
        }
        
        /**
         * Generates hosted skill repository credentials to access the hosted skill repository.
         * @param {string} skillId The skill ID.
         * @param {v1.skill.AlexaHosted.HostedSkillRepositoryCredentialsRequest} hostedSkillRepositoryCredentialsRequest defines the request body for hosted skill repository credentials
         */
        async generateCredentialsForAlexaHostedSkillV1(skillId : string, hostedSkillRepositoryCredentialsRequest : v1.skill.AlexaHosted.HostedSkillRepositoryCredentialsRequest) : Promise<v1.skill.AlexaHosted.HostedSkillRepositoryCredentialsList> {
                const apiResponse: ApiResponse = await this.callGenerateCredentialsForAlexaHostedSkillV1(skillId, hostedSkillRepositoryCredentialsRequest);
                return apiResponse.body as v1.skill.AlexaHosted.HostedSkillRepositoryCredentialsList;
        }
        /**
         * 
         * @param {string} skillId The skill ID.
         * @param {string} annotationSetId Identifier of the ASR annotation set.
         * @param {string} accept - &#x60;application/json&#x60;: indicate to download annotation set contents in JSON format - &#x60;text/csv&#x60;: indicate to download annotation set contents in CSV format 
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. Defaults to 1000. If more results are present, the response will contain a paginationContext. 
         */
        async callGetAnnotationsForASRAnnotationSetV1(skillId : string, annotationSetId : string, accept : string, nextToken? : string, maxResults? : number) : Promise<ApiResponse> {
            const __operationId__ = 'callGetAnnotationsForASRAnnotationSetV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'annotationSetId' is not null or undefined
            if (annotationSetId == null) {
                throw new Error(`Required parameter annotationSetId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'accept' is not null or undefined
            if (accept == null) {
                throw new Error(`Required parameter accept was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });
            headerParams.push({ key : 'Accept', value : accept });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('annotationSetId', annotationSetId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/asrAnnotationSets/{annotationSetId}/annotations";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "The annotation set contents payload in specified format.  This API also supports pagination for annotation set contents requested in  &#x60;application/json&#x60; content type. Paginaiton for requested content  type &#x60;text/csv&#x60; is not supported. In this case, the nextToken and  maxResults query parameters would be ignored even if they are  specified as query parameters. ");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(503, "Service Unavailable.");
            errorDefinitions.set(0, "Internal Server Error.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * 
         * @param {string} skillId The skill ID.
         * @param {string} annotationSetId Identifier of the ASR annotation set.
         * @param {string} accept - &#x60;application/json&#x60;: indicate to download annotation set contents in JSON format - &#x60;text/csv&#x60;: indicate to download annotation set contents in CSV format 
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. Defaults to 1000. If more results are present, the response will contain a paginationContext. 
         */
        async getAnnotationsForASRAnnotationSetV1(skillId : string, annotationSetId : string, accept : string, nextToken? : string, maxResults? : number) : Promise<v1.skill.asr.annotationSets.GetAsrAnnotationSetAnnotationsResponse> {
                const apiResponse: ApiResponse = await this.callGetAnnotationsForASRAnnotationSetV1(skillId, annotationSetId, accept, nextToken, maxResults);
                return apiResponse.body as v1.skill.asr.annotationSets.GetAsrAnnotationSetAnnotationsResponse;
        }
        /**
         * API that updates the annotaions in the annotation set 
         * @param {string} skillId The skill ID.
         * @param {string} annotationSetId Identifier of the ASR annotation set.
         * @param {v1.skill.asr.annotationSets.UpdateAsrAnnotationSetContentsPayload} updateAsrAnnotationSetContentsRequest Payload containing annotation set contents. Two formats are accepted here: - &#x60;application/json&#x60;: Annotation set payload in JSON format. - &#x60;text/csv&#x60;: Annotation set payload in CSV format. Note that for CSV format, the first row should describe the column attributes. Columns should be delimited by comma.  The subsequent rows should describe annotation data and each annotation attributes has to follow the strict ordering defined in the first row. Each annotation fields should be delimited by comma. 
         */
        async callSetAnnotationsForASRAnnotationSetV1(skillId : string, annotationSetId : string, updateAsrAnnotationSetContentsRequest : v1.skill.asr.annotationSets.UpdateAsrAnnotationSetContentsPayload) : Promise<ApiResponse> {
            const __operationId__ = 'callSetAnnotationsForASRAnnotationSetV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'annotationSetId' is not null or undefined
            if (annotationSetId == null) {
                throw new Error(`Required parameter annotationSetId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'updateAsrAnnotationSetContentsRequest' is not null or undefined
            if (updateAsrAnnotationSetContentsRequest == null) {
                throw new Error(`Required parameter updateAsrAnnotationSetContentsRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('annotationSetId', annotationSetId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/asrAnnotationSets/{annotationSetId}/annotations";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "ASR annotation set contents have been updated successfully.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(503, "Service Unavailable.");
            errorDefinitions.set(0, "Internal Server Error.");

            return this.invoke("PUT", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, updateAsrAnnotationSetContentsRequest, errorDefinitions);
        }
        
        /**
         * API that updates the annotaions in the annotation set 
         * @param {string} skillId The skill ID.
         * @param {string} annotationSetId Identifier of the ASR annotation set.
         * @param {v1.skill.asr.annotationSets.UpdateAsrAnnotationSetContentsPayload} updateAsrAnnotationSetContentsRequest Payload containing annotation set contents. Two formats are accepted here: - &#x60;application/json&#x60;: Annotation set payload in JSON format. - &#x60;text/csv&#x60;: Annotation set payload in CSV format. Note that for CSV format, the first row should describe the column attributes. Columns should be delimited by comma.  The subsequent rows should describe annotation data and each annotation attributes has to follow the strict ordering defined in the first row. Each annotation fields should be delimited by comma. 
         */
        async setAnnotationsForASRAnnotationSetV1(skillId : string, annotationSetId : string, updateAsrAnnotationSetContentsRequest : v1.skill.asr.annotationSets.UpdateAsrAnnotationSetContentsPayload) : Promise<void> {
                await this.callSetAnnotationsForASRAnnotationSetV1(skillId, annotationSetId, updateAsrAnnotationSetContentsRequest);
        }
        /**
         * API which deletes the ASR annotation set. Developers cannot get/list the deleted annotation set. 
         * @param {string} skillId The skill ID.
         * @param {string} annotationSetId Identifier of the ASR annotation set.
         */
        async callDeleteASRAnnotationSetV1(skillId : string, annotationSetId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callDeleteASRAnnotationSetV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'annotationSetId' is not null or undefined
            if (annotationSetId == null) {
                throw new Error(`Required parameter annotationSetId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('annotationSetId', annotationSetId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/asrAnnotationSets/{annotationSetId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "ASR annotation set exists and is deleted successfully.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(409, "The request could not be completed due to a conflict with the current state of the target resource.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(503, "Service Unavailable.");
            errorDefinitions.set(0, "Internal Server Error.");

            return this.invoke("DELETE", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * API which deletes the ASR annotation set. Developers cannot get/list the deleted annotation set. 
         * @param {string} skillId The skill ID.
         * @param {string} annotationSetId Identifier of the ASR annotation set.
         */
        async deleteASRAnnotationSetV1(skillId : string, annotationSetId : string) : Promise<void> {
                await this.callDeleteASRAnnotationSetV1(skillId, annotationSetId);
        }
        /**
         * Return the metadata for an ASR annotation set. 
         * @param {string} skillId The skill ID.
         * @param {string} annotationSetId Identifier of the ASR annotation set.
         */
        async callGetASRAnnotationSetV1(skillId : string, annotationSetId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetASRAnnotationSetV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'annotationSetId' is not null or undefined
            if (annotationSetId == null) {
                throw new Error(`Required parameter annotationSetId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('annotationSetId', annotationSetId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/asrAnnotationSets/{annotationSetId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "The ASR annotation set exists.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(503, "Service Unavailable.");
            errorDefinitions.set(0, "Internal Server Error.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Return the metadata for an ASR annotation set. 
         * @param {string} skillId The skill ID.
         * @param {string} annotationSetId Identifier of the ASR annotation set.
         */
        async getASRAnnotationSetV1(skillId : string, annotationSetId : string) : Promise<v1.skill.asr.annotationSets.GetASRAnnotationSetsPropertiesResponse> {
                const apiResponse: ApiResponse = await this.callGetASRAnnotationSetV1(skillId, annotationSetId);
                return apiResponse.body as v1.skill.asr.annotationSets.GetASRAnnotationSetsPropertiesResponse;
        }
        /**
         * API which updates the ASR annotation set properties. Currently, the only data can be updated is annotation set name. 
         * @param {string} skillId The skill ID.
         * @param {string} annotationSetId Identifier of the ASR annotation set.
         * @param {v1.skill.asr.annotationSets.UpdateAsrAnnotationSetPropertiesRequestObject} updateAsrAnnotationSetPropertiesRequestV1 Payload sent to the update ASR annotation set properties API.
         */
        async callSetASRAnnotationSetV1(skillId : string, annotationSetId : string, updateAsrAnnotationSetPropertiesRequestV1 : v1.skill.asr.annotationSets.UpdateAsrAnnotationSetPropertiesRequestObject) : Promise<ApiResponse> {
            const __operationId__ = 'callSetASRAnnotationSetV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'annotationSetId' is not null or undefined
            if (annotationSetId == null) {
                throw new Error(`Required parameter annotationSetId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'updateAsrAnnotationSetPropertiesRequestV1' is not null or undefined
            if (updateAsrAnnotationSetPropertiesRequestV1 == null) {
                throw new Error(`Required parameter updateAsrAnnotationSetPropertiesRequestV1 was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('annotationSetId', annotationSetId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/asrAnnotationSets/{annotationSetId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "ASR annotation set exists and properties are updated successfully.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(503, "Service Unavailable.");
            errorDefinitions.set(0, "Internal Server Error.");

            return this.invoke("PUT", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, updateAsrAnnotationSetPropertiesRequestV1, errorDefinitions);
        }
        
        /**
         * API which updates the ASR annotation set properties. Currently, the only data can be updated is annotation set name. 
         * @param {string} skillId The skill ID.
         * @param {string} annotationSetId Identifier of the ASR annotation set.
         * @param {v1.skill.asr.annotationSets.UpdateAsrAnnotationSetPropertiesRequestObject} updateAsrAnnotationSetPropertiesRequestV1 Payload sent to the update ASR annotation set properties API.
         */
        async setASRAnnotationSetV1(skillId : string, annotationSetId : string, updateAsrAnnotationSetPropertiesRequestV1 : v1.skill.asr.annotationSets.UpdateAsrAnnotationSetPropertiesRequestObject) : Promise<void> {
                await this.callSetASRAnnotationSetV1(skillId, annotationSetId, updateAsrAnnotationSetPropertiesRequestV1);
        }
        /**
         * API which requests all the ASR annotation sets for a skill. Returns the annotation set id and properties for each ASR annotation set. Supports paging of results. 
         * @param {string} skillId The skill ID.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. Defaults to 1000. If more results are present, the response will contain a paginationContext. 
         */
        async callListASRAnnotationSetsV1(skillId : string, nextToken? : string, maxResults? : number) : Promise<ApiResponse> {
            const __operationId__ = 'callListASRAnnotationSetsV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/asrAnnotationSets";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "ASR annotation sets metadata are returned.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(503, "Service Unavailable.");
            errorDefinitions.set(0, "Internal Server Error.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * API which requests all the ASR annotation sets for a skill. Returns the annotation set id and properties for each ASR annotation set. Supports paging of results. 
         * @param {string} skillId The skill ID.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. Defaults to 1000. If more results are present, the response will contain a paginationContext. 
         */
        async listASRAnnotationSetsV1(skillId : string, nextToken? : string, maxResults? : number) : Promise<v1.skill.asr.annotationSets.ListASRAnnotationSetsResponse> {
                const apiResponse: ApiResponse = await this.callListASRAnnotationSetsV1(skillId, nextToken, maxResults);
                return apiResponse.body as v1.skill.asr.annotationSets.ListASRAnnotationSetsResponse;
        }
        /**
         * This is an API that creates a new ASR annotation set with a name and returns the annotationSetId which can later be used to retrieve or reference the annotation set 
         * @param {string} skillId The skill ID.
         * @param {v1.skill.asr.annotationSets.CreateAsrAnnotationSetRequestObject} createAsrAnnotationSetRequest Payload sent to the create ASR annotation set API.
         */
        async callCreateASRAnnotationSetV1(skillId : string, createAsrAnnotationSetRequest : v1.skill.asr.annotationSets.CreateAsrAnnotationSetRequestObject) : Promise<ApiResponse> {
            const __operationId__ = 'callCreateASRAnnotationSetV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'createAsrAnnotationSetRequest' is not null or undefined
            if (createAsrAnnotationSetRequest == null) {
                throw new Error(`Required parameter createAsrAnnotationSetRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/asrAnnotationSets";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "ASR annotation set created successfully.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(503, "Service Unavailable.");
            errorDefinitions.set(0, "Internal Server Error.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, createAsrAnnotationSetRequest, errorDefinitions);
        }
        
        /**
         * This is an API that creates a new ASR annotation set with a name and returns the annotationSetId which can later be used to retrieve or reference the annotation set 
         * @param {string} skillId The skill ID.
         * @param {v1.skill.asr.annotationSets.CreateAsrAnnotationSetRequestObject} createAsrAnnotationSetRequest Payload sent to the create ASR annotation set API.
         */
        async createASRAnnotationSetV1(skillId : string, createAsrAnnotationSetRequest : v1.skill.asr.annotationSets.CreateAsrAnnotationSetRequestObject) : Promise<v1.skill.asr.annotationSets.CreateAsrAnnotationSetResponse> {
                const apiResponse: ApiResponse = await this.callCreateASRAnnotationSetV1(skillId, createAsrAnnotationSetRequest);
                return apiResponse.body as v1.skill.asr.annotationSets.CreateAsrAnnotationSetResponse;
        }
        /**
         * API which enables the deletion of an evaluation.  
         * @param {string} skillId The skill ID.
         * @param {string} evaluationId Identifier of the evaluation.
         */
        async callDeleteASREvaluationV1(skillId : string, evaluationId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callDeleteASREvaluationV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'evaluationId' is not null or undefined
            if (evaluationId == null) {
                throw new Error(`Required parameter evaluationId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('evaluationId', evaluationId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/asrEvaluations/{evaluationId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "ASR evaluation exists and is deleted successfully.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(503, "Service Unavailable.");
            errorDefinitions.set(0, "Internal Server Error.");

            return this.invoke("DELETE", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * API which enables the deletion of an evaluation.  
         * @param {string} skillId The skill ID.
         * @param {string} evaluationId Identifier of the evaluation.
         */
        async deleteASREvaluationV1(skillId : string, evaluationId : string) : Promise<void> {
                await this.callDeleteASREvaluationV1(skillId, evaluationId);
        }
        /**
         * Paginated API which returns the test case results of an evaluation. This should be considered the \"expensive\" operation while GetAsrEvaluationsStatus is \"cheap\". 
         * @param {string} skillId The skill ID.
         * @param {string} evaluationId Identifier of the evaluation.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. Defaults to 1000. If more results are present, the response will contain a nextToken. 
         * @param {string} status query parameter used to filter evaluation result status.   * &#x60;PASSED&#x60; - filter evaluation result status of &#x60;PASSED&#x60;   * &#x60;FAILED&#x60; - filter evaluation result status of &#x60;FAILED&#x60; 
         */
        async callListASREvaluationsResultsV1(skillId : string, evaluationId : string, nextToken? : string, maxResults? : number, status? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callListASREvaluationsResultsV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'evaluationId' is not null or undefined
            if (evaluationId == null) {
                throw new Error(`Required parameter evaluationId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }
            if(status != null) {
                const statusValues: any[] = Array.isArray(status) ? status : [status];
                statusValues.forEach(val => queryParams.push({ key: 'status', value: val }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('evaluationId', evaluationId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/asrEvaluations/{evaluationId}/results";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Evaluation exists and its status is queryable.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(503, "Service Unavailable.");
            errorDefinitions.set(0, "Internal Server Error.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Paginated API which returns the test case results of an evaluation. This should be considered the \"expensive\" operation while GetAsrEvaluationsStatus is \"cheap\". 
         * @param {string} skillId The skill ID.
         * @param {string} evaluationId Identifier of the evaluation.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. Defaults to 1000. If more results are present, the response will contain a nextToken. 
         * @param {string} status query parameter used to filter evaluation result status.   * &#x60;PASSED&#x60; - filter evaluation result status of &#x60;PASSED&#x60;   * &#x60;FAILED&#x60; - filter evaluation result status of &#x60;FAILED&#x60; 
         */
        async listASREvaluationsResultsV1(skillId : string, evaluationId : string, nextToken? : string, maxResults? : number, status? : string) : Promise<v1.skill.asr.evaluations.GetAsrEvaluationsResultsResponse> {
                const apiResponse: ApiResponse = await this.callListASREvaluationsResultsV1(skillId, evaluationId, nextToken, maxResults, status);
                return apiResponse.body as v1.skill.asr.evaluations.GetAsrEvaluationsResultsResponse;
        }
        /**
         * API which requests high level information about the evaluation like the current state of the job, status of the evaluation (if complete). Also returns the request used to start the job, like the number of total evaluations, number of completed evaluations, and start time. This should be considered the \"cheap\" operation while GetAsrEvaluationsResults is \"expensive\". 
         * @param {string} skillId The skill ID.
         * @param {string} evaluationId Identifier of the evaluation.
         */
        async callGetASREvaluationStatusV1(skillId : string, evaluationId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetASREvaluationStatusV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'evaluationId' is not null or undefined
            if (evaluationId == null) {
                throw new Error(`Required parameter evaluationId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('evaluationId', evaluationId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/asrEvaluations/{evaluationId}/status";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Evaluation exists and its status is queryable.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(503, "Service Unavailable.");
            errorDefinitions.set(0, "Internal Server Error.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * API which requests high level information about the evaluation like the current state of the job, status of the evaluation (if complete). Also returns the request used to start the job, like the number of total evaluations, number of completed evaluations, and start time. This should be considered the \"cheap\" operation while GetAsrEvaluationsResults is \"expensive\". 
         * @param {string} skillId The skill ID.
         * @param {string} evaluationId Identifier of the evaluation.
         */
        async getASREvaluationStatusV1(skillId : string, evaluationId : string) : Promise<v1.skill.asr.evaluations.GetAsrEvaluationStatusResponseObject> {
                const apiResponse: ApiResponse = await this.callGetASREvaluationStatusV1(skillId, evaluationId);
                return apiResponse.body as v1.skill.asr.evaluations.GetAsrEvaluationStatusResponseObject;
        }
        /**
         * API that allows developers to get historical ASR evaluations they run before. 
         * @param {string} skillId The skill ID.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {string} locale locale in bcp 47 format. Used to filter results with the specified locale. If omitted, the response would include all evaluations regardless of what locale was used in the evaluation
         * @param {string} stage Query parameter used to filter evaluations with specified skill stage.   * &#x60;development&#x60; - skill in &#x60;development&#x60; stage   * &#x60;live&#x60; - skill in &#x60;live&#x60; stage 
         * @param {string} annotationSetId filter to evaluations started using this annotationSetId
         * @param {number} maxResults Sets the maximum number of results returned in the response body. Defaults to 1000. If more results are present, the response will contain a nextToken. 
         */
        async callListASREvaluationsV1(skillId : string, nextToken? : string, locale? : string, stage? : string, annotationSetId? : string, maxResults? : number) : Promise<ApiResponse> {
            const __operationId__ = 'callListASREvaluationsV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(locale != null) {
                const localeValues: any[] = Array.isArray(locale) ? locale : [locale];
                localeValues.forEach(val => queryParams.push({ key: 'locale', value: val }));
            }
            if(stage != null) {
                const stageValues: any[] = Array.isArray(stage) ? stage : [stage];
                stageValues.forEach(val => queryParams.push({ key: 'stage', value: val }));
            }
            if(annotationSetId != null) {
                const annotationSetIdValues: any[] = Array.isArray(annotationSetId) ? annotationSetId : [annotationSetId];
                annotationSetIdValues.forEach(val => queryParams.push({ key: 'annotationSetId', value: val }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/asrEvaluations";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Evaluations are returned.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(503, "Service Unavailable.");
            errorDefinitions.set(0, "Internal Server Error.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * API that allows developers to get historical ASR evaluations they run before. 
         * @param {string} skillId The skill ID.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {string} locale locale in bcp 47 format. Used to filter results with the specified locale. If omitted, the response would include all evaluations regardless of what locale was used in the evaluation
         * @param {string} stage Query parameter used to filter evaluations with specified skill stage.   * &#x60;development&#x60; - skill in &#x60;development&#x60; stage   * &#x60;live&#x60; - skill in &#x60;live&#x60; stage 
         * @param {string} annotationSetId filter to evaluations started using this annotationSetId
         * @param {number} maxResults Sets the maximum number of results returned in the response body. Defaults to 1000. If more results are present, the response will contain a nextToken. 
         */
        async listASREvaluationsV1(skillId : string, nextToken? : string, locale? : string, stage? : string, annotationSetId? : string, maxResults? : number) : Promise<v1.skill.asr.evaluations.ListAsrEvaluationsResponse> {
                const apiResponse: ApiResponse = await this.callListASREvaluationsV1(skillId, nextToken, locale, stage, annotationSetId, maxResults);
                return apiResponse.body as v1.skill.asr.evaluations.ListAsrEvaluationsResponse;
        }
        /**
         * This is an asynchronous API that starts an evaluation against the ASR model built by the skill's interaction model. The operation outputs an evaluationId which allows the retrieval of the current status of the operation and the results upon completion. This operation is unified, meaning both internal and external skill developers may use it to evaluate ASR models. 
         * @param {v1.skill.asr.evaluations.PostAsrEvaluationsRequestObject} postAsrEvaluationsRequest Payload sent to trigger evaluation run.
         * @param {string} skillId The skill ID.
         */
        async callCreateASREvaluationV1(postAsrEvaluationsRequest : v1.skill.asr.evaluations.PostAsrEvaluationsRequestObject, skillId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callCreateASREvaluationV1';
            // verify required parameter 'postAsrEvaluationsRequest' is not null or undefined
            if (postAsrEvaluationsRequest == null) {
                throw new Error(`Required parameter postAsrEvaluationsRequest was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/asrEvaluations";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Evaluation has successfully begun.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(409, "The request could not be completed due to a conflict with the current state of the target resource.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(503, "Service Unavailable.");
            errorDefinitions.set(0, "Internal Server Error.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, postAsrEvaluationsRequest, errorDefinitions);
        }
        
        /**
         * This is an asynchronous API that starts an evaluation against the ASR model built by the skill's interaction model. The operation outputs an evaluationId which allows the retrieval of the current status of the operation and the results upon completion. This operation is unified, meaning both internal and external skill developers may use it to evaluate ASR models. 
         * @param {v1.skill.asr.evaluations.PostAsrEvaluationsRequestObject} postAsrEvaluationsRequest Payload sent to trigger evaluation run.
         * @param {string} skillId The skill ID.
         */
        async createASREvaluationV1(postAsrEvaluationsRequest : v1.skill.asr.evaluations.PostAsrEvaluationsRequestObject, skillId : string) : Promise<v1.skill.asr.evaluations.PostAsrEvaluationsResponseObject> {
                const apiResponse: ApiResponse = await this.callCreateASREvaluationV1(postAsrEvaluationsRequest, skillId);
                return apiResponse.body as v1.skill.asr.evaluations.PostAsrEvaluationsResponseObject;
        }
        /**
         * End a beta test for a given Alexa skill. System will revoke the entitlement of each tester and send access-end notification email to them. 
         * @param {string} skillId The skill ID.
         */
        async callEndBetaTestV1(skillId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callEndBetaTestV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/betaTest/end";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(202, "Accept. Return a URL to track the resource in &#39;Location&#39; header.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(409, "The request could not be completed due to a conflict with the current state of the target resource.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * End a beta test for a given Alexa skill. System will revoke the entitlement of each tester and send access-end notification email to them. 
         * @param {string} skillId The skill ID.
         */
        async endBetaTestV1(skillId : string) : Promise<void> {
                await this.callEndBetaTestV1(skillId);
        }
        /**
         * Get beta test for a given Alexa skill.
         * @param {string} skillId The skill ID.
         */
        async callGetBetaTestV1(skillId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetBetaTestV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/betaTest";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Success.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(409, "Thrown if user tries to request a new simulation while the old simulation is in progress.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get beta test for a given Alexa skill.
         * @param {string} skillId The skill ID.
         */
        async getBetaTestV1(skillId : string) : Promise<v1.skill.betaTest.BetaTest> {
                const apiResponse: ApiResponse = await this.callGetBetaTestV1(skillId);
                return apiResponse.body as v1.skill.betaTest.BetaTest;
        }
        /**
         * Create a beta test for a given Alexa skill.
         * @param {string} skillId The skill ID.
         * @param {v1.skill.betaTest.TestBody} createTestBody JSON object containing the details of a beta test used to create the test.
         */
        async callCreateBetaTestV1(skillId : string, createTestBody? : v1.skill.betaTest.TestBody) : Promise<ApiResponse> {
            const __operationId__ = 'callCreateBetaTestV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/betaTest";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(201, "Success. Return a URL to track the resource in &#39;Location&#39; header.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(409, "The request could not be completed due to a conflict with the current state of the target resource.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, createTestBody, errorDefinitions);
        }
        
        /**
         * Create a beta test for a given Alexa skill.
         * @param {string} skillId The skill ID.
         * @param {v1.skill.betaTest.TestBody} createTestBody JSON object containing the details of a beta test used to create the test.
         */
        async createBetaTestV1(skillId : string, createTestBody? : v1.skill.betaTest.TestBody) : Promise<void> {
                await this.callCreateBetaTestV1(skillId, createTestBody);
        }
        /**
         * Update a beta test for a given Alexa skill.
         * @param {string} skillId The skill ID.
         * @param {v1.skill.betaTest.TestBody} createTestBody JSON object containing the details of a beta test used to create the test.
         */
        async callUpdateBetaTestV1(skillId : string, createTestBody? : v1.skill.betaTest.TestBody) : Promise<ApiResponse> {
            const __operationId__ = 'callUpdateBetaTestV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/betaTest";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "Success. No content.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(409, "Thrown if user tries to request a new simulation while the old simulation is in progress.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");

            return this.invoke("PUT", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, createTestBody, errorDefinitions);
        }
        
        /**
         * Update a beta test for a given Alexa skill.
         * @param {string} skillId The skill ID.
         * @param {v1.skill.betaTest.TestBody} createTestBody JSON object containing the details of a beta test used to create the test.
         */
        async updateBetaTestV1(skillId : string, createTestBody? : v1.skill.betaTest.TestBody) : Promise<v1.skill.betaTest.UpdateBetaTestResponse> {
                const apiResponse: ApiResponse = await this.callUpdateBetaTestV1(skillId, createTestBody);
                return apiResponse.body as v1.skill.betaTest.UpdateBetaTestResponse;
        }
        /**
         * Start a beta test for a given Alexa skill. System will send invitation emails to each tester in the test, and add entitlement on the acceptance. 
         * @param {string} skillId The skill ID.
         */
        async callStartBetaTestV1(skillId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callStartBetaTestV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/betaTest/start";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(202, "Accept. Return a URL to track the resource in &#39;Location&#39; header.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(409, "The request could not be completed due to a conflict with the current state of the target resource.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Start a beta test for a given Alexa skill. System will send invitation emails to each tester in the test, and add entitlement on the acceptance. 
         * @param {string} skillId The skill ID.
         */
        async startBetaTestV1(skillId : string) : Promise<void> {
                await this.callStartBetaTestV1(skillId);
        }
        /**
         * Add testers to a beta test for the given Alexa skill.  System will send invitation email to each tester and add entitlement on the acceptance. 
         * @param {string} skillId The skill ID.
         * @param {v1.skill.betaTest.testers.TestersList} testersRequest JSON object containing the email address of beta testers.
         */
        async callAddTestersToBetaTestV1(skillId : string, testersRequest : v1.skill.betaTest.testers.TestersList) : Promise<ApiResponse> {
            const __operationId__ = 'callAddTestersToBetaTestV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'testersRequest' is not null or undefined
            if (testersRequest == null) {
                throw new Error(`Required parameter testersRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/betaTest/testers/add";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "Success. No content.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(409, "The request could not be completed due to a conflict with the current state of the target resource.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, testersRequest, errorDefinitions);
        }
        
        /**
         * Add testers to a beta test for the given Alexa skill.  System will send invitation email to each tester and add entitlement on the acceptance. 
         * @param {string} skillId The skill ID.
         * @param {v1.skill.betaTest.testers.TestersList} testersRequest JSON object containing the email address of beta testers.
         */
        async addTestersToBetaTestV1(skillId : string, testersRequest : v1.skill.betaTest.testers.TestersList) : Promise<void> {
                await this.callAddTestersToBetaTestV1(skillId, testersRequest);
        }
        /**
         * List all testers in a beta test for the given Alexa skill.
         * @param {string} skillId The skill ID.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 500 results, you can add this parameter to your request. The response might contain fewer results than maxResults, but it will never contain more.
         */
        async callGetListOfTestersV1(skillId : string, nextToken? : string, maxResults? : number) : Promise<ApiResponse> {
            const __operationId__ = 'callGetListOfTestersV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/betaTest/testers";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Success.");
            errorDefinitions.set(400, "Bad request.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(409, "The request could not be completed due to a conflict with the current state of the target resource.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * List all testers in a beta test for the given Alexa skill.
         * @param {string} skillId The skill ID.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 500 results, you can add this parameter to your request. The response might contain fewer results than maxResults, but it will never contain more.
         */
        async getListOfTestersV1(skillId : string, nextToken? : string, maxResults? : number) : Promise<v1.skill.betaTest.testers.ListTestersResponse> {
                const apiResponse: ApiResponse = await this.callGetListOfTestersV1(skillId, nextToken, maxResults);
                return apiResponse.body as v1.skill.betaTest.testers.ListTestersResponse;
        }
        /**
         * Remove testers from a beta test for the given Alexa skill.  System will send access end email to each tester and remove entitlement for them. 
         * @param {string} skillId The skill ID.
         * @param {v1.skill.betaTest.testers.TestersList} testersRequest JSON object containing the email address of beta testers.
         */
        async callRemoveTestersFromBetaTestV1(skillId : string, testersRequest : v1.skill.betaTest.testers.TestersList) : Promise<ApiResponse> {
            const __operationId__ = 'callRemoveTestersFromBetaTestV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'testersRequest' is not null or undefined
            if (testersRequest == null) {
                throw new Error(`Required parameter testersRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/betaTest/testers/remove";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "Success. No content.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(409, "The request could not be completed due to a conflict with the current state of the target resource.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, testersRequest, errorDefinitions);
        }
        
        /**
         * Remove testers from a beta test for the given Alexa skill.  System will send access end email to each tester and remove entitlement for them. 
         * @param {string} skillId The skill ID.
         * @param {v1.skill.betaTest.testers.TestersList} testersRequest JSON object containing the email address of beta testers.
         */
        async removeTestersFromBetaTestV1(skillId : string, testersRequest : v1.skill.betaTest.testers.TestersList) : Promise<void> {
                await this.callRemoveTestersFromBetaTestV1(skillId, testersRequest);
        }
        /**
         * Request feedback from the testers in a beta test for the given Alexa skill.  System will send notification emails to testers to request feedback. 
         * @param {string} skillId The skill ID.
         * @param {v1.skill.betaTest.testers.TestersList} testersRequest JSON object containing the email address of beta testers.
         */
        async callRequestFeedbackFromTestersV1(skillId : string, testersRequest : v1.skill.betaTest.testers.TestersList) : Promise<ApiResponse> {
            const __operationId__ = 'callRequestFeedbackFromTestersV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'testersRequest' is not null or undefined
            if (testersRequest == null) {
                throw new Error(`Required parameter testersRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/betaTest/testers/requestFeedback";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "Success. No content.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(409, "The request could not be completed due to a conflict with the current state of the target resource.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, testersRequest, errorDefinitions);
        }
        
        /**
         * Request feedback from the testers in a beta test for the given Alexa skill.  System will send notification emails to testers to request feedback. 
         * @param {string} skillId The skill ID.
         * @param {v1.skill.betaTest.testers.TestersList} testersRequest JSON object containing the email address of beta testers.
         */
        async requestFeedbackFromTestersV1(skillId : string, testersRequest : v1.skill.betaTest.testers.TestersList) : Promise<void> {
                await this.callRequestFeedbackFromTestersV1(skillId, testersRequest);
        }
        /**
         * Send reminder to the testers in a beta test for the given Alexa skill.  System will send invitation email to each tester and add entitlement on the acceptance. 
         * @param {string} skillId The skill ID.
         * @param {v1.skill.betaTest.testers.TestersList} testersRequest JSON object containing the email address of beta testers.
         */
        async callSendReminderToTestersV1(skillId : string, testersRequest : v1.skill.betaTest.testers.TestersList) : Promise<ApiResponse> {
            const __operationId__ = 'callSendReminderToTestersV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'testersRequest' is not null or undefined
            if (testersRequest == null) {
                throw new Error(`Required parameter testersRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/betaTest/testers/sendReminder";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "Success. No content.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(409, "The request could not be completed due to a conflict with the current state of the target resource.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, testersRequest, errorDefinitions);
        }
        
        /**
         * Send reminder to the testers in a beta test for the given Alexa skill.  System will send invitation email to each tester and add entitlement on the acceptance. 
         * @param {string} skillId The skill ID.
         * @param {v1.skill.betaTest.testers.TestersList} testersRequest JSON object containing the email address of beta testers.
         */
        async sendReminderToTestersV1(skillId : string, testersRequest : v1.skill.betaTest.testers.TestersList) : Promise<void> {
                await this.callSendReminderToTestersV1(skillId, testersRequest);
        }
        /**
         * Gets a specific certification resource. The response contains the review tracking information for a skill to show how much time the skill is expected to remain under review by Amazon. Once the review is complete, the response also contains the outcome of the review. Old certifications may not be available, however any ongoing certification would always give a response. If the certification is unavailable the result will return a 404 HTTP status code. 
         * @param {string} skillId The skill ID.
         * @param {string} certificationId Id of the certification. Reserved word identifier of mostRecent can be used to get the most recent certification for the skill. Note that the behavior of the API in this case would be the same as when the actual certification id of the most recent certification is used in the request. 
         * @param {string} acceptLanguage User&#39;s locale/language in context.
         */
        async callGetCertificationReviewV1(skillId : string, certificationId : string, acceptLanguage? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetCertificationReviewV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'certificationId' is not null or undefined
            if (certificationId == null) {
                throw new Error(`Required parameter certificationId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });
            if(acceptLanguage != null) {
                headerParams.push({ key : 'Accept-Language', value : acceptLanguage });
            }


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('certificationId', certificationId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/certifications/{certificationId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Successfully retrieved skill certification information.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error e.g. if any request parameter is invalid like certification Id or pagination token etc. If the maxResults is not in the range of 1 to 50, it also qualifies for this error. ");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceeded the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId. ");
            errorDefinitions.set(500, "Internal Server Error.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Gets a specific certification resource. The response contains the review tracking information for a skill to show how much time the skill is expected to remain under review by Amazon. Once the review is complete, the response also contains the outcome of the review. Old certifications may not be available, however any ongoing certification would always give a response. If the certification is unavailable the result will return a 404 HTTP status code. 
         * @param {string} skillId The skill ID.
         * @param {string} certificationId Id of the certification. Reserved word identifier of mostRecent can be used to get the most recent certification for the skill. Note that the behavior of the API in this case would be the same as when the actual certification id of the most recent certification is used in the request. 
         * @param {string} acceptLanguage User&#39;s locale/language in context.
         */
        async getCertificationReviewV1(skillId : string, certificationId : string, acceptLanguage? : string) : Promise<v1.skill.certification.CertificationResponse> {
                const apiResponse: ApiResponse = await this.callGetCertificationReviewV1(skillId, certificationId, acceptLanguage);
                return apiResponse.body as v1.skill.certification.CertificationResponse;
        }
        /**
         * Get list of all certifications available for a skill, including information about past certifications and any ongoing certification. The default sort order is descending on skillSubmissionTimestamp for Certifications. 
         * @param {string} skillId The skill ID.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         */
        async callGetCertificationsListV1(skillId : string, nextToken? : string, maxResults? : number) : Promise<ApiResponse> {
            const __operationId__ = 'callGetCertificationsListV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/certifications";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns list of certifications for the skillId.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error e.g. if any request parameter is invalid like certification Id or pagination token etc. If the maxResults is not in the range of 1 to 50, it also qualifies for this error. ");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceeded the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId. ");
            errorDefinitions.set(500, "Internal Server Error.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get list of all certifications available for a skill, including information about past certifications and any ongoing certification. The default sort order is descending on skillSubmissionTimestamp for Certifications. 
         * @param {string} skillId The skill ID.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         */
        async getCertificationsListV1(skillId : string, nextToken? : string, maxResults? : number) : Promise<v1.skill.certification.ListCertificationsResponse> {
                const apiResponse: ApiResponse = await this.callGetCertificationsListV1(skillId, nextToken, maxResults);
                return apiResponse.body as v1.skill.certification.ListCertificationsResponse;
        }
        /**
         * Get the client credentials for the skill.
         * @param {string} skillId The skill ID.
         */
        async callGetSkillCredentialsV1(skillId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetSkillCredentialsV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/credentials";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Response contains the skill credentials.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get the client credentials for the skill.
         * @param {string} skillId The skill ID.
         */
        async getSkillCredentialsV1(skillId : string) : Promise<v1.skill.SkillCredentials> {
                const apiResponse: ApiResponse = await this.callGetSkillCredentialsV1(skillId);
                return apiResponse.body as v1.skill.SkillCredentials;
        }
        /**
         * Delete the skill and model for given skillId.
         * @param {string} skillId The skill ID.
         */
        async callDeleteSkillV1(skillId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callDeleteSkillV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "Success. No content.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("DELETE", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Delete the skill and model for given skillId.
         * @param {string} skillId The skill ID.
         */
        async deleteSkillV1(skillId : string) : Promise<void> {
                await this.callDeleteSkillV1(skillId);
        }
        /**
         * 
         * @param {string} skillId The skill ID.
         * @param {string} stage The stage of the skill to be used for evaluation. An error will be returned if this skill stage is not enabled on the account used for evaluation.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} sortDirection Sets the sorting direction of the result items. When set to &#39;asc&#39; these items are returned in ascending order of sortField value and when set to &#39;desc&#39; these items are returned in descending order of sortField value.
         * @param {string} sortField Sets the field on which the sorting would be applied.
         * @param {Array<v1.skill.history.LocaleInQuery>} locale 
         * @param {Array<v1.skill.history.DialogActName>} dialogActName A filter used to retrieve items where the dialogAct name is equal to the given value. * &#x60;Dialog.ElicitSlot&#x60;: Alexa asked the user for the value of a specific slot. (https://developer.amazon.com/docs/custom-skills/dialog-interface-reference.html#elicitslot) * &#x60;Dialog.ConfirmSlot&#x60;: Alexa confirmed the value of a specific slot before continuing with the dialog. (https://developer.amazon.com/docs/custom-skills/dialog-interface-reference.html#confirmslot) * &#x60;Dialog.ConfirmIntent&#x60;: Alexa confirmed the all the information the user has provided for the intent before the skill took action. (https://developer.amazon.com/docs/custom-skills/dialog-interface-reference.html#confirmintent) 
         * @param {Array<v1.skill.history.IntentConfidenceBin>} intentConfidenceBin 
         * @param {Array<string>} intentName A filter used to retrieve items where the intent name is equal to the given value.
         * @param {Array<string>} intentSlotsName A filter used to retrieve items where the one of the slot names is equal to the given value.
         * @param {Array<v1.skill.history.InteractionType>} interactionType 
         * @param {Array<v1.skill.history.PublicationStatus>} publicationStatus 
         * @param {Array<string>} utteranceText A filter used to retrieve items where the utterance text contains the given phrase. Each filter value can be at-least 1 character and at-most 100 characters long.
         */
        async callGetUtteranceDataV1(skillId : string, stage : string, nextToken? : string, maxResults? : number, sortDirection? : string, sortField? : string, locale? : Array<v1.skill.history.LocaleInQuery>, dialogActName? : Array<v1.skill.history.DialogActName>, intentConfidenceBin? : Array<v1.skill.history.IntentConfidenceBin>, intentName? : Array<string>, intentSlotsName? : Array<string>, interactionType? : Array<v1.skill.history.InteractionType>, publicationStatus? : Array<v1.skill.history.PublicationStatus>, utteranceText? : Array<string>) : Promise<ApiResponse> {
            const __operationId__ = 'callGetUtteranceDataV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }
            if(sortDirection != null) {
                const sortDirectionValues: any[] = Array.isArray(sortDirection) ? sortDirection : [sortDirection];
                sortDirectionValues.forEach(val => queryParams.push({ key: 'sortDirection', value: val }));
            }
            if(sortField != null) {
                const sortFieldValues: any[] = Array.isArray(sortField) ? sortField : [sortField];
                sortFieldValues.forEach(val => queryParams.push({ key: 'sortField', value: val }));
            }
            const stageValues: any[] = Array.isArray(stage) ? stage : [stage];
            stageValues.forEach(val => queryParams.push({ key: 'stage', value: val }));
            if(locale != null) {
                const localeValues: any[] = Array.isArray(locale) ? locale : [locale];
                localeValues.forEach(val => queryParams.push({ key: 'locale', value: val!.toString() }));
            }
            if(dialogActName != null) {
                const dialogActNameValues: any[] = Array.isArray(dialogActName) ? dialogActName : [dialogActName];
                dialogActNameValues.forEach(val => queryParams.push({ key: 'dialogAct.name', value: val!.toString() }));
            }
            if(intentConfidenceBin != null) {
                const intentConfidenceBinValues: any[] = Array.isArray(intentConfidenceBin) ? intentConfidenceBin : [intentConfidenceBin];
                intentConfidenceBinValues.forEach(val => queryParams.push({ key: 'intent.confidence.bin', value: val!.toString() }));
            }
            if(intentName != null) {
                const intentNameValues: any[] = Array.isArray(intentName) ? intentName : [intentName];
                intentNameValues.forEach(val => queryParams.push({ key: 'intent.name', value: val!.toString() }));
            }
            if(intentSlotsName != null) {
                const intentSlotsNameValues: any[] = Array.isArray(intentSlotsName) ? intentSlotsName : [intentSlotsName];
                intentSlotsNameValues.forEach(val => queryParams.push({ key: 'intent.slots.name', value: val!.toString() }));
            }
            if(interactionType != null) {
                const interactionTypeValues: any[] = Array.isArray(interactionType) ? interactionType : [interactionType];
                interactionTypeValues.forEach(val => queryParams.push({ key: 'interactionType', value: val!.toString() }));
            }
            if(publicationStatus != null) {
                const publicationStatusValues: any[] = Array.isArray(publicationStatus) ? publicationStatus : [publicationStatus];
                publicationStatusValues.forEach(val => queryParams.push({ key: 'publicationStatus', value: val!.toString() }));
            }
            if(utteranceText != null) {
                const utteranceTextValues: any[] = Array.isArray(utteranceText) ? utteranceText : [utteranceText];
                utteranceTextValues.forEach(val => queryParams.push({ key: 'utteranceText', value: val!.toString() }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/history/intentRequests";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns a list of utterance items for the given skill.");
            errorDefinitions.set(400, "Bad Request.");
            errorDefinitions.set(401, "Unauthorized.");
            errorDefinitions.set(404, "Skill Not Found.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * 
         * @param {string} skillId The skill ID.
         * @param {string} stage The stage of the skill to be used for evaluation. An error will be returned if this skill stage is not enabled on the account used for evaluation.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} sortDirection Sets the sorting direction of the result items. When set to &#39;asc&#39; these items are returned in ascending order of sortField value and when set to &#39;desc&#39; these items are returned in descending order of sortField value.
         * @param {string} sortField Sets the field on which the sorting would be applied.
         * @param {Array<v1.skill.history.LocaleInQuery>} locale 
         * @param {Array<v1.skill.history.DialogActName>} dialogActName A filter used to retrieve items where the dialogAct name is equal to the given value. * &#x60;Dialog.ElicitSlot&#x60;: Alexa asked the user for the value of a specific slot. (https://developer.amazon.com/docs/custom-skills/dialog-interface-reference.html#elicitslot) * &#x60;Dialog.ConfirmSlot&#x60;: Alexa confirmed the value of a specific slot before continuing with the dialog. (https://developer.amazon.com/docs/custom-skills/dialog-interface-reference.html#confirmslot) * &#x60;Dialog.ConfirmIntent&#x60;: Alexa confirmed the all the information the user has provided for the intent before the skill took action. (https://developer.amazon.com/docs/custom-skills/dialog-interface-reference.html#confirmintent) 
         * @param {Array<v1.skill.history.IntentConfidenceBin>} intentConfidenceBin 
         * @param {Array<string>} intentName A filter used to retrieve items where the intent name is equal to the given value.
         * @param {Array<string>} intentSlotsName A filter used to retrieve items where the one of the slot names is equal to the given value.
         * @param {Array<v1.skill.history.InteractionType>} interactionType 
         * @param {Array<v1.skill.history.PublicationStatus>} publicationStatus 
         * @param {Array<string>} utteranceText A filter used to retrieve items where the utterance text contains the given phrase. Each filter value can be at-least 1 character and at-most 100 characters long.
         */
        async getUtteranceDataV1(skillId : string, stage : string, nextToken? : string, maxResults? : number, sortDirection? : string, sortField? : string, locale? : Array<v1.skill.history.LocaleInQuery>, dialogActName? : Array<v1.skill.history.DialogActName>, intentConfidenceBin? : Array<v1.skill.history.IntentConfidenceBin>, intentName? : Array<string>, intentSlotsName? : Array<string>, interactionType? : Array<v1.skill.history.InteractionType>, publicationStatus? : Array<v1.skill.history.PublicationStatus>, utteranceText? : Array<string>) : Promise<v1.skill.history.IntentRequests> {
                const apiResponse: ApiResponse = await this.callGetUtteranceDataV1(skillId, stage, nextToken, maxResults, sortDirection, sortField, locale, dialogActName, intentConfidenceBin, intentName, intentSlotsName, interactionType, publicationStatus, utteranceText);
                return apiResponse.body as v1.skill.history.IntentRequests;
        }
        /**
         * Creates a new import for a skill with given skillId. 
         * @param {v1.skill.UpdateSkillWithPackageRequest} updateSkillWithPackageRequest Defines the request body for updatePackage API.
         * @param {string} skillId The skill ID.
         * @param {string} ifMatch Request header that specified an entity tag. The server will update the resource only if the eTag matches with the resource&#39;s current eTag.
         */
        async callImportSkillPackageV1(updateSkillWithPackageRequest : v1.skill.UpdateSkillWithPackageRequest, skillId : string, ifMatch? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callImportSkillPackageV1';
            // verify required parameter 'updateSkillWithPackageRequest' is not null or undefined
            if (updateSkillWithPackageRequest == null) {
                throw new Error(`Required parameter updateSkillWithPackageRequest was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });
            if(ifMatch != null) {
                headerParams.push({ key : 'If-Match', value : ifMatch });
            }

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/imports";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(202, "Accepted.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(409, "The request could not be completed due to a conflict with the current state of the target resource.");
            errorDefinitions.set(412, "Precondition failed.");
            errorDefinitions.set(413, "Payload too large.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, updateSkillWithPackageRequest, errorDefinitions);
        }
        
        /**
         * Creates a new import for a skill with given skillId. 
         * @param {v1.skill.UpdateSkillWithPackageRequest} updateSkillWithPackageRequest Defines the request body for updatePackage API.
         * @param {string} skillId The skill ID.
         * @param {string} ifMatch Request header that specified an entity tag. The server will update the resource only if the eTag matches with the resource&#39;s current eTag.
         */
        async importSkillPackageV1(updateSkillWithPackageRequest : v1.skill.UpdateSkillWithPackageRequest, skillId : string, ifMatch? : string) : Promise<void> {
                await this.callImportSkillPackageV1(updateSkillWithPackageRequest, skillId, ifMatch);
        }
        /**
         * This is a synchronous API that invokes the Lambda or third party HTTPS endpoint for a given skill. A successful response will contain information related to what endpoint was called, payload sent to and received from the endpoint. In cases where requests to this API results in an error, the response will contain an error code and a description of the problem. In cases where invoking the skill endpoint specifically fails, the response will contain a status attribute indicating that a failure occurred and details about what was sent to the endpoint. The skill must belong to and be enabled by the user of this API. Also, note that calls to the skill endpoint will timeout after 10 seconds. 
         * @param {string} skillId The skill ID.
         * @param {v1.skill.invocations.InvokeSkillRequest} invokeSkillRequest Payload sent to the skill invocation API.
         */
        async callInvokeSkillV1(skillId : string, invokeSkillRequest : v1.skill.invocations.InvokeSkillRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callInvokeSkillV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'invokeSkillRequest' is not null or undefined
            if (invokeSkillRequest == null) {
                throw new Error(`Required parameter invokeSkillRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/invocations";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Skill was invoked.");
            errorDefinitions.set(400, "Bad request due to invalid or missing data.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "API user does not have permission to call this API or is currently in a state that does not allow invocation of this skill. ");
            errorDefinitions.set(404, "The specified skill does not exist.");
            errorDefinitions.set(429, "API user has exceeded the permitted request rate.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, invokeSkillRequest, errorDefinitions);
        }
        
        /**
         * This is a synchronous API that invokes the Lambda or third party HTTPS endpoint for a given skill. A successful response will contain information related to what endpoint was called, payload sent to and received from the endpoint. In cases where requests to this API results in an error, the response will contain an error code and a description of the problem. In cases where invoking the skill endpoint specifically fails, the response will contain a status attribute indicating that a failure occurred and details about what was sent to the endpoint. The skill must belong to and be enabled by the user of this API. Also, note that calls to the skill endpoint will timeout after 10 seconds. 
         * @param {string} skillId The skill ID.
         * @param {v1.skill.invocations.InvokeSkillRequest} invokeSkillRequest Payload sent to the skill invocation API.
         */
        async invokeSkillV1(skillId : string, invokeSkillRequest : v1.skill.invocations.InvokeSkillRequest) : Promise<v1.skill.invocations.InvokeSkillResponse> {
                const apiResponse: ApiResponse = await this.callInvokeSkillV1(skillId, invokeSkillRequest);
                return apiResponse.body as v1.skill.invocations.InvokeSkillResponse;
        }
        /**
         * Get analytic metrics report of skill usage.
         * @param {string} skillId The skill ID.
         * @param {string} startTime The start time of query.
         * @param {string} endTime The end time of query (The maximum time duration is 1 week)
         * @param {string} period The aggregation period to use when retrieving the metric, follows ISO_8601#Durations format.
         * @param {string} metric A distinct set of logic which predictably returns a set of data.
         * @param {string} stage The stage of the skill (live, development).
         * @param {string} skillType The type of the skill (custom, smartHome and flashBriefing).
         * @param {string} intent The intent of the skill.
         * @param {string} locale The locale for the skill. e.g. en-GB, en-US, de-DE and etc.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         */
        async callGetSkillMetricsV1(skillId : string, startTime : string, endTime : string, period : string, metric : string, stage : string, skillType : string, intent? : string, locale? : string, maxResults? : number, nextToken? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetSkillMetricsV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'startTime' is not null or undefined
            if (startTime == null) {
                throw new Error(`Required parameter startTime was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'endTime' is not null or undefined
            if (endTime == null) {
                throw new Error(`Required parameter endTime was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'period' is not null or undefined
            if (period == null) {
                throw new Error(`Required parameter period was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'metric' is not null or undefined
            if (metric == null) {
                throw new Error(`Required parameter metric was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'skillType' is not null or undefined
            if (skillType == null) {
                throw new Error(`Required parameter skillType was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            const startTimeValues: any[] = Array.isArray(startTime) ? startTime : [startTime];
            startTimeValues.forEach(val => queryParams.push({ key: 'startTime', value: val!.toString() }));
            const endTimeValues: any[] = Array.isArray(endTime) ? endTime : [endTime];
            endTimeValues.forEach(val => queryParams.push({ key: 'endTime', value: val!.toString() }));
            const periodValues: any[] = Array.isArray(period) ? period : [period];
            periodValues.forEach(val => queryParams.push({ key: 'period', value: val }));
            const metricValues: any[] = Array.isArray(metric) ? metric : [metric];
            metricValues.forEach(val => queryParams.push({ key: 'metric', value: val }));
            const stageValues: any[] = Array.isArray(stage) ? stage : [stage];
            stageValues.forEach(val => queryParams.push({ key: 'stage', value: val }));
            const skillTypeValues: any[] = Array.isArray(skillType) ? skillType : [skillType];
            skillTypeValues.forEach(val => queryParams.push({ key: 'skillType', value: val }));
            if(intent != null) {
                const intentValues: any[] = Array.isArray(intent) ? intent : [intent];
                intentValues.forEach(val => queryParams.push({ key: 'intent', value: val }));
            }
            if(locale != null) {
                const localeValues: any[] = Array.isArray(locale) ? locale : [locale];
                localeValues.forEach(val => queryParams.push({ key: 'locale', value: val }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/metrics";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Get analytic metrics report successfully.");
            errorDefinitions.set(400, "Bad request due to invalid or missing data.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get analytic metrics report of skill usage.
         * @param {string} skillId The skill ID.
         * @param {string} startTime The start time of query.
         * @param {string} endTime The end time of query (The maximum time duration is 1 week)
         * @param {string} period The aggregation period to use when retrieving the metric, follows ISO_8601#Durations format.
         * @param {string} metric A distinct set of logic which predictably returns a set of data.
         * @param {string} stage The stage of the skill (live, development).
         * @param {string} skillType The type of the skill (custom, smartHome and flashBriefing).
         * @param {string} intent The intent of the skill.
         * @param {string} locale The locale for the skill. e.g. en-GB, en-US, de-DE and etc.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         */
        async getSkillMetricsV1(skillId : string, startTime : string, endTime : string, period : string, metric : string, stage : string, skillType : string, intent? : string, locale? : string, maxResults? : number, nextToken? : string) : Promise<v1.skill.metrics.GetMetricDataResponse> {
                const apiResponse: ApiResponse = await this.callGetSkillMetricsV1(skillId, startTime, endTime, period, metric, stage, skillType, intent, locale, maxResults, nextToken);
                return apiResponse.body as v1.skill.metrics.GetMetricDataResponse;
        }
        /**
         * 
         * @param {string} skillId The skill ID.
         * @param {string} annotationId Identifier of the NLU annotation set.
         * @param {string} accept Standard HTTP. Pass &#x60;application/json&#x60; or &#x60;test/csv&#x60; for GET calls. 
         */
        async callGetAnnotationsForNLUAnnotationSetsV1(skillId : string, annotationId : string, accept : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetAnnotationsForNLUAnnotationSetsV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'annotationId' is not null or undefined
            if (annotationId == null) {
                throw new Error(`Required parameter annotationId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'accept' is not null or undefined
            if (accept == null) {
                throw new Error(`Required parameter accept was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });
            headerParams.push({ key : 'Accept', value : accept });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('annotationId', annotationId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/nluAnnotationSets/{annotationId}/annotations";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "The specific version of a NLU annotation set has the content.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * 
         * @param {string} skillId The skill ID.
         * @param {string} annotationId Identifier of the NLU annotation set.
         * @param {string} accept Standard HTTP. Pass &#x60;application/json&#x60; or &#x60;test/csv&#x60; for GET calls. 
         */
        async getAnnotationsForNLUAnnotationSetsV1(skillId : string, annotationId : string, accept : string) : Promise<void> {
                await this.callGetAnnotationsForNLUAnnotationSetsV1(skillId, annotationId, accept);
        }
        /**
         * API which replaces the annotations in NLU annotation set. 
         * @param {string} skillId The skill ID.
         * @param {string} annotationId Identifier of the NLU annotation set.
         * @param {string} contentType Standard HTTP. Pass &#x60;application/json&#x60; or &#x60;test/csv&#x60; for POST calls with a json/csv body. 
         * @param {v1.skill.nlu.annotationSets.UpdateNLUAnnotationSetAnnotationsRequest} updateNLUAnnotationSetAnnotationsRequest Payload sent to the update NLU annotation set API.
         */
        async callUpdateAnnotationsForNLUAnnotationSetsV1(skillId : string, annotationId : string, contentType : string, updateNLUAnnotationSetAnnotationsRequest : v1.skill.nlu.annotationSets.UpdateNLUAnnotationSetAnnotationsRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callUpdateAnnotationsForNLUAnnotationSetsV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'annotationId' is not null or undefined
            if (annotationId == null) {
                throw new Error(`Required parameter annotationId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'contentType' is not null or undefined
            if (contentType == null) {
                throw new Error(`Required parameter contentType was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'updateNLUAnnotationSetAnnotationsRequest' is not null or undefined
            if (updateNLUAnnotationSetAnnotationsRequest == null) {
                throw new Error(`Required parameter updateNLUAnnotationSetAnnotationsRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });
            headerParams.push({ key : 'Content-Type', value : contentType });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('annotationId', annotationId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/nluAnnotationSets/{annotationId}/annotations";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "NLU annotation set exists and starts the update.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, updateNLUAnnotationSetAnnotationsRequest, errorDefinitions);
        }
        
        /**
         * API which replaces the annotations in NLU annotation set. 
         * @param {string} skillId The skill ID.
         * @param {string} annotationId Identifier of the NLU annotation set.
         * @param {string} contentType Standard HTTP. Pass &#x60;application/json&#x60; or &#x60;test/csv&#x60; for POST calls with a json/csv body. 
         * @param {v1.skill.nlu.annotationSets.UpdateNLUAnnotationSetAnnotationsRequest} updateNLUAnnotationSetAnnotationsRequest Payload sent to the update NLU annotation set API.
         */
        async updateAnnotationsForNLUAnnotationSetsV1(skillId : string, annotationId : string, contentType : string, updateNLUAnnotationSetAnnotationsRequest : v1.skill.nlu.annotationSets.UpdateNLUAnnotationSetAnnotationsRequest) : Promise<void> {
                await this.callUpdateAnnotationsForNLUAnnotationSetsV1(skillId, annotationId, contentType, updateNLUAnnotationSetAnnotationsRequest);
        }
        /**
         * API which deletes the NLU annotation set. Developers cannot get/list the deleted annotation set. 
         * @param {string} skillId The skill ID.
         * @param {string} annotationId Identifier of the NLU annotation set.
         */
        async callDeletePropertiesForNLUAnnotationSetsV1(skillId : string, annotationId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callDeletePropertiesForNLUAnnotationSetsV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'annotationId' is not null or undefined
            if (annotationId == null) {
                throw new Error(`Required parameter annotationId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('annotationId', annotationId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/nluAnnotationSets/{annotationId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "NLU annotation set exists and is deleted successfully.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");

            return this.invoke("DELETE", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * API which deletes the NLU annotation set. Developers cannot get/list the deleted annotation set. 
         * @param {string} skillId The skill ID.
         * @param {string} annotationId Identifier of the NLU annotation set.
         */
        async deletePropertiesForNLUAnnotationSetsV1(skillId : string, annotationId : string) : Promise<void> {
                await this.callDeletePropertiesForNLUAnnotationSetsV1(skillId, annotationId);
        }
        /**
         * Return the properties for an NLU annotation set. 
         * @param {string} skillId The skill ID.
         * @param {string} annotationId Identifier of the NLU annotation set.
         */
        async callGetPropertiesForNLUAnnotationSetsV1(skillId : string, annotationId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetPropertiesForNLUAnnotationSetsV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'annotationId' is not null or undefined
            if (annotationId == null) {
                throw new Error(`Required parameter annotationId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('annotationId', annotationId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/nluAnnotationSets/{annotationId}/properties";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "The NLU annotation set exists.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Return the properties for an NLU annotation set. 
         * @param {string} skillId The skill ID.
         * @param {string} annotationId Identifier of the NLU annotation set.
         */
        async getPropertiesForNLUAnnotationSetsV1(skillId : string, annotationId : string) : Promise<v1.skill.nlu.annotationSets.GetNLUAnnotationSetPropertiesResponse> {
                const apiResponse: ApiResponse = await this.callGetPropertiesForNLUAnnotationSetsV1(skillId, annotationId);
                return apiResponse.body as v1.skill.nlu.annotationSets.GetNLUAnnotationSetPropertiesResponse;
        }
        /**
         * API which updates the NLU annotation set properties. Currently, the only data can be updated is annotation set name. 
         * @param {string} skillId The skill ID.
         * @param {string} annotationId Identifier of the NLU annotation set.
         * @param {v1.skill.nlu.annotationSets.UpdateNLUAnnotationSetPropertiesRequest} updateNLUAnnotationSetPropertiesRequest Payload sent to the update NLU annotation set properties API.
         */
        async callUpdatePropertiesForNLUAnnotationSetsV1(skillId : string, annotationId : string, updateNLUAnnotationSetPropertiesRequest : v1.skill.nlu.annotationSets.UpdateNLUAnnotationSetPropertiesRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callUpdatePropertiesForNLUAnnotationSetsV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'annotationId' is not null or undefined
            if (annotationId == null) {
                throw new Error(`Required parameter annotationId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'updateNLUAnnotationSetPropertiesRequest' is not null or undefined
            if (updateNLUAnnotationSetPropertiesRequest == null) {
                throw new Error(`Required parameter updateNLUAnnotationSetPropertiesRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('annotationId', annotationId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/nluAnnotationSets/{annotationId}/properties";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(201, "NLU annotation set exists and properties are updated successfully.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");

            return this.invoke("PUT", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, updateNLUAnnotationSetPropertiesRequest, errorDefinitions);
        }
        
        /**
         * API which updates the NLU annotation set properties. Currently, the only data can be updated is annotation set name. 
         * @param {string} skillId The skill ID.
         * @param {string} annotationId Identifier of the NLU annotation set.
         * @param {v1.skill.nlu.annotationSets.UpdateNLUAnnotationSetPropertiesRequest} updateNLUAnnotationSetPropertiesRequest Payload sent to the update NLU annotation set properties API.
         */
        async updatePropertiesForNLUAnnotationSetsV1(skillId : string, annotationId : string, updateNLUAnnotationSetPropertiesRequest : v1.skill.nlu.annotationSets.UpdateNLUAnnotationSetPropertiesRequest) : Promise<void> {
                await this.callUpdatePropertiesForNLUAnnotationSetsV1(skillId, annotationId, updateNLUAnnotationSetPropertiesRequest);
        }
        /**
         * API which requests all the NLU annotation sets for a skill. Returns the annotationId and properties for each NLU annotation set. Developers can filter the results using locale. Supports paging of results. 
         * @param {string} skillId The skill ID.
         * @param {string} locale filter to NLU annotation set created using this locale
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. Defaults to 10. If more results are present, the response will contain a nextToken and a _link.next href. 
         */
        async callListNLUAnnotationSetsV1(skillId : string, locale? : string, nextToken? : string, maxResults? : number) : Promise<ApiResponse> {
            const __operationId__ = 'callListNLUAnnotationSetsV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(locale != null) {
                const localeValues: any[] = Array.isArray(locale) ? locale : [locale];
                localeValues.forEach(val => queryParams.push({ key: 'locale', value: val }));
            }
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/nluAnnotationSets";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "NLU annotation sets are returned.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * API which requests all the NLU annotation sets for a skill. Returns the annotationId and properties for each NLU annotation set. Developers can filter the results using locale. Supports paging of results. 
         * @param {string} skillId The skill ID.
         * @param {string} locale filter to NLU annotation set created using this locale
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. Defaults to 10. If more results are present, the response will contain a nextToken and a _link.next href. 
         */
        async listNLUAnnotationSetsV1(skillId : string, locale? : string, nextToken? : string, maxResults? : number) : Promise<v1.skill.nlu.annotationSets.ListNLUAnnotationSetsResponse> {
                const apiResponse: ApiResponse = await this.callListNLUAnnotationSetsV1(skillId, locale, nextToken, maxResults);
                return apiResponse.body as v1.skill.nlu.annotationSets.ListNLUAnnotationSetsResponse;
        }
        /**
         * This is an API that creates a new NLU annotation set with properties and returns the annotationId. 
         * @param {string} skillId The skill ID.
         * @param {v1.skill.nlu.annotationSets.CreateNLUAnnotationSetRequest} createNLUAnnotationSetRequest Payload sent to the create NLU annotation set API.
         */
        async callCreateNLUAnnotationSetV1(skillId : string, createNLUAnnotationSetRequest : v1.skill.nlu.annotationSets.CreateNLUAnnotationSetRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callCreateNLUAnnotationSetV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'createNLUAnnotationSetRequest' is not null or undefined
            if (createNLUAnnotationSetRequest == null) {
                throw new Error(`Required parameter createNLUAnnotationSetRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/nluAnnotationSets";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(201, "NLU annotation set created successfully.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, createNLUAnnotationSetRequest, errorDefinitions);
        }
        
        /**
         * This is an API that creates a new NLU annotation set with properties and returns the annotationId. 
         * @param {string} skillId The skill ID.
         * @param {v1.skill.nlu.annotationSets.CreateNLUAnnotationSetRequest} createNLUAnnotationSetRequest Payload sent to the create NLU annotation set API.
         */
        async createNLUAnnotationSetV1(skillId : string, createNLUAnnotationSetRequest : v1.skill.nlu.annotationSets.CreateNLUAnnotationSetRequest) : Promise<v1.skill.nlu.annotationSets.CreateNLUAnnotationSetResponse> {
                const apiResponse: ApiResponse = await this.callCreateNLUAnnotationSetV1(skillId, createNLUAnnotationSetRequest);
                return apiResponse.body as v1.skill.nlu.annotationSets.CreateNLUAnnotationSetResponse;
        }
        /**
         * API which requests top level information about the evaluation like the current state of the job, status of the evaluation (if complete). Also returns data used to start the job, like the number of test cases, stage, locale, and start time. This should be considered the 'cheap' operation while getResultForNLUEvaluations is 'expensive'. 
         * @param {string} skillId The skill ID.
         * @param {string} evaluationId Identifier of the evaluation.
         */
        async callGetNLUEvaluationV1(skillId : string, evaluationId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetNLUEvaluationV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'evaluationId' is not null or undefined
            if (evaluationId == null) {
                throw new Error(`Required parameter evaluationId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('evaluationId', evaluationId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/nluEvaluations/{evaluationId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Evaluation exists and its status is queryable.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * API which requests top level information about the evaluation like the current state of the job, status of the evaluation (if complete). Also returns data used to start the job, like the number of test cases, stage, locale, and start time. This should be considered the 'cheap' operation while getResultForNLUEvaluations is 'expensive'. 
         * @param {string} skillId The skill ID.
         * @param {string} evaluationId Identifier of the evaluation.
         */
        async getNLUEvaluationV1(skillId : string, evaluationId : string) : Promise<v1.skill.nlu.evaluations.GetNLUEvaluationResponse> {
                const apiResponse: ApiResponse = await this.callGetNLUEvaluationV1(skillId, evaluationId);
                return apiResponse.body as v1.skill.nlu.evaluations.GetNLUEvaluationResponse;
        }
        /**
         * Paginated API which returns the test case results of an evaluation. This should be considered the 'expensive' operation while getNluEvaluation is 'cheap'. 
         * @param {string} skillId The skill ID.
         * @param {string} evaluationId Identifier of the evaluation.
         * @param {string} sortField 
         * @param {string} testCaseStatus only returns test cases with this status
         * @param {string} actualIntentName only returns test cases with intents which resolve to this intent
         * @param {string} expectedIntentName only returns test cases with intents which are expected to be this intent
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. Defaults to 1000. If more results are present, the response will contain a nextToken and a _link.next href. 
         */
        async callGetResultForNLUEvaluationsV1(skillId : string, evaluationId : string, sortField? : string, testCaseStatus? : string, actualIntentName? : string, expectedIntentName? : string, nextToken? : string, maxResults? : number) : Promise<ApiResponse> {
            const __operationId__ = 'callGetResultForNLUEvaluationsV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'evaluationId' is not null or undefined
            if (evaluationId == null) {
                throw new Error(`Required parameter evaluationId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(sortField != null) {
                const sortFieldValues: any[] = Array.isArray(sortField) ? sortField : [sortField];
                sortFieldValues.forEach(val => queryParams.push({ key: 'sort.field', value: val }));
            }
            if(testCaseStatus != null) {
                const testCaseStatusValues: any[] = Array.isArray(testCaseStatus) ? testCaseStatus : [testCaseStatus];
                testCaseStatusValues.forEach(val => queryParams.push({ key: 'testCaseStatus', value: val }));
            }
            if(actualIntentName != null) {
                const actualIntentNameValues: any[] = Array.isArray(actualIntentName) ? actualIntentName : [actualIntentName];
                actualIntentNameValues.forEach(val => queryParams.push({ key: 'actualIntentName', value: val }));
            }
            if(expectedIntentName != null) {
                const expectedIntentNameValues: any[] = Array.isArray(expectedIntentName) ? expectedIntentName : [expectedIntentName];
                expectedIntentNameValues.forEach(val => queryParams.push({ key: 'expectedIntentName', value: val }));
            }
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('evaluationId', evaluationId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/nluEvaluations/{evaluationId}/results";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Evaluation exists and its status is queryable.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Paginated API which returns the test case results of an evaluation. This should be considered the 'expensive' operation while getNluEvaluation is 'cheap'. 
         * @param {string} skillId The skill ID.
         * @param {string} evaluationId Identifier of the evaluation.
         * @param {string} sortField 
         * @param {string} testCaseStatus only returns test cases with this status
         * @param {string} actualIntentName only returns test cases with intents which resolve to this intent
         * @param {string} expectedIntentName only returns test cases with intents which are expected to be this intent
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. Defaults to 1000. If more results are present, the response will contain a nextToken and a _link.next href. 
         */
        async getResultForNLUEvaluationsV1(skillId : string, evaluationId : string, sortField? : string, testCaseStatus? : string, actualIntentName? : string, expectedIntentName? : string, nextToken? : string, maxResults? : number) : Promise<v1.skill.nlu.evaluations.GetNLUEvaluationResultsResponse> {
                const apiResponse: ApiResponse = await this.callGetResultForNLUEvaluationsV1(skillId, evaluationId, sortField, testCaseStatus, actualIntentName, expectedIntentName, nextToken, maxResults);
                return apiResponse.body as v1.skill.nlu.evaluations.GetNLUEvaluationResultsResponse;
        }
        /**
         * API which requests recently run nlu evaluations started by a vendor for a skill. Returns the evaluation id and some of the parameters used to start the evaluation. Developers can filter the results using locale and stage. Supports paging of results. 
         * @param {string} skillId The skill ID.
         * @param {string} locale filter to evaluations started using this locale
         * @param {string} stage filter to evaluations started using this stage
         * @param {string} annotationId filter to evaluations started using this annotationId
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. Defaults to 10. If more results are present, the response will contain a nextToken and a _link.next href. 
         */
        async callListNLUEvaluationsV1(skillId : string, locale? : string, stage? : string, annotationId? : string, nextToken? : string, maxResults? : number) : Promise<ApiResponse> {
            const __operationId__ = 'callListNLUEvaluationsV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(locale != null) {
                const localeValues: any[] = Array.isArray(locale) ? locale : [locale];
                localeValues.forEach(val => queryParams.push({ key: 'locale', value: val }));
            }
            if(stage != null) {
                const stageValues: any[] = Array.isArray(stage) ? stage : [stage];
                stageValues.forEach(val => queryParams.push({ key: 'stage', value: val }));
            }
            if(annotationId != null) {
                const annotationIdValues: any[] = Array.isArray(annotationId) ? annotationId : [annotationId];
                annotationIdValues.forEach(val => queryParams.push({ key: 'annotationId', value: val }));
            }
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/nluEvaluations";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Evaluations are returned.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * API which requests recently run nlu evaluations started by a vendor for a skill. Returns the evaluation id and some of the parameters used to start the evaluation. Developers can filter the results using locale and stage. Supports paging of results. 
         * @param {string} skillId The skill ID.
         * @param {string} locale filter to evaluations started using this locale
         * @param {string} stage filter to evaluations started using this stage
         * @param {string} annotationId filter to evaluations started using this annotationId
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. Defaults to 10. If more results are present, the response will contain a nextToken and a _link.next href. 
         */
        async listNLUEvaluationsV1(skillId : string, locale? : string, stage? : string, annotationId? : string, nextToken? : string, maxResults? : number) : Promise<v1.skill.nlu.evaluations.ListNLUEvaluationsResponse> {
                const apiResponse: ApiResponse = await this.callListNLUEvaluationsV1(skillId, locale, stage, annotationId, nextToken, maxResults);
                return apiResponse.body as v1.skill.nlu.evaluations.ListNLUEvaluationsResponse;
        }
        /**
         * This is an asynchronous API that starts an evaluation against the NLU model built by the skill's interaction model. The operation outputs an evaluationId which allows the retrieval of the current status of the operation and the results upon completion. This operation is unified, meaning both internal and external skill developers may use it evaluate NLU models. 
         * @param {v1.skill.nlu.evaluations.EvaluateNLURequest} evaluateNLURequest Payload sent to the evaluate NLU API.
         * @param {string} skillId The skill ID.
         */
        async callCreateNLUEvaluationsV1(evaluateNLURequest : v1.skill.nlu.evaluations.EvaluateNLURequest, skillId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callCreateNLUEvaluationsV1';
            // verify required parameter 'evaluateNLURequest' is not null or undefined
            if (evaluateNLURequest == null) {
                throw new Error(`Required parameter evaluateNLURequest was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/nluEvaluations";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Evaluation has successfully begun.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, evaluateNLURequest, errorDefinitions);
        }
        
        /**
         * This is an asynchronous API that starts an evaluation against the NLU model built by the skill's interaction model. The operation outputs an evaluationId which allows the retrieval of the current status of the operation and the results upon completion. This operation is unified, meaning both internal and external skill developers may use it evaluate NLU models. 
         * @param {v1.skill.nlu.evaluations.EvaluateNLURequest} evaluateNLURequest Payload sent to the evaluate NLU API.
         * @param {string} skillId The skill ID.
         */
        async createNLUEvaluationsV1(evaluateNLURequest : v1.skill.nlu.evaluations.EvaluateNLURequest, skillId : string) : Promise<v1.skill.nlu.evaluations.EvaluateResponse> {
                const apiResponse: ApiResponse = await this.callCreateNLUEvaluationsV1(evaluateNLURequest, skillId);
                return apiResponse.body as v1.skill.nlu.evaluations.EvaluateResponse;
        }
        /**
         * If the skill is in certified stage, initiate publishing immediately or set a date at which the skill can publish at. 
         * @param {string} skillId The skill ID.
         * @param {string} acceptLanguage User&#39;s locale/language in context.
         * @param {v1.skill.publication.PublishSkillRequest} publishSkillRequest Defines the request body for publish skill API.
         */
        async callPublishSkillV1(skillId : string, acceptLanguage : string, publishSkillRequest? : v1.skill.publication.PublishSkillRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callPublishSkillV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'acceptLanguage' is not null or undefined
            if (acceptLanguage == null) {
                throw new Error(`Required parameter acceptLanguage was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });
            headerParams.push({ key : 'Accept-Language', value : acceptLanguage });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/publications";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(202, "Successfully processed skill publication request.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, publishSkillRequest, errorDefinitions);
        }
        
        /**
         * If the skill is in certified stage, initiate publishing immediately or set a date at which the skill can publish at. 
         * @param {string} skillId The skill ID.
         * @param {string} acceptLanguage User&#39;s locale/language in context.
         * @param {v1.skill.publication.PublishSkillRequest} publishSkillRequest Defines the request body for publish skill API.
         */
        async publishSkillV1(skillId : string, acceptLanguage : string, publishSkillRequest? : v1.skill.publication.PublishSkillRequest) : Promise<v1.skill.publication.SkillPublicationResponse> {
                const apiResponse: ApiResponse = await this.callPublishSkillV1(skillId, acceptLanguage, publishSkillRequest);
                return apiResponse.body as v1.skill.publication.SkillPublicationResponse;
        }
        /**
         * Retrieves the latest skill publishing details of the certified stage of the skill. The publishesAtDate and status of skill publishing. 
         * @param {string} skillId The skill ID.
         * @param {string} acceptLanguage User&#39;s locale/language in context.
         */
        async callGetSkillPublicationsV1(skillId : string, acceptLanguage : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetSkillPublicationsV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'acceptLanguage' is not null or undefined
            if (acceptLanguage == null) {
                throw new Error(`Required parameter acceptLanguage was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });
            headerParams.push({ key : 'Accept-Language', value : acceptLanguage });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/publications/~latest";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Successfully retrieved latest skill publication information.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Retrieves the latest skill publishing details of the certified stage of the skill. The publishesAtDate and status of skill publishing. 
         * @param {string} skillId The skill ID.
         * @param {string} acceptLanguage User&#39;s locale/language in context.
         */
        async getSkillPublicationsV1(skillId : string, acceptLanguage : string) : Promise<v1.skill.publication.SkillPublicationResponse> {
                const apiResponse: ApiResponse = await this.callGetSkillPublicationsV1(skillId, acceptLanguage);
                return apiResponse.body as v1.skill.publication.SkillPublicationResponse;
        }
        /**
         * Submit a target skill version to rollback to. Only one rollback or publish operation can be outstanding for a given skillId.
         * @param {string} skillId The skill ID.
         * @param {v1.skill.CreateRollbackRequest} createRollbackRequest defines the request body to create a rollback request
         */
        async callRollbackSkillV1(skillId : string, createRollbackRequest : v1.skill.CreateRollbackRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callRollbackSkillV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'createRollbackRequest' is not null or undefined
            if (createRollbackRequest == null) {
                throw new Error(`Required parameter createRollbackRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/rollbacks";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(201, "Rollback request created; Returns the generated identifier to track the rollback request and returns a URL to track the status in Location header.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(409, "The request could not be completed due to a conflict with the current state of the target resource.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, createRollbackRequest, errorDefinitions);
        }
        
        /**
         * Submit a target skill version to rollback to. Only one rollback or publish operation can be outstanding for a given skillId.
         * @param {string} skillId The skill ID.
         * @param {v1.skill.CreateRollbackRequest} createRollbackRequest defines the request body to create a rollback request
         */
        async rollbackSkillV1(skillId : string, createRollbackRequest : v1.skill.CreateRollbackRequest) : Promise<v1.skill.CreateRollbackResponse> {
                const apiResponse: ApiResponse = await this.callRollbackSkillV1(skillId, createRollbackRequest);
                return apiResponse.body as v1.skill.CreateRollbackResponse;
        }
        /**
         * Get the rollback status of a skill given an associated rollbackRequestId. Use ~latest in place of rollbackRequestId to get the latest rollback status.
         * @param {string} skillId The skill ID.
         * @param {string} rollbackRequestId Defines the identifier for a rollback request. If set to ~latest, request returns the status of the latest rollback request.
         */
        async callGetRollbackForSkillV1(skillId : string, rollbackRequestId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetRollbackForSkillV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'rollbackRequestId' is not null or undefined
            if (rollbackRequestId == null) {
                throw new Error(`Required parameter rollbackRequestId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('rollbackRequestId', rollbackRequestId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/rollbacks/{rollbackRequestId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns the rollback status for a given skillId and rollbackRequestId. Returns the latest rollback status if ~latest is used in place of rollbackRequestId.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get the rollback status of a skill given an associated rollbackRequestId. Use ~latest in place of rollbackRequestId to get the latest rollback status.
         * @param {string} skillId The skill ID.
         * @param {string} rollbackRequestId Defines the identifier for a rollback request. If set to ~latest, request returns the status of the latest rollback request.
         */
        async getRollbackForSkillV1(skillId : string, rollbackRequestId : string) : Promise<v1.skill.RollbackRequestStatus> {
                const apiResponse: ApiResponse = await this.callGetRollbackForSkillV1(skillId, rollbackRequestId);
                return apiResponse.body as v1.skill.RollbackRequestStatus;
        }
        /**
         * This is an asynchronous API that simulates a skill execution in the Alexa eco-system given an utterance text of what a customer would say to Alexa. A successful response will contain a header with the location of the simulation resource. In cases where requests to this API results in an error, the response will contain an error code and a description of the problem. The skill being simulated must be in development stage, and it must also belong to and be enabled by the user of this API. Concurrent requests per user is currently not supported. 
         * @param {string} skillId The skill ID.
         * @param {v1.skill.simulations.SimulationsApiRequest} simulationsApiRequest Payload sent to the skill simulation API.
         */
        async callSimulateSkillV1(skillId : string, simulationsApiRequest : v1.skill.simulations.SimulationsApiRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callSimulateSkillV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'simulationsApiRequest' is not null or undefined
            if (simulationsApiRequest == null) {
                throw new Error(`Required parameter simulationsApiRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/simulations";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Skill simulation has successfully began.");
            errorDefinitions.set(400, "Bad request due to invalid or missing data.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "API user does not have permission to call this API or is currently in a state that does not allow simulation of this skill. ");
            errorDefinitions.set(404, "The specified skill does not exist.");
            errorDefinitions.set(409, "This requests conflicts with another one currently being processed. ");
            errorDefinitions.set(429, "API user has exceeded the permitted request rate.");
            errorDefinitions.set(500, "Internal service error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, simulationsApiRequest, errorDefinitions);
        }
        
        /**
         * This is an asynchronous API that simulates a skill execution in the Alexa eco-system given an utterance text of what a customer would say to Alexa. A successful response will contain a header with the location of the simulation resource. In cases where requests to this API results in an error, the response will contain an error code and a description of the problem. The skill being simulated must be in development stage, and it must also belong to and be enabled by the user of this API. Concurrent requests per user is currently not supported. 
         * @param {string} skillId The skill ID.
         * @param {v1.skill.simulations.SimulationsApiRequest} simulationsApiRequest Payload sent to the skill simulation API.
         */
        async simulateSkillV1(skillId : string, simulationsApiRequest : v1.skill.simulations.SimulationsApiRequest) : Promise<v1.skill.simulations.SimulationsApiResponse> {
                const apiResponse: ApiResponse = await this.callSimulateSkillV1(skillId, simulationsApiRequest);
                return apiResponse.body as v1.skill.simulations.SimulationsApiResponse;
        }
        /**
         * This API gets the result of a previously executed simulation. A successful response will contain the status of the executed simulation. If the simulation successfully completed, the response will also contain information related to skill invocation. In cases where requests to this API results in an error, the response will contain an error code and a description of the problem. In cases where the simulation failed, the response will contain a status attribute indicating that a failure occurred and details about what was sent to the skill endpoint. Note that simulation results are stored for 10 minutes. A request for an expired simulation result will return a 404 HTTP status code. 
         * @param {string} skillId The skill ID.
         * @param {string} simulationId Id of the simulation.
         */
        async callGetSkillSimulationV1(skillId : string, simulationId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetSkillSimulationV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'simulationId' is not null or undefined
            if (simulationId == null) {
                throw new Error(`Required parameter simulationId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('simulationId', simulationId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/simulations/{simulationId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Successfully retrieved skill simulation information.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "API user does not have permission or is currently in a state that does not allow calls to this API. ");
            errorDefinitions.set(404, "The specified skill or simulation does not exist. The error response will contain a description that indicates the specific resource type that was not found. ");
            errorDefinitions.set(429, "API user has exceeded the permitted request rate.");
            errorDefinitions.set(500, "Internal service error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * This API gets the result of a previously executed simulation. A successful response will contain the status of the executed simulation. If the simulation successfully completed, the response will also contain information related to skill invocation. In cases where requests to this API results in an error, the response will contain an error code and a description of the problem. In cases where the simulation failed, the response will contain a status attribute indicating that a failure occurred and details about what was sent to the skill endpoint. Note that simulation results are stored for 10 minutes. A request for an expired simulation result will return a 404 HTTP status code. 
         * @param {string} skillId The skill ID.
         * @param {string} simulationId Id of the simulation.
         */
        async getSkillSimulationV1(skillId : string, simulationId : string) : Promise<v1.skill.simulations.SimulationsApiResponse> {
                const apiResponse: ApiResponse = await this.callGetSkillSimulationV1(skillId, simulationId);
                return apiResponse.body as v1.skill.simulations.SimulationsApiResponse;
        }
        /**
         * Get top level information and status of a Smart Home capability evaluation.
         * @param {string} skillId The skill ID.
         * @param {string} evaluationId A unique ID to identify each Smart Home capability evaluation.
         */
        async callGetSmartHomeCapabilityEvaluationV1(skillId : string, evaluationId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetSmartHomeCapabilityEvaluationV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'evaluationId' is not null or undefined
            if (evaluationId == null) {
                throw new Error(`Required parameter evaluationId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('evaluationId', evaluationId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/smartHome/testing/capabilityEvaluations/{evaluationId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Successfully retrieved the evaluation status.");
            errorDefinitions.set(400, "Bad Request. Returned when the request payload is malformed or when, at least, one required property is missing or invalid. ");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource. ");
            errorDefinitions.set(403, "API user does not have permission or is currently in a state that does not allow calls to this API. ");
            errorDefinitions.set(404, "The specified skill, test plan, or evaluation does not exist. The error response will contain a description that indicates the specific resource type that was not found. ");
            errorDefinitions.set(429, "Exceeded the permitted request limit. Throttling criteria includes total requests, per API and CustomerId. ");
            errorDefinitions.set(0, "Internal server error. ");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get top level information and status of a Smart Home capability evaluation.
         * @param {string} skillId The skill ID.
         * @param {string} evaluationId A unique ID to identify each Smart Home capability evaluation.
         */
        async getSmartHomeCapabilityEvaluationV1(skillId : string, evaluationId : string) : Promise<v1.smartHomeEvaluation.GetSHCapabilityEvaluationResponse> {
                const apiResponse: ApiResponse = await this.callGetSmartHomeCapabilityEvaluationV1(skillId, evaluationId);
                return apiResponse.body as v1.smartHomeEvaluation.GetSHCapabilityEvaluationResponse;
        }
        /**
         * Get test case results for an evaluation run.
         * @param {string} skillId The skill ID.
         * @param {string} evaluationId A unique ID to identify each Smart Home capability evaluation.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         */
        async callGetSmarthomeCapablityEvaluationResultsV1(skillId : string, evaluationId : string, maxResults? : number, nextToken? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetSmarthomeCapablityEvaluationResultsV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'evaluationId' is not null or undefined
            if (evaluationId == null) {
                throw new Error(`Required parameter evaluationId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('evaluationId', evaluationId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/smartHome/testing/capabilityEvaluations/{evaluationId}/results";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Successfully retrieved the evaluation result content.");
            errorDefinitions.set(400, "Bad Request. Returned when the request payload is malformed or when, at least, one required property is missing or invalid. ");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource. ");
            errorDefinitions.set(403, "API user does not have permission or is currently in a state that does not allow calls to this API. ");
            errorDefinitions.set(404, "The specified skill, test plan, or evaluation does not exist. The error response will contain a description that indicates the specific resource type that was not found. ");
            errorDefinitions.set(429, "Exceeded the permitted request limit. Throttling criteria includes total requests, per API and CustomerId. ");
            errorDefinitions.set(0, "Internal server error. ");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get test case results for an evaluation run.
         * @param {string} skillId The skill ID.
         * @param {string} evaluationId A unique ID to identify each Smart Home capability evaluation.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         */
        async getSmarthomeCapablityEvaluationResultsV1(skillId : string, evaluationId : string, maxResults? : number, nextToken? : string) : Promise<v1.smartHomeEvaluation.GetSHCapabilityEvaluationResultsResponse> {
                const apiResponse: ApiResponse = await this.callGetSmarthomeCapablityEvaluationResultsV1(skillId, evaluationId, maxResults, nextToken);
                return apiResponse.body as v1.smartHomeEvaluation.GetSHCapabilityEvaluationResultsResponse;
        }
        /**
         * List Smart Home capability evaluation runs for a skill.
         * @param {string} skillId The skill ID.
         * @param {string} stage The stage of the skill to be used for evaluation. An error will be returned if this skill stage is not enabled on the account used for evaluation.
         * @param {string} startTimestampFrom The begnning of the start time to query evaluation result.
         * @param {string} startTimestampTo The end of the start time to query evaluation result.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         */
        async callListSmarthomeCapabilityEvaluationsV1(skillId : string, stage : string, startTimestampFrom? : string, startTimestampTo? : string, maxResults? : number, nextToken? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callListSmarthomeCapabilityEvaluationsV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            const stageValues: any[] = Array.isArray(stage) ? stage : [stage];
            stageValues.forEach(val => queryParams.push({ key: 'stage', value: val }));
            if(startTimestampFrom != null) {
                const startTimestampFromValues: any[] = Array.isArray(startTimestampFrom) ? startTimestampFrom : [startTimestampFrom];
                startTimestampFromValues.forEach(val => queryParams.push({ key: 'startTimestampFrom', value: val!.toString() }));
            }
            if(startTimestampTo != null) {
                const startTimestampToValues: any[] = Array.isArray(startTimestampTo) ? startTimestampTo : [startTimestampTo];
                startTimestampToValues.forEach(val => queryParams.push({ key: 'startTimestampTo', value: val!.toString() }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/smartHome/testing/capabilityEvaluations";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Successfully retrieved the evaluation infomation.");
            errorDefinitions.set(400, "Bad Request. Returned when the request payload is malformed or when, at least, one required property is missing or invalid. ");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource. ");
            errorDefinitions.set(403, "API user does not have permission or is currently in a state that does not allow calls to this API. ");
            errorDefinitions.set(404, "The specified skill, test plan, or evaluation does not exist. The error response will contain a description that indicates the specific resource type that was not found. ");
            errorDefinitions.set(429, "Exceeded the permitted request limit. Throttling criteria includes total requests, per API and CustomerId. ");
            errorDefinitions.set(0, "Internal server error. ");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * List Smart Home capability evaluation runs for a skill.
         * @param {string} skillId The skill ID.
         * @param {string} stage The stage of the skill to be used for evaluation. An error will be returned if this skill stage is not enabled on the account used for evaluation.
         * @param {string} startTimestampFrom The begnning of the start time to query evaluation result.
         * @param {string} startTimestampTo The end of the start time to query evaluation result.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         */
        async listSmarthomeCapabilityEvaluationsV1(skillId : string, stage : string, startTimestampFrom? : string, startTimestampTo? : string, maxResults? : number, nextToken? : string) : Promise<v1.smartHomeEvaluation.ListSHCapabilityEvaluationsResponse> {
                const apiResponse: ApiResponse = await this.callListSmarthomeCapabilityEvaluationsV1(skillId, stage, startTimestampFrom, startTimestampTo, maxResults, nextToken);
                return apiResponse.body as v1.smartHomeEvaluation.ListSHCapabilityEvaluationsResponse;
        }
        /**
         * Start a capability evaluation against a Smart Home skill.
         * @param {string} skillId The skill ID.
         * @param {v1.smartHomeEvaluation.EvaluateSHCapabilityRequest} evaluateSHCapabilityPayload Payload sent to start a capability evaluation against a Smart Home skill.
         */
        async callCreateSmarthomeCapabilityEvaluationV1(skillId : string, evaluateSHCapabilityPayload? : v1.smartHomeEvaluation.EvaluateSHCapabilityRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callCreateSmarthomeCapabilityEvaluationV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/smartHome/testing/capabilityEvaluations";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Evaluation has successfully begun.");
            errorDefinitions.set(400, "Bad Request. Returned when the request payload is malformed or when, at least, one required property is missing or invalid. ");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource. ");
            errorDefinitions.set(403, "API user does not have permission or is currently in a state that does not allow calls to this API. ");
            errorDefinitions.set(404, "The specified skill, test plan, or evaluation does not exist. The error response will contain a description that indicates the specific resource type that was not found. ");
            errorDefinitions.set(409, "A test run is already in progress for the specified endpoint. Please retry after some time. ");
            errorDefinitions.set(429, "Exceeded the permitted request limit. Throttling criteria includes total requests, per API and CustomerId. ");
            errorDefinitions.set(0, "Internal server error. ");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, evaluateSHCapabilityPayload, errorDefinitions);
        }
        
        /**
         * Start a capability evaluation against a Smart Home skill.
         * @param {string} skillId The skill ID.
         * @param {v1.smartHomeEvaluation.EvaluateSHCapabilityRequest} evaluateSHCapabilityPayload Payload sent to start a capability evaluation against a Smart Home skill.
         */
        async createSmarthomeCapabilityEvaluationV1(skillId : string, evaluateSHCapabilityPayload? : v1.smartHomeEvaluation.EvaluateSHCapabilityRequest) : Promise<v1.smartHomeEvaluation.EvaluateSHCapabilityResponse> {
                const apiResponse: ApiResponse = await this.callCreateSmarthomeCapabilityEvaluationV1(skillId, evaluateSHCapabilityPayload);
                return apiResponse.body as v1.smartHomeEvaluation.EvaluateSHCapabilityResponse;
        }
        /**
         * List all the test plan names and ids for a given skill ID.
         * @param {string} skillId The skill ID.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         */
        async callListSmarthomeCapabilityTestPlansV1(skillId : string, maxResults? : number, nextToken? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callListSmarthomeCapabilityTestPlansV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/smartHome/testing/capabilityTestPlans";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Successfully got the list of test plans.");
            errorDefinitions.set(400, "Bad Request. Returned when the request payload is malformed or when, at least, one required property is missing or invalid. ");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource. ");
            errorDefinitions.set(403, "API user does not have permission or is currently in a state that does not allow calls to this API. ");
            errorDefinitions.set(404, "The specified skill, test plan, or evaluation does not exist. The error response will contain a description that indicates the specific resource type that was not found. ");
            errorDefinitions.set(429, "Exceeded the permitted request limit. Throttling criteria includes total requests, per API and CustomerId. ");
            errorDefinitions.set(0, "Internal server error. ");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * List all the test plan names and ids for a given skill ID.
         * @param {string} skillId The skill ID.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         */
        async listSmarthomeCapabilityTestPlansV1(skillId : string, maxResults? : number, nextToken? : string) : Promise<v1.smartHomeEvaluation.ListSHCapabilityTestPlansResponse> {
                const apiResponse: ApiResponse = await this.callListSmarthomeCapabilityTestPlansV1(skillId, maxResults, nextToken);
                return apiResponse.body as v1.smartHomeEvaluation.ListSHCapabilityTestPlansResponse;
        }
        /**
         * Returns the ssl certificate sets currently associated with this skill. Sets consist of one ssl certificate blob associated with a region as well as the default certificate for the skill.
         * @param {string} skillId The skill ID.
         */
        async callGetSSLCertificatesV1(skillId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetSSLCertificatesV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/sslCertificateSets/~latest";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Response contains the latest version of the ssl certificates.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Returns the ssl certificate sets currently associated with this skill. Sets consist of one ssl certificate blob associated with a region as well as the default certificate for the skill.
         * @param {string} skillId The skill ID.
         */
        async getSSLCertificatesV1(skillId : string) : Promise<v1.skill.SSLCertificatePayload> {
                const apiResponse: ApiResponse = await this.callGetSSLCertificatesV1(skillId);
                return apiResponse.body as v1.skill.SSLCertificatePayload;
        }
        /**
         * Updates the ssl certificates associated with this skill.
         * @param {string} skillId The skill ID.
         * @param {v1.skill.SSLCertificatePayload} sslCertificatePayload Defines the input/output of the ssl certificates api for a skill.
         */
        async callSetSSLCertificatesV1(skillId : string, sslCertificatePayload : v1.skill.SSLCertificatePayload) : Promise<ApiResponse> {
            const __operationId__ = 'callSetSSLCertificatesV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'sslCertificatePayload' is not null or undefined
            if (sslCertificatePayload == null) {
                throw new Error(`Required parameter sslCertificatePayload was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/sslCertificateSets/~latest";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "Accepted; Request was successful and get will now result in the new values.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("PUT", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, sslCertificatePayload, errorDefinitions);
        }
        
        /**
         * Updates the ssl certificates associated with this skill.
         * @param {string} skillId The skill ID.
         * @param {v1.skill.SSLCertificatePayload} sslCertificatePayload Defines the input/output of the ssl certificates api for a skill.
         */
        async setSSLCertificatesV1(skillId : string, sslCertificatePayload : v1.skill.SSLCertificatePayload) : Promise<void> {
                await this.callSetSSLCertificatesV1(skillId, sslCertificatePayload);
        }
        /**
         * Deletes the enablement for given skillId/stage and customerId (retrieved from Auth token).
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         */
        async callDeleteSkillEnablementV1(skillId : string, stage : string) : Promise<ApiResponse> {
            const __operationId__ = 'callDeleteSkillEnablementV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stage', stage);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stage}/enablement";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "No Content; Confirms that enablement is successfully deleted.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("DELETE", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Deletes the enablement for given skillId/stage and customerId (retrieved from Auth token).
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         */
        async deleteSkillEnablementV1(skillId : string, stage : string) : Promise<void> {
                await this.callDeleteSkillEnablementV1(skillId, stage);
        }
        /**
         * Checks whether an enablement exist for given skillId/stage and customerId (retrieved from Auth token)
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         */
        async callGetSkillEnablementStatusV1(skillId : string, stage : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetSkillEnablementStatusV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stage', stage);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stage}/enablement";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "No Content; Confirms that enablement resource exists for given skillId &amp; stage.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Checks whether an enablement exist for given skillId/stage and customerId (retrieved from Auth token)
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         */
        async getSkillEnablementStatusV1(skillId : string, stage : string) : Promise<void> {
                await this.callGetSkillEnablementStatusV1(skillId, stage);
        }
        /**
         * Creates/Updates the enablement for given skillId/stage and customerId (retrieved from Auth token)
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         */
        async callSetSkillEnablementV1(skillId : string, stage : string) : Promise<ApiResponse> {
            const __operationId__ = 'callSetSkillEnablementV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stage', stage);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stage}/enablement";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "No Content; Confirms that enablement is successfully created/updated.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(409, "The request could not be completed due to a conflict with the current state of the target resource.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("PUT", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Creates/Updates the enablement for given skillId/stage and customerId (retrieved from Auth token)
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         */
        async setSkillEnablementV1(skillId : string, stage : string) : Promise<void> {
                await this.callSetSkillEnablementV1(skillId, stage);
        }
        /**
         * Creates a new export for a skill with given skillId and stage. 
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         */
        async callCreateExportRequestForSkillV1(skillId : string, stage : string) : Promise<ApiResponse> {
            const __operationId__ = 'callCreateExportRequestForSkillV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stage', stage);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stage}/exports";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(202, "Accepted.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(409, "The request could not be completed due to a conflict with the current state of the target resource.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Creates a new export for a skill with given skillId and stage. 
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         */
        async createExportRequestForSkillV1(skillId : string, stage : string) : Promise<void> {
                await this.callCreateExportRequestForSkillV1(skillId, stage);
        }
        /**
         * Get the list of in-skill products for the skillId.
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         */
        async callGetIspListForSkillIdV1(skillId : string, stage : string, nextToken? : string, maxResults? : number) : Promise<ApiResponse> {
            const __operationId__ = 'callGetIspListForSkillIdV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stage', stage);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stage}/inSkillProducts";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Response contains list of in-skill products for the specified skillId and stage.");
            errorDefinitions.set(400, "Bad request. Returned when a required parameter is not present, badly formatted. ");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(404, "Requested resource not found.");
            errorDefinitions.set(429, "Too many requests received.");
            errorDefinitions.set(500, "Internal Server Error");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get the list of in-skill products for the skillId.
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         */
        async getIspListForSkillIdV1(skillId : string, stage : string, nextToken? : string, maxResults? : number) : Promise<v1.isp.ListInSkillProductResponse> {
                const apiResponse: ApiResponse = await this.callGetIspListForSkillIdV1(skillId, stage, nextToken, maxResults);
                return apiResponse.body as v1.isp.ListInSkillProductResponse;
        }
        /**
         * This is a synchronous API that profiles an utterance against interaction model.
         * @param {v1.skill.evaluations.ProfileNluRequest} profileNluRequest Payload sent to the profile nlu API.
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         * @param {string} locale The locale for the model requested e.g. en-GB, en-US, de-DE.
         */
        async callProfileNluV1(profileNluRequest : v1.skill.evaluations.ProfileNluRequest, skillId : string, stage : string, locale : string) : Promise<ApiResponse> {
            const __operationId__ = 'callProfileNluV1';
            // verify required parameter 'profileNluRequest' is not null or undefined
            if (profileNluRequest == null) {
                throw new Error(`Required parameter profileNluRequest was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'locale' is not null or undefined
            if (locale == null) {
                throw new Error(`Required parameter locale was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stage', stage);
            pathParams.set('locale', locale);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stage}/interactionModel/locales/{locale}/profileNlu";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Profiled utterance against interaction model and returned nlu response successfully.");
            errorDefinitions.set(400, "Bad request due to invalid or missing data.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(409, "This requests conflicts with another one currently being processed. ");
            errorDefinitions.set(429, "API user has exceeded the permitted request rate.");
            errorDefinitions.set(500, "Internal service error.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, profileNluRequest, errorDefinitions);
        }
        
        /**
         * This is a synchronous API that profiles an utterance against interaction model.
         * @param {v1.skill.evaluations.ProfileNluRequest} profileNluRequest Payload sent to the profile nlu API.
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         * @param {string} locale The locale for the model requested e.g. en-GB, en-US, de-DE.
         */
        async profileNluV1(profileNluRequest : v1.skill.evaluations.ProfileNluRequest, skillId : string, stage : string, locale : string) : Promise<v1.skill.evaluations.ProfileNluResponse> {
                const apiResponse: ApiResponse = await this.callProfileNluV1(profileNluRequest, skillId, stage, locale);
                return apiResponse.body as v1.skill.evaluations.ProfileNluResponse;
        }
        /**
         * This API returns the job status of conflict detection job for a specified interaction model.
         * @param {string} skillId The skill ID.
         * @param {string} locale The locale for the model requested e.g. en-GB, en-US, de-DE.
         * @param {string} stage Stage of the interaction model.
         * @param {string} version Version of interaction model. Use \&quot;~current\&quot; to get the model of the current version.
         */
        async callGetConflictDetectionJobStatusForInteractionModelV1(skillId : string, locale : string, stage : string, version : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetConflictDetectionJobStatusForInteractionModelV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'locale' is not null or undefined
            if (locale == null) {
                throw new Error(`Required parameter locale was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'version' is not null or undefined
            if (version == null) {
                throw new Error(`Required parameter version was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('locale', locale);
            pathParams.set('stage', stage);
            pathParams.set('version', version);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stage}/interactionModel/locales/{locale}/versions/{version}/conflictDetectionJobStatus";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Get conflict detection results successfully.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "There is no catalog defined for the catalogId.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * This API returns the job status of conflict detection job for a specified interaction model.
         * @param {string} skillId The skill ID.
         * @param {string} locale The locale for the model requested e.g. en-GB, en-US, de-DE.
         * @param {string} stage Stage of the interaction model.
         * @param {string} version Version of interaction model. Use \&quot;~current\&quot; to get the model of the current version.
         */
        async getConflictDetectionJobStatusForInteractionModelV1(skillId : string, locale : string, stage : string, version : string) : Promise<v1.skill.interactionModel.conflictDetection.GetConflictDetectionJobStatusResponse> {
                const apiResponse: ApiResponse = await this.callGetConflictDetectionJobStatusForInteractionModelV1(skillId, locale, stage, version);
                return apiResponse.body as v1.skill.interactionModel.conflictDetection.GetConflictDetectionJobStatusResponse;
        }
        /**
         * This is a paginated API that retrieves results of conflict detection job for a specified interaction model.
         * @param {string} skillId The skill ID.
         * @param {string} locale The locale for the model requested e.g. en-GB, en-US, de-DE.
         * @param {string} stage Stage of the interaction model.
         * @param {string} version Version of interaction model. Use \&quot;~current\&quot; to get the model of the current version.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. Defaults to 100. If more results are present, the response will contain a nextToken and a _link.next href.
         */
        async callGetConflictsForInteractionModelV1(skillId : string, locale : string, stage : string, version : string, nextToken? : string, maxResults? : number) : Promise<ApiResponse> {
            const __operationId__ = 'callGetConflictsForInteractionModelV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'locale' is not null or undefined
            if (locale == null) {
                throw new Error(`Required parameter locale was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'version' is not null or undefined
            if (version == null) {
                throw new Error(`Required parameter version was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('locale', locale);
            pathParams.set('stage', stage);
            pathParams.set('version', version);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stage}/interactionModel/locales/{locale}/versions/{version}/conflicts";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Get conflict detection results sucessfully.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "There is no catalog defined for the catalogId.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * This is a paginated API that retrieves results of conflict detection job for a specified interaction model.
         * @param {string} skillId The skill ID.
         * @param {string} locale The locale for the model requested e.g. en-GB, en-US, de-DE.
         * @param {string} stage Stage of the interaction model.
         * @param {string} version Version of interaction model. Use \&quot;~current\&quot; to get the model of the current version.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. Defaults to 100. If more results are present, the response will contain a nextToken and a _link.next href.
         */
        async getConflictsForInteractionModelV1(skillId : string, locale : string, stage : string, version : string, nextToken? : string, maxResults? : number) : Promise<v1.skill.interactionModel.conflictDetection.GetConflictsResponse> {
                const apiResponse: ApiResponse = await this.callGetConflictsForInteractionModelV1(skillId, locale, stage, version, nextToken, maxResults);
                return apiResponse.body as v1.skill.interactionModel.conflictDetection.GetConflictsResponse;
        }
        /**
         * List private distribution accounts. 
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         */
        async callListPrivateDistributionAccountsV1(skillId : string, stage : string, nextToken? : string, maxResults? : number) : Promise<ApiResponse> {
            const __operationId__ = 'callListPrivateDistributionAccountsV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stage', stage);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stage}/privateDistributionAccounts";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns list of private distribution accounts on success.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * List private distribution accounts. 
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         */
        async listPrivateDistributionAccountsV1(skillId : string, stage : string, nextToken? : string, maxResults? : number) : Promise<v1.skill.Private.ListPrivateDistributionAccountsResponse> {
                const apiResponse: ApiResponse = await this.callListPrivateDistributionAccountsV1(skillId, stage, nextToken, maxResults);
                return apiResponse.body as v1.skill.Private.ListPrivateDistributionAccountsResponse;
        }
        /**
         * Remove an id from the private distribution accounts. 
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         * @param {string} id ARN that a skill can be privately distributed to.
         */
        async callDeletePrivateDistributionAccountIdV1(skillId : string, stage : string, id : string) : Promise<ApiResponse> {
            const __operationId__ = 'callDeletePrivateDistributionAccountIdV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'id' is not null or undefined
            if (id == null) {
                throw new Error(`Required parameter id was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stage', stage);
            pathParams.set('id', id);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stage}/privateDistributionAccounts/{id}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "Success.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("DELETE", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Remove an id from the private distribution accounts. 
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         * @param {string} id ARN that a skill can be privately distributed to.
         */
        async deletePrivateDistributionAccountIdV1(skillId : string, stage : string, id : string) : Promise<void> {
                await this.callDeletePrivateDistributionAccountIdV1(skillId, stage, id);
        }
        /**
         * Add an id to the private distribution accounts. 
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         * @param {string} id ARN that a skill can be privately distributed to.
         */
        async callSetPrivateDistributionAccountIdV1(skillId : string, stage : string, id : string) : Promise<ApiResponse> {
            const __operationId__ = 'callSetPrivateDistributionAccountIdV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'id' is not null or undefined
            if (id == null) {
                throw new Error(`Required parameter id was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stage', stage);
            pathParams.set('id', id);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stage}/privateDistributionAccounts/{id}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "Success.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("PUT", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Add an id to the private distribution accounts. 
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         * @param {string} id ARN that a skill can be privately distributed to.
         */
        async setPrivateDistributionAccountIdV1(skillId : string, stage : string, id : string) : Promise<void> {
                await this.callSetPrivateDistributionAccountIdV1(skillId, stage, id);
        }
        /**
         * Delete AccountLinking information of a skill for the given stage. 
         * @param {string} skillId The skill ID.
         * @param {string} stageV2 Stages of a skill including the new certified stage. * &#x60;development&#x60; - skills which are currently in development corresponds to this stage. * &#x60;certified&#x60; -  skills which have completed certification and ready for publishing corresponds to this stage. * &#x60;live&#x60; - skills which are currently live corresponds to this stage. 
         */
        async callDeleteAccountLinkingInfoV1(skillId : string, stageV2 : string) : Promise<ApiResponse> {
            const __operationId__ = 'callDeleteAccountLinkingInfoV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stageV2' is not null or undefined
            if (stageV2 == null) {
                throw new Error(`Required parameter stageV2 was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stageV2', stageV2);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stageV2}/accountLinkingClient";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "Success. No content.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The specified skill/stage/accountLinkingClient doesn&#39;t exist.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("DELETE", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Delete AccountLinking information of a skill for the given stage. 
         * @param {string} skillId The skill ID.
         * @param {string} stageV2 Stages of a skill including the new certified stage. * &#x60;development&#x60; - skills which are currently in development corresponds to this stage. * &#x60;certified&#x60; -  skills which have completed certification and ready for publishing corresponds to this stage. * &#x60;live&#x60; - skills which are currently live corresponds to this stage. 
         */
        async deleteAccountLinkingInfoV1(skillId : string, stageV2 : string) : Promise<void> {
                await this.callDeleteAccountLinkingInfoV1(skillId, stageV2);
        }
        /**
         * Get AccountLinking information for the skill. 
         * @param {string} skillId The skill ID.
         * @param {string} stageV2 Stages of a skill including the new certified stage. * &#x60;development&#x60; - skills which are currently in development corresponds to this stage. * &#x60;certified&#x60; -  skills which have completed certification and ready for publishing corresponds to this stage. * &#x60;live&#x60; - skills which are currently live corresponds to this stage. 
         */
        async callGetAccountLinkingInfoV1(skillId : string, stageV2 : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetAccountLinkingInfoV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stageV2' is not null or undefined
            if (stageV2 == null) {
                throw new Error(`Required parameter stageV2 was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stageV2', stageV2);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stageV2}/accountLinkingClient";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns AccountLinking response of the skill.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get AccountLinking information for the skill. 
         * @param {string} skillId The skill ID.
         * @param {string} stageV2 Stages of a skill including the new certified stage. * &#x60;development&#x60; - skills which are currently in development corresponds to this stage. * &#x60;certified&#x60; -  skills which have completed certification and ready for publishing corresponds to this stage. * &#x60;live&#x60; - skills which are currently live corresponds to this stage. 
         */
        async getAccountLinkingInfoV1(skillId : string, stageV2 : string) : Promise<v1.skill.accountLinking.AccountLinkingResponse> {
                const apiResponse: ApiResponse = await this.callGetAccountLinkingInfoV1(skillId, stageV2);
                return apiResponse.body as v1.skill.accountLinking.AccountLinkingResponse;
        }
        /**
         * Create AccountLinking information for the skill. 
         * @param {string} skillId The skill ID.
         * @param {string} stageV2 Stages of a skill including the new certified stage. * &#x60;development&#x60; - skills which are currently in development corresponds to this stage. * &#x60;certified&#x60; -  skills which have completed certification and ready for publishing corresponds to this stage. * &#x60;live&#x60; - skills which are currently live corresponds to this stage. 
         * @param {v1.skill.accountLinking.AccountLinkingRequest} accountLinkingRequest The fields required to create accountLinking partner.
         * @param {string} ifMatch Request header that specified an entity tag. The server will update the resource only if the eTag matches with the resource&#39;s current eTag.
         */
        async callUpdateAccountLinkingInfoV1(skillId : string, stageV2 : string, accountLinkingRequest : v1.skill.accountLinking.AccountLinkingRequest, ifMatch? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callUpdateAccountLinkingInfoV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stageV2' is not null or undefined
            if (stageV2 == null) {
                throw new Error(`Required parameter stageV2 was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'accountLinkingRequest' is not null or undefined
            if (accountLinkingRequest == null) {
                throw new Error(`Required parameter accountLinkingRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });
            if(ifMatch != null) {
                headerParams.push({ key : 'If-Match', value : ifMatch });
            }

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stageV2', stageV2);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stageV2}/accountLinkingClient";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "Success");
            errorDefinitions.set(400, "Server cannot process the request due to a client error e.g. Authorization Url is invalid.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(412, "Precondition failed.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("PUT", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, accountLinkingRequest, errorDefinitions);
        }
        
        /**
         * Create AccountLinking information for the skill. 
         * @param {string} skillId The skill ID.
         * @param {string} stageV2 Stages of a skill including the new certified stage. * &#x60;development&#x60; - skills which are currently in development corresponds to this stage. * &#x60;certified&#x60; -  skills which have completed certification and ready for publishing corresponds to this stage. * &#x60;live&#x60; - skills which are currently live corresponds to this stage. 
         * @param {v1.skill.accountLinking.AccountLinkingRequest} accountLinkingRequest The fields required to create accountLinking partner.
         * @param {string} ifMatch Request header that specified an entity tag. The server will update the resource only if the eTag matches with the resource&#39;s current eTag.
         */
        async updateAccountLinkingInfoV1(skillId : string, stageV2 : string, accountLinkingRequest : v1.skill.accountLinking.AccountLinkingRequest, ifMatch? : string) : Promise<void> {
                await this.callUpdateAccountLinkingInfoV1(skillId, stageV2, accountLinkingRequest, ifMatch);
        }
        /**
         * Creates a new clone locale workflow for a skill with given skillId, source locale, and target locales. In a single workflow, a locale can be cloned to multiple target locales. However, only one such workflow can be started at any time. 
         * @param {string} skillId The skill ID.
         * @param {string} stageV2 Stages of a skill on which locales can be cloned. Currently only &#x60;development&#x60; stage is supported. * &#x60;development&#x60; - skills which are currently in development corresponds to this stage. 
         * @param {v1.skill.CloneLocaleRequest} cloneLocaleRequest Defines the request body for the cloneLocale API.
         */
        async callCloneLocaleV1(skillId : string, stageV2 : string, cloneLocaleRequest : v1.skill.CloneLocaleRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callCloneLocaleV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stageV2' is not null or undefined
            if (stageV2 == null) {
                throw new Error(`Required parameter stageV2 was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'cloneLocaleRequest' is not null or undefined
            if (cloneLocaleRequest == null) {
                throw new Error(`Required parameter cloneLocaleRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stageV2', stageV2);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stageV2}/cloneLocale";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(202, "Accepted.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(409, "The request could not be completed due to a conflict with the current state of the target resource.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, cloneLocaleRequest, errorDefinitions);
        }
        
        /**
         * Creates a new clone locale workflow for a skill with given skillId, source locale, and target locales. In a single workflow, a locale can be cloned to multiple target locales. However, only one such workflow can be started at any time. 
         * @param {string} skillId The skill ID.
         * @param {string} stageV2 Stages of a skill on which locales can be cloned. Currently only &#x60;development&#x60; stage is supported. * &#x60;development&#x60; - skills which are currently in development corresponds to this stage. 
         * @param {v1.skill.CloneLocaleRequest} cloneLocaleRequest Defines the request body for the cloneLocale API.
         */
        async cloneLocaleV1(skillId : string, stageV2 : string, cloneLocaleRequest : v1.skill.CloneLocaleRequest) : Promise<void> {
                await this.callCloneLocaleV1(skillId, stageV2, cloneLocaleRequest);
        }
        /**
         * Returns the status of a clone locale workflow associated with the unique identifier of cloneLocaleRequestId. 
         * @param {string} skillId The skill ID.
         * @param {string} stageV2 Stages of a skill on which locales can be cloned. Currently only &#x60;development&#x60; stage is supported. * &#x60;development&#x60; - skills which are currently in development corresponds to this stage. 
         * @param {string} cloneLocaleRequestId Defines the identifier for a clone locale workflow. If set to ~latest, request returns the status of the latest clone locale workflow. 
         */
        async callGetCloneLocaleStatusV1(skillId : string, stageV2 : string, cloneLocaleRequestId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetCloneLocaleStatusV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stageV2' is not null or undefined
            if (stageV2 == null) {
                throw new Error(`Required parameter stageV2 was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'cloneLocaleRequestId' is not null or undefined
            if (cloneLocaleRequestId == null) {
                throw new Error(`Required parameter cloneLocaleRequestId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stageV2', stageV2);
            pathParams.set('cloneLocaleRequestId', cloneLocaleRequestId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stageV2}/cloneLocaleRequests/{cloneLocaleRequestId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "OK.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Returns the status of a clone locale workflow associated with the unique identifier of cloneLocaleRequestId. 
         * @param {string} skillId The skill ID.
         * @param {string} stageV2 Stages of a skill on which locales can be cloned. Currently only &#x60;development&#x60; stage is supported. * &#x60;development&#x60; - skills which are currently in development corresponds to this stage. 
         * @param {string} cloneLocaleRequestId Defines the identifier for a clone locale workflow. If set to ~latest, request returns the status of the latest clone locale workflow. 
         */
        async getCloneLocaleStatusV1(skillId : string, stageV2 : string, cloneLocaleRequestId : string) : Promise<v1.skill.CloneLocaleStatusResponse> {
                const apiResponse: ApiResponse = await this.callGetCloneLocaleStatusV1(skillId, stageV2, cloneLocaleRequestId);
                return apiResponse.body as v1.skill.CloneLocaleStatusResponse;
        }
        /**
         * Gets the `InteractionModel` for the skill in the given stage. The path params **skillId**, **stage** and **locale** are required. 
         * @param {string} skillId The skill ID.
         * @param {string} stageV2 Stages of a skill including the new certified stage. * &#x60;development&#x60; - skills which are currently in development corresponds to this stage. * &#x60;certified&#x60; -  skills which have completed certification and ready for publishing corresponds to this stage. * &#x60;live&#x60; - skills which are currently live corresponds to this stage. 
         * @param {string} locale The locale for the model requested e.g. en-GB, en-US, de-DE.
         */
        async callGetInteractionModelV1(skillId : string, stageV2 : string, locale : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetInteractionModelV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stageV2' is not null or undefined
            if (stageV2 == null) {
                throw new Error(`Required parameter stageV2 was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'locale' is not null or undefined
            if (locale == null) {
                throw new Error(`Required parameter locale was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stageV2', stageV2);
            pathParams.set('locale', locale);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stageV2}/interactionModel/locales/{locale}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns interaction model object on success.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The specified skill doesn&#39;t exist or there is no model defined for the locale.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Gets the `InteractionModel` for the skill in the given stage. The path params **skillId**, **stage** and **locale** are required. 
         * @param {string} skillId The skill ID.
         * @param {string} stageV2 Stages of a skill including the new certified stage. * &#x60;development&#x60; - skills which are currently in development corresponds to this stage. * &#x60;certified&#x60; -  skills which have completed certification and ready for publishing corresponds to this stage. * &#x60;live&#x60; - skills which are currently live corresponds to this stage. 
         * @param {string} locale The locale for the model requested e.g. en-GB, en-US, de-DE.
         */
        async getInteractionModelV1(skillId : string, stageV2 : string, locale : string) : Promise<v1.skill.interactionModel.InteractionModelData> {
                const apiResponse: ApiResponse = await this.callGetInteractionModelV1(skillId, stageV2, locale);
                return apiResponse.body as v1.skill.interactionModel.InteractionModelData;
        }
        /**
         * Get the latest metadata for the interaction model resource for the given stage. 
         * @param {string} skillId The skill ID.
         * @param {string} stageV2 Stages of a skill including the new certified stage. * &#x60;development&#x60; - skills which are currently in development corresponds to this stage. * &#x60;certified&#x60; -  skills which have completed certification and ready for publishing corresponds to this stage. * &#x60;live&#x60; - skills which are currently live corresponds to this stage. 
         * @param {string} locale The locale for the model requested e.g. en-GB, en-US, de-DE.
         */
        async callGetInteractionModelMetadataV1(skillId : string, stageV2 : string, locale : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetInteractionModelMetadataV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stageV2' is not null or undefined
            if (stageV2 == null) {
                throw new Error(`Required parameter stageV2 was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'locale' is not null or undefined
            if (locale == null) {
                throw new Error(`Required parameter locale was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stageV2', stageV2);
            pathParams.set('locale', locale);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stageV2}/interactionModel/locales/{locale}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "Success. There is no content but returns etag.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The specified skill or stage or locale does not exist");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("HEAD", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get the latest metadata for the interaction model resource for the given stage. 
         * @param {string} skillId The skill ID.
         * @param {string} stageV2 Stages of a skill including the new certified stage. * &#x60;development&#x60; - skills which are currently in development corresponds to this stage. * &#x60;certified&#x60; -  skills which have completed certification and ready for publishing corresponds to this stage. * &#x60;live&#x60; - skills which are currently live corresponds to this stage. 
         * @param {string} locale The locale for the model requested e.g. en-GB, en-US, de-DE.
         */
        async getInteractionModelMetadataV1(skillId : string, stageV2 : string, locale : string) : Promise<void> {
                await this.callGetInteractionModelMetadataV1(skillId, stageV2, locale);
        }
        /**
         * Creates an `InteractionModel` for the skill. 
         * @param {string} skillId The skill ID.
         * @param {string} stageV2 Stages of a skill including the new certified stage. * &#x60;development&#x60; - skills which are currently in development corresponds to this stage. * &#x60;certified&#x60; -  skills which have completed certification and ready for publishing corresponds to this stage. * &#x60;live&#x60; - skills which are currently live corresponds to this stage. 
         * @param {string} locale The locale for the model requested e.g. en-GB, en-US, de-DE.
         * @param {v1.skill.interactionModel.InteractionModelData} interactionModel 
         * @param {string} ifMatch Request header that specified an entity tag. The server will update the resource only if the eTag matches with the resource&#39;s current eTag.
         */
        async callSetInteractionModelV1(skillId : string, stageV2 : string, locale : string, interactionModel : v1.skill.interactionModel.InteractionModelData, ifMatch? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callSetInteractionModelV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stageV2' is not null or undefined
            if (stageV2 == null) {
                throw new Error(`Required parameter stageV2 was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'locale' is not null or undefined
            if (locale == null) {
                throw new Error(`Required parameter locale was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'interactionModel' is not null or undefined
            if (interactionModel == null) {
                throw new Error(`Required parameter interactionModel was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });
            if(ifMatch != null) {
                headerParams.push({ key : 'If-Match', value : ifMatch });
            }

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stageV2', stageV2);
            pathParams.set('locale', locale);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stageV2}/interactionModel/locales/{locale}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(202, "Returns build status location link on success.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error e.g. the input interaction model is invalid.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The specified skill or stage or locale does not exist.");
            errorDefinitions.set(412, "Precondition failed.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("PUT", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, interactionModel, errorDefinitions);
        }
        
        /**
         * Creates an `InteractionModel` for the skill. 
         * @param {string} skillId The skill ID.
         * @param {string} stageV2 Stages of a skill including the new certified stage. * &#x60;development&#x60; - skills which are currently in development corresponds to this stage. * &#x60;certified&#x60; -  skills which have completed certification and ready for publishing corresponds to this stage. * &#x60;live&#x60; - skills which are currently live corresponds to this stage. 
         * @param {string} locale The locale for the model requested e.g. en-GB, en-US, de-DE.
         * @param {v1.skill.interactionModel.InteractionModelData} interactionModel 
         * @param {string} ifMatch Request header that specified an entity tag. The server will update the resource only if the eTag matches with the resource&#39;s current eTag.
         */
        async setInteractionModelV1(skillId : string, stageV2 : string, locale : string, interactionModel : v1.skill.interactionModel.InteractionModelData, ifMatch? : string) : Promise<void> {
                await this.callSetInteractionModelV1(skillId, stageV2, locale, interactionModel, ifMatch);
        }
        /**
         * Get the list of interactionModel versions of a skill for the vendor.
         * @param {string} skillId The skill ID.
         * @param {string} stageV2 Stages of a skill including the new certified stage. * &#x60;development&#x60; - skills which are currently in development corresponds to this stage. * &#x60;certified&#x60; -  skills which have completed certification and ready for publishing corresponds to this stage. * &#x60;live&#x60; - skills which are currently live corresponds to this stage. 
         * @param {string} locale The locale for the model requested e.g. en-GB, en-US, de-DE.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} sortDirection Sets the sorting direction of the result items. When set to &#39;asc&#39; these items are returned in ascending order of sortField value and when set to &#39;desc&#39; these items are returned in descending order of sortField value.
         * @param {string} sortField Sets the field on which the sorting would be applied.
         */
        async callListInteractionModelVersionsV1(skillId : string, stageV2 : string, locale : string, nextToken? : string, maxResults? : number, sortDirection? : string, sortField? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callListInteractionModelVersionsV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stageV2' is not null or undefined
            if (stageV2 == null) {
                throw new Error(`Required parameter stageV2 was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'locale' is not null or undefined
            if (locale == null) {
                throw new Error(`Required parameter locale was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }
            if(sortDirection != null) {
                const sortDirectionValues: any[] = Array.isArray(sortDirection) ? sortDirection : [sortDirection];
                sortDirectionValues.forEach(val => queryParams.push({ key: 'sortDirection', value: val }));
            }
            if(sortField != null) {
                const sortFieldValues: any[] = Array.isArray(sortField) ? sortField : [sortField];
                sortFieldValues.forEach(val => queryParams.push({ key: 'sortField', value: val }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stageV2', stageV2);
            pathParams.set('locale', locale);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stageV2}/interactionModel/locales/{locale}/versions";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns list of interactionModel versions of a skill for the vendor.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error e.g. the input interaction model is invalid.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The specified skill doesn&#39;t exist or there is no model defined for the locale.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get the list of interactionModel versions of a skill for the vendor.
         * @param {string} skillId The skill ID.
         * @param {string} stageV2 Stages of a skill including the new certified stage. * &#x60;development&#x60; - skills which are currently in development corresponds to this stage. * &#x60;certified&#x60; -  skills which have completed certification and ready for publishing corresponds to this stage. * &#x60;live&#x60; - skills which are currently live corresponds to this stage. 
         * @param {string} locale The locale for the model requested e.g. en-GB, en-US, de-DE.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         * @param {string} sortDirection Sets the sorting direction of the result items. When set to &#39;asc&#39; these items are returned in ascending order of sortField value and when set to &#39;desc&#39; these items are returned in descending order of sortField value.
         * @param {string} sortField Sets the field on which the sorting would be applied.
         */
        async listInteractionModelVersionsV1(skillId : string, stageV2 : string, locale : string, nextToken? : string, maxResults? : number, sortDirection? : string, sortField? : string) : Promise<v1.skill.interactionModel.version.ListResponse> {
                const apiResponse: ApiResponse = await this.callListInteractionModelVersionsV1(skillId, stageV2, locale, nextToken, maxResults, sortDirection, sortField);
                return apiResponse.body as v1.skill.interactionModel.version.ListResponse;
        }
        /**
         * Gets the specified version `InteractionModel` of a skill for the vendor. Use `~current` as version parameter to get the current version model. 
         * @param {string} skillId The skill ID.
         * @param {string} stageV2 Stages of a skill including the new certified stage. * &#x60;development&#x60; - skills which are currently in development corresponds to this stage. * &#x60;certified&#x60; -  skills which have completed certification and ready for publishing corresponds to this stage. * &#x60;live&#x60; - skills which are currently live corresponds to this stage. 
         * @param {string} locale The locale for the model requested e.g. en-GB, en-US, de-DE.
         * @param {string} version Version for interaction model.
         */
        async callGetInteractionModelVersionV1(skillId : string, stageV2 : string, locale : string, version : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetInteractionModelVersionV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stageV2' is not null or undefined
            if (stageV2 == null) {
                throw new Error(`Required parameter stageV2 was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'locale' is not null or undefined
            if (locale == null) {
                throw new Error(`Required parameter locale was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'version' is not null or undefined
            if (version == null) {
                throw new Error(`Required parameter version was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stageV2', stageV2);
            pathParams.set('locale', locale);
            pathParams.set('version', version);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stageV2}/interactionModel/locales/{locale}/versions/{version}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns interaction model object on success.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error e.g. the input interaction model is invalid.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The specified skill doesn&#39;t exist or there is no model defined for the locale or version.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Gets the specified version `InteractionModel` of a skill for the vendor. Use `~current` as version parameter to get the current version model. 
         * @param {string} skillId The skill ID.
         * @param {string} stageV2 Stages of a skill including the new certified stage. * &#x60;development&#x60; - skills which are currently in development corresponds to this stage. * &#x60;certified&#x60; -  skills which have completed certification and ready for publishing corresponds to this stage. * &#x60;live&#x60; - skills which are currently live corresponds to this stage. 
         * @param {string} locale The locale for the model requested e.g. en-GB, en-US, de-DE.
         * @param {string} version Version for interaction model.
         */
        async getInteractionModelVersionV1(skillId : string, stageV2 : string, locale : string, version : string) : Promise<v1.skill.interactionModel.InteractionModelData> {
                const apiResponse: ApiResponse = await this.callGetInteractionModelVersionV1(skillId, stageV2, locale, version);
                return apiResponse.body as v1.skill.interactionModel.InteractionModelData;
        }
        /**
         * Returns the skill manifest for given skillId and stage.
         * @param {string} skillId The skill ID.
         * @param {string} stageV2 Stages of a skill including the new certified stage. * &#x60;development&#x60; - skills which are currently in development corresponds to this stage. * &#x60;certified&#x60; -  skills which have completed certification and ready for publishing corresponds to this stage. * &#x60;live&#x60; - skills which are currently live corresponds to this stage. 
         */
        async callGetSkillManifestV1(skillId : string, stageV2 : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetSkillManifestV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stageV2' is not null or undefined
            if (stageV2 == null) {
                throw new Error(`Required parameter stageV2 was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stageV2', stageV2);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stageV2}/manifest";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Response contains the latest version of skill manifest.");
            errorDefinitions.set(303, "See Other");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Returns the skill manifest for given skillId and stage.
         * @param {string} skillId The skill ID.
         * @param {string} stageV2 Stages of a skill including the new certified stage. * &#x60;development&#x60; - skills which are currently in development corresponds to this stage. * &#x60;certified&#x60; -  skills which have completed certification and ready for publishing corresponds to this stage. * &#x60;live&#x60; - skills which are currently live corresponds to this stage. 
         */
        async getSkillManifestV1(skillId : string, stageV2 : string) : Promise<v1.skill.Manifest.SkillManifestEnvelope> {
                const apiResponse: ApiResponse = await this.callGetSkillManifestV1(skillId, stageV2);
                return apiResponse.body as v1.skill.Manifest.SkillManifestEnvelope;
        }
        /**
         * Updates skill manifest for given skillId and stage.
         * @param {string} skillId The skill ID.
         * @param {string} stageV2 Stages of a skill including the new certified stage. * &#x60;development&#x60; - skills which are currently in development corresponds to this stage. * &#x60;certified&#x60; -  skills which have completed certification and ready for publishing corresponds to this stage. * &#x60;live&#x60; - skills which are currently live corresponds to this stage. 
         * @param {v1.skill.Manifest.SkillManifestEnvelope} updateSkillRequest Defines the request body for updateSkill API.
         * @param {string} ifMatch Request header that specified an entity tag. The server will update the resource only if the eTag matches with the resource&#39;s current eTag.
         */
        async callUpdateSkillManifestV1(skillId : string, stageV2 : string, updateSkillRequest : v1.skill.Manifest.SkillManifestEnvelope, ifMatch? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callUpdateSkillManifestV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stageV2' is not null or undefined
            if (stageV2 == null) {
                throw new Error(`Required parameter stageV2 was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'updateSkillRequest' is not null or undefined
            if (updateSkillRequest == null) {
                throw new Error(`Required parameter updateSkillRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });
            if(ifMatch != null) {
                headerParams.push({ key : 'If-Match', value : ifMatch });
            }

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stageV2', stageV2);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stageV2}/manifest";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(202, "Accepted; Returns a URL to track the status in &#39;Location&#39; header.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(409, "The request could not be completed due to a conflict with the current state of the target resource.");
            errorDefinitions.set(412, "Precondition failed.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("PUT", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, updateSkillRequest, errorDefinitions);
        }
        
        /**
         * Updates skill manifest for given skillId and stage.
         * @param {string} skillId The skill ID.
         * @param {string} stageV2 Stages of a skill including the new certified stage. * &#x60;development&#x60; - skills which are currently in development corresponds to this stage. * &#x60;certified&#x60; -  skills which have completed certification and ready for publishing corresponds to this stage. * &#x60;live&#x60; - skills which are currently live corresponds to this stage. 
         * @param {v1.skill.Manifest.SkillManifestEnvelope} updateSkillRequest Defines the request body for updateSkill API.
         * @param {string} ifMatch Request header that specified an entity tag. The server will update the resource only if the eTag matches with the resource&#39;s current eTag.
         */
        async updateSkillManifestV1(skillId : string, stageV2 : string, updateSkillRequest : v1.skill.Manifest.SkillManifestEnvelope, ifMatch? : string) : Promise<void> {
                await this.callUpdateSkillManifestV1(skillId, stageV2, updateSkillRequest, ifMatch);
        }
        /**
         * This is an asynchronous API which allows a skill developer to execute various validations against their skill. 
         * @param {v1.skill.validations.ValidationsApiRequest} validationsApiRequest Payload sent to the skill validation API.
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         */
        async callSubmitSkillValidationV1(validationsApiRequest : v1.skill.validations.ValidationsApiRequest, skillId : string, stage : string) : Promise<ApiResponse> {
            const __operationId__ = 'callSubmitSkillValidationV1';
            // verify required parameter 'validationsApiRequest' is not null or undefined
            if (validationsApiRequest == null) {
                throw new Error(`Required parameter validationsApiRequest was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stage', stage);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stage}/validations";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(202, "Skill validation has successfully begun.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "API user does not have permission or is currently in a state that does not allow calls to this API. ");
            errorDefinitions.set(404, "The specified skill, stage or validation does not exist. The error response will contain a description that indicates the specific resource type that was not found. ");
            errorDefinitions.set(409, "This requests conflicts with another one currently being processed. ");
            errorDefinitions.set(429, "API user has exceeded the permitted request rate.");
            errorDefinitions.set(500, "Internal service error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, validationsApiRequest, errorDefinitions);
        }
        
        /**
         * This is an asynchronous API which allows a skill developer to execute various validations against their skill. 
         * @param {v1.skill.validations.ValidationsApiRequest} validationsApiRequest Payload sent to the skill validation API.
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         */
        async submitSkillValidationV1(validationsApiRequest : v1.skill.validations.ValidationsApiRequest, skillId : string, stage : string) : Promise<v1.skill.validations.ValidationsApiResponse> {
                const apiResponse: ApiResponse = await this.callSubmitSkillValidationV1(validationsApiRequest, skillId, stage);
                return apiResponse.body as v1.skill.validations.ValidationsApiResponse;
        }
        /**
         * This API gets the result of a previously executed validation. A successful response will contain the status of the executed validation. If the validation successfully completed, the response will also contain information related to executed validations. In cases where requests to this API results in an error, the response will contain a description of the problem. In cases where the validation failed, the response will contain a status attribute indicating that a failure occurred. Note that validation results are stored for 60 minutes. A request for an expired validation result will return a 404 HTTP status code. 
         * @param {string} skillId The skill ID.
         * @param {string} validationId Id of the validation. Reserved word identifier of mostRecent can be used to get the most recent validation for the skill and stage. Note that the behavior of the API in this case would be the same as when the actual validation id of the most recent validation is used in the request. 
         * @param {string} stage Stage for skill.
         * @param {string} acceptLanguage User&#39;s locale/language in context.
         */
        async callGetSkillValidationsV1(skillId : string, validationId : string, stage : string, acceptLanguage? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetSkillValidationsV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'validationId' is not null or undefined
            if (validationId == null) {
                throw new Error(`Required parameter validationId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });
            if(acceptLanguage != null) {
                headerParams.push({ key : 'Accept-Language', value : acceptLanguage });
            }


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('validationId', validationId);
            pathParams.set('stage', stage);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/stages/{stage}/validations/{validationId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Successfully retrieved skill validation information.");
            errorDefinitions.set(403, "API user does not have permission or is currently in a state that does not allow calls to this API. ");
            errorDefinitions.set(404, "The specified skill, stage, or validation does not exist. The error response will contain a description that indicates the specific resource type that was not found. ");
            errorDefinitions.set(409, "This requests conflicts with another one currently being processed. ");
            errorDefinitions.set(429, "API user has exceeded the permitted request rate.");
            errorDefinitions.set(500, "Internal service error.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * This API gets the result of a previously executed validation. A successful response will contain the status of the executed validation. If the validation successfully completed, the response will also contain information related to executed validations. In cases where requests to this API results in an error, the response will contain a description of the problem. In cases where the validation failed, the response will contain a status attribute indicating that a failure occurred. Note that validation results are stored for 60 minutes. A request for an expired validation result will return a 404 HTTP status code. 
         * @param {string} skillId The skill ID.
         * @param {string} validationId Id of the validation. Reserved word identifier of mostRecent can be used to get the most recent validation for the skill and stage. Note that the behavior of the API in this case would be the same as when the actual validation id of the most recent validation is used in the request. 
         * @param {string} stage Stage for skill.
         * @param {string} acceptLanguage User&#39;s locale/language in context.
         */
        async getSkillValidationsV1(skillId : string, validationId : string, stage : string, acceptLanguage? : string) : Promise<v1.skill.validations.ValidationsApiResponse> {
                const apiResponse: ApiResponse = await this.callGetSkillValidationsV1(skillId, validationId, stage, acceptLanguage);
                return apiResponse.body as v1.skill.validations.ValidationsApiResponse;
        }
        /**
         * Get the status of skill resource and its sub-resources for a given skillId.
         * @param {string} skillId The skill ID.
         * @param {string} resource Resource name for which status information is desired. It is an optional, filtering parameter and can be used more than once, to retrieve status for all the desired (sub)resources only, in single API call. If this parameter is not specified, status for all the resources/sub-resources will be returned. 
         */
        async callGetSkillStatusV1(skillId : string, resource? : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetSkillStatusV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(resource != null) {
                const resourceValues: any[] = Array.isArray(resource) ? resource : [resource];
                resourceValues.forEach(val => queryParams.push({ key: 'resource', value: val }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/status";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Returns status for skill resource and sub-resources.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get the status of skill resource and its sub-resources for a given skillId.
         * @param {string} skillId The skill ID.
         * @param {string} resource Resource name for which status information is desired. It is an optional, filtering parameter and can be used more than once, to retrieve status for all the desired (sub)resources only, in single API call. If this parameter is not specified, status for all the resources/sub-resources will be returned. 
         */
        async getSkillStatusV1(skillId : string, resource? : string) : Promise<v1.skill.SkillStatus> {
                const apiResponse: ApiResponse = await this.callGetSkillStatusV1(skillId, resource);
                return apiResponse.body as v1.skill.SkillStatus;
        }
        /**
         * Submit the skill for certification. 
         * @param {string} skillId The skill ID.
         * @param {v1.skill.SubmitSkillForCertificationRequest} submitSkillForCertificationRequest Defines the request body for submitSkillForCertification API.
         */
        async callSubmitSkillForCertificationV1(skillId : string, submitSkillForCertificationRequest? : v1.skill.SubmitSkillForCertificationRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callSubmitSkillForCertificationV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/submit";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(202, "Success. There is no content but returns Location in the header.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, submitSkillForCertificationRequest, errorDefinitions);
        }
        
        /**
         * Submit the skill for certification. 
         * @param {string} skillId The skill ID.
         * @param {v1.skill.SubmitSkillForCertificationRequest} submitSkillForCertificationRequest Defines the request body for submitSkillForCertification API.
         */
        async submitSkillForCertificationV1(skillId : string, submitSkillForCertificationRequest? : v1.skill.SubmitSkillForCertificationRequest) : Promise<void> {
                await this.callSubmitSkillForCertificationV1(skillId, submitSkillForCertificationRequest);
        }
        /**
         * Retrieve a list of all skill versions associated with this skill id
         * @param {string} skillId The skill ID.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         */
        async callListVersionsForSkillV1(skillId : string, nextToken? : string, maxResults? : number) : Promise<ApiResponse> {
            const __operationId__ = 'callListVersionsForSkillV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];
            if(nextToken != null) {
                const nextTokenValues: any[] = Array.isArray(nextToken) ? nextToken : [nextToken];
                nextTokenValues.forEach(val => queryParams.push({ key: 'nextToken', value: val }));
            }
            if(maxResults != null) {
                const maxResultsValues: any[] = Array.isArray(maxResults) ? maxResults : [maxResults];
                maxResultsValues.forEach(val => queryParams.push({ key: 'maxResults', value: val!.toString() }));
            }

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/versions";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Successfully retrieved skill versions");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Retrieve a list of all skill versions associated with this skill id
         * @param {string} skillId The skill ID.
         * @param {string} nextToken When response to this API call is truncated (that is, isTruncated response element value is true), the response also includes the nextToken element. The value of nextToken can be used in the next request as the continuation-token to list the next set of objects. The continuation token is an opaque value that Skill Management API understands. Token has expiry of 24 hours.
         * @param {number} maxResults Sets the maximum number of results returned in the response body. If you want to retrieve fewer than upper limit of 50 results, you can add this parameter to your request. maxResults should not exceed the upper limit. The response might contain fewer results than maxResults, but it will never contain more. If there are additional results that satisfy the search criteria, but these results were not returned, the response contains isTruncated &#x3D; true.
         */
        async listVersionsForSkillV1(skillId : string, nextToken? : string, maxResults? : number) : Promise<v1.skill.ListSkillVersionsResponse> {
                const apiResponse: ApiResponse = await this.callListVersionsForSkillV1(skillId, nextToken, maxResults);
                return apiResponse.body as v1.skill.ListSkillVersionsResponse;
        }
        /**
         * Withdraws the skill from certification. 
         * @param {string} skillId The skill ID.
         * @param {v1.skill.WithdrawRequest} withdrawRequest The reason and message (in case of OTHER) to withdraw a skill.
         */
        async callWithdrawSkillFromCertificationV1(skillId : string, withdrawRequest : v1.skill.WithdrawRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callWithdrawSkillFromCertificationV1';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'withdrawRequest' is not null or undefined
            if (withdrawRequest == null) {
                throw new Error(`Required parameter withdrawRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/{skillId}/withdraw";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(204, "Success.");
            errorDefinitions.set(400, "Server cannot process the request due to a client error.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "The operation being requested is not allowed.");
            errorDefinitions.set(404, "The resource being requested is not found.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, withdrawRequest, errorDefinitions);
        }
        
        /**
         * Withdraws the skill from certification. 
         * @param {string} skillId The skill ID.
         * @param {v1.skill.WithdrawRequest} withdrawRequest The reason and message (in case of OTHER) to withdraw a skill.
         */
        async withdrawSkillFromCertificationV1(skillId : string, withdrawRequest : v1.skill.WithdrawRequest) : Promise<void> {
                await this.callWithdrawSkillFromCertificationV1(skillId, withdrawRequest);
        }
        /**
         * Creates a new uploadUrl. 
         */
        async callCreateUploadUrlV1() : Promise<ApiResponse> {
            const __operationId__ = 'callCreateUploadUrlV1';

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/skills/uploads";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(201, "Created.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(429, "Exceeds the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Creates a new uploadUrl. 
         */
        async createUploadUrlV1() : Promise<v1.skill.UploadResponse> {
                const apiResponse: ApiResponse = await this.callCreateUploadUrlV1();
                return apiResponse.body as v1.skill.UploadResponse;
        }
        /**
         * Get the list of Vendor information. 
         */
        async callGetVendorListV1() : Promise<ApiResponse> {
            const __operationId__ = 'callGetVendorListV1';

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/vendors";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Return vendor information on success.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get the list of Vendor information. 
         */
        async getVendorListV1() : Promise<v1.vendorManagement.Vendors> {
                const apiResponse: ApiResponse = await this.callGetVendorListV1();
                return apiResponse.body as v1.vendorManagement.Vendors;
        }
        /**
         * Get the current user permissions about Alexa hosted skill features.
         * @param {string} vendorId vendorId
         * @param {string} hostedSkillPermissionType The permission of a hosted skill feature that customer needs to check.
         */
        async callGetAlexaHostedSkillUserPermissionsV1(vendorId : string, hostedSkillPermissionType : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetAlexaHostedSkillUserPermissionsV1';
            // verify required parameter 'vendorId' is not null or undefined
            if (vendorId == null) {
                throw new Error(`Required parameter vendorId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'hostedSkillPermissionType' is not null or undefined
            if (hostedSkillPermissionType == null) {
                throw new Error(`Required parameter hostedSkillPermissionType was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('vendorId', vendorId);
            pathParams.set('hostedSkillPermissionType', hostedSkillPermissionType);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v1/vendors/{vendorId}/alexaHosted/permissions/{hostedSkillPermissionType}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "response contains the user&#39;s permission of hosted skill features");
            errorDefinitions.set(400, "Server cannot process the request due to a client error e.g. Authorization Url is invalid");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(429, "Exceed the permitted request limit. Throttling criteria includes total requests, per API, ClientId, and CustomerId.");
            errorDefinitions.set(500, "Internal Server Error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * Get the current user permissions about Alexa hosted skill features.
         * @param {string} vendorId vendorId
         * @param {string} hostedSkillPermissionType The permission of a hosted skill feature that customer needs to check.
         */
        async getAlexaHostedSkillUserPermissionsV1(vendorId : string, hostedSkillPermissionType : string) : Promise<v1.skill.AlexaHosted.HostedSkillPermission> {
                const apiResponse: ApiResponse = await this.callGetAlexaHostedSkillUserPermissionsV1(vendorId, hostedSkillPermissionType);
                return apiResponse.body as v1.skill.AlexaHosted.HostedSkillPermission;
        }
        /**
         * This is a synchronous API that invokes the Lambda or third party HTTPS endpoint for a given skill. A successful response will contain information related to what endpoint was called, payload sent to and received from the endpoint. In cases where requests to this API results in an error, the response will contain an error code and a description of the problem. In cases where invoking the skill endpoint specifically fails, the response will contain a status attribute indicating that a failure occurred and details about what was sent to the endpoint. The skill must belong to and be enabled by the user of this API. Also,  note that calls to the skill endpoint will timeout after 10 seconds. This  API is currently designed in a way that allows extension to an asynchronous  API if a significantly bigger timeout is required. 
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         * @param {v2.skill.invocations.InvocationsApiRequest} invocationsApiRequest Payload sent to the skill invocation API.
         */
        async callInvokeSkillEndPointV2(skillId : string, stage : string, invocationsApiRequest? : v2.skill.invocations.InvocationsApiRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callInvokeSkillEndPointV2';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stage', stage);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v2/skills/{skillId}/stages/{stage}/invocations";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Skill was invoked.");
            errorDefinitions.set(400, "Bad request due to invalid or missing data.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "API user does not have permission to call this API or is currently in a state that does not allow invocation of this skill. ");
            errorDefinitions.set(404, "The specified skill does not exist.");
            errorDefinitions.set(429, "API user has exceeded the permitted request rate.");
            errorDefinitions.set(500, "Internal service error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, invocationsApiRequest, errorDefinitions);
        }
        
        /**
         * This is a synchronous API that invokes the Lambda or third party HTTPS endpoint for a given skill. A successful response will contain information related to what endpoint was called, payload sent to and received from the endpoint. In cases where requests to this API results in an error, the response will contain an error code and a description of the problem. In cases where invoking the skill endpoint specifically fails, the response will contain a status attribute indicating that a failure occurred and details about what was sent to the endpoint. The skill must belong to and be enabled by the user of this API. Also,  note that calls to the skill endpoint will timeout after 10 seconds. This  API is currently designed in a way that allows extension to an asynchronous  API if a significantly bigger timeout is required. 
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         * @param {v2.skill.invocations.InvocationsApiRequest} invocationsApiRequest Payload sent to the skill invocation API.
         */
        async invokeSkillEndPointV2(skillId : string, stage : string, invocationsApiRequest? : v2.skill.invocations.InvocationsApiRequest) : Promise<v2.skill.invocations.InvocationsApiResponse> {
                const apiResponse: ApiResponse = await this.callInvokeSkillEndPointV2(skillId, stage, invocationsApiRequest);
                return apiResponse.body as v2.skill.invocations.InvocationsApiResponse;
        }
        /**
         * This is an asynchronous API that simulates a skill execution in the Alexa eco-system given an utterance text of what a customer would say to Alexa. A successful response will contain a header with the location of the simulation resource. In cases where requests to this API results in an error, the response will contain an error code and a description of the problem. The skill being simulated must belong to and be enabled by the user of this API. Concurrent requests per user is currently not supported. 
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         * @param {v2.skill.simulations.SimulationsApiRequest} simulationsApiRequest Payload sent to the skill simulation API.
         */
        async callSimulateSkillV2(skillId : string, stage : string, simulationsApiRequest : v2.skill.simulations.SimulationsApiRequest) : Promise<ApiResponse> {
            const __operationId__ = 'callSimulateSkillV2';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'simulationsApiRequest' is not null or undefined
            if (simulationsApiRequest == null) {
                throw new Error(`Required parameter simulationsApiRequest was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });

            if(!headerParams.find((param) => param.key.toLowerCase() === 'content-type')) {
                headerParams.push({ key : 'Content-type', value : 'application/json' });
            }

            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stage', stage);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v2/skills/{skillId}/stages/{stage}/simulations";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Skill simulation has successfully began.");
            errorDefinitions.set(400, "Bad request due to invalid or missing data.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "API user does not have permission to call this API or is currently in a state that does not allow simulation of this skill. ");
            errorDefinitions.set(404, "The specified skill does not exist.");
            errorDefinitions.set(409, "This requests conflicts with another one currently being processed. ");
            errorDefinitions.set(429, "API user has exceeded the permitted request rate.");
            errorDefinitions.set(500, "Internal service error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("POST", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, simulationsApiRequest, errorDefinitions);
        }
        
        /**
         * This is an asynchronous API that simulates a skill execution in the Alexa eco-system given an utterance text of what a customer would say to Alexa. A successful response will contain a header with the location of the simulation resource. In cases where requests to this API results in an error, the response will contain an error code and a description of the problem. The skill being simulated must belong to and be enabled by the user of this API. Concurrent requests per user is currently not supported. 
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         * @param {v2.skill.simulations.SimulationsApiRequest} simulationsApiRequest Payload sent to the skill simulation API.
         */
        async simulateSkillV2(skillId : string, stage : string, simulationsApiRequest : v2.skill.simulations.SimulationsApiRequest) : Promise<v2.skill.simulations.SimulationsApiResponse> {
                const apiResponse: ApiResponse = await this.callSimulateSkillV2(skillId, stage, simulationsApiRequest);
                return apiResponse.body as v2.skill.simulations.SimulationsApiResponse;
        }
        /**
         * This API gets the result of a previously executed simulation. A successful response will contain the status of the executed simulation. If the simulation successfully completed, the response will also contain information related to skill invocation. In cases where requests to this API results in an error, the response will contain an error code and a description of the problem. In cases where the simulation failed, the response will contain a status attribute indicating that a failure occurred and details about what was sent to the skill endpoint. Note that simulation results are stored for 10 minutes. A request for an expired simulation result will return a 404 HTTP status code. 
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         * @param {string} simulationId Id of the simulation.
         */
        async callGetSkillSimulationV2(skillId : string, stage : string, simulationId : string) : Promise<ApiResponse> {
            const __operationId__ = 'callGetSkillSimulationV2';
            // verify required parameter 'skillId' is not null or undefined
            if (skillId == null) {
                throw new Error(`Required parameter skillId was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'stage' is not null or undefined
            if (stage == null) {
                throw new Error(`Required parameter stage was null or undefined when calling ${__operationId__}.`);
            }
            // verify required parameter 'simulationId' is not null or undefined
            if (simulationId == null) {
                throw new Error(`Required parameter simulationId was null or undefined when calling ${__operationId__}.`);
            }

            const queryParams : Array<{ key : string, value : string }> = [];

            const headerParams : Array<{ key : string, value : string }> = [];
            headerParams.push({ key : 'User-Agent', value : this.userAgent });


            const pathParams : Map<string, string> = new Map<string, string>();
            pathParams.set('skillId', skillId);
            pathParams.set('stage', stage);
            pathParams.set('simulationId', simulationId);

            const accessToken : string = await this.lwaServiceClient.getAccessToken();
            const authorizationValue = "Bearer " + accessToken;
            headerParams.push({key : "Authorization", value : authorizationValue});

            let resourcePath : string = "/v2/skills/{skillId}/stages/{stage}/simulations/{simulationId}";

            const errorDefinitions : Map<number, string> = new Map<number, string>();
            errorDefinitions.set(200, "Successfully retrieved skill simulation information.");
            errorDefinitions.set(401, "The auth token is invalid/expired or doesn&#39;t have access to the resource.");
            errorDefinitions.set(403, "API user does not have permission or is currently in a state that does not allow calls to this API. ");
            errorDefinitions.set(404, "The specified skill or simulation does not exist. The error response will contain a description that indicates the specific resource type that was not found. ");
            errorDefinitions.set(429, "API user has exceeded the permitted request rate.");
            errorDefinitions.set(500, "Internal service error.");
            errorDefinitions.set(503, "Service Unavailable.");

            return this.invoke("GET", this.apiConfiguration.apiEndpoint, resourcePath,
                    pathParams, queryParams, headerParams, null, errorDefinitions);
        }
        
        /**
         * This API gets the result of a previously executed simulation. A successful response will contain the status of the executed simulation. If the simulation successfully completed, the response will also contain information related to skill invocation. In cases where requests to this API results in an error, the response will contain an error code and a description of the problem. In cases where the simulation failed, the response will contain a status attribute indicating that a failure occurred and details about what was sent to the skill endpoint. Note that simulation results are stored for 10 minutes. A request for an expired simulation result will return a 404 HTTP status code. 
         * @param {string} skillId The skill ID.
         * @param {string} stage Stage for skill.
         * @param {string} simulationId Id of the simulation.
         */
        async getSkillSimulationV2(skillId : string, stage : string, simulationId : string) : Promise<v2.skill.simulations.SimulationsApiResponse> {
                const apiResponse: ApiResponse = await this.callGetSkillSimulationV2(skillId, stage, simulationId);
                return apiResponse.body as v2.skill.simulations.SimulationsApiResponse;
        }
    }
}

export namespace services {

    /**
     * Helper class that instantiates an ServiceClient implementation automatically resolving its
     * required ApiConfiguration.
     * @export
     * @class ServiceClientFactory
     */
    export class ServiceClientFactory {
        protected apiConfiguration : ApiConfiguration;

        constructor(apiConfiguration : ApiConfiguration) {
            this.apiConfiguration = apiConfiguration;
        }
    }
}

