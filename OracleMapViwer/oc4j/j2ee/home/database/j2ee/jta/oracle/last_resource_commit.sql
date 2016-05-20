DROP TABLE OC4J_TX_RLRC_LOG;
CREATE TABLE OC4J_TX_RLRC_LOG
(
id  RAW(64) not null
)
PARTITION BY HASH (id)
PARTITIONS 43
STORE IN (SYSAUX)
initrans 30
pctfree 30
STORAGE (INITIAL 1M NEXT 1M PCTINCREASE 0);
.
CREATE UNIQUE INDEX OC4J_RLRC_IDX ON OC4J_TX_RLRC_LOG (id) LOCAL
STORE IN (SYSAUX)
INITRANS 30
STORAGE (INITIAL 1M NEXT 1M PCTINCREASE 0);
 
