#!/bin/bash
# Send JSON POST request to given URL with given JSON file
curl -s "$1" -d "@$2" -X POST -H "Content-Type: application/json"
