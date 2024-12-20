type Config = {
    env: string,
    stackId: string,
    createNewBucket: boolean,
    newBucketName: string
}




export const config: Config =  {
    env: "dev",
    stackId: "dev-stack",
    createNewBucket: true,
    newBucketName: "zinz-dev-bucket"
}