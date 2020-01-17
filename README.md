# CBS health data visualization

![badge](https://img.shields.io/github/languages/top/tomekgora/cbs-health-data-client)

### Table of contents
- [Introduction](#introduction)
- [Built With](#built-with)
- [Features](#features)
- [Planned Features](#planned-features)
- [Installation](#installation)

### Introduction
This App visualizes a subset of the "Health, lifestyle, health care use and supply, causes of death; from 1900" datasrt 
(37852eng) for the years 1975-2019. The user can make a choice from a list of diseases belonging to the "notifiable infectious diseases" (18 series) topic group. Based on the choices the App fetches the appropriate data series from the oData CBS API via the server {link here} and generates a responsive line chart.

### Built With
- React-Redux
- Nivo
- Material-UI 

### Features
 - visualize data from the 37852eng dataset of CBS (https://opendata.cbs.nl/)
 - simple data series selection 

### Planned Features
 - view multiple datasets available via the oData API
 - select data series from full set of dataset topics
 - dynamically generate selection lists from retrieved metadata
 - offer a selection of graphing options (bar, stream, heatmap, stacking)
 - allow users to save their queries for later review
 - allow users to create and join groups
 - allow users to share their data visualizations with other users via groups

### Installation
#### Client
1. Clone the repo
```sh
git clone https://github.com/tomekgora/cbs-health-data-client.git
```
2. Install NPM packages
```sh
npm install
```
3. Specify port with ENV_PORT envorionmental variable
```sh 
ENV_PORT || 3000
```

4. To run the client locally
```sh
npm start
```

#### Server

### Deployment


