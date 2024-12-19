#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ImageOptimizationStack } from '../lib/image-optimization-stack';
import * as readlineSync from 'readline-sync';
import {Stack} from "aws-cdk-lib";



const app = new cdk.App();

type StackEnviornment = {
    env: string,
    stackId: string,
}

function getStackData(): StackEnviornment{


    function getInput(prompt: string, validationRegex: RegExp, errorMessage: string): string {
        let input: string;
        do {
            input = readlineSync.question(prompt);
            if (!validationRegex.test(input)) {
                console.error(errorMessage);
            }
        } while (!validationRegex.test(input));
        return input;
    }

    function confirmAction(prompt: string): boolean {
        const result: boolean | string = readlineSync.keyInYN(prompt);
        if (typeof result === "boolean") {
            return result;
        } else {
            console.error("Unexpected input. Please respond with 'Y' or 'N'.");
            return confirmAction(prompt);
        }
    }


    let envName: string = getInput(
        "Environment name: ",
        /^[a-zA-Z0-9]+$/,
        "Only numbers and alphabets are supported. Try again."
    );

    let stackId: string = Date.now().toString();

    if (!confirmAction(`Unique stack ID: ${stackId}. Confirm?`)) {
        stackId = getInput(
            "Unique AWS stack ID: ",
            /^[a-zA-Z0-9]+$/,
            "Only numbers and alphabets are supported. Try again."
        );
    }

    console.table([{ Environment: envName, "Stack ID": stackId }]);
    if (!confirmAction(`Confirm?`)){
        return getStackData()
    }
    return {
        env: envName,
        stackId: stackId,
    }

}

const stackData: StackEnviornment = getStackData()


new ImageOptimizationStack(app, `${stackData.env}-${stackData.stackId}`, {

});


