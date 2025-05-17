import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    try {
        console.log("Received request");

        const body = await request.json().catch(() => null);
        console.log("Parsed body:", body);

        if (!body || !body.url || !body.shorturl) {
            console.log("Invalid request data");
            return Response.json({ success: false, error: true, message: "Invalid request data" }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("tinyurlx");
        const collection = db.collection("url");

        // Check if the short url already exists
        const doc = await collection.findOne({ shorturl: body.shorturl });
        if (doc) {
            console.log(" URL already exists!");
            return Response.json({ success: false, error: true, message: "URL already exists!" });
        }

        const result = await collection.insertOne({
            url: body.url,
            shorturl: body.shorturl
        });

        console.log("Short URL generated:", result);
        return Response.json({ success: true, error: false, message: "URL Generated Successfully" });

    } catch (error) {
        console.error("Error in /api/generate:", error);
        return Response.json({ success: false, error: true, message: "Internal Server Error" }, { status: 500 });
    }
}








// import clientPromise from "@/lib/mongodb"

// export async function POST(request) {

//     const body = await request.json() 
//     const client = await clientPromise;
//     const db = client.db("tinyurlx")
//     const collection = db.collection("url")

//     // Check if the short url already exists - coz there cant be 2 i.e. facebook.com and google.com both cannot have shorturl name as abcd
//     const doc = await collection.findOne({shorturl: body.shorturl})
//     if(doc){
//         return Response.json({success: false, error: true,  message: 'URL already exists!' })
//     }

//     const result = await collection.insertOne({
//         url: body.url,
//         shorturl: body.shorturl
//     })

//     return Response.json({success: true, error: false,  message: 'URL Generated Successfully' })
//   }











