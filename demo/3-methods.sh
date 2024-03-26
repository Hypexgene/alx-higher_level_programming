#!/bin/bash
# Display all HTTP methods URL's server will accept
curl -s -I "${1}" | grep "^Allow: .*" | cut -d " " -f 2-
