# 40K List Builder 8e #

### Please Note ###
* Warhammer 40K and associated content is the property of Games Workshop.
* This project is intended only for personal use.
* This repo is only public so that I can host the content on github pages. If you wish to clone this then please ensure that you have a copy of the relevant rule book.
* This project is far from complete and only gains traction occassionally.
* I cannot guarantee that the data represented in the app is valid as I have not been keeping up to date with the latest changes from Games Workshop.

A list building web app for Warhammer 40K 8th edition.   
I started this project because I did not like the alternatives - the official list builder (Combat Roster) is disgustingly under-featured and the free alternatives are either convoluted, not user-friendly, or just as under-featured.

## Supported Factions ##
* Craftworlds
* Harlequins
* Ynnari

The plan was to make it work for all the factions, but trying to convert all of the data into rule-based structures that are common across all factions is a real mission. So I started with the ones that I personally use as I understand them better.

## Outstanding work/Work to be done ##
* Spells
* Strategems
* Warlord traits
* Detachments
* Need a way of easily identifying which wargear belongs to which model in a unit
* Full faction support
* Print view - points header obscures top row of table

## Installing/Running the project ##
1. Clone repo
2. Open a terminal within the repo
3. run `npm i` to install dependencies
4. run `gulp watch` to build and launch the project while watching for changes

It's worth noting that GitHub has detected various security vulnerabilities within the project's dependencies.
