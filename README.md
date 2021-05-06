# Download Files from Airtable

Get all this information from Airtable's API docs
```
git clone https://github.com/falky97/download-files-from-airtable.git airtable-download
cd airtable-download

touch .env

cat << EOF > .env
AIRTABLE_API_KEY=            # should start with key****
AIRTABLE_BASE_ID=            # should start with app****
#BASE_NAME=                   # database name
#VIEW_NAME=                   # specific view name in the base
#COLUMN_NAME=                 # the column you want to download data from
EOF

code .
open .env
```

Note, this currently only downloads the first file from a row

```
npm run get_urls
npm run download
```
