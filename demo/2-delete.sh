#!/bin/bash
# Send DELETE request to URL passed as first argument and displays HTTPS response
curl -s -X DELETE "${1}"
