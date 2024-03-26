#!/bin/bash
# Sends request to URL, and displays byte size of HTTP response
curl -s "${1}" | wc -c
