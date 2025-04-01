#!/usr/bin/env node

import chalk from "chalk";
import { Command } from "commander";

const program= new Command()

program
    .name("A CLI Project")
    .description(chalk.blue("A demo as of now!"))
    .version("1.0.0")
    .option("-t --type <type>","Type Definition","default")

program
    .command("create")
    .description("creates something lol!")
    .action(()=>{
        console.log("created something!!")
    })

program.parse();