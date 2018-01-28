How to setup, install and test the project the project...
1) run npm install
2) cd userAuth
3) node app.js 
    See the response in console like this---

    sequelize deprecated String based operators are now deprecated. Please use Symbol based operators for better security, read more at http://docs.sequelizejs.com/manual/tutorial/querying.html#operators node_modules\sequelize\lib\sequelize.js:237:13
    API running on localhost:3000
    Executing (default): CREATE TABLE IF NOT EXISTS "UserTests" ("id"   SERIAL , "name" VARCHAR(255) NOT NULL, "password" VARCHAR(255) NOT NULL, "email" VARCHAR(255) NOT NULL UNIQUE, "telephone" VARCHAR(255) NOT NULL, UNIQUE ("email"), PRIMARY KEY ("id"));
    Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'UserTests' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;
4) Test the Apis
4.a) Open Postman or any rest client tool.
b) Trigger a POST call on URL -- "http://localhost:3000/api/register" (for registering the user)
    PAYLOAD must have  attributes as below -
        {
            "name":"Shashi",
            "email":"shashi.srivas@gmail.com",
            "password" :"shashi-auth-23",
            "telephone":"+917583027222"
        }
c) Now Check if login Api working successfully.
    Trigger a POST  call on URL -- "http://localhost:3000/api/login"
    PAYLOAD must a following two attributes as below-
        {
            "email":"shashi.srivas@gmail.com",
            "password" :"shahshi-auth-23",
        }


ENJOYYYYYYYYYYYYYYYYYYYYYYYY the sample.......................