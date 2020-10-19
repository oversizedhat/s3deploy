## Boilerplate for npm project with s3 deploy using Travis CI

[![Build Status](https://travis-ci.org/oversizedhat/s3deploy-travisci.svg?branch=master)](https://travis-ci.org/oversizedhat/s3deploy-travisci)

### Setup
1. Connect github repo with Travis, and create neccessary env vars in Travis project allowing deploys to AWS S3
```
docker run -it -v $(pwd):/project -e GITHUB_TOKEN=$GITHUB_TOKEN -e AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID -e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY --rm --entrypoint=/bin/sh traviscli
/project # travis login --github-token $GITHUB_TOKEN
/project # travis enable
/project # travis env set AWS_ACCESS_KEY_ID $AWS_ACCESS_KEY --repo oversizedhat/s3deploy
/project # travis env set AWS_SECRET_ACCESS_KEY $AWS_SECRET_ACCESS_KEY --repo oversizedhat/s3deploy
```
2. Make sure deploy info is correct in .travis.yml (bucket name, region etc)