const testApi = () => {
    const retJSON = {};
    try{
    if(!err)
    {
        retJSON.push({
            "Message":"True"
        })
        return retJSON;
    }
    else
    {
        console.log(err);
    }
}
catch(err)
{
    console.log(err);
}
}

exports.TestApi = testApi;