const {MongoClient} = require('mongodb');

async function main(){
    // create a constant for our connection URI
    const uri = "mongodb+srv://<username>:<password>@<cluster_url>/sample_airbnb?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try{
        // connect to mongodb cluster
        await client.connect();

        // 
        await listDatabases(client);

    } catch(e){
        console.error(e);
    } finally{
        await client.close(); 
    }

}

main().catch(console.error); 

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases: ");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`)); 
}; 

