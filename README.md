
setup


lint travis yml
docker run -v $(pwd):/project --rm traviscli lint .travis.yml

docker run -it -v $(pwd):/project --rm --entrypoint=/bin/sh traviscli
travis login --github-token TOKEN
travis env set AWS_ACCESS_KEY_ID <access key> --repo oversizedhat/s3deploy
travis env set AWS_SECRET_ACCESS_KEY <secret access key> --repo oversizedhat/s3deploy