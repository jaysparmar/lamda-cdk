type Config = {
    env: string,
    stackId: string,
    createNewBucket: boolean,
    newBucketName: string
}

export const config: Config =  {
    env: "dev",
    stackId: "image-optimization-stack",
    createNewBucket: true,
    newBucketName: "zinzuu-dev-bucket"
}