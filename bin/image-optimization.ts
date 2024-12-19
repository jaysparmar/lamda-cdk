#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ImageOptimizationStack } from '../lib/image-optimization-stack';
import * as readlineSync from 'readline-sync';
import {Stack} from "aws-cdk-lib";



const app = new cdk.App();

type StackDetails = {
    name: string,
    bucketName: string,
}

let envName: string = readlineSync.question("Enviornment name:")


let stackId: string = Date.now().toString()

let stackCheck = readlineSync.keyInYN(`Unique stack ID: ${stackId}. Confirm ?`)

console.log(stackId)
// let stackId: string = readlineSync.question("Stack ID:")

// new ImageOptimizationStack(app, envName, {
//
// });

