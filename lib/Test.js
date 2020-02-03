const testApi = () => {
try
{
const retJSON = {
    "Message":"True"
}
    return retJSON
}
catch(error)
{
    console.log(error);
}
}
exports.TestApi = testApi;