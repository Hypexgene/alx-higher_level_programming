#!/bin/bash
# Send request to 0.0.0.0:5000/catch_me and get "You got me!" response message
curl -sL 0.0.0.0:5000/catch_me_3 -X PUT -H "Origin:School" -d "user_id=98"
