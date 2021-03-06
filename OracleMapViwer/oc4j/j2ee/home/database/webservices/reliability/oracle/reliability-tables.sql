CREATE TABLE RM_SERVER_MESSAGE_INFO (
GROUP_ID varchar(150),
SEQUENCE_NUM number,
TIMESTAMP number,
EXPIRY_TIME number,
RETRY_COUNT number,
ACK_STATUS varchar(50),
PROCESS_STATUS varchar(50),
REPLY_TO_URL varchar(150),
ENDPOINT_ADDRESS varchar(150),
URL_PATTERN varchar(150),
REPLY_PATTERN varchar(150),
FAULT_CODE varchar(50),
LAST_UPDATE number,
CONTENT_TYPE varchar(150),
SOAP_ACTION varchar(150),
MESSAGE BLOB,
PIPELINE_CONFIG BLOB,
CONSTRAINT RM_SERVER_MESSAGE_INFO_PK PRIMARY KEY (GROUP_ID, SEQUENCE_NUM));

CREATE TABLE RM_SERVER_GROUP_INFO (
GROUP_ID varchar(150) PRIMARY KEY,
SEQUENCE_NUM number ,
LAST_UPDATE number ,
TIMESTAMP number ,
GROUP_EXPIRY_TIME number ,
GROUP_MAX_IDLE number ,
REPLY_TO_URL varchar(150),
ENDPOINT_ADDRESS varchar(150));

CREATE TABLE RM_CLIENT_MESSAGE_INFO (
GROUP_ID varchar(150),
SEQUENCE_NUM number,
TIMESTAMP number,
EXPIRY_TIME number,
RETRY_COUNT number,
ACK_STATUS varchar(50),
PROCESS_STATUS varchar(50),
REPLY_TO_URL varchar(150),
ENDPOINT_ADDRESS varchar(150),
URL_PATTERN varchar(150),
REPLY_PATTERN varchar(50),
FAULT_CODE varchar(50),
LAST_UPDATE number,
CONTENT_TYPE varchar(150),
SOAP_ACTION varchar(150),
MESSAGE BLOB,
PIPELINE_CONFIG BLOB,
CONSTRAINT RM_CLIENT_MESSAGE_INFO_PK PRIMARY KEY (GROUP_ID, SEQUENCE_NUM));

CREATE TABLE RM_CLIENT_GROUP_INFO (
GROUP_ID varchar(150) PRIMARY KEY,
SEQUENCE_NUM number ,
LAST_UPDATE number ,
TIMESTAMP number ,
GROUP_EXPIRY_TIME number ,
GROUP_MAX_IDLE number ,
REPLY_TO_URL varchar(150),
ENDPOINT_ADDRESS varchar(150));


