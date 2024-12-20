#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ImageOptimizationStack } from '../lib/image-optimization-stack';
import {Stack} from "aws-cdk-lib";

import {config} from "../lib/config";


const app = new cdk.App();



new ImageOptimizationStack(app, `${config.env}-${config.stackId}`, {

});


