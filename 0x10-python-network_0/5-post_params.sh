#!/bin/bash
# Send POST request to passed URL, and display HTTPS response
curl -s -d "email=test@gmail.com&subject=I will always be here for PLD" "${1}"
